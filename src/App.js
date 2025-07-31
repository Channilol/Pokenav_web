import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./views/PokemonList/PokemonList";
import PokemonDetail from "./views/PokemonDetail/PokemonDetail";
import Loading from "./views/Loading/Loading";

export const url = "http://localhost:5062";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loading />}>
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
