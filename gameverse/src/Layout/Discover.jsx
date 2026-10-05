import { useLoaderData } from "react-router";
import TopRatedApp from "../Component/TopRatedApp";
import { motion } from "motion/react";
const Discover = () => {
  const apps = useLoaderData();
  return (
    <div className=" w-11/12 md:w-10/12 mx-auto">
      <title>GameVerse - Discover Apps</title>

      <p className="text-[#1FD7DD]">CURATED CATALOG</p>
      <motion.div
      initial={{opacity:0,translateX: -300}}
      animate={{opacity:1,translateX:0}}
      transition={{duration:1}}
      >
        <h1 className=" text-4xl font-bold">Discover worlds worth playing</h1>
      </motion.div>
      <div className=" grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-4 mt-5 md:mt-10">
        {apps.map((app) => {
          const trimTitle = app.title.slice(0, 11);
          return <TopRatedApp app={app} key={app.id} trimTitle={trimTitle} />;
        })}
      </div>
    </div>
  );
};

export default Discover;
