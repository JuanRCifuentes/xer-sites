---
title: "Calendari con orari di inizio e fine diversi in Primavera P6"
seoTitle: "Calendari con orari di inizio e fine diversi in Primavera P6"
description: "Spiega perché Calendari con orari di inizio e fine diversi in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Calendari con orari di inizio e fine diversi in Primavera P6"
  - "Primavera P6 Calendari con orari di inizio e fine diversi in Primavera P6"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/calendars-with-different-start-finish-time-in-day-primavera-p6"
language: "it"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Pianificazione in Primavera P6"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primarySearchIntent: "Spiega perché Calendari con orari di inizio e fine diversi in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/20_calendars_with_different_start_finish_time_in_day/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/20_calendars_with_different_start_finish_time_in_day/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

I calendari sono uno dei driver silenziosi del cronoprogramma Primavera P6. Definiscono quando può svolgersi il lavoro, come le durate si convertono in date e come le relazioni spostano le attività nel tempo. Poiché i calendari spesso si trovano dietro le quinte, piccole differenze negli orari di inizio e fine giornalieri possono creare un comportamento di pianificazione difficile da vedere nei layout normali.

Questa metrica identifica i calendari le cui ore di inizio o fine della giornata lavorativa differiscono dallo standard del progetto approvato. Il problema non è che ogni calendario debba essere identico. Molti progetti necessitano di calendari speciali per il lavoro notturno, il lavoro nei fine settimana, le finestre di chiusura, la disponibilità delle risorse o l'accesso limitato. Il problema è se tali differenze siano intenzionali, documentate e assegnate solo al posto a cui appartengono.

Ad esempio, il calendario di un progetto può essere eseguito dalle 7:00 alle 17:00 mentre un altro dalle 8:00 alle 18:00. Entrambi possono mostrare dieci ore lavorative al giorno. Ad alto livello sembrano simili. Ma in P6, l'ora del giorno può influenzare l'esatto posizionamento di inizio e fine, legami di parentela, valori margine e movimento apparente della data. Un turno di un'ora può sembrare insignificante, ma può cambiare il modo in cui le attività si allineano tra i calendari.

Ciò diventa più importante quando le attività su calendari diversi sono collegate tra loro. Un predecessore in una finestra di lavoro potrebbe terminare in tarda giornata mentre il calendario successivo non può iniziare fino al mattino successivo. Potrebbe sembrare che un'altra attività termini nella stessa data ma in un momento diverso. Se i revisori guardano solo le date e non gli orari, la pianificazione può sembrare incoerente o difficile da spiegare.

Le differenze di calendario possono anche influenzare il percorso critico e il margine totale. Se un'attività critica utilizza accidentalmente un calendario non standard, il percorso potrebbe spostarsi in modo diverso dal previsto. Può sembrare che il margine aumenti o diminuisca a causa dell'allineamento del calendario piuttosto che della reale flessibilità della pianificazione. Durante il PMO o la revisione del cliente, ciò rende più difficile spiegare il motivo per cui le date sono state spostate.

La revisione pratica inizia identificando lo standard di calendario approvato per il progetto. Qual è la normale giornata lavorativa? Quali sono gli orari standard di inizio e fine? Quali calendari possono differire? Quindi esporta o rivedi tutti i calendari e confronta i loro periodi lavorativi giornalieri. La revisione dovrebbe includere il nome del calendario, il tipo di calendario, l'ora di inizio, l'ora di fine, gli orari giornalieri, le eccezioni e le attività assegnate.

Il passo successivo è rivedere i compiti. Può essere valido un calendario apposito, ma va assegnato solo alle attività che lo necessitano. Un calendario dei turni notturni non dovrebbe estendersi al normale lavoro diurno. Un calendario di arresto non deve rimanere assegnato dopo che l'ambito dell'interruzione è stato copiato in un'altra area. Un calendario delle risorse non dovrebbe controllare accidentalmente le date delle attività a meno che ciò non faccia parte del metodo del progetto.

Se una differenza di calendario è accidentale, la soluzione è solitamente semplice: allineare l'ora di inizio, l'ora di fine e i periodi di lavoro allo standard del progetto. Quindi ricalcolare la pianificazione e rivedere le date interessate e i valori margine. Se la differenza è valida, documenta il motivo e conferma il proprietario. Motivi validi possono includere accesso limitato, finestre ambientali, limiti operativi del cliente, condizioni di autorizzazione o lavoro a turni pianificato.

Considera un cronoprogramma di messa in servizio in cui la maggior parte del lavoro utilizza un calendario dalle 7:00 alle 17:00, ma il team di test utilizza un calendario dei turni notturni dalle 22:00 alle 6:00. Questa differenza può essere valida perché i test possono essere eseguiti solo quando le operazioni sono offline. Lo schedulatore dovrebbe documentare le basi e confermare che solo le attività di test utilizzano quel calendario.

Consideriamo ora un'attività di costruzione copiata che eredita accidentalmente il calendario dei turni notturni. Le sue date potrebbero essere calcolate in modo strano rispetto al lavoro nelle vicinanze. Potrebbe sembrare che finisca in una data imprevista o crei differenze mobili che non corrispondono alle aspettative del campo. In tal caso, la questione non è l’esistenza del calendario dei turni notturni. Il problema è l'assegnazione sbagliata dell'attività.

La soglia target per questa metrica dovrebbe essere pari a zero calendari inspiegabili. Potrebbero rimanere alcuni calendari non standard, ma ognuno dovrebbe avere una ragione chiara. Se il pianificatore non è in grado di spiegare perché un calendario inizia o finisce in un momento diverso, dovrebbe essere rivisto.

La pulizia di questa metrica migliora la trasparenza della pianificazione. Aiuta i team a evitare effetti nascosti di giornata parziale, fluttuazione fuorviante e spostamento della data inspiegabile. Inoltre, semplifica il controllo della pianificazione perché i presupposti del calendario non sono più nascosti nel file. Per i team di controllo di progetto, si tratta di una piccola revisione con un grande profitto.
## Contenuti correlati
- [Calendari con orari di inizio e fine diversi in Primavera P6 - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
