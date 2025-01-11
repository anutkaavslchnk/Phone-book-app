
import { FcPhone, FcPhoneAndroid } from 'react-icons/fc';
import s from './HomePage.module.css';
const HomePage = () => {
  return(
    <>
    <h2 className={s.greetings}>Welcome to the the contact book app! <br/>We hope that this app will be useful for you!
    </h2>
    <div className={s.cont}>
    <FcPhoneAndroid size="120px"/>
    <FcPhone  size="120px"/>
    </div>
 
    </>
  )
};

export default HomePage;
