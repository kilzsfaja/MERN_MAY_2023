import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Display from './components/Display';
import Person from './components/Person';

function App() {

  const [people, setPeople] = useState([
    {
      name: "Mario",
      age: 40,
      favColor: "red",
      completed: false
    },
    {
      name: "Luigi",
      age: 40,
      favColor: "green",
      completed: false
    },
    {
      name: "Princess Peach",
      age: 35,
      favColor: "purple",
      completed: false
    }
  ])

  // function only to update state here
  const updatePeople = (newPersonObj) => {
    console.log("hello from App.js", newPersonObj)
    // change state
    setPeople([...people, newPersonObj])

    // // 1. make a copy of state
    // const tempState = [...people]
    // console.log(">>>>> tempState <<<< :", tempState )
    // // 2. push the newObj in the tempState
    // tempState.push(newPersonObj)
    // console.log(">>>>> tempState after push <<<< :", tempState )
    // // 3. overwrite state with new state
    // setPeople(tempState)
  }

  // DELETE from state
  const deletePerson = (deleteIdx) => {
    console.log("delete function from app.js", deleteIdx)

    // hint use filter...
  }

  return (
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        <h1>Lifting state</h1>
        here is state in App.js : {JSON.stringify(people)}
        <Form updatePeople={updatePeople} />
        <Display
          people={people}
          deletePerson={deletePerson} />

        <hr />
        {
          people.map((eachElem, idx) => {
            return <Person key={idx} eachElem={eachElem}/>
          })
        }
      </fieldset>
    </div>
  );
}

export default App;
