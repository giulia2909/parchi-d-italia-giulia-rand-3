import React from "react";
import Layout from "./Layout.jsx";

function Arcipelago() {
  return (
    <Layout>
      <div className='wrapper'>
        <div className='container top'>
          <div className='section section-padded section-center'>
            <h1>
              <span className="bold-text">
                PARCO NAZIONALE DELL&#39;ARCIPELAGO TOSCANO
              </span>
            </h1>
            <p>
              <span className="bold-text italic-text">
                "Sette isole incastonate nel blu del Mediterraneo, un viaggio tra costa, cultura e natura
                protetta."
              </span>
            </p>
            <p>
              <span>
                Il Parco Nazionale dell&#39;Arcipelago Toscano è un&#39;area protetta che comprende le
                sette isole maggiori dell&#39;arcipelago (Elba, Giglio, Capraia, Montecristo, Pianosa,
                Giannutri e Gorgona), oltre a numerosi isolotti minori e tratti di mare circostanti.
                Istituito nel 1996, rappresenta il più grande parco marino d&#39;Europa e una delle
                realtà naturali più preziose dell&#39;intero bacino del Mediterraneo. Questa porzione
                di mare racchiude ecosistemi costieri e terrestri di grande varietà: spiagge
                sabbiose, scogliere a picco, macchia mediterranea, pinete e fondali che
                pullulano di vita. Il fascino del Parco risiede anche nella compresenza di
                elementi storici e culturali che, nel corso dei secoli, hanno segnato la vita di
                queste isole, rendendole scrigni di biodiversità e di tradizioni millenarie.
              </span>
            </p>
          </div>
          <div className='section section-img'>
            <img
              src='./assets/img/arcipelago-panorama.jpg'
              alt='Arcipelago Toscano'
            />
          </div>
        </div>

        <hr className='divider' />
        <div className='info-alt-grid'>
          <div className='info-alt-row'>
            <div className='info-img-card info-img-card-left'>
              <div className='info-img-card-bar'>
                <h1>
                  <span className="bold-text">Punti di interesse</span>
                </h1>
                <p>
                  <span>
                    L&#39;Isola d&#39;Elba, la più estesa, è famosa per la residenza di Napoleone Bonaparte durante il suo
                    esilio, ma offre anche incantevoli spiagge e sentieri panoramici che si snodano tra i vigneti e le
                    colline. Il Monte Capanne, con i suoi oltre mille metri di quota, regala una vista unica sulle altre
                    isole. L&#39;Isola del Giglio si distingue per il suggestivo porto colorato e per il borgo antico di Giglio
                    Castello, circondato da mura medievali. Capraia, originata da antichi vulcani sottomarini, è un
                    paradiso per gli amanti del trekking, che qui trovano sentieri affacciati su un mare turchese.
                    Montecristo, resa celebre dal romanzo di Dumas, è una riserva integrale accessibile solo con
                    permessi speciali, mentre Pianosa e Gorgona, in parte sedi di istituti penitenziari, presentano
                    ecosistemi marini eccezionalmente ben conservati. Giannutri, infine, incanta con le sue grotte e
                    gli antichi resti romani in prossimità del mare. Ognuna di queste isole racchiude peculiarità
                    geologiche e botaniche che attraggono ricercatori e appassionati di natura da tutto il mondo.
                  </span>
                </p>
              </div>
              <img
                src='./assets/img/arcipelago-montecristo.jpg'
                alt='Punti di interesse - Arcipelago'
              />
            </div>
          </div>
          <div className='info-alt-row'>
            <div className='info-text-card info-text-card-right'>
              <div className='info-text-card-content'>
                <h1>
                  <span className="bold-text">Attività specifiche</span>
                </h1>
                <p>
                  <span>
                    Le attività preferite dai visitatori del Parco Nazionale dell&#39;Arcipelago Toscano includono lo snorkeling e le immersioni subacquee: i fondali ospitano praterie di
                    posidonia, coralli e una straordinaria varietà di pesci, molluschi e crostacei. È possibile anche fare escursioni in barca, sia per raggiungere calette nascoste sia per
                    osservare delfini e balenottere che talvolta transitano in queste acque. A terra, chi ama il trekking trova numerosi percorsi ben segnalati: l&#39;anello occidentale dell&#39;Elba,
                    i sentieri panoramici del Giglio e le mulattiere di Capraia rappresentano ottimi esempi di itinerari che uniscono natura e storia. Numerose anche le opportunità di
                    praticare sport acquatici, come windsurf, kayak e vela, che consentono di apprezzare appieno la bellezza del mare toscano. Le isole, inoltre, offrono la possibilità di
                    scoprire borghi pittoreschi e di partecipare alle sagre locali, dove assaporare la cucina del territorio: dai piatti a base di pesce fresco fino ai vini DOC dell&#39;Elba, la
                    gastronomia dell&#39;arcipelago riflette l&#39;incontro tra mare e terra. Si possono anche organizzare visite guidate a tema geologico, con esperti che spiegano le particolari
                    formazioni rocciose e vulcaniche, testimoni della complessa storia geologica del Mar Tirreno.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='info-alt-row'>
            <div className='info-img-card info-img-card-left'>
              <div className='info-img-card-bar'>
                <h1>
                  <span className="bold-text">Flora e fauna</span>
                </h1>
                <p>
                  <span>
                    La macchia mediterranea domina molti tratti costieri, con arbusti di rosmarino, ginepro, lentisco e
                    corbezzolo. Nei versanti più umidi trovano spazio lecci e pini, mentre le zone più elevate dell&#39;Elba
                    ospitano castagneti. Per quanto riguarda la fauna, è possibile osservare mufloni, cinghiali e varie
                    specie di uccelli migratori che utilizzano le isole come tappa durante i loro spostamenti. Sulle
                    scogliere nidificano il falco pellegrino e il gabbiano corso, specie protetta. I fondali, ricchi di grotte e
                    secche, costituiscono il regno di cernie, saraghi, polpi e aragoste, oltre a stelle marine di ogni forma e
                    colore. Grazie ai programmi di conservazione messi in atto dal Parco, molte specie a rischio hanno
                    trovato qui un rifugio sicuro e la loro popolazione sta gradualmente riprendendo vigore. È importante
                    ricordare che, in determinate aree marine protette, la pesca è regolamentata per preservare gli
                    equilibri dell&#39;ecosistema.
                  </span>
                </p>
              </div>
              <img
                src='./assets/img/arcipelago-flora.jpg'
                alt='Flora e fauna - Arcipelago'
              />
            </div>
          </div>
          <div className='info-alt-row'>
            <div className='info-text-card info-text-card-right'>
              <div className='info-text-card-content'>
                <h1>
                  <span className="bold-text">Informazioni utili</span>
                </h1>
                <p>
                  <span>
                    Prima di visitare il Parco, è utile consultare il sito ufficiale o i Centri Visita per conoscere le regole di accesso a ogni isola: alcune, come Montecristo e Pianosa,
                    hanno restrizioni più severe per proteggere l&#39;integrità degli ecosistemi. Sull&#39;Elba, che è la più turistica, si trovano numerose strutture ricettive, campeggi e
                    alberghi, mentre le altre isole offrono alloggi e servizi in modo più limitato. Gli spostamenti fra le isole principali sono garantiti da traghetti e aliscafi in
                    partenza dai porti della Toscana (Piombino, Livorno e Porto Santo Stefano), ma l&#39;orario delle corse varia a seconda della stagione. È importante rispettare i
                    regolamenti di pesca e di immersione stabiliti dal Parco, nonché evitare di lasciare rifiuti o danneggiare la vegetazione. Le visite guidate rappresentano un
                    ottimo modo per approfondire la conoscenza degli ecosistemi e scoprire aspetti meno noti della storia locale. Con la dovuta attenzione e un pizzico di spirito
                    di avventura, l&#39;Arcipelago Toscano offre esperienze indimenticabili tra mare e terra, in un susseguirsi di panorami e profumi tipicamente mediterranei, arricchiti
                    da un patrimonio culturale che affonda le radici nell&#39;epoca etrusca e continua a vivere in ogni sagra di paese, in ogni borgo marinaro e in ogni sentiero in cui
                    riecheggiano antiche leggende e storie di naviganti. La tutela di questo patrimonio naturale è fondamentale per garantire alle generazioni future la possibilità
                    di ammirare la fusione armoniosa tra paesaggio e tradizione, che rende le isole toscane un esempio virtuoso di gestione ambientale e culturale.
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

export default Arcipelago;