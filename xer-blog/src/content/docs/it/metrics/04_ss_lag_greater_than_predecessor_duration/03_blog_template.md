---
title: "Relazioni SS con ritardo maggiore della durata del predecessore"
seoTitle: "Relazioni SS con ritardo maggiore della durata del predecessore - Primavera P6"
description: "Spiega perché Relazioni SS con ritardo maggiore della durata del predecessore influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Relazioni SS con ritardo maggiore della durata del predecessore"
  - "Primavera P6 Relazioni SS con ritardo maggiore della durata del predecessore"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/ss-lag-greater-than-predecessor-duration-primavera-p6"
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
primarySearchIntent: "Spiega perché Relazioni SS con ritardo maggiore della durata del predecessore influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titolo

Relazioni SS con ritardo maggiore della durata del predecessore

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che valutano la logica di pianificazione di Primavera P6.

## Gancio di apertura

Una relazione Start-to-Start dovrebbe normalmente descrivere il lavoro che può iniziare dopo l'inizio di un'altra attività. Ma quando il ritardo delle SS è più lungo della durata precedente, la logica inizia a raccontare una storia diversa.

## Introduzione

In Primavera P6, il lag viene spesso utilizzato per rappresentare un periodo di attesa tra due attività. Un piccolo ritardo SS può essere utile quando il lavoro inizia dopo un periodo di avanzamento definito. Ad esempio, le squadre di finitura possono iniziare due giorni dopo l'inizio dell'installazione.

Il problema si verifica quando il ritardo SS è maggiore della durata del predecessore. Se il predecessore dura cinque giorni e il ritardo SS è di dieci giorni, il successore non si avvia realmente perché è stato avviato il predecessore. Inizia con un ritardo che si estende oltre la fine del predecessore.

Questa metrica identifica le relazioni SS in cui il ritardo è maggiore della durata del predecessore. L’obiettivo sono zero relazioni irrisolte.

## Cosa significa questo parametro

Questo parametro controlla se una relazione SS viene utilizzata in un modo che abbia ancora senso logico. La logica SS collega l'inizio del predecessore all'inizio del successore. Quando il ritardo supera la durata del predecessore, l'inizio successivo viene spostato oltre la fine del predecessore.

Ciò non significa automaticamente che la relazione sia sbagliata, ma significa che la relazione necessita di una revisione. La dipendenza può essere rappresentata meglio come logica FS, logica FF o un'attività separata che mostra chiaramente il periodo di attesa.

Un risultato elevato suggerisce che la pianificazione potrebbe utilizzare un intervallo lungo per nascondere il lavoro, i periodi di attesa o le dipendenze basate sulla fine. Un risultato basso suggerisce che la logica SS e il ritardo vengono utilizzati con maggiore attenzione.

## Perché questo argomento è importante

Un lungo ritardo può rendere più difficile la comprensione di una pianificazione. Nasconde il tempo all'interno di una relazione invece di mostrare il lavoro o il periodo di attesa come parte della rete di attività.

Ciò può influire sul margine, sulla visibilità del percorso critico, sulla revisione del percorso più lungo e sul ritardo nella preparazione dell'analisi. Se un revisore non riesce a capire facilmente perché un successore inizia in un determinato momento, la pianificazione diventa più difficile da difendere.

## Cause comuni di scarsi risultati

- Relazioni SS copiate da orari precedenti
- Ritardi utilizzati come segnaposto durante la pianificazione iniziale
- Periodi di attesa nascosti all'interno del ritardo della relazione
- Logica FS o FF modellata in modo errato come SS più ritardo
- Differenze di calendario che rendono il ritardo più difficile da interpretare
- Periodi di approvvigionamento, cura, approvazione o accesso non modellati come attività

## Come migliorare il risultato

### 1. Esaminare l'intento della relazione

Filtra per le relazioni SS in cui il ritardo è maggiore della durata del predecessore. Esamina il predecessore, il successore, il ritardo, i calendari, la durata, lo stato e il margine totale.

Chiedi cosa intende rappresentare la relazione. Se il successore dipende dal completamento del predecessore, la relazione probabilmente non è una vera dipendenza SS.

### 2. Sostituire la logica SS debole

Utilizzare FS quando il successore non può essere avviato finché il predecessore non termina. Utilizzare FF quando entrambe le attività possono sovrapporsi ma quella successiva non può terminare finché non termina quella precedente.

Se il ritardo rappresenta un periodo di attesa reale, valutare se tale periodo di attesa debba essere modellato come un'attività separata. Ciò è spesso più chiaro per revisioni, aggiornamenti sui progressi e analisi dei ritardi.

### 3. Documentare le eccezioni valide

Alcuni lunghi ritardi delle SS potrebbero essere intenzionali. Se la relazione è valida, documentare il motivo e confermare il calendario di ritardo. La spiegazione dovrebbe essere sufficientemente chiara da consentire al revisore del PMO o al responsabile dei controlli di progetto di comprenderla senza tirare a indovinare.

## Scenario di esempio

Una pianificazione include una relazione SS da "Installazione cassaforma" a "Versamento calcestruzzo" con un intervallo di dieci giorni. L'attività di casseratura ha una durata di cinque giorni.

Ciò significa che il getto di calcestruzzo inizia dieci giorni dopo l'inizio della cassaforma, anche se la cassaforma viene completata dopo cinque giorni. La logica probabilmente non descrive una vera dipendenza dall'inizio alla fine. Potrebbe tentare di rappresentare il completamento della cassaforma più l'ispezione o il tempo di stagionatura.

Lo schedulatore rivede la sequenza e sostituisce la relazione con una logica più chiara: una relazione FS con un'attività di ispezione, seguita dal getto di calcestruzzo. La pianificazione ora mostra la dipendenza reale e il periodo di attesa è visibile.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e identifica le relazioni interessate.
- Giorni 2-3: esaminare prima le relazioni critiche e quasi critiche.
- Giorni 4-5: sostituire la logica debole delle SS, ridurre i ritardi ingiustificati o modellare periodi di attesa nascosti.
- Giorno 6: conferma delle eccezioni e revisione del movimento del cronoprogramma.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evitare di considerare tutti i ritardi come sbagliati. Il ritardo può essere utile quando rappresenta un offset reale e limitato.

Evitare di lasciare un lungo ritardo inspiegabile. Se il ritardo è più lungo della durata precedente, merita una ragione chiara.

Evitare di nascondere il lavoro all'interno del lag quando il lavoro dovrebbe essere visibile come attività.

## Punti chiave

- La logica SS dovrebbe rappresentare una dipendenza basata sull'avvio.
- Un ritardo maggiore rispetto alla durata del predecessore spesso segnala una logica debole o poco chiara.
- FS, FF o un'attività separata possono spiegare meglio la dipendenza.
- L’obiettivo sono zero relazioni irrisolte.
- Le eccezioni valide dovrebbero essere documentate.

## Conclusione

Questa metrica aiuta gli pianificatori a trovare le relazioni SS in cui il ritardo potrebbe nascondere la dipendenza reale. L'obiettivo non è rimuovere tutto il ritardo delle SS, ma assicurarsi che il ritardo sia ragionevole, visibile e difendibile.

La revisione di questa metrica migliora la chiarezza del CPM, l'affidabilità del margine e la fiducia nel percorso più lungo. Aiuta inoltre i revisori PMO a separare la logica di sovrapposizione utile dalle scorciatoie di pianificazione.

## Invito all'azione

Esamina le relazioni SS in cui il ritardo è maggiore della durata del predecessore nel prossimo aggiornamento della pianificazione Primavera P6. Per ognuno, chiedi se la relazione è veramente basata sull'avvio. In caso contrario, sostituitelo con una logica più chiara o modellate direttamente il periodo di attesa.
## Contenuti correlati
- [Relazioni SS con ritardo maggiore della durata del predecessore - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
