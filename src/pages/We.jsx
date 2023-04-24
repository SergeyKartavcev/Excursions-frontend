import { Box } from "@mui/material";
import WeForm from "../components/We/WeForm";
import WeList from "../components/We/WeList";
import { selectUserRole } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

const WePage = () => {

  const role = useSelector(selectUserRole);
  return (
    <Box sx={{ p: 3 }}>
     <WeList />
      {role === "admin" && <WeForm />}
    </Box>
  );
};

export default WePage;
