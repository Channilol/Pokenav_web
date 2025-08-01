# Pokédex Frontend con React.js

Questa è un'applicazione web frontend costruita in React.js che funge da enciclopedia Pokémon (Pokédex). Interagisce con un [progetto backend custom](https://github.com/tuo-username/pokemon-api) per recuperare e visualizzare i dati dei Pokémon.

## 📸 Screenshot

*(Inserisci qui uno o più screenshot dell'applicazione in funzione per mostrare l'interfaccia utente.)*

## ✨ Funzionalità

Dall'analisi del codice, il progetto include le seguenti funzionalità:

-   **Ricerca Pokémon**: Cerca un Pokémon specifico per nome.
-   **Filtri Multipli**:
    -   Filtra i Pokémon per **Tipo** (es. Fuoco, Acqua, Erba).
    -   Filtra i Pokémon per **Generazione**.
    -   Filtra per **Catena Evolutiva**.
-   **Lista Pokémon**: Visualizza una lista completa e paginata di tutti i Pokémon.
-   **Dettagli Pokémon**: Cliccando su un Pokémon, si accede a una pagina di dettaglio che mostra:
    -   Statistiche di base.
    -   Abilità.
    -   La sua catena evolutiva completa.
    -   Un'analisi delle debolezze e resistenze del suo tipo.
-   **State Management**: Gestione centralizzata dello stato dell'applicazione tramite Redux Toolkit.

## 🚀 Tecnologie Utilizzate

-   **Frontend**:
    -   [React.js](https://reactjs.org/)
    -   [Redux Toolkit](https://redux-toolkit.js.org/) per la gestione dello stato.
    -   CSS standard per lo styling.
-   **Backend**:
    -   Questa applicazione è progettata per funzionare con un'API Pokémon custom. Assicurati che il server backend sia in esecuzione e accessibile.

## 🏁 Iniziare

Segui questi passaggi per avviare il progetto in locale.

### Prerequisiti

-   Node.js (versione 14 o superiore)
-   npm
-   Il server del [progetto backend](https://github.com/tuo-username/pokemon-api) deve essere in esecuzione.

### Installazione

1.  **Clona il repository:**
    ```sh
    git clone https://github.com/tuo-username/pokedex-frontend.git
    ```
2.  **Entra nella directory del progetto:**
    ```sh
    cd pokedex-frontend
    ```
3.  **Installa le dipendenze:**
    ```sh
    npm install
    ```

### Configurazione

L'applicazione ha bisogno di sapere l'URL base della tua API backend.

1.  Crea un file `.env` nella root del progetto:
    ```sh
    touch .env
    ```
2.  Aggiungi la seguente variabile d'ambiente al file `.env`, sostituendo l'URL con quello corretto del tuo backend:
    ```
    REACT_APP_API_URL=http://localhost:8000/api
    ```

### Avvio

Per avviare l'applicazione in modalità di sviluppo:

```sh
npm start
```

Apri [http://localhost:3000](http://localhost:3000) per vederla nel tuo browser.

## 📜 Script Disponibili

Nel progetto, puoi eseguire i seguenti script:

-   `npm start`: Avvia l'app in modalità sviluppo.
-   `npm test`: Esegue i test in modalità interattiva.
-   `npm run build`: Compila l'app per la produzione nella cartella `build`.

## 📄 Licenza

Questo progetto è rilasciato sotto la Licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.