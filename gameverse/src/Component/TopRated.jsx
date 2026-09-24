import { Link } from "react-router";
import TopRatedApp from "./TopRatedApp";

const TopRated = ({topRated}) => {
    console.log(topRated)
    return (
        <div className=" w-10/12 mx-auto">
            <div className=" flex justify-between items-center">
                <div>
                    <p className=" text-[#1FD7DD]">Top rated today</p>
                    <h1 className=" text-2xl font-bold">Popular games</h1>
                </div>
                <div>
                    <Link to={'/discover'} className=" text-[#6D3BFF] font-bold">View all games →</Link>
                </div>
            </div>
            <div className=" grid grid-cols-4 gap-4">
                {
                    topRated.map(app => <TopRatedApp app={app} key={app.id}/>)
                }
            </div>
        </div>
    );
};

export default TopRated;