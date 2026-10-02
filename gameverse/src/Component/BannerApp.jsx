import { Link,  } from "react-router";

const BannerApp = ({ app,  }) => {
  
  const { coverPhoto, title, description, category, downloadLink } = app;
  return (
    <div
      style={{ backgroundImage: `url(${coverPhoto})` }}
      className=" bg-no-repeat bg-cover rounded-2xl mb-10 h-96 flex"
    >
      <div className="  flex flex-col justify-end items-start flex-1 p-5 pt-40 gap-5 text-black text-shadow-white text-shadow-lg">
        <div className=" space-y-3">
          <p className=" text-4xl  font-bold ">
            {title}
          </p>
          <p>{description}</p>
          <p>{category}</p>
        </div>
        <Link
          to={downloadLink}
          target="-blank"
          className=" btn bg-violet-800 text-white border-0 shadow-none"
        >
          Explore
        </Link>
      </div>
      
    </div>
  );
};

export default BannerApp;

// {
//     "id": "620",
//     "title": "Portal 2",
//     "coverPhoto": "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg",
//     "category": "Puzzle",
//     "downloadLink": "https://store.steampowered.com/app/620/Portal_2/",
//     "description": "A witty co-op and single-player portal puzzle adventure set in Aperture Science.",
//     "ratings": "4.9",
//     "developer": "Valve"
// }
