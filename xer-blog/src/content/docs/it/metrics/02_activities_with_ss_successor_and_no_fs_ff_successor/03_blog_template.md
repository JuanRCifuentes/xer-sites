---
title: "Attività con successori SS e senza successori FS o FF"
seo_title: "Attività con successori SS e senza successori FS o FF - Primavera P6"
meta_description: "Spiega perché Attività con successori SS e senza successori FS o FF influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Attività con successori SS e senza successori FS o FF"
  - "Primavera P6 Attività con successori SS e senza successori FS o FF"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it-blog-article-activities-with-ss-successor-and-no-fs-ff-successor-primavera-p6"
language: "it"
content_type: "blog"
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Spiega perché Attività con successori SS e senza successori FS o FF influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
related_metrics:
  - "11_metrics_it/02_activities_with_ss_successor_and_no_fs_ff_successor/01_overview_template.md"
  - "11_metrics_it/02_activities_with_ss_successor_and_no_fs_ff_successor/02_guide_template.md"
related_blogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/02_activities_with_ss_successor_and_no_fs_ff_successor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Attività con successori SS e senza successori FS o FF

## Titolo

Attività con successori SS e senza successori FS o FF

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che valutano la logica di pianificazione di Primavera P6.

## Gancio di apertura

La logica Start-to-Start può essere utile. Consente la sovrapposizione del lavoro e aiuta a modellare l'esecuzione sul campo reale. Ma quando un'attività ha un successore SS e nessun successore FS o FF, la sua conclusione potrebbe non avere più importanza per il resto del cronoprogramma.

## Introduzione

In Primavera P6, il tipo di relazione conta. Una relazione Start-to-Start consente a un successore di iniziare dopo l'avvio del predecessore. Ciò può essere appropriato quando il lavoro si sovrappone, come l'avvio dell'installazione dopo che un'area è stata parzialmente rilasciata.

Il rischio si presenta quando il predecessore ha solo successori SS. Se nessun successore dipende dalla finitura del predecessore, l'estensione della durata del predecessore potrebbe non ritardare il lavoro a valle. Il cronoprogramma potrebbe sembrare corretto anche se un'attività richiede più tempo del previsto.

Questa metrica identifica le attività con almeno un successore SS e nessun successore FS o FF. L’obiettivo è zero attività irrisolte.

## Cosa significa questo parametro

Questo parametro controlla se la fine di un'attività è rappresentata nella rete logica. La logica SS collega gli inizi. La logica FS e FF collega la fine di un'attività a un inizio o un arrivo successivo.

Un'attività può avere una logica SS valida e necessitare comunque di una logica basata sulla finitura. Ad esempio, un successore potrebbe iniziare dopo l'inizio della prima parte del lavoro, ma potrebbe non essere in grado di terminare finché il predecessore non avrà completato. In tal caso, una relazione FF potrebbe proteggere meglio la logica della pianificazione.

Un risultato elevato suggerisce che le attività possono essere collegate solo dalle condizioni di inizio. Un risultato basso suggerisce che il completamento dell'attività è meglio rappresentato nella rete CPM.

## Perché questo argomento è importante

La logica della pianificazione dovrebbe mostrare sia come inizia che come finisce il lavoro. Se la fine di un'attività non è collegata a nulla, i ritardi relativi a tale attività potrebbero non spostare le date a valle.

Ciò può influire sul margine totale, sul percorso più lungo, sulla confidenza delle tappe fondamentali e sul ritardo nella preparazione dell'analisi. Può anche creare un look-ahead fuorviante perché il lavoro parzialmente iniziato sembra rilasciare attività a valle senza mostrare ciò che dipende ancora dal completamento.

## Cause comuni di scarsi risultati

- Uso eccessivo delle relazioni SS per modellare il lavoro sovrapposto
- Mancano rapporti FF per lavori che devono finire insieme
- Relazioni FS mancanti per le fasi di consegna, ispezione o turnover
- Logica di pianificazione copiata da progetti precedenti
- Ritardi utilizzati al posto di una logica più chiara orientata al traguardo
- Mancanza di input sul campo sulla reale dipendenza dal completamento

## Come migliorare il risultato

### 1. Esaminare la logica del successore

Filtra per attività con successori SS e senza successori FS o FF. Esamina l'elenco dei successori, i tipi di relazione, i ritardi, lo stato dell'attività e il margine totale.

Chiedere cosa dipende dalla conclusione dell'attività. Se la risposta è un inizio successivo, un passaggio di consegne, un'ispezione o un traguardo di completamento, la pianificazione probabilmente necessita di una logica basata sulla fine.

### 2. Aggiungi la giusta relazione basata sulla finitura

Utilizza FS quando l'attività successiva non può iniziare fino al termine di questa attività. Utilizzare FF quando il lavoro può sovrapporsi ma il successore non può terminare finché non termina questa attività.

Evitare di aggiungere logica solo per cancellare la metrica. La relazione dovrebbe riflettere la sequenza di esecuzione effettiva.

### 3. Documentare le eccezioni valide

Alcune attività possono costituire valide eccezioni. Il livello di impegno, supporto o attività amministrative potrebbe non richiedere successori mirati. In questi casi, documentare il motivo in modo che l'elemento non rimanga un problema di qualità del cronoprogramma inspiegabile.

## Scenario di esempio

Un cronoprogramma prevede un'attività denominata "Installazione di tubazioni sotterranee" con un successore SS di "Riempimento di trincee". La relazione è utile perché il riempimento può iniziare dopo l'installazione della prima sezione della tubazione.

Tuttavia, non esiste un successore FS o FF legato alla finitura dell'attività delle tubazioni. Se i lavori sulle tubazioni si prolungano di cinque giorni, l'attività di riempimento potrebbe comunque procedere secondo il cronoprogramma senza essere bloccata dal completamento finale della tubazione.

Il pianificatore aggiunge una relazione FF da "Installazione di tubazioni sotterranee" a "Riempimento di trincee". Ora il lavoro può ancora sovrapporsi, ma il completamento del riempimento è legato al completamento delle tubazioni. Il cronoprogramma riflette meglio la reale dipendenza dal campo.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e identifica le attività interessate.
- Giorni 2-3: esaminare prima gli elementi critici e quasi critici.
- Giorni 4-5: aggiungi logica FS o FF valida e rimuovi ritardi fuorvianti dove necessario.
- Giorno 6: conferma delle eccezioni e revisione del movimento del cronoprogramma.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evita di considerare ogni relazione con le SS come un problema. Il problema non è la logica delle SS in sé; al problema manca la logica orientata al traguardo quando il traguardo conta.

Evitare di sostituire tutte le relazioni SS con relazioni FS. La sovrapposizione può essere realistica e utile.

Evitare di lasciare le eccezioni non documentate. I revisori devono sapere se un elemento è uno sviluppo logico intenzionale o incompleto.

## Punti chiave

- I controlli logici SS iniziano, non finiscono.
- Le attività con successori SS e senza successori FS o FF potrebbero smettere di influenzare le date downstream quando la loro durata cambia.
- La logica FF è spesso utile quando il lavoro sovrapposto deve terminare in sequenza.
- L’obiettivo è zero attività irrisolte.
- Documentare chiaramente le eccezioni valide.

## Conclusione

Questa metrica aiuta gli addetti alla pianificazione a confermare che il completamento dell'attività è rappresentato nella rete. Le relazioni SS possono essere valide, ma non devono lasciare le attività importanti sconnesse dal resto del cronoprogramma.

La revisione di questa metrica migliora la qualità del CPM, l'affidabilità del margine e la fiducia nel percorso più lungo. Aiuta inoltre i revisori del PMO a distinguere la logica di sovrapposizione realistica dal sequenziamento debole o incompleto.

## Invito all'azione

Rivedi le attività con i successori SS e senza successori FS o FF nel prossimo aggiornamento del cronoprogramma Primavera P6. Per ognuno, chiedi se la fine dell'attività dovrebbe guidare il lavoro a valle. In tal caso, aggiungere una logica basata sul traguardo valida. In caso contrario, documentare l'eccezione.
## Contenuti correlati
- [Attività con successori SS e senza successori FS o FF - Panoramica](01_overview_template.md)
- [Attività con successori SS e senza successori FS o FF - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
