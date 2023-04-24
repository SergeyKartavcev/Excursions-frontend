import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWe } from "../../redux/we/operations";
import { TextField, Box } from "@mui/material";
import { selectIsLoadingWe } from "../../redux/we/selectors";
import { Loader } from "../Loader";
import { useFormik } from "formik";
import { Input, AddedImage, FileBox, Button, Label } from "./We.styled";

export default function WeForm() {
  const [img, setImg] = useState(null);
  const [sertificate, setSertificate] = useState(null);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoadingWe);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      gid: "",
      img: "",
      sertificate: "",
    },
    onSubmit: (values) => {
      const data = new FormData();
      data.append("title", values.title);
      data.append("description", values.description);
      data.append("gid", values.gid);
      data.append("img", values.img);
      data.append("sertificate", values.sertificate);
      dispatch(addWe(data));
    },
  });

  const onImageChange = (e) => {
    const { files } = e.currentTarget;
    if (files) {
      setImg(URL.createObjectURL(files[0]));
      formik.setFieldValue("img", files[0]);
    }
  };

  const onSertificateChange = (e) => {
    const { files } = e.currentTarget;
    if (files) {
      setSertificate(URL.createObjectURL(files[0]));
      formik.setFieldValue("sertificate", files[0]);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            onChange={formik.handleChange}
            type="text"
            name="title"
            value={formik.values.title}
            placeholder="Type title"
          />

          <TextField
            onChange={formik.handleChange}
            type="text"
            name="description"
            value={formik.values.description}
            placeholder="Type description"
          />

          <TextField
            onChange={formik.handleChange}
            type="text"
            name="gid"
            value={formik.values.gid}
            placeholder="Type gid"
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
              <img alt="gid" src={img} />
            </AddedImage>
          )}

          {formik.values.sertificate === "" ? (
            <FileBox htmlFor="image">
              <label>
                <Input
                  id="sertificate"
                  name="sertificate"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => {
                    formik.handleChange(e);
                    onSertificateChange(e);
                  }}
                />
              </label>
            </FileBox>
          ) : (
            <AddedImage>
              <img alt="gid" src={sertificate} />
            </AddedImage>
          )}

          <Button variant="contained" type="submit" color="primary">
            Додати
          </Button>
        </Box>
      </form>
    </>
  );
}
