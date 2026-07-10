---
title: "Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen"
seo_title: "Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen - Primavera P6"
meta_description: "Erklärt, warum Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen"
  - "Primavera P6 Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-blog-article-remaining-duration-zero-status-not-completed-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/11_remaining_duration_zero_status_not_completed/01_overview_template.md"
  - "09_metrics_de/11_remaining_duration_zero_status_not_completed/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/11_remaining_duration_zero_status_not_completed/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen

## Titel

Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die Primavera P6-Fortschrittsaktualisierungen validieren.

## Öffnungshaken

Wenn eine Aktivität keine verbleibende Dauer hat, bedeutet der Terminplan, dass keine Zeit mehr vorhanden ist, um sie abzuschließen. Wenn dieselbe Aktivität nicht als „Abgeschlossen“ markiert ist, muss die Aktualisierung beachtet werden.

## Einführung

Aktualisierungen des Primavera P6-Terminplans basieren auf konsistenten Statusdaten. Die verbleibende Dauer zeigt an, wie viel Zeit noch benötigt wird, um eine Aktivität abzuschließen. Der Aktivitätsstatus zeigt an, ob die Aktivität „Nicht gestartet“, „In Bearbeitung“ oder „Abgeschlossen“ ist.

Wenn die verbleibende Dauer gleich 0 ist, der Status aber nicht „Abgeschlossen“ lautet, stimmen diese Felder nicht überein. Die Aktivität ist möglicherweise abgeschlossen, es fehlt jedoch ein Ist-Ende, oder es verbleiben noch Arbeiten, die jedoch fälschlicherweise auf die verbleibende Dauer von Null aktualisiert wurden.

Diese Metrik identifiziert Aktivitäten mit der verbleibenden Dauer = 0 und dem Aktivitätsstatus <> Abgeschlossen. Das Ziel sind null ungelöste Aktivitäten.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob die verbleibende Zeit einer Aktivität mit ihrem Abschlussstatus übereinstimmt. Wenn keine verbleibende Dauer vorhanden ist, sollte die Aktivität normalerweise abgeschlossen sein und ein tatsächliches Enddatum haben.

Wenn die Aktivität noch „In Bearbeitung“ ist, sollte sie normalerweise noch eine gewisse Restdauer haben, es sei denn, die Arbeit wird im selben Update abgeschlossen. Wenn „Nicht gestartet“ und eine verbleibende Dauer von 0 angezeigt werden, handelt es sich normalerweise um ein klares Statusproblem.

Ein hohes Ergebnis deutet darauf hin, dass beim Aktualisierungsprozess möglicherweise tatsächliche Abschlüsse fehlen, die verbleibende Dauer falsch ist, Probleme mit dem importierten Status vorliegen oder manuelle Aktualisierungen inkonsistent sind.

## Warum dieses Thema wichtig ist

Die Statuskonsistenz wirkt sich auf Terminplanberichte, Vorausplanung, Earned Value, Fortschrittskurven und Managemententscheidungen aus.

Wenn Aktivitäten keine verbleibende Dauer haben, aber nicht abgeschlossen werden, kann es sein, dass der Terminplan die verbleibende Arbeit zu niedrig angibt oder dass abgeschlossene Arbeiten nicht ordnungsgemäß abgeschlossen werden. In jedem Fall wird das Update weniger zuverlässig.

Dies ist besonders wichtig, bevor Sie Berichte an Kunden, PMO-Teams oder die Projektleitung weitergeben.

## Häufige Ursachen für schlechte Ergebnisse

- Bei abgeschlossenen Aktivitäten fehlt der tatsächliche Abschluss
- Verbleibende Dauer wurde versehentlich auf 0 gesetzt
- Der Aktivitätsstatus wurde nicht in „Abgeschlossen“ geändert
- Fortschritt ohne Validierung aus einem anderen System importiert
- Manueller Update-Workflow nicht abgeschlossen
- Meilensteine ​​oder besondere Aktivitätsarten wurden nicht sorgfältig geprüft
- Update-Abschaltprozess nicht befolgt

## So verbessern Sie das Ergebnis

### 1. Bestätigen Sie den tatsächlichen Aktivitätsstatus

Überprüfen Sie zunächst, ob die Arbeiten tatsächlich abgeschlossen sind. Nutzen Sie Erfahrungsberichte, Disziplinaktualisierungen, Inspektionsaufzeichnungen oder die Bestätigung des Paketeigentümers.

Wenn die Arbeit abgeschlossen ist, sollte die Aktivität korrekt geschlossen werden. Wenn die Arbeit nicht abgeschlossen ist, sollte die verbleibende Dauer wiederhergestellt werden.

### 2. Korrigieren Sie abgeschlossene Aktivitäten

Geben Sie für abgeschlossene Arbeiten das tatsächliche Enddatum ein und markieren Sie die Aktivität als abgeschlossen. Bestätigen Sie, dass die Fortschrittswerte und die verbleibende Dauer mit dem Projektaktualisierungsverfahren übereinstimmen.

Dadurch bleiben abgeschlossene Aktivitätslisten, Fortschrittsberichte und Earned Valueausgaben konsistent.

### 3. Korrigieren Sie unvollständige Aktivitäten

Stellen Sie für unvollständige Arbeiten eine realistische Restdauer wieder her. Behalten Sie die Aktivität je nach aktuellem Status als „In Bearbeitung“ oder „Nicht gestartet“ bei.

Berechnen Sie nach Korrekturen den Terminplan neu und führen Sie die Metrik erneut aus, um zu bestätigen, dass die Inkonsistenz behoben ist.

## Beispielszenario

Eine Terminplanaktualisierung zeigt „Komplette Schalttafelverkabelung“ mit verbleibender Dauer = 0, aber der Aktivitätsstatus lautet immer noch „In Bearbeitung“. Die Aktivität hat einen tatsächlichen Start, aber kein Ist-Ende.

Der Planer prüft den Stromleiter und bestätigt, dass die Arbeiten zwei Tage vor dem Datentermin abgeschlossen sind. Die Aktualisierung war unvollständig, da die verbleibende Dauer auf Null reduziert wurde, das tatsächliche Ende jedoch nicht eingegeben wurde.

Der Planer gibt das tatsächliche Ende ein und markiert die Aktivität als abgeschlossen. Die Aktivität entspricht jetzt dem Feldstatus und die Fortschrittsberichte sind sauberer.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik durch und identifizieren Sie betroffene Aktivitäten.
- Tage 2–3: Bestätigen Sie den Fertigstellungsstatus mit den verantwortlichen Eigentümern.
- Tage 4–5: Korrigieren Sie das tatsächliche Ende, den Aktivitätsstatus oder die verbleibende Dauer.
- Tag 6: Überprüfen Sie Berichte und Earned Valueergebnisse.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie die Annahme, dass die verbleibende Dauer = 0 immer bedeutet, dass die Aktivität abgeschlossen ist. Bestätigen Sie zunächst den Feldstatus.

Vermeiden Sie es, Aktivitäten ohne genaues tatsächliches Enddatum als „Abgeschlossen“ zu markieren.

Vermeiden Sie es, die verbleibende Dauer wiederherzustellen, ohne zu prüfen, ob die Aktivität tatsächlich abgeschlossen wurde.

## Wichtige Erkenntnisse

- Verbleibende Dauer = 0 und Status <> Abgeschlossen ist eine Statusinkonsistenz.
- Das Ziel sind null ungelöste Aktivitäten.
- Abgeschlossene Arbeiten sollten den Status „Ist abgeschlossen“ und „Abgeschlossen“ haben.
- Unvollständige Arbeiten sollten eine realistische Restdauer haben.
- Update-Importe und manuelle Workflows sollten validiert werden.

## Abschluss

Diese Metrik hilft dabei, ein häufiges Problem mit der Aktualisierungsqualität zu erkennen. Es hält die verbleibende Arbeit, die tatsächlichen Termine und den Aktivitätsstatus aufeinander abgestimmt, sodass der Terminplan eine konsistente Geschichte vermittelt.

Die Verwaltung dieser Metrik verbessert die Berichtsgenauigkeit, die Fortschrittssicherheit und die Zuverlässigkeit von Primavera P6-Terminplanaktualisierungen.

## Aufruf zum Handeln

Überprüfen Sie Aktivitäten mit der Restdauer = 0 und dem Status „Nicht abgeschlossen“ bei Ihrer nächsten Terminplanaktualisierung. Bestätigen Sie den tatsächlichen Status jeder Aktivität und korrigieren Sie dann das tatsächliche Ende, den Aktivitätsstatus oder die verbleibende Dauer, bevor Sie Berichte ausgeben.
## Verwandte Inhalte
- [Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen - Überblick](01_overview_template.md)
- [Aktivitäten mit verbleibender Dauer 0 und Status nicht abgeschlossen - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
