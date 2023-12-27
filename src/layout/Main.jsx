import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            This is Main ... Nai kono Pain
            <Outlet />
        </div>
    );
};

export default Main;