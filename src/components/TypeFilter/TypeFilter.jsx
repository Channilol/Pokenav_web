import { useDispatch, useSelector } from 'react-redux';
import { setTypeFilter } from '../../store/slices/pokemonSlice';
import './TypeFilter.css';

function TypeFilter() {
  const dispatch = useDispatch();
  const selectedTypes = useSelector(state => state.pokemon.filters.types);

  const pokemonTypes = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic',
    'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  const handleTypeToggle = (type) => {
    let newTypes;
    if (selectedTypes.includes(type)) {
      // Remove type if already selected
      newTypes = selectedTypes.filter(t => t !== type);
    } else if (selectedTypes.length < 2) {
      // Add type if less than 2 are selected
      newTypes = [...selectedTypes, type];
    } else {
      // Replace first type if 2 are already selected
      newTypes = [selectedTypes[1], type];
    }
    dispatch(setTypeFilter(newTypes));
  };

  const clearTypes = () => {
    dispatch(setTypeFilter([]));
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

  return (
    <div className="type-filter modern-filter-container">
      <div className="filter-header-modern">
        <div className="filter-icon">⚡</div>
        <label className="filter-label-modern">
          Types {selectedTypes.length > 0 && `(${selectedTypes.join(', ')})`}
        </label>
        {selectedTypes.length > 0 && (
          <button onClick={clearTypes} className="clear-types-btn">
            Clear
          </button>
        )}
      </div>

      <div className="type-grid">
        {pokemonTypes.map(type => (
          <button
            key={type}
            onClick={() => handleTypeToggle(type)}
            className={`type-btn ${selectedTypes.includes(type) ? 'selected' : ''}`}
            style={{ 
              backgroundColor: selectedTypes.includes(type) ? getTypeColor(type) : 'var(--color-secondary)',
              borderColor: selectedTypes.includes(type) ? getTypeColor(type) : 'var(--color-border)'
            }}
            disabled={!selectedTypes.includes(type) && selectedTypes.length >= 2}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TypeFilter;