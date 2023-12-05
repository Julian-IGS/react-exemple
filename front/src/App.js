import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';





function App() {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const backendServiceUrl = "http://localhost:5000"
    fetch(`${backendServiceUrl}/api/pokemon`)
        .then(response => response.json())
        .then(data => setPokemon(data) )
        .catch(error => console.error(error))
  }, [])
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>

          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            TP kubernetes
          </a>
          { pokemon &&


              <div>
                <h1>
                  Pokemon
                </h1>
                <h2>
                  Name : {pokemon.name}
                </h2>
                <h2>
                  Type : {pokemon.type}
                </h2>
              </div>
          }
        </header>
      </div>
  );
}

export default App;