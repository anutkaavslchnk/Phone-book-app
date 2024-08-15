import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";


const SignIn = () => {
    const initialValues={
        email:'',
        password:'',
    }
    const handleSubmit=values=>{
console.log(values);
    }
  return (
    <div>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>

<Form>

    <Field name='email'  placeholder="Please type the email"></Field>
    <Field name='password'  placeholder="Please type the password"></Field>


    <button>Sign up</button>

    <p>You don't have the account yet? <NavLink to='/signup'>SignUp</NavLink></p>
</Form>

    </Formik>
    </div>
  )
};

export default SignIn;
