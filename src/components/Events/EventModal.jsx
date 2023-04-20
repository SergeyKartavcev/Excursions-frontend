import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useCallback } from "react";
import { Loader } from "../Loader";
import {
  selectIsLoadingEvent,
  selectEventItem,
} from "../../redux/events/selectors";
import { fetchEventItem } from "../../redux/events/operations";
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
  ExcursionTime,
  Div,
  P,
} from "./Event.styled";

export default function ExcursionModal({
  handleCloseModal,
  showModal,
  setShowModal,
  eventId,
}) {
  const isLoading = useSelector(selectIsLoadingEvent);
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
    dispatch(fetchEventItem(eventId));
  }, [dispatch, eventId]);

  const event = useSelector(selectEventItem);

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
                <Image src={event.img} alt={event.title} />
                <Div>
                  <ExcursionTitle>{event.title}</ExcursionTitle>
                  <div style={{ display: "flex", alignItems: "baseline", }}>
                    {" "}
                    <P>Дата</P>
                    <ExcursionRoute>{event.date}</ExcursionRoute>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" , }}>
                    <P>Опис: </P>
                    <ExcursionDescription>
                      {event.description}
                    </ExcursionDescription>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P> час:</P>
                    <ExcursionTime>{event.time}</ExcursionTime>
                  </div>

                  <div  style={{ display: "flex", alignItems: "baseline" }}>
                    {" "}
                    <P>Вартість: </P>
                    <ExcursionPrice>{event.price}</ExcursionPrice>
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
