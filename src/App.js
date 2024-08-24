import React, { useState, useEffect } from 'react';
import PokemonCard from './Components/PokemonCard';

import SearchBar from './Components/SearchBar';




const PokemonApp = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemon(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid bg-dark text-white py-4" style={{minHeight: '100vh'}}>
      <div className="container">
        <h1 className="text-center mb-4 text-warning">Pokémon Data Display</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredPokemon.map((p) => (
            <div key={p.id} className="col">
              <PokemonCard pokemon={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonApp;