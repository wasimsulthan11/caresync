import { use } from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
    const user = true
    return user ? <Outlet/>: <Navigate to="/admin"/>

}
export default ProtectedRoutes
