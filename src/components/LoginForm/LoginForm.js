import { Box, Button, TextField, useTheme } from '@mui/material';
import { useState, useCallback } from 'react';
import Notiflix from 'notiflix';
import { Loader } from '../Loader';

const LoginForm = ({ handleLogin, error, isLoading }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const theme = useTheme();

  const validateInput = useCallback((element, onValidate) => {
    if (element.value.match(element.pattern)) {
      onValidate(false);
      return true;
    }
    onValidate(true);
    return false;
  }, []);

  const handleEmailChange = useCallback((event) => {
    const email = event.target;
    validateInput(email, setEmailError);
  }, [validateInput]);

  const handlePasswordChange = useCallback((event) => {
    const password = event.target;
    validateInput(password, setPasswordError);
  }, [validateInput]);

  const handleSubmit = useCallback(
    (e) => {
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
      handleLogin(form.elements.email.value, form.elements.password.value);
      form.reset();
    },
    [error, handleLogin, validateInput]
  );

  return (
    <>
      {isLoading && <Loader />}
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
        autoComplete="on"
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
          autoComplete="on"
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
            pattern: '^.{4,12}$',
          }}
          autoComplete="new-password"
          focused
          onChange={handlePasswordChange}
          error={passwordError}
          {...(passwordError && {
            helperText: 'Password must contain from 4 to 12 characters',
          })}
        />
        <Button variant="outlined" type="submit" color="primary">
          Submit
        </Button>
      </Box>
    </>
  );
};


export default LoginForm;