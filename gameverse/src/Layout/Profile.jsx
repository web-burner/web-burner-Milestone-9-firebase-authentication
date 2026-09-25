import { use } from "react";
import { AuthContext } from "../Auth/AuthContext";

const Profile = () => {
    const {user} = use(AuthContext)
console.log(user);

    return (
        <div>
            <h1>profile</h1>
        </div>
    );
};

export default Profile;