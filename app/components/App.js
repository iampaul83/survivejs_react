import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import CSSModules from 'react-css-modules';
import styles from './app.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    const { notes } = this.state;

    return (
      <div styleName="container">
        <h1>Hello world</h1>
        <form onSubmit={this.addNote} styleName="form">
          <input
            type="text"
            ref={(input) => this.newTaskInput = input}
            value={this.state.newTask}
            onChange={this.newTaskChange} />
          <button>+</button>
        </form>
        <Notes notes={notes} deleteNote={this.deleteNote} />
      </div>
    );
  }

  addNote = (event) => {
    event.preventDefault();
    this.newTaskInput.focus()
    this.setState(({ notes, newTask }) => {
      if (!newTask) {
        return
      }
      return {
        notes: [{
          id: uuid.v4(),
          task: newTask
        }, ...notes],
        newTask: ''
      };
    });
  }

  newTaskChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  deleteNote = (id) => {
    this.setState(({ notes }) => {
      return {
        notes: notes.filter((note) => note.id !== id)
      }
    });
  }
}

export default CSSModules(App, styles);
