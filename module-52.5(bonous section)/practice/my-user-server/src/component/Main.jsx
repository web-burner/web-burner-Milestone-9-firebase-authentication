import { Outlet } from "react-router";

const Main = () => {
    return (
        <div>
            <h1>main</h1>
            <Outlet/>
        </div>
    );
};

export default Main;