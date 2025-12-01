import { usePlayerTownsStore } from "../stores/gameplay/playerTownsStore";

export default function TownTypeLore() {
  const { towns, activeTown } = usePlayerTownsStore();
  const activeTownId = towns.find((town) => town.id === activeTown?.id);

  if (!activeTownId) {
    return (
      <div className="text-center p-4 text-gray-400">
        Select a town to learn about its type.
      </div>
    );
  }

  // Placeholder for the detailed type information
  // This is where you'd put the content you provide later
  // Example for 'Elysium town'
  const getTypeDescription = (type: string) => {
    switch (type) {
      case "Elysium town":
        return {
          title: "Elysium Town: The Heart of Prosperity",
          description:
            "These towns are often found in fertile plains or near ancient magical sites. Inhabitants are typically scholars, artisans, and skilled laborers. They excel in resource production and research.",
        };
      case "Forest town":
        return {
          title: "Forest Town: Hidden in Nature",
          description:
            "Nestled deep within ancient forests, these towns are known for their wood production and skilled rangers. Inhabitants are typically agile scouts and nature-bound protectors.",
        };
      case "Dune town":
        return {
          title: "Dune Town: Resilient Desert Strongholds",
          description:
            "Built in harsh desert landscapes, Dune towns specialize in resource extraction from rare desert mines and offer hardened warriors. Their people are often traders and skilled survivalists.",
        };
      case "Riverside town":
        return {
          title: "Riverside Town: Lifeline of the Waterways",
          description:
            "Strategic towns built along vital rivers, excelling in trade and agriculture. Their people are skilled sailors and resourceful farmers, benefiting from the fertile banks.",
        };

      default:
        return {
          title: `${type} Overview`,
          description: `More details about this type of town will be available soon.`,
        };
    }
  };

  const typeInfo = getTypeDescription(activeTownId.type);

  return (
    <div className="w-full bg-lime-900/50 p-4 rounded-lg shadow-inner mt-4">
      <h4 className="text-xl font-bold mb-3 text-yellow-300">
        {typeInfo.title}
      </h4>
      <p className="text-gray-200 text-sm leading-relaxed">
        {typeInfo.description}
      </p>
    </div>
  );
}
