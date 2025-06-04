import React from "react";
import Layout from "./Layout.jsx";

function Pollino() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1 className='bold-text'>PARCO NAZIONALE DEL POLLINO</h1>
            <p className='bold-text italic-text'>
              "Il parco più grande d’Italia: montagne, gole e tradizioni antiche."
            </p>
            <p>
              Il Parco Nazionale del Pollino si estende tra Basilicata e Calabria, famoso per i suoi paesaggi montani, i boschi di pini loricati e le tradizioni culturali delle comunità locali.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/pollino-panorama.jpg" alt="Parco del Pollino" />
          </div>
        </div>

        <hr className="divider" />
        <div className="info-alt-grid">
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Punti di interesse</h1>
                <p>
                  Serra Dolcedorme, Gole del Raganello, Piani di Pollino, borghi arbëreshë.
                </p>
              </div>
              <img src="./assets/img/pollino-gole.jpg" alt="Punti di interesse - Pollino" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Attività specifiche</h1>
                <p>
                  Trekking, rafting, canyoning, arrampicata, escursioni a cavallo e degustazioni di prodotti tipici.
                </p>
              </div>
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Flora e fauna</h1>
                <p>
                  Pino loricato, faggi, lupi, aquile reali, caprioli, orchidee spontanee.
                </p>
              </div>
              <img src="./assets/img/pollino-fauna.jpg" alt="Flora e fauna - Pollino" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Informazioni utili</h1>
                <p>
                  Numerosi sentieri segnalati, rifugi e centri visita. Attenzione alle condizioni meteo in quota.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pollino;