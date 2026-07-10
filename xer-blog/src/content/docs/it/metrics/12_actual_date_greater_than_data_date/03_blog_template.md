---
title: "Date effettive successive alla data di aggiornamento in Primavera P6"
seo_title: "Date effettive successive alla data di aggiornamento in Primavera P6"
meta_description: "Spiega perché Date effettive successive alla data di aggiornamento in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Date effettive successive alla data di aggiornamento in Primavera P6"
  - "Primavera P6 Date effettive successive alla data di aggiornamento in Primavera P6"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it-blog-article-actual-date-greater-than-data-date-primavera-p6"
language: "it"
content_type: "blog"
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Spiega perché Date effettive successive alla data di aggiornamento in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
related_metrics:
  - "11_metrics_it/12_actual_date_greater_than_data_date/01_overview_template.md"
  - "11_metrics_it/12_actual_date_greater_than_data_date/02_guide_template.md"
related_blogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/12_actual_date_greater_than_data_date/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Date effettive successive alla data di aggiornamento in Primavera P6

## Titolo

Date effettive successive alla data di aggiornamento in Primavera P6

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che convalidano gli aggiornamenti della pianificazione Primavera P6.

## Gancio di apertura

La data di aggiornamento è la linea tra la storia effettiva e la previsione. Se una data effettiva cade dopo quella linea, la pianificazione mescola il futuro con il passato.

## Introduzione

In Primavera P6, la Data Data definisce il limite dell'aggiornamento. Il lavoro effettivo dovrebbe essere registrato entro tale data. Il lavoro di previsione dovrebbe rimanere dopo.

Quando un Inizio effettivo, una Fine effettiva o un'altra data effettiva è successiva alla data di aggiornamento, la pianificazione contiene un errore di data-stato. L'attività può mostrare il lavoro come già iniziato o completato anche se tale data non rientra nel periodo di riferimento corrente.

Questa metrica identifica le attività con date effettive superiori alla data di aggiornamento. L’obiettivo è zero attività irrisolte.

## Cosa significa questo parametro

Questo parametro controlla se le date effettive sono coerenti con il ciclo di aggiornamento corrente. Le date effettive dovrebbero rappresentare le prestazioni reali già raggiunte alla data di aggiornamento.

Se una data effettiva è successiva alla data di aggiornamento, in genere una delle due cose è sbagliata. La data effettiva è stata inserita in modo errato oppure la data di aggiornamento non corrisponde al periodo di reporting approvato.

Un risultato elevato suggerisce un controllo debole dell'interruzione degli aggiornamenti, problemi di importazione o confusione tra le date effettive e quelle previste.

## Perché questo argomento è importante

Le date effettive future possono danneggiare la credibilità del cronoprogramma. Possono distorcere la rendicontazione dei progressi, il valore maturato, il margine e le previsioni sui traguardi.

Inoltre rendono più difficile la revisione del cronoprogramma. I revisori e i clienti del PMO si aspettano che la data di aggiornamento separi chiaramente ciò che è accaduto da ciò che è previsto che accada.

Se tale limite non viene rispettato, diventa difficile fidarsi dell’aggiornamento.

## Cause comuni di scarsi risultati

- Date effettive immesse oltre la data limite per l'aggiornamento
- data di aggiornamento progetto errata
- Avanzamento importato da file che coprono date future
- Confusione tra date effettive e date previste
- Aggiornamenti manuali dello stato immessi senza controllare la data di aggiornamento
- Schede attività o sistemi sul campo non allineati al periodo di aggiornamento della pianificazione

## Come migliorare il risultato

### 1. Confermare la data di aggiornamento

Inizia confermando la data di aggiornamento approvata per l'aggiornamento. Se la data di aggiornamento è errata, correggila prima di modificare lo stato dell'attività.

La data di aggiornamento deve corrispondere al periodo di riferimento e alla procedura di controllo di progetto.

### 2. Esaminare le date effettive future

Filtra per le date effettive maggiori della data di aggiornamento. Esaminare insieme l'inizio effettivo, la fine effettiva, lo stato dell'attività, la durata rimanente e la percentuale di completamento.

Se la data effettiva futura è sbagliata, correggila o rimuovila. Se il lavoro non è stato effettivamente svolto entro la data di aggiornamento, non deve essere registrato come effettivo.

### 3. Correggere il flusso di lavoro di aggiornamento

Se il problema deriva da un'importazione, esamina il file di origine e la mappatura. Se proviene da aggiornamenti manuali, rafforzare la procedura di interruzione degli aggiornamenti.

L'obiettivo è impedire che i valori effettivi futuri vengano inseriti nella pianificazione prima della rendicontazione.

## Scenario di esempio

Un aggiornamento della pianificazione mensile ha una data di aggiornamento pari al 31 maggio. Durante la revisione, il pianificatore trova una Fine effettiva del 3 giugno per un'attività di installazione.

La relazione sul campo includeva il lavoro completato dopo la scadenza del rapporto. Il pianificatore rimuove la futura Fine effettiva, ripristina lo stato corretto al 31 maggio e mantiene il lavoro rimanente nella previsione.

Il cronoprogramma ora separa i progressi effettivi di maggio dal lavoro pianificato di giugno, rendendo più facile fidarsi dell'aggiornamento.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e conferma la data di aggiornamento.
- Giorni 2-3: correggere le date effettive future e lo stato dell'attività.
- Giorni 4-5: esamina i file di importazione e aggiorna il flusso di lavoro.
- Giorno 6: controlla i report, i risultati ottenuti e le date cardine.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evitare di spostare la data di aggiornamento solo per nascondere i dati effettivi futuri. La Data di aggiornamento dovrebbe seguire il periodo di riferimento approvato.

Evitare di eliminare le date effettive senza confermare lo stato reale del campo.

Evita di ignorare le fonti di importazione. Se i valori effettivi futuri provenissero da un'importazione, il problema potrebbe ripetersi nel ciclo successivo.

## Punti chiave

- Le date effettive dovrebbero essere uguali o precedenti alla data di aggiornamento.
- L’obiettivo è zero attività irrisolte.
- I valori effettivi futuri potrebbero indicare uno stato errato, una data di aggiornamento errata o problemi di importazione.
- Stato attività corretto, durata rimanente e percentuale di completamento dopo aver fissato le date.
- Il controllo dell'interruzione degli aggiornamenti previene il ripetersi di problemi.

## Conclusione

Le date effettive successive alla data di aggiornamento rappresentano un chiaro problema di aggiornamento della pianificazione. Rendono confuso il confine tra storia e previsioni.

La gestione di questa metrica migliora la disciplina degli aggiornamenti, la rendicontazione dei progressi, l'affidabilità del valore maturato e la fiducia nell'invio della pianificazione Primavera P6.

## Invito all'azione

Rivedi tutte le date effettive dopo la Data Data prima di pubblicare il prossimo aggiornamento della pianificazione. Correggere il problema relativo alla data, allo stato o all'origine della data di aggiornamento in modo che la pianificazione separi chiaramente le prestazioni effettive dal lavoro previsto.
## Contenuti correlati
- [Date effettive successive alla data di aggiornamento in Primavera P6 - Panoramica](01_overview_template.md)
- [Date effettive successive alla data di aggiornamento in Primavera P6 - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
