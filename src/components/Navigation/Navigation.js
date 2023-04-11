import { NavLink } from "react-router-dom";
import { Typography, List } from "@mui/material";


export const Navigation = () => {
  const activLink = ({ isActive }) => ({ color: isActive ? "red" : "black" });
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
        
      }}
    >
      <NavLink style={activLink} to="/">
        <Typography mr={50} variant="h6">
          Домашня
        </Typography>
      </NavLink>
        <NavLink style={activLink} to="/excursions">
          <Typography mr={5} variant="h6">
            Екскурсії
          </Typography>
        </NavLink>
        <NavLink style={activLink} to="/videos">
          <Typography mr={5} variant="h6">
            Відео
          </Typography>
        </NavLink>
        <NavLink style={activLink} to="/map">
          <Typography mr={20} variant="h6">
            Карта
          </Typography>
        </NavLink>
    
    </List>
  );
};
