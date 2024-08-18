import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {  registerThunk } from "../../redux/auth/operations";


const RegistrationPage = () => {
    const dispatch=useDispatch();
    const initialValues={
        name:'',
        email:'',
        password:'',
    }
    const handleSubmit=(values,options)=>{
        dispatch(registerThunk(values));
options.resetForm();
    }
  return (
    <div>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>

<Form>
<Field name='name' placeholder="Please type the name"></Field>
    <Field name='email'  placeholder="Please type the email"></Field>
    <Field name='password'  placeholder="Please type the password"></Field>


    <button  type="submit">Sign up</button>

    <p>You already have account? <NavLink to='/login'>SignIn</NavLink></p>
</Form>

    </Formik>
    </div>
  )
};

export default RegistrationPage;

