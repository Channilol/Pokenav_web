import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemon: [],
  selectedPokemon: null,
  isLoading: false,
  error: null,
  filters: {
    search: '',
    generation: null,
    types: [],
    evolution: [],
  },
  filteredPokemon: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
      state.filteredPokemon = action.payload;
      state.error = null;
    },
    addPokemon: (state, action) => {
      state.pokemon.push(action.payload);
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    setSearchFilter: (state, action) => {
      state.filters.search = action.payload;
      applyFilters(state);
    },
    setGenerationFilter: (state, action) => {
      state.filters.generation = action.payload;
      applyFilters(state);
    },
    setTypeFilter: (state, action) => {
      const types = action.payload;
      if (types.length <= 2) {
        state.filters.types = types;
        applyFilters(state);
      }
    },
    setEvolutionFilter: (state, action) => {
      state.filters.evolution = action.payload;
      applyFilters(state);
    },
    clearFilters: (state) => {
      state.filters = {
        search: '',
        generation: null,
        types: [],
        evolution: [],
      };
      state.filteredPokemon = state.pokemon;
    },
  },
});

// Helper function to apply all filters
const applyFilters = (state) => {
  let filtered = [...state.pokemon];
  const { search, generation, types, evolution } = state.filters;

  // Search filter
  if (search) {
    filtered = filtered.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Generation filter
  if (generation) {
    const generations = {
      1: { start: 1, end: 151 },
      2: { start: 152, end: 251 },
      3: { start: 252, end: 386 },
      4: { start: 387, end: 493 },
      5: { start: 494, end: 649 },
      6: { start: 650, end: 721 },
      7: { start: 722, end: 809 },
      8: { start: 810, end: 905 },
      9: { start: 906, end: 1025 },
    };
    
    const gen = generations[generation];
    if (gen) {
      filtered = filtered.filter(pokemon =>
        pokemon.id >= gen.start && pokemon.id <= gen.end
      );
    }
  }

  // Type filter
  if (types.length > 0) {
    filtered = filtered.filter(pokemon =>
      types.every(type =>
        pokemon.types.some(pokemonType =>
          pokemonType.type.name === type
        )
      )
    );
  }

  // Evolution filter (simplified - assuming we have evolution stage info)
  if (evolution.length > 0) {
    // This would need more complex logic based on actual evolution data
    // For now, we'll use a simple heuristic based on Pokemon ID patterns
    filtered = filtered.filter(pokemon => {
      // This is a simplified approach - in a real app you'd have evolution data
      const isBaseForm = evolution.includes('base');
      const isFirstEvolution = evolution.includes('first');
      const isSecondEvolution = evolution.includes('second');
      
      // Simple heuristic: assume base forms are every 3rd starting from certain IDs
      // This is just for demonstration - real evolution data would be needed
      if (isBaseForm && pokemon.id % 3 === 1) return true;
      if (isFirstEvolution && pokemon.id % 3 === 2) return true;
      if (isSecondEvolution && pokemon.id % 3 === 0) return true;
      
      return evolution.length === 0;
    });
  }

  state.filteredPokemon = filtered;
};

export const {
  setLoading,
  setPokemon,
  addPokemon,
  setSelectedPokemon,
  setError,
  clearError,
  setSearchFilter,
  setGenerationFilter,
  setTypeFilter,
  setEvolutionFilter,
  clearFilters,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;