import { useEffect, useState } from 'react';



import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

import NotFound from '../../pages/NotFound/NotFound';
import s from './App.module.css';
import { getMeThunk } from '../../redux/auth/operations';
import { PrivateRoute } from '../../Routes/PrivateRoute';
import {  RestrictedRoute } from '../../Routes/RestrictedRoute';
import { selectIsRefresh } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../ContactsPage/ContactsPage';

const App = () => {


  return  (

<>
<div className={s.line}>
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
<Route path="/register" element={ <RestrictedRoute><RegistrationPage></RegistrationPage></RestrictedRoute>}></Route>
<Route path="/login" element={ <RestrictedRoute><LoginPage></LoginPage></RestrictedRoute>}></Route>

<Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </div>
</>
   
  );
};

export default App;