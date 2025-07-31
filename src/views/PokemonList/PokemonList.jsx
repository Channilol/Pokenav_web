import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import GenerationFilter from "../../components/GenerationFilter/GenerationFilter";
import TypeFilter from "../../components/TypeFilter/TypeFilter";
import EvolutionFilter from "../../components/EvolutionFilter/EvolutionFilter";
import logo from "../../assets/logo/logo_pokenav.png";
import "./PokemonList.css";

function PokemonList() {
  const { filteredPokemon, filters } = useSelector((state) => state.pokemon);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

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

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const closeFilters = () => {
    setIsFilterOpen(false);
  };

  // Close filters when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isFilterOpen &&
        !event.target.closest(".filter-sidebar") &&
        !event.target.closest(".filter-toggle-btn")
      ) {
        closeFilters();
      }
    };

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isFilterOpen]);

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-list">
        <div className="pokemon-list-header">
          <img src={logo} alt="PokeNav" className="header-logo" />
          <h1>Pokénav</h1>
        </div>

        <div className="filters-section">
          <div className="search-and-filter-row">
            <div className="search-box-container">
              <SearchBar />
            </div>
            <div className="filter-toggle-container">
              <button
                onClick={toggleFilters}
                className={`filter-toggle-btn ${isFilterOpen ? "active" : ""}`}
              >
                <span>Filters</span>
                <span className="filter-toggle-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Sidebar */}
        <div className={`filter-overlay ${isFilterOpen ? "active" : ""}`}>
          <div className={`filter-sidebar ${isFilterOpen ? "open" : ""}`}>
            <div className="filter-sidebar-header">
              <h3>Filters</h3>
              <button
                onClick={closeFilters}
                className="filter-close-btn"
                aria-label="Close filters"
              >
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="filter-sidebar-content">
              <div className="filter-section">
                <GenerationFilter />
              </div>

              <div className="filter-section">
                <EvolutionFilter />
              </div>

              <div className="filter-section">
                <TypeFilter />
              </div>
            </div>
          </div>
        </div>

        <div className="pokemon-grid">
          {filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon) => (
              <div
                key={pokemon.id}
                className="pokemon-card"
                style={{
                  "--hover-color":
                    pokemon.types?.length > 0
                      ? getTypeColor(pokemon.types[0].type.name)
                      : "#68A090",
                  "--hover-color-secondary":
                    pokemon.types?.length > 1
                      ? getTypeColor(pokemon.types[1].type.name)
                      : pokemon.types?.length > 0
                      ? getTypeColor(pokemon.types[0].type.name)
                      : "#68A090",
                }}
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
              >
                <div className="pokemon-image-container">
                  <img
                    src={
                      pokemon.sprites?.frontDefault ||
                      "/placeholder-pokemon.png"
                    }
                    alt={pokemon.name}
                    loading="lazy"
                  />
                </div>

                <div className="pokemon-info">
                  <h3 className="pokemon-name">{pokemon.name}</h3>
                  <p className="pokemon-id">
                    #{pokemon.id.toString().padStart(3, "0")}
                  </p>

                  <div className="pokemon-types">
                    {pokemon.types?.map((typeInfo) => (
                      <span
                        key={typeInfo.type.name}
                        className="type-badge"
                        style={{
                          backgroundColor: getTypeColor(typeInfo.type.name),
                        }}
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
