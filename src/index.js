import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import AddSchool from './components/Pages/AddSchool';
import AddChildren from './components/Pages/AddChildren';
import AddOrganization from './components/Pages/AddOrganization';
import Overview from './components/Pages/Overview';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home';
import Layout from './components/layout/Layout';
import Login from './components/Forms/Login';
import SchoolFor from './components/Forms/SchoolFor';
import ChildrenForm from './components/Forms/ChildrenForm';
import CorporateForm from './components/Forms/CorporateForm';
import Register from './components/Forms/Register';
import PaymentForm from './components/Forms/PaymentForm';
import SimpleForm from './components/Forms/SimpleForm';
// import { Home } from '@mui/icons-material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route exact path='/' element={<Home />}></Route> */}
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<SimpleForm />} />
      <Route path='/register' element={<PaymentForm />} />
      
      <Route path='/admin' element={<App />} >
      <Route path='/admin/overview' element={<Overview />} />
      <Route path='/admin/add-school' element={<SchoolFor />} />
      <Route path='/admin/add-children' element={<ChildrenForm />} />
      <Route path='/admin/add-organization' element={<CorporateForm />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
