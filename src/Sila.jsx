import React from "react";
import Layout from "./Layout.jsx";

function Sila() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="container top">
          <div className="section section-padded section-center">
            <h1>
              <span className="bold-text">PARCO NAZIONALE DELLA SILA</span>
            </h1>
            <p>
              <span className="bold-text italic-text">
                "Un altopiano millenario nel cuore della Calabria: boschi, laghi e borghi di antiche tradizioni."
              </span>
            </p>
            <p>
              <span>
                Il Parco Nazionale della Sila, situato nel cuore della Calabria, è un altopiano montuoso
                che si estende su circa 150.000 ettari, caratterizzato da boschi secolari, laghi pittoreschi
                e antichi borghi rurali. Istituito come parco nel 2002, ma già riconosciuto come Riserva
                della Biosfera UNESCO, questo territorio vanta una storia millenaria, intrecciata con le
                tradizioni agro-pastorali e con un patrimonio culturale che comprende feste popolari,
                artigianato e enogastronomia di eccellenza. I visitatori che scelgono di esplorare la Sila
                possono scoprire un ambiente montano unico nel contesto mediterraneo, in cui la natura
                e l&#39;uomo hanno saputo convivere in modo armonioso per secoli.
              </span>
            </p>
          </div>
          <div className="section section-img">
            <img
              src="./assets/img/parco-sila.jpg"
              alt="Parco della Sila"
            />
          </div>
        </div>

        <hr className="divider" />
        <div className="info-alt-grid">
          <div className="info-alt-row">
            <div className="info-text-card info-text-card-left">
              <div className="info-text-card-content">
                <h1>
                  <span className="bold-text">Punti di interesse</span>
                </h1>
                <p>
                  <span>
                    Punti di interesseTra i luoghi di maggior richiamo figura il Lago Cecita, un grande invaso artificiale incastonato tra foreste di faggio e
                    abete bianco. Qui si trova anche il Centro Visita Cupone, gestito dall&#39;Ente Parco, che offre percorsi didattici, un giardino geologico e
                    recinti faunistici dove è possibile avvicinare cervi, daini e lupi in semi-cattività. Un altro specchio d&#39;acqua di grande fascino è il Lago
                    Arvo, meta ideale per rilassarsi in barca o praticare sport acquatici a bassa intensità. La Riserva Naturale del Fallistro, conosciuta
                    anche come i Giganti della Sila, ospita monumentali pini larici e pini neri centenari. Borghi come San Giovanni in Fiore, Camigliatello
                    Silano e Lorica conservano tradizioni artigianali e culinarie, tra cui la lavorazione della lana, la tessitura e la produzione di formaggi
                    tipici.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-right">
              <div className="info-img-card-bar">
                <h1>
                  <span className="bold-text">Attività specifiche</span>
                </h1>
                <p>
                  <span>
                    Il trekking è l&#39;attività regina della Sila, grazie a una rete di sentieri ben tracciati che attraversano boschi
                    fitti, radure e dorsali montane da cui si gode di ampie vedute sull&#39;intera regione. In estate, la mountain
                    bike trova percorsi adatti a tutti i livelli, con possibilità di noleggio in vari centri turistici. Nei mesi invernali,
                    invece, le abbondanti nevicate permettono di praticare sci di fondo e, in alcune zone, anche sci alpino.
                    Per gli amanti dell&#39;equitazione, sono disponibili maneggi e itinerari a cavallo che consentono di esplorare
                    angoli remoti del parco. Non manca l&#39;aspetto gastronomico: salumi come la &#39;nduja, formaggi pecorini,
                    patate IGP e funghi porcini sono solo alcune delle specialità da degustare nei ristoranti o durante le sagre
                    locali. Laboratori didattici e visite guidate organizzate dal parco e dalle cooperative del territorio offrono
                    l&#39;opportunità di approfondire la conoscenza dell&#39;ecosistema silano e delle attività tradizionali, come
                    l&#39;apicoltura e la raccolta dei frutti del sottobosco.
                  </span>
                </p>
              </div>
              <img
                src="./assets/img/trekking-sila.png"
                alt="Attività specifiche - Sila"
              />
            </div>
          </div>
          <div className="info-alt-row">
            <div className="info-img-card info-img-card-left">
              <div className="info-img-card-bar">
                <h1>
                  <span className="bold-text">Flora e fauna</span>
                </h1>
                <p>
                  <span>
                    La Sila è coperta prevalentemente da foreste di faggio, pino laricio e abete bianco, che in autunno si tingono di
                    colori spettacolari. Le parti più alte dell&#39;altopiano raggiungono circa 1.900 metri e ospitano specie endemiche,
                    adattate a condizioni climatiche rigide per la latitudine. L&#39;area è un rifugio prezioso per il lupo appenninico,
                    simbolo del parco, e per altre specie come il cervo e il capriolo, reintrodotti dopo aver rischiato l&#39;estinzione
                    locale. Rapaci come la poiana e il falco pecchiaiolo sorvolano i cieli, mentre nei torrenti di montagna si possono
                    trovare trote e altre specie di pesci d&#39;acqua dolce. Il sottobosco è ricchissimo di funghi e di piante officinali,
                    sfruttate dalla tradizione erboristica calabrese. Questi elementi naturali si intrecciano con la presenza umana,
                    dando vita a paesaggi pastorali dove pascoli e foreste convivono armoniosamente.
                  </span>
                </p>
              </div>
              <img
                src="./assets/img/cervo-sila.png"
                alt="Flora e fauna - Sila"
              />
            </div>
          </div>
          <div className="info-alt-row bottom-padded">
            <div className="info-text-card info-text-card-right">
              <div className="info-text-card-content">
                <h1>
                  <span className="bold-text">Informazioni utili</span>
                </h1>
                <p>
                  <span>
                    Il Parco Nazionale della Sila è facilmente raggiungibile dai principali centri urbani calabresi, come Cosenza e Catanzaro, utilizzando strade statali o regionali. Per chi
                    preferisce i mezzi pubblici, esistono bus che collegano alcune località silane alle città più grandi, ma l&#39;auto risulta spesso la soluzione migliore per esplorare in libertà le
                    varie zone del parco. È consigliabile visitare la Sila in diverse stagioni: l&#39;inverno offre paesaggi innevati ideali per gli sport sulla neve, la primavera e l&#39;autunno regalano colori
                    mozzafiato, mentre l&#39;estate, con temperature più miti rispetto alla costa, permette di sfuggire alla calura e di fare escursioni in un clima gradevole. Numerose strutture
                    ricettive, dai rifugi ai B&B, garantiscono un buon livello di ospitalità, spesso accompagnato da una genuina accoglienza familiare. Prima di intraprendere un&#39;escursione, è
                    sempre bene informarsi sulle condizioni meteo e sulla presenza di eventuali restrizioni temporanee. Nel rispetto della natura e delle norme del parco, è vietato abbandonare
                    rifiuti, raccogliere piante o disturbare la fauna selvatica. Grazie all&#39;impegno costante dei residenti e delle istituzioni, il Parco Nazionale della Sila rimane un esempio di come
                    la conservazione dell&#39;ambiente possa conciliarsi con lo sviluppo del turismo sostenibile e con la valorizzazione di un patrimonio culturale unico nel suo genere.
                  </span>
                  <span>
                    Un aspetto affascinante riguarda la lavorazione della lana, che per secoli è stata una delle principali fonti di sostentamento delle comunità silane. Ancora oggi, alcuni
                    laboratori artigianali conservano metodi tradizionali di filatura e tintura, tramandati di generazione in generazione. Chi visita il parco in primavera può assistere alla
                    transumanza, il suggestivo trasferimento stagionale delle greggi, che mostra come la vita pastorale si intrecci con i ritmi naturali del territorio. Anche sotto il profilo
                    gastronomico, i prodotti caseari rivestono un ruolo essenziale: formaggi come il caciocavallo silano, la provola affumicata e il pecorino conquistano i palati dei visitatori, i
                    quali possono degustarli abbinati a confetture o miele di castagno. Questa sinergia tra natura e cultura fa sì che la Sila rappresenti non solo un&#39;area di straordinario pregio
                    ambientale, ma anche un luogo in cui le tradizioni locali contribuiscono a mantenere viva l&#39;identità di un popolo profondamente legato alle proprie origini e alla terra che lo
                    circonda.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Sila;