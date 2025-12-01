import { usePlayerTownsStore } from "../stores/gameplay/playerTownsStore";
import hillsTown from "../assets/images/towns/hills/Hills-town-4.png";
import cavernsTown from "../assets/images/towns/cavern/Caverns-town-1.png";
import duneTown from "../assets/images/towns/dune/Dune-town-3.png";
import elysianTown from "../assets/images/towns/elysian/Elysain-town.png";
import grassLands from "../assets/images/towns/grasslands/Grassland-town-1.png";
import jungleTown from "../assets/images/towns/jungle/Jungle-town-3.png";
import lakeTown from "../assets/images/towns/lakeside/Lake-town-4.png";
import volcanoTown from "../assets/images/towns/volcano/Volcano-town-4.png";
import wastelandTown from "../assets/images/towns/wasteland/Wasteland-town-1.png";

export default function MainContent() {
  const { activeTown } = usePlayerTownsStore();

  const currentTownImage = townImage();

  function townImage() {
    switch (activeTown?.type) {
      case "Hills town":
        return hillsTown;
      case "Wasteland town":
        return wastelandTown;
      case "Caverns town":
        return cavernsTown;
      case "Dune town":
        return duneTown;
      case "Elysium town":
        return elysianTown;
      case "Grassland town":
        return grassLands;
      case "Jungle town":
        return jungleTown;
      case "Lake town":
        return lakeTown;
      case "Volcano town":
        return volcanoTown;
      default:
        return hillsTown;
    }
  }

  const backgroundStyle = {
    backgroundImage: `url('${currentTownImage}')`,
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the image within the div
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
  };

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full flex items-end justify-center overflow-hidden"
        style={backgroundStyle}
      >
        {!activeTown && (
          <p className="text-white text-lg font-bold">Loading town...</p>
        )}
      </div>
    </div>
  );
}
