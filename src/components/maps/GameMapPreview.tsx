const colorClasses = [
  "bg-yellow-400", // Gold yellow (using a standard Tailwind yellow)
  "bg-green-600", // Grassland green (darker green for 'grassland')
  "bg-cyan-300", // Cyan-300 (standard Tailwind)
  "bg-amber-300", // Sand (using an amber shade)
  "bg-stone-700", // Wasteland (darker stone/gray)
  "bg-orange-800", // Wood (dark orange/brown)
  "bg-lime-700", // Jungle (a different green, more vibrant)
  "bg-gray-500", // Rock or Cave (standard gray)
  "bg-blue-300", // Blue-300 (standard Tailwind)
  "bg-[#192A3C]", // Haunted Forest (very dark purple)
];

const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * colorClasses.length);
  return colorClasses[randomIndex];
};

export default function GameMapPreview() {
  const gridCells = [];

  for (let i = 0; i < 25; i++) {
    gridCells.push(
      <div
        key={i}
        className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-xs text-white ${getRandomColorClass()} border border-gray-400`}
      ></div>
    );
  }

  return (
    <div className="p-4 h-full flex items-center justify-center">
      <div className="grid grid-cols-5 gap-1 border-2 border-gray-600 p-2 shadow-xl rounded-lg">
        {gridCells}
      </div>
    </div>
  );
}
