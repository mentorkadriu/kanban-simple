
import React, { Component } from 'react';
import uuid from 'uuid';

import './App.css';

import './components/Notes/Notes';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
      <button onClick={() => console.log('add note')}>+</button>
        <ul>
          {notes.map((note) => {
           return (<li key={note.id}>
            {note.task}
           </li>)
          })}
        </ul>
        <Notes />
      </div>
    );
  }
}

export default App;
