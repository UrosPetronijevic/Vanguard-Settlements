import { useActiveHomePageStore } from "../../stores/activeHomePageStore";

export default function HomeNav() {
  const { setActivePage } = useActiveHomePageStore();

  return (
    <div className="bg-blue-300 flex justify-between w-2/3 p-2">
      <button
        onClick={() => {
          setActivePage("home");
        }}
      >
        Home
      </button>

      <button
        onClick={() => {
          setActivePage("play");
        }}
      >
        Play
      </button>

      <button
        onClick={() => {
          setActivePage("lore");
        }}
      >
        Lore
      </button>

      <button
        onClick={() => {
          setActivePage("rules");
        }}
      >
        Rules
      </button>

      <button
        onClick={() => {
          setActivePage("about");
        }}
      >
        About
      </button>
    </div>
  );
}
