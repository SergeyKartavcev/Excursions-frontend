// import { NavLink } from 'react-router-dom';
// import { Typography, List } from '@mui/material';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import { useSelector } from 'react-redux';

// export const Navigation = () => {
// const isLoggedIn = useSelector(selectIsLoggedIn)
//   const activLink = ({ isActive }) => ({ color: isActive ? 'red' : 'black' });
//   return (
//     <List
//       sx={{
//         display: 'flex',
//         flexDirection: 'row',
//       }}
//     >
//       <NavLink style={activLink} to="/">
//         <Typography mr={5} variant="h6">
//           Домашня сторінка
//         </Typography>
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink style={activLink} to="/excursions">
//           <Typography mr={100} variant="h6" >
//             Екскурсії
//           </Typography>
//         </NavLink>
//       )}
//     </List>
//   );
// };
