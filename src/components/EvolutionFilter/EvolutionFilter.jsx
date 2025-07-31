import { useDispatch, useSelector } from 'react-redux';
import { setEvolutionFilter } from '../../store/slices/pokemonSlice';
import './EvolutionFilter.css';

function EvolutionFilter() {
  const dispatch = useDispatch();
  const selectedEvolutions = useSelector(state => state.pokemon.filters.evolution);

  const evolutionStages = [
    { value: 'base', label: 'Base Form', icon: '◯' },
    { value: 'first', label: '1st Evolution', icon: '◐' },
    { value: 'second', label: '2nd Evolution', icon: '●' }
  ];

  const handleEvolutionToggle = (stage) => {
    let newEvolutions;
    if (selectedEvolutions.includes(stage)) {
      newEvolutions = selectedEvolutions.filter(s => s !== stage);
    } else {
      newEvolutions = [...selectedEvolutions, stage];
    }
    dispatch(setEvolutionFilter(newEvolutions));
  };

  const clearEvolutions = () => {
    dispatch(setEvolutionFilter([]));
  };

  const selectAll = () => {
    dispatch(setEvolutionFilter(['base', 'first', 'second']));
  };

  return (
    <div className="evolution-filter">
      <div className="filter-header">
        <label className="filter-label">
          Evolution Stage
        </label>
        <div className="filter-actions">
          {selectedEvolutions.length > 0 && (
            <button onClick={clearEvolutions} className="action-btn clear-btn">
              Clear
            </button>
          )}
          <button onClick={selectAll} className="action-btn select-all-btn">
            All
          </button>
        </div>
      </div>

      <div className="evolution-options">
        {evolutionStages.map(stage => (
          <label key={stage.value} className="evolution-option">
            <input
              type="checkbox"
              checked={selectedEvolutions.includes(stage.value)}
              onChange={() => handleEvolutionToggle(stage.value)}
              className="evolution-checkbox"
            />
            <span className="evolution-label">
              <span className="evolution-icon">{stage.icon}</span>
              {stage.label}
            </span>
          </label>
        ))}
      </div>

      {selectedEvolutions.length > 0 && (
        <div className="selected-info">
          Showing: {selectedEvolutions.map(s => 
            evolutionStages.find(stage => stage.value === s)?.label
          ).join(', ')}
        </div>
      )}
    </div>
  );
}

export default EvolutionFilter;