---
title: "Cos'è un cronoprogramma"
seo_title: "Cos'è un cronoprogramma - Primavera P6"
meta_description: "Approfondisci Cos'è un cronoprogramma in Primavera P6 con un taglio pratico su pianificazione, controllo progetto e qualità del cronoprogramma."
description: "Approfondisci Cos'è un cronoprogramma in Primavera P6 con un taglio pratico su pianificazione, controllo progetto e qualità del cronoprogramma."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Cos'è un cronoprogramma"
  - "Primavera P6 Cos'è un cronoprogramma"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/what-a-schedule-is-in-primavera-p6"
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
primary_search_intent: "Approfondisci Cos'è un cronoprogramma in Primavera P6 con un taglio pratico su pianificazione, controllo progetto e qualità del cronoprogramma."
related_metrics:
  - "11_metrics_it/01_activities_starting_in_dd_with_no_logic_driving/01_overview_template.md"
related_blogs:
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
canonical_url: ""
last_reviewed: "2026-07-02"
pubDate: "2026-07-02"
---
# Cos'è un cronoprogramma

La pianificazione di un progetto è più di un elenco di date. È una rappresentazione grafica e logica del piano di consegna del progetto. Spiega come verrà eseguito il progetto dall'inizio alla fine, come si collegano i pacchetti di lavoro, quando dovrebbero essere raggiunti i traguardi principali e quali informazioni il team di progetto dovrebbe utilizzare per prendere decisioni.

In termini semplici, la pianificazione trasforma il piano di progetto in una tabella di marcia. Aiuta tutti i soggetti coinvolti a capire cosa è necessario fare, quando deve accadere e chi è responsabile della sua realizzazione. Per responsabili di progetto, pianificatori, squadre di costruzione, ingegneri, responsabili degli acquisti e revisori del PMO, la pianificazione diventa uno dei principali strumenti di coordinamento e controllo.

Il cronoprogramma è una sequenza temporale, ma non è solo una sequenza temporale. Un cronoprogramma debole può mostrare le date. Un cronoprogramma forte spiega perché quelle date sono credibili.

## La pianificazione come roadmap di consegna

Ogni progetto inizia con un intento. Il team sa cosa deve essere consegnato: un edificio, una struttura, un sistema industriale, una chiusura, un bene infrastrutturale o un pacchetto di lavori. Ma la consegna richiede qualcosa di più della semplice conoscenza dell’obiettivo finale. La squadra deve capire la sequenza.

Cosa viene prima? Cosa può succedere in parallelo? Cosa bisogna attendere per l'approvazione del progetto, la consegna dei materiali, l'accesso, il rilascio dei permessi, i test o la consegna? Quali attività controllano la data di fine? Quali traguardi contano di più per il cliente?

Una pianificazione risponde a queste domande convertendo il piano in attività, durate, dipendenze, calendari, risorse, costi e traguardi.

```mermaid
flowchart LR
    A["Piano di consegna del progetto"] --> B["Attività e suddivisione del perimetro"]
    B --> C["Durate, calendari, risorse e costi"]
    C --> D["Dipendenze e sequenziamento"]
    D --> E["Cronologia del cronoprogramma calcolato"]
    E --> F["Pietre miliari, percorso critico, margine, istogrammi, curve e flusso di cassa"]
```

La timeline grafica è utile perché le persone possono vedere il lavoro. La rete logica è utile perché il software può calcolare il lavoro. Insieme, permettono al palinsesto di diventare sia uno strumento di comunicazione che uno strumento di controllo.

## Ciò che alimenta il cronoprogramma

Una pianificazione è affidabile tanto quanto le informazioni utilizzate per costruirla. In Primavera P6, il palinsesto è alimentato da diversi input importanti.

Il primo input è l'elenco delle attività. Le attività suddividono il progetto in parti di lavoro gestibili. Ogni attività dovrebbe essere sufficientemente chiara da poter essere pianificata, classificata e misurata.

Il secondo input è la durata deterministica. Questo è l'orario di lavoro pianificato necessario per completare ciascuna attività. La durata dovrebbe riflettere il metodo di esecuzione, le ipotesi di produttività, le dimensioni dell’equipaggio, l’accesso, i vincoli sul posto di lavoro e le condizioni del progetto.

Il terzo input è la logica delle dipendenze. Le dipendenze spiegano come le attività si relazionano tra loro. Potrebbe essere necessario terminare un'attività prima che ne inizi un'altra. Due attività possono iniziare insieme. Potrebbe essere necessario allineare due finiture. Queste relazioni creano la rete CPM.

Il quarto input è il sequenziamento. Il sequenziamento è l'ordine pratico di esecuzione. Considera la costruibilità, il flusso di progettazione, i tempi di approvvigionamento, l'accesso, la logica di messa in servizio, la strategia di consegna e le priorità del cliente.

Il quinto input riguarda le risorse e i costi. Il caricamento delle risorse consente alla pianificazione di mostrare la domanda di manodopera, attrezzature e materiale nel tempo. Il caricamento dei costi consente alla pianificazione di supportare il flusso di cassa, il valore maturato e le previsioni finanziarie.

Quando questi input sono completi e realistici, la pianificazione può produrre output utili.

## Cosa ci dice il cronoprogramma

Un cronoprogramma ben costruito indica la durata complessiva del progetto. Mostra le tappe fondamentali del completamento pianificato e i risultati finali intermedi. Produce istogrammi delle risorse che mostrano quando la domanda di manodopera o attrezzature aumenta e diminuisce. Supporta curve di progresso, curve di flusso di cassa, reporting sul valore maturato e pianificazione preventiva.

Ancora più importante, identifica il percorso critico o il percorso più lungo. Questa è la catena di lavoro che guida la conclusione del progetto. Se le attività su quel percorso slittano, la data di completamento del progetto potrebbe slittare. Ecco perché la logica è così importante. Senza buone dipendenze, il percorso critico potrebbe non mostrare i reali driver del progetto.

Margine è un altro output importante. Margine indica quanta flessibilità ha un'attività prima che influenzi un'altra attività o la fine del progetto. Ma il margine ha senso solo quando la rete di pianificazione è completa. Se le attività mancano di logica, il galleggiamento può sembrare migliore o peggiore della realtà.

## Perché la logica rende credibile la sequenza temporale

È qui che diventa importante la metrica "Attività che iniziano alla data di aggiornamento senza logica determinante".

La Data Data in P6 è il confine tra la performance effettiva e la previsione. Tutto ciò che precede la data di aggiornamento dovrebbe rappresentare ciò che è già accaduto. Tutto ciò che segue la data di aggiornamento dovrebbe rappresentare il piano da ora in poi.

Quando le attività iniziano esattamente alla Data Data senza alcuna logica che le guidi, la pianificazione invia un segnale di avviso. Potrebbe sembrare che il lavoro sia pronto per iniziare immediatamente, ma il cronoprogramma potrebbe non essere in grado di spiegare il motivo. Potrebbe non esserci alcun predecessore che dimostri che l'area è disponibile, nessun collegamento alla consegna del materiale, nessun legame con l'approvazione del progetto, nessun collegamento con il rilascio dell'ispezione e nessuna logica derivante dal lavoro precedente.

Ciò è importante perché un cronoprogramma non dovrebbe semplicemente collocare il lavoro in una data. Dovrebbe spiegare il percorso fino a quella data.

Se un'attività inizia alla data di aggiornamento perché tutto il lavoro precedente richiesto è stato completato e la logica supporta l'inizio, la data è difendibile. Se inizia da lì perché l'attività è aperta, non guidata, vincolata o scarsamente aggiornata, la data è debole. Il team di progetto può ritenere che il lavoro sia pronto quando le reali condizioni abilitanti non sono state modellate.

## Un esempio pratico

Immagina una pianificazione del progetto con una data di aggiornamento pari al 1 giugno. Dopo l'aggiornamento, dal 1° giugno inizieranno diverse attività:

- Installare la passerella portacavi nell'area B.
- Avviare il test della pressione del tubo.
- Iniziare l'allineamento dell'attrezzatura.
- Mobilitare il personale addetto all'isolamento.

A prima vista, lo sguardo appare occupato e pronto. Ma quando il pianificatore rivede la logica, il problema diventa chiaro. L'installazione della passerella portacavi non è legata alla consegna del materiale. Il test di pressione non è collegato al completamento delle tubazioni. All'allineamento dell'attrezzatura manca il predecessore per il completamento meccanico. La mobilitazione delle squadre di isolamento non ha un predecessore di accesso-rilascio.

Il cronoprogramma mostra il lavoro alla Data Data, ma non spiega il motivo per cui il lavoro può iniziare. Questa non è una tabella di marcia affidabile. È un elenco di intenzioni a breve termine.

La soluzione consiste nell'aggiungere o correggere la logica CPM reale. Se la consegna del materiale guida l'installazione della passerella portacavi, collegarla. Se il completamento delle tubazioni determina il test della pressione, collegarlo. Se il rilascio dell'accesso determina l'isolamento, modellare tale condizione. Dopo il ricalcolo, alcune attività potrebbero ancora iniziare in prossimità della Data Data, ma ora la pianificazione può spiegarne il motivo.

## Cosa dovrebbe fare un buon cronoprogramma

Una buona pianificazione dovrebbe aiutare il team a vedere il piano, testarlo e gestirlo.

Dovrebbe mostrare cosa è necessario fare. Dovrebbe spiegare l'ordine di lavoro. Dovrebbe identificare chi deve agire e quando. Dovrebbe rivelare il percorso critico. Dovrebbe supportare la pianificazione delle risorse, la misurazione dei progressi, la previsione del flusso di cassa e il reporting del PMO.

Dovrebbe anche rendere visibili i punti deboli. Logica mancante, vincoli rigidi, date obsolete, inizi aperti, finiture aperte e raggruppamento di attività alla Data Data non sono solo problemi tecnici. Influenzano il modo in cui il team di progetto comprende la preparazione, il rischio e il controllo.

## Conclusione

Una pianificazione è il piano di consegna del progetto espresso come tempo, logica e lavoro misurabile. È una tabella di marcia, un modello di calcolo e uno strumento di comunicazione.

Se costruito bene, dice al team di progetto cosa deve accadere, quando deve accadere e perché le date sono credibili. Quando le attività iniziano alla Data Data senza alcuna logica guida, tale credibilità viene indebolita. Il cronoprogramma smette di spiegare il piano e inizia a indovinare il passaggio successivo.

Per questo motivo, le revisioni della qualità del cronoprogramma dovrebbero sempre porre una semplice domanda: la pianificazione spiega perché il lavoro inizia quando inizia? Se la risposta è sì, il cronoprogramma sta facendo il suo lavoro. Se la risposta è no, la tabella di marcia necessita di più logica prima di poter essere considerata attendibile.
## Contenuti correlati
- [Attività che iniziano alla data di aggiornamento senza alcuna logica guida: perché questa metrica di pianificazione è importante - Panoramica](../../metrics/01_activities_starting_in_dd_with_no_logic_driving/02_guide_template.md)
- [Logica robusta](../02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
