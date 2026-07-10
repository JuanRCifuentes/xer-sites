---
title: "Lange Aufgabendauer in Primavera P6-Terminplanbewertungen"
seoTitle: "Lange Aufgabendauer in Primavera P6-Terminplanbewertungen"
description: "Erklärt, warum Lange Aufgabendauer in Primavera P6-Terminplanbewertungen CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Lange Aufgabendauer in Primavera P6-Terminplanbewertungen"
  - "Primavera P6 Lange Aufgabendauer in Primavera P6-Terminplanbewertungen"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/long-task-duration-primavera-p6"
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
primarySearchIntent: "Erklärt, warum Lange Aufgabendauer in Primavera P6-Terminplanbewertungen CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/07_long_task_duration/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/07_long_task_duration/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titel

Lange Aufgabendauer in Primavera P6-Terminplanbewertungen

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die die Terminqualität von Primavera P6 bewerten.

## Öffnungshaken

Eine lange Aktivität kann dazu führen, dass ein Terminplan einfacher aussieht, aber sie kann auch die Arbeit verbergen, die das Projektteam kontrollieren muss. Wenn eine Aktivität zu lange dauert, wird es schwieriger, den Fortschritt zu messen und Verzögerungen schwerer zu erkennen.

## Einführung

Die lange Aufgabendauer ist eine Kennzahl für die Qualität des Terminplans, die Aktivitäten identifiziert, die länger als der genehmigte Dauerschwellenwert sind. Es gibt keinen allgemeingültigen Grenzwert, der für jedes Projekt funktioniert.

Der richtige Schwellenwert hängt von der Projektart, dem Detaillierungsgrad, dem Berichtszyklus, den Kundenerwartungen und den Qualitätsregeln des PMO-Terminplans ab. Für einen Entwurfsplan, einen Beschaffungsplan, einen Bauplan und einen Inbetriebnahmeplan können jeweils unterschiedliche Dauerbegrenzungen erforderlich sein.

Diese Metrik besagt nicht, dass jede lange Aktivität falsch ist. Darin heißt es, dass lange Aktivitäten einer Überprüfung bedürfen. Das Ziel sind null ungelöste Aktivitäten oberhalb der genehmigten Projektdauer.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob Aktivitäten für die Planung, Steuerung und Berichterstattung angemessen dimensioniert sind. In Primavera P6 wirkt sich die Aktivitätsdauer auf Fortschrittsaktualisierungen, Vorausplanung, Puffer-Berechnung und Sichtbarkeit kritischer Pfade aus.

Es kann schwierig sein, eine Aktivität, die länger als der Berichtszyklus dauert, genau zu aktualisieren. Wenn das Projekt beispielsweise monatlich aktualisiert wird und eine Aktivität 90 Tage dauert, kann es für den Planer schwierig sein, zu erklären, was im aktuellen Zeitraum abgeschlossen wurde.

Ein hohes Ergebnis deutet darauf hin, dass der Terminplan möglicherweise zu zusammengefasst ist oder dass einige Arbeitspakete detailliertere Angaben erfordern. Ein niedriges Ergebnis deutet darauf hin, dass die Größe der Aktivitäten eher der Art und Weise entspricht, wie die Arbeit verwaltet wird.

## Warum dieses Thema wichtig ist

Längere Aktivitäten verringern die Sichtbarkeit. Sie können einzelne Arbeitsschritte, Standorte, Systeme, Genehmigungen und Übergaben innerhalb einer umfassenden Aktivität verbergen.

Dies ist wichtig für PMO-Bewertungen, Kundenberichte, Earned Value, Fortschrittsmessung und Verzögerungsanalyse. Wenn die Arbeit zu umfassend ist, wird es schwieriger zu wissen, ob das Projekt wirklich Fortschritte macht oder nur teilweise eine große Aktivität durchläuft.

## Häufige Ursachen für schlechte Ergebnisse

- Aus einem übergeordneten Planungsplan kopierte Aktivitäten
- Zu breite WBS-Struktur
- Arbeitspakete sind nicht nach Bereich, System, Phase oder Liefergegenstand aufgeschlüsselt
- Schwacher Feld- oder Disziplin-Input während der Terminplanentwicklung
- Die Anzahl der Aktivitäten wurde niedrig gehalten, um die Berichterstattung zu vereinfachen
- Projektschwelle nicht klar definiert

## So verbessern Sie das Ergebnis

### 1. Definieren Sie den Dauerschwellenwert

Bestätigen Sie die genehmigte Langzeitbegrenzung für das Projekt. Der Schwellenwert kann von der Terminplanebene, den Vertragsanforderungen, dem Berichtszeitraum und der Kundensensibilität abhängen.

Bei einigen Projekten sind möglicherweise längere technische oder Beschaffungsaktivitäten erforderlich als bei Bauaktivitäten. Andere erfordern möglicherweise kurze Aktivitätsdauern, weil der Fortschritt wöchentlich überprüft wird oder weil der Kunde eine detaillierte Kontrolle erwartet.

### 2. Unterteilen Sie die allgemeinen Aktivitäten

Überprüfen Sie jede Aktivität oberhalb des Schwellenwerts und fragen Sie, ob sie mehrere Arbeitsschritte, Bereiche, Systeme oder Ergebnisse enthält. Wenn dies der Fall ist, teilen Sie es in kleinere Aktivitäten auf, die klar geplant, aktualisiert und gemessen werden können.

Verwenden Sie praktische Aufschlüsselungsmethoden wie Ort, Phase, Disziplin, System, Zeichnungspaket, Materialpaket, Teamreihenfolge oder Übergabepunkt.

### 3. Dokumentieren Sie gültige Ausnahmen

Einige lange Aktivitäten können gültig sein. Beispiele hierfür sind Aktivitäten mit hohem Aufwand, lange Beschaffungszeiträume, Aushärtungszeiträume, Überprüfungszeiträume oder Aktivitäten, die bewusst auf einer höheren Detailebene verwaltet werden.

Dokumentieren Sie den Grund, damit Prüfer verstehen, warum die Aktivität über dem Schwellenwert bleibt.

## Beispielszenario

Ein BauTerminplan umfasst eine Aktivität namens „Installieren mechanischer Systeme“ mit einer Dauer von 80 Tagen. Das Projekt wird monatlich aktualisiert und der Kunde erwartet eine detaillierte Fortschrittsberichterstattung.

Bei der Überprüfung stellt der Planer fest, dass die Aktivität die Installation in vier Gebäuden und drei Hauptsystemtypen umfasst. Die Aktivität ist zu umfassend, um sie eindeutig messen zu können.

Der Planer unterteilt es in kleinere Aktivitäten nach Gebäude und System. Jede neue Aktivität hat ihre eigene Logik, Dauer und Fortschrittsbasis. Der Terminplan lässt sich einfacher aktualisieren und der Vorausschauplan liefert dem Projektteam nützlichere Informationen.

## Empfohlener Verbesserungsplan

- Tag 1: Bestätigen Sie den Dauerschwellenwert und identifizieren Sie Aktivitäten darüber.
- Tage 2–3: Überprüfen Sie zunächst kritische, nahezu kritische und kundensensible Aktivitäten.
- Tage 4–5: Gliedern Sie die allgemeinen Aktivitäten auf und fügen Sie die richtige Logik hinzu.
- Tag 6: Dokumentieren Sie gültige Ausnahmen und überprüfen Sie die Terminplanbewegung.
- Tag 7: Bewerten Sie die Metrik neu und vergleichen Sie das Ergebnis mit dem Schwellenwert.

## Zu vermeidende Fehler

Vermeiden Sie die Verwendung eines universellen Schwellenwerts, ohne Projekttyp und Terminplanebene zu berücksichtigen.

Vermeiden Sie es, Aktivitäten in bedeutungslose Fragmente aufzuteilen. Mehr Details sind nur dann nützlich, wenn sie die Planung, Kontrolle oder Berichterstattung verbessern.

Vermeiden Sie es, lange Aktivitäten ungeklärt zu lassen. Wenn die Dauer gültig ist, dokumentieren Sie den Grund.

## Wichtige Erkenntnisse

- Die lange Aufgabendauer hängt von der Projektart, dem Detaillierungsgrad und den Kundenerwartungen ab.
- Der Schwellenwert sollte vor der Bewertung festgelegt werden.
- Lange Aktivitäten können Fortschritte verbergen und Risiken verzögern.
- Durch die Aufschlüsselung der Aktivitäten soll die Kontrolle verbessert und nicht nur die Anzahl der Metriken verringert werden.
- Gültige Ausnahmen sollten dokumentiert werden.

## Abschluss

Langfristige Aktivitäten sind nicht automatisch falsch, bedürfen aber einer sorgfältigen Prüfung. Die Frage ist, ob die Aktivität detailliert genug ist, um die Arbeit planen, aktualisieren und steuern zu können.

Wenn diese Kennzahl gut verwaltet wird, lässt sich der Terminplan leichter aktualisieren, leichter erklären und ist nützlicher für die kurzfristige Planung und die PMO-Überwachung.

## Aufruf zum Handeln

Überprüfen Sie Aktivitäten, die über dem genehmigten Dauerschwellenwert liegen, in Ihrer nächsten Aktualisierung des Primavera P6-Terminplans. Entscheiden Sie für jede einzelne davon, ob sie aufgeschlüsselt, verfeinert oder als gültige Ausnahme dokumentiert werden soll.
## Verwandte Inhalte
- [Lange Aufgabendauer in Primavera P6-Terminplanbewertungen - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
