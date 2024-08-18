import { useEffect, useState } from 'react';

// import firstVal from './values.json';
// import { nanoid } from 'nanoid';
import s from '../App/App.module.css'

import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SignIn/SignIn';
import NotFound from '../../pages/NotFound/NotFound';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import Home from '../../pages/Home/Home';
import Contacts from '../Contacts/Contacts';

const App = () => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); 

  return (
<>

<Routes>
<Route path="/" element={<Layout></Layout>}>

<Route index element={<Home></Home>}/>
<Route path="/contacts" element={<Contacts></Contacts>}/>
</Route>
<Route path="/register" element={<SignUp></SignUp>}></Route>
<Route path="/login" element={<SignIn></SignIn>}></Route>

<Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
</>
   
  );
};

export default App;