import React from "react";
import Layout from "./Layout.jsx";

function Paradiso() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1 className='bold-text'>PARCO NAZIONALE DEL GRAN PARADISO</h1>
            <p className='bold-text italic-text'>
              "Il più antico parco d’Italia: stambecchi, ghiacciai e valli alpine."
            </p>
            <p>
              Il Parco Nazionale del Gran Paradiso è celebre per i suoi paesaggi alpini, la fauna protetta e i suoi sentieri panoramici tra valli, laghi e ghiacciai.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/paradiso-panorama.jpg" alt="Gran Paradiso" />
          </div>
        </div>

        <hr className="divider" />
        <div className="info-alt-grid">
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Punti di interesse</h1>
                <p>
                  Valsavarenche, Cogne, Val di Rhêmes, ghiacciai, laghi alpini e rifugi storici.
                </p>
              </div>
              <img src="./assets/img/paradiso-lago.jpg" alt="Punti di interesse - Paradiso" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Attività specifiche</h1>
                <p>
                  Trekking, alpinismo, ciaspolate, osservazione fauna, visite ai centri visita.
                </p>
              </div>
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Flora e fauna</h1>
                <p>
                  Stambecchi, camosci, marmotte, aquile reali, fiori alpini e boschi di larici.
                </p>
              </div>
              <img src="./assets/img/paradiso-fauna.jpg" alt="Flora e fauna - Paradiso" />
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

export default Paradiso;