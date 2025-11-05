import LoreCard from "../../../components/lore/LoreCard";
import LoreNav from "../../../components/navigation/LoreNav";

import LorePageWrapper from "../../../components/lore/LorePageWrapper";
import { creaturesArr } from "../../../utils/staticData";

export default function FaunaPage() {
  return (
    <div>
      <LoreNav currentPage={"fauna"} />
      <LorePageWrapper>
        <div className="grid grid-cols-7 justify-items-center h-min p-4 gap-4">
          {creaturesArr.map((creature) => (
            <LoreCard
              type="creature"
              creature={creature.name}
              height="h-[13rem]"
            >
              <img src={creature.logo} className="h-[7rem]" />
              <span className="mt-4 text-center">{creature.name}</span>
            </LoreCard>
          ))}
        </div>
      </LorePageWrapper>
    </div>
  );
}
