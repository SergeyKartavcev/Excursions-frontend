import { Container, Main, Title, BackgroundContainer } from './Login.styled';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectError, selectIsLoading } from '../../redux/auth/selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleLogin = useCallback(
    (email, password) => {
      dispatch(logIn({ email, password }));
    },
    [dispatch]
  );

  return (
    <Main>
      <Container>
        <BackgroundContainer>
          <Title>Login</Title>
          <LoginForm handleLogin={handleLogin} error={error} isLoading={isLoading} />
        </BackgroundContainer>
      </Container>
    </Main>
  );
};

export default LoginPage;
