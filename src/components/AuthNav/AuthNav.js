import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const AuthNav = () => {
  const activLink = ({ isActive }) => ({ color: isActive ? 'red' : 'black' });

  return (
    <Box ml={3} display="flex">
      <NavLink style={activLink} to="/register">
        <Typography mr={3} ml={30} variant="h6" >
          Реєстрація
        </Typography>
      </NavLink>
      <NavLink style={activLink} to="/login">
        <Typography  variant="h6" >
          Логінізація{' '}
        </Typography>
      </NavLink>
    </Box>
  );
};
