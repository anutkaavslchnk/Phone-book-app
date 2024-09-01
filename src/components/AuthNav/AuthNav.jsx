
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
const AuthNav = () => {
  return (
    <>
<div className={s.cont}>
    <ul className={s.list}>
    <li><NavLink className={s.item} to='/login'>Sign in</NavLink></li>
    <li><NavLink className={s.item} to='/register'>Sign up</NavLink></li>
  </ul>
  </div>
   <div className={s.line}></div>
   </>
  )
};

export default AuthNav;
