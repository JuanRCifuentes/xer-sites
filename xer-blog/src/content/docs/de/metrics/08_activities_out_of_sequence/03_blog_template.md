---
title: "Aktivitäten außerhalb der Reihenfolge in Primavera P6"
seoTitle: "Aktivitäten außerhalb der Reihenfolge in Primavera P6"
description: "Erklärt, warum Aktivitäten außerhalb der Reihenfolge in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Aktivitäten außerhalb der Reihenfolge in Primavera P6"
  - "Primavera P6 Aktivitäten außerhalb der Reihenfolge in Primavera P6"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/activities-out-of-sequence-primavera-p6"
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
primarySearchIntent: "Erklärt, warum Aktivitäten außerhalb der Reihenfolge in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/08_activities_out_of_sequence/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/08_activities_out_of_sequence/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titel

Aktivitäten außerhalb der Reihenfolge in Primavera P6

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die Terminplanaktualisierungen von Primavera P6 bewerten.

## Öffnungshaken

Manchmal beginnt die Arbeit, bevor der Terminplan es vorschreibt. Dies spiegelt möglicherweise den tatsächlichen Fortschritt vor Ort wider, kann aber auch ein Problem in der Aktualisierung, der Logik oder der Art und Weise aufdecken, wie der aktuelle Plan gemeldet wird.

## Einführung

Aktivitäten außerhalb der Reihenfolge sind Aktivitäten, die begonnen oder fortgeschritten sind, bevor ihre Vorgängerlogik erfüllt wurde. In Primavera P6 ist dies ein häufiges Problem bei Terminplanaktualisierungen, da die tatsächliche Feldausführung nicht immer genau dem geplanten Netzwerk folgt.

Fortschritte außerhalb der Reihenfolge sind nicht automatisch schlecht. Die Reihenfolge der Projekte wird aus Gründen des Zugangs, der Ressourcen, des Wetters, der Genehmigungen, der Designfreigaben und aus vielen anderen Gründen neu geordnet. Die Frage ist, ob der Terminplan aktualisiert wurde, um diese Neuordnung klar widerzuspiegeln.

Diese Metrik identifiziert Aktivitäten mit Fortschritten, die im Widerspruch zur geplanten Logiksequenz stehen. Das Ziel sind null ungelöste Aktivitäten.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob der tatsächliche Fortschritt mit der Beziehungslogik im Terminplan übereinstimmt. Wenn beispielsweise Aktivität B einen End-to-Start-Vorgänger von Aktivität A hat, Aktivität B jedoch bereits begonnen hat, während Aktivität A noch nicht abgeschlossen ist, ist Aktivität B möglicherweise nicht in der richtigen Reihenfolge.

Das Ergebnis kann auf einen einfachen Statusfehler hinweisen, beispielsweise auf ein fehlendes tatsächliches Finish beim Vorgänger. Es kann auch auf eine veraltete Logik oder ein echtes Feldneusequenzierungsereignis hinweisen.

In Primavera P6 hängen die Auswirkungen teilweise von den Terminplanberechnungseinstellungen wie der beibehaltenen Logik und der Fortschrittsüberschreibung ab. Diese Einstellungen wirken sich darauf aus, wie die verbleibende Arbeit berechnet wird, nachdem ein Fortschritt außerhalb der Reihenfolge auftritt.

## Warum dieses Thema wichtig ist

Aktivitäten außerhalb der Reihenfolge können das Vertrauen in die Prognose verringern. Sie können den Puffer verzerren, den längsten Pfad ändern und die Erklärung des Terminplans erschweren.

Sie sind auch für die Regierungsführung von Bedeutung. PMO-Prüfer und Projektkontrollteams müssen wissen, ob der Terminplan den tatsächlichen aktuellen Plan darstellt oder ob er noch Logik aus einer älteren Sequenz enthält.

## Häufige Ursachen für schlechte Ergebnisse

- Die Arbeiten begannen vor der Fertigstellung des Vorgängers
- Fehlende oder falsche Ist-Termine
- Vorgängerstatus wurde nicht korrekt aktualisiert
- Die Neusequenzierung der Felder wird in der Logik nicht berücksichtigt
- Veraltete Beziehungen nach der Wiederherstellungsplanung
- Verwirrung über beibehaltene Logik und Fortschrittsüberschreibungseinstellungen
- Fortschritt ohne Überprüfung der Terminplanlogik akzeptiert

## So verbessern Sie das Ergebnis

### 1. Überprüfen Sie zunächst den Status

Bevor Sie die Logik ändern, bestätigen Sie die Ist-Terminen und den Status sowohl der markierten Aktivität als auch ihrer Vorgänger. Viele Probleme mit der falschen Reihenfolge werden durch fehlende tatsächliche Enden, falsche tatsächliche Starts oder eine nicht ordnungsgemäß aktualisierte verbleibende Dauer verursacht.

Wenn die Aktivitätsdaten falsch sind, korrigieren Sie die Aktualisierung und führen Sie eine Neuberechnung durch, bevor Sie logische Änderungen vornehmen.

### 2. Überprüfen Sie die Logik anhand des aktuellen Plans

Wenn der Fortschritt real ist, fragen Sie, ob die bestehende Beziehung noch die geplante Ausführungsreihenfolge widerspiegelt. Wenn sich die Feldarbeit geändert hat, muss möglicherweise auch die Logik geändert werden.

Entfernen Sie keine Beziehungen, nur um die Metrik zu löschen. Ersetzen Sie veraltete Logik durch gültige Beziehungen, die den genehmigten aktuellen Plan erklären.

### 3. Bestätigen Sie den P6-Berechnungsansatz

Überprüfen Sie, ob das Projekt beibehaltene Logik oder Fortschrittsüberschreibung verwendet. Die beibehaltene Logik behält die Kontrolle des Vorgängers über die verbleibende Arbeit. Durch die Fortschrittsüberschreibung kann die Arbeit trotz unvollständiger Vorgängerlogik fortgesetzt werden.

Die richtige Einstellung hängt vom Projektkontrollverfahren ab, aber das Team sollte verstehen, welche Einstellung verwendet wird, bevor es das Ergebnis interpretiert.

## Beispielszenario

Ein Terminplan zeigt „Kabelrinne einbauen“ mit einem Vorgänger aus „Komplette Stahlstützen“. Während der Aktualisierung erhält die Kabeltrassenaktivität einen tatsächlichen Start, auch wenn die Stahlstützen nicht als abgeschlossen markiert sind.

Der Planer prüft den Feldbericht und stellt fest, dass die Unterstützungen in Bereich A, aber nicht in Bereich B abgeschlossen wurden. Die ursprünglichen Aktivitäten waren zu umfassend für die tatsächliche Reihenfolge.

Der Terminplan wird je nach Gebiet überarbeitet. Die abgeschlossenen Unterstützungsarbeiten in Bereich A treiben nun die Kabelrinneninstallation in Bereich A voran, während Bereich B weiterhin ordnungsgemäß sequenziert ist. Das Problem der fehlenden Reihenfolge ist behoben und die Prognose wird genauer.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik aus und bestätigen Sie der Datenstichtag.
- Tage 2–3: Statusfehler und Ist-Termine korrigieren.
- Tage 4–5: Überprüfen Sie die tatsächliche Neusequenzierung und überarbeiten Sie veraltete Logik.
- Tag 6: Bestätigen Sie Ausnahmen und überprüfen Sie die Terminplanbewegung.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie es, die Logik zu ändern, bevor Sie prüfen, ob die Statusaktualisierung korrekt ist.

Vermeiden Sie es, Fortschritte außerhalb der Reihenfolge zu ignorieren, da die Arbeit vor Ort stattgefunden hat. Der Terminplan muss weiterhin den aktuellen Plan widerspiegeln.

Vermeiden Sie es, beibehaltene Logik- oder Fortschrittsüberschreibungseinstellungen zu ändern, ohne die Projektsteuerungsprozedur zu verstehen.

## Wichtige Erkenntnisse

- Aktivitäten außerhalb der Reihenfolge zeigen einen Fortschritt an, der im Widerspruch zur Vorgängerlogik steht.
- Die Ursache kann ein Statusfehler, ein Logikfehler oder eine echte Neusequenzierung sein.
- Die P6-Berechnungseinstellungen wirken sich darauf aus, wie das Problem in der Prognose angezeigt wird.
- Das Ziel sind null ungelöste Aktivitäten.
- Die genehmigte Neuordnung sollte sich in der Terminplanlogik widerspiegeln.

## Abschluss

Ein Fortschritt außerhalb der Reihenfolge ist ein Signal dafür, dass der Terminplan überprüft werden muss. Manchmal ist die Lösung eine einfache Statuskorrektur. In anderen Fällen muss die Logik aktualisiert werden, damit sie mit der aktuellen Ausführung des Projekts übereinstimmt.

Die Verwaltung dieser Metrik verbessert die Aktualisierungsqualität, die Prognosezuverlässigkeit und das Vertrauen in den kritischen oder längsten Pfad.

## Aufruf zum Handeln

Überprüfen Sie Aktivitäten außerhalb der Reihenfolge bei Ihrem nächsten Primavera P6-Update. Entscheiden Sie für jedes Element, ob es sich um ein Status-, Logik- oder tatsächliches Neusequenzierungsproblem handelt, und korrigieren Sie dann den Terminplan, bevor Sie Berichte ausgeben.
## Verwandte Inhalte
- [Aktivitäten außerhalb der Reihenfolge in Primavera P6 - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
