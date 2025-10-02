import { useEffect, useState } from "react";
import JungleWoodSidebar from "../../assets/images/backgrounds/jungle/Wood-background.png";
import { useGameNavStore } from "../../stores/gameplay/gameNavStore";
import TownList from "./info-sidebar-content/TownList";
import TradeActions from "./info-sidebar-content/TradeActions";
import Buildings from "./info-sidebar-content/Buildings";
import TroopsList from "./info-sidebar-content/TroopsList";
import ReportsList from "./info-sidebar-content/ReportsList";

export default function InfoSidebar() {
  const { activeNavPage } = useGameNavStore();

  const [borderRadius, setBorderRadius] = useState("100px");

  useEffect(() => {
    const calculateRadius = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth > 1280) return "300px"; // lg
      if (viewportWidth > 768) return "200px"; // md
      return "100px"; // default for small screens
    };

    setBorderRadius(calculateRadius());

    const handleResize = () => setBorderRadius(calculateRadius());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    case "buildings":
      contentToRender = <Buildings />;
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
  return (
    <div
      className={`h-7/8 w-full bg-cover bg-center overflow-hidden shadow-2xl border-l-4 border-lime-800 flex flex-col items-center justify-center py-8 px-4 text-white`}
      style={{
        backgroundImage: `url('${JungleWoodSidebar}')`,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      }}
    >
      {contentToRender}
    </div>
  );
}
