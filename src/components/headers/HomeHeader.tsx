import HomeNav from "../navigation/HomeNav";

export default function HomeHeader() {
  return (
    <div className="bg-amber-200 p-7 flex justify-between items-center">
      <h1 className="text-xl">
        Welcome: <span>User</span>
      </h1>

      <HomeNav />

      <p>Date and time</p>
    </div>
  );
}
