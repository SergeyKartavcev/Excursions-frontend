import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import {  selectUserName } from "../../redux/auth/selectors";
import { Box, Typography, Button } from "@mui/material";


export const UserMenu = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  console.log("name ", name);



  

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography
        variant="h6"
        align="center"
        fontWeight="light"
        sx={{
          color: "#ff6d00",
          backgroundColor:  "transparent",
          boxShadow:  1 ,
          borderRadius: 2,
          p: 1,
          minWidth: 200,
          "@media (max-width:600px)": {
            fontSize: "1rem",
            minWidth: "auto",
            padding: "0.5rem",
          },
        }}
      >
        Welcome {name}
      </Typography>
      <Button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{
          mr: 2,
          ml: 1,
          backgroundColor:  "#ff6d00",
          color:  "#ffffff",
          "@media (max-width:600px)": {
            fontSize: "0.8rem",
            minWidth: "auto",
            padding: "0.3rem",
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
