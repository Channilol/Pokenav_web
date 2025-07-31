import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Pokenav</h1>
      <p>Discover and explore the world of Pokémon!</p>
      <Link to="/pokemon" className="cta-button">
        View All Pokémon
      </Link>
    </div>
  );
}

export default Home;
