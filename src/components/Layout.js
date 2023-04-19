import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarr } from './AppBar/AppBar';
import { Suspense } from 'react';
import {  Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { SecondNav } from '../components/Navigation/SecondNav';
export const Layout = () => {
  return (
    <Box maxWidth="1700px" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <AppBarr />
      </AppBar>
      <SecondNav/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};