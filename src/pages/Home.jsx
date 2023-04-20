import {
  Box,
  Card,
  CardMedia,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useEffect, useState } from "react";
import { fetchEvents } from "../redux/events/operations";
import { getUserInfo } from "../redux/auth/operations";
import { selectEvents } from "../redux/events/selectors";
import { selectUserRole } from "../redux/auth/selectors";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteEvent } from "../redux/events/operations";
import EventForm from "../components/Events/EventForm";
import EventModal from "../components/Events/EventModal";
import { Grid } from "@mui/material";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(fetchEvents());
  }, [dispatch]);
  const events = useSelector(selectEvents);

  const role = useSelector(selectUserRole);
  console.log("user role", role);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenEve = (_id) => {
    setSelectedEventId(_id);
    setShowEventModal(true);
  };

  const handleCloseEve = () => {
    setSelectedEventId(null);
    setShowEventModal(false);
  };

  return (
    <Box
      textAlign={"center"}
      mt={1}
      sx={{
        fontWeight: "light",
        boxShadow: 1,
        borderRadius: 5,
        p: 2,
        minWidth: 300,
        border: "2px solid blue",
      }}
    >
      <Typography
        variant="h2"
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
        Экскурсії по Бугському гарду
      </Typography>
      <Container>
        {role === "admin" && (
          <ButtonContainer>
            <Button onClick={handleOpenModal}>Відкрити</Button>
          </ButtonContainer>
        )}
        <EventForm
          showModal={showModal}
          setShowModal={setShowModal}
          handleCloseModal={handleCloseModal}
        />

        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="h6"
              color="primary"
              fontWeight="bold"
              sx={{
                textAlign: "center",
                marginBottom: "20px",
                borderBottom: "2px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              Наші найближчі події
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {events.length === 0 && <p>Немає доступних екскурсій</p>}
            {events.length > 0 && (
              <Grid container spacing={3}>
                {events.map((event) => (
                  <Grid item xs={12} sm={6} md={4} key={event._id}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 280,
                        height: 380,
                        borderRadius: 5,
                        margin: 10,
                        color: "black",
                        flexBasis: 300,
                        cursor: "pointer",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                        transition: "transform 0.2s",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          transform: "scale(1.1)",
                        },
                        "@media (max-width: 768px)": {
                          width: 200,
                          height: 280,
                          fontSize: 14,
                        },
                      }}
                      onClick={() => handleOpenEve(event._id)}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          mt: 3,
                        }}
                      >
                        {event.title}
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image={event.img}
                        alt={event.title}
                      />
                      <Typography
                        variant="body2"
                        color="blue"
                        mt={3}
                        sx={{
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                          textTransform: "uppercase",
                        }}
                      >
                        Дата прохдження: {event.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="blue"
                        sx={{
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                          textTransform: "uppercase",
                        }}
                      >
                        Час: {event.time}
                      </Typography>

                      <Button
                        size="small"
                        onClick={() => handleOpenEve(event._id)}
                        sx={{
                          color: "white",
                          backgroundColor: "black",
                          borderRadius: "20px",
                          padding: "2px 5px",
                          mt: 3,
                          "&:hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        Деталі
                      </Button>

                      {role === "admin" && (
                        <Button
                          color="secondary"
                          type="button"
                          onClick={() => dispatch(deleteEvent(event._id))}
                        >
                          <DeleteIcon />
                        </Button>
                      )}
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </AccordionDetails>
        </Accordion>

        {selectedEventId && (
          <EventModal
            eventId={selectedEventId}
            handleCloseModal={handleCloseEve}
            showModal={showEventModal}
            setShowModal={setShowEventModal}
          />
        )}
      </Container>
    </Box>
  );
};

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export default Home;
