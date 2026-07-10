---
title: "Aktivitäten mit Restdauer 0 und Fortschritt nicht 100 %"
seoTitle: "Aktivitäten mit Restdauer 0 und Fortschritt nicht 100 % - Primavera P6"
description: "Erklärt, warum Aktivitäten mit Restdauer 0 und Fortschritt nicht 100 % CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Aktivitäten mit Restdauer 0 und Fortschritt nicht 100 %"
  - "Primavera P6 Aktivitäten mit Restdauer 0 und Fortschritt nicht 100 %"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/remaining-duration-zero-progress-not-100-primavera-p6"
language: "de"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primarySearchIntent: "Erklärt, warum Aktivitäten mit Restdauer 0 und Fortschritt nicht 100 % CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/10_remaining_duration_zero_progress_not_100/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/10_remaining_duration_zero_progress_not_100/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titel

Aktivitäten mit Restdauer 0 und Fortschritt nicht 100 %

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die Primavera P6-Fortschrittsaktualisierungen validieren.

## Öffnungshaken

Wenn eine Aktivität keine Restlaufzeit mehr hat, sollte sie normalerweise beendet werden. Wenn der Fortschritt derselben Aktivität unter 100 % liegt, sendet der Terminplan gemischte Signale.

## Einführung

Aktualisierungen des Primavera P6-Terminplans hängen von Informationen zum Bereinigungsstatus ab. Die verbleibende Dauer gibt dem Terminplan an, wie viel Zeit noch benötigt wird, um eine Aktivität abzuschließen. Der Fortschrittsprozentsatz teilt dem Team mit, wie viel Arbeit basierend auf der ausgewählten Methode „Prozent abgeschlossen“ erreicht wurde.

Wenn die verbleibende Dauer gleich 0 ist, der Fortschritt jedoch nicht 100 % beträgt, stimmen diese beiden Signale nicht überein. Die Aktivität ist möglicherweise abgeschlossen, es fehlt jedoch ein Ist-Ende, oder es verbleiben noch Arbeiten, die jedoch fälschlicherweise auf die verbleibende Dauer von Null aktualisiert wurden.

Diese Metrik identifiziert Aktivitäten mit einer verbleibenden Dauer = 0 und einem Fortschritt <> 100 %. Das Ziel sind null ungelöste Aktivitäten.

## Was dieser Parameter bedeutet

Dieser Parameter prüft die Konsistenz zwischen der verbleibenden Zeit und dem gemeldeten Fortschritt. Wenn eine Aktivität keine verbleibende Dauer hat, bedeutet das normalerweise, dass für die Aktivität keine Arbeit mehr übrig ist. In diesem Fall sollte der Fortschritt in der Regel 100 % betragen und die Aktivität den korrekten Abschlussstatus haben.

Das Ergebnis kann vom Fertigstellungsgrad der Aktivität abhängen. „Physischer Fertigstellungsgrad“, „Dauerprozentsatz abgeschlossen“ und „Einheitenprozentsatz abgeschlossen“ können sich unterschiedlich verhalten. Aus diesem Grund sollte bei der Überprüfung sowohl die verbleibende Dauer als auch die Methode zum Fertigstellungsgrad berücksichtigt werden.

Ein hohes Ergebnis deutet darauf hin, dass der Aktualisierungsprozess möglicherweise unvollständige tatsächliche Endtermine, falsche Restdauern oder inkonsistente Fortschrittseinträge aufweist.

## Warum dieses Thema wichtig ist

Statuskonsistenz ist wichtig, da Fortschrittsdaten in Terminplanberichte, Earned Value, Vorausplanung und Managemententscheidungen einfließen.

Wenn eine Aktivität keine verbleibende Dauer zu haben scheint, aber nicht abgeschlossen ist, kann es sein, dass die Prognose die verbleibende Arbeit zu niedrig angibt. Wenn eine Aktivität tatsächlich abgeschlossen ist, der Fortschritt jedoch unter 100 % bleibt, werden in den Berichten die abgeschlossenen Arbeiten unter Umständen zu niedrig ausgewiesen.

In beiden Fällen verringert sich das Vertrauen in die Terminplanaktualisierung.

## Häufige Ursachen für schlechte Ergebnisse

- Bei abgeschlossenen Aktivitäten fehlt der tatsächliche Abschluss
- Verbleibende Dauer wurde versehentlich auf 0 gesetzt
- Physischer Fertigstellungsgrad nicht aktualisiert
- Typ „Prozent abgeschlossen“ wurde missverstanden
- Fortschritt ohne Validierung aus einem anderen System importiert
- Aktivitäten, die inkonsistent als abgeschlossen markiert wurden
- Update-Abschaltprozess nicht befolgt

## So verbessern Sie das Ergebnis

### 1. Bestätigen Sie, ob die Arbeit abgeschlossen ist

Überprüfen Sie zunächst den Feldstatus. Wenn die Aktivität abgeschlossen ist, bestätigen Sie das tatsächliche Enddatum und setzen Sie den Fortschritt mithilfe des Projektaktualisierungsverfahrens auf 100 %.

Wenn die Arbeit nicht abgeschlossen ist, sollte die verbleibende Dauer der Aktivität normalerweise größer als 0 sein.

### 2. Überprüfen Sie den Typ „Prozent abgeschlossen“.

Überprüfen Sie, ob für die Aktivität „Physisch“, „Dauer“ oder „Abgeschlossene Einheiten“ verwendet wird. Die Korrektur sollte mit der Projektsteuerungsmethode übereinstimmen.

Wenn beispielsweise „Physischer Prozentsatz abgeschlossen“ verwendet wird, muss der Planer möglicherweise das Feld „Physischer Fortschritt“ manuell aktualisieren, selbst wenn die verbleibende Dauer Null erreicht hat.

### 3. Korrigieren Sie den Terminplanstatus

Geben Sie für abgeschlossene Arbeiten das tatsächliche Ende ein und bestätigen Sie, dass der Fortschritt 100 % beträgt. Stellen Sie bei unvollständiger Arbeit eine realistische verbleibende Dauer wieder her und aktualisieren Sie den Fortschritt basierend auf der ausgewählten Methode.

Berechnen Sie nach Korrekturen den Terminplan neu und führen Sie die Metrik erneut aus.

## Beispielszenario

Eine Terminplanaktualisierung zeigt „Kabeltrassen installieren“ mit verbleibender Dauer = 0 und physischem Prozentsatz abgeschlossen = 85 %. Die Aktivität hat einen tatsächlichen Start, aber kein Ist-Ende.

Der Planer spricht mit dem Außendiensttechniker und stellt fest, dass die Installation nicht abgeschlossen ist. Eine Crew benötigt noch drei Tage, um die Arbeit an der Mängelliste und die letzten Unterstützungen abzuschließen.

Der Planer setzt die verbleibende Dauer auf drei Tage zurück und hält den physischen Fertigstellungsgrad bei 85 %. Die Aktivität spiegelt nun sowohl die abgeschlossene Arbeit als auch den verbleibenden Aufwand wider.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik durch und identifizieren Sie betroffene Aktivitäten.
- Tage 2–3: Bestätigen Sie den Fertigstellungsstatus mit den verantwortlichen Eigentümern.
- Tage 4–5: Korrigieren Sie die Felder „Ist-Ende“, „Restdauer“ und „Fortschritt“.
- Tag 6: Überprüfen Sie Berichte und Earned Valueergebnisse.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie die Annahme, dass die verbleibende Dauer = 0 immer bedeutet, dass die Arbeit abgeschlossen ist. Bestätigen Sie zunächst den Status.

Vermeiden Sie es, den Fortschritt auf 100 % zu setzen, ohne zu prüfen, ob die Aktivität tatsächlich abgeschlossen ist.

Vermeiden Sie es, den Typ „Prozent abgeschlossen“ zu ignorieren. Die falsche Korrektur kann zu neuen Berichtsproblemen führen.

## Wichtige Erkenntnisse

- Verbleibende Dauer = 0 und Fortschritt <> 100 % ist eine Statusinkonsistenz.
- Das Ziel sind null ungelöste Aktivitäten.
- Überprüfen Sie „Ist-Ende“, „Restdauer“ und „Prozent abgeschlossen“ gemeinsam.
- Abgeschlossene Arbeiten sollten korrekt abgeschlossen werden.
- Unvollständige Arbeiten sollten eine realistische Restdauer haben.

## Abschluss

Diese Metrik hilft Planern, ein kleines, aber wichtiges Update-Problem zu erkennen. Das Problem ist nicht nur eine Zahl auf einem Bildschirm; Dies wirkt sich auf die Fertigstellungsberichte, die Prognosequalität und das Vertrauen in die Aktualisierung aus.

Durch die Verwaltung dieser Metrik bleibt der Aktivitätsstatus sauber und die Primavera P6-Berichte sind vertrauenswürdiger.

## Aufruf zum Handeln

Überprüfen Sie Aktivitäten mit einer verbleibenden Dauer = 0 und einem Fortschritt ungleich 100 % bei Ihrer nächsten Terminplanaktualisierung. Bestätigen Sie, ob jede Aktivität abgeschlossen ist, und korrigieren Sie dann das tatsächliche Ende, die verbleibende Dauer oder den Fortschritt nach Bedarf.
## Verwandte Inhalte
- [Aktivitäten mit Restdauer 0 und Fortschritt nicht 100 % - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
