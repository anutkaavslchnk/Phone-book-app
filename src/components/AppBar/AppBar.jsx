import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefresh } from "../../redux/auth/selectors";
import { getMeThunk } from "../../redux/auth/operations";
import AuthNav from "../AuthNav/AuthNav";
import Loader from "../Loader/Loader";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
    const dispatch = useDispatch();
    const refreshUser = useSelector(selectIsRefresh);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    useEffect(() => {
      dispatch(getMeThunk());
    }, [dispatch]); 
  
    return refreshUser ? <Loader/> : (
      <header>
        <Navigation>      </Navigation>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
     
      </header>
    );
};

export default AppBar;
