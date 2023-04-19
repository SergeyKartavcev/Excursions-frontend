import { Box } from '@mui/material';
import ContactsForm from '../components/Contacts/ContactsForm';
import ContactsList from '../components/Contacts/ContactsList';
import { selectUserRole } from "../redux/auth/selectors";
import { useSelector } from 'react-redux';
const ContactsPage = () => {
  const role = useSelector(selectUserRole);
  return (
    <Box sx={{ p: 3 }}>
      <ContactsList />
      {role==='admin' && <ContactsForm />}
      
    </Box>
  );
};

export default ContactsPage;
