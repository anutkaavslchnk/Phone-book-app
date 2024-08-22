import React from "react";
import s from './UserMenu.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logOutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const login = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();


  

  return (
    <header className={s.wrapper}>
    <h3>{login ? user.name : "Please log in"}</h3>
    <ul className={s.list}>

    
     
          
          <li>
            <button onClick={() => dispatch(logOutThunk())}>Exit</button>
          </li>
   
      
          
    
      
    </ul>
  </header>
  );
};

export default UserMenu;