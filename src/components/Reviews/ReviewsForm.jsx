import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../redux/reviews/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Typography, TextField, Button } from '@mui/material';

const ReviewsForm = () => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();
  const IsLoggedIn  = useSelector(selectIsLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!IsLoggedIn ) {
      alert('Для добавления отзыва необходимо зарегистрироваться');
      return;
    }
    dispatch(createReview({ author, comment, rating }));
    setAuthor('');
    setComment('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Залишити відгук</Typography>
      <TextField
        label="Ваше Ім'я"
        fullWidth
        multiline
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Комментарий"
        fullWidth
        multiline
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Оценка (от 1 до 10)"
        type="number"
        fullWidth
        required
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Залишити відгук
      </Button>
    </form>
  );
};

export default ReviewsForm;
