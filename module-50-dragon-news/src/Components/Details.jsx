import { Link } from "react-router";

const Details = ({ news }) => {
  const { image_url, details } = news;
  return (
    <div>
        <h1>details</h1>
      <div>
        <figure>
          <img src={image_url} className=" w-full rounded-xl" alt="" />
        </figure>
      </div>
      <div>
        <p className=" text-gray-500  mt-5">{details}</p>
      </div>
      <Link to={'/category/0'}  className="btn bg-pink-800 text-white mt-2">All news in this category</Link>
    </div>
  );
};

export default Details;
