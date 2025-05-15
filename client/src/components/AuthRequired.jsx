import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {
    const location = useLocation();
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn) {
        return <Navigate to="/login"
            state={{ message: "You must login first", from: location?.pathname }}
            replace
        />
    }

    return <Outlet />
}
export default AuthRequired;

