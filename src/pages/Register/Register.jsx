import { BackgroundContainer, Container, Main, Title } from "./Register.styled";
import RegisterForm from "../../components/RegisterForm/RegisterForm";



const RegisterPage = () => {


  return (
    <Main>
      <Container>
        <BackgroundContainer>
          <>
            <Title>Registration</Title>
            <RegisterForm />
          </>
        </BackgroundContainer>
      </Container>
    </Main>
  );
};

export default RegisterPage;
