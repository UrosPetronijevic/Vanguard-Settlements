import { useGameNavStore } from "../../stores/gameplay/gameNavStore";

const navItems = [
  { name: "Towns", id: "towns" },
  { name: "Map", id: "map" },
  { name: "Trade", id: "trade" },
  { name: "Army", id: "troops" },
  { name: "Reports", id: "reports" },
];

export default function GameNav() {
  const { activeNavPage, setNavPage } = useGameNavStore();

  return (
    <nav className="flex">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`
              px-2 py-1 w-full text-center
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
              transition-colors duration-200 ease-in-out
              cursor-pointer
              ${
                activeNavPage === item.id
                  ? "text-yellow-500 bg-lime-900/70 border-b-2 border-yellow-500"
                  : "text-yellow-200 hover:text-yellow-500 hover:bg-lime-900/50"
              }
            `}
          onClick={() => setNavPage(item.id)}
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
}
