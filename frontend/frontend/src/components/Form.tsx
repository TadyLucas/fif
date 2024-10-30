import React from "react";

interface Props {
  label: string;
  name: string;
  type: string;
  ph?: string; // optional
}

const FormField: React.FC<Props> = ({ label, name, type, ph}) => {
  return (
    <>
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} name={name} placeholder={ph}/>
    </>
  );
};

export default FormField;
