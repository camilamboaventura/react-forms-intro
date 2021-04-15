import React from "react";

function RangeInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="range"
        className="form-control custom-range"
        id={props.id}
        name={props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.onChange}
        value={props.value}
      />
      <small>{props.value}</small>
    </div>
  );
}

export default RangeInput;
