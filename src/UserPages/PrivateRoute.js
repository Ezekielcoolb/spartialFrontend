import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDashboardLayout from "../Controller.js/UserController";


const PrivateRoutes = () => {
    const token = localStorage.getItem("Spatialtoken");

    return(
        token  ? <UserDashboardLayout> <Outlet /> </UserDashboardLayout> : <Navigate to="/admin/login/administarator" />
    )
}
export default PrivateRoutes