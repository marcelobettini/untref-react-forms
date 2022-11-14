import React, { useState } from 'react';

const ControlledForm = ({ onColorPicked }) => {

  const [colorTitle, setColorTitle] = useState("");
  const [colorCode, setColorCode] = useState("#ffffff");
  const handleSubmit = (e) => {
    e.preventDefault();
    onColorPicked(colorTitle, colorCode);
    setColorTitle("");
    setColorCode("#ffffff");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={colorTitle} onChange={(e) => setColorTitle(e.target.value)} type="text" placeholder="Color title..." required />
      <input value={colorCode} onChange={(e) => setColorCode(e.target.value)} type="color" required />
      <button>ADD</button>
    </form>

  );
};
export default ControlledForm;