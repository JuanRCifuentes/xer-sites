---
title: "Attività fuori sequenza in Primavera P6"
seo_title: "Attività fuori sequenza in Primavera P6"
meta_description: "Spiega perché Attività fuori sequenza in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Attività fuori sequenza in Primavera P6"
  - "Primavera P6 Attività fuori sequenza in Primavera P6"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it-blog-article-activities-out-of-sequence-primavera-p6"
language: "it"
content_type: "blog"
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Spiega perché Attività fuori sequenza in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
related_metrics:
  - "11_metrics_it/08_activities_out_of_sequence/01_overview_template.md"
  - "11_metrics_it/08_activities_out_of_sequence/02_guide_template.md"
related_blogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/08_activities_out_of_sequence/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Attività fuori sequenza in Primavera P6

## Titolo

Attività fuori sequenza in Primavera P6

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che valutano gli aggiornamenti della pianificazione di Primavera P6.

## Gancio di apertura

A volte il lavoro inizia prima che il cronoprogramma lo preveda. Ciò potrebbe riflettere progressi reali sul campo, ma può anche esporre un problema nell’aggiornamento, nella logica o nel modo in cui viene riportato il piano attuale.

## Introduzione

Le attività fuori sequenza sono attività che sono iniziate o progredite prima che la logica precedente sia stata soddisfatta. In Primavera P6, questo è un problema comune durante gli aggiornamenti della pianificazione perché l'effettiva esecuzione sul campo non sempre segue esattamente la rete pianificata.

I progressi fuori sequenza non sono automaticamente negativi. I progetti risequenziano il lavoro per accesso, risorse, condizioni meteorologiche, permessi, versioni di progettazione e molti altri motivi. Il problema è se il cronoprogramma è stato aggiornato per riflettere chiaramente tale risequenziamento.

Questa metrica identifica le attività con avanzamento in conflitto con la sequenza logica pianificata. L’obiettivo è zero attività irrisolte.

## Cosa significa questo parametro

Questo parametro controlla se l'avanzamento effettivo è coerente con la logica della relazione nella pianificazione. Ad esempio, se l'Attività B ha un predecessore Fine-Inizio dell'Attività A, ma l'Attività B è già iniziata mentre l'Attività A non è completa, L'Attività B potrebbe essere fuori sequenza.

Il risultato potrebbe indicare un semplice errore di stato, ad esempio la mancanza della fine effettiva sul predecessore. Potrebbe anche indicare una logica obsoleta o un evento di risequenziamento del campo reale.

In Primavera P6, l'impatto dipende in parte dalle impostazioni di calcolo della pianificazione, come la logica mantenuta e l'override dell'avanzamento. Queste impostazioni influiscono sul modo in cui viene calcolato il lavoro rimanente dopo che si verifica un avanzamento fuori sequenza.

## Perché questo argomento è importante

Le attività fuori sequenza possono ridurre la fiducia nelle previsioni. Potrebbero distorcere il galleggiamento, modificare il percorso più lungo e rendere il cronoprogramma più difficile da spiegare.

Sono importanti anche per la governance. I revisori del PMO e i team di controllo di progetto devono sapere se la pianificazione rappresenta il piano attuale effettivo o se contiene ancora la logica di una sequenza precedente.

## Cause comuni di scarsi risultati

- Il lavoro è iniziato prima del completamento del predecessore
- Date effettive mancanti o errate
- Lo stato del predecessore non è stato aggiornato correttamente
- Risequenziamento dei campi non riflesso nella logica
- Relazioni obsolete dopo la pianificazione del recupero
- Confusione sulla logica mantenuta e sulle impostazioni di override del progresso
- Progresso accettato senza revisione della logica di pianificazione

## Come migliorare il risultato

### 1. Controlla prima lo stato

Prima di modificare la logica, verificare le date e lo stato effettivi sia dell'attività contrassegnata che di quelle precedenti. Molti problemi fuori sequenza sono causati dalla mancata conclusione effettiva, dall'avvio effettivo errato o dalla durata rimanente non aggiornata correttamente.

Se i dati dell'attività sono errati, correggere l'aggiornamento e ricalcolare prima di apportare modifiche alla logica.

### 2. Rivedere la logica rispetto al piano attuale

Se il progresso è reale, chiedi se la relazione esistente riflette ancora la sequenza di esecuzione pianificata. Se il lavoro sul campo è cambiato, potrebbe essere necessario cambiare anche la logica.

Non rimuovere le relazioni solo per cancellare la metrica. Sostituire la logica obsoleta con relazioni valide che spieghino il piano attuale approvato.

### 3. Confermare l'approccio di calcolo P6

Verifica se il progetto utilizza la logica mantenuta o l'override dell'avanzamento. La logica mantenuta preserva il controllo del predecessore sul lavoro rimanente. L'override dell'avanzamento può consentire di continuare il lavoro nonostante la logica precedente incompleta.

L'impostazione corretta dipende dalla procedura di controllo di progetto, ma il team deve comprendere quale impostazione viene utilizzata prima di interpretare il risultato.

## Scenario di esempio

Un cronoprogramma mostra "Installazione passerella portacavi" con un predecessore di "Supporti in acciaio completi". Durante l'aggiornamento, l'attività della passerella portacavi riceve un avvio effettivo anche se i supporti in acciaio non sono contrassegnati come completati.

Il pianificatore controlla il rapporto sul campo e rileva che i supporti sono stati completati nell'area A ma non nell'area B. Le attività originali erano troppo ampie per la sequenza effettiva.

Il cronoprogramma è rivisto per zona. Il lavoro di supporto completato nell'Area A ora guida l'installazione delle passerelle portacavi nell'Area A, mentre l'Area B rimane correttamente sequenziata. Il problema di fuori sequenza viene risolto e la previsione diventa più accurata.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e conferma la data di aggiornamento.
- Giorni 2-3: correggere gli errori di stato e le date effettive.
- Giorni 4-5: rivedere il risequenziamento reale e rivedere la logica obsoleta.
- Giorno 6: conferma delle eccezioni e revisione del movimento del cronoprogramma.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evitare di modificare la logica prima di verificare se l'aggiornamento dello stato è corretto.

Evitare di ignorare i progressi fuori sequenza perché il lavoro è stato svolto sul campo. Il cronoprogramma deve ancora rappresentare il piano attuale.

Evitare di modificare la logica mantenuta o le impostazioni di override dell'avanzamento senza comprendere la procedura di controllo di progetto.

## Punti chiave

- Le attività fuori sequenza mostrano progressi che sono in conflitto con la logica precedente.
- La causa potrebbe essere un errore di stato, un errore logico o un risequenziamento reale.
- Le impostazioni di calcolo P6 influiscono sul modo in cui il problema appare nella previsione.
- L’obiettivo è zero attività irrisolte.
- La risequenziazione approvata dovrebbe riflettersi nella logica della pianificazione.

## Conclusione

Il progresso fuori sequenza è un segnale che il cronoprogramma necessita di revisione. A volte la soluzione è una semplice correzione dello stato. Altre volte è necessario aggiornare la logica per adattarla al modo in cui il progetto viene ora eseguito.

La gestione di questa metrica migliora la qualità degli aggiornamenti, l'affidabilità delle previsioni e la fiducia nel percorso critico o più lungo.

## Invito all'azione

Rivedi le attività fuori sequenza durante il prossimo aggiornamento Primavera P6. Per ciascun elemento, decidi se il problema riguarda lo stato, la logica o il risequenziamento reale, quindi correggi la pianificazione prima di emettere report.
## Contenuti correlati
- [Attività fuori sequenza in Primavera P6 - Panoramica](01_overview_template.md)
- [Attività fuori sequenza in Primavera P6 - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
