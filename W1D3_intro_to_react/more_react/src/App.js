import './App.css';
import Person from './components/Person';
// import AnotherComponent from './components/AnotherComponent';

function App() {

  const personName = "bob"
  const personName2 = "Alice"

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h1>hello {personName}</h1>
      <Person age={30} personName2={personName}/>
      {/* <Person age={50} personName2={personName}/> */}
    </fieldset>
  );
}

export default App;
