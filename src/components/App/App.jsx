import { useEffect, useState } from 'react';

import s from '../App/App.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import SignUp from '../../pages/RegistrationPage/RegistrationPage';
import SignIn from '../../pages/LoginPage/LoginPage';
import NotFound from '../../pages/NotFound/NotFound';
import { fetchContacts } from '../../redux/contacts/contactsOps';

import Contacts from '../ContactsPage/ContactsPage';
import { getMeThunk } from '../../redux/auth/operations';
import { PrivateRoute } from '../../Routes/PrivateRoute';
import { PublicRoute } from '../../Routes/PublicRoute';
import { selectIsRefresh } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
const isRefreshing=useSelector(selectIsRefresh);
  
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]); 

  return isRefreshing ? <Loader/>: (

<>

<Routes>
<Route path="/" element={<Layout></Layout>}>

<Route index element={<HomePage></HomePage>}/>
<Route path="contacts" element={

 <PrivateRoute>
    <ContactsPage/>
  </PrivateRoute>

  }
  />
  </Route>
<Route path="/register" element={ <PublicRoute><RegistrationPage></RegistrationPage></PublicRoute>}></Route>
<Route path="/login" element={ <PublicRoute><LoginPage></LoginPage></PublicRoute>}></Route>

<Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
</>
   
  );
};

export default App;