import React from "react";
import s from './Navigation.module.css';
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className={s.cont}>
            <ul className={s.list}>
    
    <li><NavLink className={s.item} to="/">Home</NavLink></li>
    </ul>
    </nav>

  )
};

export default Navigation;
