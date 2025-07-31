import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import logo from "../../assets/logo/logo_pokenav.png";
import "./Loading.css";
import { url } from "../../App";
import { setPokemon } from "../../store";

export default function Loading({ loadingState }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ref per tracciare se abbiamo già fatto la chiamata
  const hasFetched = useRef(false);

  async function fetchPokemon() {
    // Previene chiamate duplicate
    if (hasFetched.current) return;
    hasFetched.current = true;

    setLoading(true);
    try {
      const res = await fetch(`${url}/api/pokemon`);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(setPokemon(data));
      }
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.error(`Something went wrong while fetching data: ${error}`);
      setLoading(false);
      setSuccess(false);
      // Reset in caso di errore per permettere retry
      hasFetched.current = false;
    }
  }

  useEffect(() => {
    fetchPokemon();

    // Cleanup function (opzionale ma good practice)
    return () => {
      // Eventuali cleanup se necessari
    };
  }, []);

  const handleImageClick = () => {
    if (success) {
      navigate('/pokemon');
    }
  };

  // Only show Outlet if we're on /pokemon route AND success is true
  const isOnPokemonRoute = window.location.pathname === '/pokemon';

  if (isOnPokemonRoute && success) {
    return <Outlet />;
  }

  return (
    <>
      <h1>
        {!loading && success
          ? "Ready to start!"
          : !loading && !success
          ? "Error..."
          : "Loading pokemons..."}
      </h1>
      <img
        className={`loading-img ${loading ? "loading" : "loaded"} ${success ? "clickable" : ""}`}
        src={logo}
        alt="logo"
        onClick={handleImageClick}
        style={{ cursor: success ? 'pointer' : 'default' }}
      />
      {success && (
        <p className="click-hint">Click the image to start exploring!</p>
      )}
    </>
  );
}
