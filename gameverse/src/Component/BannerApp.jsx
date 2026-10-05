import { Link } from "react-router";

const BannerApp = ({ app }) => {
  const { coverPhoto, title, description, category, downloadLink } = app;
  return (
    <div
      style={{ backgroundImage: `url(${coverPhoto})` }}
      className=" bg-no-repeat bg-cover rounded-2xl mb-4 md:mb-10 md:h-96 h-56 flex"
    >
      <div className="  flex flex-col justify-end items-start flex-1 p-5 pt-40 gap-1 md:gap-5 text-black ">
        <div className=" md:space-y-3 text-shadow-white text-shadow-lg">
          <p className=" md:text-4xl  font-bold ">{title}</p>
          <p className=" text-sm">{description}</p>
          <p className=" text-sm">{category}</p>
        </div>
        <Link
          to={downloadLink}
          target="_blank"
          className="bg-violet-800 text-white border-0 shadow-none btn-xs text-sm p-1 px-2 rounded-md md:px-3 md:py-2"
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
