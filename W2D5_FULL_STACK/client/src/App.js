import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
// import Form from './components/Form';

function App() {

  // state var for the db stuff
  const [heroes, setHeroes] = useState([])

  // state vars for the input
  const [name, setName] = useState("bob")
  const [power, setPower] = useState(0)

  // get the data right away
  useEffect(() => {
    // make the call to the server
    axios.get("http://localhost:8000/api/heroes")
      .then((serverRes) => {
        // ! always clog the server response 
        console.log("✅ SERVER SUCCESS => ", serverRes.data)
        setHeroes(serverRes.data)
      })
      .catch(err => {
        console.log("❌ SERVER ERROR", err)
      })
  }, [])

  // form submission
  const createHero = (e) => {
    e.preventDefault()

    // create the object that mimics the MODEL
    const tempObjToSendToServer = {
      name: name,
      power: power
    }

    // send it to the server
    axios.post("http://localhost:8000/api/heroes", tempObjToSendToServer)
      .then( (serverRes) => {
        console.log("✅", serverRes)
        // we could add the serverRes.data to the DOM ourselves
        // ! always clog the server response 
        setHeroes([...heroes, serverRes.data])
      })
      .catch((errRes) => {
        console.log("❌", errRes)
      })



  }


  return (
    <div className="App">
      <h1>full stack</h1>
      {/* heroes = {JSON.stringify(heroes)} */}
      {/* <Form/> */}
      <fieldset>

        <form onSubmit={createHero}>
          <p>{JSON.stringify(name)}</p>
          <p>{JSON.stringify(power)}</p>

          <input placeholder='name' value={name} onChange={e => setName(e.target.value)} />
          <input type="number" placeholder='power' value={power} onChange={e => setPower(e.target.value)} />
          <button>make hero</button>
        </form>
      </fieldset>
      {
        heroes.map((hero) => {
          return <div key={hero._id}>
            {/* {JSON.stringify(hero)} */}
            <li>{hero.name}</li>
            <li>{hero.power}</li>
            <hr />
          </div>
        })
      }
    </div>
  );
}

export default App;
