import React from 'react';
import PropTypes from 'prop-types';

const Note = ({color, onDelete, children}) => {
  const style = {backgroundColor: color};
  return (
    <div className="Note" style={style}>
      <span className="Note__delete" onClick={onDelete}> × </span>
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
