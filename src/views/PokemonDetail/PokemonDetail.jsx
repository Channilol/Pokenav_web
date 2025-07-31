import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PokemonDetail.css";
import { url } from "../../App";
import EvolutionChain from "../../components/EvolutionChain/EvolutionChain";
import TypeEffectiveness from "../../components/TypeEffectiveness/TypeEffectiveness";

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const allPokemon = useSelector((state) => state.pokemon.pokemon);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [abilities, setAbilities] = useState([]);
  const [error, setError] = useState(false);
  const [selectedSprite, setSelectedSprite] = useState("frontDefault");

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      setLoading(true);
      setError(false);

      try {
        // First check if we have it in Redux store
        const pokemonFromStore = allPokemon.find((p) => p.id === parseInt(id));

        if (pokemonFromStore) {
          setPokemon(pokemonFromStore);
          setLoading(false);
          return;
        }

        // If not in store, fetch from API
        const response = await fetch(`${url}/api/pokemon/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPokemon(data);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPokemonDetail();
    }
  }, [id, allPokemon]);

  useEffect(() => {
    const fetchPokemonAbilities = async () => {
      try {
        const abilityPromises = pokemon.abilities.map(async (ability) => {
          const res = await fetch(ability.ability.url);
          if (res.ok) {
            const data = await res.json();
            const ability = data.effect_entries.find(
              (ab) => ab.language.name === "en"
            ).effect;
            return ability;
          }
        });

        const newAbilities = await Promise.all(abilityPromises);
        setAbilities(newAbilities);
      } catch (error) {
        console.error(error);
      }
    };

    if (pokemon != null) fetchPokemonAbilities();
  }, [pokemon]);

  const getTypeColor = (type) => {
    const colors = {
      normal: "#A8A878",
      fire: "#F08030",
      water: "#6890F0",
      electric: "#F8D030",
      grass: "#78C850",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dragon: "#7038F8",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#EE99AC",
    };
    return colors[type] || "#68A090";
  };

  const getStatName = (statName) => {
    const names = {
      hp: "HP",
      attack: "Attack",
      defense: "Defense",
      "special-attack": "Sp. Attack",
      "special-defense": "Sp. Defense",
      speed: "Speed",
    };
    return names[statName] || statName;
  };

  const getStatColor = (value) => {
    if (value >= 100) return "#4ade80";
    if (value >= 80) return "#facc15";
    if (value >= 60) return "#fb923c";
    return "#f87171";
  };

  const formatHeight = (height) => {
    return `${(height / 10).toFixed(1)} m`;
  };

  const formatWeight = (weight) => {
    return `${(weight / 10).toFixed(1)} kg`;
  };

  const handleSpriteChange = (spriteKey) => {
    if (pokemon.sprites[spriteKey]) {
      setSelectedSprite(spriteKey);
    }
  };

  const goBack = () => {
    navigate("/pokemon");
  };

  if (loading) {
    return (
      <div className="pokemon-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading Pokemon details...</p>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="pokemon-detail-error">
        <div className="error-content">
          <h2>Pokemon not found</h2>
          <p>
            The Pokemon you are looking for does not exist or could not be
            loaded.
          </p>
          <button onClick={goBack} className="back-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
            Back to Pokedex
          </button>
        </div>
      </div>
    );
  }

  const primaryType = pokemon.types[0]?.type.name;
  const secondaryType = pokemon.types[1]?.type.name;

  return (
    <div
      className="pokemon-detail-page"
      style={{
        "--primary-type-color": getTypeColor(primaryType),
        "--secondary-type-color": getTypeColor(secondaryType || primaryType),
      }}
    >
      <div className="background-elements">
        <div className="type-orb primary-orb"></div>
        {secondaryType && <div className="type-orb secondary-orb"></div>}
      </div>

      <header className="pokemon-detail-header">
        <button onClick={goBack} className="back-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
          Back
        </button>
        <h1 className="pokemon-name">{pokemon.name}</h1>
        <span className="pokemon-id">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>
      </header>

      <div className="pokemon-detail-content">
        <div className="pokemon-layout">
          {/* Left Column */}
          <div className="left-column">
            <section className="pokemon-image-section">
              <div className="main-image-container">
                <img
                  src={
                    pokemon.sprites[selectedSprite] ||
                    pokemon.sprites.frontDefault
                  }
                  alt={pokemon.name}
                  className="pokemon-main-image"
                />
              </div>

              <div className="sprite-selector">
                {Object.entries(pokemon.sprites)
                  .filter(([key, value]) => value !== null)
                  .map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => handleSpriteChange(key)}
                      className={`sprite-btn ${
                        selectedSprite === key ? "active" : ""
                      }`}
                      title={key.replace(/([A-Z])/g, " $1").toLowerCase()}
                    >
                      <img src={value} alt={key} />
                    </button>
                  ))}
              </div>
            </section>

            <div className="info-card basic-info">
              <h3>Basic Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Height</span>
                  <span className="value">{formatHeight(pokemon.height)}</span>
                </div>
                <div className="info-item">
                  <span className="label">Weight</span>
                  <span className="value">{formatWeight(pokemon.weight)}</span>
                </div>
                <div className="info-item">
                  <span className="label">Order</span>
                  <span className="value">#{pokemon.order}</span>
                </div>
              </div>
            </div>

            <div className="info-card stats-info">
              <h3>Base Stats</h3>
              <div className="stats-list">
                {pokemon.stats.map((statInfo, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-header">
                      <span className="stat-name">
                        {getStatName(statInfo.stat.name)}
                      </span>
                      <span className="stat-value">{statInfo.baseStat}</span>
                    </div>
                    <div className="stat-bar">
                      <div
                        className="stat-fill"
                        style={{
                          width: `${Math.min(
                            (statInfo.baseStat / 200) * 100,
                            100
                          )}%`,
                          backgroundColor: getStatColor(statInfo.baseStat),
                        }}
                      ></div>
                    </div>
                    {statInfo.effort > 0 && (
                      <div className="effort-value">+{statInfo.effort} EV</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="stats-total">
                <strong>
                  Total:{" "}
                  {pokemon.stats.reduce((sum, stat) => sum + stat.baseStat, 0)}
                </strong>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="info-card types-and-effectiveness">
              <div className="types-section">
                <h3>Types</h3>
                <div className="types-container">
                  {pokemon.types.map((typeInfo) => (
                    <span
                      key={typeInfo.type.name}
                      className="type-badge medium"
                      style={{
                        backgroundColor: getTypeColor(typeInfo.type.name),
                      }}
                    >
                      {typeInfo.type.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="effectiveness-section-wrapper">
                <TypeEffectiveness
                  pokemonTypes={pokemon.types.map((t) => t.type.name)}
                />
              </div>
            </div>

            <div className="info-card abilities-info">
              <h3>Abilities</h3>
              <div className="abilities-list">
                {pokemon.abilities.map((abilityInfo, index) => (
                  <div className="ability-container">
                    <div className="ability-item" key={index}>
                      <span className="ability-name">
                        {abilityInfo.ability.name}
                      </span>
                      {abilityInfo.isHidden && (
                        <span className="hidden-badge">Hidden</span>
                      )}
                      <span className="ability-slot">{index + 1}</span>
                    </div>
                    <div>
                      <p className="ability-info">{abilities[index]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card evolution-info">
              <EvolutionChain currentPokemonId={pokemon.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
