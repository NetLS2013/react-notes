import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  handleClick = (e) => {
    const {onColorChange, color} = this.props;
    onColorChange(color);
  };

  render() {
    const {color} = this.props;
    return (
      <div
        className="Color"
        color={color}
        style={{backgroundColor: color}}
        onClick={this.handleClick}
      />
    );
  }
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired
};

Color.defaultProps = {};

export default Color;
