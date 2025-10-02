import JungleWoodSidebar from "../../assets/images/backgrounds/jungle/Wood-background.png";
import { useGameNavStore } from "../../stores/gameplay/gameNavStore";

const navItems = [
  { name: "Towns", id: "towns" },
  { name: "Map", id: "map" },
  { name: "Trade", id: "trade" },
  { name: "Buildings", id: "buildings" },
  { name: "Troops", id: "troops" },
  { name: "Reports", id: "reports" },
];

export default function NavigationSidebar() {
  const { activeNavPage, setNavPage } = useGameNavStore();

  const calculateBorderRadius = () => {
    if (typeof window !== "undefined") {
      const viewportWidth = window.innerWidth;
      if (viewportWidth > 1280) return "300px";
      if (viewportWidth > 768) return "200px";
      return "100px";
    }
    return "100px";
  };

  return (
    <nav
      className="
        h-2/3 // Restore original height
        w-48 sm:w-56 lg:w-64
        bg-cover bg-center
        overflow-hidden
        shadow-2xl border-r-4 border-lime-800
        flex flex-col
        py-8
        relative // Important for `rounded-bl/br` to be applied correctly in combination with `overflow-hidden`
      "
      style={{
        backgroundImage: `url('${JungleWoodSidebar}')`,
        borderBottomLeftRadius: calculateBorderRadius(),
        borderBottomRightRadius: calculateBorderRadius(),
      }}
    >
      <ul className="flex flex-col h-full p-4 items-center justify-between text-2xl font-bold">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`
              p-2 w-full text-center
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
              transition-colors duration-200 ease-in-out
              cursor-pointer rounded-md
              ${
                activeNavPage === item.id
                  ? "text-yellow-500 bg-lime-900/70 border-b-2 border-yellow-500"
                  : "text-yellow-200 hover:text-yellow-500 hover:bg-lime-900/50"
              }
            `}
            onClick={() => setNavPage(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
