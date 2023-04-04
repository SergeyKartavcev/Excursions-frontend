import { useDispatch, useSelector } from "react-redux";
import React, {  useEffect, useCallback } from "react";
import { useFormik } from "formik";
import { addMap } from "../../redux/map/operations";
import { selectIsLoadingMap } from "../../redux/map/selectors";
import { Loader } from "../Loader";
import {
  Form,
  Input,
  Label,
  Button,
  Error,
  ModalOverlay,
  ModalContent,
  Background,
} from "./Map.styled";

export default function ExcursionForm({ openModal, setOpenModal }) {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      location: "",
      zoom: "",
    },
    onSubmit: (values) => {
        const data = new FormData();
        data.append("title", values.title);
        data.append("link", values.link);
        data.append("location", values.location);
        data.append("zoom", values.zoom);
        const fields = {
          title: values.title,
          link: values.link,
          location: values.location,
          zoom: values.zoom,
        };
      
        dispatch(addMap(fields));
        closeModal();
      },
      
  });

  

const isLoading = useSelector(selectIsLoadingMap);




  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && openModal) {
        setOpenModal(false);
        formik.resetForm();
      }
    },
    [setOpenModal, openModal, formik]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const closeModal = () => {
    setOpenModal((prev) => !prev);
    formik.resetForm();
  };


  return (
    <>
      {isLoading && <Loader />}
      {openModal ? (
        <Background>
          <ModalOverlay openModal={openModal}>
            <ModalContent>
              <Form onSubmit={formik.handleSubmit}>
                <Label htmlFor="text">Tittle of ad</Label>
                <Input
                  onChange={formik.handleChange}
                  type="text"
                  name="title"
                  value={formik.values.title}
                  placeholder="Type title"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.title && formik.errors.title ? (
                  <Error>{formik.errors.title}</Error>
                ) : null}

              
                <Label htmlFor="text">Video:</Label>
                <Input
                  bottom
                  onChange={formik.handleChange}
                  type="text"
                  name="link"
                  value={formik.values.link}
                  placeholder="link"
                  onBlur={formik.handleBlur}
                />
                <Label htmlFor="text">Tittle of ad</Label>
                <Input
                  onChange={formik.handleChange}
                  type="text"
                  name="location"
                  value={formik.values.location}
                  placeholder="Type location"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.location && formik.errors.location ? (
                  <Error>{formik.errors.location}</Error>
                ) : null}
                     <Label htmlFor="text">Video:</Label>
                <Input
                  bottom
                  onChange={formik.handleChange}
                  type="text"
                  name="zoom"
                  value={formik.values.zoom}
                  placeholder="zoom"
                  onBlur={formik.handleBlur}
                />
                <Button type="submit" >
                  Відправити
                </Button>
              </Form>
            </ModalContent>
          </ModalOverlay>
        </Background>
      ) : null}
    </>
  );
}

