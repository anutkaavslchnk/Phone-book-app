import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/auth/selectors"
import { Navigate, useLocation } from "react-router-dom";

export const RestrictedRoute=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn);
;
const location=useLocation();
if(isLoggedIn){
    return <Navigate to='/' state={location.state??'/'}></Navigate>
}
return children;
}