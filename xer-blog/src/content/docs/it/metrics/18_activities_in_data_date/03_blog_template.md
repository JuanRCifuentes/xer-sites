---
title: "Attività alla Data Data"
seo_title: "Attività alla Data Data"
meta_description: "Spiega perché Attività alla Data Data"
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Attività alla Data Data"
  - "Primavera P6 Attività alla Data Data"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it-blog-article-activities-on-the-data-date-primavera-p6"
language: "it"
content_type: "blog"
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Spiega perché Attività alla Data Data: Verifiche Inizio Anticipato e Fine Anticipata in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
related_metrics:
  - "11_metrics_it/18_activities_in_data_date/01_overview_template.md"
  - "11_metrics_it/18_activities_in_data_date/02_guide_template.md"
related_blogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/18_activities_in_data_date/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Attività alla Data Data

Il data di aggiornamento è una delle date più importanti nel cronoprogramma del Primavera P6. Segna il confine tra la performance effettiva e le previsioni future. Il lavoro prima della data di aggiornamento dovrebbe essere indicato. Dovrebbe essere previsto il lavoro successivo alla data di aggiornamento. Quando molte attività hanno un inizio anticipato o una fine anticipata esattamente nella data di aggiornamento, il cronoprogramma merita uno sguardo più attento.

Questa metrica controlla le attività in cui Inizio anticipato è uguale alla data di aggiornamento o Fine anticipata è uguale alla data di aggiornamento. Lo scopo non è quello di dire che ogni attività sulla Data Data sia sbagliata. Alcuni lavori potrebbero legittimamente iniziare o terminare al limite dell'aggiornamento. Lo scopo è identificare i cluster al confine e confermare se ciascuna attività ha una ragione valida per essere lì.

L'avvio anticipato alla data di aggiornamento può essere ragionevole quando il lavoro a breve termine è pronto per iniziare dopo il completamento dei predecessori. Può anche essere un segnale di avvertimento. Le attività potrebbero trovarsi nella data di aggiornamento perché mancano la logica del predecessore, la logica non guida, i vincoli, le date previste o gli aggiornamenti di stato incompleti. Se alla Data di aggiornamento sono presenti molte attività non avviate, la pianificazione potrebbe implicare che il lavoro è pronto per iniziare anche quando le condizioni richieste non sono state modellate.

La chiusura anticipata della data di aggiornamento può anche raccontare due storie diverse. Potrebbe mostrare un lavoro di cui si prevede correttamente il completamento al limite dell'aggiornamento. Ma potrebbe anche indicare che i progressi non sono stati completamente aggiornati. Se il lavoro è effettivamente terminato prima o alla data di aggiornamento, l'attività potrebbe richiedere una Fine effettiva. Se il lavoro non è stato completato, potrebbe essere necessario aggiornare la Durata rimanente e la fine prevista.

La revisione pratica inizia con un semplice layout P6. Includere ID attività, Nome attività, WBS, Stato attività, Inizio anticipato, Fine anticipata, Inizio, Fine, Inizio effettivo, Fine effettiva, Durata rimanente, Margine totale, Calendario, vincoli, predecessori e successori. Quindi filtrare per Inizio anticipato uguale alla data di aggiornamento e Fine anticipata uguale alla data di aggiornamento.

La prima questione è lo status. L'attività è completa, in corso o non è iniziata? Se le date effettive o la durata rimanente sono errate, correggere lo stato prima di modificare la logica. Una pianificazione con dati di stato scadenti non può produrre date di previsione affidabili.

La seconda domanda è la logica. L'attività viene indirizzata alla data di aggiornamento da relazioni predecessore e successore valide? Se non ha un predecessore, una logica debole o relazioni non determinanti, la data di aggiornamento potrebbe mascherare un inizio o una fine aperti. La soluzione dovrebbe consistere nell'aggiungere o correggere la logica di pianificazione reale, non nello spostare manualmente l'attività.

La terza domanda è se i vincoli, le date previste o i calendari influenzano il risultato. Un vincolo di inizio, un vincolo di fine, una data prevista obsoleta o un calendario insolito possono portare un'attività al limite dell'aggiornamento. Alcuni di questi possono essere validi, ma dovrebbero essere intenzionali e documentati.

Considera un progetto con una data di aggiornamento pari al 30 aprile. Un gruppo di attività elettriche mostra tutti Early Start il 30 aprile. Se i lavori di costruzione precedenti sono stati completati e l'area è stata liberata, ciò potrebbe essere valido. Ma se molte di queste attività non hanno precedenti o sono controllate da vincoli, il cronoprogramma non mostra un vero piano basato sulla logica.

Consideriamo ora un'attività con Fine anticipata il 30 aprile e stato In corso. Se il lavoro è stato completato entro il termine dell'aggiornamento, il pianificatore dovrebbe inserire la Fine effettiva e contrassegnare l'attività come completata. Se mancano ancora diversi giorni al lavoro, la Durata rimanente deve essere aggiornata in modo che la fine della previsione si sposti oltre la data di aggiornamento.

La soglia target per questa metrica dovrebbe essere pari a zero attività inspiegabili. Quella formulazione è importante. L'obiettivo non è eliminare ogni attività alla data di aggiornamento. L'obiettivo è assicurarsi che ciascuno sia spiegato dallo stato corrente, dalla logica valida o da un'eccezione approvata.

Questa metrica è particolarmente utile durante le revisioni degli aggiornamenti. Una volta che la Data di aggiornamento avanza, le attività possono essere raccolte al confine se la pianificazione non è completamente definita o se la logica è debole. Un gruppo di attività alla Data Data è spesso un sintomo di pressione di aggiornamento, logica copiata, partenze aperte, vincoli o feedback sul campo incompleto.

Ripulire questa metrica migliora la credibilità delle previsioni a breve termine. Aiuta i team di progetto a distinguere il lavoro veramente pronto dal lavoro che è semplicemente passato alla data di aggiornamento corrente. Per i report PMO e client, mostra anche che la data di aggiornamento è stata trattata come un limite di stato reale, non solo come una data utilizzata per ricalcolare il file.
## Contenuti correlati
- [Attività alla Data Data: Verifiche Inizio Anticipato e Fine Anticipata in Primavera P6 - Panoramica](01_overview_template.md)
- [Attività alla Data Data: Verifiche Inizio Anticipato e Fine Anticipata in Primavera P6 - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
