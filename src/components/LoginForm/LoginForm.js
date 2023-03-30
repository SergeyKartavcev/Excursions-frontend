import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { selectAuthError, selectIsLoggedIn } from '../../redux/auth/selectors';
import { Loader } from '../Loader';

export const LoginForm = ({ type }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectIsLoggedIn);
  const theme = useTheme();
  const dispatch = useDispatch();

  const validateInput = (element, onValidate) => {
    if (element.value.match(element.pattern)) {
      onValidate(false);
      return true;
    }
    onValidate(true);
    return false;
  };

  const handleEmailChange = event => {
    const email = event.target;
    validateInput(email, setEmailError);
  };

  const handlePasswordChange = event => {
    const password = event.target;
    validateInput(password, setPasswordError);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email;
    const password = e.target.password;
    const form = e.currentTarget;
    const isValidEmail = validateInput(email, setEmailError);
    const isValidPassword = validateInput(password, setPasswordError);
    if (error) {
      Notiflix.Notify.failure('произошла ошибка');
    }
    if (!isValidEmail || !isValidPassword) {
      return;
    }
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Typography
        variant="h3"
        align="center"
        mt={-10}
        sx={{
          bgcolor: 'success.light',
          fontWeight: 'light',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        Login
      </Typography>
      <Box
        component="form"
        noValidate
        py={3}
        mx="auto"
        display="flex"
        flexDirection="column"
        gap={2}
        maxWidth="500px"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          type="email"
          label="E-mail"
          name="email"
          variant="outlined"
          color="primary"
          size="small"
          inputProps={{
            style: { color: theme.palette.secondary.main },
            pattern: '^([0-9a-zA-Zd_.-])+@(([a-zA-Zd-])+.)+([a-zA-Zd]{2,4})+$',
          }}
          autoComplete="off"
          focused
          onChange={handleEmailChange}
          error={emailError}
          {...(emailError && {
            helperText:
              'Email must contain only latin letters, numbers, @ and dots',
          })}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          variant="outlined"
          color="primary"
          size="small"
          inputProps={{
            style: { color: theme.palette.secondary.main },
            pattern: '^.{4,8}$',
          }}
          autoComplete="new-password"
          focused
          onChange={handlePasswordChange}
          error={passwordError}
          {...(passwordError && {
            helperText: 'Password must contain from 4 to 8 characters',
          })}
        />
        <Button variant="outlined" type="submit" color="primary">
          Submit
        </Button>
      </Box>
    </>
  );
};
