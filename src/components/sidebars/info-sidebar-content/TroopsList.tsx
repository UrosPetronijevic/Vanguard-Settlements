import ArmyDisplay from "./troops-list-content/ArmyDisplay";

export default function TroopsList() {
  return (
    <div>
      <ArmyDisplay />
      <TroopsList />
    </div>
  );
}
