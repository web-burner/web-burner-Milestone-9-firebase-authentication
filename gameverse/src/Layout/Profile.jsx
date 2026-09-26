
import { Outlet } from "react-router";

const Profile = () => {

  return (
    <div className="">
      
        <div className=" bg-white space-y-3 px-10 w-2/5 mx-auto rounded-2xl py-5">
             <Outlet/>
        </div>
      
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
