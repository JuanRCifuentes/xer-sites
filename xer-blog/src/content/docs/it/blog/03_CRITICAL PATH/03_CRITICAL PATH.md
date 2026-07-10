---
title: "Percorso critico"
seo_title: "Percorso critico - Primavera P6"
meta_description: "Approfondisci Percorso critico in Primavera P6 con un taglio pratico su pianificazione, controllo progetto e qualità del cronoprogramma."
description: "Approfondisci Percorso critico in Primavera P6 con un taglio pratico su pianificazione, controllo progetto e qualità del cronoprogramma."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Percorso critico"
  - "Primavera P6 Percorso critico"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/critical-path-in-primavera-p6"
language: "it"
content_type: "blog"
draft: false
sidebar:
  hidden: true
version: "1.0"
topic: "Pianificazione in Primavera P6"
audience:
  - "Pianificatori"
  - "Scheduler"
  - "Team di controllo progetto"
primary_search_intent: "Approfondisci Percorso critico in Primavera P6 con un taglio pratico su pianificazione, controllo progetto e qualità del cronoprogramma."
related_metrics:
  - "11_metrics_it/09_cp_or_float_path_starting_with_constraint/01_overview_template.md"
related_blogs:
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
  - "11b_blogs_it/04_CRITICALITY MATRIX/04_CRITICALITY MATRIX.md"
translation_of: "01b_blogs_en/03_CRITICAL PATH/03_CRITICAL PATH.md"
canonical_url: ""
last_reviewed: "2026-07-02"
pubDate: "2026-07-02"
---
# Percorso critico

Il percorso critico è la sequenza più lunga di attività dipendenti in una pianificazione. Determina la durata più breve possibile del progetto e definisce direttamente la data di fine del progetto.

In termini pratici, il percorso critico è la catena di compiti che non può essere ritardata senza incidere sulla scadenza finale. Se un'attività del percorso critico slitta e non cambia nient'altro, slitta anche la data di completamento del progetto.

Ecco perché il percorso critico è uno dei risultati più importanti di un cronoprogramma Primavera P6. Non è solo un filtro, un colore o un report. È la spiegazione del cronoprogramma di ciò che sta determinando il completamento.

## Cosa significa il percorso critico

Una pianificazione contiene molte attività, ma non tutte le attività hanno lo stesso impatto sulla data di fine. Alcune attività hanno il galleggiante. Possono spostarsi leggermente prima di influenzare l'attività successiva o la fine del progetto. Le attività critiche non hanno tale flessibilità o hanno una flessibilità minima a seconda del metodo e delle impostazioni di pianificazione.

Il percorso critico mostra il tempo minimo necessario per completare il progetto in base alla logica, alle durate, ai calendari, ai vincoli e allo stato attuali.

```mermaid
flowchart LR
    A["Inizio del progetto"] --> B["Rilascio del progetto"]
    B --> C["Procurarsi attrezzature a lungo termine"]
    C --> D["Installare l'attrezzatura"]
    D --> E["Sistema di commissioni"]
    E --> F["Completamento del progetto"]
```

Se questa è la catena di controllo, un ritardo nell'approvvigionamento può ritardare l'installazione. Un ritardo nell'installazione può ritardare la messa in servizio. Un ritardo nella messa in servizio può ritardare il completamento del progetto. Il percorso critico aiuta il team a vedere quella connessione.

## È la catena che non puoi ritardare

Il percorso critico non è semplicemente il lavoro che sembra importante. È la sequenza dipendente di lavoro che definisce la data di fine.

Questa distinzione è importante. Un'attività di alto valore potrebbe non essere critica se ha margine. Un traguardo visibile del cliente potrebbe non essere fondamentale se un altro percorso sta guidando il completamento. Una piccola attività tecnica può essere critica se si trova nell'unica catena che porta alla consegna finale.

Per i team di controllo di progetto, ciò rende il percorso critico uno strumento decisionale. Aiuta a rispondere:

- Cosa sta determinando la conclusione del progetto?
- Quali attività richiedono maggiore attenzione nel cronoprogramma?
- Dove un ritardo influenzerebbe immediatamente il completamento?
- Quali azioni di ripristino potrebbero proteggere la data di fine?
- Ha senso il percorso riportato?

L'ultima domanda è quella che gli pianificatore non dovrebbero mai saltare.

## Non accettare ciecamente il filtro critico

Primavera P6 può identificare le attività critiche, ma il software non comprende l'intento del progetto. Calcola in base ai dati forniti: logica, calendari, vincoli, durate, avanzamento e opzioni di pianificazione.

Se i dati sono deboli, il percorso critico può sembrare strano.

Le attività o le tappe fondamentali possono essere visualizzate nel filtro critico anche se non sono realmente alla guida del progetto. Ciò può verificarsi a causa di logica mancante, vincoli rigidi, date obsolete, estremità aperte, calendari insoliti, margine negativo, stato non corretto o impostazioni logiche mantenute.

Il pianificatore deve utilizzare il giudizio professionale. Il percorso critico dovrebbe essere messo in discussione. Dovrebbe sembrare ragionevole. Dovrebbe raccontare una storia che il team di progetto riconosce.

Se il percorso dice che il completamento finale è determinato da un traguardo amministrativo senza un vero lavoro a valle, contestalo. Se il percorso inizia con una pietra miliare che in realtà non controlla l’esecuzione, sfidala. Se il percorso passa attraverso aree WBS non correlate senza un'interfaccia chiara, contestalo.

Il percorso critico è valido tanto quanto il modello di pianificazione che lo sostiene.

## Pianificazioni di base e percorso critico

In una pianificazione che non è mai stata aggiornata, come una prima baseline, il percorso critico spesso inizia con la tappa fondamentale di inizio progetto e termina con la tappa fondamentale di completamento del progetto.

Questo è comune, ma non è una regola scritta nella pietra.

Alcuni progetti hanno un percorso critico che inizia con un traguardo intermedio chiave. Ad esempio, la costruzione potrebbe non essere in grado di iniziare finché un proprietario non consegna un'area, non viene rilasciato un permesso o un pacchetto di progettazione non raggiunge lo stato approvato. In tal caso, il traguardo della consegna o del rilascio può innescare l’inizio del percorso di controllo.

La stessa idea si applica verso la fine del progetto. Il percorso critico può concludersi con il completamento finale, ma può anche portare a un traguardo contrattuale intermedio, a una fase di passaggio di consegne, a un turnover del sistema o a una data di accesso del cliente che attualmente è più restrittiva.

La chiave non è se il percorso inizia e finisce nel luogo più tradizionale. La chiave è se il percorso è logico, completo e difendibile.

## Orari in corso

Una volta che una pianificazione è in corso, il percorso critico cambia forma. Il lavoro completato non dovrebbe più guidare il completamento futuro. Il percorso dovrebbe iniziare dal confine dello stato attuale.

In una pianificazione aggiornata, il percorso critico spesso inizia con un'attività attualmente in corso, un'attività non avviata pronta per iniziare o una tappa valida che controlla l'accesso al lavoro futuro. Può anche iniziare da un'interfaccia di progetto o da una tappa fondamentale del passaggio di consegne quando quell'evento sta realmente guidando il successivo lavoro critico.

È qui che conta la data di aggiornamento. La data di aggiornamento separa le prestazioni effettive dal lavoro previsto. Un percorso critico dopo la data di aggiornamento dovrebbe spiegare in che modo il lavoro rimanente porta al completamento.

Se il percorso inizia con un'attività priva di logica guida, con una data di inizio inspiegabile o con un traguardo discutibile, il revisore dovrebbe indagare. Il cronoprogramma potrebbe mostrare un percorso calcolato, ma non credibile.

## Fai attenzione alle pietre miliari

Le pietre miliari sono utili perché contrassegnano i punti chiave: avviso di procedere, consegna dell'area, approvazione del progetto, completamento meccanico, turnover del sistema, completamento sostanziale e completamento finale.

Ma le tappe fondamentali possono anche fuorviare una revisione critica del percorso.

Una pietra miliare può apparire critica perché presenta un vincolo. Può sembrare critico perché non ha durata e si trova al confine della data. Può sembrare critico perché manca la logica attorno ad esso. Ciò non significa automaticamente che la pietra miliare sia veramente parte della catena di esecuzione del controllo.

Fai molta attenzione quando il percorso critico inizia con una pietra miliare. Chiedere:

- Questo traguardo rappresenta un vero evento di controllo?
- Quale attività o condizione esterna guida il traguardo?
- Quale lavoro viene rilasciato dalla pietra miliare?
- L’obiettivo è vincolato anziché guidato dalla logica?
- Il percorso sarebbe ancora critico se la logica fondamentale fosse corretta?

Se la pietra miliare non controlla il lavoro, non dovrebbe essere consentito di definire la storia del percorso critico.

## La logica mantenuta può cambiare la storia

La logica mantenuta è un'impostazione di Primavera P6 utilizzata per gestire l'avanzamento fuori sequenza. Può essere appropriato, ma può anche influenzare il percorso critico in modi che i revisori devono comprendere.

Quando viene utilizzata la logica mantenuta, P6 può preservare la logica precedente anche quando il lavoro successivo è già iniziato fuori sequenza. Ciò può causare il mantenimento o la sequenza del lavoro rimanente in modo da modificare il percorso critico calcolato.

Il problema non è che la logica mantenuta sia sempre sbagliata. Il problema è che il pianificatore deve capire se sta producendo una previsione realistica.

Se la logica mantenuta fa sì che il percorso critico passi attraverso relazioni che non riflettono più il modo in cui viene eseguito il lavoro, il team dovrebbe rivedere lo stato, la logica e le opzioni di pianificazione. Il percorso dovrebbe riflettere un piano rimanente difendibile, non solo un calcolo meccanico.

## Come rivedere il percorso critico

Una buona revisione del percorso critico dovrebbe combinare i risultati di P6 con il giudizio di pianificazione.

Inizia generando il percorso più lungo o il report sul percorso critico. Quindi rivedere il percorso attività per attività. Osserva predecessori, successori, tipi di relazione, ritardi, vincoli, calendari, date effettive, durata rimanente e margine totale.

Chiedi se il percorso ha senso:

- Il percorso segue una sequenza di esecuzione credibile?
- Inizia da un driver attuale valido?
- Termina al completamento corretto o al traguardo di controllo?
- I vincoli forzano il percorso?
- Le relazioni mancanti nascondono il vero driver?
- La logica mantenuta influenza il percorso in modo fuorviante?
- Il team di progetto riconosce questo come lavoro di controllo?

Se la risposta è no, è necessario rivedere la pianificazione prima di poter utilizzare con sicurezza il percorso critico.

## Conclusione

Il percorso critico è la sequenza di attività dipendenti che definisce la data di fine del progetto. Mostra il tempo minimo necessario per completare il progetto e identifica il lavoro che non può slittare senza incidere sulla scadenza.

Ma il percorso critico non è qualcosa da accettare ciecamente. P6 calcola ciò che i dati gli dicono di calcolare. Il pianificatore deve verificare se il risultato è ragionevole, logico e allineato al piano di esecuzione reale.

In un cronoprogramma forte, il percorso critico racconta una storia chiara. Inizia da un driver attuale valido, segue le dipendenze reali, evita vincoli fuorvianti, gestisce correttamente i progressi e porta al traguardo di completamento corretto.

Quando quella storia ha senso, il percorso critico diventa uno degli strumenti più potenti nel controllo di progetto. In caso contrario, è un avvertimento che la pianificazione necessita di ulteriore revisione prima che la previsione possa essere considerata attendibile.
## Contenuti correlati
- [Percorso critico o percorso del margine che inizia con un vincolo - Panoramica](../../metrics/09_cp_or_float_path_starting_with_constraint/02_guide_template.md)
- [Logica robusta](../02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
- [Matrice di criticità](../04_CRITICALITY%20MATRIX/04_CRITICALITY%20MATRIX.md)
