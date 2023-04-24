import { useSelector, useDispatch } from "react-redux";
import { selectWe } from "../../redux/we/selectors";
import { useEffect } from "react";
import { fetchWe } from "../../redux/we/operations";
import { deleteWe } from "../../redux/we/operations";
import { selectUserRole } from "../../redux/auth/selectors";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function WeList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWe());
  }, [dispatch]);

  const we = useSelector(selectWe);
  console.log("we", we);
  const role = useSelector(selectUserRole);

  return (
    <>
      {we.map((we) => (
        <>
          <Typography color="primary" fontWeight="fontWeightBold" ml={5}>
            {we.title}
          </Typography>

          <Typography color="primary" fontWeight="fontWeightBold" ml={5}>
            {we.description}
          </Typography>

          <Typography color="primary" fontWeight="fontWeightBold" ml={5}>
            {we.gid}
          </Typography>

          <CardMedia component="img" height="440" image={we.img} alt={we.gid} />

          <CardMedia
            component="img"
            height="440"
            image={we.sertificate}
            alt={we.gid}
          />
        </>
      ))}

      {role === "admin" && (
        <Button
          color="secondary"
          type="button"
          onClick={() => dispatch(deleteWe(we))}
        >
          Видалити
        </Button>
      )}
    </>
  );
}
