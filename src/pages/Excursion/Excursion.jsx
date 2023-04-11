import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchExcursions } from "../../redux/Excursion/operations";
import { getUserInfo } from "../../redux/auth/operations";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteExcursion } from "../../redux/Excursion/operations";
import styled from "styled-components";
import ExcursionForm from "../../components/Excursion/ExcursionForm";
import { selectUserRole } from "../../redux/auth/selectors";
import { selectExcursions } from "../../redux/Excursion/selectors";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ExcursionModal from "../../components/Excursion/ExcursionModal";

const Excursions = () => {
  const [showModal, setShowModal] = useState(false);
  const [showExcursionModal, setShowExcursionModal] = useState(false);
  const [selectedExcursionId, setSelectedExcursionId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(fetchExcursions());
  }, [dispatch]);
  const excursions = useSelector(selectExcursions);

  const role = useSelector(selectUserRole);
  console.log("user role", role);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenExc = (_id) => {
    setSelectedExcursionId(_id);
    setShowExcursionModal(true);
  };

  const handleCloseExc = () => {
    setSelectedExcursionId(null);
    setShowExcursionModal(false);
  };

  return (
    <Container>
      {role === "admin" && (
        <ButtonContainer>
          <Button onClick={handleOpenModal}>Відкрити</Button>
        </ButtonContainer>
      )}
      <ExcursionForm
        showModal={showModal}
        setShowModal={setShowModal}
        handleCloseModal={handleCloseModal}
      />
      {excursions.length === 0 && <p>Немає доступних екскурсій</p>}
      {excursions.length > 0 && (
        <Grid container spacing={3}>
          {excursions.map((excursion) => (
            <Grid item xs={12} sm={6} md={4} key={excursion._id}>
              <ExcursionWrapper>
                <ExcursionTitle>{excursion.title}</ExcursionTitle>
                <ExcursionImage src={excursion.img} alt={excursion.title} />
                <ButtonS
                  onClick={() =>
                    handleOpenExc(excursion._id, console.log(excursion._id))
                  }
                >
                  Відкрити
                </ButtonS>
                {role === "admin" && (
                  <Button
                    color="secondary"
                    type="button"
                    onClick={() => dispatch(deleteExcursion(excursion._id))}
                  >
                    <DeleteIcon />
                  </Button>
                )}
              </ExcursionWrapper>
            </Grid>
          ))}
        </Grid>
      )}
      {selectedExcursionId && (
        <ExcursionModal
          excursionId={selectedExcursionId}
          handleCloseModal={handleCloseExc}
          showModal={showExcursionModal}
          setShowModal={setShowExcursionModal}
        />
      )}
    </Container>
  );
};

const ExcursionWrapper = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export default Excursions;
