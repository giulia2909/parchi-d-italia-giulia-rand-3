import React from 'react';
import Layout from "./Layout.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <p className='bold-text'>Guida ai parchi nazionali, riserve naturali e aree protette</p>
            <h1 className='bold-text'>ESPLORA I PARCHI D&#39;ITALIA</h1>
            <p style={{ fontSize: '0.9rem' }}>Biodiversità, paesaggi, tradizioni, natura, cultura.</p>
            <p>
              I parchi naturali italiani sono un tesoro di ecosistemi ricchi,
              paesaggi mozzafiato e unici legami tra uomo e ambiente.
              Scopri flora, fauna e le storie che rendono speciale ogni
              angolo protetto del nostro Paese.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/volcan-etna_1.jpg" alt="Parchi D'Italia" />
          </div>
        </div>

        <hr className="divider" />
        <div className="card-small-row">
          <Link to="/etna" className="card-small">
            <img src="./assets/img/etna-card.jpg" alt="Etna" />
            <div className="card-small-bar">Parco dell'Etna</div>
          </Link>
          <Link to="/sila" className="card-small">
            <img src="./assets/img/parco-sila-card.jpg" alt="Sila" />
            <div className="card-small-bar">Parco della Sila</div>
          </Link>
          <Link to="/vesuvio" className="card-small">
            <img src="./assets/img/vesuvio-card.jpg" alt="Vesuvio" />
            <div className="card-small-bar">Parco del Vesuvio</div>
          </Link>
          <Link to="/arcipelago" className="card-small">
            <img src="./assets/img/arcipelago-card.jpg" alt="Arcipelago" />
            <div className="card-small-bar">Parco dell&#39;arcipelago Toscano</div>
          </Link>
        </div>
        <hr className="divider" />

        <div className='container top'>
          <div className='section section-padded'>
            <h1 className='bold-text'>Attività ed esperienze </h1>
            <p>
              I parchi naturali italiani offrono esperienze uniche per esplorare paesaggi
              straordinari: trekking panoramici, birdwatching, vulcani attivi e sentieri
              immersi nella biodiversità di monti e foreste.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/etna-trekking.jpg" alt="Parchi D'Italia" />
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Home;