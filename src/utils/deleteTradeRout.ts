import type { ResourceName, Town, TradeRoute } from "../types/townTypes";

export default function deleteTradeRout(
  activeTown: Town,
  routIndex: number,
  allTowns: Town[]
): {
  updatedActiveTown: Town;
  updatedReceiverTown: Town | null;
} {
  // --- Input Validation ---
  if (routIndex < 0 || routIndex >= activeTown.tradeStation.tradeRouts.length) {
    console.error(
      `deleteTradeRout: Invalid routIndex ${routIndex} for activeTown. Trade route not modified.`
    );
    return {
      updatedActiveTown: activeTown, // Return original if index is invalid
      updatedReceiverTown: null,
    };
  }

  const routeToDelete = activeTown.tradeStation.tradeRouts[routIndex];
  let amountToSubtractFromPercentSub = 0;

  // If the route doesn't have a resource or percent, it might not have any effects to undo
  // We'll still reset its object properties below, but this warning is useful for debugging
  if (
    !routeToDelete.resource ||
    routeToDelete.percent === null ||
    routeToDelete.percent === undefined ||
    routeToDelete.percent <= 0
  ) {
    console.warn(
      `deleteTradeRout: Route at index ${routIndex} has no active trade effects to undo. Resetting route object.`
    );
  }

  const resourceName: ResourceName | null = routeToDelete.resource;
  let updatedReceiverTown: Town | null = null;

  // --- 1. Undo effects on the Receiver Town (if it exists) ---
  if (routeToDelete.receiver && resourceName) {
    const receiverTown = allTowns.find(
      (town) => town.id === routeToDelete.receiver
    );

    if (receiverTown) {
      const receiverResource = receiverTown.resources[resourceName];

      if (receiverResource && receiverResource.percentAdd > 0) {
        const oldPercentAddAmount = receiverResource.percentAdd;
        amountToSubtractFromPercentSub = oldPercentAddAmount;

        updatedReceiverTown = {
          ...receiverTown,
          resources: {
            ...receiverTown.resources,
            [resourceName]: {
              ...receiverResource,
              percentAdd: 0, // Reset percentAdd
              perHour: receiverResource.perHour - oldPercentAddAmount, // Subtract old percentAdd
            },
          },
        };
        console.log(
          `Deleted trade route: Reversed effects on receiver (${receiverTown.name}) for ${resourceName}: removed ${oldPercentAddAmount} from perHour.`
        );
      } else {
        console.warn(
          `Deleted trade route: Receiver ${receiverTown.name} resource ${resourceName} had no percentAdd to undo. Returning original receiver town.`
        );
        updatedReceiverTown = receiverTown; // Return original if no changes needed
      }
    } else {
      console.warn(
        `Deleted trade route: Receiver town with ID ${routeToDelete.receiver} not found. Could not undo effects.`
      );
    }
  }

  // --- 2. Undo effects on the Active Town (Sender) ---
  let finalActiveTownResources = { ...activeTown.resources };
  if (resourceName) {
    const activeTownResource = activeTown.resources[resourceName];
    if (activeTownResource && activeTownResource.percentSub > 0) {
      const oldPercentSubAmount = activeTownResource.percentSub;

      finalActiveTownResources = {
        ...activeTown.resources,
        [resourceName]: {
          ...activeTownResource,
          percentSub: oldPercentSubAmount - amountToSubtractFromPercentSub,
          perHour: activeTownResource.perHour + amountToSubtractFromPercentSub, // Add back old percentSub
        },
      };
      console.log(
        `Deleted trade route: Reversed effects on active town (${activeTown.name}) for ${resourceName}: added ${oldPercentSubAmount} back to perHour.`
      );
    } else {
      console.warn(
        `Deleted trade route: Active town ${activeTown.name} resource ${resourceName} had no percentSub to undo. Returning original active town resources.`
      );
    }
  }

  // --- 3. Reset the route object at routIndex within activeTown's tradeRouts array ---
  const resetRoute: TradeRoute = {
    sender: activeTown.id, // Sender remains the active town's ID (or null, depending on your default)
    receiver: null, // No longer has a receiver
    resource: null, // No longer trading a resource
    percent: 0, // No longer trading a percentage
  };

  const newTradeRouts = activeTown.tradeStation.tradeRouts.map((route, idx) =>
    idx === routIndex ? resetRoute : route
  );

  const updatedActiveTown: Town = {
    ...activeTown,
    resources: finalActiveTownResources, // Apply the updated resources
    tradeStation: {
      ...activeTown.tradeStation,
      tradeRouts: newTradeRouts, // Apply the new tradeRouts array with the reset route
    },
  };

  return { updatedActiveTown, updatedReceiverTown };
}
