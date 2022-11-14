import { IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone, DropZone } from "react-dropzone";
import { byteToMb } from "../../utils/byteToMb";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMyForm } from "../../context/FormContext";

const maxLength = 3000000;

function nameLengthValidator(file) {
  if (file.size > maxLength) {
    return {
      code: file.name + "-too-large",
      message: `${file.name} is larger than ${byteToMb(maxLength)} mb`,
    };
  }

  return null;
}

export default function MyDropZone({ helper, desc, name }) {
  const { register, setValue, handleSubmit, watch, errors } = useMyForm();
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      accept: { "image/*": [".jpg", ".jpeg", ".png"] },
      validator: nameLengthValidator,
    });

  const [surat, setSurat] = useState({
    sptjm: null,
    surek: null,
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path} style={{ color: "red" }}>
      <Typography variant="body2">{file.path}</Typography>
      <ul>
        <Typography variant="body2">
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </Typography>
      </ul>
    </li>
  ));

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setSurat((prev) => ({ ...prev, sptjm: true }));
    }
  }, [surat, acceptedFiles]);

  const files = acceptedFiles.map((file) => {
    setValue(name, file);
    return (
      <Stack
        key={file.path}
        p={2}
        border={"2px dashed blue"}
        borderRadius={"5px"}
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography>
          {file.path} - {byteToMb(file.size)} mb
        </Typography>
        <IconButton
          alignSelf="start"
          onClick={() => {
            acceptedFiles.length = 0;
            setSurat((prev) => ({ ...prev, sptjm: false }));
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Stack>
    );
  });

  return (
    <>
      {surat.sptjm ? (
        files
      ) : (
        <Stack
          p={6}
          border={"2px dashed #BDBDBD"}
          borderRadius={"5px"}
          justifyContent="center"
          alignItems="center"
          {...getRootProps({ className: "dropzone-sptjm" })}
        >
          <input
            {...getInputProps()}
            type="file"
            {...register(name)}
            error={errors[name] ? true : false}
            helperText={errors[name]?.message ?? null}
          />
          <Typography fontWeight={700}>
            .JPG, .JPEG., atau .PNG (Maks. 3MB)
          </Typography>
          <Typography variant="body2" color="#69686B">
            {desc}
          </Typography>
        </Stack>
      )}

      {fileRejections.length > 0 && <ul>{fileRejectionItems}</ul>}
      <ul>
        {helper.map((val, idx) => (
          <li style={{ color: "#69686B" }} key={idx}>
            <Typography variant="body2">{val}</Typography>
          </li>
        ))}
      </ul>
    </>
  );
}
