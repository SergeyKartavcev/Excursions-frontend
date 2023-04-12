import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../redux/reviews/operations";
import { selectReviews } from "../../redux/reviews/selectors";
import { selectUserRole } from "../../redux/auth/selectors";
import { Box, Typography, Button } from "@mui/material";
import { fetchReviews } from "../../redux/reviews/operations";
import { useEffect } from "react";
const ReviewsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  const reviews = useSelector(selectReviews);
  const role = useSelector(selectUserRole);

  const handleDelete = (id) => {
    if (window.confirm("Вы действительно хотите удалить отзыв?")) {
      dispatch(deleteReview(id));
    }
  };

  return (
    <Box>
      {reviews.map((review) => (
        <Box key={review._id} sx={{ border: "1px solid grey", p: 2, mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {review.author}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {review.comment}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Оценка: {review.rating}
          </Typography>
          {role === "admin" && (
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(review._id)}
            >
              Удалить
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ReviewsList;
