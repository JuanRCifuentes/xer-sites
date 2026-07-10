---
title: "Attività con durata rimanente 0 e avanzamento non al 100%"
seoTitle: "Attività con durata rimanente 0 e avanzamento non al 100% - Primavera P6"
description: "Spiega perché Attività con durata rimanente 0 e avanzamento non al 100% influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Attività con durata rimanente 0 e avanzamento non al 100%"
  - "Primavera P6 Attività con durata rimanente 0 e avanzamento non al 100%"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/remaining-duration-zero-progress-not-100-primavera-p6"
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
primarySearchIntent: "Spiega perché Attività con durata rimanente 0 e avanzamento non al 100% influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/10_remaining_duration_zero_progress_not_100/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/10_remaining_duration_zero_progress_not_100/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titolo

Attività con durata rimanente 0 e avanzamento non al 100%

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che convalidano gli aggiornamenti sullo stato di avanzamento di Primavera P6.

## Gancio di apertura

Se un'attività non ha durata rimanente, normalmente dovrebbe essere terminata. Quando la stessa attività mostra un progresso inferiore al 100%, la pianificazione invia segnali contrastanti.

## Introduzione

Gli aggiornamenti della pianificazione di Primavera P6 dipendono dalle informazioni sullo stato di pulizia. La Durata rimanente indica al cronoprogramma quanto tempo è ancora necessario per completare un'attività. La percentuale di avanzamento indica al team quanto lavoro è stato realizzato, in base al metodo della percentuale di completamento selezionato.

Quando la Durata rimanente è uguale a 0 ma il progresso non è al 100%, questi due segnali non coincidono. L'attività potrebbe essere completa ma manca una Fine effettiva oppure potrebbe avere ancora del lavoro rimanente ma è stata erroneamente aggiornata a zero.

Questa metrica identifica le attività con Durata rimanente = 0 e avanzamento <> 100%. L’obiettivo è zero attività irrisolte.

## Cosa significa questo parametro

Questo parametro verifica la coerenza tra il tempo rimanente e l'avanzamento riportato. Se un'attività non ha una durata rimanente, normalmente significa che non ha più lavoro da eseguire. In tal caso, l'avanzamento dovrebbe generalmente essere del 100% e l'attività dovrebbe avere lo stato di completamento corretto.

Il risultato può dipendere dal tipo di completamento percentuale dell'attività. Percentuale di completamento fisico, Percentuale di completamento durata e Percentuale di completamento unità possono comportarsi diversamente. Questo è il motivo per cui la revisione dovrebbe considerare sia la durata rimanente che il metodo di completamento percentuale.

Un risultato elevato suggerisce che il processo di aggiornamento potrebbe avere date di fine effettive incomplete, durate rimanenti errate o voci di avanzamento incoerenti.

## Perché questo argomento è importante

La coerenza dello stato è importante perché i dati sull'avanzamento alimentano report di pianificazione, valore maturato, pianificazione anticipata e decisioni di gestione.

Se un'attività sembra non avere una durata rimanente ma non è completa, la previsione potrebbe sottostimare il lavoro rimanente. Se un'attività è effettivamente completata ma il progresso rimane inferiore al 100%, i report potrebbero sottostimare il lavoro completato.

Entrambi i casi riducono la fiducia nell'aggiornamento della pianificazione.

## Cause comuni di scarsi risultati

- Fine effettiva mancante nelle attività completate
- Durata rimanente impostata per errore su 0
- Percentuale fisica completata non aggiornata
- Tipo di completamento percentuale frainteso
- Progressi importati da un altro sistema senza convalida
- Le attività contrassegnate come completate non sono coerenti
- Processo di interruzione dell'aggiornamento non seguito

## Come migliorare il risultato

### 1. Conferma se il lavoro è completo

Inizia controllando lo stato del campo. Se l'attività è completata, confermare la data di Fine Effettiva e impostare l'avanzamento al 100% utilizzando la procedura di aggiornamento del progetto.

Se il lavoro non è completo, l'attività dovrebbe normalmente avere una Durata rimanente maggiore di 0.

### 2. Esaminare il tipo di completamento percentuale

Controlla se l'attività utilizza Fisica, Durata o Percentuale di completamento unità. La correzione dovrebbe corrispondere al metodo di controllo di progetto.

Ad esempio, se viene utilizzato il completamento percentuale fisico, il pianificatore potrebbe dover aggiornare manualmente il campo di avanzamento fisico anche quando la durata rimanente ha raggiunto lo zero.

### 3. Correggere lo stato della pianificazione

Per il lavoro completato, inserisci la Fine effettiva e conferma che l'avanzamento è al 100%. Per il lavoro incompleto, ripristina una Durata rimanente realistica e aggiorna l'avanzamento in base al metodo selezionato.

Dopo le correzioni, ricalcolare la pianificazione ed eseguire nuovamente la metrica.

## Scenario di esempio

Un aggiornamento della pianificazione mostra "Installa passerelle portacavi" con Durata rimanente = 0 e Percentuale fisica di completamento = 85%. L'attività ha un inizio effettivo ma nessuna fine effettiva.

Il pianificatore verifica con il tecnico sul campo e apprende che l'installazione non è completa. Una squadra ha ancora bisogno di tre giorni per completare il lavoro sulla lista dei compiti e i supporti finali.

Il pianificatore ripristina la Durata rimanente a tre giorni e mantiene la percentuale di completamento fisico all'85%. L'attività ora riflette sia il lavoro completato che lo sforzo rimanente.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e identifica le attività interessate.
- Giorni 2-3: confermare lo stato di completamento con i proprietari responsabili.
- Giorni 4-5: correggere i campi Fine effettiva, Durata rimanente e avanzamento.
- Giorno 6: esaminare i report e i risultati ottenuti.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evitare di assumere Durata rimanente = 0 significa sempre che il lavoro è completo. Conferma prima lo stato.

Evitare di modificare l'avanzamento al 100% senza verificare se l'attività è effettivamente terminata.

Evitare di ignorare il tipo di completamento percentuale. La correzione sbagliata può creare nuovi problemi di reporting.

## Punti chiave

- Durata rimanente = 0 e avanzamento <> 100% rappresentano un'incoerenza di stato.
- L’obiettivo è zero attività irrisolte.
- Controlla insieme la fine effettiva, la durata rimanente e il tipo di completamento percentuale.
- Il lavoro completato dovrebbe essere chiuso correttamente.
- Il lavoro incompleto dovrebbe mantenere una Durata rimanente realistica.

## Conclusione

Questa metrica aiuta gli addetti alla pianificazione a individuare un piccolo ma importante problema di aggiornamento. Il problema non è solo un numero sullo schermo; influisce sul reporting di completamento, sulla qualità delle previsioni e sulla fiducia nell'aggiornamento.

La gestione di questa metrica mantiene pulito lo stato delle attività e rende più affidabile la reportistica Primavera P6.

## Invito all'azione

Rivedi le attività con Durata rimanente = 0 e progresso diverso dal 100% durante il prossimo aggiornamento della pianificazione. Confermare se ciascuna attività è stata completata, quindi correggere la Fine effettiva, la Durata rimanente o l'avanzamento secondo necessità.
## Contenuti correlati
- [Attività con durata rimanente 0 e avanzamento non al 100% - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
