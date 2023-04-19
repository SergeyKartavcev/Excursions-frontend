
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing, selectIsLoggedIn, selectIsRegistered } from '../redux/auth/selectors';

const Home = lazy(() => import('../pages/Home'));
const Excursions = lazy(() => import('../pages/Excursion'));
const Qvests = lazy(() => import('../pages/Qvests'));
const Videos = lazy(() => import('../pages/Videos'));
const Map = lazy(() => import('../pages/Map'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  // const isAuthenticated = useSelector(selectIsAuthenticated);
useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);
const isRefreshing = useSelector(selectIsRefreshing);
const isLoggedIn = useSelector(selectIsLoggedIn);
const isRegistered = useSelector(selectIsRegistered);
console.log(isRefreshing)
  return (
    <>
    {!isRefreshing ?( <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {isRegistered && (
          <Route path="register" element={<Navigate to="/" replace />} />
        )}
        {isLoggedIn && (
          <Route path="login" element={<Navigate to="/" replace />} />
        )}
        {!isLoggedIn && (
          <>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </>
        )}
        <Route path="excursions" element={<Excursions />} />
        <Route path="qvests" element={<Qvests />} />
        <Route path="videos" element={<Videos />} />
        <Route path="map" element={<Map />} />
        <Route path="rewiews" element={<Reviews />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>): null }
     
    </>
  
  );
};
