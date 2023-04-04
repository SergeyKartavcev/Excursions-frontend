import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const AuthNav = () => {
  const activLink = ({ isActive }) => ({ color: isActive ? 'red' : 'black' });

  return (
    <Box ml={3} display="flex">
      <NavLink style={activLink} to="/">
        <Typography mr={30} variant="h6" >
          Домашня 
        </Typography>
      </NavLink>
      <NavLink style={activLink} to="/excursions">
        <Typography mr={3} variant="h6" >
          Екскурсії
        </Typography>
      </NavLink>
      <NavLink style={activLink}  to="/videos">
        <Typography mr={3} variant="h6" >
          Відео
        </Typography>
      </NavLink>
      <NavLink style={activLink} to="/map">
        <Typography mr={3} variant="h6" >
          Карта
        </Typography>
      </NavLink>
      <NavLink style={activLink} to="/register">
        <Typography mr={3} ml={30} variant="h6" >
          Руєстрація
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
