import React, { Fragment } from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useMyForm } from "../../context/FormContext";

const MySelect = ({ label, name, data, track, ...args }) => {
  const { register, handleSubmit, watch, errors } = useMyForm();
  return (
    <Fragment>
      <FormControl error={errors[name] ? true : false}>
        <Typography gutterBottom fontWeight={700} color={"sc_gray.dark"}>
          {label}
        </Typography>
        <RadioGroup defaultValue={watch(name)} name={name}>
          {data?.map((val, i) => (
            <FormControlLabel
              key={i}
              value={track ? i + 1 : val}
              control={<Radio />}
              label={val}
              disabled={val == "Backend Engineer" ? true : false}
              {...register(name, { required: "Pilih salah satu" })}
              {...args}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{errors[name]?.message ?? ""}</FormHelperText>
      </FormControl>
    </Fragment>
  );
};

export default MySelect;
