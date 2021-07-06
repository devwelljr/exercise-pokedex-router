import React from 'react';
import pokemons from './data';
import './PokemonDetailsStyle.css'

class PokemonDetails extends React.Component {
  pokemonMap = (foundAt) => {
    return (
      <div>
        {foundAt.map(({ map, location }) => (
          <div key={map}>
            <p>{location}</p>
            <img src={map} alt={location} />
          </div>
        ))}
      </div>
    );
  };

  pokemonDetail = (pokemonId) => {
    const pokemonIs = pokemons.find(
      (pokemon) => pokemon.id.toString() === pokemonId
    );

    const { name, type, averageWeight, image, summary, foundAt } = pokemonIs;

    return (
      <div className='pokemon'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{type}</p>
        <p>
          Average weight:{' '}
          {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <p>Summary: {summary}</p>
        <p>Possible Locations: {this.pokemonMap(foundAt)}</p>
      </div>
    );
  };

  render() {
    const { pokemonId } = this.props.match.params;
    return <div>{this.pokemonDetail(pokemonId)}</div>;
  }
}

export default PokemonDetails;
