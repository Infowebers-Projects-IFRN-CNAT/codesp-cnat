import App from '../App.tsx';
import { createBrowserRouter } from 'react-router-dom'

import Login from '../pages/Login/Login.tsx'
import Register from '../pages/Register/Register.tsx'
import Home from '../pages/Home/Home.tsx';
import NotFound from '../pages/NotFound/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/registro',
        element: <Register />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router;