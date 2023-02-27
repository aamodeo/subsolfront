import React from "react";
import Button from '@mui/material/Button';
import "./index.css"

export default function ButtonComp(props) {
  const { onClick, label, disabled } = props;

  return (
    <Button disabled={disabled} className={'buttonClass'}
    onClick={onClick}>
      {label}
    </Button>
  );
}