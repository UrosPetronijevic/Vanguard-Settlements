import BuildingsSection from "../../components/BuildingsSection";
import GameHeader from "../../components/headers/GameHeader";
import MainContent from "../../components/MainContent";
import InfoSidebar from "../../components/sidebars/InfoSidebar";
import NavigationSidebar from "../../components/sidebars/NavigationSidebar";

import JungleBackground from "../../assets/images/backgrounds/jungle/Background.png";

export default function TownPage() {
  return (
    <div className="flex flex-col max-w-screen h-screen">
      <GameHeader />
      <div
        className="grid grid-cols-[20%_59%_20%] grid-rows-[70%_30%] gap-2 h-full px-2 pb-4 bg-cover relative z-0 bg-no-repeat"
        style={{ backgroundImage: `url('${JungleBackground}')` }}
      >
        <div className="bg-white/20 absolute h-full top-0 w-full z-[-1]"></div>

        <div className="h-full row-span-2">
          <NavigationSidebar />
        </div>

        <MainContent />

        <div className="h-full row-span-2">
          <InfoSidebar />
        </div>

        <BuildingsSection />
      </div>
    </div>
  );
}
