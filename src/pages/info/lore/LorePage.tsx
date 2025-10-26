import Realms from "../../../assets/images/realms/map-logo.png";
import Settlements from "../../../assets/images/towns/logo/town-logo-1.png";
import Races from "../../../assets/images/units/Races-logo.png";
import Fauna from "../../../assets/images/units/Fauna-logo.png";

import LoreCard from "../../../components/lore/LoreCard";

export default function LorePage() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                 gap-8 p-8 bg-[#FFFCB8]/20 min-h-full items-center"
    >
      <LoreCard type={"realms"} height="h-2/3">
        <div className="h-2/3">
          <img src={Realms} alt="Realms Map Logo" className="w-full h-full" />
        </div>
        <span className="mt-4 text-2xl font-bold text-gray-800">Realms</span>
      </LoreCard>

      <LoreCard type="settlements" height="h-2/3">
        <div className="h-2/3">
          <img
            src={Settlements}
            alt="Settlements Logo"
            className="w-full h-full"
          />
        </div>
        <span className="mt-4 text-2xl font-bold text-gray-800">
          Settlements
        </span>
      </LoreCard>

      <LoreCard type="races" height="h-2/3">
        <div className="h-2/3">
          <img src={Races} alt="Races Logo" className="w-full h-6/8" />
        </div>
        <span className="mt-4 text-2xl font-bold text-gray-800">
          Sentient Races
        </span>
      </LoreCard>

      <LoreCard type="fauna" height="h-2/3">
        <div className="h-2/3">
          <img src={Fauna} alt="Fauna Logo" className="w-full h-full" />
        </div>
        <span className="mt-4 text-2xl font-bold text-gray-800">Fauna</span>
      </LoreCard>
    </div>
  );
}
