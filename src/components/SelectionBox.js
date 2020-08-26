import React from "react";

function SelectionBox({ name, content }) {
  return (
    <div className="box box-item">
      <input type="checkbox" name={name} id={name} />
      <label for={name}>{content}</label>
    </div>
  );
}

export default SelectionBox;
