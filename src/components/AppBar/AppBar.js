import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { List, Box } from "@mui/material";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export const AppBarr = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("isloggedIn", isLoggedIn);

  return (
<Box sx={{ display: "flex", justifyContent: "space-between", ml: 5,}}>
  <List sx={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
    <Navigation />
  </List>
  {isLoggedIn ? <UserMenu /> : <AuthNav />}
</Box>

  );
};
