import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.state = {
      text: '',
      color: 'yellow'
    }
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  };

  onColorChange(color) {
    this.setState({color: color});
  }

  handleNoteAdd() {
    const newNote = {
      text: this.state.text,
      color: this.state.color,
      id: Date.now()
    };

    this.props.onNoteAdd(newNote);
    this.setState({text: ''});
  }

  render() {
    return (
      <div className="note-editor">
                <textarea
                  placeholder="Enter your note here..."
                  rows={5}
                  className="textarea"
                  value={this.state.text}
                  onChange={this.handleTextChange}
                />
        <ColorPicker onColorChange={this.onColorChange}/>
        <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  onNoteAdd: PropTypes.func.isRequired
};
NoteEditor.defaultProps = {};

export default NoteEditor;
