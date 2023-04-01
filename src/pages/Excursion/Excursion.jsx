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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HoverText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  background-color: blue;
  color: white;
  text-align: center;
  padding-top: 20px;
`; 
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
  position: relative;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.2s ease;

  &:hover ${HoverText} {
    display: block;
    background-color: #f1f1f1;
  }
`;




ExcursionWrapper.hover = styled(ExcursionWrapper)`
  &:hover ${HoverText} {
    opacity: 0.8;
  }
`;

const ExcursionTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.black};
  word-break: break-all;
`;


const ExcursionImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
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
 
  useEffect(() => {
    dispatch(fetchExcursions());
  }, [dispatch]);
  const excursions = useSelector(selectExcursions);
  console.log(excursions)
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
              <Wrapper>
           <ExcursionWrapper onClick={() => handleOpenExc(excursion._id, console.log(excursion._id))}>
                <ExcursionTitle>{excursion.title}</ExcursionTitle>
                <ExcursionImage src={excursion.img} alt={excursion.title} />
                <HoverText>Натисніть щоб побачити розгорнуту інформацію</HoverText>
                <Button
                  color='secondary'
                  type='button'
                  onClick={() => handleDeleteExcursion(excursion._id)}
                >
                  <DeleteIcon />
                </Button>
              </ExcursionWrapper></Wrapper>
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
