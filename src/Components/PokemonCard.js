import React from 'react'

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card bg-dark text-white border-warning h-100">
      <div className="card-header bg-warning text-dark">
        <h5 className="card-title mb-0">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
      </div>
      <div className="card-body">
        <div className="bg-secondary rounded-circle p-3 mb-3 mx-auto" style={{width: 'fit-content'}}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="img-fluid"
            style={{width: '120px', height: '120px'}}
          />
        </div>
        <p className="card-text">Height: <span className="text-warning">{pokemon.height / 10}m</span></p>
        <p className="card-text">Weight: <span className="text-warning">{pokemon.weight / 10}kg</span></p>
        <p className="card-text">Types: <span className="text-warning">{pokemon.types.map(t => t.type.name).join(', ')}</span></p>
      </div>
    </div>
  )
}

export default PokemonCard

