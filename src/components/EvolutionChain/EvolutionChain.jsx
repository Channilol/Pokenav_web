import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEvolutionChain, getEvolutionStage } from '../../utils/evolutionChains';
import './EvolutionChain.css';

function EvolutionChain({ currentPokemonId }) {
  const navigate = useNavigate();
  const allPokemon = useSelector(state => state.pokemon.pokemon);
  const [evolutionData, setEvolutionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvolutionChain = () => {
      if (!currentPokemonId || allPokemon.length === 0) {
        setLoading(false);
        return;
      }

      const chain = getEvolutionChain(currentPokemonId);
      const currentStage = getEvolutionStage(currentPokemonId);
      
      // Get Pokemon data for each evolution stage
      const evolutionPokemon = chain.map((pokemonId, index) => {
        const pokemon = allPokemon.find(p => p.id === pokemonId);
        return {
          id: pokemonId,
          pokemon: pokemon,
          stage: index,
          isCurrent: index === currentStage,
          isAccessible: pokemon !== null // Only show if we have data
        };
      }).filter(evo => evo.isAccessible); // Filter out Pokemon we don't have data for

      setEvolutionData(evolutionPokemon);
      setLoading(false);
    };

    loadEvolutionChain();
  }, [currentPokemonId, allPokemon]);

  const handleEvolutionClick = (pokemonId) => {
    if (pokemonId !== currentPokemonId) {
      navigate(`/pokemon/${pokemonId}`);
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return colors[type] || '#68A090';
  };

  if (loading) {
    return (
      <div className="evolution-chain-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  // Don't show evolution chain if only one Pokemon (no evolutions)
  if (evolutionData.length <= 1) {
    return (
      <div className="no-evolution">
        <p>This Pokemon does not evolve</p>
      </div>
    );
  }

  return (
    <div className="evolution-chain">
      <h3>Evolution Chain</h3>
      <div className="evolution-line">
        {evolutionData.map((evolution, index) => (
          <div key={evolution.id} className="evolution-stage">
            <div 
              className={`evolution-pokemon ${evolution.isCurrent ? 'current' : ''}`}
              onClick={() => handleEvolutionClick(evolution.id)}
            >
              <div className="evolution-image-container">
                <img 
                  src={evolution.pokemon.sprites.frontDefault}
                  alt={evolution.pokemon.name}
                  className="evolution-image"
                />
                <div 
                  className="evolution-type-indicator"
                  style={{ 
                    background: evolution.pokemon.types?.length > 0 
                      ? getTypeColor(evolution.pokemon.types[0].type.name) 
                      : '#68A090' 
                  }}
                ></div>
              </div>
              <div className="evolution-info">
                <span className="evolution-name">{evolution.pokemon.name}</span>
                <span className="evolution-id">#{evolution.pokemon.id.toString().padStart(3, '0')}</span>
              </div>
              {evolution.isCurrent && <div className="current-indicator">Current</div>}
            </div>
            
            {index < evolutionData.length - 1 && (
              <div className="evolution-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9,18 15,12 9,6"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EvolutionChain;