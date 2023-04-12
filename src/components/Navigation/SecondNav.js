import { NavLink } from "react-router-dom";
import { Button, List } from "@mui/material";

export const SecondNav = () => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <NavLink to="/rewiews" style={{ textDecoration: "none" }} activeStyle={{ color: "red" }}>
        <Button
          sx={{
            ml: 50,
            mr: 5,
            color: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white"
            }
          }}
          variant="contained"
          color="primary"
        >
          Відгуки
        </Button>
      </NavLink>
      <NavLink to="/contacts" style={{ textDecoration: "none" }} activeStyle={{ color: "red" }}>
        <Button
          sx={{
            mr: 5,
            color: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white"
            }
          }}
          variant="contained"
          color="primary"
        >
          Контакти
        </Button>
      </NavLink>
    </List>
  );
};
