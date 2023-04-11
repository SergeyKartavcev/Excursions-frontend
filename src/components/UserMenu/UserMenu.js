import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectIsLoggedIn, selectUserName }  from '../../redux/auth/selectors'
import {Box, Typography, Button} from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  console.log('name ', name)


  if (!isLoggedIn) {
    return null; // не показывать меню, если пользователь не авторизован
  }

  return (
    <Box display="flex" >
      <Typography variant="h6"
        align="center"
        ml={20}
        sx={{
          fontWeight: 'light',
          boxShadow: 1,
          borderRadius: 2,
          p: 1,
          minWidth: 200,
          bgcolor: 'warning.light' 
        }} >Welcome {name} </Typography>
      <Button  color="secondary" variant="outlined"  type="button"  onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
