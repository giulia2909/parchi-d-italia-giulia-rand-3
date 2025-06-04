import React from "react";
import Layout from "./Layout.jsx";

function Cilento() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1 className='bold-text'>PARCO NAZIONALE DEL CILENTO, VALLO DI DIANO E ALBURNI</h1>
            <p className='bold-text italic-text'>
              "Tra mare, monti e antichi borghi: il cuore verde della Campania."
            </p>
            <p>
              Il Parco Nazionale del Cilento, Vallo di Diano e Alburni è un vasto territorio tra mare e montagna, ricco di storia, tradizioni e biodiversità.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/cilento-panorama.jpg" alt="Parco del Cilento" />
          </div>
        </div>

        <hr className="divider" />
        <div className="info-alt-grid">
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Punti di interesse</h1>
                <p>
                  Grotte di Castelcivita, Templi di Paestum, costa di Palinuro, sentieri degli Alburni.
                </p>
              </div>
              <img src="./assets/img/cilento-templi.jpg" alt="Punti di interesse - Cilento" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Attività specifiche</h1>
                <p>
                  Trekking, speleologia, kayak, visite archeologiche, degustazioni di prodotti tipici come la mozzarella di bufala.
                </p>
              </div>
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Flora e fauna</h1>
                <p>
                  Lecci, castagni, aquile reali, lupi, lontre, orchidee spontanee e tartarughe marine.
                </p>
              </div>
              <img src="./assets/img/cilento-fauna.jpg" alt="Flora e fauna - Cilento" />
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

export default Cilento;