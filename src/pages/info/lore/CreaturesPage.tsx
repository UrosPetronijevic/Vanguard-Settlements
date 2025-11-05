import { useActiveCreatureStore } from "../../../stores/activeCreatureStore";
import { creaturesArr } from "../../../utils/staticData";

export default function CreaturesPage() {
  const { activeCreature } = useActiveCreatureStore();

  console.log(activeCreature);

  const creature = creaturesArr.find(
    (creature) => creature.name === activeCreature
  );
  return <div>{creature?.info?.habitat}</div>;
}
