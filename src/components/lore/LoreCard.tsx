import { type ReactNode } from "react";
import { useActiveHomePageStore } from "../../stores/activeHomePageStore";

interface LoreCardProps {
  children: ReactNode;
  type: string;
}

export default function LoreCard({ children, type }: LoreCardProps) {
  const { setActivePage } = useActiveHomePageStore();

  return (
    <div
      className="flex items-center justify-center p-4"
      onClick={() => {
        setActivePage(type);
      }}
    >
      <div
        className="w-full h-[22rem] rounded-xl shadow-xl 
                   hover:shadow-2xl transition-shadow duration-300 
                   transform hover:-translate-y-1 flex flex-col 
                   items-center justify-center p-6 border-2 border-gray-100"
      >
        {children}
      </div>
    </div>
  );
}
