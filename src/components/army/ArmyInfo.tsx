import ArmyDisplay from "./ArmyDisplay";
import ArmyAction from "./ArmyAction";
import BarracksInfo from "./BarracksInfo";

export default function ArmyInfo() {
  return (
    <div className="grid grid-cols-3 h-full p-2">
      <BarracksInfo />
      <ArmyDisplay />
      <ArmyAction />
    </div>
  );
}
