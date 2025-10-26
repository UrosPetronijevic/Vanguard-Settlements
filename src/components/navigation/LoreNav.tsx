import { useActiveHomePageStore } from "../../stores/activeHomePageStore";

interface LoreNavProps {
  currentPage: string;
}

export default function LoreNav({ currentPage }: LoreNavProps) {
  const { setActivePage } = useActiveHomePageStore();

  let button1Content;
  let button2Content;

  switch (currentPage) {
    case "realms":
      button1Content = "fauna";
      button2Content = "settlements";
      break;
    case "settlements":
      button1Content = "realms";
      button2Content = "races";
      break;
    case "races":
      button1Content = "settlements";
      button2Content = "fauna";
      break;
    case "fauna":
      button1Content = "races";
      button2Content = "realms";
      break;
    default:
      button1Content = "fauna";
      button2Content = "settlements";
  }

  return (
    <div className="flex justify-between p-4">
      <button
        className="py-2 px-4 bg-red-300 rounded-lg"
        onClick={() => {
          setActivePage(button1Content);
        }}
      >
        <span>{"<- "}</span>
        {button1Content}
      </button>
      <button
        className="py-2 px-4 bg-red-300 rounded-lg"
        onClick={() => {
          setActivePage(button2Content);
        }}
      >
        {button2Content}
        <span>{" ->"}</span>
      </button>
    </div>
  );
}
