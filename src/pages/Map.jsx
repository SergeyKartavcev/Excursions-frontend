import styled from 'styled-components';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchMap } from '../../src/redux/map/operations';
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteMap } from '../../src/redux/map/operations';
import MapForm from '../components/Map/MapForm';
import { selectUserRole } from '../redux/auth/selectors';
import { selectMap } from '../redux/map/selectors';
import { useState, useEffect } from 'react';


import MapLink from '../components/Map/MapLink';

const Map = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchMap());
  }, [dispatch]);

  const role = useSelector(selectUserRole);
  const maps = useSelector(selectMap);


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const mapsList = Object.keys(maps).map((key) => maps[key]);


  return (
    <Container>
      {role=== 'admin' &&  <ButtonContainer>
        <Button onClick={handleOpenModal}>Відкрити</Button>
      </ButtonContainer>}
      <MapForm openModal={openModal} setOpenModal={setOpenModal} handleCloseModal={handleCloseModal} />
      {mapsList.map((map) => (
  <MapWrapper key={map._id.$oid}>
    <MapTitle>{map.title}</MapTitle>
    <MapLink  href={map.link} location={map.location} zoom={map.zoom} />
    {role === 'admin'&& <Button
                  color='secondary'
                  type='button'
                  onClick={() => dispatch(deleteMap(map._id))}
                >
                  <DeleteIcon />
                </Button>}
  </MapWrapper>
))}
    </Container>
  );
};




const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid blue;
  border-radius: 20px;
  margin: 10px;
  color: black;

  /* position: relative; */
  margin: 10px;
  cursor: pointer;

`;

const MapTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.black};
  word-break: keep-all;
  text-indent: 10px;
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
  background-color: #008CBA;
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


export default Map ;