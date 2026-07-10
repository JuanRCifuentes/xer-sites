---
title: "Dipendenze mancanti in Primavera P6"
seoTitle: "Dipendenze mancanti in Primavera P6"
description: "Spiega perché Dipendenze mancanti in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Dipendenze mancanti in Primavera P6"
  - "Primavera P6 Dipendenze mancanti in Primavera P6"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/missing-dependencies-primavera-p6"
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
primarySearchIntent: "Spiega perché Dipendenze mancanti in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/21_missing_dependencies/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/21_missing_dependencies/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Le dipendenze sono la spina dorsale di una pianificazione CPM. Spiegano come il lavoro si sposta da un'attività a quella successiva, cosa deve accadere prima che il lavoro possa iniziare e cosa dipende dal completamento di ciascuna attività. Quando mancano le dipendenze, la pianificazione può comunque eseguire il calcolo, ma è più difficile fidarsi del risultato.

Questa metrica identifica le attività con logica di dipendenza mancante in Primavera P6. Copre attività senza predecessori, attività senza successori e attività isolate che non ne hanno nessuno. Questi sono spesso chiamati partenze aperte e finiture aperte. Alcuni potrebbero essere validi, ma la maggior parte dovrebbe essere rivista.

Un'attività senza predecessore può iniziare senza alcun requisito logico derivante dal lavoro precedente. Ciò può essere accettabile per una tappa fondamentale di avvio di un progetto approvato o per un avvio autorizzato esternamente. Per il normale lavoro di progetto, di solito è un segnale di avvertimento. Le attività di costruzione, ingegneria, approvvigionamento, test e consegna normalmente dipendono da qualcosa: accesso, rilascio del progetto, consegna dei materiali, installazione preventiva, ispezione, approvazione del permesso o un'altra condizione del progetto.

Un'attività senza successore può terminare senza passare il suo risultato a nessun'altra attività. Ciò potrebbe essere accettabile per una tappa fondamentale del completamento del progetto finale. Ma per la maggior parte delle attività, la domanda è semplice: cosa consente questo lavoro? Se nulla dipende da ciò, l'attività potrebbe non avere una logica di proseguimento, potrebbe essere obsoleta o potrebbe non essere adeguatamente integrata nella pianificazione.

Le attività isolate sono la preoccupazione più evidente. Se un'attività non ha né predecessore né successore, non fa realmente parte della rete CPM. Potrebbe trovarsi nel fascicolo, contenere date e apparire nei rapporti, ma non aiuta il cronoprogramma a spiegare la sequenza del lavoro.

Le dipendenze mancanti incidono più dei punteggi di qualità logica. Possono distorcere le date di inizio e di fine, i valori margine e il percorso critico. Un inizio aperto potrebbe spostarsi verso la data di aggiornamento o iniziare troppo presto perché nulla lo trattiene. Una finitura aperta può mostrare una galleggiabilità che non riflette l'impatto del lavoro sul resto del progetto. Durante il PMO o la revisione del cliente, queste lacune rendono più difficile spiegare perché le date sono credibili.

La revisione pratica inizia con un layout P6 che include ID attività, Nome attività, WBS, Tipo attività, Stato attività, Inizio, Fine, Margine totale, Calendario, vincoli, predecessori e successori. Filtra per attività senza predecessori, senza successori e nemmeno. Quindi separare le eccezioni valide dagli elementi che necessitano di correzione.

Le eccezioni valide dovrebbero essere limitate. L'inizio del progetto approvato potrebbe non necessitare di un predecessore. La pietra miliare del completamento finale potrebbe non aver bisogno di un successore. Alcune attività cardine dell'interfaccia esterna possono rappresentare lavoro controllato al di fuori della pianificazione. Queste eccezioni dovrebbero essere documentate in modo che i revisori non debbano tirare a indovinare.

Per gli inizi aperti, aggiungere la logica precedente che riflette la condizione reale richiesta prima che il lavoro possa iniziare. Potrebbe trattarsi di un'attività di costruzione precedente, dell'approvazione del progetto, della consegna dei materiali, del rilascio dell'accesso, dell'ispezione, del permesso o della consegna dell'interfaccia. La relazione dovrebbe descrivere la dipendenza effettiva, non semplicemente connettere l'attività per superare un controllo.

Per le finiture aperte, aggiungere la logica successore che rappresenta quanto segue. Il successore potrebbe essere un'altra attività lavorativa, test, messa in servizio, fatturato, chiusura, una pietra miliare o un pacchetto a valle. Il punto è mostrare come il risultato dell'attività influisce sul resto del piano.

Per le attività isolate, verificare innanzitutto se l'attività è ancora necessaria. Se è un ambito valido, collegarlo correttamente. Se è obsoleto, duplicato o lasciato indietro da un vecchio aggiornamento, rimuovilo o chiudilo secondo la procedura di controllo di progetto.

La soglia target dovrebbe essere pari a zero attività irrisolte. Ciò non significa che ogni predecessore o successore mancante sia automaticamente sbagliato. Significa che ogni eccezione deve essere intenzionale e documentata. Le dipendenze mancanti inspiegabili indeboliscono la rete di pianificazione.

La pulizia di questa metrica migliora immediatamente la pianificazione. Rende il percorso critico più affidabile, il margine più facile da interpretare e i piani lookahead più utili. Aiuta anche il team di progetto a vedere se la pianificazione è un modello reale del lavoro o solo un elenco di attività con date.
## Contenuti correlati
- [Dipendenze mancanti in Primavera P6 - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
