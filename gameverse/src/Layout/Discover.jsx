import { useLoaderData } from "react-router";
import TopRatedApp from "../Component/TopRatedApp";

const Discover = () => {
  const apps = useLoaderData();
  return (
    <div className=" w-11/12 md:w-10/12 mx-auto">
      <title>GameVerse - Discover Apps</title>

      <p className="text-[#1FD7DD]">CURATED CATALOG</p>
      <h1 className=" text-4xl font-bold">Discover worlds worth playing</h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-10">
        {apps.map((app) => {
          const trimTitle = app.title.slice(0,11)
          return <TopRatedApp app={app} key={app.id} trimTitle={trimTitle} />
        })}
      </div>
    </div>
  );
};

export default Discover;
