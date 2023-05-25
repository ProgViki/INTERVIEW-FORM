import React from "react";
const Input = (props) => {
  console.log(props.inputProps, "props.inputProps");
  return (
    <input {...props.inputProps} style={{ color: props.inputProps.color }} />
  );
};

export default Input;
