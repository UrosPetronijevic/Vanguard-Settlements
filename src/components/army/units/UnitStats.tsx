import type { Stats } from "../../../types/townTypes";
type UnitStatsProps = {
  stats: Stats;
};
export default function UnitStats({ stats }: UnitStatsProps) {
  return (
    <div className="text-sm text-gray-700 mb-3">
      <h4 className="font-medium">Stats:</h4>
      <p>Attack: {stats.attack}</p>
      <p>Defense: {stats.defense}</p>
      <p>Health: {stats.health}</p>
      {stats.bonusDmg !== undefined && stats.bonusDmg !== null && (
        <p>Bonus Damage: {stats.bonusDmg}</p>
      )}
    </div>
  );
}
