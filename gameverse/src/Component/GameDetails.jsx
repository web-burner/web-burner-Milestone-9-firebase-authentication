import { FaStar } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useNavigate, useParams } from "react-router";

const GameDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const matchedApp = apps.find((app) => app.id === id);
  const {
    coverPhoto,
    title,
    category,
    description,
    developer,
    ratings,
    downloadLink,
  } = matchedApp;

  const navigate = useNavigate();
  const path = useLocation().state
  return (
    <div className=" h-120 p-10 rounded-2xl bg-base-100 shadow-sm w-10/12 mx-auto">
<title>{path}</title>
      <figure className=" mb-5">
        <img
          className=" w-52 rounded-xl"
          src={coverPhoto}
          alt={`${title} image`}
        />
      </figure>
      <div>
        <span className=" bg-violet-200 text-violet-800 p-2 rounded-2xl">
          {category}
        </span>
        <h2 className="text-3xl font-bold mt-3">{title}</h2>
        <p className=" text-gray-400">{description}</p>
        <div className=" flex gap-5 my-5">
          <div className=" bg-violet-50 border border-gray-300 p-5 rounded-2xl flex flex-col justify-center items-center">
            <p className=" text-gray-500">Ratings</p>
            <p className=" text-lg font-bold flex gap-2 justify-center items-center ">
              {ratings} <FaStar className="text-yellow-400" />
            </p>
          </div>
          <div className=" bg-violet-50 border border-gray-300 p-5 rounded-2xl flex flex-col justify-center items-center">
            <p className=" text-gray-500">Developer</p>
            <p className=" text-lg font-bold">{developer}</p>
          </div>
        </div>
        <div className="card-actions justify-start">
          <Link to={downloadLink} target="_blank" className="btn btn-primary">
            Get the game
          </Link>
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;

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
