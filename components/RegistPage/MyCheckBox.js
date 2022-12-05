import React, { Fragment } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
} from "@mui/material";
import { useMyForm } from "../../context/FormContext";
import Link from "next/link";
import MyLink from "../MyLink";

const MyCheckBox = ({ name, text }) => {
  const { register, handleSubmit, watch, errors } = useMyForm();
  return (
    <Fragment>
      <FormControl
        component={"fieldset"}
        required
        {...register(name, { required: "Kamu harus setuju untuk lanjut" })}
        error={errors[name] ? true : false}
      >
        <FormGroup>
          <FormControlLabel
            sx={{ alignItems: "start !important" }}
            control={
              <Checkbox name={name} checked={watch(name)} sx={{ pt: 0 }} />
            }
            label={
              text ?
                <Typography>
                  {text}
                </Typography>
                :
                <Typography>
                  Saya menyetujui data saya di form ini digunakan untuk keperluan
                  Startup Campus.
                </Typography>
            }
          />
        </FormGroup>
        <FormHelperText>{errors[name]?.message ?? ""}</FormHelperText>
      </FormControl>
    </Fragment>
  );
};

export default MyCheckBox;
