import React, { useState } from "react";
import react from "react";

function EditableText(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(props.text);

  function handleDoubleClick() {
    setIsEditing(true);
  }

  function handleBlur() {
    setIsEditing(false);
  }

  function handleChange(event) {
    setText(event.target.innerText);
  }

  return (
    <div
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      contentEditable={isEditing}
      dangerouslySetInnerHTML={{ __html: text }}
      onChange={handleChange}
    />
  );
}

export default EditableText;
