import './App.css';
import SecondComponent from './components/SecondComponent';

function App() {

  console.log("hello from app.js")
  const x = 3;
  const name = "Bob";
  const animals = ['🦁', '🦒', '🦓', '🐊'];

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }

  return (
    <fieldset>
      <legend>App.js</legend>

      <h1>here is x = {x}</h1>
      <p>the name is {name}</p>

      <p>{JSON.stringify(person)}</p>
      <hr />

      <p>here is a list of animals: {animals.map((eachAnimal, idx) => {
        return (
          <li key={idx}>{eachAnimal} is cool</li>
        )
      })}</p>
      
      <SecondComponent/>
    </fieldset>
  );
}

export default App;
