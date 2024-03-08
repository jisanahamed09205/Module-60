import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace></Navigate>;
};

export default PrivateRoute;