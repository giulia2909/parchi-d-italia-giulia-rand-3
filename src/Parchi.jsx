import React from "react";
import Layout from "./Layout.jsx";
import { Link } from "react-router-dom";

function Parchi() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1>
              <span className='bold-text'>PARCHI</span>
            </h1>
            <p>
              <span className='italic-text bold-text'>
                Esplora i maestosi parchi nazionali italiani: luoghi incantati dove
                montagne, coste e antiche foreste raccontano la storia e la bellezza
                senza tempo del nostro Paese.
              </span>
            </p>
            <p>
              <span>
                Scopri i 12 parchi nazionali italiani, un mosaico di montagne, mari e
                foreste di inestimabile valore. Ogni area protetta racconta storie di
                biodiversità, paesaggi unici e tradizioni centenarie da vivere e
                rispettare. Avventure e meraviglie attendono.
              </span>
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/mountain-path.jpg" alt="Parchi D'Italia" />
          </div>
        </div>

        <hr className="divider" />
        <div className="parks-cards-grid">
          {/* Prima riga */}
          <Link to="/etna">
            <div className="parks-card parks-card-left">
              <div className="parks-card-bar parks-card-bar-left">
                <span>PARCO NAZIONALE DELL'ETNA</span>
              </div>
              <img src="./assets/img/etna-card.jpg" alt="Etna" />
            </div>
          </Link>
          <Link to="/sila">
            <div className="parks-card parks-card-right">
              <img src="./assets/img/parco-sila-card.jpg" alt="Sila" />
              <div className="parks-card-bar parks-card-bar-right">
                <span>PARCO NAZIONALE DELLA SILA</span>
              </div>
            </div>
          </Link>
          {/* Seconda riga */}
          <Link to="/vesuvio">
            <div className="parks-card parks-card-left">
              <div className="parks-card-bar parks-card-bar-left">
                <span>PARCO NAZIONALE DEL VESUVIO</span>
              </div>
              <img src="./assets/img/vesuvio-card.jpg" alt="Vesuvio" />
            </div>
          </Link>
          <Link to="/arcipelago">
            <div className="parks-card parks-card-right">
              <img src="./assets/img/arcipelago-card.jpg" alt="Arcipelago" />
              <div className="parks-card-bar parks-card-bar-right">
                <span>PARCO NAZIONALE DELL'ARCIPELAGO TOSCANO</span>
              </div>
            </div>
          </Link>
        </div>
        <hr className="divider" />

        <div className='card-small-grid'>
          <div className="card-small-row">
            <Link to="/abruzzo" className="card-small">
              <img src="./assets/img/parco-abruzzo.jpg" alt="Abruzzo" />
              <div className="card-small-bar">
                <span>Parco Nazionale d'Abruzzo</span>
              </div>
            </Link>
            <Link to="/paradiso" className="card-small">
              <img src="./assets/img/parco-paradiso.jpg" alt="Paradiso" />
              <div className="card-small-bar">
                <span>Parco Nazionale del Gran Paradiso</span>
              </div>
            </Link>
            <Link to="/cinque-terre" className="card-small">
              <img src="./assets/img/parco-cinque-terre.jpg" alt="Cinque Terre" />
              <div className="card-small-bar">
                <span>Parco Nazionale delle Cinque Terre</span>
              </div>
            </Link>
            <Link to="/pollino" className="card-small">
              <img src="./assets/img/parco-pollino.jpg" alt="Pollino" />
              <div className="card-small-bar">
                <span>Parco Nazionale del Pollino</span>
              </div>
            </Link>
          </div>

          <div className="card-small-row">
            <Link to="/dolomiti" className="card-small">
              <img src="./assets/img/parco-dolomiti.jpg" alt="Dolomiti" />
              <div className="card-small-bar">
                <span>Parco Nazionale delle Dolomiti</span>
              </div>
            </Link>
            <Link to="/maddalena" className="card-small">
              <img src="./assets/img/parco-maddalena.jpeg" alt="Maddalena" />
              <div className="card-small-bar">
                <span>Parco Nazionale della Maddalena</span>
              </div>
            </Link>
            <Link to="/cilento" className="card-small">
              <img src="./assets/img/parco-cilento.jpg" alt="Cilento" />
              <div className="card-small-bar">
                <span>Parco Nazionale del Cilento</span>
              </div>
            </Link>
            <Link to="/foreste" className="card-small">
              <img src="./assets/img/parco-foreste-casentinesi.jpg" alt="Foreste Casentinesi" />
              <div className="card-small-bar">
                <span>Parco Nazionale delle Foreste Casentinesi</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Parchi;