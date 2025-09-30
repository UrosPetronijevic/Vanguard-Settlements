import HomeHeader from "../components/headers/HomeHeader";
import HomeBody from "../components/HomeBody";

export default function Homepage() {
  return (
    <div className="flex flex-col max-w-screen h-screen">
      <HomeHeader />

      <HomeBody />
    </div>
  );
}
