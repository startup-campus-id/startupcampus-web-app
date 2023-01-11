import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import HTMLParser from 'components/HTMLParser';
import * as React from 'react';

import MyDesc from '../MyDesc';

const steps = [
  {
    label: 'Registrasi via Website',
    description: `  18 Januari 2023 s/d </br> 12 Februari 2023`,
  },
  {
    label: 'Pengumuman',
    description: '15 Februari 2023',
  },
  {
    label: 'Pelatihan',
    description: `20 Februari 2023`,
  },
  {
    label: 'Kelulusan',
    description: `Juni 2023`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const circle = (index) => (
    <Box
      sx={{
        width: 32,
        height: 32,
        backgroundColor: 'sc_yellow.main',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'sc_black.dark',
        borderRadius: '100%',
      }}
    >
      {index}
    </Box>
  );

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical" sx={{ '&hover': { cursor: 'none' } }}>
        {steps.map((step, index) => (
          <Step
            active={true}
            key={step.label}
            onClick={() => setActiveStep(index)}
            sx={{ cursor: 'pointer' }}
          >
            <StepLabel StepIconComponent={() => circle(index + 1)}>
              <Typography variant="body1" fontSize={16} fontWeight={500}>
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent TransitionProps={{ unmountOnExit: false }}>
              <MyDesc
                ml={1}
                mt={-1}
                fontSize={14}
                type="gray_light"
                lineHeight={1.8}
              >
                <HTMLParser>{step.description}</HTMLParser>
              </MyDesc>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
