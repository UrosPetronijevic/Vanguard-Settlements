import JungleTown from "../assets/images/towns/jungle/Jungle-town-2.png";

export default function MainContent() {
  return (
    <div
      className="bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url('${JungleTown}')` }}
    ></div>
  );
}
