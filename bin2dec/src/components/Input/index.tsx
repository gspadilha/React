import React from "react";

import "./styles.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ id, name, label, ...props }) => {
  const _name = !!name ? id : name;

  return (
    <div className="linha">
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        name={_name}
        {...props}
        //id="numeroBinario"
        //name="numeroBinario"
        //type="text"
        //value={numeroBinario}
        //onChange={handleInput}
        //pattern="[0-1]*"
        //maxLength={8}
      />
    </div>
  );
};

export default Input;
