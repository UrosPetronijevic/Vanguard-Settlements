import JungleWoodSidebar from "../../assets/images/backgrounds/jungle/Wood-background.png";

export default function NavigationSidebar() {
  return (
    <div
      className="h-2/3 bg-cover rounded-bl-[1000px] rounded-br-[1000px]"
      style={{ backgroundImage: `url('${JungleWoodSidebar}')` }}
    >
      NavigationSidebar
    </div>
  );
}
