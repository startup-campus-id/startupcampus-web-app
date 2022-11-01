import { Box, FormControl, Grid, Input, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../sc.config";
import WordBreak from "../WordBreak";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Section10() {
  const showSwalWithLink = () => {
    MySwal.fire({
      html: (
        <Typography>
          Terima kasih telah bergabung dengan newsletter kami
        </Typography>
      ),
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const showSwalError = (error_message) => {
    MySwal.fire({
      html: (
        <Typography>
          {error_message}
        </Typography>
      ),
      icon: "error",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSubscribe = async (data) => {
    console.log(data);
    try {
      await axios.post(
        `${BASE_URL}/newsletter`,
        JSON.stringify({ email: data.email }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      showSwalWithLink();
      // alert("Email berhasil di simpan");
    } catch (e) {
      let statusCode = e.response.status 
      let responseData = e.response.data
      if(statusCode == 422){
        responseData.detail.forEach(data => {
          showSwalError(data.msg)
        });
      }else if (statusCode >= 400 && statusCode < 500){
        showSwalError(responseData.message)
      }
      console.log(e);
    }
  };
  return (
    <Grid container sx={{ backgroundColor: "sc_blue.main" }} mt={6}>
      <Grid
        item
        xs={12}
        mt={4}
        py={9}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          fontWeight={700}
          color={"sc_white.main"}
          gutterBottom
        >
          Bergabung dengan Newsletter Kami
        </Typography>
        <Typography
          textAlign={"center"}
          variant="body1"
          color={"sc_white.main"}
        >
          Tetap terhubung dengan Startup Campus untuk mendapatkan penawaran dan{" "}
          <WordBreak />
          informasi terkini seputar dunia digital
        </Typography>
        <Box
          mt={4}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(handleSubscribe)}
          sx={{
            display: "flex",
            width: "60vw",
          }}
        >
          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="Masukkan email kamu disini"
            name="email"
            sx={{
              flexGrow: 2,
              backgroundColor: "white",
              py: 1,
              px: 2,
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              "&::before": {
                border: "unset !important",
              },
              "&::after": {
                border: "unset !important",
              },
            }}
          />
          <Input
            disabled={watch("email") ? false : true}
            type="submit"
            value="Kirim"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              backgroundColor: "sc_yellow.main",
              py: 1,
              px: 2,
              fontWeight: 700,
              color: "white",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              "&::before": {
                border: "unset !important",
              },
              "&::after": {
                border: "unset !important",
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Section10;
