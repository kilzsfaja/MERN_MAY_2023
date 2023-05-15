import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Main from './components/Main';
import Update from './components/Update';
import ShowOne from './components/ShowOne';
// import Form from './components/Form';

function App() {

  // state var for the db stuff
  const [heroes, setHeroes] = useState([])

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>full stack</h1>
        {/* heroes = {JSON.stringify(heroes)} */}
        {/* <Form/> */}

        {/* =========== SETUP THEATER STAGE ============ */}
        <Routes>

          {/* SHOW ALL and CREATE */}
          <Route path='/' element={
            <Main heroes={heroes} setHeroes={setHeroes} />
          } />

          {/* EDIT */}
          <Route path='/heroes/:id/edit' element={<Update/>} />

          {/* READ ONE */}
          <Route path='/heroes/:id' element={<ShowOne/>} />


        </Routes>


      </div>
    </fieldset>
  );
}

export default App;
