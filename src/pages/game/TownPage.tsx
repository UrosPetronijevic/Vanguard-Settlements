import GameHeader from "../../components/headers/GameHeader";
import MainContent from "../../components/MainContent";
import NavigationSidebar from "../../components/sidebars/NavigationSidebar";

import { useMapFieldsStore } from "../../stores/gameplay/mapFieldsStore";
import BuildingsSection from "../../components/dynamic-content/BuildingsSection";
import GameOperationMenu from "../../components/sidebars/GameOperationMenu";
import { usePlayerTownsStore } from "../../stores/gameplay/playerTownsStore";
import { useEffect } from "react";
import type { Town } from "../../types/townTypes";
import type { Field } from "../../types/fieldTypes";

function isTown(field: Field | Town): field is Town {
  return (field as Town).name !== undefined;
  // Or, if your Town type has a specific discriminator, use that:
  // return (field as Town).isTown === true;
  // Or if Town type always has 'buildings' or 'resources':
  // return (field as Town).buildings !== undefined;
}

export default function TownPage() {
  const { mapFields } = useMapFieldsStore();

  const { setTowns, setActiveTown } = usePlayerTownsStore();

  useEffect(() => {
    if (mapFields && mapFields.length > 0) {
      const towns: Town[] = mapFields.flatMap((row) => row.filter(isTown));

      setTowns(towns);
    }
  }, []);

  console.log(mapFields);

  return (
    <div className="flex flex-col justify-between max-w-screen h-screen">
      <div className="flex flex-col">
        <NavigationSidebar />
        <GameHeader />
      </div>
      <div className="flex h-full">
        <BuildingsSection />
        <MainContent />
      </div>
      <GameOperationMenu />
    </div>
  );
}
