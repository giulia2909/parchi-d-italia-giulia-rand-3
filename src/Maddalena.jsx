import React from "react";
import Layout from "./Layout.jsx";

function Maddalena() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1 className='bold-text'>PARCO NAZIONALE DELL'ARCIPELAGO DELLA MADDALENA</h1>
            <p className='bold-text italic-text'>
              "Isole granitiche e acque cristalline nel nord della Sardegna."
            </p>
            <p>
              Il Parco Nazionale della Maddalena è un arcipelago di isole e scogli, famoso per le sue spiagge incontaminate, la fauna marina e i paesaggi mozzafiato.
            </p>
          </div>
          <div className='section section-img'>
            <img src="./assets/img/maddalena-panorama.jpg" alt="Arcipelago della Maddalena" />
          </div>
        </div>

        <hr className="divider" />
        <div className="info-alt-grid">
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Punti di interesse</h1>
                <p>
                  Spiagge di Cala Coticcio, Spargi, Budelli, Caprera, e il centro storico di La Maddalena.
                </p>
              </div>
              <img src="./assets/img/maddalena-spiaggia.jpg" alt="Punti di interesse - Maddalena" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Attività specifiche</h1>
                <p>
                  Escursioni in barca, snorkeling, immersioni, trekking e visite ai musei di Garibaldi.
                </p>
              </div>
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>Flora e fauna</h1>
                <p>
                  Macchia mediterranea, delfini, tartarughe marine, gabbiani e pesci colorati.
                </p>
              </div>
              <img src="./assets/img/maddalena-fauna.jpg" alt="Flora e fauna - Maddalena" />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>Informazioni utili</h1>
                <p>
                  Alcune spiagge sono accessibili solo via mare. Rispetto delle regole di tutela ambientale fondamentale per la conservazione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Maddalena;