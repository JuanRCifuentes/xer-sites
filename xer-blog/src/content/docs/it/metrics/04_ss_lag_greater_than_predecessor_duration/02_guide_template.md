---
title: "Relazioni SS con ritardo maggiore della durata del predecessore - Guida al miglioramento"
seoTitle: "Relazioni SS con ritardo maggiore della durata del predecessore - Guida al miglioramento - Primavera P6"
description: "Scopri come correggere Relazioni SS con ritardo maggiore della durata del predecessore in Primavera P6 con controlli di logica, validazione e rivalutazione."
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
slug: "it/metrics/ss-lag-greater-than-predecessor-duration-primavera-p6-improvement-guide"
language: "it"
contentType: "metric"
metricPageType: "improvement-guide"
draft: false
sidebar:
  label: "Improvement Guide"
  order: 1
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primarySearchIntent: "Scopri come correggere Relazioni SS con ritardo maggiore della durata del predecessore in Primavera P6 con controlli di logica, validazione e rivalutazione."
relatedMetrics:
  - "11_metrics_it/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Scopo

Questa guida aiuta gli addetti alla pianificazione a rivedere e correggere le relazioni Start-to-Start in cui il ritardo è maggiore della durata dell'attività precedente. Supporta una logica CPM più chiara sostituendo l'eccessivo ritardo SS con una logica relazionale che rappresenta meglio la sequenza di lavoro reale.

## Prima di iniziare

Raccogli le seguenti informazioni prima di agire:

- Risultato della valutazione attuale per questa metrica.
- Elenco di relazioni SS in cui il ritardo è maggiore della durata del predecessore.
- ID attività predecessore e successore, nomi, WBS, durate, calendari e stato.
- Intervallo di relazione, tipo di relazione ed eventuali vincoli correlati.
- Impostazioni di calcolo della pianificazione e base di calendario utilizzata per il ritardo.
- Logica di campo, ingegneria, approvvigionamento o trasferimento che spiega la dipendenza prevista.

## Comprendi il tuo risultato

Un risultato efficace è rappresentato da zero relazioni SS irrisolte in cui il ritardo supera la durata del predecessore.

Un risultato accettabile può includere eccezioni documentate, ma queste dovrebbero essere rare. Un lungo ritardo SS spesso indica che il tipo di relazione non corrisponde alla dipendenza modellata.

Un risultato debole significa che la pianificazione contiene più collegamenti inizio-inizio in cui il successore inizia solo dopo un ritardo maggiore rispetto alla durata del predecessore. Ciò potrebbe nascondere la logica orientata al traguardo dietro una relazione SS.

## Obiettivo di miglioramento

L'obiettivo è 0 relazioni SS non risolte con un ritardo maggiore della durata del predecessore.

L'obiettivo è confermare se ciascuna relazione debba rimanere SS, essere convertita in logica FS o FF, ridurre il ritardo o essere documentata come eccezione valida.

## Piano d'azione

### Passaggio 1: identificare il problema principale

Crea un layout o un'esportazione P6 che elenchi le relazioni SS in cui il ritardo è maggiore della durata del predecessore. Includi ID attività precedente e successiva, Nome attività, WBS, Durata originale, Durata rimanente, Tipo di relazione, Ritardo, Calendario, Margine totale e Stato attività.

Esamina ogni relazione e chiedi:

- Perché il successore inizia dopo un ritardo così lungo?
- Il successore dipende effettivamente dall'inizio del predecessore o dalla fine del predecessore?
- Il ritardo è maggiore della durata originale del predecessore, della durata rimanente o di entrambe?
- Il ritardo viene utilizzato per modellare l'approvvigionamento, la stagionatura, il tempo di revisione, l'accesso o un altro periodo di attesa reale?
- Una relazione FS o FF renderebbe più chiara la dipendenza?

```mermaid
flowchart TD
    A["Relazione SS con ritardo maggiore della durata del predecessore"] --> B{"La dipendenza è veramente basata sull'avvio?"}
    B -- "NO" --> C["Sostituire con logica FS o FF valida"]
    B -- "SÌ" --> D{"Il ritardo è giustificato e misurabile?"}
    D -- "NO" --> E["Ridurre o rimuovere il ritardo"]
    D -- "SÌ" --> F["Eccezione approvata dal documento"]
    C --> G["Ricalcolare e rivalutare"]
    E --> G
    F --> G
```

### Passaggio 2: applicare le correzioni consigliate

Se il successore deve iniziare al termine del predecessore, sostituire la relazione SS con una relazione FS. Se il lavoro può sovrapporsi ma il successore non può terminare finché non termina il predecessore, utilizzare la logica FF.

Se la relazione è realmente basata sull'avvio, rivedere il valore del ritardo. Riduci il ritardo eccessivo laddove è stato utilizzato come segnaposto approssimativo o ereditato dalla logica copiata. Se il ritardo rappresenta un periodo di attesa reale, verificare che l'unità, il calendario e la spiegazione siano corretti.

Evitare di utilizzare un ritardo lungo come sostituto delle attività che dovrebbero essere visibili nel cronoprogramma. Se il ritardo rappresenta il tempo di revisione, cura, consegna, mobilitazione o approvazione, considera la modellazione di quel lavoro come un'attività separata.

### Passaggio 3: rimuovere i blocchi comuni

Gli ostacoli più comuni includono la logica copiata da pianificazioni precedenti, periodi di attesa nascosti, confusione nel calendario e pressione per mantenere la rete semplice. Risolvili confermando la dipendenza prevista con il proprietario responsabile.

Un altro ostacolo è considerare il ritardo come innocuo. Un ritardo lungo può essere difficile da esaminare, può nascondere rischi e rendere più difficile l'analisi del ritardo perché il periodo di attesa non è visibile come attività.

### Passaggio 4: convalidare le modifiche

Ricalcolare il cronoprogramma dopo le correzioni. Esegui nuovamente la metrica e conferma che ogni elemento rimanente è corretto o documentato come eccezione approvata.

Esamina il margine totale, il percorso più lungo, il percorso critico e le tappe fondamentali a breve termine. Se le modifiche alla relazione spostano le date chiave, comunicare il risultato al responsabile dei controlli di progetto o al revisore PMO.

## Cronoprogramma di miglioramento

### Giorno 1: revisione e diagnosi

Esegui la metrica, conferma l'elenco delle relazioni interessate e separa gli elementi in tipo di relazione errata, ritardo eccessivo, attività nascosta, problema del calendario e possibile eccezione.

### Giorni 2-3: implementare le azioni prioritarie

Correggere innanzitutto le relazioni critiche e quasi critiche. Converti la logica SS in FS o FF ove appropriato, riduci i ritardi ingiustificati e documenta le eccezioni valide.

### Giorni 4-5: monitorare i primi risultati

Ricalcola la pianificazione e rivedi il movimento in termini di margine, percorso più lungo e date cardine.

### Giorno 6: aggiustamenti finali

Risolvi gli elementi incerti rimanenti con la disciplina responsabile, il proprietario del pacchetto o il responsabile della costruzione.

### Giorno 7: rivalutare e confrontare

Eseguire nuovamente la valutazione e confrontare il risultato con la soglia target.

## Monitoraggio dei progressi

Utilizza un semplice tracker per gestire correzioni e approvazioni.

| Data | Azione intrapresa | Impatto previsto | Risultato / Osservazione | Passaggio successivo |
| --- | --- | --- | --- | --- |
| [Data] | Ritardo SS esaminato maggiore della durata del predecessore | Identificare la logica debole o poco chiara | [Risultato osservato] | Assegnare correzioni |
| [Data] | Relazione convertita in FS o FF | Migliora la chiarezza della logica CPM | [Risultato osservato] | Ricalcolare il cronoprogramma |
| [Data] | Ritardo ridotto o documentato | Migliora la tracciabilità delle recensioni | [Risultato osservato] | Rivalutare la metrica |

## Se i risultati non migliorano

Se i risultati non migliorano, verificare se gli stessi modelli di relazione si ripetono in una specifica area, disciplina o sezione del cronoprogramma WBS copiata. Risultati ripetuti potrebbero indicare che il team sta utilizzando il ritardo SS come scorciatoia standard invece di modellare dipendenze reali.

Inoltrare le questioni irrisolte quando influiscono su lavori critici, quasi critici, contrattuali, relativi agli appalti, all'approvazione o al passaggio di consegne.

## Manutenzione

Esaminare questa metrica durante ogni aggiornamento della pianificazione e prima dell'approvazione della previsione. Prestare particolare attenzione dopo lo sviluppo della pianificazione, la risequenziazione, la pianificazione del ripristino o le modifiche importanti dell'ambito copiate.

## Lista di controllo riepilogativa

- [ ] Risultato attuale rivisto
- [ ] Soglia target confermata
- [ ] Problema principale identificato
- [ ] Revisione delle relazioni con le SS
- [ ] Ritardo eccessivo corretto o giustificato
- [ ] Sostituzioni FS o FF applicate dove necessario
- [ ] Lavoro nascosto modellato ove appropriato
- [ ] Cronoprogramma ricalcolato
- [ ] Risultati monitorati
- [ ] Valutazione ripetuta
- [ ] Passaggi successivi documentati
## Contenuti correlati
- [Modello di blog](03_blog_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
