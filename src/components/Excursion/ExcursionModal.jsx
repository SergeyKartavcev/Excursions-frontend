import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useCallback } from "react";
import { Loader } from "../Loader";
import {
  selectIsLoadingExcursion,
  selectExcursionItem,
} from "../../redux/excursion/selectors";
import { fetchExcursionItem } from "../../redux/excursion/operations";
import CancelIcon from '@mui/icons-material/Cancel';
import {
  Background,
  ModalWrapper,
  Content,
  Wrapper,
  ExcursionTitle,
  Image,
  ExcursionPrice,
  ExcursionDescription,
  ExcursionRoute,
  ExcursionStops,
  ExcursionLong,
  ExcursionTime,
  Div,
  P,
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

  useEffect(() => {
    dispatch(fetchExcursionItem(excursionId));
  }, [dispatch, excursionId]);

  const excursion = useSelector(selectExcursionItem);

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
             
              <Wrapper>
                <Image src={excursion.img} alt={excursion.title} />
                <Div>
                  <ExcursionTitle>{excursion.title}</ExcursionTitle>
                  <div style={{ display: "flex", alignItems: "baseline", }}>
                    {" "}
                    <P>Маршрут:</P>
                    <ExcursionRoute>{excursion.route}</ExcursionRoute>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" , }}>
                    <P>Опис: </P>
                    <ExcursionDescription>
                      {excursion.description}
                    </ExcursionDescription>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Зупинки:</P>
                    <ExcursionStops>{excursion.stops}</ExcursionStops>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Довжина маршруту:</P>
                    <ExcursionLong>{excursion.long}</ExcursionLong>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Тривалість єкскурсії:</P>
                    <ExcursionTime>{excursion.time}</ExcursionTime>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Вартість: </P>
                    <ExcursionPrice>{excursion.price}</ExcursionPrice>
                  </div>
                </Div>
                <CancelIcon sx={{mr: 1, mt: 1,  fontSize: 40  }} onClick={handleClickBackground}/>
              </Wrapper>
            </Content>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
}
