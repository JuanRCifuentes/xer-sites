---
title: "Relazioni sconvenienti in Primavera P6"
seoTitle: "Relazioni sconvenienti in Primavera P6"
description: "Spiega perché Relazioni sconvenienti in Primavera P6"
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Relazioni sconvenienti in Primavera P6"
  - "Primavera P6 Relazioni sconvenienti in Primavera P6"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/unusual-relationships-primavera-p6"
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
primarySearchIntent: "Spiega perché Relazioni sconvenienti in Primavera P6: pietre miliari, LOE e controlli del tipo di relazione influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/14_unusual_relations/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/14_unseemly_relations/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

La logica delle relazioni è una delle parti più facili da copiare rapidamente di un cronoprogramma e una delle parti più difficili da difendere in seguito. Una relazione può sembrare innocua in una tabella P6, ma il tipo di attività di ciascuna parte è importante. Una relazione che abbia senso tra due normali attività di attività può essere scomoda o fuorviante quando una parte è un'attività di traguardo iniziale, di traguardo finale o di livello di impegno.

Questa metrica si concentra sulle relazioni sconvenienti: modelli di relazione che dovrebbero essere rivisti perché spesso non corrispondono allo scopo di pianificazione del tipo di attività. L’obiettivo non è rifiutare automaticamente ogni relazione insolita. L'obiettivo è trovare la logica che richieda una seconda occhiata prima che influenzi le date delle tappe fondamentali, il margine, il reporting del percorso critico o la fiducia del cliente.

Il primo gruppo di risultati riguarda i traguardi finali. Una pietra miliare di arrivo rappresenta un evento di completamento. Di solito viene utilizzato per indicare che è stato raggiunto un pacchetto, una fase, un passaggio di consegne, un'approvazione o un punto contrattuale. Quando una pietra miliare di arrivo ha un successore SS o SF, la logica potrebbe dire che un'attività successiva può iniziare perché l'evento di arrivo è iniziato o può finire perché l'evento di arrivo inizia. Di solito è difficile da spiegare. Anche una pietra miliare finale con un predecessore SS può essere sospetta perché il completamento della pietra miliare può essere legato all'inizio del lavoro precedente piuttosto che alla condizione di completamento che dimostra effettivamente che la pietra miliare è stata raggiunta.

Il secondo gruppo riguarda i traguardi iniziali. Un traguardo iniziale rappresenta l'inizio di un evento, fase, finestra di accesso o autorizzazione. Se un traguardo iniziale ha un predecessore FF o SF, l'evento di partenza potrebbe essere legato a un traguardo precedente in un modo che non descrive chiaramente la condizione di partenza richiesta. Se una pietra miliare iniziale ha un successore FS o FF, la pietra miliare potrebbe agire come un punto di fine dell'attività anziché come un evento di inizio. A volte ciò accade perché il tipo di traguardo è stato selezionato in modo errato. Altre volte, il tipo di relazione veniva copiato da un'altra parte del cronoprogramma e mai rivisto.

Il terzo gruppo riguarda le attività LOE. Le attività LOE vengono utilizzate per rappresentare supporto, supervisione, gestione, ispezione o altro impegno che abbraccia altri lavori. Normalmente non sono destinati a guidare attività di produzione distinte nello stesso modo in cui lo fa un compito normale. Quando un'attività LOE ha una relazione FS o SF, il revisore della pianificazione dovrebbe chiedere se il LOE sta controllando il lavoro che dovrebbe invece essere guidato da attività lavorative fisiche, vincoli di accesso, approvazioni o tappe contrattuali.

In pratica, questa metrica è utile perché impone una conversazione pulita sull’intento. Cosa vuole rappresentare questo traguardo? Questo LOE riassume il lavoro o lo guida? Questa relazione descrive una sequenza reale o è lì solo per far sì che un appuntamento si comporti bene?

Considera un traguardo finale chiamato "Completamento meccanico". Se ha un successore SS di "Avvia messa in servizio", la pianificazione potrebbe implicare che la messa in servizio possa iniziare quando inizia il completamento meccanico. Ciò non si adatta molto bene al concetto di pietra miliare. Se la messa in servizio può iniziare dopo un fatturato parziale, la soluzione migliore potrebbe essere quella di aggiungere un'attività di fatturato discreta o un traguardo più specifico. Se la messa in servizio dipende veramente dal completamento meccanico completo, una relazione FS dal traguardo del completamento alla messa in servizio è più facile da comprendere e difendere.

Consideriamo ora un'attività LOE denominata "Supporto alla gestione del progetto" con una relazione FS con un'attività di costruzione. Questa relazione può rendere l’attività di supporto un motore del lavoro sul campo, che di solito non è l’intento. Un pianificatore dovrebbe verificare se l’attività di costruzione debba invece essere guidata da ingegneria, appalti, accesso, permessi, costruzione precedente o un’altra condizione discreta. Il LOE potrebbe richiedere driver di inizio e fine diversi in modo da coprire il lavoro senza controllarlo in modo errato.

Il miglior metodo di revisione è semplice. Crea un layout P6 che mostri l'ID attività, il nome dell'attività, il tipo di attività, il predecessore, il successore, il tipo di relazione, il ritardo, l'inizio, la fine, il margine totale e lo stato del percorso critico o più lungo. Filtra per traguardi e attività LOE, quindi isola i modelli di relazione contrassegnati dalla metrica. Esaminare prima gli elementi critici e quasi critici perché possono influire immediatamente sul reporting del progetto.

Non tutti gli elementi contrassegnati saranno errati. Alcuni progetti hanno regole logiche specifiche del cliente o requisiti di reporting insoliti. Alcuni modelli di pianificazione utilizzano tappe speciali per interfacciarsi con altri sistemi. Questi casi dovrebbero essere rari, approvati e documentati. Se un revisore non riesce a spiegare la relazione in un linguaggio di pianificazione semplice, probabilmente deve essere corretta.

Un buon obiettivo per questa metrica è zero relazioni irrisolte. La parola importante è irrisolta. Il team di pianificazione dovrebbe correggere la relazione, rivedere il tipo di attività, aggiungere un'attività migliore per rappresentare la condizione reale o documentare l'eccezione approvata. Lasciare queste relazioni inspiegabili indebolisce la pianificazione perché rende più difficile fidarsi della rete logica.

Le relazioni inadeguate sono spesso piccoli sintomi di problemi più ampi di qualità del cronoprogramma: logica copiata, definizioni di tappe fondamentali poco chiare, uso improprio delle attività LOE o abitudine di forzare le date attraverso i tipi di relazione. Pulirli migliora più di un punteggio metrico. Rende la pianificazione più facile da rivedere, più facile da spiegare e più affidabile per la governance del PMO e il processo decisionale del progetto.
## Contenuti correlati
- [02_guide_template](../14_unusual_relations/02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
