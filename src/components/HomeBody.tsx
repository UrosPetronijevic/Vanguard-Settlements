import AboutPage from "../pages/info/AboutPage";
import LorePage from "../pages/info/lore/LorePage";
import OverviewPage from "../pages/info/OverviewPage";
import PlayPage from "../pages/game/PlayPage";
import RulesPage from "../pages/info/RulesPage";

import { useActiveHomePageStore } from "../stores/activeHomePageStore";
import RealmsPage from "../pages/info/lore/RealmsPage";
import SettlementsPage from "../pages/info/lore/SettlementsPage";
import RacesPage from "../pages/info/lore/RacesPage";
import FaunaPage from "../pages/info/lore/FaunaPage";
import CreaturesPage from "../pages/info/lore/CreaturesPage";

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
    case "realms":
      contentToRender = <RealmsPage />;
      break;
    case "settlements":
      contentToRender = <SettlementsPage />;
      break;
    case "races":
      contentToRender = <RacesPage />;
      break;
    case "fauna":
      contentToRender = <FaunaPage />;
      break;
    case "creature":
      contentToRender = <CreaturesPage />;
      break;
    default:
      contentToRender = <OverviewPage />;
  }

  return <div className="h-full">{contentToRender}</div>;
}
