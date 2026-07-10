---
title: "Fine prevista prima della data di aggiornamento in Primavera P6"
seoTitle: "Fine prevista prima della data di aggiornamento in Primavera P6"
description: "Spiega perché Fine prevista prima della data di aggiornamento in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Fine prevista prima della data di aggiornamento in Primavera P6"
  - "Primavera P6 Fine prevista prima della data di aggiornamento in Primavera P6"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/expected-finish-less-than-data-date-primavera-p6"
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
primarySearchIntent: "Spiega perché Fine prevista prima della data di aggiornamento in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/16_expected_finish_less_than_data_date/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/16_expected_finish_less_than_data_date/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

La Data Data è la linea tra ciò che è accaduto e ciò che è ancora previsto. In un aggiornamento della pianificazione pulito, le informazioni sullo stato prima della data di aggiornamento dovrebbero essere risolte come progresso effettivo, mentre il lavoro rimanente dovrebbe essere previsto dalla data di aggiornamento in avanti. Quando un'attività ha una Fine prevista prima della data di aggiornamento, quel confine diventa sfocato.

Questa metrica identifica le attività in cui la fine prevista è precedente alla data di aggiornamento corrente. Si tratta di un controllo semplice, ma può rivelare input di stato obsoleti, finiture effettive mancanti, previsioni sul campo obsolete o aggiornare flussi di lavoro che non mantengono correttamente le date previste.

In Primavera P6, la finitura prevista viene spesso utilizzata come campo di previsione o aggiornamento, a seconda del processo dell'organizzazione e delle impostazioni di pianificazione. Alcuni team lo utilizzano per acquisire le aspettative sul campo per le attività in corso. Altri lo importano da fogli di calcolo o sistemi di avanzamento. Poiché il campo può influenzare il comportamento della pianificazione in determinati flussi di lavoro, non dovrebbe essere consentito di rimanere nel passato senza revisione.

Prendi in considerazione un'attività chiamata "Installazione del portacavi principale". La data di aggiornamento del progetto è il 31 marzo, ma l'attività ha una fine prevista il 24 marzo. Se l'attività è veramente terminata il 24 marzo, la pianificazione dovrebbe normalmente avere uno stato di Fine effettiva e uno di Completato. Se l'attività non è stata completata, la Fine prevista è obsoleta e deve essere aggiornata in base alle informazioni più recenti sul campo. In ogni caso, il valore attuale richiede attenzione.

Questo problema si verifica spesso quando i team spostano in avanti la data di aggiornamento ma non aggiornano completamente tutti i campi di previsione. La percentuale di completamento potrebbe essere aggiornata. La Durata rimanente può essere modificata. È possibile inserire alcune date effettive. Ma i valori di finitura prevista dell'aggiornamento precedente rimangono invariati. Il risultato è una pianificazione che sembra parzialmente aggiornata ma contiene ancora le date di completamento previste nel passato.

La prima domanda è se la data di aggiornamento è corretta. Se la data di aggiornamento è stata impostata in modo errato, la metrica potrebbe contrassegnare il limite sbagliato. Una volta confermata la data di aggiornamento, ciascuna attività deve essere rivista rispetto al suo stato reale. L'attività è stata completata prima della data di aggiornamento? Manca la fine effettiva? L'attività è ancora attiva? La Durata Rimanente rappresenta ancora il lavoro rimasto?

Per il lavoro completato, la soluzione consiste solitamente nell'inserire o correggere la Fine effettiva, quindi verificare che Stato attività, Percentuale di completamento e Durata rimanente siano coerenti. Per il lavoro ancora attivo, la Fine prevista deve essere aggiornata a una data valida uguale o successiva alla data di aggiornamento. Anche la Durata rimanente dovrebbe essere rivista in modo che il calcolo del cronoprogramma rifletta la previsione attuale.

Per il lavoro non iniziato, una Fine prevista prima della data di aggiornamento indica in genere un valore vecchio o importato. Lo schedulatore dovrebbe confermare se l'attività appartiene ancora al piano, se le sue date di previsione devono essere ricalcolate e se la data prevista deve essere rimossa o sostituita secondo la procedura di aggiornamento del progetto.

Una revisione pratica in P6 dovrebbe includere ID attività, Nome attività, WBS, Stato attività, Fine prevista, Inizio effettivo, Fine effettiva, Durata rimanente, Percentuale di completamento, Inizio, Fine, Margine totale e Calendario. Il team dovrebbe dare priorità alle attività critiche e quasi critiche, al lavoro di passaggio di consegne, ai traguardi affrontati dal cliente e alle attività nel breve termine.

Questa metrica aiuta anche a rivelare problemi di processo. Se lo stesso problema si verifica a ogni aggiornamento, l'origine potrebbe essere un file di importazione, un modello di foglio di calcolo o un flusso di lavoro di reporting sul campo. Il team dovrebbe verificare se la finitura prevista viene caricata da un altro sistema e se esistono regole di convalida prima che la pianificazione venga calcolata ed emessa.

La soglia target dovrebbe essere pari a zero attività irrisolte. Ciò non significa che ogni attività segnalata costituisca un grosso problema. Significa che ogni attività dovrebbe essere corretta o spiegata. Una Fine prevista prima della data di aggiornamento non dovrebbe rimanere nella pianificazione semplicemente perché nessuno l'ha guardata.

La pulizia di questa metrica migliora la credibilità della pianificazione. Aiuta il team a mantenere un chiaro confine di aggiornamento, a distinguere le prestazioni effettive dal lavoro previsto ed evitare risultati look-ahead o fluttuanti fuorvianti. Nelle revisioni PMO, mostra anche che l'aggiornamento della pianificazione non è stato solo calcolato, ma effettivamente controllato per verificarne la coerenza dello stato.
## Contenuti correlati
- [Fine prevista prima della data di aggiornamento in Primavera P6 - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
