import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import Home from "./Home.jsx";
import Attivita from "./Attivita.jsx";
import Etna from "./Etna.jsx";
import Vesuvio from "./Vesuvio.jsx";
import Sila from "./Sila.jsx";
import Arcipelago from "./Arcipelago.jsx";
import Abruzzo from "./Abruzzo.jsx";
import Parchi from "./Parchi.jsx";
import Dolomiti from "./Dolomiti.jsx";
import Maddalena from "./Maddalena.jsx";
import Cilento from "./Cilento.jsx";
import Foreste from "./Foreste.jsx";
import Paradiso from "./Paradiso.jsx";
import CinqueTerre from "./CinqueTerre.jsx";
import Pollino from "./Pollino.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attivita" element={<Attivita />} />
        <Route path="/parchi" element={<Parchi />} />
        <Route path="/etna" element={<Etna />} />
        <Route path="/sila" element={<Sila />} />
        <Route path="/vesuvio" element={<Vesuvio />} />
        <Route path="/arcipelago" element={<Arcipelago />} />
        <Route path="/abruzzo" element={<Abruzzo />} />
        {/* Route reali */}
        {/* Catch-all: tutte le altre route vanno su Home e l'URL torna "/" */}
        <Route path="*" element={<Navigate to="/" replace />} />

        {/* <Route path="/dolomiti" element={<Home />} />
        <Route path="/maddalena" element={<Home />} />
        <Route path="/cilento" element={<Home />} />
        <Route path="/foreste" element={<Home />} />
        <Route path="/paradiso" element={<Home />} />
        <Route path="/cinque-terre" element={<Home />} />
        <Route path="/pollino" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
