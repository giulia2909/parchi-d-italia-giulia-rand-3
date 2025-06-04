import React from "react";
import Layout from "./Layout.jsx";

function Dolomiti() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1 className='bold-text'>PARCO NAZIONALE DELLE DOLOMITI BELLUNESI</h1>
            <p className='bold-text italic-text'>
              "Montagne Patrimonio UNESCO: natura, storia e avventura."
            </p>
            <p>
              Il Parco Nazionale delle Dolomiti Bellunesi tutela uno dei paesaggi montani più spettacolari d’Italia, con vette, vallate e una straordinaria biodiversità.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/dolomiti-panorama.jpg" alt="Parco Dolomiti" />
          </div>
        </div>

        <hr className="divider" />
        <div className="info-alt-grid">
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Punti di interesse</h1>
                <p>
                  Vette Feltrine, Val Canzoi, Cadini del Brenton, sentieri panoramici e borghi alpini.
                </p>
              </div>
              <img src="./assets/img/dolomiti-vetta.jpg" alt="Punti di interesse - Dolomiti" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Attività specifiche</h1>
                <p>
                  Escursionismo, arrampicata, mountain bike, ciaspolate, fotografia naturalistica.
                </p>
              </div>
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Flora e fauna</h1>
                <p>
                  Abeti, larici, stelle alpine, camosci, marmotte, aquile reali e farfalle rare.
                </p>
              </div>
              <img src="./assets/img/dolomiti-fauna.jpg" alt="Flora e fauna - Dolomiti" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Informazioni utili</h1>
                <p>
                  Sentieri ben segnalati, rifugi alpini e centri visita. Attenzione alle condizioni meteo in quota.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dolomiti;