import { Link } from "react-router";
import TopRatedApp from "./TopRatedApp";
import {motion} from 'motion/react'

const TopRated = ({topRated}) => {
    return (
        <div className=" w-11/12 md:w-10/12 mx-auto space-y-5">
            <div className=" flex justify-between items-center">
                <div>
                    <p className=" text-[#1FD7DD]">Top rated today</p>
                    <h1 className=" text-2xl font-bold">Popular games</h1>
                </div>
                <div>
                    <Link to={'/discover'} className=" text-[#6D3BFF] font-bold">View all →</Link>
                </div>
            </div>
            <motion.div
             className=" grid sm:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                {
                    topRated.map(app => {
                        const trimTitle = app.title.slice(0,11)
                        return <TopRatedApp app={app} key={app.id} trimTitle={trimTitle}/>
                    })
                }
            </motion.div>
        </div>
    );
};

export default TopRated;