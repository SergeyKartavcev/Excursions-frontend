// import { NavLink } from "react-router-dom";
// import { Typography, List } from "@mui/material";

// export const Navigation = () => {
//   const activLink = ({ isActive }) => ({ color: isActive ? "red" : "black" });
//   return (
//     <List
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//       }}
//     >
//       <NavLink style={activLink} to="/">
//         <Typography mr={50} variant="h6">
//           Домашня
//         </Typography>
//       </NavLink>
//       <NavLink style={activLink} to="/rewiews">
//         <Typography mr={5} variant="h6">
//           Відгуки
//         </Typography>
//       </NavLink>
//       <NavLink style={activLink} to="/contacts ">
//         <Typography mr={5} variant="h6">
//           Контакти
//         </Typography>
//       </NavLink>
//     </List>
//   );
// };










import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PhoneIcon from "@mui/icons-material/Phone";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

export const Navigation = () => {
  const activLink = ({ isActive }) => ({ color: isActive ? "red" : "black" });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    {
      text: "Домашня",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "Відгуки",
      icon: <RateReviewIcon />,
      link: "/rewiews",
    },
    {
      text: "Контакти",
      icon: <PhoneIcon />,
      link: "/contacts",
    },
    {
      text: "Про Нас",
      icon: <SupervisorAccountIcon />,
      link: "/we",
    },
  ];

  const drawerList = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem
          button
          key={item.text}
          component={NavLink}
          to={item.link}
          onClick={toggleDrawer(false)}
          style={activLink}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text}  />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Toolbar
        sx={{
          display: { md: "none" },
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawerList}
      </Drawer>
      <List
        sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
      >
        {menuItems.map((item, index) => (
       <ListItem
       button
       key={item.text}
       component={NavLink}
       to={item.link}
       onClick={toggleDrawer(false)}
       style={activLink}
     >
            {item.icon}
            <ListItemText primary={item.text} sx={{ width: 200 }}/>
          </ListItem>
        ))}
      </List>
    </>
  );
};
