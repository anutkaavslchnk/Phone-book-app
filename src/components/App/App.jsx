import { useEffect, useState } from 'react';

import s from '../App/App.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SignIn/SignIn';
import NotFound from '../../pages/NotFound/NotFound';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import Home from '../../pages/Home/Home';
import Contacts from '../Contacts/Contacts';
import { getMeThunk } from '../../redux/auth/operations';
import { PrivateRoute } from '../../Routes/PrivateRoute';
import { PublicRoute } from '../../Routes/PublicRoute';
import { selectIsRefresh } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';

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

<Route index element={<Home></Home>}/>
<Route path="contacts" element={

 <PrivateRoute>
    <Contacts/>
  </PrivateRoute>

  }
  />
  </Route>
<Route path="/register" element={ <PublicRoute><SignUp></SignUp></PublicRoute>}></Route>
<Route path="/login" element={ <PublicRoute><SignIn></SignIn></PublicRoute>}></Route>

<Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
</>
   
  );
};

export default App;