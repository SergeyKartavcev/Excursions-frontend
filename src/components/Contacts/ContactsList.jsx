import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { deleteContactById } from "../../redux/contacts/operations";
import { selectUserRole } from "../../redux/auth/selectors";
import {
  FaTelegram,
  FaViber,
  FaInstagram,
  FaFacebookF,
  FaPhone,
} from "react-icons/fa";

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
const role = useSelector(selectUserRole);
  console.log("contacts", contacts);
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", marginTop: "100px" }}
    >
      {contacts.map((contact) => (
        <div key={contact._id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={contact.name}
              secondary={
                <>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="h4"
                      color="primari"
                      fontWeight="fontWeightBold"
                    >
                      Haша адреса:
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      color="primary"
                      fontWeight="fontWeightBold"
                      ml={5}
                    >
                      {" "}
                      {contact.address}
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Typography
                      variant="h5"
                      component="h5"
                      color="primary"
                      fontWeight="fontWeightBold"
                      ml={2}
                      mt={5}
                    >
                      <Link
                        href={`tel:${contact.phoneNumbers}`}
                        style={{ textDecoration: "none" }}
                      >
                        <FaPhone />
                        {contact.phoneNumbers}
                      </Link>
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "40px",
                    }}
                  >
                    <Link
                      href={`tg://resolve?domain=${contact.telegram}`}
                      style={{ fontSize: "40px" }}
                    >
                      <FaTelegram />
                    </Link>
                    <Link
                      href={`viber://chat?number=${contact.viber}`}
                      style={{
                        fontSize: "40px",
                        color: "#665CAC",
                        marginLeft: "20px",
                      }}
                    >
                      <FaViber />
                    </Link>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "40px",
                    }}
                  >
                    {" "}
                    <Link
                      href={contact.instagram}
                      style={{ fontSize: "40px", color: "#C13584" }}
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href={contact.facebook}
                      style={{ fontSize: "40px", marginLeft: "20px" }}
                    >
                      <FaFacebookF />{" "}
                    </Link>
                  </Box>
                  {role === "admin" && (
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() => dispatch(deleteContactById(contact._id))}
                    >
                      Видалити
                    </Button>
                  )}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
