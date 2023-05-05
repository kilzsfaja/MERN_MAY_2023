import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Display from './components/Display';

function App() {

  const [people, setPeople] = useState([
    {
      name: "Mario",
      age: 40
    },
    {
      name: "Luigi",
      age: 40
    },
    {
      name: "Princess Peach",
      age: 35
    }
  ])

  // function only to update state here
  const updatePeople = (newPersonObj) => {
    console.log("hello from App.js", newPersonObj)
    // change state
    setPeople([...people, newPersonObj])
  }

  return (
    <div className="App">
      <h1>Lifting state</h1>
      here is state in App.js : {JSON.stringify(people)}
      <Form updatePeople={updatePeople}/>
      <Display people={people} />
    </div>
  );
}

export default App;
