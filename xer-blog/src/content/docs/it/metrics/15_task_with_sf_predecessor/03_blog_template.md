---
title: "Attività con i predecessori di SF in Primavera P6"
seo_title: "Attività con i predecessori di SF in Primavera P6"
meta_description: "Spiega perché Attività con i predecessori di SF in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Attività con i predecessori di SF in Primavera P6"
  - "Primavera P6 Attività con i predecessori di SF in Primavera P6"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it-blog-article-task-with-sf-predecessor-primavera-p6"
language: "it"
content_type: "blog"
version: "1.0"
topic: "Qualità del cronoprogramma"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Spiega perché Attività con i predecessori di SF in Primavera P6 influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
related_metrics:
  - "11_metrics_it/15_task_with_sf_predecessor/01_overview_template.md"
  - "11_metrics_it/15_task_with_sf_predecessor/02_guide_template.md"
related_blogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/15_task_with_sf_predecessor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Attività con i predecessori di SF in Primavera P6

Le relazioni dall'inizio alla fine sono uno dei tipi di relazione meno comuni nella pianificazione CPM. In Primavera P6, una relazione SF significa che l'attività successore non può terminare finché non inizia l'attività predecessore. Ciò può essere valido in casi insoliti, ma non è così che viene sequenziata la maggior parte del lavoro di progetto.

Per le normali attività di task, un predecessore dall'inizio alla fine dovrebbe sollevare immediatamente una domanda di revisione: quale condizione del mondo reale sta cercando di rappresentare questa relazione? Se la risposta non è chiara, la relazione potrebbe indebolire la logica della pianificazione.

La maggior parte dei cronoprogrammi di progetto si basa su tre tipi di relazione pratici. Fine-Inizio viene utilizzata quando un'attività deve terminare prima che un'altra possa iniziare. Inizio-Inizio viene utilizzata quando le attività possono iniziare insieme o quando un inizio dipende da un altro inizio. Fine-Fine viene utilizzata quando il completamento di un'attività è legato al completamento di un'altra. Questi tipi di relazione sono generalmente più facili da comprendere per i team sul campo, i responsabili di progetto e i revisori.

La relazione Inizio-Fine è diversa. Collega l'inizio di un predecessore alla fine di un successore. Ciò significa che la fine del successore viene mantenuta fino all'inizio del predecessore. In molti cronoprogrammi di costruzione, ingegneria, approvvigionamento e messa in servizio, questa logica è difficile da spiegare. Se un'attività non può essere completata finché non ne inizia un'altra, il pianificatore dovrebbe essere in grado di descrivere l'esatta condizione operativa dietro quella regola.

Un problema comune è la logica copiata. Uno schedulatore può copiare un gruppo di attività da un altro progetto, importare logica esterna o applicare modifiche globali e una relazione SF rimane nella pianificazione senza che nessuno se ne accorga. Le date calcolate potrebbero ancora sembrare accettabili, quindi la relazione sopravvive. Successivamente, durante una revisione, il percorso logico diventa difficile da difendere perché la relazione non riflette il modo in cui effettivamente si svolge il lavoro.

Un altro problema è il controllo della data. A volte la logica SF viene utilizzata con ritardo per far terminare un'attività nella data desiderata. Questo può nascondere il vero driver. Se la pianificazione richiede una data contrattuale, una finestra di accesso, una condizione di consegna o un traguardo di consegna, tale condizione dovrebbe solitamente essere modellata direttamente. La pianificazione non deve basarsi su un tipo di relazione confuso semplicemente perché produce la data di fine desiderata.

Considera un'attività chiamata "Operazione di bypass temporaneo" con un predecessore SF da "Avvia operazione di sistema permanente". In questo caso, l'operazione di bypass non può terminare finché non viene avviato il sistema permanente. Questa potrebbe essere una relazione SF difendibile se il bypass deve rimanere attivo finché il sistema sostitutivo non sarà attivo. Anche in questo caso, lo schedulatore dovrebbe documentare il motivo perché i revisori metteranno ragionevolmente in discussione la relazione.

Consideriamo ora un'attività normale chiamata "Install Cable Tray" con un predecessore SF da "Start Cable Pulling". Questa relazione è più difficile da giustificare. Se l'installazione della passerella portacavi deve essere completata prima che possa iniziare la trazione dei cavi, la logica FS dalla passerella portacavi alla trazione dei cavi potrebbe essere più appropriata. Se il lavoro si sovrappone, la logica SS o FF potrebbe essere più chiara. La relazione SF non dovrebbe rimanere a meno che non rappresenti l'effettiva sequenza di costruzione.

Il miglior metodo di revisione in P6 consiste nel creare un layout che includa ID attività, Nome attività, WBS, Tipo attività, ID predecessore, nome predecessore, tipo di relazione, ritardo, inizio, fine, margine totale, vincoli e stato del percorso critico o più lungo. Filtra per attività di attività con i predecessori SF. Quindi esaminare prima i risultati critici e quasi critici, perché tali relazioni possono influenzare direttamente i fattori di progetto segnalati.

Per ogni risultato, poni una semplice serie di domande. Quale condizione è la modellazione delle relazioni SF? FS, SS o FF descriverebbero la logica in modo più chiaro? Viene utilizzato il ritardo per forzare una data? La relazione influisce sul percorso critico o sul reporting delle tappe fondamentali? Esiste un motivo documentato per mantenerlo?

La soglia target dovrebbe essere pari a zero relazioni predecessori SF irrisolte sulle attività del compito. Ciò non significa che ogni relazione di fantascienza sia automaticamente sbagliata. Ciò significa che ogni relazione con la fantascienza deve essere corretta o chiaramente giustificata. La logica SF inspiegabile può ridurre la fiducia nella rete perché rende la logica più difficile da verificare e più difficile da comunicare.

Quando la relazione non è valida, sostituiscila con il tipo di relazione che corrisponde alla sequenza reale. Se l'attività deve iniziare al termine di un'altra, utilizzare FS. Se gli inizi sono collegati, utilizzare SS. Se le finiture devono essere allineate, utilizzare FF. Se il problema riguarda una fase cardine, una consegna, un'approvazione o una condizione di accesso mancante, aggiungi o correggi l'attività che rappresenta tale condizione.

Dopo le correzioni, ricalcolare la pianificazione e rivedere il percorso logico interessato. Controlla il margine totale, il percorso critico o più lungo, le date delle tappe fondamentali e i report lookahead a breve termine. L’obiettivo non è solo migliorare il punteggio metrico. L’obiettivo è rendere il cronoprogramma più facile da spiegare e più affidabile per il processo decisionale.

Le attività svolte con i predecessori della SF sono segnali piccoli ma importanti. Spesso indicano una logica copiata, date forzate o sequenze poco chiare. Esaminarli aiuta il team di progetto a ripulire la rete logica prima che tali punti deboli diventino problemi di reporting.
## Contenuti correlati
- [Attività con i predecessori di SF in Primavera P6 - Panoramica](01_overview_template.md)
- [Attività con i predecessori di SF in Primavera P6 - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
