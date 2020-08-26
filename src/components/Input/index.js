import React from 'react';

import './styles.css';


const Input = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name}  {...rest} />
    </div>
  );
}

export default Input;