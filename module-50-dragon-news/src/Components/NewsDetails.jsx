import {  useNavigation } from "react-router";

const NewsDetails = () => {
    const location = useNavigation()
    const news = location.state()
    console.log(news)
    return (
        <div>
            <h1>News Details</h1>
        </div>
    );
};

export default NewsDetails;