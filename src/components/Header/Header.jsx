import React from "react";
import s from './Header.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { LogOutThunk } from "../../redux/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const login = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();


  

  return (
    <header className={s.wrappper}>
      <h3>{login ? user : "Guest"}</h3>
      <ul className={s.list}>
        <li><NavLink className={s.item} to="/">Home</NavLink></li>
        {!login ? (
          <>
            <li><NavLink className={s.item} to='/login'>Sign in</NavLink></li>
            <li><NavLink className={s.item} to='/register'>Sign up</NavLink></li>
          </>
        ) : (
          <>
            <li><NavLink className={s.item} to="/contacts">Contacts</NavLink></li>
            <li>
              <button onClick={()=>dispatch(LogOutThunk())}>Exit</button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;