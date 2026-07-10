---
title: "Percorso critico o percorso del margine che inizia con un vincolo"
seoTitle: "Percorso critico o percorso del margine che inizia con un vincolo - Primavera P6"
description: "Spiega perché Percorso critico o percorso del margine che inizia con un vincolo influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Percorso critico o percorso del margine che inizia con un vincolo"
  - "Primavera P6 Percorso critico o percorso del margine che inizia con un vincolo"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/cp-or-float-path-starting-with-constraint-primavera-p6"
language: "it"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primarySearchIntent: "Spiega perché Percorso critico o percorso del margine che inizia con un vincolo influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/09_cp_or_float_path_starting_with_constraint/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/09_cp_or_float_path_starting_with_constraint/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titolo

Percorso critico o percorso del margine che inizia con un vincolo

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che valutano il percorso critico di Primavera P6 e la qualità del percorso del margine.

## Gancio di apertura

Un percorso critico dovrebbe raccontare la storia dell’opera. Se il percorso inizia con un vincolo, potrebbe invece raccontare la storia di una data imposta.

## Introduzione

In Primavera P6, i vincoli possono essere utili quando una data è richiesta esternamente. Una tappa fondamentale di inizio progetto, un avviso di procedere, un rilascio di autorizzazione o una data di accesso del proprietario possono essere legittimi.

Il problema si verifica quando un percorso critico o un percorso del margine inizia con un'attività vincolata che non è l'inizio del progetto approvato. In tal caso, il percorso può essere guidato da un controllo della data anziché dalla logica del predecessore.

Questa metrica identifica il percorso critico o le catene di percorsi mobili che iniziano con un'attività vincolata, escluso l'inizio del progetto approvato. L'obiettivo sono zero percorsi irrisolti.

## Cosa significa questo parametro

Questo parametro controlla la prima attività su un percorso critico o su un percorso del margine selezionato. Se la prima attività presenta un vincolo, il revisore dovrebbe chiedersi se il percorso è veramente guidato dalla logica.

L'inizio del progetto approvato è solitamente un'eccezione valida. Ogni progetto ha bisogno di un punto di partenza. Ma un percorso vincolato che inizia a valle nella pianificazione può indicare logica mancante, date forzate o un requisito esterno che necessita di documentazione.

Un risultato elevato suggerisce che i percorsi chiave potrebbero essere controllati da vincoli piuttosto che dalla logica CPM. Un risultato basso suggerisce che gli inizi del percorso sono meglio supportati dal sequenziamento reale.

## Perché questo argomento è importante

Le revisioni del percorso critico e del percorso del margine vengono utilizzate per la previsione, il reporting PMO e l'analisi dei ritardi. Se un percorso inizia con un vincolo non necessario, il percorso potrebbe non spiegare cosa sta effettivamente guidando il lavoro.

Ciò può distorcere il margine, nascondere la logica del predecessore mancante e rendere il cronoprogramma più difficile da difendere. Può anche creare confusione il fatto che diversi revisori cerchino di capire perché un traguardo è fondamentale.

## Cause comuni di scarsi risultati

- Vincoli ereditati da vecchie baseline
- Vincoli utilizzati per forzare le date di destinazione
- Logica del predecessore o dell'interfaccia mancante
- Date di accesso esterno, permesso o proprietario non documentate
- Piani di risanamento che lasciano in vigore vincoli temporanei
- Confusione tra vincoli di inizio progetto e vincoli a valle

## Come migliorare il risultato

### 1. Confermare l'inizio del percorso

Esegui il report sul percorso critico o sul percorso del margine e identifica la prima attività su ciascun percorso. Controlla se l'attività ha un vincolo primario, una data di vincolo, una data prevista o un altro controllo della data.

Se l'attività vincolata corrisponde all'inizio del progetto approvato, documentarlo come un'eccezione valida.

### 2. Rivedere la base dei vincoli

Per gli inizi del percorso vincolato a valle, chiedere chi ha richiesto la data e perché. Motivi validi possono includere l'avviso di procedere, l'accesso del cliente, il rilascio dell'autorizzazione, il punto di attesa normativo o l'interfaccia contrattuale.

Se non esiste una chiara ragione esterna, il vincolo dovrebbe essere contestato.

### 3. Ripristina la sequenza guidata dalla logica

Se manca la logica precedente, aggiungere una logica valida che rifletta la dipendenza reale. Se il vincolo non è necessario, rimuoverlo e ricalcolare la pianificazione.

Dopo il ricalcolo, verificare se è stato modificato il percorso critico o il percorso del margine. Un cambiamento significativo potrebbe rivelare che il percorso precedente era guidato dalla data piuttosto che dalla logica.

## Scenario di esempio

Una pianificazione del progetto mostra il percorso critico che inizia con "Avvia installazione dell'apparecchiatura". L'attività ha un vincolo Inizia il o Dopo, ma non è l'inizio del progetto.

Durante la revisione, il pianificatore rileva che il vincolo è stato aggiunto durante un piano di ripristino per forzare la sequenza di installazione in una finestra di destinazione. Mancava la vera logica precedente alla consegna dei materiali e alla consegna dell'area.

Il pianificatore rimuove il vincolo, aggiunge la logica di consegna e passaggio mancante e ricalcola la pianificazione. Il percorso critico cambia, ma ora spiega i veri motori del lavoro.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: eseguire la metrica e identificare le attività di inizio percorso vincolate.
- Giorni 2-3: conferma delle eccezioni all'avvio del progetto e della base dei vincoli esterni.
- Giorni 4-5: rimuovi i vincoli non necessari e aggiungi la logica mancante.
- Giorno 6: rivedere il movimento del percorso e documentare le eccezioni approvate.
- Giorno 7: rivalutare la metrica e confrontare il risultato con la soglia.

## Errori da evitare

Evitare di presupporre che ogni inizio di percorso vincolato sia valido. L’inizio del progetto può essere valido, ma i vincoli a valle devono essere rivisti.

Evitare di rimuovere i vincoli senza comprenderne l'origine. Alcuni vincoli riflettono reali esigenze contrattuali o esterne.

Evitare di accettare un percorso critico senza verificare se è guidato dalla logica.

## Punti chiave

- Un percorso critico o margine dovrebbe solitamente iniziare dalla logica, non da un vincolo non necessario.
- L'inizio del progetto approvato costituisce un'eccezione valida.
- Gli inizi del percorso vincolato a valle possono indicare logica mancante o date forzate.
- L'obiettivo sono zero percorsi irrisolti.
- I vincoli esterni validi dovrebbero essere documentati.

## Conclusione

Questa metrica aiuta gli addetti alla pianificazione e i revisori a verificare se i percorsi chiave sono guidati dalla logica. I vincoli non sono sempre sbagliati, ma devono essere giustificati quando iniziano un percorso critico o mobile.

La gestione di questa metrica migliora la credibilità del percorso, l'affidabilità del margine e la fiducia nel reporting PMO e nell'analisi dei ritardi.

## Invito all'azione

Rivedi la prima attività su ogni percorso critico o percorso del margine nel tuo prossimo aggiornamento Primavera P6. Se il percorso inizia con un vincolo, verificare se si tratta dell'inizio del progetto approvato, di un requisito esterno valido o di un problema che necessita di correzione.
## Contenuti correlati
- [Percorso critico o percorso del margine che inizia con un vincolo - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
