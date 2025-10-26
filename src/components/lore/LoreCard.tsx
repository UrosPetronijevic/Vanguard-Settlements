import { type ReactNode } from "react";
import { useActiveHomePageStore } from "../../stores/activeHomePageStore";

interface LoreCardProps {
  children: ReactNode;
  type: string;
  height?: string;
  width?: string;
}

export default function LoreCard({
  children,
  type,
  height = "h-full",
  width = "w-full",
}: LoreCardProps) {
  const { setActivePage } = useActiveHomePageStore();

  return (
    <div
      className={` ${width} ${height} flex flex-col items-center justify-center p-4 rounded-xl shadow-xl 
      hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border-2 border-gray-100`}
      onClick={() => {
        setActivePage(type);
      }}
    >
      {children}
    </div>
  );
}
