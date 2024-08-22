import React from "react";
import s from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.cont}>
      <ul className={s.list}>
    
        <li><NavLink className={s.item} to="/">Home</NavLink></li>
        {isLoggedIn && (
          <li><NavLink className={s.item} to="/contacts">Contacts</NavLink></li>
        )}
      </ul>
    </nav>

  )
};

export default Navigation;
