import { useDispatch, useSelector } from 'react-redux';
import { setGenerationFilter } from '../../store/slices/pokemonSlice';
import './GenerationFilter.css';

function GenerationFilter() {
  const dispatch = useDispatch();
  const selectedGeneration = useSelector(state => state.pokemon.filters.generation);

  const generations = [
    { value: null, label: 'All Generations' },
    { value: 1, label: 'Gen I (Kanto)' },
    { value: 2, label: 'Gen II (Johto)' },
    { value: 3, label: 'Gen III (Hoenn)' },
    { value: 4, label: 'Gen IV (Sinnoh)' },
    { value: 5, label: 'Gen V (Unova)' },
    { value: 6, label: 'Gen VI (Kalos)' },
    { value: 7, label: 'Gen VII (Alola)' },
    { value: 8, label: 'Gen VIII (Galar)' },
    { value: 9, label: 'Gen IX (Paldea)' },
  ];

  const handleGenerationChange = (e) => {
    const value = e.target.value === 'null' ? null : parseInt(e.target.value);
    dispatch(setGenerationFilter(value));
  };

  return (
    <div className="generation-filter">
      <div className="filter-header">
        <label htmlFor="generation-select" className="filter-label">
          Generation
        </label>
      </div>
      <select
        id="generation-select"
        value={selectedGeneration || 'null'}
        onChange={handleGenerationChange}
        className="generation-select"
      >
        {generations.map((gen) => (
          <option key={gen.value || 'null'} value={gen.value || 'null'}>
            {gen.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenerationFilter;