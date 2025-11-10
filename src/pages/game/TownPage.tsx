import GameHeader from "../../components/headers/GameHeader";
import MainContent from "../../components/MainContent";

import { useMapFieldsStore } from "../../stores/gameplay/mapFieldsStore";
import BuildingsSection from "../../components/dynamic-content/BuildingsSection";
import GameOperationMenu from "../../components/sidebars/GameOperationMenu";
import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import { useEffect } from "react";
import fetchNatureFields from "../../utils/server/fetch/fetchNatureFields";
import fetchTowns from "../../utils/server/fetch/fetchTowns";
import ResourcesDisplay from "../../components/ResourcesDisplay";
import GameNav from "../../components/navigation/GameNav";

export default function TownPage() {
  const { setMapFields, mapFields } = useMapFieldsStore();

  const { setTowns, setActiveTown, towns } = usePlayerTownsStore();

  useEffect(() => {
    const loadMapData = async () => {
      let map = await fetchNatureFields();

      let towns = await fetchTowns();

      if (map) {
        setMapFields(map);
      }

      if (towns) {
        setTowns(towns);
        setActiveTown(towns[0]);
      }
    };

    loadMapData();
  }, []);

  console.log(mapFields);
  console.log(towns, "TOWNS");

  return (
    <div className="flex flex-col justify-between max-w-screen h-screen">
      <div className="flex flex-col h-[20%] justify-between py-2">
        <GameHeader />
        <GameNav />
        <ResourcesDisplay />
      </div>
      <div className="flex h-full">
        <BuildingsSection />
        <MainContent />
      </div>
      <GameOperationMenu />
    </div>
  );
}
