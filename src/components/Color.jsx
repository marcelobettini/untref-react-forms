import React from 'react';

const Color = ({ color }) => {
  return (
    <div>
      <h3><span className='color-sample' style={{ backgroundColor: color.colorCode }}></span> {color.colorTitle}</h3>


    </div>
  );
};

export default Color;