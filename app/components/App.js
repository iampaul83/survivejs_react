import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div>
        <h1>Hello world</h1>
        <form onSubmit={this.addNote}>
          <input
            type="text"
            ref={(input) => { this.newTaskInput = input; }}
            value={this.state.newTask}
            onChange={this.newTaskChange} />
          <button>+</button>
        </form>
        <Notes notes={notes} />
      </div>
    );
  }

  addNote = (event) => {
    event.preventDefault();
    this.newTaskInput.focus()
    this.setState(({ notes, newTask }) => {
      return {
        notes: [...notes, {
          id: uuid.v4(),
          task: newTask
        }],
        newTask: ''
      };
    });
  }

  newTaskChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }
}