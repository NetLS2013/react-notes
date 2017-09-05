import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import Note from './Note';

class NotesGrid extends Component {
  componentDidMount() {
  const grid = this.refs.grid;
  this.msnry = new Masonry(grid, {
    itemSelector: '.note',
    columnWidth: 200,
    gutter: 10,
    isFitWidth: true
  });
}

  componentDidUpdate(prevProps) {
  if (this.props.notes.length !== prevProps.notes.length) {
    this.msnry.reloadItems();
    this.msnry.layout();
  }
}

  render() {
  const {onNoteDelete} = this.props;

  return (
    <div className="notes-grid" ref="grid">
      {
        this.props.notes.map(function (note) {
          return (
            <Note
              key={note.id}
              onDelete={onNoteDelete.bind(null, note)}
              color={note.color}>
              {note.text}
            </Note>
          );
        })
      }
    </div>
  );
}
}

NotesGrid.propTypes = {
  notes: PropTypes.array.isRequired,
  onNoteDelete: PropTypes.func.isRequired
};
NotesGrid.defaultProps = {};

export default NotesGrid;
