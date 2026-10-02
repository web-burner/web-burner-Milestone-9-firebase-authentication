import { use } from "react";
import { Outlet } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Spinner from "../Component/Spinner";

const Profile = () => {
  const { loading } = use(AuthContext);

  return (
    <div className="">
      <div>{!loading ? <Spinner /> : <Outlet />}</div>
    </div>
  );
};

export default Profile;

// {
//     "id": "220",
//     "title": "Half-Life 2",
//     "coverPhoto": "https://cdn.cloudflare.steamstatic.com/steam/apps/220/header.jpg",
//     "category": "FPS",
//     "downloadLink": "https://store.steampowered.com/app/220/HalfLife_2/",
//     "description": "A cinematic sci-fi shooter about resistance, physics puzzles, and a city under alien rule.",
//     "ratings": "4.9",
//     "developer": "Valve"
// }
