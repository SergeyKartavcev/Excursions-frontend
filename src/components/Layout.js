import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarr } from './AppBar/AppBar';
import { Suspense } from 'react';
import { AppBar, Box } from '@mui/material';

export const Layout = () => {
  return (
    <Box maxWidth="1700px" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <AppBarr />
      </AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};