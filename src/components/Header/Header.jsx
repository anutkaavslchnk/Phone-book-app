import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
    
        
    <header className={s.wrappper}>

<h2>Auth</h2>
<h3>Name</h3>
<ul className={s.list}>
    <li><NavLink className={s.item} to="/">Home</NavLink></li>
    <li><NavLink className={s.item} to='/signin'>Sign in</NavLink></li>
    <li><NavLink className={s.item} to='/signup'>Sign up</NavLink></li>
</ul>
    </header>
    </>



  )
};

export default Header;
