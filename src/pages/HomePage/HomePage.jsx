
import s from './HomePage.module.css';
const HomePage = () => {
  return(
    <>
    <h2 className={s.greetings}>Welcome to the the contact book app! <br/>We hope that this app will be useful for you!
    </h2>
    <img src='/src/img/phone.jpg' alt='phone'  className={s.photo} />
    </>
  )
};

export default HomePage;
