import { useLoaderData, useParams } from "react-router";
import Header from "./Header";
import QZone from "./QZone";
import Details from "./Details";

const NewsDetails = () => {
    const {id} = useParams()
  const news = useLoaderData()
  const findData = news.find(n => n.id === id)
  // console.log(findData)
  return (
    <div className=" w-10/12 mx-auto pb-5">
      <Header />
      <h2 className=" text-xl font-bold">Dragon News</h2>
      <div className="  grid grid-cols-12 gap-4 ">
        <div className=" col-span-9 border border-gray-300 p-3 mt-2 rounded-2xl">
        <Details news={findData}/>
        </div>
        <div className=" col-span-3">
          <QZone />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
