---
title: "Logica ridondante negli orari Primavera P6"
seoTitle: "Logica ridondante negli orari Primavera P6"
description: "Spiega perché Logica ridondante negli orari Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Logica ridondante negli orari Primavera P6"
  - "Primavera P6 Logica ridondante negli orari Primavera P6"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/redundant-logic-primavera-p6"
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
primarySearchIntent: "Spiega perché Logica ridondante negli orari Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/06_redundant_logic/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/06_redundant_logic/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titolo

Logica ridondante negli orari Primavera P6

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che valutano la logica di pianificazione di Primavera P6.

## Gancio di apertura

Più logica non sempre significa migliore logica. Una pianificazione può sembrare ben connessa pur portando con sé relazioni duplicate, percorsi predecessori ripetuti e dipendenze che non aggiungono un controllo reale.

## Introduzione

La logica è la spina dorsale di una pianificazione CPM. Mostra come il lavoro scorre da un'attività a quella successiva e consente a Primavera P6 di calcolare le date, il margine e il percorso critico o più lungo.

La logica ridondante appare quando una relazione ripete una dipendenza che è già rappresentata da qualche altra parte nella rete. Può trattarsi di un duplicato esatto, di una seconda relazione tra le stesse due attività, oppure di un collegamento diretto che ripete un percorso a monte.

Questa metrica identifica modelli logici ridondanti che dovrebbero essere rivisti e rimossi a meno che non siano chiaramente giustificati. L’obiettivo sono zero relazioni irrisolte.

## Cosa significa questo parametro

Questo parametro controlla se la pianificazione contiene relazioni che non aggiungono sequenze significative. Esempi comuni includono lo stesso predecessore collegato allo stesso successore più di una volta, come FS più SS o FS più FF.

La metrica cerca anche la logica del predecessore ereditata. Ad esempio, se l'attività A guida l'attività B e l'attività B guida l'attività C, una relazione diretta dall'attività A all'attività C potrebbe non essere necessaria a meno che non rappresenti una dipendenza reale separata.

SS più FF tra le stesse due attività possono essere accettabili quando la sovrapposizione è intenzionale. La relazione SS può controllare quando inizia il successore, mentre la relazione FF controlla quando può finire. La chiave è se entrambe le relazioni rappresentano condizioni reali.

## Perché questo argomento è importante

La logica ridondante rende una pianificazione più difficile da comprendere. Aggiunge rumore alla rete e può rendere difficile vedere quale relazione controlla effettivamente le date.

Può anche distorcere il galleggiamento, creare falsi percorsi di guida e rendere più difficile l'analisi dei ritardi. Durante il PMO o le revisioni della qualità del cronoprogramma, la logica ridondante solleva dubbi sul fatto che la rete sia stata costruita intenzionalmente o assemblata tramite collegamenti copiati e accumulati.

## Cause comuni di scarsi risultati

- Sezioni della pianificazione copiate che non sono state ripulite
- Più tipi di relazione aggiunti tra le stesse due attività
- FS più SS o FS più FF utilizzati per forzare le date
- Collegamenti diretti aggiunti anche se la dipendenza esiste già tramite una catena
- Relazioni aggiunte durante gli aggiornamenti senza verificare la logica esistente
- Dipendenze non necessarie utilizzate per far apparire la pianificazione più connessa

## Come migliorare il risultato

### 1. Trova modelli di relazione duplicati

Inizia identificando le attività collegate da più di una relazione. Prestare molta attenzione alle combinazioni FS più SS e FS più FF. In molti casi, una relazione svolge il lavoro vero e l’altra è ridondante.

Rivedi le combinazioni SS più FF con maggiore attenzione. Possono essere validi quando sono necessari sia i controlli di inizio che quelli di fine per la sovrapposizione del lavoro.

### 2. Controllare la logica del predecessore ereditata

Cerca attività che abbiano lo stesso predecessore e tipo di relazione del proprio predecessore. Se la stessa dipendenza esiste già nel percorso, la relazione diretta potrebbe non essere necessaria.

Questa revisione può anche essere estesa diversi passi indietro attraverso la rete. La domanda è semplice: questo rapporto diretto aggiunge una dipendenza reale, oppure ripete un percorso già esistente?

### 3. Rimuovere le dipendenze non necessarie

Rimuovere le relazioni che non rappresentano l'accesso, l'approvazione, la consegna, la sequenza di costruzione, la sequenza di approvvigionamento, il controllo del rischio o la logica contrattuale.

Dopo aver rimosso una relazione, ricalcola la pianificazione e rivedi il margine, la logica determinante, il percorso più lungo e le date delle tappe fondamentali. Se una data cambia inaspettatamente, verifica se la relazione rimossa era effettivamente valida o se è necessaria una relazione più chiara.

## Scenario di esempio

Una pianificazione ha l'Attività A collegata all'Attività B con una relazione FS e anche una relazione SS. Il pianificatore ha aggiunto il collegamento SS durante un aggiornamento per forzare l'avvio anticipato di B, ma il collegamento FS controlla comunque l'effettivo passaggio di consegne.

La revisione mostra che la relazione SS non rappresenta una reale condizione di partenza. Aggiunge solo confusione. Il pianificatore rimuove il collegamento SS e mantiene la relazione FS.

In un'altra area, l'attività A guida l'attività B e l'attività B guida l'attività C. Anche l'attività A è direttamente collegata all'attività C con lo stesso tipo di relazione. Il team conferma che non esiste alcuna condizione di consegna o di accesso separata. Il collegamento diretto da A a C viene rimosso e la rete rimane logicamente corretta.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e raggruppa i risultati per coppie duplicate, logica ereditata e dipendenze non necessarie.
- Giorni 2-3: esaminare prima le relazioni critiche e quasi critiche.
- Giorni 4-5: rimuovere la logica duplicata e ricalcolare la pianificazione.
- Giorno 6: conferma delle eccezioni e revisione del movimento del cronoprogramma.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evitare di rimuovere le relazioni solo perché sembrano duplicate. Confermare prima la sequenza di lavoro reale.

Evita di mantenere collegamenti duplicati perché sembrano innocui. La logica ridondante può comunque distorcere l'analisi del margine e del percorso di guida.

Evitare di considerare SS più FF come automaticamente sbagliati. Può essere valido quando sono necessari sia i controlli di partenza che quelli di arrivo.

## Punti chiave

- La logica ridondante ripete una dipendenza già rappresentata altrove.
- FS più SS o FS più FF tra le stesse attività solitamente necessitano di revisione.
- SS più FF possono essere validi quando sono reali sia i controlli di inizio sovrapposizione che quelli di arrivo.
- La logica predecessore ereditata può creare collegamenti diretti non necessari.
- L'obiettivo sono zero relazioni ridondanti non risolte.

## Conclusione

La logica ridondante non migliora la qualità del cronoprogramma. Rende la rete più difficile da leggere, più difficile da aggiornare e più difficile da difendere.

La revisione di questa metrica aiuta gli pianificatori a mantenere la rete CPM pulita e intenzionale. La migliore logica di pianificazione non è la rete più complicata; è la rete più chiara che rappresenta accuratamente l'opera.

## Invito all'azione

Esamina la logica ridondante nel prossimo aggiornamento della pianificazione di Primavera P6. Per ogni relazione segnalata, chiedere se aggiunge una dipendenza reale o ripete solo la logica già presente nella rete. Rimuovere ciò che non è necessario e documentare ciò che viene intenzionalmente conservato.
## Contenuti correlati
- [Logica ridondante negli orari Primavera P6 - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
