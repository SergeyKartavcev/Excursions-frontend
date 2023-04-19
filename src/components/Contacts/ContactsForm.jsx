import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewContact } from "../../redux/contacts/operations";
import { TextField, Button, Box } from "@mui/material";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    address: "",
    phoneNumbers: "",
    telegram: "",
    viber: "",
    instagram: "",
    facebook: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewContact(state));
    setState({
      address: "",
      phoneNumbers: "",
      telegram: "",
      viber: "",
      instagram: "",
      facebook: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          name="address"
          label="Address"
          value={state.address}
          onChange={handleChange}
          required
        />
        <TextField
          name="phoneNumbers"
          label="Phone Numbers"
          value={state.phoneNumbers}
          onChange={handleChange}
          required
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <TextField
            name="instagram"
            label="Instagram"
            value={state.instagram}
            onChange={handleChange}
            required
          />
          <TextField
            name="facebook"
            label="Facebook"
            value={state.facebook}
            onChange={handleChange}
            required
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <TextField
            name="telegram"
            label="Telegram"
            value={state.telegram}
            onChange={handleChange}
            required
          />
          <TextField
            name="viber"
            label="Viber"
            value={state.viber}
            onChange={handleChange}
            required
          />
        </Box>

        <Button variant="contained" type="submit" color="primary">
          Add Contact
        </Button>
      </Box>
    </form>
  );
}
