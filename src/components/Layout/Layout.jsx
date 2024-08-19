import { Outlet } from "react-router-dom";

import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";


const Layout = () => {
  const isLoggedIn=useSelector(selectIsLoggedIn);
  return (
    <div>
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
    <Outlet/>
    </div>
  )
};

export default Layout;
