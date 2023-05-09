import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Other from './components/Other';
import Main from './components/Main';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <h1>ROUTING</h1>
      {/* <a href="/">home</a> | */}
      <Link to={"/"}>Link Home</Link>



      <fieldset>
        <legend>Routes component</legend>

        {/* THEATER STAGE - ROUTES */}
        <Routes>

          {/* ACT I */}
          <Route path="/other" element={
            <>
              <Main />
              <Other />
            </>
          } />

          {/* ACT II */}
          <Route path="/" element={<Main />} />

          {/* ACT III - HEROES ENTER */}
          <Route path="/hero/:heroId" element={<Hero />} />

          {/* wildcard */}
          <Route path="*" element={<p>sorry nothing to see here</p>} />

        </Routes>

      </fieldset>

    </div>
  );
}

export default App;
