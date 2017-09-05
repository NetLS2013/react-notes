import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

const COLORS = [
  '#FF5722',
  '#CDDC39',
  '#FFEB3B',
  '#03A9F4',
  '#009688'
];

const ColorPicker = ({onColorChange, activeColor}) => {
  const colors = COLORS.map((color, index) =>
    <Color onColorChange={onColorChange} key={index} color={color} isActive={color === activeColor}/>
  );
  return (
    <div className="ColorPicker">{colors}</div>
  );
};

ColorPicker.propTypes = {
  onColorChange: PropTypes.func.isRequired
};
ColorPicker.defaultProps = {};

export default ColorPicker;
