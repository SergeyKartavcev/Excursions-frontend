import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExcursion, fetchExcursions } from '../../redux/Excursion/operations';
import DeleteIcon from '@mui/icons-material/Delete'
import styled from 'styled-components';
import ExcursionForm from '../../components/Excursion/ExcursionForm';
// import { selectUserRole } from '../../redux/auth/selectors';
import { selectExcursions } from '../../redux/Excursion/selectors';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ExcursionModal from '../../components/Excursion/ExcursionModal';
const ExcursionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  max-height: 500px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  color: black;
  flex-basis: 300px;
`;

const ExcursionTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 10px;
  color: black;
  word-break: break-all;
`;


const ExcursionImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ExcursionPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ExcursionDescription = styled.p`
  font-size: 16px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Excursions = () => {
  const [showModal, setShowModal] = useState(false);
  const [showExcursionModal, setShowExcursionModal] = useState(false);
  const [selectedExcursionId, setSelectedExcursionId] = useState(null);
  const dispatch = useDispatch();
  const excursions = useSelector(selectExcursions);

  useEffect(() => {
    dispatch(fetchExcursions());
  }, [dispatch]);

  const handleDeleteExcursion = (_id) => {
    dispatch(deleteExcursion(_id));
  };

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
      <ButtonContainer>
        <Button onClick={handleOpenModal}>Відкрити</Button>
      </ButtonContainer>
      <ExcursionForm showModal={showModal} setShowModal={setShowModal} handleCloseModal={handleCloseModal} />
      {excursions.length === 0 && <p>Немає доступних екскурсій</p>}
      {excursions.length > 0 && (
        <Grid container spacing={3}>
          {excursions.map((excursion) => (
            <Grid item xs={12} sm={6} md={4} key={excursion._id}>
           <ExcursionWrapper onClick={() => handleOpenExc(excursion._id, console.log(excursion._id))}>

                <ExcursionTitle>{excursion.title}</ExcursionTitle>
                <ExcursionImage src={excursion.img} alt={excursion.title} />
                <ExcursionPrice>{excursion.price}</ExcursionPrice>
                <ExcursionDescription>{excursion.description}</ExcursionDescription>
                <Button
                  color='secondary'
                  type='button'
                  onClick={() => handleDeleteExcursion(excursion._id)}
                >
                  <DeleteIcon />
                </Button>
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

export default Excursions;
