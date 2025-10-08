import { useGameNavStore } from "../../stores/gameplay/gameNavStore";
import BuildingsSection from "./BuildingsSection";
import ReportsInfo from "./ReportsInfo";
import TownTypeLore from "./TownTypeLore";
import TradeInfo from "./TradeInfo";
import TroopInfo from "./TroopInfo";

export default function DynamicContent() {
  const { activeNavPage } = useGameNavStore();

  const renderContent = () => {
    switch (activeNavPage) {
      case "buildings":
        return <BuildingsSection />;
      case "reports":
        return <ReportsInfo />;
      case "map":
        return;
      case "towns":
        return <TownTypeLore />;
      case "trade":
        return <TradeInfo />;
      case "troops":
        return <TroopInfo />;
      default:
        return (
          <div className="text-white">
            Select an option from the navigation.
          </div>
        );
    }
  };

  return <div className="p-2 gap-2 rounded-md">{renderContent()}</div>;
}
