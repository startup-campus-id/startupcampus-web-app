import { Box } from '@mui/material';

const CircleHighlight = ({ width, height, children , ...rest}) => {
  const circleSx = {
    width: width ?? 135,
    height: height ?? 50,
    position: 'absolute',
    left: "-5%",
    ...rest
  };
  return (
    <Box component={'span'} sx={{ position: "relative" }} >
      <Box component={'img'} src="/images/circle_highlight.png" sx={circleSx} />
      {children}
    </Box>
  );
};

export default CircleHighlight;
