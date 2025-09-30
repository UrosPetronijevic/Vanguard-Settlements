import { type ReactNode } from "react";
import { useActiveMapPreviewStore } from "../../stores/activeMapPreview";

interface MapPreviewCardProps {
  children: ReactNode;
  size: string;
}

export default function MapPreviewCard({
  children,
  size,
}: MapPreviewCardProps) {
  const { activeMap, setActiveMap } = useActiveMapPreviewStore();

  let borderClass = "border-2 border-transparent"; // Default: no active border

  if (activeMap === size) {
    borderClass = "border border-blue-500 ring-2 ring-blue-300"; // Active border style
  }

  return (
    <div
      className={`${borderClass} flex flex-col items-center p-4 shadow-lg rounded-lg`}
      onClick={() => {
        setActiveMap(size);
      }}
    >
      <p className="text-xl font-semibold">{size}</p>
      {children}
    </div>
  );
}
