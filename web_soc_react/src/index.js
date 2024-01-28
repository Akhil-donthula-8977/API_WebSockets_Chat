import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LayOut } from './layout';

import { BrowserRouter,RouterProvider,createBrowserRouter,createRoutesFromElements, Routes, Route, Link, Router } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
const douter=createBrowserRouter(createRoutesFromElements(
  // this errorEleemt can catch errors from its child components
  <Route path="/" element={ <LayOut></LayOut>}>
  <Route path="/test" element={<App></App>}/>
  </Route>

      
))
root.render(
  <div>
  <RouterProvider router={douter}/>
 
  </div>
);

