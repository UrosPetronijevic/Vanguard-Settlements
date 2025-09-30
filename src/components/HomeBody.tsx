import AboutPage from "../pages/AboutPage";
import LorePage from "../pages/LorePage";
import OverviewPage from "../pages/OverviewPage";
import PlayPage from "../pages/PlayPage";
import RulesPage from "../pages/RulesPage";
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
