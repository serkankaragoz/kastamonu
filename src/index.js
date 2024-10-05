import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import './styles/index.css';
import Page1 from './components/Page1/Page1';
import DynamicPage from './components/DynamicPage/DynamicPage';

const router = createHashRouter([
  {
    path: "/",
    element: <div>haloo</div>,
  },{
    path: "/pag",
    element: <div>HMMMMM</div>,
  },{
    path: "/page/1",
    element: <Page1 />,
  },{
    path: "/pages",
    element: <DynamicPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
