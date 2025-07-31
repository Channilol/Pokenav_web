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
      navigate("/pokemon");
    }
  };

  // Only show Outlet if we're on /pokemon route (including detail pages) AND success is true
  const isOnPokemonRoute = window.location.pathname.startsWith("/pokemon");

  if (isOnPokemonRoute && success) {
    return <Outlet />;
  }

  return (
    <>
      <div className="loading-background">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="loading-container">
        <div className="loading-content">
          <div className="logo-container">
            <img
              className={`loading-img ${loading ? "loading" : "loaded"} ${
                success ? "clickable" : ""
              }`}
              src={logo}
              alt="logo"
              onClick={handleImageClick}
              style={{ cursor: success ? "pointer" : "default" }}
            />
            {loading && (
              <div className="progress-ring">
                <div className="progress-circle"></div>
              </div>
            )}
          </div>

          <div className="text-container">
            <h1
              className={`loading-title ${
                !loading && success
                  ? "success"
                  : !loading && !success
                  ? "error"
                  : "loading"
              }`}
            >
              {!loading && success
                ? "Ready to start!"
                : !loading && !success
                ? "Connection failed"
                : "Loading Pokédex..."}
            </h1>

            {loading && (
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            {!loading && !success && (
              <p className="error-message">
                Check your connection and try again
              </p>
            )}

            {success && (
              <p className="click-hint">Click the logo to start exploring!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
