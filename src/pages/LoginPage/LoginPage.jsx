import { Field, Form, Formik } from "formik";
import { Navigate, NavLink } from "react-router-dom";
import { logInThunk } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


const LoginPage = () => {
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
    <div>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>

<Form>

    <Field name='email'  placeholder="Please type the email"></Field>
    <Field name='password' type='password' placeholder="Please type the password"></Field>


    <button type="submit">Sign in</button>

    <p>You don't have the account yet? <NavLink to='/register'>SignUp</NavLink></p>
</Form>

    </Formik>
    </div>
  )
};

export default LoginPage;
