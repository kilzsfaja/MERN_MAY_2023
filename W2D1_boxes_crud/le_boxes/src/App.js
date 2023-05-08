import './App.css';
import { useState } from 'react';
import Box from './components/Box';
import Form from './components/Form';

function App() {

  // create global state
  const [boxes, setBoxes] = useState([
    {
      color: "blue"
    },
    {
      color: "red"
    }
  ])

  // function to add to state
  const addBox = (someInputFromForm) => {
    console.log('hello from App.js', someInputFromForm)
    // create the obj that will be pushed to state:
    const newBox = {
      color: someInputFromForm
    }
    // add to state
    // 1. copy state
    const tempCopyState = [...boxes]

    // 2. add to the temp var
    tempCopyState.push(newBox)
    
    // 3. REPLACE OUR ACTUAL STATE WITH THE NEW STATE
    setBoxes(tempCopyState)

    // setBoxes([...boxes, newBox])
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>Boxes 📦</h1>
      {
        JSON.stringify(boxes)
      }
      <hr />
      {/* ======= FORM ========= */}
      <Form addBox={addBox}/>

      {
        boxes.map( (boxObj, i) => {
          return (
            <Box key={i} boxObj={boxObj}/>
          )
        })
      }

    </fieldset>
  );
}

export default App;
