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



export const Error = styled.div`
  position: absolute;
  margin-top: 5px;
  color: red;
  font-size: 12px;
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
  z-index: 10;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 608px;
    height: 620px;
    padding: 40px 80px;
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
/* position: absolute;
top:0; */
  width: 240px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 448px;
    position: absolute;
top:0;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 10px;
  padding: 10px 20px 8px 20px;
  @media (min-width: 768px) {
    width: 100%;
    height: 48px;
    margin-bottom: ${(props) => (props.bottom ? "15px" : "15px")};
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
  height: 27px;
  margin-bottom: 10px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #111111;
  @media (min-width: 768px) {
    height: 27px;
    margin-bottom: 12px;
    margin-top: ${(props) => (props.top ? "60px" : "28px")};
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    padding-top: 10px;
  }
`;


export const Button = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
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
  font-weight: 500;
  font-size: 20px;
  line-height: 19px;
  width: 200px;
  height: 44px;
  /* margin-bottom: ${(props) => (props.margin ? "10px" : 0)}; */
  :hover {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;