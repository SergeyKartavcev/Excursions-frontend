import styled from "styled-components";
import { selectExcursions } from "../../redux/Excursion/selectors";
import { useSelector } from "react-redux";
import React, { useEffect, useCallback } from "react";
import { Loader } from "../Loader";
import PropTypes from "prop-types";
import { selectIsLoadingExcursion } from "../../redux/Excursion/selectors";


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

const ModalWrapper = styled.div`
  width: 200px;
  height: auto;
  @media (min-width: 768px) {
    width: 600px;
    height: 620px;
    padding: 40px 80px;
  }
`;
export const ModalContent = styled.div`
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 0;

  @media (min-width: 768px) {
    width: 420px;
  }
`;

const ExcursionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default function ExcursionModal( {  showModal, setShowModal, handleCloseModal  } ) {
    const excursions = useSelector(selectExcursions);
    const isLoading = useSelector(selectIsLoadingExcursion);
  
    const keyPress = useCallback(
      (e) => {
        if (e.key === "Escape" && showModal) {
          setShowModal(false);
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(() => {
      document.addEventListener("keydown", keyPress);
      return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);
  
    const handleClickBackground = (e) => {
      if (e.target === e.currentTarget) {
        handleCloseModal();
      }
    };
  
    return (
      <>
        {isLoading && <Loader />}
        {showModal && (
          <Background onClick={handleClickBackground}>
            <ModalWrapper showModal={showModal} onClick={(e) => e.stopPropagation()}>
              <ModalContent>
                {excursions.map((excursion) => (
                  <ExcursionWrapper key={excursion._id}>
                    <ExcursionTitle>{excursion.title}</ExcursionTitle>
                    <ExcursionImage src={excursion.img} alt={excursion.title} />
                    <ExcursionPrice>{excursion.price}</ExcursionPrice>
                    <ExcursionDescription>
                      {excursion.description}
                    </ExcursionDescription>
                  </ExcursionWrapper>
                ))}
              </ModalContent>
            </ModalWrapper>
          </Background>
        )}
      </>
    );
  }
  

ExcursionModal.propTypes = {
    openExcursion: PropTypes.bool,
    setOpenExcursion: PropTypes.func,
  };