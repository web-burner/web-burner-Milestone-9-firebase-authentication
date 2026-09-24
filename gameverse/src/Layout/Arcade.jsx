import { Link, useLoaderData } from "react-router";
import arcadeLogo from "../assets/arcade_logo.png";
import TopRatedApp from "../Component/TopRatedApp";

const Arcade = () => {
  const apps = useLoaderData()
    .sort((a, b) => a.ratings - b.ratings)
    .slice(0, 4);

  return (
    <div className=" w-10/12 mx-auto py-10">
      <title>GameVerse - Arcade Nights</title>
      <div className=" bg-linear-to-r from-blue-950 p-10 to-black text-white h-80  rounded-2xl flex justify-between">
        <div className=" w-3/5 flex flex-col justify-center items-start gap-2">
          <p className="text-[#1FD7DD]">ALTERNATE THEME ROUTE</p>
          <h1 className=" text-6xl font-bold">Arcade Nights</h1>
          <p className=" text-gray-400">
            A vibrant after-dark home for rhythm games, local multiplayer, and
            score chasers. This secondary route demonstrates a distinct visual
            theme while retaining the shared navigation and footer.
          </p>
          <Link
            to={"/discover"}
            className=" btn mt-3 bg-violet-800 text-white border-none shadow-none"
          >
            Browse the arcade →
          </Link>
        </div>
        <figure>
          <img src={arcadeLogo} className=" h-50 bg-black " alt="" />
        </figure>
      </div>
      <div>
        <p className=" text-2xl font-bold my-5">Quick-play favorites</p>
        <div className=" grid grid-cols-4 gap-4">
          {apps.map((app) => (
            <TopRatedApp app={app} key={app.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arcade;
