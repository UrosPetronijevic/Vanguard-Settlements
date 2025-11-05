import { type ReactNode } from "react";
import { useActiveHomePageStore } from "../../stores/activeHomePageStore";
import { useActiveCreatureStore } from "../../stores/activeCreatureStore";

interface LoreCardProps {
  children: ReactNode;
  type: string;
  height?: string;
  width?: string;
  creature?: string | null;
}

export default function LoreCard({
  children,
  type,
  height = "h-full",
  width = "w-full",
  creature = null,
}: LoreCardProps) {
  const { setActivePage } = useActiveHomePageStore();
  const { setActiveCreature } = useActiveCreatureStore();

  return (
    <div
      className={` ${width} ${height} flex flex-col items-center justify-center p-4 rounded-xl shadow-xl 
      hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border-2 border-gray-100`}
      onClick={() => {
        if (type === "creature") {
          setActiveCreature(creature);
        }

        setActivePage(type);
      }}
    >
      {children}
    </div>
  );
}
