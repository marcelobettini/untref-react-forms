import React, { useRef } from 'react';

const UncontrolledForm = ({ onColorPicked }) => {
  const colorTitle = useRef();
  const colorCode = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = colorTitle.current.value;
    const code = colorCode.current.value;
    onColorPicked(title, code);
    colorTitle.current.value = "";
    colorCode.current.value = "#000000";
  };


  return (
    <form onSubmit={handleSubmit}>
      <input ref={colorTitle} type="text" placeholder="Color title..." required />
      <input ref={colorCode} type="color" required />
      <button>ADD</button>
    </form>
  );
};
export default UncontrolledForm

