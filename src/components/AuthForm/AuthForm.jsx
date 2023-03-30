// import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';
// import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
// import { useState } from 'react';
// import Notiflix from 'notiflix';
// import { selectAuthError, selectIsLoggedIn } from '../../redux/auth/selectors';
// import { Loader } from '../Loader';

// export const LoginForm = ({ type }) => {
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const error = useSelector(selectAuthError);
//   const isLoading = useSelector(selectIsLoggedIn);
//   const theme = useTheme();
//   const dispatch = useDispatch();

//   const validateInput = (element, onValidate) => {
//     if (element.value.match(element.pattern)) {
//       onValidate(false);
//       return true;
//     }
//     onValidate(true);
//     return false;
//   };

//   const handleEmailChange = event => {
//     const email = event.target;
//     validateInput(email, setEmailError);
//   };

//   const handlePasswordChange = event => {
//     const password = event.target;
//     validateInput(password, setPasswordError);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const email = e.target.email;
//     const password = e.target.password;
//     const form = e.currentTarget;
//     const isValidEmail = validateInput(email, setEmailError);
//     const isValidPassword = validateInput(password, setPasswordError);
//     if (error) {
//       Notiflix.Notify.failure('произошла ошибка');
//     }
//     if (!isValidEmail || !isValidPassword) {
//       return;
//     }
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <>
//       {isLoading && <Loader />}
//       <Typography
//         variant="h3"
//         align="center"
//         mt={-10}
//         sx={{
//           bgcolor: 'success.light',
//           fontWeight: 'light',
//           boxShadow: 1,
//           borderRadius: 2,
//           p: 2,
//           minWidth: 300,
//         }}
//       >
//         Login
//       </Typography>
//       <Box
//         component="form"
//         noValidate
//         py={3}
//         mx="auto"
//         display="flex"
//         flexDirection="column"
//         gap={2}
//         maxWidth="500px"
//         onSubmit={handleSubmit}
//         autoComplete="off"
//       >
//         <TextField
//           type="email"
//           label="E-mail"
//           name="email"
//           variant="outlined"
//           color="primary"
//           size="small"
//           inputProps={{
//             style: { color: theme.palette.secondary.main },
//             pattern: '^([0-9a-zA-Zd_.-])+@(([a-zA-Zd-])+.)+([a-zA-Zd]{2,4})+$',
//           }}
//           autoComplete="off"
//           focused
//           onChange={handleEmailChange}
//           error={emailError}
//           {...(emailError && {
//             helperText:
//               'Email must contain only latin letters, numbers, @ and dots',
//           })}
//         />
//         <TextField
//           type="password"
//           label="Password"
//           name="password"
//           variant="outlined"
//           color="primary"
//           size="small"
//           inputProps={{
//             style: { color: theme.palette.secondary.main },
//             pattern: '^.{4,12}$',
//           }}
//           autoComplete="new-password"
//           focused
//           onChange={handlePasswordChange}
//           error={passwordError}
//           {...(passwordError && {
//             helperText: 'Password must contain from 4 to 12 characters',
//           })}
//         />
//         <Button variant="outlined" type="submit" color="primary">
//           Submit
//         </Button>
//       </Box>
//     </>
//   );
// };


import { useState } from 'react';
import {
  Button,
  DivPass,
  FormField,
  // IconLink,
  // // IconStyle,
  // IconWrapper,
  Input,
  InputField,
  LinkField,
  StyledLink,
  Error,
} from './AuthForm.styled';
import { Formik } from 'formik';
// import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { loginSchema, registerSchema } from '../../utils/shemas/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import { Loader } from '../Loader';
// import googleImg from '../../images/AuthPages/googleIcon.png';
import cities from './cities.json';
// import { API_BASE_URL } from '../../redux/constants';

const initialValues = {
  email: '',
  password: '',
  name: '',
  city: '',
  phone: '',
  role: '',
};

const AuthForm = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const isRegister = location.pathname === '/register';

  const [step, setStep] = useState(1);
  // const [isPasswordShown, setIsPasswordShown] = useState(false);

  const isLoading = useSelector(selectIsLoading);

  // const handleIsPasswordShownToggle = () => {
  //   setIsPasswordShown(prevState => !prevState);
  // };

  const handleNextButtonClick = validateForm => {
    const validationFields = ['email', 'password'];

    validateForm().then(result => {
      let isValid = true;

      validationFields.forEach(field => {
        if (result[field]) {
          isValid = false;
        }
      });

      if (!isValid) return;
      setStep(2);
    });
  };

  const handleRegisterSubmit = values => {
    const data = {
      email: values.email,
      password: values.password,
      name: values.name,
      city: values.city,
      phone: values.phone,
      role: values.role,
    };

    return dispatch(register(data));
  };

  const handleLoginSubmit = values => {
    const data = {
      email: values.email,
      password: values.password,
    };

    return dispatch(logIn(data));
  };

  return (
    <>
      {isLoading && <Loader />}

      <Formik
        validationSchema={isRegister ? registerSchema : loginSchema}
        initialValues={isRegister ? initialValues : { email: '', password: '' }}
        onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit}
      >
        {({ validateForm }) => (
          <FormField autoComplete="on">
            <>
              {step === 1 && (
                <>
                  <InputField>
                    <Input id="email" type="email" name="email" placeholder="Email" required />
                    <Error name="email" component="div" />
                  </InputField>
                  <InputField margin={!isRegister}>
                    <Input
                      // type={isPasswordShown ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <DivPass >
                    </DivPass>
                    <Error name="password" component="div" />
                  </InputField>
                  {isRegister && (
                    <>
                      <Button
                        margin
                        type="button"
                        onClick={() => {
                          handleNextButtonClick(validateForm);
                        }}
                      >
                        Next
                      </Button>
                    </>
                  )}
                  {!isRegister && <Button type="submit">Login</Button>}
                </>
              )}
              {step === 2 && (
                <>
                  <InputField>
                    <Input id="name" type="text" name="name" placeholder="Name" required />
                    <Error name="name" component="div" />
                  </InputField>
                  <InputField>
                    <Input
                      type="text"
                      list="city"
                      name="city"
                      placeholder="City, Region"
                      required
                    />
                    <datalist id="city">
                      {cities.map(city => (
                        <option key={`${city.city}.${city.lat}`}>
                          {city.city}, {city.admin_name}
                        </option>
                      ))}
                    </datalist>
                    <Error name="city" component="div" />
                  </InputField>
                  <InputField margin>
                    <Input
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      required
                    />
                    <Error name="phone" component="div" />
                  </InputField>
                  <Button type="submit">Registration</Button>
                  <Button outline margin type="button" onClick={() => setStep(1)}>
                    Back
                  </Button>
                </>
              )}
              {isRegister && (
                <LinkField margin>
                  Already have an account? <StyledLink to="/login">Login</StyledLink>
                </LinkField>
              )}
              {!isRegister && (
                <LinkField margin>
                  Don &apos; t have an account? <StyledLink to="/register"> Register </StyledLink>
                </LinkField>
              )}
              {/* <IconWrapper>
                <LinkField> Sign with </LinkField>
                <IconLink href={`${API_BASE_URL}/auth/google`}>
               
                </IconLink>
              </IconWrapper> */}
            </>
          </FormField>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;
