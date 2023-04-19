import styled from "styled-components";

export const FileBox = styled.div`
  margin-top: 10px;
  width: 140px;
  height: 140px;
  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 182px;
    height: 182px;
  }
`;

export const AddedImage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  & > img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 182px;
    height: 182px;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const ModalOverlay = styled.div`
  background-attachment: fixed;
  width: 280px;
  height: 550px;
  padding: 40px 20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.colors.white};

  border-radius: 10px;

  @media (min-width: 768px) {
    width: 608px;
    height: 620px;
    padding: 40px 80px;
    z-index: 10;
  }
`;

export const ModalContent = styled.div`
  border-radius: 20px;
  width: 240px;
  display: flex;
  flex-direction: column;
  top: 0;

  @media (min-width: 768px) {
    width: 420px;
  }
`;

export const Form = styled.form`
  width: 240px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 448px;
    position: absolute;
    top: 0;
    margin-top: 15px;
    margin-left: 60px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 10px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 5px;
  padding: 5px 5px 4px 5px;
  @media (min-width: 768px) {
    width: 100%;
    height: 20px;
    margin-bottom: ${(props) => (props.bottom ? "5px" : "5px")};
  }
  ::placeholder {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #535353;
    padding-left: 10px;
  }
`;
export const Label = styled.label`
  margin-bottom: 5px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #111111;
  @media (min-width: 768px) {
    height: 27px;
    margin-bottom: 5px;
    margin-top: 5px;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const Button = styled.button`
  margin-left: 120px;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: ${({ theme }) => theme.colors.white};
  color: #111111;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  width: 200px;
  height: 24px;
  /* margin-bottom: ${(props) => (props.margin ? "10px" : 0)}; */
  :hover {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

//модальное окно для карточки

export const ModalWrapper = styled.div`
  width: 200px;
  height: auto;
  background: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 1100px;
    height: 650px;
    padding: 20px 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  border: 2px solid #f59256;
  border-radius: 20px;
  /* padding: 10px; */
  margin-bottom: 10px;
  color: black;
  flex-basis: 300px;
  height: 600px;
  @media (min-width: 768px) {
    display: flex;
    width: 1100px;
    height: 650px;
  }
`;

export const QvestTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 8px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.black};
`;

export const Image = styled.img`
  width: 500px;
  height: 400px;
  margin-bottom: 10px;
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 500px;
    height: 650px;
  }
`;

export const QvestPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const QvestRoute = styled.p`
  font-size: 16px;
`;

export const QvestDescription = styled.p`
  font-size: 16px;
`;
export const QvestStops = styled.p`
  font-size: 16px;
`;
export const QvestLong = styled.p`
  font-size: 16px;
`;
export const QvestTime = styled.p`
  font-size: 16px;
`;

export const Div = styled.div`
  margin-left: 10px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const P = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 8px;
  letter-spacing: -0.01em;
  margin-right: 5px;
  color: ${(props) => props.theme.colors.black};
`;
