import { getTypeMatchups, getTypeColor } from '../../utils/typeEffectiveness';
import './TypeEffectiveness.css';

function TypeEffectiveness({ pokemonTypes }) {
  const matchups = getTypeMatchups(pokemonTypes);

  const EffectivenessSection = ({ title, types, multiplier, className }) => {
    if (types.length === 0) return null;

    return (
      <div className={`effectiveness-section ${className}`}>
        <div className="effectiveness-header">
          <span className="effectiveness-title">{title}</span>
          <span className="effectiveness-multiplier">x{multiplier}</span>
        </div>
        <div className="type-badges">
          {types.map(type => (
            <span
              key={type}
              className="type-badge small"
              style={{ backgroundColor: getTypeColor(type) }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="type-effectiveness">
      <h3>Type Effectiveness</h3>
      <div className="effectiveness-content">
        <EffectivenessSection
          title="Immune"
          types={matchups.immune}
          multiplier="0"
          className="immune"
        />
        <EffectivenessSection
          title="Resistant"
          types={matchups.resistant}
          multiplier="0.5"
          className="resistant"
        />
        <EffectivenessSection
          title="Weak"
          types={matchups.weak}
          multiplier="2"
          className="weak"
        />
        <EffectivenessSection
          title="Very Weak"
          types={matchups.veryWeak}
          multiplier="4"
          className="very-weak"
        />
      </div>
    </div>
  );
}

export default TypeEffectiveness;