import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useCallback } from "react";
import { Loader } from "../Loader";
import {
  selectIsLoadingEvent,
  selectEventItem,
} from "../../redux/events/selectors";
import { fetchEventItem } from "../../redux/events/operations";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
} from "@mui/material";
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
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClickBackground}
        >
          <Box
            sx={{
              maxWidth: "1300px",
              backgroundColor: "white",
              borderRadius: "20px",
              border: "2px solid blue", 
            }}
            showModal={showModal}
            onClick={(e) => e.stopPropagation()}
          >
            <Box>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sx={{ maxWidth: 800 }}>
                  <Box display={"flex"}>
                    <Box  sx={{
                        width: "6000px",
                          borderRadius: "10px"
                        }} m={2}>
                      <CardMedia
                        component="img"
                        height={640}
                        image={event.img}
                        alt={event.title}
                      />
                    </Box>

                    <Box ml={3} mt={3}>
                      <Typography
                        variant="h4"
                        fontWeight="fontWeightBold"
                        color="primary"
                        textAlign="center"
                        mb={4}
                        sx={{
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Box mb={3} display={"flex"}>
                        {" "}
                        <Typography
                          fontWeight="fontWeightBold"
                          color="primary"
                          variant="h8"
                          mr={2}
                          sx={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}
                        >
                          Дата:
                        </Typography>
                        <Typography  fontWeight="fontWeightBold"
                          color="grey"
                          variant="h8"
                          mr={2}
                          sx={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}>{event.date}</Typography>
                      </Box>

                      <Box  mb={3}display={"flex"}>
                        <Typography
                          fontWeight="fontWeightBold"
                          color="primary"
                          variant="h8"
                          mr={2}
                          sx={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}
                        >
                          Опис:{" "}
                        </Typography>
                        <Typography  fontWeight="fontWeightBold"
                          color="grey"
                          variant="h8"
                          mr={2}
                          sx={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}>{event.description}</Typography>
                      </Box>

                      <Box  mb={3}display={"flex"}>
                        {" "}
                        <Typography
                          fontWeight="fontWeightBold"
                          color="primary"
                          variant="h8"
                          mr={2}
                          sx={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}
                        >
                          {" "}
                          Час:
                        </Typography>
                        <Typography  fontWeight="fontWeightBold"
                          color="grey"
                          variant="h8"
                          mr={2}
                          sx={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}>{event.time}</Typography>
                      </Box>

                      <Box  mb={3} display={"flex"}>
                        {" "}
                        <Typography
                          fontWeight="fontWeightBold"
                          color="primary"
                          variant="h8"
                          mr={2}
                          sx={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}
                        >
                          Вартість:{" "}
                        </Typography>
                        <Typography  fontWeight="fontWeightBold"
                          color="grey"
                          variant="h8"
                          mr={2}
                          sx={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}>{event.price}</Typography>
                      </Box>
                    </Box>
                    <CancelIcon
                      sx={{ mr: 1, mt: 1, fontSize: 40 }}
                      onClick={handleClickBackground}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
