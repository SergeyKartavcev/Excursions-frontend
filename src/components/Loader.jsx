import { RotatingLines } from 'react-loader-spinner';
import { Box } from '@mui/material';

export const Loader = () => {
  return (
    <Box
    >
    <RotatingLines
        strokeWidth="5"
        animationDuration="0.75"
        width="30%"
        visible={true}
      />
    </Box>
  );
};
