import { NavLink } from "react-router-dom";
import { Button, List } from "@mui/material";

export const SecondNav = () => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavLink
        to="/excursions"
        style={{ textDecoration: "none" }}
        activestyle={{ color: "red" }}
      >
        <Button
          sx={{
            m: { xs: 1, sm: 2 },
            color: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
          variant="contained"
          color="primary"
        >
          Екскурсії
        </Button>
      </NavLink>

      <NavLink
        to="/qvests"
        style={{ textDecoration: "none" }}
        activestyle={{ color: "red" }}
      >
        <Button
          sx={{
            m: { xs: 1, sm: 2 },
            color: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
          variant="contained"
          color="primary"
        >
          Квести
        </Button>
      </NavLink>

      <NavLink
        to="/videos"
        style={{ textDecoration: "none" }}
        activestyle={{ color: "red" }}
      >
        <Button
          sx={{
            m: { xs: 1, sm: 2 },
            color: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
          variant="contained"
          color="primary"
        >
          Відео
        </Button>
      </NavLink>

      <NavLink
        to="/map"
        style={{ textDecoration: "none" }}
        activestyle={{ color: "red" }}
      >
        <Button
          sx={{
            m: { xs: 1, sm: 2 },
            color: "black",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
          variant="contained"
          color="primary"
        >
          Карта
        </Button>
      </NavLink>
    </List>
  );
};
