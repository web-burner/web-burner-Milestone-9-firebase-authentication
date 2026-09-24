import { useLoaderData } from "react-router";
import Banner from "../Component/Banner";
import TopRated from "../Component/TopRated";
import SubscriptionBar from "../Component/SubscriptionBar";


const HomeLayout = () => {
    const data = useLoaderData()
    const bannerContent = data.sort((a,b) =>b.ratings- a.ratings).slice(0,3)
    const topRated = data.sort((a,b) =>b.ratings- a.ratings).slice(0,4)
    return (
        <>
        <div className=" py-10">
            <Banner bannerContent={bannerContent}/>
            <TopRated topRated={topRated}/>
            <SubscriptionBar/>
        </div>
        </>
    );
};

export default HomeLayout;