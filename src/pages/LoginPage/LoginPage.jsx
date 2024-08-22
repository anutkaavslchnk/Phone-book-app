import { Field, Form, Formik } from "formik";
import { Navigate, NavLink } from "react-router-dom";
import { logInThunk } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import LoginForm from "../../components/LoginForm/LoginForm";


const LoginPage = () => {
   
  return (
    <LoginForm></LoginForm>
  )
};

export default LoginPage;
