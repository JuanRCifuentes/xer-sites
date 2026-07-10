---
title: "Attività con predecessori FF e senza predecessori FS o SS"
seo_title: "Attività con predecessori FF e senza predecessori FS o SS - Primavera P6"
meta_description: "Spiega perché Attività con predecessori FF e senza predecessori FS o SS influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Attività con predecessori FF e senza predecessori FS o SS"
  - "Primavera P6 Attività con predecessori FF e senza predecessori FS o SS"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it-blog-article-activities-with-ff-predecessor-and-no-fs-ss-predecessor-primavera-p6"
language: "it"
content_type: "blog"
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Spiega perché Attività con predecessori FF e senza predecessori FS o SS influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
related_metrics:
  - "11_metrics_it/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/01_overview_template.md"
  - "11_metrics_it/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/02_guide_template.md"
related_blogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Attività con predecessori FF e senza predecessori FS o SS

## Titolo

Attività con predecessori FF e senza predecessori FS o SS

## Tempo stimato per la lettura/la conversazione

5-10 minuti

## Lunghezza obiettivo

750-1.500 parole

## Pubblico

Questo blog è rivolto a pianificatori, ingegneri di pianificazione, ingegneri di controllo di progetto, responsabili di progetto e revisori PMO che valutano la logica di pianificazione di Primavera P6.

## Gancio di apertura

La logica Fine-Fine può essere utile quando due attività devono essere completate insieme. Ma se un'attività ha un predecessore FF e nessun predecessore FS o SS, la sua fine può essere controllata mentre il suo inizio rimane debolmente definito.

## Introduzione

In Primavera P6, una relazione FF lega la fine di un'attività alla fine di un'altra. Ciò può essere appropriato quando il lavoro si sovrappone ma un'attività non può terminare finché non termina un'altra attività.

Il rischio si manifesta quando un'attività ha solo predecessori FF. Se nessun predecessore controlla quando può iniziare l'attività, la pianificazione può consentire l'inizio dell'attività prima di quanto supportato dalla sequenza di lavoro reale.

Questa metrica identifica le attività con almeno un predecessore FF e nessun predecessore FS o SS. L’obiettivo è zero attività irrisolte.

## Cosa significa questo parametro

Questo parametro controlla se l'inizio di un'attività è rappresentato nella rete logica. La logica FF collega le finiture. La logica FS e SS può collegare il lavoro a monte all'inizio dell'attività.

Un'attività può avere una logica FF valida e necessitare comunque di una logica di avvio. Ad esempio, potrebbe essere necessario terminare il test con l'installazione, ma non potrà iniziare finché non sarà disponibile una parte dell'installazione. In tal caso, potrebbe essere necessaria una relazione SS oltre alla relazione FF.

Un risultato elevato suggerisce che le attività possono essere collegate solo dalle condizioni di finitura. Un risultato basso suggerisce che gli inizi delle attività sono meglio rappresentati nella rete CPM.

## Perché questo argomento è importante

La logica della pianificazione dovrebbe mostrare sia come inizia che come finisce il lavoro. Se l'inizio di un'attività non è connesso al lavoro a monte, le date anticipate potrebbero non essere realistiche.

Ciò può influire sul margine totale, sul percorso più lungo, sulla fiducia delle tappe fondamentali e sulla pianificazione a breve termine. Può anche far sembrare più facile iniziare il lavoro sovrapposto di quanto non lo sia in realtà.

## Cause comuni di scarsi risultati

- Uso eccessivo delle relazioni FF per modellare il lavoro sovrapposto
- Rapporti SS mancanti per lavori che potranno iniziare dopo avanzamento parziale
- Relazioni FS mancanti per il lavoro che richiede il completamento completo del predecessore
- Logica di pianificazione copiata da progetti precedenti
- Ritardi utilizzati al posto di una logica determinante all'avvio più chiara
- Mancanza di input sul campo sulla reale condizione di avvio

## Come migliorare il risultato

### 1. Rivedere la logica del predecessore

Filtra per attività con predecessori FF e senza predecessori FS o SS. Esamina l'elenco dei predecessori, i tipi di relazione, i ritardi, lo stato dell'attività e il margine totale.

Chiedere cosa deve accadere prima che l'attività possa iniziare. Se la risposta è un avvio precedente, un rilascio parziale, un completamento completo, un'approvazione, un accesso o un passaggio di consegne, è probabile che la pianificazione necessiti di una logica determinante all'avvio.

### 2. Aggiungi il giusto rapporto inizio-guida

Utilizzare FS quando l'attività non può iniziare fino al termine del predecessore. Utilizzare SS quando l'attività può iniziare dopo l'avvio del predecessore o dopo aver raggiunto un punto di avanzamento definito.

Evitare di aggiungere logica solo per cancellare la metrica. La relazione dovrebbe riflettere la sequenza di esecuzione effettiva.

### 3. Documentare le eccezioni valide

Alcune attività possono costituire valide eccezioni. Il livello di impegno, supporto o attività amministrative potrebbe non aver bisogno di predecessori che guidino l'inizio. In questi casi, documentare il motivo in modo che l'elemento non rimanga un problema di qualità del cronoprogramma inspiegabile.

## Scenario di esempio

Una pianificazione prevede un'attività denominata "Test finale" con un predecessore FF di "Installazione completa". La relazione è utile perché il test non può terminare finché l'installazione non viene completata.

Tuttavia, non esiste alcun predecessore FS o SS legato all'inizio dei test. Se la pianificazione prevede date anticipate, potrebbe sembrare che i test possano iniziare prima che sia disponibile un lavoro di installazione sufficiente.

Il pianificatore aggiunge una relazione SS da "Installazione completa" a "Test finale" con un ritardo o un punto di avanzamento appropriato. La relazione FF rimane per proteggere il completamento finale. Ora il cronoprogramma mostra sia quando i test possono iniziare sia quando possono finire.

## Cronoprogramma di miglioramento consigliato

- Giorno 1: esegui la metrica e identifica le attività interessate.
- Giorni 2-3: esaminare prima gli elementi critici e quasi critici.
- Giorni 4-5: aggiungi logica FS o SS valida e rimuovi ritardi fuorvianti dove necessario.
- Giorno 6: conferma delle eccezioni e revisione del movimento del cronoprogramma.
- Giorno 7: rivalutare la metrica e documentare il risultato.

## Errori da evitare

Evita di trattare ogni relazione FF come un problema. Il problema non è la logica FF in sé; il problema manca la logica di partenza quando la partenza è importante.

Evitare di sostituire tutte le relazioni FF con relazioni FS. La sovrapposizione può essere realistica e utile.

Evitare di lasciare le eccezioni non documentate. I revisori devono sapere se un elemento è uno sviluppo logico intenzionale o incompleto.

## Punti chiave

- I controlli logici FF terminano l'allineamento, non l'inizio dell'attività.
- Le attività con predecessori FF e senza predecessori FS o SS possono iniziare prima di quanto supportato dalla sequenza reale.
- La logica SS è spesso utile quando il lavoro sovrapposto richiede una chiara condizione di avvio.
- L’obiettivo è zero attività irrisolte.
- Documentare chiaramente le eccezioni valide.

## Conclusione

Questa metrica aiuta gli addetti alla pianificazione a confermare che gli inizi delle attività sono rappresentati nella rete. Le relazioni FF possono essere valide, ma non dovrebbero lasciare l'inizio di attività importanti scollegato dal lavoro a monte.

La revisione di questa metrica migliora la qualità del CPM, l'affidabilità del margine e la fiducia nel percorso più lungo. Aiuta inoltre i revisori del PMO a distinguere la logica di sovrapposizione realistica dal sequenziamento debole o incompleto.

## Invito all'azione

Rivedi le attività con i predecessori FF e nessun predecessore FS o SS nel tuo prossimo aggiornamento del cronoprogramma Primavera P6. Per ognuno, chiedere se l'inizio dell'attività dovrebbe essere guidato dal lavoro a monte. Se così fosse, aggiungi una valida logica di partenza-guida. In caso contrario, documentare l'eccezione.
## Contenuti correlati
- [Attività con predecessori FF e senza predecessori FS o SS - Panoramica](01_overview_template.md)
- [Attività con predecessori FF e senza predecessori FS o SS - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
