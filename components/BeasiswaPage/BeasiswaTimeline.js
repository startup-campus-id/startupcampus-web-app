import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MyDesc from "../MyDesc";

const steps = [
  {
    label: "Registrasi via Website",
    description: `10 Desember 2022 s/d
    12 Februari 2023`,
  },
  {
    label: "Pengumuman",
    description: "15 Februari 2023",
  },
  {
    label: "Pelatihan",
    description: `20 Februari 2023`,
  },
  {
    label: "Kelulusan",
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
        backgroundColor: "sc_blue.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderRadius: "100%",
      }}
    >
      {index}
    </Box>
  );

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step
            key={step.label}
            onClick={() => setActiveStep(index)}
            sx={{ cursor: "pointer" }}
          >
            <StepLabel StepIconComponent={() => circle(index + 1)}>
              {step.label}
            </StepLabel>
            <StepContent TransitionProps={{ unmountOnExit: false }}>
              <MyDesc>{step.description}</MyDesc>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
