import { register } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectError, selectIsLoading, selectIsRegistered } from '../../redux/auth/selectors';
import { Box, Button, TextField,  useTheme } from '@mui/material';
import Notiflix from 'notiflix';
import { Loader } from '../Loader';
// import { AUTH_TYPES } from '../constants';

 const RegisterForm = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const isRegister = useSelector(selectIsRegistered);
  const theme = useTheme();


  const validateInput = (element, onValidate) => {
    if (element.value.match(element.pattern)) {
      onValidate(false);
      return true;
    }
    onValidate(true);
    return false;
  };

  const handleNameChange = event => {
    const name = event.target;
    validateInput(name, setNameError);
  };

  const handleEmailChange = event => {
    const email = event.target;
    validateInput(email, setEmailError);
  };

  const handlePasswordChange = event => {
    const password = event.target;
    validateInput(password, setPasswordError);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = e.target?.name;
    const email = e.target.email;
    const password = e.target.password;

    const isValidName = isRegister ? validateInput(name, setNameError) : true;
    const isValidEmail = validateInput(email, setEmailError);
    const isValidPassword = validateInput(password, setPasswordError);

    if (!isValidName || !isValidEmail || !isValidPassword) {
      return;
    }
    if (error) {
      Notiflix.Notify.failure('произошла ошибка');
    }
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    Notiflix.Notify.success('Будь ласка перейдіть на свою пошту і підтвердіть реєстрацію');
    form.reset();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Box
        component="form"
        noValidate
        py={4}
        mx="auto"
        display="flex"
        flexDirection="column"
        gap={2}
        maxWidth="500px"
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <TextField
          type="text"
          required
          minLength="4"
          maxLength="8"
          label="Name"
          name="name"
          variant="outlined"
          size="small"
          inputProps={{
            style: { color: theme.palette.secondary.main },
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          autoComplete="on"
          focused
          onChange={handleNameChange}
          error={nameError}
          {...(nameError && {
            helperText:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          })}
        />

        <TextField
          type="email"
          required
          label="E-mail"
          name="email"
          variant="outlined"
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
          required
          label="Password"
          name="password"
          variant="outlined"
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
            helperText: 'Password must contain from 4 to 8 characters',
          })}
        />
        <Button variant="outlined" type="submit" >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default RegisterForm;