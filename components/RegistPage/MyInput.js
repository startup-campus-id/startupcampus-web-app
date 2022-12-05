import React, { Fragment, useEffect, useState } from "react";
import { FormHelperText, LinearProgress, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useMyForm } from "../../context/FormContext";

function countWords(str) {
  if (typeof str === "string") {
    return str.trim().split(/\s+/).length;
  }
  return 0
}


const MyInput = ({
  label,
  name,
  type,
  placeholder,
  min,
  max,
  icon,
  maxType = "letter",
  showWordCount = false,
  ...args
}) => {
  const { register, watch, errors, setError: formSetError, clearErrors } = useMyForm();
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState(0);
  const maxTypeTranslate = maxType === "letter" ? "karakter" : maxType === "word" ? "kata" : maxType
  const textAreaMax = max ? max : 150

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      let localCount = 0
      if (maxType === "letter") {
        localCount = data.length
        setCount(localCount)
        setProgress(Math.min(Math.floor(localCount / max * 100), 100))
      } else if (maxType === "word") {
        localCount = countWords(data)
        setCount(localCount)
        setProgress(Math.min(Math.floor(localCount / max * 100), 100))
      }

      if (maxType === "word") {
        if (localCount > max) {
          formSetError(name, { type: "exceedMaxWord", message: `Maksimal hanya ${max} kata, sekarang ${localCount}` }, { shouldFocus: true });
        }
      }

    }, 250);
    return () => clearTimeout(timeOutId);
  }, [data]);

  const maxLengthProp =
    maxType === "letter" ?
      type == "text-area"
        ? {
          maxLength: {
            value: textAreaMax,
            message: `Maksimal hanya ${textAreaMax} karakter, sekarang ${count}`,
          },
        }
        : type == "number"
          ? {
            maxLength: {
              value: max,
              message: `Maksimal hanya ${max} karakter, sekarang ${count}`,
            },
          }
          : type == "phone"
            ? {
              maxLength: {
                value: 13,
                message: `Maksimal hanya 13 karakter, sekarang ${count}`,
              },
              minLength: {
                value: 8,
                message: `Minimal 8 karakter, sekarang ${count}`,
              },
            }
            : null
      : null;


  return (
    <Stack>
      <Typography gutterBottom fontWeight={700} color={"sc_gray.dark"}>
        {label}
      </Typography>
      <TextField
        {...register(name, {
          required: `Mohon di isi ya`,
          onChange: (e) => setData(e.target.value),
          pattern: {
            value:
              type == "email"
                ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                : type == "number" || type == "phone"
                  ? /^[0-9\b]+$/
                  : null,
            message:
              type == "email"
                ? "Email tidak valid"
                : type == "number"
                  ? "Input berupa angka"
                  : type == "phone"
                    ? "Nomor telephone tidak valid. Gunakan angka 0 didepan, contoh: 08123456789"
                    : "",
          },
          ...maxLengthProp,
        })}
        placeholder={placeholder ?? ""}
        error={errors[name] ? true : false}
        helperText={max && showWordCount ? null : errors[name]?.message ?? null}
        InputProps={
          icon
            ? {
              startAdornment: (
                <InputAdornment position="start">{icon}</InputAdornment>
              ),
            }
            : null
        }
        {...args}
      />
      {max && showWordCount ?
        <>
          <LinearProgress variant="determinate" value={progress} color={progress >= 100 ? "error" : "primary"} />
          <FormHelperText
            error={errors[name] ? true : false}
          >{errors[name]?.message ?? `${count}/${max} ${maxTypeTranslate}`}</FormHelperText>
        </> : null}
      {/* <CircularProgressWithLabel value={100} label={"test"} /> */}
    </Stack>
  );
};

export default MyInput;
