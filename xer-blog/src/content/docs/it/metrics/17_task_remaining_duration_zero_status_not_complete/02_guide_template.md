---
title: "La durata rimanente dell'attività è zero mentre lo stato non è completo - Guida al miglioramento"
seo_title: "La durata rimanente dell'attività è zero mentre lo stato non è completo - Guida al miglioramento - Primavera P6"
meta_description: "Scopri come correggere La durata rimanente dell'attività è zero mentre lo stato non è completo in Primavera P6 con controlli di logica, validazione e rivalutazione."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "La durata rimanente dell'attività è zero mentre lo stato non è completo"
  - "Primavera P6 La durata rimanente dell'attività è zero mentre lo stato non è completo"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it-improvement-guide-task-remaining-duration-zero-status-not-complete-primavera-p6"
language: "it"
content_type: "metric"
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Scopri come correggere La durata rimanente dell'attività è zero mentre lo stato non è completo in Primavera P6 con controlli di logica, validazione e rivalutazione."
related_metrics:
  - "11_metrics_it/17_task_remaining_duration_zero_status_not_complete/01_overview_template.md"
  - "11_metrics_it/17_task_remaining_duration_zero_status_not_complete/03_blog_template.md"
related_blogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/17_task_remaining_duration_zero_status_not_complete/02_guide_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# La durata rimanente dell'attività è zero mentre lo stato non è completo - Guida al miglioramento

## Scopo

Questa guida aiuta gli addetti alla pianificazione a rivedere e correggere le attività delle attività in cui la Durata rimanente è uguale a 0 ma lo stato dell'attività non è Completo. Supporta aggiornamenti puliti di Primavera P6 allineando il lavoro rimanente, la fine effettiva e lo stato dell'attività.

## Prima di iniziare

Raccogli le seguenti informazioni prima di agire:

- Risultato della valutazione attuale per questa metrica.
- Elenco delle attività dell'attività con Durata rimanente = 0 e stato non completato.
- ID attività, Nome attività, WBS, Tipo attività, Stato attività, Inizio effettivo, Fine effettiva, Durata originale, Durata rimanente e Durata al completamento.
- Tipo di completamento percentuale e campi chiave di avanzamento.
- Data di aggiornamento e note dell'ultimo aggiornamento.
- Conferma sul campo se l'attività è stata completata o se c'è ancora del lavoro rimanente.

## Comprendi il tuo risultato

Un risultato efficace è rappresentato da zero attività con Durata rimanente = 0 e stato non Completo.

Questa metrica è limitata alle attività delle attività, quindi la revisione si concentra sulle normali attività lavorative, non sulle tappe fondamentali o sui record LOE. Un'attività con durata rimanente pari a zero normalmente dovrebbe avere lo stato Completato e una Fine effettiva.

Un risultato debole significa che la pianificazione contiene attività il cui tempo rimanente e stato di completamento non concordano.

## Obiettivo di miglioramento

L'obiettivo è 0 attività di attività non risolte con Durata rimanente = 0 e stato non Completo.

L'obiettivo è verificare se ciascuna attività è completa e deve essere chiusa oppure incompleta e deve essere ripristinata una Durata rimanente valida.

## Piano d'azione

### Passaggio 1: identificare il problema principale

Creare un layout o un report P6 che filtri per le attività dell'attività in cui la Durata rimanente è uguale a 0 e lo Stato attività non è Completo. Includere ID attività, Nome attività, WBS, Tipo attività, Stato attività, Inizio effettivo, Fine effettiva, Durata originale, Durata rimanente, Tipo di completamento percentuale, Percentuale di completamento attività, Inizio, Fine e Margine totale.

Rivedi ogni attività e chiedi:

- L'attività è effettivamente completata?
- Se completo, perché lo stato non è Completo?
- Manca la fine effettiva?
- Se il lavoro non è completo, perché la Durata rimanente è 0?
- Lo stato è stato importato o aggiornato manualmente?
- Il metodo percentuale di completamento corrisponde all'aggiornamento effettuato?

```mermaid
flowchart TD
    A["Attività RD = 0 e stato non completato"] --> B{"L'attività è effettivamente completata?"}
    B -- "SÌ" --> C["Immettere la Fine effettiva e contrassegnare l'attività come Completata"]
    B -- "NO" --> D["Ripristina la durata rimanente valida"]
    D --> E["Imposta lo stato in base ai progressi effettivi"]
    B -- "Non chiaro" --> F["Conferma lo stato con il proprietario responsabile"]
    C --> G["Ricalcolare e rivalutare"]
    E --> G
    F --> G
```

### Passaggio 2: applicare le correzioni consigliate

Se l'attività è completa, aggiorna l'attività come Completata. Immettere la Fine effettiva, confermare che la Durata rimanente è 0 e verificare che i valori di avanzamento siano allineati con la procedura di aggiornamento del progetto.

Se l'attività non è completata, ripristinare la Durata rimanente appropriata. Conferma il lavoro rimanente con il proprietario responsabile e mantieni lo stato dell'attività come In corso o Non iniziato in base allo stato di avanzamento effettivo.

Se il problema deriva dai dati di avanzamento importati, esamina la mappatura dell'importazione e aggiorna il flusso di lavoro. Il processo di aggiornamento non deve lasciare le attività dell'attività con zero tempo rimanente ma stato incompleto.

### Passaggio 3: rimuovere i blocchi comuni

I blocchi comuni includono date di fine effettiva mancanti, conferma di campi incompleta, dati di aggiornamento importati e confusione tra lo stato della durata e lo stato dell'attività.

Un altro ostacolo è la riduzione della Durata rimanente a 0 per mostrare i progressi senza completare formalmente l'attività. La Durata rimanente e lo Stato dell'attività dovrebbero raccontare la stessa storia riguardo alla permanenza del lavoro.

### Passaggio 4: convalidare le modifiche

Ricalcolare il cronoprogramma dopo le correzioni. Eseguire nuovamente la metrica e confermare che ogni elemento rimanente sia corretto o assegnato per il follow-up.

Esaminare gli elenchi di attività completate, le date di fine effettive, i report sullo stato di avanzamento, gli output del valore maturato e i report lookahead per confermare che la correzione non ha creato nuove incoerenze.

## Cronoprogramma di miglioramento

### Giorno 1: revisione e diagnosi

Esegui la metrica, conferma la data di aggiornamento e separa i risultati in attività complete mancanti Stato completo, attività incomplete con durata rimanente pari a zero e problemi di importazione o flusso di lavoro.

### Giorni 2-3: implementare le azioni prioritarie

Correggere innanzitutto le attività utilizzate nel reporting. Inserisci la fine effettiva, contrassegna le attività come completate o ripristina la durata rimanente secondo necessità.

### Giorni 4-5: monitorare i primi risultati

Ricalcola la pianificazione ed esamina i report sulle attività completate, i report sullo stato di avanzamento, gli output sul valore maturato e i report lookahead.

### Giorno 6: aggiustamenti finali

Risolvere gli elementi incerti rimanenti con la disciplina responsabile, il responsabile sul campo o il responsabile dei controlli di progetto.

### Giorno 7: rivalutare e confrontare

Eseguire nuovamente la valutazione e confrontare il risultato con la soglia target.

## Monitoraggio dei progressi

Utilizza un semplice tracker per gestire correzioni e approvazioni.

| Data | Azione intrapresa | Impatto previsto | Risultato / Osservazione | Passaggio successivo |
| --- | --- | --- | --- | --- |
| [Data] | Attività rivista RD 0 e stato non completato | Identificare l'incoerenza dello stato dell'attività | [Risultato osservato] | Assegna proprietario |
| [Data] | Immesso la Fine effettiva e contrassegnato come Completato | Allinea lo stato completato | [Risultato osservato] | Ricalcolare il cronoprogramma |
| [Data] | Durata rimanente ripristinata | Correggere lo stato delle attività non completate | [Risultato osservato] | Rivalutare la metrica |

## Se i risultati non migliorano

Se i risultati non migliorano, controlla se gli aggiornamenti sull'avanzamento vengono importati, copiati o modificati manualmente in modo incoerente. Verificare se nel flusso di lavoro di aggiornamento mancano le date di fine effettiva o se gli utenti stanno impostando la durata rimanente su 0 senza completare le attività.

Inoltrare le questioni irrisolte quando incidono su attività critiche, quasi critiche, sul valore maturato, sulla reportistica dei clienti, sui pagamenti o sul lavoro correlato alla consegna.

## Manutenzione

Esaminare questa metrica durante ogni ciclo di aggiornamento prima di emettere report. Dovrebbe far parte della convalida standard dello stato dell'attività insieme alle date effettive, alla durata rimanente, alla percentuale di completamento e ai controlli dello stato dell'attività.

## Lista di controllo riepilogativa

- [ ] Risultato attuale rivisto
- [ ] Soglia target confermata
- [ ] Data di aggiornamento confermata
- [ ] Filtro solo attività confermato
- [ ] Problema principale identificato
- [ ] Attività completate contrassegnate correttamente
- [ ] Date di fine effettive inserite dove necessario
- [ ] Durata rimanente ripristinata laddove il lavoro è incompleto
- [ ] Flusso di lavoro di importazione o aggiornamento selezionato
- [ ] Cronoprogramma ricalcolato
- [ ] Valutazione ripetuta
- [ ] Passaggi successivi documentati
## Contenuti correlati
- [La durata rimanente dell'attività è zero mentre lo stato non è completo - Panoramica](01_overview_template.md)
- [La durata rimanente dell'attività è zero mentre lo stato non è completo](03_blog_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
