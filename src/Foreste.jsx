import React from "react";
import Layout from "./Layout.jsx";

function Foreste() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1 className='bold-text'>PARCO NAZIONALE DELLE FORESTE CASENTINESI</h1>
            <p className='bold-text italic-text'>
              "Boschi secolari tra Toscana e Romagna: natura, spiritualità e biodiversità."
            </p>
            <p>
              Il Parco Nazionale delle Foreste Casentinesi, Monte Falterona e Campigna è un’oasi verde famosa per le sue foreste, i sentieri e la ricca fauna selvatica.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/foreste-panorama.jpg" alt="Foreste Casentinesi" />
          </div>
        </div>

        <hr className="divider" />
        <div className="info-alt-grid">
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Punti di interesse</h1>
                <p>
                  Foresta della Lama, Eremo di Camaldoli, Cascata dell’Acquacheta, sentieri panoramici.
                </p>
              </div>
              <img src="./assets/img/foreste-eremo.jpg" alt="Punti di interesse - Foreste" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Attività specifiche</h1>
                <p>
                  Trekking, escursioni guidate, birdwatching, fotografia naturalistica, spiritualità nei luoghi sacri.
                </p>
              </div>
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Flora e fauna</h1>
                <p>
                  Faggi, abeti, cervi, daini, lupi, aquile reali, salamandre e farfalle rare.
                </p>
              </div>
              <img src="./assets/img/foreste-fauna.jpg" alt="Flora e fauna - Foreste" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Informazioni utili</h1>
                <p>
                  Numerosi centri visita, sentieri segnalati e aree attrezzate. Rispetto delle regole di tutela ambientale fondamentale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Foreste;