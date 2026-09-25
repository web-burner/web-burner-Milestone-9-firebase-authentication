import { use } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
const TopRatedApp = ({ app }) => {
  const { user } = use(AuthContext);
  const { id, title, coverPhoto, category, ratings, developer } = app;
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        user
          ? navigate(`/gameDetails/${id}`, {
              state: `${title} by ${developer}`,
            })
          : navigate("/login" ,{state: `/gameDetails/${id}`})
      }
      className="rounded-2xl border border-gray-300 bg-white hover:-translate-y-2 duration-200 ease-in-out hover:shadow-2xl"
    >
      <figure>
        <img
          src={coverPhoto}
          className=" h-35 rounded-t-2xl"
          alt={`${title} image`}
        />
      </figure>
      <div className="p-4">
        <h1 className=" font-bold text-lg">{title}</h1>
        <div className=" flex justify-between items-center">
          <p className=" text-gray-400">{category}</p>
          <p className=" text-yellow-500 flex  items-center gap-2">
            <FaStar />
            <span>{ratings}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopRatedApp;

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
