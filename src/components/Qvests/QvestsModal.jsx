import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useCallback } from "react";
import { Loader } from "../Loader";
import {
  selectIsLoadingQvest,
  selectQvestItem,
} from "../../redux/qvests/selectors";
import { fetchQvestItem } from "../../redux/qvests/operations";

import {
  Background,
  ModalWrapper,
  Content,
  Wrapper,
  QvestTitle,
  Image,
  QvestPrice,
  QvestDescription,
  QvestRoute,
  QvestStops,
  QvestLong,
  QvestTime,
  Div,
  P,
} from "./Qvests.styled";
import CancelIcon from '@mui/icons-material/Cancel';


export default function QvestModal({
  handleCloseModal,
  showModal,
  setShowModal,
  qvestId,
}) {
  const isLoading = useSelector(selectIsLoadingQvest);
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
    dispatch(fetchQvestItem(qvestId));
  }, [dispatch, qvestId]);

  const qvest = useSelector(selectQvestItem);
console.log("qvest",qvest)
  return(
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
             
                <Image src={qvest.img} alt={qvest.title} />
                <Div>
                  <QvestTitle>{qvest.title}</QvestTitle>
                  <div style={{ display: "flex", alignItems: "baseline", }}>
                    {" "}
                    <P>Маршрут:</P>
                    <QvestRoute>{qvest.route}</QvestRoute>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" , }}>
                    <P>Опис: </P>
                    <QvestDescription>
                      {qvest.description}
                    </QvestDescription>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Зупиvent</P>
                    <QvestStops>{qvest.stops}</QvestStops>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Довжина маршруту:</P>
                    <QvestLong>{qvest.long}</QvestLong>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Тривалість єкскурсії:</P>
                    <QvestTime>{qvest.time}</QvestTime>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Вартість: </P>
                    <QvestPrice>{qvest.price}</QvestPrice>
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
