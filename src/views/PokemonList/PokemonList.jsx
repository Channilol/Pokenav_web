import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import GenerationFilter from "../../components/GenerationFilter/GenerationFilter";
import TypeFilter from "../../components/TypeFilter/TypeFilter";
import EvolutionFilter from "../../components/EvolutionFilter/EvolutionFilter";
import logo from "../../assets/logo/logo_pokenav.png";
import "./PokemonList.css";

function PokemonList() {
  const { filteredPokemon, filters } = useSelector((state) => state.pokemon);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-list">
        <div className="pokemon-list-header">
          <img src={logo} alt="PokeNav" className="header-logo" />
          <h1>Pokédex</h1>
        </div>

        <div className="filters-section">
          <div className="search-section">
            <SearchBar />
          </div>
          
          <div className="filter-toggle-section">
            <button 
              onClick={toggleFilters}
              className={`filter-toggle-btn ${isFilterOpen ? 'active' : ''}`}
            >
              <span>Filters</span>
              <span className={`filter-toggle-icon ${isFilterOpen ? 'rotated' : ''}`}>
                ▼
              </span>
            </button>
          </div>
          
          <div className={`filter-controls ${isFilterOpen ? 'expanded' : 'collapsed'}`}>
            <div className="filter-row">
              <GenerationFilter />
              <EvolutionFilter />
            </div>
            <div className="filter-row full-width">
              <TypeFilter />
            </div>
          </div>
        </div>

        <div className="pokemon-grid">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <div className="pokemon-image-container">
                <img 
                  src={pokemon.sprites?.frontDefault || '/placeholder-pokemon.png'} 
                  alt={pokemon.name}
                  loading="lazy"
                />
              </div>
              
              <div className="pokemon-info">
                <h3 className="pokemon-name">{pokemon.name}</h3>
                <p className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</p>
                
                <div className="pokemon-types">
                  {pokemon.types?.map((typeInfo) => (
                    <span 
                      key={typeInfo.type.name}
                      className="type-badge"
                      style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
                    >
                      {typeInfo.type.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No Pokémon found matching your filters.</p>
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
