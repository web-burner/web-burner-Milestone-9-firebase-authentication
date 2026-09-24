import { useLoaderData } from "react-router";
import TopRatedApp from "../Component/TopRatedApp";

const Discover = () => {
    const apps = useLoaderData()
    return (
        <div className=" w-10/12 mx-auto">
                  <title>GameVerse - Discover Apps</title>

            <p className="text-[#1FD7DD]">CURATED CATALOG</p>
            <h1 className=" text-4xl font-bold">Discover worlds worth playing</h1>
            <div className=" grid grid-cols-4 gap-4 mt-10">
                {
                    apps.map(app => <TopRatedApp app={app} key={app.id}/>)
                }
            </div>
        </div>
    );
};

export default Discover;