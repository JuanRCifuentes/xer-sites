---
title: "Relazioni FF con ritardo maggiore della durata del successore"
seoTitle: "Relazioni FF con ritardo maggiore della durata del successore - Primavera P6"
description: "Spiega perché Relazioni FF con ritardo maggiore della durata del successore influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Relazioni FF con ritardo maggiore della durata del successore"
  - "Primavera P6 Relazioni FF con ritardo maggiore della durata del successore"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/ff-lag-greater-than-successor-duration-primavera-p6"
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
primarySearchIntent: "Spiega perché Relazioni FF con ritardo maggiore della durata del successore influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/05_ff_lag_greater_than_successor_duration/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/05_ff_lag_greater_than_successor_duration/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titolo

Relazioni FF con ritardo maggiore della durata del successore

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che valutano la logica di pianificazione di Primavera P6.

## Gancio di apertura

Una relazione Fine-Fine normalmente dovrebbe descrivere due attività le cui date di fine devono essere collegate. Ma quando il ritardo FF è più lungo della durata successiva, la relazione potrebbe nascondere più di quanto spieghi.

## Introduzione

In Primavera P6, la logica FF viene spesso utilizzata quando due attività possono sovrapporsi ma quella successiva non può terminare finché non termina quella precedente. Un piccolo ritardo FF può essere utile quando è necessario un breve offset di chiusura, revisione o passaggio di consegne.

Il problema si verifica quando il ritardo FF è maggiore della durata successiva. Se il successore dura cinque giorni e il ritardo FF è di dieci giorni, l'offset finale è più lungo dell'attività controllata. Ciò potrebbe significare che la pianificazione nasconde un periodo di attesa, un'attività mancante o un diverso tipo di dipendenza.

Questa metrica identifica le relazioni FF in cui il ritardo è maggiore della durata del successore. L’obiettivo sono zero relazioni irrisolte.

## Cosa significa questo parametro

Questo parametro controlla se una relazione FF viene utilizzata in un modo che abbia ancora senso logico. La logica FF collega la finitura del predecessore alla finitura del successore. Quando il ritardo supera la durata del successore, la relazione può spingere la fine del successore in un modo difficile da comprendere solo dal solo elenco delle attività.

Ciò non significa automaticamente che la relazione sia sbagliata, ma significa che la relazione necessita di una revisione. La dipendenza può essere rappresentata meglio come logica FS, logica SS o un'attività separata che mostra chiaramente il periodo di attesa.

Un risultato elevato suggerisce che la pianificazione potrebbe utilizzare un intervallo lungo per nascondere lavoro, periodi di attesa o sequenze poco chiare. Un risultato basso suggerisce che la logica FF e il ritardo vengono utilizzati con maggiore attenzione.

## Perché questo argomento è importante

Un lungo ritardo può rendere più difficile la comprensione di una pianificazione. Nasconde il tempo all'interno di una relazione invece di mostrare il lavoro o il periodo di attesa come parte della rete di attività.

Ciò può influire sul margine, sulla visibilità del percorso critico, sulla revisione del percorso più lungo e sul ritardo nella preparazione dell'analisi. Se un revisore non riesce a capire facilmente perché un successore termina in un determinato momento, la pianificazione diventa più difficile da difendere.

## Cause comuni di scarsi risultati

- Relazioni FF copiate da pianificazioni precedenti
- Ritardi utilizzati come segnaposto durante la pianificazione iniziale
- Periodi di attesa nascosti all'interno del ritardo della relazione
- Logica FS o SS modellata in modo errato come FF più ritardo
- Differenze di calendario che rendono il ritardo più difficile da interpretare
- Periodi di revisione, approvazione, messa in servizio o passaggio di consegne non modellati come attività

## Come migliorare il risultato

### 1. Esaminare l'intento della relazione

Filtra per le relazioni FF in cui il ritardo è maggiore della durata del successore. Esamina il predecessore, il successore, il ritardo, i calendari, la durata, lo stato e il margine totale.

Chiedi cosa intende rappresentare la relazione. Se il successore dipende dal completamento del predecessore prima di poter iniziare, la relazione potrebbe essere più chiara come logica FS. Se il successore può iniziare dopo l’inizio del lavoro a monte, la logica SS potrebbe essere più appropriata.

### 2. Sostituire la logica FF debole

Utilizzare FS quando il successore non può essere avviato finché il predecessore non termina. Utilizzare SS quando il successore può iniziare dopo l'avvio del predecessore o dopo aver raggiunto un punto di avanzamento definito.

Se il ritardo rappresenta un periodo di attesa reale, valutare se tale periodo di attesa debba essere modellato come un'attività separata. Ciò è spesso più chiaro per revisioni, aggiornamenti sui progressi e analisi dei ritardi.

### 3. Documentare le eccezioni valide

Alcuni ritardi FF lunghi potrebbero essere intenzionali. Se la relazione è valida, documentare il motivo e confermare il calendario di ritardo. La spiegazione dovrebbe essere sufficientemente chiara da consentire al revisore del PMO o al responsabile dei controlli di progetto di comprenderla senza tirare a indovinare.

## Scenario di esempio

Una pianificazione include una relazione FF da "Installazione completa" a "Pacchetto di chiusura approvato" con un ritardo di quindici giorni. L'attività del pacchetto di chiusura ha una durata di cinque giorni.

Ciò significa che la fine del pacchetto di chiusura viene ritardata di un tempo maggiore rispetto alla durata successiva stessa. La logica potrebbe tentare di rappresentare il tempo di revisione o approvazione che non è visibile come attività.

Il pianificatore rivede la sequenza e sostituisce il lungo intervallo con un'attività separata di "Revisione del pacchetto di chiusura da parte del cliente". Il cronoprogramma ora mostra il periodo di attesa reale, rendendo la logica più semplice da aggiornare e difendere.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e identifica le relazioni interessate.
- Giorni 2-3: esaminare prima le relazioni critiche e quasi critiche.
- Giorni 4-5: sostituire la logica FF debole, ridurre il ritardo ingiustificato o modellare periodi di attesa nascosti.
- Giorno 6: conferma delle eccezioni e revisione del movimento del cronoprogramma.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evitare di considerare tutti i ritardi come sbagliati. Il ritardo può essere utile quando rappresenta un offset reale e limitato.

Evitare di lasciare un lungo ritardo inspiegabile. Se il ritardo è maggiore della durata successiva, merita una ragione chiara.

Evitare di nascondere il lavoro all'interno del lag quando il lavoro dovrebbe essere visibile come attività.

## Punti chiave

- La logica FF dovrebbe rappresentare una dipendenza basata sulla finitura.
- Un ritardo maggiore della durata del successore spesso segnala una logica debole o poco chiara.
- FS, SS o un'attività separata possono spiegare meglio la dipendenza.
- L’obiettivo sono zero relazioni irrisolte.
- Le eccezioni valide dovrebbero essere documentate.

## Conclusione

Questa metrica aiuta gli pianificatore a trovare le relazioni FF in cui il ritardo potrebbe nascondere la dipendenza reale. L'obiettivo non è rimuovere tutto il ritardo FF, ma assicurarsi che il ritardo sia ragionevole, visibile e difendibile.

La revisione di questa metrica migliora la chiarezza del CPM, l'affidabilità del margine e la fiducia nel percorso più lungo. Aiuta inoltre i revisori del PMO a separare la logica di finitura utile dalle scorciatoie di pianificazione.

## Invito all'azione

Esamina le relazioni FF in cui il ritardo è maggiore della durata successiva nel prossimo aggiornamento della pianificazione Primavera P6. Per ognuno, chiedi se la relazione è veramente basata sul risultato. In caso contrario, sostituitelo con una logica più chiara o modellate direttamente il periodo di attesa.
## Contenuti correlati
- [Relazioni FF con ritardo maggiore della durata del successore - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
