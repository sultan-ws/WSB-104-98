import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RouteLayout from './assests/RouteLayout';
import Home from './components/Home';
import Dummy from './components/Dummy';
import Login from './components/Login';
import Context from './assests/Context';
import Admin from './components/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RouteLayout />}>
        <Route path='' element={<Home />} />
        <Route path='dummy' element={<Dummy />} />
        <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='/login' element={<Login />} />
    </>
  )
);

root.render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
