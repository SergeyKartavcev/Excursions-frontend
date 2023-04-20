import { NavLink } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import { AccountCircle, PersonAdd } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const AuthNav = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  // const activLink = ({ isActive }) => ({ color: isActive ? "red" : "black" });

  return (
    <Box ml={3} mr={4} display="flex" alignItems="center" justifyContent="flex-end">
      <NavLink
        style={{ textDecoration: "none" }}
       
        to="/register"
      >
        <Typography>
          {matches ? "Реєстрація " : null}
          <IconButton>
            <PersonAdd />
          </IconButton>
        </Typography>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        to="/login"
      >
        <Typography>
          {matches ? "Вхід " : null}
          <IconButton>
            <AccountCircle />
          </IconButton>{" "}
        </Typography>
      </NavLink>
    </Box>
  );
};
