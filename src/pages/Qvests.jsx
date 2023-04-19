import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchQvests } from "../redux/qvests/operations";
import { getUserInfo } from "../redux/auth/operations";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteQvest } from "../redux/qvests/operations";
import styled from "styled-components";
import QvestForm from "../components/Qvests/QvestsForm";
import { selectUserRole } from "../redux/auth/selectors";
import { selectQvests } from "../redux/qvests/selectors";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import QvestModal from "../components/Qvests/QvestsModal";

const Qvests = () => {
  const [showModal, setShowModal] = useState(false);
  const [showQvestModal, setShowQvestModal] = useState(false);
  const [selectedQvestId, setSelectedQvestId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(fetchQvests());
  }, [dispatch]);

  const qvests = useSelector(selectQvests);
  const role = useSelector(selectUserRole);
  

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenQve = (_id) => {
    setSelectedQvestId(_id);
    setShowQvestModal(true);
  };

  const handleCloseQve = () => {
    setSelectedQvestId(null);
    setShowQvestModal(false);
  };

  return (
    <Container>
      {role === "admin" && (
        <Box>
          <Button sx={{ ml: 100 }} onClick={handleOpenModal}>Відкрити</Button>
        </Box>
      )}
      <QvestForm
        showModal={showModal}
        setShowModal={setShowModal}
        handleCloseModal={handleCloseModal}
      />
      {qvests.length === 0 && <p>Немає доступних квестів</p>}
      {qvests.length > 0 && (
        <Grid container spacing={3}>
          {qvests.map((qvest) => (
            <Grid item xs={12} sm={6} md={4} key={qvest._id}>
              <QvestWrapper
                onClick={() =>
                    handleOpenQve(qvest._id, console.log(qvest._id))
                }
              >
                <ExcursionTitle>{qvest.title}</ExcursionTitle>
                <ExcursionImage src={qvest.img} alt={qvest.title} />

                <ExcursionLong>
                  {" "}
                  Довжина мршруту: {qvest.long}
                </ExcursionLong>
                <ExcursionTime> Тривалість: {qvest.time}</ExcursionTime>
                <ButtonS
                  onClick={() =>
                    handleOpenQve(qvest._id)
                  }
                >
                  Деталі
                </ButtonS>

                {role === "admin" && (
                  <Button
                    color="secondary"
                    type="button"
                    onClick={() => dispatch(deleteQvest(qvest._id))}
                  >
                    <DeleteIcon />
                  </Button>
                )}
              </QvestWrapper>
            </Grid>
          ))}
        </Grid>
      )}
      {selectedQvestId && (
        <QvestModal
          qvestId={selectedQvestId}
          handleCloseModal={handleCloseQve}
          showModal={showQvestModal}
          setShowModal={setShowQvestModal}
        />
      )}
    </Container>
  );
};

const QvestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 350px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 10px;
  color: black;
  flex-basis: 300px;
  /* position: relative; */
  margin: 10px;
  cursor: pointer;
`;

const ExcursionTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.black};
  word-break: break-all;
`;

const ExcursionLong = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  margin-right: 90px;
  letter-spacing: -0.01em;
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.black};
  word-break: break-all;
`;

const ExcursionTime = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  margin-right: 90px;
  letter-spacing: -0.01em;
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.black};
  word-break: break-all;
`;

const ExcursionImage = styled.img`
  width: 95%;
  height: 70%;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[5]}px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: ${({ theme }) => theme.breakpoints.mobile};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: 0 ${({ theme }) => theme.spacing[8]}px;
    width: ${({ theme }) => theme.breakpoints.tablet[0]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.spacing[4]}px;
    width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;

export const ButtonS = styled.button`
  background-color: #008cba;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 160px;
  margin-bottom: 8px;
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-top: 10px;
// `;

export default Qvests;
