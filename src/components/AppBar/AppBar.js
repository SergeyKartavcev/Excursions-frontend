// import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from '../../hooks';
import { List } from '@mui/material';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const AppBarr = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  // const { isLoggedIn } = useAuth();
console.log(isLoggedIn)
  return (
    <List
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      ml: 5,  
      mr: 30,
    }}
    >
      {/* <Navigation /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </List>
  );
};
