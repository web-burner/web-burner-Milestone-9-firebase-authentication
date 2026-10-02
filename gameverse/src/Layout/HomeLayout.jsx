import { useLoaderData } from "react-router";
import Banner from "../Component/Banner";
import TopRated from "../Component/TopRated";
import SubscriptionBar from "../Component/SubscriptionBar";
import {motion} from 'motion/react';

const HomeLayout = () => {
    const data = useLoaderData()
    
    const bannerContent = data.sort((a,b) =>b.ratings- a.ratings).slice(0,3)
    const topRated = data.sort((a,b) =>b.ratings- a.ratings).slice(0,4)
    return (
        <>
        <motion.div
        initial={{scale:1.2,opacity:0.5}}
        animate={{scale: 1 , opacity:1}}
        transition={{duration:0.3}}
        className=" py-10">
            <title>GameVerse - Home</title>
            <Banner bannerContent={bannerContent}/>
            <TopRated topRated={topRated}/>
            <SubscriptionBar/>
        </motion.div>
        </>
    );
};

export default HomeLayout;