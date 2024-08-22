import { Outlet } from "react-router-dom";

import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import App from "../App/App";
import AppBar from "../AppBar/AppBar";




const Layout = ({children}) => {
  const isLoggedIn=useSelector(selectIsLoggedIn);
  return (
    <div>
     <AppBar></AppBar>

      <main>
      <Outlet />
        {children}
      
      </main>
    </div>
  )
};

export default Layout;
