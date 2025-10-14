import AboutPage from "../pages/info/AboutPage";
import LorePage from "../pages/info/lore/LorePage";
import OverviewPage from "../pages/info/OverviewPage";
import PlayPage from "../pages/game/PlayPage";
import RulesPage from "../pages/info/RulesPage";
import { useActiveHomePageStore } from "../stores/activeHomePageStore";

export default function HomeBody() {
  const { activePage } = useActiveHomePageStore();

  let contentToRender;

  switch (activePage) {
    case "home":
      contentToRender = <OverviewPage />;
      break;
    case "play":
      contentToRender = <PlayPage />;
      break;
    case "lore":
      contentToRender = <LorePage />;
      break;
    case "rules":
      contentToRender = <RulesPage />;
      break;
    case "about":
      contentToRender = <AboutPage />;
      break;
    default:
      contentToRender = <OverviewPage />;
  }

  return <div className="h-full">{contentToRender}</div>;
}
