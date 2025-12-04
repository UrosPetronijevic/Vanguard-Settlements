// components/Unit.jsx (or wherever you put your Unit component)

import type { Unit } from "../../../types/townTypes";
import RecruitmentInfo from "./RecruitmentInfo";
import UnitStats from "./UnitStats";

import Spearman from "../../../assets/images/units/sentient/general/Spearman-volcano-unit-2.png";
import Swordman from "../../../assets/images/units/sentient/general/Swordman-volcano-unit-2.1.png";
import Horseman from "../../../assets/images/units/sentient/general/winged-hussar-1.jpg";

// This data would typically come from a global config or an API
// For now, we'll define it here.

type UnitProps = {
  unitData: Unit;
};

export default function Unit({ unitData }: UnitProps) {
  const { unitType, amount, stats, cost } = unitData;

  // For demonstration, let's assume a default image URL pattern
  let unitImage: string | undefined; // Explicitly type unitImage as string

  // Refactored unitImage assignment using a switch statement
  switch (unitType) {
    case "horseman":
      unitImage = Horseman;
      break;
    case "spearman":
      unitImage = Spearman;
      break;
    case "swordman": // Assuming "swordman" is your default or another specific type
      unitImage = Swordman;
      break;
    // Add more cases for other UnitName types here if you have specific images
    // case "archer":
    //   unitImage = ArcherImage;
    //   break;
    default:
      // Fallback for unknown unit types or if no specific image is provided
      // You might want a generic "no image" placeholder here
      unitImage = undefined;
      break;
  }
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md bg-white">
      {/* Unit Image */}

      <img
        src={unitImage}
        alt={unitType}
        className="w-70 h-70 object-cover rounded-full mx-auto mb-2"
      />

      {/* Unit Name */}
      <h3 className="text-xl font-semibold text-center mb-2">
        {unitType.charAt(0).toUpperCase() + unitType.slice(1)}
      </h3>

      {/* Unit Stats */}
      <UnitStats stats={stats} />

      {/* Recruitment Info */}
      <RecruitmentInfo cost={cost} amount={amount} unitType={unitType} />
    </div>
  );
}
