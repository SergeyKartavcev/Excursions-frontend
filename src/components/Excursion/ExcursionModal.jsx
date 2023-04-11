
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useCallback } from "react";
import { Loader } from "../Loader";
import { selectIsLoadingExcursion, selectExcursionItem } from "../../redux/Excursion/selectors";
import { fetchExcursionItem } from "../../redux/Excursion/operations";
import {
  Background,
  ModalWrapper,
  Content,
  Wrapper,
  ExcursionTitle,
  Image,
  ExcursionPrice,
  ExcursionDescription,
  Div,
} from "./Excursion.styled";

export default function ExcursionModal({
  handleCloseModal,
  showModal,
  setShowModal,
  excursionId,
}) {

  const isLoading = useSelector(selectIsLoadingExcursion);
const dispatch = useDispatch();

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

  useEffect(()=>{
    dispatch(fetchExcursionItem(excursionId));
  }, [dispatch, excursionId]);
  
const excursion =  useSelector(selectExcursionItem);

  return (
    <>
      {isLoading && <Loader />}
      {showModal && (
        <Background onClick={handleClickBackground}>
          <ModalWrapper
            showModal={showModal}
            onClick={(e) => e.stopPropagation()}
          >
            <Content>
              
                <Wrapper >
                  <Image src={excursion.img} alt={excursion.title} />
                  <Div>
                    <ExcursionTitle>{excursion.title}</ExcursionTitle>
                    <ExcursionPrice>Вартість: {excursion.price}</ExcursionPrice>
                    <ExcursionDescription>Опис: {excursion.description}
                    </ExcursionDescription>
                  </Div>
                </Wrapper>
              
            </Content>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
}
