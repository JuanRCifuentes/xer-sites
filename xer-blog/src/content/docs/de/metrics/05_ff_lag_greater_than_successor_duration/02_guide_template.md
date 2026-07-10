---
title: "FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist - Verbesserungsleitfaden"
seo_title: "FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist - Verbesserungsleitfaden - Primavera P6"
meta_description: "Lernen Sie, FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist in Primavera P6 mit Logikprüfung, Validierung und erneuter Bewertung zu korrigieren."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist"
  - "Primavera P6 FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-improvement-guide-ff-lag-greater-than-successor-duration-primavera-p6"
language: "de"
content_type: "metric"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Lernen Sie, FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist in Primavera P6 mit Logikprüfung, Validierung und erneuter Bewertung zu korrigieren."
related_metrics:
  - "09_metrics_de/05_ff_lag_greater_than_successor_duration/01_overview_template.md"
  - "09_metrics_de/05_ff_lag_greater_than_successor_duration/03_blog_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/05_ff_lag_greater_than_successor_duration/02_guide_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist - Verbesserungsleitfaden

## Zweck

Dieser Leitfaden hilft Planern dabei, Finish-to-Finish-Beziehungen zu überprüfen und zu korrigieren, wenn die Verzögerung größer ist als die Dauer der Nachfolgeaktivität. Es unterstützt eine klarere CPM-Logik, indem es übermäßige FF-Verzögerungen durch Beziehungslogik oder sichtbare Aktivitäten ersetzt, die den tatsächlichen Arbeitsablauf besser darstellen.

## Bevor Sie beginnen

Sammeln Sie die folgenden Informationen, bevor Sie Maßnahmen ergreifen:

- Aktuelles Bewertungsergebnis für diese Metrik.
- Liste der FF-Beziehungen, bei denen die Verzögerung größer ist als die Nachfolgerdauer.
- Vorgänger- und Nachfolger-Aktivitäts-IDs, Namen, WBS, Dauer, Kalender und Status.
- Beziehungsverzögerung, Beziehungstyp und alle damit verbundenen Einschränkungen.
- Terminplanberechnungseinstellungen und Kalenderbasis für Verzögerungen.
- Feld-, Technik-, Beschaffungs-, Genehmigungs- oder Übergabelogik, die die beabsichtigte Abhängigkeit erläutert.

## Verstehen Sie Ihr Ergebnis

Ein starkes Ergebnis sind keine ungelösten FF-Beziehungen, bei denen die Verzögerung die Nachfolgedauer übersteigt.

Ein akzeptables Ergebnis kann dokumentierte Ausnahmen umfassen, diese sollten jedoch selten sein. Eine lange FF-Verzögerung weist häufig darauf hin, dass der Beziehungstyp nicht mit der modellierten Abhängigkeit übereinstimmt.

Ein schwaches Ergebnis bedeutet, dass der Terminplan mehrere End-to-End-Links enthält, bei denen das Nachfolge-Ende um mehr Zeit als die Dauer der Nachfolgeaktivität verzögert ist. Dadurch können startgesteuerte Logik, Wartezeiten oder fehlende Zwischenaktivitäten verborgen bleiben.

## Verbesserungsziel

Das Ziel sind 0 ungelöste FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgedauer ist.

Das Ziel besteht darin, zu bestätigen, ob jede Beziehung FF bleiben, in FS- oder SS-Logik konvertiert werden soll, ob die Verzögerung reduziert werden soll oder ob sie als gültige Ausnahme dokumentiert werden soll.

## Aktionsplan

### Schritt 1: Identifizieren Sie das Hauptproblem

Erstellen Sie ein P6-Layout oder einen Export, das FF-Beziehungen auflistet, bei denen die Verzögerung größer als die Nachfolgerdauer ist. Geben Sie die Vorgänger- und Nachfolger-Aktivitäts-ID, den Aktivitätsnamen, den PSP, die ursprüngliche Dauer, die verbleibende Dauer, den Beziehungstyp, die Verzögerung, den Kalender, den Gesamtpuffer und den Aktivitätsstatus an.

Überprüfen Sie jede Beziehung und fragen Sie:

- Warum kommt der Nachfolger mit so langer Verzögerung?
- Hängt die Nachfolge tatsächlich vom Abschluss des Vorgängers oder von einer anderen Start- oder Übergabebedingung ab?
- Ist die Verzögerung größer als die ursprüngliche Dauer des Nachfolgers, die verbleibende Dauer oder beides?
- Wird die Verzögerung zur Modellierung der Überprüfungszeit, der Aushärtung, der Lieferung, der Genehmigung, des Zugriffs oder einer anderen tatsächlichen Wartezeit verwendet?
- Würde eine FS- oder SS-Beziehung die Abhängigkeit deutlicher machen?

```mermaid
flowchart TD
    A["FF-Beziehung mit Verzögerung größer als Nachfolgerdauer"] --> B{"Ist die Abhängigkeit wirklich fertig?"}
    B -- "NEIN" --> C["Durch gültige FS- oder SS-Logik ersetzen"]
    B -- "Ja" --> D{"Ist die Verzögerung gerechtfertigt und messbar?"}
    D -- "NEIN" --> E["Reduzieren oder beseitigen Sie Verzögerungen"]
    D -- "Ja" --> F["Dokument genehmigte Ausnahme"]
    C --> G["Neu berechnen und neu bewerten"]
    E --> G
    F --> G
```

### Schritt 2: Wenden Sie die empfohlenen Fixes an

Wenn der Nachfolger beginnen soll, nachdem der Vorgänger fertig ist, ersetzen Sie die FF-Beziehung durch eine FS-Beziehung. Wenn der Nachfolger starten kann, nachdem der Vorgänger gestartet ist oder einen definierten Fortschrittspunkt erreicht, verwenden Sie SS-Logik.

Wenn die Beziehung wirklich auf dem Ende basiert, überprüfen Sie den Verzögerungswert. Reduzieren Sie übermäßige Verzögerungen, wenn sie als grober Platzhalter verwendet oder von kopierter Logik übernommen wurden. Wenn die Verzögerung eine echte Wartezeit darstellt, bestätigen Sie, dass die Einheit, der Kalender und die Erklärung korrekt sind.

Vermeiden Sie lange Verzögerungen als Ersatz für Aktivitäten, die im Terminplan sichtbar sein sollten. Wenn es sich bei der Verzögerung um eine Überprüfung, Behebung, Lieferung, Mobilisierung, Genehmigung oder Abschlusszeit handelt, sollten Sie die Modellierung dieser Arbeit als separate Aktivität in Betracht ziehen.

### Schritt 3: Häufige Blocker entfernen

Zu den häufigsten Blockern gehören kopierte Logik aus früheren Terminplänen, versteckte Wartezeiten, Kalenderverwirrung und der Druck, das Netzwerk einfach zu halten. Beheben Sie diese, indem Sie die beabsichtigte Abhängigkeit mit dem verantwortlichen Eigentümer bestätigen.

Ein anderer Blocker betrachtet Lag als harmlos. Lange Verzögerungen können schwer zu überprüfen sein, Risiken verbergen und die Verzögerungsanalyse erschweren, da die Wartezeit nicht als Aktivität sichtbar ist.

### Schritt 4: Validieren Sie die Änderungen

Berechnen Sie den Terminplan nach Korrekturen neu. Führen Sie die Metrik erneut aus und bestätigen Sie, dass jedes verbleibende Element entweder korrigiert oder als genehmigte Ausnahme dokumentiert ist.

Überprüfen Sie den Gesamtbestand, den längsten Pfad, den kritischen Pfad und die kurzfristigen Meilensteine. Wenn sich durch Beziehungsänderungen wichtige Termine verschieben, teilen Sie das Ergebnis dem Projektkontrollleiter oder dem PMO-Prüfer mit.

## Verbesserungsplan

### Tag 1: Überprüfung und Diagnose

Führen Sie die Metrik aus, bestätigen Sie die Liste der betroffenen Beziehungen und unterteilen Sie die Elemente in falschen Beziehungstyp, übermäßige Verzögerung, versteckte Aktivität, Kalenderproblem und mögliche Ausnahme.

### Tage 2–3: Implementieren Sie vorrangige Maßnahmen

Korrigieren Sie zunächst kritische und nahezu kritische Beziehungen. Konvertieren Sie die FF-Logik gegebenenfalls in FS oder SS, reduzieren Sie ungerechtfertigte Verzögerungen und dokumentieren Sie gültige Ausnahmen.

### Tage 4–5: Überwachen Sie die ersten Ergebnisse

Berechnen Sie den Terminplan neu und überprüfen Sie die Bewegung in Pufferzeit, längstem Pfad und Meilensteindaten.

### Tag 6: Letzte Anpassungen

Klären Sie verbleibende unsichere Punkte mit der zuständigen Disziplin, dem Paketeigentümer oder dem Bauleiter.

### Tag 7: Neubewertung und Vergleich

Führen Sie die Bewertung erneut durch und vergleichen Sie das Ergebnis mit dem Zielschwellenwert.

## Fortschritt verfolgen

Verwenden Sie einen einfachen Tracker, um Korrekturen und Genehmigungen zu verwalten.

| Datum | Maßnahmen ergriffen | Erwartete Auswirkungen | Ergebnis / Beobachtung | Nächster Schritt |
| --- | --- | --- | --- | --- |
| [Datum] | Überprüfte FF-Verzögerung größer als Nachfolgedauer | Identifizieren Sie schwache oder unklare Logik | [Beobachtetes Ergebnis] | Korrekturen zuordnen |
| [Datum] | Konvertierte Beziehung zu FS oder SS | Verbessern Sie die Klarheit der CPM-Logik | [Beobachtetes Ergebnis] | Terminplan neu berechnen |
| [Datum] | Reduzierte oder dokumentierte Verzögerung | Verbessern Sie die Rückverfolgbarkeit von Bewertungen | [Beobachtetes Ergebnis] | Metrik neu bewerten |

## Wenn sich die Ergebnisse nicht verbessern

Wenn sich die Ergebnisse nicht verbessern, prüfen Sie, ob dieselben Beziehungsmuster in einem bestimmten PSP-Bereich, einer bestimmten Disziplin oder einem kopierten Terminplanabschnitt wiederholt werden. Wiederholte Erkenntnisse könnten darauf hindeuten, dass das Team FF-Lag als Standardabkürzung verwendet, anstatt echte Abhängigkeiten zu modellieren.

Eskalieren Sie ungelöste Punkte, wenn sie kritische, nahezu kritische, vertragliche, beschaffungs-, genehmigungs-, inbetriebnahme- oder übergabebezogene Arbeiten betreffen.

## Wartung

Überprüfen Sie diese Metrik bei jeder Terminplanaktualisierung und vor der Basisgenehmigung. Seien Sie besonders aufmerksam, wenn Sie einen kopierten Terminplan entwickeln, eine neue Reihenfolge festlegen, eine Wiederherstellungsplanung vornehmen oder den Umfang erheblich ändern.

## Zusammenfassende Checkliste

- [ ] Aktuelles Ergebnis überprüft
- [ ] Zielschwelle bestätigt
- [ ] Hauptproblem identifiziert
- [ ] FF-Beziehungen überprüft
- [ ] Übermäßige Verzögerung korrigiert oder gerechtfertigt
- [ ] Bei Bedarf wurden FS- oder SS-Ersatzteile eingesetzt
- [ ] Gegebenenfalls werden versteckte Arbeiten modelliert
- [ ] Terminplan neu berechnet
- [ ] Ergebnisse überwacht
- [ ] Beurteilung wiederholt
- [ ] Nächste Schritte dokumentiert
## Verwandte Inhalte
- [FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist - Überblick](01_overview_template.md)
- [Blog-Vorlage](03_blog_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
