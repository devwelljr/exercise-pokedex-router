import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Home</Link>
        <span> | </span>
        <Link to='/about'>About Pokedex</Link>
      </header>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Pokedex {...props} pokemons={pokemons} />}
        />
        <Route
          path='/pokemon/:pokemonId'
          render={(props) => <PokemonDetails {...props} />}
        />
        <Route path='/about' component={ About }/>
        <Route path='' component={ NotFound }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
