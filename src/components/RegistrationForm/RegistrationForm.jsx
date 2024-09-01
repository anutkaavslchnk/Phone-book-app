import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";

import s from './RegistrationForm.module.css'
const RegistrationForm = () => {
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

<Form className={s.form}>
<h2 className={s.title}>Sign up</h2>
<Field  className={s.field}name='name' placeholder="Please type the name"></Field>
    <Field className={s.field} name='email'  placeholder="Please type the email"></Field>
    <Field className={s.field} name='password'  placeholder="Please type the password"></Field>


    <button  className={s.btn} type="submit">Sign up</button>

    <p className={s.parag}>You already have account? <NavLink  className={s.way} to='/login'>SignIn</NavLink></p>
</Form>

    </Formik>
    </div>
  )
};

export default RegistrationForm;
