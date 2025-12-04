import type { UnitCost, UnitName } from "../../../types/townTypes";
import RecruitmentAmount from "./RecruitmentAmount";

type RecruitmentInfoProps = {
  cost: UnitCost;
  amount: number;
  unitType: UnitName;
};

export default function RecruitmentInfo({
  cost,
  amount,
  unitType,
}: RecruitmentInfoProps) {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-gray-600">
        <p>
          Current Amount: <span className="font-medium">{amount}</span>
        </p>
        <p>
          Recruitment Cost:
          <span className="font-medium">
            {Object.entries(cost)
              .map(([resource, cost]) => `${cost} ${resource}`)
              .join(", ")}
          </span>
        </p>

        <RecruitmentAmount unitCost={cost} unitType={unitType} />
      </div>
    </div>
  );
}
