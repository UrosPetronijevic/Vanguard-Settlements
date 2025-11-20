import type { ResourceName, Town, TradeRoute } from "../types/townTypes";

export default function calculateTownPercent(
  activeTown: Town,
  tradeReceiver: Town,
  resource: ResourceName, // Ensure resource is a valid name
  percent: number,
  routIndex: number
): { updatedActiveTown: Town; updatedTradeReceiver: Town } {
  // Input validation (already handled by type system and calling component)
  // But good to be explicit for runtime checks if inputs are dynamic
  if (!resource || percent === null || percent === undefined) {
    // You might throw an error or handle this differently depending on your needs
    console.error("Invalid input for calculateTownPercent");
    // Return original towns if invalid input, or throw an error
    return {
      updatedActiveTown: activeTown,
      updatedTradeReceiver: tradeReceiver,
    };
  }

  const transferPercent =
    activeTown.resources[resource].perHour * (percent / 100);

  console.log("TRANSFER PERCENT IS", transferPercent);

  const newSenderRoute: TradeRoute = {
    sender: activeTown.id, // Assuming activeTown.id is the sender's ID
    receiver: tradeReceiver.id,
    resource: resource,
    percent: percent,
  };

  // Create a deeply immutable update for activeTown
  const updatedActiveTown: Town = {
    ...activeTown, // Copy top-level properties
    resources: {
      ...activeTown.resources, // Copy all existing resources object
      [resource]: {
        // Deep copy the specific resource being modified
        ...activeTown.resources[resource],
        percentSub: transferPercent,
        perHour: activeTown.resources[resource].perHour - transferPercent,
      },
    },
    // If you had other nested objects that could change, you'd apply the same deep copy pattern
    tradeStation: {
      ...activeTown.tradeStation, // Copy existing tradeStation properties
      tradeRouts: activeTown.tradeStation.tradeRouts.map(
        (route, index) => (index === routIndex ? newSenderRoute : route) // Update the specific route at routIndex
      ),
    },
  };

  // Create a deeply immutable update for tradeReceiver
  const updatedTradeReceiver: Town = {
    ...tradeReceiver, // Copy top-level properties
    resources: {
      ...tradeReceiver.resources, // Copy all existing resources object
      [resource]: {
        // Deep copy the specific resource being modified
        ...tradeReceiver.resources[resource],
        percentAdd: transferPercent,
        perHour: tradeReceiver.resources[resource].perHour + transferPercent,
      },
    },
    // Similar deep copy for other nested objects if they change
    tradeStation: {
      ...tradeReceiver.tradeStation,
      // tradeRouts: [...tradeReceiver.tradeStation.tradeRouts, newTradeRouteObject]
    },
  };

  return { updatedActiveTown, updatedTradeReceiver };
}
