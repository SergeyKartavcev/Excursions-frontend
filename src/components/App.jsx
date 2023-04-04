import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from '../redux/auth/operations';
// import { useAuth } from '../hooks';
import { selectIsRefreshing } from '../redux/auth/selectors';

const Home = lazy(() => import('../pages/Home'));
const Excursions = lazy(() => import('../pages/Excursion/Excursion'));
const Videos = lazy(() => import('../pages/Videos'));
const Map = lazy(() => import('../pages/Map'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();
const isRefreshing = useSelector(selectIsRefreshing);

useEffect(() => {
  dispatch(refresh());
}, [dispatch]);
  return (
    <>
    {!isRefreshing ?( <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/excursions" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/excursions" component={<Login />} />
          }
        />
        <Route
          path="excursions"
          element={
            <RestrictedRoute redirectTo="/excursions" component={<Excursions />} />
          }
        />
            <Route
          path="videos"
          element={
            <RestrictedRoute redirectTo="/videos" component={<Videos/>} />
          }
        />
             <Route
          path="map"
          element={
            <RestrictedRoute redirectTo="/map" component={<Map/>} />
          }
        />
      </Route>
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>): null }
     
    </>
  
  );
};
