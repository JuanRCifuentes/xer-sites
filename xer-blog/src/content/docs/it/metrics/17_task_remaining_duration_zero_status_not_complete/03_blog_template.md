---
title: "La durata rimanente dell'attività è zero mentre lo stato non è completo"
seoTitle: "La durata rimanente dell'attività è zero mentre lo stato non è completo - Primavera P6"
description: "Spiega perché La durata rimanente dell'attività è zero mentre lo stato non è completo influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "La durata rimanente dell'attività è zero mentre lo stato non è completo"
  - "Primavera P6 La durata rimanente dell'attività è zero mentre lo stato non è completo"
  - "qualità del cronoprogramma"
  - "Primavera P6"
  - "controllo progetto"
  - "logica CPM"
  - "revisione del cronoprogramma"
slug: "it/blog/task-remaining-duration-zero-status-not-complete-primavera-p6"
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
primarySearchIntent: "Spiega perché La durata rimanente dell'attività è zero mentre lo stato non è completo influisce sulla logica CPM, sul margine e sull’affidabilità del cronoprogramma in Primavera P6."
relatedMetrics:
  - "11_metrics_it/17_task_remaining_duration_zero_status_not_complete/02_guide_template.md"
relatedBlogs:
  - "11b_blogs_it/01_WHAT A SCHEDULE IS/01_blog.md"
  - "11b_blogs_it/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/17_task_remaining_duration_zero_status_not_complete/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

La Durata rimanente è uno dei campi di stato più importanti in un aggiornamento Primavera P6. Indica al cronoprogramma quanto tempo è ancora necessario per completare l'attività. Quando una normale attività dell'attività ha una Durata rimanente pari a 0, il messaggio è semplice: non c'è più tempo per eseguirla. Se la stessa attività non è contrassegnata come Completata, la pianificazione racconta due storie diverse contemporaneamente.

Questa metrica identifica le attività dell'attività in cui la Durata rimanente è 0 ma lo stato dell'attività non è Completo. Si tratta di una versione mirata di un controllo più ampio sulla qualità dello stato perché le attività delle attività sono i luoghi in cui questa incoerenza può influenzare direttamente i piani di lavoro, la rendicontazione dei progressi, il valore maturato e le revisioni prospettiche.

Per un'attività normale, una durata rimanente pari a zero di solito significa che il lavoro è terminato. L'attività deve avere una Fine effettiva, uno stato completato e valori di avanzamento che corrispondano alla procedura di aggiornamento del progetto. Se l'attività è ancora In corso o Non avviata, la Durata rimanente dovrebbe normalmente essere maggiore di 0 perché è ancora prevista una certa quantità di lavoro.

Questo problema si verifica spesso durante i cicli di aggiornamento intensi. Una squadra sul campo può segnalare che un'attività è stata effettivamente svolta, quindi lo schedulatore riduce la Durata rimanente a 0 ma non inserisce la Fine effettiva. Un file di importazione potrebbe aggiornare la Durata rimanente senza aggiornare lo Stato attività. Un aggiornamento manuale può impostare valori di avanzamento ma lasciare l'attività nello stato sbagliato. Il risultato è un'attività che sembra terminata dal punto di vista della durata ma incompleta dal punto di vista dello stato.

Questa incoerenza è importante. Un'attività senza durata rimanente potrebbe interrompere il lavoro futuro come previsto. Potrebbe scomparire dall'attenzione futura anche se non è formalmente completo. Potrebbe distorcere la rendicontazione del valore maturato se i progressi e il completamento non sono allineati. Potrebbe anche creare confusione durante le revisioni del cliente o del PMO perché la pianificazione non può rispondere chiaramente se l'attività è terminata.

La recensione dovrebbe iniziare con un semplice layout P6. Includere ID attività, Nome attività, WBS, Tipo attività, Stato attività, Inizio effettivo, Fine effettiva, Durata originale, Durata rimanente, Durata al completamento, Tipo di completamento percentuale, Percentuale di completamento attività, Inizio, Fine e Margine totale. Filtra per le attività dell'attività in cui la Durata rimanente è uguale a 0 e lo Stato attività non è Completo.

Ogni attività contrassegnata deve essere esaminata con il proprietario responsabile. Il lavoro è effettivamente completo? In caso affermativo, l'attività dovrebbe normalmente essere contrassegnata come Completata e avere la corretta Fine effettiva. Lo schedulatore dovrebbe inoltre confermare che la percentuale di completamento e la durata rimanente siano in linea con le regole di avanzamento del progetto.

Se il lavoro non è completo, la soluzione è diversa. L'attività deve mantenere lo stato corretto, ad esempio In corso o Non avviata, ma la Durata rimanente deve essere ripristinata su un valore valido. Tale valore dovrebbe riflettere il lavoro rimanente alla data di aggiornamento, non una data di fine prevista o una preferenza di reporting.

Considera un'attività chiamata "Installa dispositivi di allarme antincendio". Il rapporto sul campo indica che l'installazione è quasi completata e il pianificatore imposta la Durata rimanente su 0. Ma i test hanno rilevato che diversi dispositivi necessitano ancora di correzione e l'attività non è stata effettivamente completata entro la data di aggiornamento. In questo caso, l'attività non deve avere una durata rimanente pari a zero. Lo sforzo rimanente dovrebbe essere stimato e inserito in modo che il cronoprogramma continui a prevedere il lavoro non completato.

Consideriamo ora un'attività chiamata "Versare la soletta del livello 3". Il getto del calcestruzzo è stato completato prima della data di aggiornamento, ma l'attività risulta ancora In corso e non ha una Fine effettiva. In questo caso la durata residua pari a 0 è probabilmente corretta, ma l'aggiornamento dello stato è incompleto. Il pianificatore deve inserire la Fine effettiva e contrassegnare l'attività come completata.

La soglia target per questa metrica dovrebbe essere pari a zero attività di attività irrisolte. La parola irrisolto è importante. Alcuni elementi potrebbero richiedere una conferma sul campo prima della correzione, ma non dovrebbero rimanere inspiegati in un cronoprogramma di reporting. Ogni elemento deve essere corretto, assegnato a un proprietario o documentato se esiste un motivo di aggiornamento temporaneo.

Questa metrica aiuta anche a migliorare la disciplina degli aggiornamenti. Se lo stesso problema si verifica a ogni ciclo, il team deve rivedere le mappature delle importazioni, i moduli di aggiornamento, le istruzioni per la segnalazione sul campo e i controlli prima del problema della pianificazione. Gli utenti potrebbero impostare la Durata rimanente su 0 perché sembra il modo più veloce per mostrare i progressi, senza completare correttamente l'attività.

La pulizia di questa metrica rende più facile fidarsi della pianificazione. Allinea la durata rimanente, lo stato dell'attività, le date di fine effettive e i valori di avanzamento. Ancora più importante, aiuta il team di progetto a prendere decisioni migliori su quale lavoro è veramente completo e quale lavoro necessita ancora di attenzione.
## Contenuti correlati
- [La durata rimanente dell'attività è zero mentre lo stato non è completo - Guida al miglioramento](02_guide_template.md)
- [Cos'è un cronoprogramma](../../11b_blogs_it/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica robusta](../../11b_blogs_it/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
