---
title: "Attività con durata rimanente 0 e stato non completato"
seo_title: "Attività con durata rimanente 0 e stato non completato - Primavera P6"
meta_description: "Spiega perché Attività con durata rimanente 0 e stato non completato influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Attività con durata rimanente 0 e stato non completato"
  - "Primavera P6 Attività con durata rimanente 0 e stato non completato"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it-blog-article-remaining-duration-zero-status-not-completed-primavera-p6"
language: "it"
content_type: "blog"
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Spiega perché Attività con durata rimanente 0 e stato non completato influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
related_metrics:
  - "11_metrics_it/11_remaining_duration_zero_status_not_completed/01_overview_template.md"
  - "11_metrics_it/11_remaining_duration_zero_status_not_completed/02_guide_template.md"
related_blogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/11_remaining_duration_zero_status_not_completed/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Attività con durata rimanente 0 e stato non completato

## Titolo

Attività con durata rimanente 0 e stato non completato

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che convalidano gli aggiornamenti sullo stato di avanzamento di Primavera P6.

## Gancio di apertura

Quando un'attività non ha durata rimanente, il cronoprogramma indica che non c'è tempo rimasto per terminarla. Se la stessa attività non è contrassegnata come Completata, l'aggiornamento richiede attenzione.

## Introduzione

Gli aggiornamenti del cronoprogramma Primavera P6 si basano su dati di stato coerenti. La Durata rimanente mostra quanto tempo è ancora necessario per completare un'attività. Lo stato dell'attività mostra se l'attività è Non avviata, In corso o Completata.

Quando la Durata rimanente è uguale a 0 ma lo stato non è Completato, questi campi non concordano. L'attività potrebbe essere terminata ma non è stata completata la Fine effettiva oppure potrebbe avere ancora del lavoro rimanente ma è stata erroneamente aggiornata su una durata rimanente pari a zero.

Questa metrica identifica le attività con Durata rimanente = 0 e Stato attività <> Completato. L’obiettivo è zero attività irrisolte.

## Cosa significa questo parametro

Questo parametro controlla se il tempo rimanente di un'attività corrisponde al suo stato di completamento. Se non è presente alcuna durata rimanente, l'attività dovrebbe normalmente essere completata e avere una data di fine effettiva.

Se l'attività è ancora in corso, normalmente dovrebbe avere una durata rimanente a meno che il lavoro non venga chiuso nello stesso aggiornamento. Se non è avviato, la durata rimanente pari a 0 è in genere un problema di stato chiaro.

Un risultato elevato suggerisce che il processo di aggiornamento potrebbe presentare finiture effettive mancanti, durate rimanenti errate, problemi di stato importati o aggiornamenti manuali incoerenti.

## Perché questo argomento è importante

La coerenza dello stato influisce sui report di pianificazione, sulla pianificazione preventiva, sul valore maturato, sulle curve di progresso e sulle decisioni di gestione.

Se le attività non hanno una durata rimanente ma non vengono completate, la pianificazione potrebbe sottostimare il lavoro rimanente o non riuscire a chiudere correttamente il lavoro completato. In ogni caso, l'aggiornamento diventa meno affidabile.

Ciò è particolarmente importante prima di inviare report ai clienti, ai team PMO o alla leadership del progetto.

## Cause comuni di scarsi risultati

- Fine effettiva mancante nelle attività completate
- Durata rimanente impostata per errore su 0
- Lo stato dell'attività non è stato modificato in Completato
- Progressi importati da un altro sistema senza convalida
- Flusso di lavoro di aggiornamento manuale non completato
- Traguardi o tipi di attività speciali non esaminati attentamente
- Processo di interruzione dell'aggiornamento non seguito

## Come migliorare il risultato

### 1. Conferma lo stato dell'attività reale

Inizia confermando se il lavoro è effettivamente completato. Utilizza rapporti sul campo, aggiornamenti disciplinari, registri di ispezione o conferma del proprietario del pacchetto.

Se il lavoro è completo, l'attività dovrebbe essere chiusa correttamente. Se il lavoro non è completo, la Durata rimanente dovrebbe essere ripristinata.

### 2. Correggere le attività completate

Per il lavoro completato, inserire la data di fine effettiva e contrassegnare l'attività come Completata. Confermare che i valori di avanzamento e la durata rimanente siano in linea con la procedura di aggiornamento del progetto.

Ciò mantiene coerenti gli elenchi delle attività completate, i rapporti sui progressi e i risultati ottenuti.

### 3. Correggere le attività incomplete

Per il lavoro incompleto, ripristinare una Durata rimanente realistica. Mantieni l'attività come In corso o Non avviata a seconda dello stato effettivo.

Dopo le correzioni, ricalcolare la pianificazione ed eseguire nuovamente la metrica per confermare che l'incoerenza è stata risolta.

## Scenario di esempio

Un aggiornamento della pianificazione mostra "Cablaggio centrale completo" con Durata rimanente = 0, ma lo stato dell'attività è ancora in corso. L'attività ha un inizio effettivo ma nessuna fine effettiva.

Il pianificatore verifica con il cavo elettrico e conferma il lavoro terminato due giorni prima della Data Data. L'aggiornamento era incompleto perché la durata rimanente è stata ridotta a zero, ma non è stata inserita la Fine effettiva.

Il pianificatore inserisce la Fine effettiva e contrassegna l'attività come Completata. L'attività ora corrisponde allo stato del campo e i rapporti sullo stato di avanzamento sono più chiari.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e identifica le attività interessate.
- Giorni 2-3: confermare lo stato di completamento con i proprietari responsabili.
- Giorni 4-5: correzione della fine effettiva, dello stato dell'attività o della durata rimanente.
- Giorno 6: esaminare i report e i risultati ottenuti.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evitare di assumere Durata rimanente = 0 significa sempre che l'attività è completa. Conferma prima lo stato del campo.

Evitare di contrassegnare le attività come completate senza una data di fine effettiva precisa.

Evitare di ripristinare la Durata Rimanente senza verificare se l'attività è stata effettivamente terminata.

## Punti chiave

- Durata rimanente = 0 e stato <> Completato è un'incoerenza di stato.
- L’obiettivo è zero attività irrisolte.
- Il lavoro completato deve avere lo stato Fine effettiva e Completato.
- Il lavoro incompleto dovrebbe mantenere una Durata rimanente realistica.
- Le importazioni di aggiornamenti e i flussi di lavoro manuali devono essere convalidati.

## Conclusione

Questa metrica aiuta a individuare un problema comune relativo alla qualità degli aggiornamenti. Mantiene allineati il ​​lavoro rimanente, le date effettive e lo stato delle attività in modo che la pianificazione racconti una storia coerente.

La gestione di questa metrica migliora la precisione dei report, la sicurezza dei progressi e l'affidabilità degli aggiornamenti della pianificazione Primavera P6.

## Invito all'azione

Rivedi le attività con Durata rimanente = 0 e stato Non completato durante il prossimo aggiornamento della pianificazione. Confermare lo stato reale di ciascuna attività, quindi correggere la Fine effettiva, lo Stato dell'attività o la Durata rimanente prima di emettere report.
## Contenuti correlati
- [Attività con durata rimanente 0 e stato non completato - Panoramica](01_overview_template.md)
- [Attività con durata rimanente 0 e stato non completato - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
