import type { ResourceName, Town, TradeRoute } from "../types/townTypes";

export default function calculateTownPercent(
  activeTown: Town,
  tradeReceiver: Town,
  resource: ResourceName, // This is the NEW resource for the NEW trade
  percent: number, // This is the NEW percent for the NEW trade
  routIndex: number,
  oldReceiverTown: Town | null
): {
  updatedActiveTown: Town;
  updatedTradeReceiver: Town;
  updatedOldReceiverTown: Town | null;
} {
  // --- Input Validation (Initial) ---
  if (
    !resource ||
    percent === null ||
    typeof percent !== "number" ||
    routIndex < 0
  ) {
    console.error(
      "calculateTownPercent: Invalid input for resource, percent, or routIndex."
    );
    return {
      updatedActiveTown: activeTown,
      updatedTradeReceiver: tradeReceiver,
      updatedOldReceiverTown: oldReceiverTown,
    };
  }

  const currentRouteBeingEdited = activeTown.tradeStation.tradeRouts[routIndex];

  // --- Validate the current route being edited ---
  if (!currentRouteBeingEdited) {
    console.error(
      `calculateTownPercent: No existing route found at routIndex ${routIndex} in activeTown.`
    );
    return {
      updatedActiveTown: activeTown,
      updatedTradeReceiver: tradeReceiver,
      updatedOldReceiverTown: oldReceiverTown,
    };
  }

  // --- Initialize final (potentially adjusted) active town ---
  let finalActiveTown: Town = { ...activeTown }; // Start with a copy of activeTown

  // --- Step 1: Reverse effects of the OLD route on the OLD receiver (if any) ---
  let finalOldReceiverTown: Town | null = null;

  if (
    oldReceiverTown &&
    currentRouteBeingEdited.receiver &&
    currentRouteBeingEdited.resource
  ) {
    const oldResourceName = currentRouteBeingEdited.resource; // Resource from the OLD route
    const oldReceiverResource = oldReceiverTown.resources[oldResourceName];

    if (oldReceiverResource && oldReceiverResource.percentAdd > 0) {
      const oldPercentAddAmount = oldReceiverResource.percentAdd;

      finalOldReceiverTown = {
        ...oldReceiverTown,
        resources: {
          ...oldReceiverTown.resources,
          [oldResourceName]: {
            ...oldReceiverResource,
            percentAdd: 0,
            perHour: oldReceiverResource.perHour - oldPercentAddAmount,
          },
        },
      };
      console.log(
        `Reversed effects on old receiver (${oldReceiverTown.name}) for resource ${oldResourceName}: removed ${oldPercentAddAmount} from perHour.`
      );
    }
  }

  // --- Step 1.5: Reverse effects of the OLD route on the ACTIVE town (sender) itself ---
  // Only if the currentRouteBeingEdited actually had a resource and a percentSub effect
  if (currentRouteBeingEdited.resource && currentRouteBeingEdited.percent > 0) {
    const oldResourceName = currentRouteBeingEdited.resource; // Resource from the OLD route
    const oldActiveResource = activeTown.resources[oldResourceName]; // Resource on the activeTown

    if (oldActiveResource && oldActiveResource.percentSub > 0) {
      const oldPercentSubAmount = oldActiveResource.percentSub; // This is the amount to undo

      finalActiveTown = {
        ...finalActiveTown, // Build on the previous state of finalActiveTown (initially a copy of activeTown)
        resources: {
          ...finalActiveTown.resources, // Copy current resources state of finalActiveTown
          [oldResourceName]: {
            ...oldActiveResource, // Copy properties of the OLD resource
            percentSub: 0, // Reset percentSub for the old resource
            perHour: oldActiveResource.perHour + oldPercentSubAmount, // Add back the old percentSub to perHour
          },
        },
      };
      console.log(
        `Reversed effects on active town (${activeTown.name}) for resource ${oldResourceName}: added ${oldPercentSubAmount} back to perHour.`
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // After Step 1.5, `finalActiveTown` now has its resources in a "clean" state before applying the NEW trade.
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // --- Step 2: Calculate new transfer percentage for the NEW trade ---
  // Use `finalActiveTown` for calculations as it reflects the state after undoing previous trade effects
  const currentActiveResourceForNewTrade = finalActiveTown.resources[resource]; // This 'resource' is the NEW one

  // Validate that the NEW resource actually exists on the active town
  if (!currentActiveResourceForNewTrade) {
    console.error(
      `calculateTownPercent: New resource "${resource}" not found in active town's resources.`
    );
    return {
      updatedActiveTown: activeTown, // Return original if new resource is invalid
      updatedTradeReceiver: tradeReceiver,
      updatedOldReceiverTown: finalOldReceiverTown,
    };
  }

  const newTransferAmount =
    currentActiveResourceForNewTrade.perHour * (percent / 100);
  console.log("NEW TRANSFER AMOUNT IS", newTransferAmount);

  // --- Step 3: Define new TradeRoute object for the sender ---
  const newSenderRoute: TradeRoute = {
    sender: activeTown.id, // ActiveTown ID, not finalActiveTown (ID doesn't change)
    receiver: tradeReceiver.id,
    resource: resource,
    percent: percent,
  };

  // --- Step 4: Apply NEW trade effects to `finalActiveTown` to get `updatedActiveTown` ---
  const updatedActiveTown: Town = {
    ...finalActiveTown, // Build on the state that has old effects undone
    resources: {
      ...finalActiveTown.resources, // Copy current resources state
      [resource]: {
        ...currentActiveResourceForNewTrade, // Copy existing properties of the NEW resource
        percentSub: newTransferAmount,
        perHour: currentActiveResourceForNewTrade.perHour - newTransferAmount,
      },
    },
    tradeStation: {
      ...finalActiveTown.tradeStation, // Copy existing tradeStation properties
      tradeRouts: finalActiveTown.tradeStation.tradeRouts.map((route, index) =>
        index === routIndex ? newSenderRoute : route
      ),
    },
  };

  // --- Step 5: Update tradeReceiver (new receiver) with NEW trade effects ---
  const newReceiverResource = tradeReceiver.resources[resource];

  // Validate that the NEW resource actually exists on the tradeReceiver
  if (!newReceiverResource) {
    console.error(
      `calculateTownPercent: New resource "${resource}" not found in trade receiver's resources.`
    );
    return {
      updatedActiveTown: activeTown, // Return original if new resource is invalid
      updatedTradeReceiver: tradeReceiver,
      updatedOldReceiverTown: finalOldReceiverTown,
    };
  }

  const updatedTradeReceiver: Town = {
    ...tradeReceiver, // Copy top-level properties
    resources: {
      ...tradeReceiver.resources, // Copy all existing resources object
      [resource]: {
        ...newReceiverResource, // Copy existing properties of the NEW resource
        percentAdd: newTransferAmount,
        perHour: newReceiverResource.perHour + newTransferAmount,
      },
    },
    tradeStation: {
      ...tradeReceiver.tradeStation,
      // No specific tradeRouts update needed on the receiver based on current understanding
    },
  };

  return {
    updatedActiveTown,
    updatedTradeReceiver,
    updatedOldReceiverTown: finalOldReceiverTown,
  };
}
