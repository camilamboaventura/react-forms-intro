import React from "react";

function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        defaultValue="default"
      >
        {/* Uma option padrão somente para informar o usuário. Esta opção não pode ser selecionada. */}
        <option value="default" disabled>
          Select an option
        </option>
        {props.items.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectInput;
