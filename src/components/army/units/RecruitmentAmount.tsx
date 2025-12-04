// components/RecruitmentAmount.jsx

import { useState, useMemo } from "react";
// Adjust paths
import { usePlayerTownsStore } from "../../../stores/gameplay/playerTownsStore";
import type {
  UnitCost,
  ResourceName,
  UnitName,
  Town,
} from "../../../types/townTypes";
import updateTownData from "../../../utils/server/updateTownData";
// Import the updated Supabase function

type RecruitmentAmountProps = {
  unitType: UnitName;
  unitCost: UnitCost;
};

export default function RecruitmentAmount({
  unitType,
  unitCost,
}: RecruitmentAmountProps) {
  const { activeTown, setActiveTown, setTowns, towns } = usePlayerTownsStore();
  const [recruitAmount, setRecruitAmount] = useState(0);

  // Define a mapping for upfront recruitment costs to actual town resources
  const UPFRONT_RECRUITMENT_MAP: Record<
    keyof UnitCost,
    ResourceName | undefined
  > = {
    wood: "wood",
    metal: "metal",
    foodConsumption: undefined,
    waterConsumption: undefined,
  };

  // Define a mapping for ongoing consumption costs to actual town resources' perHour
  const ONGOING_CONSUMPTION_MAP: Record<
    keyof UnitCost,
    ResourceName | undefined
  > = {
    wood: undefined,
    metal: undefined,
    foodConsumption: "food",
    waterConsumption: "water",
  };

  // Calculate max recruitable units based *only* on upfront resource costs (wood, metal)
  const maxRecruitable = useMemo(() => {
    if (!activeTown) return 0;

    let maxUnits = Infinity;

    // Check wood cost
    if (unitCost.wood !== undefined) {
      const costPerUnit = unitCost.wood;
      const availableAmount = activeTown.resources.wood?.amount || 0;
      if (costPerUnit > 0) {
        maxUnits = Math.min(
          maxUnits,
          Math.floor(availableAmount / costPerUnit)
        );
      }
    }

    // Check metal cost
    if (unitCost.metal !== undefined) {
      const costPerUnit = unitCost.metal;
      const availableAmount = activeTown.resources.metal?.amount || 0;
      if (costPerUnit > 0) {
        maxUnits = Math.min(
          maxUnits,
          Math.floor(availableAmount / costPerUnit)
        );
      }
    }

    return maxUnits === Infinity ? 0 : maxUnits;
  }, [activeTown, unitCost.wood, unitCost.metal]);

  const handleRecruit = async () => {
    // <--- ADDED `async` here
    if (!activeTown || recruitAmount <= 0 || recruitAmount > maxRecruitable) {
      console.warn("Invalid recruitment amount or insufficient resources.");
      return;
    }

    // --- Create a deep copy of activeTown to ensure immutability ---
    const updatedTown: Town = {
      ...activeTown,
      resources: {
        ...activeTown.resources,
      },
      barracks: {
        ...activeTown.barracks,
        army: { ...activeTown.barracks.army },
      },
      tradeStation: {
        // Also make a deep copy of tradeStation as it's passed to updateTownData
        ...activeTown.tradeStation,
        tradeRouts: [...activeTown.tradeStation.tradeRouts],
      },
    };

    let hasEnoughResources = true;

    // 1. Deduct *upfront* resources (wood, metal) from the copied town
    for (const costKey in UPFRONT_RECRUITMENT_MAP) {
      const resourceName = UPFRONT_RECRUITMENT_MAP[costKey as keyof UnitCost];
      const costPerUnit = unitCost[costKey as keyof UnitCost];

      if (resourceName && costPerUnit !== undefined && costPerUnit > 0) {
        const totalCost = costPerUnit * recruitAmount;
        const currentResourceAmount =
          updatedTown.resources[resourceName]?.amount || 0;

        if (currentResourceAmount < totalCost) {
          hasEnoughResources = false;
          break;
        }
        updatedTown.resources[resourceName] = {
          ...updatedTown.resources[resourceName],
          amount: currentResourceAmount - totalCost,
        };
      }
    }

    if (!hasEnoughResources) {
      console.warn("Not enough resources to recruit these units!");
      return;
    }

    // 2. Adjust *ongoing* resource consumption (food, water perHour)
    for (const costKey in ONGOING_CONSUMPTION_MAP) {
      const resourceName = ONGOING_CONSUMPTION_MAP[costKey as keyof UnitCost];
      const consumptionPerUnit = unitCost[costKey as keyof UnitCost];

      if (
        resourceName &&
        consumptionPerUnit !== undefined &&
        consumptionPerUnit > 0
      ) {
        const totalConsumptionChange = consumptionPerUnit * recruitAmount;

        if (updatedTown.resources[resourceName]) {
          updatedTown.resources[resourceName] = {
            ...updatedTown.resources[resourceName],
            perHour:
              (updatedTown.resources[resourceName]?.perHour || 0) -
              totalConsumptionChange,
          };
        } else {
          console.warn(
            `Resource '${resourceName}' not found in activeTown.resources, cannot update perHour.`
          );
        }
      }
    }

    // 3. Add units to barracks in the copied town
    const existingUnit = updatedTown.barracks.army[unitType];
    updatedTown.barracks.army[unitType] = {
      ...existingUnit,
      unitType: unitType,
      amount: (existingUnit?.amount || 0) + recruitAmount,
      stats: existingUnit?.stats || {
        attack: 0,
        defense: 0,
        health: 0,
        bonusDmg: 0,
      },
      cost: unitCost,
    };

    // --- Update Zustand Store (Optimistic Update) ---
    setActiveTown(updatedTown);
    const updatedTowns = towns.map((town) =>
      town.id === updatedTown.id ? updatedTown : town
    );
    setTowns(updatedTowns);

    // --- Persist to Database ---
    try {
      await updateTownData(
        // <--- CALL YOUR UPDATED SUPABASE FUNCTION HERE
        updatedTown.id,
        updatedTown.tradeStation,
        updatedTown.resources,
        updatedTown.barracks // Pass barracks
      );
      console.log(`Town ${updatedTown.name} successfully updated in database.`);
    } catch (error) {
      console.error("Failed to save recruitment changes to database:", error);
      // Optional: Rollback Zustand state here if the database update fails
      // For a simpler setup, you might just log the error and accept temporary inconsistency
    }

    // Reset UI state
    setRecruitAmount(0);
  };

  const handleIncrement = () => {
    setRecruitAmount((prev) => Math.min(maxRecruitable, prev + 1));
  };

  const handleDecrement = () => {
    setRecruitAmount((prev) => Math.max(0, prev - 1));
  };

  const handleMax = () => {
    setRecruitAmount(maxRecruitable);
  };

  // Calculate total cost for the recruitAmount display
  const totalCostDisplay = useMemo(() => {
    return Object.entries(unitCost)
      .filter(([, costValue]) => costValue !== undefined && costValue > 0)
      .map(([costKey, singleUnitCost]) => {
        const totalCost = singleUnitCost * recruitAmount;
        if (costKey === "foodConsumption") return `${totalCost} food (upkeep)`;
        if (costKey === "waterConsumption")
          return `${totalCost} water (upkeep)`;
        return `${totalCost} ${costKey}`;
      })
      .join(", ");
  }, [unitCost, recruitAmount]);

  const isRecruitDisabled =
    recruitAmount <= 0 || recruitAmount > maxRecruitable;

  return (
    <div className="flex flex-col gap-3">
      {/* Amount to Recruit Input with +/- and Max buttons */}
      <div className="flex items-center space-x-2">
        <p className="text-sm text-gray-600 font-medium whitespace-nowrap">
          Amount to Recruit:
        </p>
        <button
          onClick={handleDecrement}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={recruitAmount <= 0}
          aria-label="Decrease recruitment amount"
        >
          -
        </button>
        <input
          type="number"
          min="0"
          max={maxRecruitable}
          value={recruitAmount}
          onChange={(e) => {
            let value = parseInt(e.target.value, 10);
            if (isNaN(value) || value < 0) value = 0;
            if (value > maxRecruitable) value = maxRecruitable;
            setRecruitAmount(value);
          }}
          className="w-20 text-center border py-1 px-2 appearance-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
          aria-label="Number of units to recruit"
        />
        <button
          onClick={handleIncrement}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={recruitAmount >= maxRecruitable}
          aria-label="Increase recruitment amount"
        >
          +
        </button>
        <button
          onClick={handleMax}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={maxRecruitable <= 0}
        >
          Max
        </button>
      </div>

      {/* Total Recruitment Cost and Feedback */}
      <div className="text-sm text-gray-600">
        <p>
          Total Cost for {recruitAmount} {unitType}(s):{" "}
          <span className="font-medium">{totalCostDisplay}</span>
        </p>
        {recruitAmount > maxRecruitable && (
          <p className="text-red-600">
            Cannot recruit more than {maxRecruitable} units with current
            resources.
          </p>
        )}
      </div>

      {/* Recruit Button */}
      <button
        onClick={handleRecruit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isRecruitDisabled}
      >
        Recruit {recruitAmount > 0 ? recruitAmount : ""} {unitType}(s)
      </button>
    </div>
  );
}
