import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { addExcursion } from "../../redux/Excursion/operations";
import { selectIsLoadingExcursion } from "../../redux/Excursion/selectors";

import { Loader } from "../Loader";
import {
  Form,
  Input,
  Label,
  AddedImage,
  FileBox,
  Button,
  Error,
  ModalOverlay,
  ModalContent,
  Background,
} from "./Excursion.styled";

export default function ExcursionForm({ showModal, setShowModal }) {
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      img: "",
      price: "",
      description: "",
    },
    onSubmit: (values) => {
      const data = new FormData();
      data.append("title", values.title);
      data.append("img", values.img);
      data.append("price", values.price);
      data.append("description", values.description);

      dispatch(addExcursion(data));
      closeModal();
    },
  });

  

  const isLoading = useSelector(selectIsLoadingExcursion);


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

                <Label htmlFor="text">Price:</Label>
                <Input
                  bottom
                  onChange={formik.handleChange}
                  type="number"
                  name="price"
                  value={formik.values.price}
                  required
                  autoFocus
                  placeholder="price"
                  onBlur={formik.handleBlur}
                />
                <Label htmlFor="text">Опис</Label>
                <Input
                  onChange={formik.handleChange}
                  type="text"
                  name="description"
                  value={formik.values.description}
                  placeholder="Type description"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description ? (
                  <Error>{formik.errors.description}</Error>
                ) : null}
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
ExcursionForm.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
