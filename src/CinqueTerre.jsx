import React from "react";
import Layout from "./Layout.jsx";

function CinqueTerre() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1 className='bold-text'>PARCO NAZIONALE DELLE CINQUE TERRE</h1>
            <p className='bold-text italic-text'>
              "Borghi colorati, terrazzamenti e sentieri a picco sul mare."
            </p>
            <p>
              Il Parco Nazionale delle Cinque Terre protegge uno dei tratti costieri più suggestivi d’Italia, con borghi a picco sul mare, vigneti e sentieri panoramici.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/cinqueterre-panorama.jpg" alt="Cinque Terre" />
          </div>
        </div>

        <hr className="divider" />
        <div className="info-alt-grid">
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Punti di interesse</h1>
                <p>
                  Monterosso, Vernazza, Corniglia, Manarola, Riomaggiore, sentieri panoramici e spiagge.
                </p>
              </div>
              <img src="./assets/img/cinqueterre-borgo.jpg" alt="Punti di interesse - Cinque Terre" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Attività specifiche</h1>
                <p>
                  Trekking, degustazioni di vini, escursioni in barca, snorkeling, fotografia.
                </p>
              </div>
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Flora e fauna</h1>
                <p>
                  Macchia mediterranea, vigneti, gabbiani, lucertole, delfini e pesci costieri.
                </p>
              </div>
              <img src="./assets/img/cinqueterre-fauna.jpg" alt="Flora e fauna - Cinque Terre" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Informazioni utili</h1>
                <p>
                  Sentieri a pagamento, treni frequenti tra i borghi, rispetto delle regole di tutela ambientale fondamentale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CinqueTerre;