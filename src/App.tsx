// ! 1) useState = for storing data inside a component.
// ! 2) TypeScript = Superset of JavaScript (on top of it) & allow programmers to define a data type to a component.

import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  } []
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
