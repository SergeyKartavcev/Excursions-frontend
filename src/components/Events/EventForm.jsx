import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { addEvent } from "../../redux/events/operations";
import { selectIsLoadingEvent } from "../../redux/events/selectors";
import CancelIcon from "@mui/icons-material/Cancel";
import { Loader } from "../Loader";
import {
  Form,
  Input,
  Label,
  AddedImage,
  FileBox,
  Button,
  ModalOverlay,
  ModalContent,
  Background,
} from "./Event.styled";

export default function EventForm({ showModal, setShowModal }) {
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      img: "",
      description: "",
      time: "",
      price: "",
    },
    onSubmit: (values) => {
      const data = new FormData();
      data.append("title", values.title);
      data.append("date", values.date);
      data.append("img", values.img);
      data.append("description", values.description);
      data.append("time", values.time);
      data.append("price", values.price);

      dispatch(addEvent(data));
      closeModal();
    },
  });

  const isLoading = useSelector(selectIsLoadingEvent);

  const onImageChange = (e) => {
    const { files } = e.currentTarget;
    if (files) {
      setImg(URL.createObjectURL(files[0]));
      formik.setFieldValue("img", files[0]);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        formik.resetForm();
      }
    },
    [setShowModal, showModal, formik]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const closeModal = () => {
    setShowModal((prev) => !prev);
    formik.resetForm();
  };

  return (
    <>
      {isLoading && <Loader />}
      {showModal ? (
        <Background>
          <ModalOverlay showModal={showModal}>
            <ModalContent>
              <CancelIcon
                sx={{ ml: 80, fontSize: 40, top: 0 }}
                onClick={closeModal}
              />
              <Form onSubmit={formik.handleSubmit}>
                <Label htmlFor="text">Назва</Label>
                <Input
                  onChange={formik.handleChange}
                  type="text"
                  name="title"
                  value={formik.values.title}
                  placeholder="Type title"
                />
                <Label htmlFor="text">Дата</Label>
                <Input
                  onChange={formik.handleChange}
                  type="text"
                  name="date"
                  value={formik.values.date}
                  placeholder="Type date"
                />
                {formik.values.img === "" ? (
                  <FileBox htmlFor="image">
                    <label>
                      <Input
                        id="img"
                        name="img"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => {
                          formik.handleChange(e);
                          onImageChange(e);
                        }}
                      />
                    </label>
                  </FileBox>
                ) : (
                  <AddedImage>
                    <img alt="pet" src={img} />
                  </AddedImage>
                )}
                <Label htmlFor="text">Опис</Label>
                <Input
                  onChange={formik.handleChange}
                  type="text"
                  name="description"
                  value={formik.values.description}
                  placeholder="Type description"
                />               
                <Label htmlFor="text"> Час </Label>
                <Input
                  onChange={formik.handleChange}
                  type="text"
                  name="time"
                  value={formik.values.time}
                  placeholder="Type time"
                />

                <Label htmlFor="text">Price:</Label>
                <Input
                  onChange={formik.handleChange}
                  type="text"
                  name="price"
                  value={formik.values.price}
                  placeholder="price"
                />

                <Button type="submit">Відправити</Button>
              </Form>
            </ModalContent>
          </ModalOverlay>
        </Background>
      ) : null}
    </>
  );
}
EventForm.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
