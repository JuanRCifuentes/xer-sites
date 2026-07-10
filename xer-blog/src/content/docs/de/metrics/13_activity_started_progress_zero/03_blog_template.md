---
title: "Aktivitäten begannen mit 0 % Fortschritt in Primavera P6"
seoTitle: "Aktivitäten begannen mit 0 % Fortschritt in Primavera P6"
description: "Erklärt, warum Aktivitäten begannen mit 0 % Fortschritt in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Aktivitäten begannen mit 0 % Fortschritt in Primavera P6"
  - "Primavera P6 Aktivitäten begannen mit 0 % Fortschritt in Primavera P6"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/activity-started-progress-zero-primavera-p6"
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
primarySearchIntent: "Erklärt, warum Aktivitäten begannen mit 0 % Fortschritt in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/13_activity_started_progress_zero/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/13_activity_started_progress_zero/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titel

Aktivitäten begannen mit 0 % Fortschritt in Primavera P6

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die Primavera P6-Fortschrittsaktualisierungen validieren.

## Öffnungshaken

Wenn eine Aktivität als „Gestartet“ markiert ist, gibt der Terminplan an, dass die eigentliche Arbeit begonnen hat. Wenn der Fortschritt immer noch 0 % beträgt, werden die Prüfer natürlich fragen, was eigentlich begonnen hat.

## Einführung

Aktivitätsstatus und Fortschritt sollten eine konsistente Geschichte erzählen. In Primavera P6 hat eine gestartete Aktivität normalerweise ein tatsächliches Startdatum und einen gewissen Umfang des gemeldeten Fortschritts.

Wenn eine Aktivität gestartet wird, der Fortschritt aber weiterhin 0 % beträgt, ist die Aktualisierung des Terminplans möglicherweise unvollständig. Der tatsächliche Start ist möglicherweise falsch, der Fortschritt wurde möglicherweise nicht eingegeben oder der Typ „Prozent abgeschlossen“ stimmt möglicherweise nicht mit der Art und Weise überein, wie der Fortschritt gemessen wird.

Diese Metrik identifiziert Aktivitäten mit Aktivitätsstatus = Gestartet und Fortschritt = 0 %. Das Ziel sind null ungelöste Aktivitäten.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob eine gestartete Aktivität Fortschritte erzielt oder verzeichnet hat. Wenn die Arbeit tatsächlich begonnen hat, sollte das Projektteam normalerweise in der Lage sein, messbare Fortschritte zu melden.

Bei der Überprüfung sollte der Fertigstellungsgrad der Aktivität berücksichtigt werden. „Physischer Fertigstellungsgrad“, „Dauer-Prozent-Fertigstellung“ und „Einheiten-Prozent-Fertigstellung“ können jeweils unterschiedliche Aktualisierungsfelder erfordern.

Ein hohes Ergebnis deutet auf eine schwache Aktualisierungsdisziplin, fehlende Fortschrittsmengen, importierte Statusprobleme oder darauf hin, dass Aktivitäten vor Beginn der eigentlichen Arbeit als gestartet markiert wurden.

## Warum dieses Thema wichtig ist

Gestartete Aktivitäten mit einem Fortschritt von 0 % können das Vertrauen in die Aktualisierung verringern. Sie machen unklar, ob mit den Arbeiten tatsächlich begonnen wurde oder ob die Tätigkeit administrativ aufgenommen wurde.

Dies wirkt sich auf Fortschrittsberichte, Earned Value, Look-Ahead-Planung und PMO-Überprüfung aus. Es kann auch zu Verwirrung führen, wenn Teams Erfahrungsberichte mit dem P6-Terminplan vergleichen.

## Häufige Ursachen für schlechte Ergebnisse

- Ist-Start, der vor dem tatsächlichen Arbeitsbeginn eingegeben wurde
- Der Fortschrittswert wurde nach Arbeitsbeginn nicht aktualisiert
- Der physische Fertigstellungsgrad bleibt bei 0
- Dauer oder Einheitenfortschritt werden nicht wie erwartet berechnet
- In den importierten Statusdaten fehlen übereinstimmende Fortschrittswerte
- Verschiedene Teams verwenden unterschiedliche Definitionen von „gestartet“.
- Die Arbeiten begannen kurz vor dem Update-Cut-Off, ohne dass messbare Fortschritte erzielt wurden

## So verbessern Sie das Ergebnis

### 1. Bestätigen Sie, ob die Arbeit tatsächlich begonnen hat

Überprüfen Sie den Erfahrungsbericht, die Disziplinaktualisierung oder die Bestätigung des verantwortlichen Eigentümers. Wenn die Arbeit nicht tatsächlich begonnen hat, entfernen Sie „Ist-Start“ und setzen Sie die Aktivität auf „Nicht gestartet“ zurück.

Der tatsächliche Start sollte den tatsächlichen Beginn der Arbeit darstellen und nicht die Absicht, bald damit zu beginnen.

### 2. Aktualisieren Sie das Feld „Korrekter Fortschritt“.

Wenn die Arbeit begonnen hat, identifizieren Sie den Fertigstellungsgrad der Aktivität. Aktualisieren Sie dann das richtige Fortschrittsfeld.

Geben Sie unter „Physischer Fertigstellungsgrad“ den gemessenen physischen Fortschritt ein. Bestätigen Sie für die prozentuale Fertigstellung der Dauer, dass die verbleibende Dauer die geleistete Arbeit widerspiegelt. Bestätigen Sie für „Prozent abgeschlossene Einheiten“ die Aktualisierung der tatsächlichen Einheiten oder des Ressourcenfortschritts.

### 3. Dokumentieren Sie seltene Ausnahmen

Manchmal beginnt eine Aktivität direkt vor dem Update-Cut-Off und es wurden noch keine messbaren Fortschritte erzielt. Wenn das Projekt dies zulässt, dokumentieren Sie den Grund und gehen Sie im nächsten Update nach.

Diese Ausnahmen sollten selten sein. Wenn viele Aktivitäten mit einem Fortschritt von 0 % gestartet werden, muss der Aktualisierungsprozess überprüft werden.

## Beispielszenario

Bei einer Terminplanaktualisierung wird „Beleuchtungskörper installieren“ als „Begonnen“ mit eingegebenem „Ist-Start“ angezeigt, der physische Fertigstellungsgrad liegt jedoch bei 0 %.

Der Planer erkundigt sich beim Stromleiter und erfährt, dass die Mannschaft Material mobilisiert, aber vor dem Datentermin keine Vorrichtungen installiert hat. Die Aktivität wurde als zu früh gestartet markiert.

Der Planer entfernt den tatsächlichen Start und behält die Aktivität „Nicht gestartet“ bei. Wenn diese Arbeit nachverfolgt werden muss, kann eine separate Mobilisierungs- oder Materialbereitstellungsaktivität hinzugefügt werden.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik durch und identifizieren Sie betroffene Aktivitäten.
- Tage 2–3: Bestätigen Sie den tatsächlichen Startstatus mit den verantwortlichen Eigentümern.
- Tage 4–5: Korrigieren Sie den tatsächlichen Start, Fortschrittswerte oder Ausnahmen.
- Tag 6: Überprüfen Sie Fortschrittsberichte und verdiente Wertergebnisse.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie es, Aktivitäten als „Begonnen“ zu markieren, bevor mit der eigentlichen Arbeit begonnen wird.

Vermeiden Sie es, den tatsächlichen Start zu aktualisieren, ohne das entsprechende Fortschrittsfeld zu aktualisieren.

Vermeiden Sie es, den Typ „Prozent abgeschlossen“ zu ignorieren. Der Fortschritt wird möglicherweise in einem anderen Feld als erwartet gespeichert.

## Wichtige Erkenntnisse

- Der Status „Gestartet“ mit einem Fortschritt von 0 % ist ein Problem mit der Statuskonsistenz.
- Das Ziel sind null ungelöste Aktivitäten.
- Überprüfen Sie, ob die Arbeit tatsächlich begonnen hat, bevor Sie den Fortschritt ändern.
- Aktualisieren Sie das richtige Fortschrittsfeld basierend auf dem Typ „Prozent abgeschlossen“.
- Seltene Ausnahmen sollten dokumentiert und weiterverfolgt werden.

## Abschluss

Diese Metrik hilft Planern, Status und Fortschritt aufeinander abzustimmen. Eine begonnene Aktivität sollte eine klare Geschichte darüber erzählen, mit welcher Arbeit begonnen wurde und wie viel Fortschritt erzielt wurde.

Die Verwaltung dieser Metrik verbessert die Fortschrittsberichterstattung, das Vertrauen in den verdienten Wert und die Zuverlässigkeit von Primavera P6-Updates.

## Aufruf zum Handeln

Überprüfen Sie bei Ihrer nächsten Terminplanaktualisierung die Aktivitäten, die als „Begonnen mit 0 % Fortschritt“ gekennzeichnet sind. Bestätigen Sie, ob die Arbeiten tatsächlich begonnen haben, und korrigieren Sie dann den tatsächlichen Beginn, den Fortschritt oder die Dokumentation, bevor Sie Berichte erstellen.
## Verwandte Inhalte
- [Aktivitäten begannen mit 0 % Fortschritt in Primavera P6 - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
