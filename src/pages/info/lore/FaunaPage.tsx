import LoreCard from "../../../components/lore/LoreCard";
import LoreNav from "../../../components/navigation/LoreNav";

import ZleeStack from "../../../assets/images/units/wild/Zleestack-logo-2png.png";
import Avian from "../../../assets/images/units/wild/Avian-bird-logo.png";
import Snailmouse from "../../../assets/images/units/wild/Snailmouse-logo.png";
import Planax from "../../../assets/images/units/wild/Planax-logo.png";
import Malanax from "../../../assets/images/units/wild/Malanax.png";
import Aquanax from "../../../assets/images/units/wild/Aquanax.png";
import CrownedRedDragon from "../../../assets/images/units/wild/crowned-red-dragon-1.png";
import Electrodon from "../../../assets/images/units/wild/electrodon-logo.png";

import LorePageWrapper from "../../../components/lore/LorePageWrapper";

const creaturesArr = [
  { img: ZleeStack, name: "Zleestack" },
  { img: Avian, name: "Avian bird" },
  { img: Snailmouse, name: "Snaill mouse" },
  { img: Electrodon, name: "Elektrodon" },
  { img: CrownedRedDragon, name: "Crowned red dragon" },
  { img: Planax, name: "Planax" },
  { img: Malanax, name: "Malanax" },
  { img: Aquanax, name: "Aquanax" },
];

export default function FaunaPage() {
  return (
    <div>
      <LoreNav currentPage={"fauna"} />
      <LorePageWrapper>
        <div className="grid grid-cols-7 justify-items-center h-min p-4 gap-4">
          {creaturesArr.map((creature) => (
            <LoreCard type="creature" height="h-min">
              <img src={creature.img} className="h-[7rem]" />
              <span className="mt-4">{creature.name}</span>
            </LoreCard>
          ))}
        </div>
      </LorePageWrapper>
    </div>
  );
}
