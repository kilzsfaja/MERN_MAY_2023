import './App.css';
import Form from "./components/Form"

function App() {

  const animals = ["🦓", "🦁", "🦅", "🦛"]

  return (
    <fieldset>
      <legend>App.js</legend>
      <Form animals={animals}/>
    </fieldset>
  );
}

export default App;
