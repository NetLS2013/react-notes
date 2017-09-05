import React from 'react';
import PropTypes from 'prop-types';

const Note = ({color, onDelete, children}) => {
  const style = {backgroundColor: color};
  console.log(children.typeof);
  return (
    <div className="note" style={style}>
      <span className="delete-note" onClick={onDelete}> × </span>
      {children}
    </div>
  );
};

Note.propTypes = {
  color: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
Note.defaultProps = {};

export default Note;
