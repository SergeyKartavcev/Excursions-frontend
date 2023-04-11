import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../src/redux/videos/operations";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteVideo } from "../../src/redux/videos/operations";
import styled from "styled-components";
import VideosForm from "../components/Videos/VideosForm";
import { selectUserRole } from "../redux/auth/selectors";
import { selectVideos } from "../redux/videos/selectors";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
// import YouTube from 'react-youtube';
import VideoLink from "../components/Videos/VideoLink";

const Videos = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  const role = useSelector(selectUserRole);
  const videos = useSelector(selectVideos);

  // const handleDeleteExcursion = (_id) => {
  //   dispatch(deleteExcursion(_id));
  // };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      {role === "admin" && (
        <ButtonContainer>
          <Button onClick={handleOpenModal}>Відкрити</Button>
        </ButtonContainer>
      )}
      <VideosForm
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleCloseModal={handleCloseModal}
      />
      {videos.length === 0 && <p>Немає доступних екскурсій</p>}
      {videos.length > 0 && (
        <Grid container spacing={3}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video._id}>
              <VideoWrapper>
                <VideoTitle>{video.title}</VideoTitle>
                <VideoLink href={video.link} />
                {role === "admin" && (
                  <Button
                    color="secondary"
                    type="button"
                    onClick={() => dispatch(deleteVideo(video._id))}
                  >
                    <DeleteIcon />
                  </Button>
                )}
              </VideoWrapper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  border: 2px solid blue;
  border-radius: 20px;
  margin: 10px;
  color: black;
  flex-basis: 300px;
  /* position: relative; */
  margin: 10px;
  cursor: pointer;
`;

const VideoTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.black};
  word-break: keep-all;
  text-indent: 10px;
`;

// const VideoLink = styled.a`
//   width: 80%;
//   height: 80%;
//   margin-bottom: 10px;
//   border-radius: 10px;
//   &:hover {
//     color: red; // цвет текста ссылки при наведении
//     text-decoration: none; // убираем подчеркивание ссылки при наведении
//   }
// `;

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
  background-color: #008cba;
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

export default Videos;
