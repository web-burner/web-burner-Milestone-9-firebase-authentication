import { FaStar } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { useNavigate } from "react-router";
const News = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news;
  const star = [];
  for (let i = 0; i < rating.number; i++) {
    star.push(<FaStar key={i} />);
  }

  const navigate = useNavigate();
  const handleDetails = () => {
    navigate("/newsDetails", { state: news });
  };
  const publishDate = new Date(author.published_date).toLocaleDateString();
  return (
    <div className=" p-4">
      <div className=" flex justify-between items-center bg-gray-200 p-2">
        <div className=" flex gap-3">
          <figure>
            <img src={author.img} className=" h-13 w-13 rounded-full" alt="" />
          </figure>
          <div>
            <h2 className=" text-xl font-semibold">{author.name}</h2>
            <p className=" text-gray-400">{publishDate}</p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-2">
          <CiBookmark size={20} />
          <IoMdShare size={20} />
        </div>
      </div>
      <div>
        <h2 className=" text-xl font-semibold">{title}</h2>
      </div>
      <div>
        <figure>
          <img src={image_url} className=" w-full rounded-xl" alt="" />
        </figure>
      </div>
      <div>
        {details.length > 160 ? (
          <p>
            {details.slice(0, 161)}...
            <span onClick={handleDetails}>Read More</span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <div className=" border-t flex justify-between items-center p-3">
        <div className=" flex items-center gap-2">
          <span className=" flex ">{star}</span>
          {rating.number}
        </div>

        <div className=" flex gap-2 items-center">
          <FaEye />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default News;

// {
//     "id": "012345q7abcdef89012345q7ab",
//     "category_id": 9,
//     "title": "Heavy Rainfall Causes Waterlogging in Several Chittagong Areas",
//     "rating": {
//         "number": 3,
//         "badge": "trending"
//     },
//     "total_view": 6789,
//     "author": {
//         "name": "Anika Tabassum",
//         "published_date": "2025-04-22T21:00:00.000Z",
//         "img": "https://randomuser.me/api/portraits/women/18.jpg"
//     },
//     "thumbnail_url": "https://ecdn.dhakatribune.net/contents/cache/images/900x0x1/uploads/dten/2018/07/web-chittagong-waterlogging-muradpur-2-focus-bangla-24-07-2018-1532442175533.jpg",
//     "image_url": "https://ecdn.dhakatribune.net/contents/cache/images/900x0x1/uploads/dten/2018/07/web-chittagong-waterlogging-muradpur-2-focus-bangla-24-07-2018-1532442175533.jpg",
//     "details": "Continuous heavy rainfall has led to significant waterlogging in several low-lying areas of Chittagong. Commuters are facing difficulties as roads become submerged, and residents in affected areas are experiencing disruptions to their daily lives. City authorities are working to pump out the water and provide assistance to those stranded. The meteorological department has forecasted more rainfall in the coming hours, raising concerns about further water accumulation. Residents in vulnerable areas are advised to take necessary precautions and stay updated on weather advisories. Traffic movement in the affected zones has been slow, and authorities are urging people to avoid unnecessary travel.",
//     "tags": [
//         "local news",
//         "Chittagong",
//         "weather",
//         "rainfall",
//         "waterlogging"
//     ],
//     "others": {
//         "is_today_pick": true,
//         "is_trending": true
//     },
//     "production": true
// }
