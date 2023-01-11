import { Box } from '@mui/material';

const BoxHighlight = ({ children }) => {
  const cornerRectangle = {
    width: 16,
    height: 16,
    position: 'absolute',
    backgroundColor: 'sc_yellow.light',
    borderStyle: 'solid',
    borderWidth: 2.5,
    borderColor: 'sc_yellow.main',
  };
  const rightUpperRectangle = {
    ...cornerRectangle,
    top: -10,
    right: -10,
  };
  const leftUpperRectangle = {
    ...cornerRectangle,
    top: -10,
    left: -10,
  };
  const rightLowerRectangle = {
    ...cornerRectangle,
    bottom: -10,
    right: -10,
  };
  const leftLowerRectangle = {
    ...cornerRectangle,
    bottom: -10,
    left: -10,
  };

  const mainRectangle = {
    margin: 1,
    position: 'relative',
    padding: '0px 5px',
    borderStyle: 'solid',
    borderWidth: 2.5,
    borderColor: 'sc_yellow.main',
    color: 'sc_yellow.main',
  };
  return (
    <Box component={'span'} sx={mainRectangle}>
      <Box component={'span'} sx={rightUpperRectangle} />
      <Box component={'span'} sx={leftUpperRectangle} />
      {children}
      <Box component={'span'} sx={rightLowerRectangle} />
      <Box component={'span'} sx={leftLowerRectangle} />
    </Box>
  );
};

export default BoxHighlight;
