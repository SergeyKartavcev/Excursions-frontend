import { Box, Typography } from "@mui/material";
import {  useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
// import { useEffect, useState } from "react";
// import { fetchEvents } from "../redux/qvests/operations";
// import { getUserInfo } from "../redux/auth/operations";
// import { selectEvents } from "../redux/qvests/selectors";
// import { selectUserRole } from "../redux/auth/selectors";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { deleteEvent } from "../redux/qvests/operations";

// import EventForm from "../components/Qvests/QvestsForm";
// import EventModal from "../components/Qvests/QvestsModal";
// import { Grid } from "@mui/material";
// import styled from "styled-components";
// import { Button } from "@mui/material";
const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const [showModal, setShowModal] = useState(false);
  // const [showEventModal, setShowEventModal] = useState(false);
  // const [selectedEventId, setSelectedEventId] = useState(null);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserInfo());
  //   dispatch(fetchEvents());
  // }, [dispatch]);
  // const events = useSelector(selectEvents);

  // const role = useSelector(selectUserRole);
  // console.log("user role", role);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };
  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  // const handleOpenEve = (_id) => {
  //   setSelectedEventId(_id);
  //   setShowEventModal(true);
  // };

  // const handleCloseEve = () => {
  //   setSelectedEventId(null);
  //   setShowEventModal(false);
  // };

  return (
    <Box
      textAlign={"center"}
      mt={30}
      borderRadius={5}
      sx={{
        fontWeight: "light",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        bgcolor: "success.light",
      }}
    >
      <Typography
        alignItems={"center"}
        variant="h2"
        color="accent "
        fontWeight="fontWeightBold"
        mb={4}
      >
        Экскурсії по Бугському гарду
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        color="secondary"
        fontWeight="fontWeightBold"
        mb={4}
      >
        {isLoggedIn
          ? ` На вас чекають незабутні пригоди разом з нами !!!`
          : "зареэструйся щоб слідкувати за нашими новинами!"}
      </Typography>
      {/* <Container>
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
        {events.length === 0 && <p>Немає доступних екскурсій</p>}
        {events.length > 0 && (
          <Grid container spacing={3}>
            <Typography
              variant="h4"
              color="accent "
              fontWeight="fontWeightBold"
            >
         
              Наші Найближчі подій:
            </Typography>
            {events.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event._id}>
                <EventWrapper
                  onClick={() =>
                    handleOpenEve(event._id, console.log(event._id))
                  }
                >
                  <EventTitle>{event.title}</EventTitle>
                  <EventImage src={event.img} alt={event.title} />

                  <EventLong> Довжина мршруту: {event.long}</EventLong>
                  <EventTime> Тривалість: {event.time}</EventTime>
                  <ButtonS
                    onClick={() =>
                      handleOpenEve(event._id, console.log(event._id))
                    }
                  >
                    Деталі
                  </ButtonS>

                  {role === "admin" && (
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() => dispatch(deleteEvent(event._id))}
                    >
                      <DeleteIcon />
                    </Button>
                  )}
                </EventWrapper>
              </Grid>
            ))}
          </Grid>
        )}
        {selectedEventId && (
          <EventModal
            eventId={selectedEventId}
            handleCloseModal={handleCloseEve}
            showModal={showEventModal}
            setShowModal={setShowEventModal}
          />
        )}
      </Container> */}
    </Box>
  );
};

// const EventWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 280px;
//   height: 350px;
//   border: 1px solid #ccc;
//   border-radius: 20px;
//   margin: 10px;
//   color: black;
//   flex-basis: 300px;
//   /* position: relative; */
//   margin: 10px;
//   cursor: pointer;
// `;

// const EventTitle = styled.h2`
//   font-style: normal;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 18px;
//   letter-spacing: -0.01em;
//   margin-bottom: 20px;
//   color: ${(props) => props.theme.colors.black};
//   word-break: break-all;
// `;

// const EventLong = styled.h2`
//   font-style: normal;
//   font-weight: 300;
//   font-size: 16px;
//   margin-right: 90px;
//   letter-spacing: -0.01em;
//   margin-bottom: 2px;
//   color: ${(props) => props.theme.colors.black};
//   word-break: break-all;
// `;

// const EventTime = styled.h2`
//   font-style: normal;
//   font-weight: 300;
//   font-size: 16px;
//   margin-right: 90px;
//   letter-spacing: -0.01em;
//   margin-bottom: 2px;
//   color: ${(props) => props.theme.colors.black};
//   word-break: break-all;
// `;

// const EventImage = styled.img`
//   width: 95%;
//   height: 70%;
//   margin-bottom: 10px;
//   border-radius: 10px;
// `;

// export const Container = styled.div`
//   padding: 0 ${({ theme }) => theme.spacing[5]}px;
//   margin: auto;
//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     max-width: ${({ theme }) => theme.breakpoints.mobile};
//   }
//   @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
//     padding: 0 ${({ theme }) => theme.spacing[8]}px;
//     width: ${({ theme }) => theme.breakpoints.tablet[0]};
//   }
//   @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
//     padding: 0 ${({ theme }) => theme.spacing[4]}px;
//     width: ${({ theme }) => theme.breakpoints.desktop};
//   }
// `;

// export const ButtonS = styled.button`
//   background-color: #008cba;
//   color: white;
//   padding: 5px 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-left: 160px;
//   margin-bottom: 8px;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-top: 10px;
// `;

export default Home;
