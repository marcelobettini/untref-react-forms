import React from 'react';
import Color from './Color';
const Colors = ({ colors }) => {
  return (
    <div className='colors-container'>
      {/* todo: order by name */}
      {colors.map((color, index) => <Color key={index} color={color} />)}

    </div>
  );
};

export default Colors;