import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logInThunk } from "../../redux/auth/operations";
import { Navigate, NavLink } from "react-router-dom";
import { Field, Form, Formik } from "formik";

import s from './LoginForm.module.css';

const LoginForm = () => {
    const dispatch=useDispatch();
    const login=useSelector(selectIsLoggedIn);
    const initialValues={
        email:'',
        password:'',
    }
    const handleSubmit=(values, options)=>{
        dispatch(logInThunk(values));

options.resetForm();
    }
    if(login){
     return <Navigate to='/'/>
    }
  return (
    <div className={s.cont}>
     
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
  
<Form className={s.form}>
<h2 className={s.title}>Sign in</h2>
    <Field className={s.field} name='email'  placeholder="Please type the email"></Field>
    <Field className={s.field} name='password' type='password' placeholder="Please type the password"></Field>


    <button  className={s.btn}type="submit">Sign in</button>

    <p className={s.parag}>You don't have the account yet? <NavLink className={s.way}to='/register'>SignUp</NavLink></p>
</Form>

    </Formik>
    </div>
  )
};

export default LoginForm;
