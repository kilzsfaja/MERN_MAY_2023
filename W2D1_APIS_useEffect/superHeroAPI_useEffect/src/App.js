import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // state vars
  const [superheroes, setSuperHeroes] = useState([])

  // =======================
  // ! TRIGGERS WHEN THE COMPONENT HAS FINISHED LOADING
  useEffect( () => {
    // put in here whatever you want to execute 1 time if the dep. array is EMPTY
    axiosSuperHeroes()
  }, [])


  // VANILLA JS fetch =======================================
  const fetchSuperHeroes = () => {
    // console.log("fetch")
    // FETCH RETURNS A Promise
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((serverResponse) => {
        // console.log(serverResponse)
        return serverResponse.json()
      })
      .then((jsonResponse) => {
        console.log(jsonResponse)
        // set state here where I have access
        setSuperHeroes(jsonResponse)
      })
      .catch((errObj) => console.log("❌ GOT AND ERROR =>", errObj))
  }

  // AXIOS GET ============================================
  const axiosSuperHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then((serverRes) => {
        console.log(serverRes.data)
        // ! AXIOS WRAPS its response inside a 'data' key
        setSuperHeroes(serverRes.data)
      })
      .catch(err => console.log(err))
  }

  // axiosSuperHeroes() //! DO NOT DO THIS ♾ loop!!!

  return (
    <div className="App">
      <h1>SUPERHERO API 🦸‍♀️🦸‍♂️</h1>

      <button onClick={fetchSuperHeroes}>fetch superheroes</button> |
      <button onClick={axiosSuperHeroes}>AXIOS 💪 superheroes</button>
      <hr />

      {/* {JSON.stringify(superheroes)} */}

      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>hero name</th>
            <th>full name</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            superheroes.map((hero) => {
              // console.log(hero.name)
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt="some hero" width="80px" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })
          }


        </tbody>

      </table>
    </div>
  );
}

export default App;
