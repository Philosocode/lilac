import React, { useState } from "react";

export const TitleInput = () => { 
  const [text, setText] = useState("");

  function handleInputChange(ev) {
    setText(ev.target.value);
  }

  return (
    <div className="c-title-input__container">
      <input 
        className="c-title-input__input" 
        onChange={handleInputChange}
        placeholder="Title"
        value={text} 
        type="text" 
      />
      <span className="c-title-input__block"></span>
    </div>
  )
 }