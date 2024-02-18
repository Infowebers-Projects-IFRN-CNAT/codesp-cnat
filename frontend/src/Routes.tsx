import { Routes as Router, Route, Navigate, Outlet } from 'react-router-dom'

import Login from './pages/Login/Login.tsx'
import Home from './pages/Home/Home.tsx';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext.tsx';

type Props = {};

const PrivateRoutes = () => {
    const { authenticated } = useContext(AuthContext);

    if(!authenticated) return <Navigate to='/' replace />

    return <Outlet />
}

const Routes = (props: Props) => {
    return (
        <Router>
            <Route path='/' element={<Login />} />
            <Route element={<PrivateRoutes />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Router>
    );
}

export default Routes;