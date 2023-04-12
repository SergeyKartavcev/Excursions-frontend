import { Box } from '@mui/material';
import ReviewsForm from '../components/Reviews/ReviewsForm';
import ReviewsList from '../components/Reviews/ReviewsList';

const ReviewsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <ReviewsList />
      <ReviewsForm />
    </Box>
  );
};

export default ReviewsPage
