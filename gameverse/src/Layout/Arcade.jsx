import { Link, useLoaderData } from "react-router";
import arcadeLogo from "../assets/arcade_logo.png";
import TopRatedApp from "../Component/TopRatedApp";

const Arcade = () => {
  const apps = useLoaderData()
    .sort((a, b) => a.ratings - b.ratings)
    .slice(0, 4);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-3 md:py-10">
      <title>GameVerse - Arcade Nights</title>
      <div className=" bg-linear-to-t  md:bg-linear-to-r from-blue-950 to-black md:p-10 p-2 text-white md:h-80  rounded-2xl flex md:flex-row flex-col-reverse justify-between items-center">
        <div className=" md:w-3/5 flex flex-col justify-center items-start gap-2">
          <p className="text-[#1FD7DD] text-xs">ALTERNATE THEME ROUTE</p>
          <h1 className=" text-xl md:text-6xl font-bold">Arcade Nights</h1>
          <p className=" text-gray-400 text-sm">
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
          <img src={arcadeLogo} className=" h-30 md:h-50 bg-black " alt="" />
        </figure>
      </div>
      <div>
        <p className=" text-xl md:text-2xl font-bold my-5">Quick-play favorites</p>
        <div className=" grid sm:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4">
          {apps.map((app) => (
            <TopRatedApp app={app} key={app.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arcade;
