import Realms from "../../../assets/images/realms/map-logo.png";
import Settlements from "../../../assets/images/towns/logo/town-logo-1.png";
import Races from "../../../assets/images/units/Races-logo.png";
import Fauna from "../../../assets/images/units/Fauna-logo.png";

import LoreCard from "../../../components/lore/LoreCard";

export default function LorePage() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                 gap-8 p-8 bg-[#FFFCB8]/20 min-h-full"
    >
      <LoreCard type={"realms"}>
        <img src={Realms} alt="Realms Map Logo" className="w-2/3 h-auto" />
        <span className="mt-4 text-2xl font-bold text-gray-800">Realms</span>
      </LoreCard>

      <LoreCard type="settlements">
        <img
          src={Settlements}
          alt="Settlements Logo"
          className="w-full h-auto"
        />
        <span className="mt-4 text-2xl font-bold text-gray-800">
          Settlements
        </span>
      </LoreCard>

      <LoreCard type="races">
        <img src={Races} alt="Sentient Races Logo" className="w-full h-auto" />
        <span className="mt-4 text-2xl font-bold text-gray-800">
          Sentient Races
        </span>
      </LoreCard>

      <LoreCard type="fauna">
        <img src={Fauna} alt="Flora Map Logo" className="w-2/3 h-auto" />
        <span className="mt-4 text-2xl font-bold text-gray-800">Fauna</span>
      </LoreCard>
    </div>
  );
}
