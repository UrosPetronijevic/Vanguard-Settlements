import { useGameNavStore } from "../../stores/gameplay/gameNavStore";
import TownList from "./info-sidebar-content/TownList";
import TradeActions from "./info-sidebar-content/TradeActions";
import TroopsList from "./info-sidebar-content/TroopsList";
import ReportsList from "./info-sidebar-content/ReportsList";

export default function GameOperationMenu() {
  const { activeNavPage } = useGameNavStore();

  let contentToRender;

  // Render specific components based on activeNavPage
  switch (activeNavPage) {
    case "towns":
      contentToRender = <TownList />;
      break;
    case "map":
      contentToRender = null;
      break;
    case "trade":
      contentToRender = <TradeActions />;
      break;
    case "troops":
      contentToRender = <TroopsList />;
      break;
    case "reports":
      contentToRender = <ReportsList />;
      break;
    default:
      // Fallback for any unexpected activeNavPage or initial state
      contentToRender = (
        <div className="p-4 text-white text-center">
          <h3 className="text-xl font-bold">
            Select a section from the left navigation.
          </h3>
          <p className="mt-2">Active Page: {activeNavPage}</p>
        </div>
      );
      break;
  }
  return <div className="bg-green-100 p-2">{contentToRender}</div>;
}
