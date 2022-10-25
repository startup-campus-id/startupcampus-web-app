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

const MyCheckBox = ({ name }) => {
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
              <Typography>
                Dengan mengisi formulir ini, Saya menyetujui{" "}
                <MyLink link={"#"}>kebijakan privasi</MyLink> dan{" "}
                <MyLink link={"#"}>ketentuan pengguna</MyLink>
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
