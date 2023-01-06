import { Divider, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as React from 'react';

import useDeviceDetect from '../hooks/useDeviceDetect';
import AccentText from './AccentText';
import FormDialog from './FormDialog';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ data, link }) {
  const { device } = useDeviceDetect();
  const content = data.map((e) => e.content);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    background:
      'linear-gradient(0deg, rgba(0, 86, 210, 0.1), rgba(0, 86, 210, 0.1)), #FFFFFF',
    borderRadius: 8,
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  });

  const StyledTab = styled((props) => <Tab disableRipple wrapped {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: 700,
      fontSize:
        device === 'mobile'
          ? theme.typography.pxToRem(10)
          : theme.typography.pxToRem(14),
      color: '#69686B',
      borderRadius: 8,
      '&.Mui-selected': {
        color: '#fff',
        backgroundColor: '#0056D2',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

  return (
    <Box sx={{ width: '100%' }} my={2}>
      <Box mb={2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          variant="fullWidth"
        >
          {data.map((val, idx) => (
            <StyledTab label={val.name} key={idx} />
          ))}
        </StyledTabs>
      </Box>
      {content.map((val, idx) => (
        <TabPanel value={value} key={idx} index={idx}>
          <Stack
            sx={{
              background: '#FFFFFF',
              boxShadow: '0px 16px 40px rgba(112, 144, 176, 0.2)',
              borderRadius: '5px',
            }}
          >
            {val.map((item, idx) => (
              <Stack spacing={2} p={3} key={idx}>
                <AccentText>{item.name}</AccentText>
                <Typography variant="body1">{item.desc}</Typography>

                <Divider />
              </Stack>
            ))}
          </Stack>
        </TabPanel>
      ))}

      <Typography
        onClick={() => setOpen((prev) => !prev)}
        mt={4}
        sx={{
          textDecoration: 'underline',
          color: '#0056D2',
          cursor: 'pointer',
        }}
      >
        Unduh Kurikulum
      </Typography>
      <FormDialog
        open={open}
        kurLink={link}
        handleClickOpen={() => {
          setOpen(true);
        }}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </Box>
  );
}
