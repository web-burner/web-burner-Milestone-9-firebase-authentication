import { useLoaderData } from "react-router";
import NewsContainer from "./NewsContainer";

const Home = () => {
  const newsData = useLoaderData().data.slice(0, 10);
  return <div>{<NewsContainer newses={newsData} />}</div>;
};

export default Home;
