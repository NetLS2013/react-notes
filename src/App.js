import React, {Component} from 'react';
import Search from './components/Search';
import NoteEditor from './components/NoteEditor';
import NotesGrid from './components/NotesGrid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
    this.state = {
      notes: [],
      searchValue: ""
    }
  }

  componentDidMount() {
    const localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localNotes) {
      this.setState({notes: localNotes});
    }
  }

  componentDidUpdate() {
    this._updateLocalStorage();
  }

  handleNoteDelete(note) {
    const noteId = note.id;
    const newNotes = this.state.notes.filter(function (note) {
      return note.id !== noteId;
    });
    this.setState({notes: newNotes});
  }

  handleNoteAdd(newNote) {
    const newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({
      notes: newNotes,
      searchValue: ""
    });
  }

  onSearchChange(e) {
    this.setState({searchValue: e.target.value.toLowerCase()});
  }

  render() {
    const {notes, searchValue} = this.state;
    return (
      <div className="NotesApp">
        <h2 className="NotesApp__header">NotesApp</h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd}/>
        <Search onSearchChange={this.onSearchChange} value={searchValue}/>
        <NotesGrid notes={this._getDisplayedNotes(notes, searchValue)}
                   onNoteDelete={this.handleNoteDelete}/>
      </div>
    );
  }

  _getDisplayedNotes(notes, searchValue) {
    return (
      notes.filter(function (note) {
        return note.text.toLowerCase().indexOf(searchValue) !== -1;
      })
    );
  }

  _updateLocalStorage() {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }
}

export default App;
