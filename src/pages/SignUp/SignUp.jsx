import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";


const SignUp = () => {
    const initialValues={
        name:'',
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
<Field name='name' placeholder="Please type the name"></Field>
    <Field name='email'  placeholder="Please type the email"></Field>
    <Field name='password'  placeholder="Please type the password"></Field>


    <button>Sign up</button>

    <p>You already have account? <NavLink to='/signin'>SignIn</NavLink></p>
</Form>

    </Formik>
    </div>
  )
};

export default SignUp;

