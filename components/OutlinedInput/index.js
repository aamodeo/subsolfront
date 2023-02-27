import React from "react";
import TextField from '@mui/material/TextField';
import "./index.css"

export default function OutlinedInput(props) {
  const { onChange, label, type, disabled, value } = props;

  return (
    <TextField
    disabled={disabled}
      onChange={onChange}
      autoComplete={false}
      id="outlined-basic"
      label= {label}
      variant="outlined"
      fullWidth
      type={type}
      value={value}
      InputLabelProps={{
      shrink: true,
     }}
    />
  );
}