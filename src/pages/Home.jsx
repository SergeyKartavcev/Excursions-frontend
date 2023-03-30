import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';


const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
//  const userName = useSelector(selectUserName);
//   console.log(userName)
  return (
    <Box
    textAlign={'center'}
    mt={30}
    borderRadius={5}
    sx={{
      fontWeight: 'light',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 300,
      bgcolor: 'success.light'
    }}
    >
      
      <Typography
      alignItems={'center'}
        variant="h2"
        color="accent "
        fontWeight="fontWeightBold"
        mb={4}
      >
        Экскурсії по Бугському гарду 
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        color="secondary"
        fontWeight="fontWeightBold"
        mb={4}
      >
        {isLoggedIn
          ? `, На вас чекають незабутні пригоди разом з нами !!!`
          : 'зареэструйся щоб слідкувати за нашими новинами!'}
      </Typography>
    </Box>
  );
};

export default Home;
