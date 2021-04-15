import React from "react";

function RadioInput(props) {
  return (
    <div className="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        className="custom-control-input"
        id={props.id}
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
      />
      <label className="custom-control-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default RadioInput;
