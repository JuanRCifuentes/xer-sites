---
title: "Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger"
seoTitle: "Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger - Primavera P6"
description: "Erklärt, warum Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger"
  - "Primavera P6 Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/activities-with-ss-successor-and-no-fs-ff-successor-primavera-p6"
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
primarySearchIntent: "Erklärt, warum Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/02_activities_with_ss_successor_and_no_fs_ff_successor/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/02_activities_with_ss_successor_and_no_fs_ff_successor/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titel

Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die die Terminplanlogik von Primavera P6 bewerten.

## Öffnungshaken

Eine Start-to-Start-Logik kann hilfreich sein. Es ermöglicht überlappende Arbeiten und hilft bei der Modellierung der realen Feldausführung. Wenn eine Aktivität jedoch einen SS-Nachfolger und keinen FS- oder FF-Nachfolger hat, spielt ihr Ende möglicherweise keine Rolle mehr für den Rest des Terminplans.

## Einführung

In Primavera P6 kommt es auf den Beziehungstyp an. Eine Start-Start-Beziehung ermöglicht es einem Nachfolger, nach dem Start des Vorgängers zu beginnen. Dies kann sinnvoll sein, wenn sich Arbeiten überschneiden, beispielsweise wenn mit der Installation begonnen wird, nachdem ein Bereich teilweise freigegeben wurde.

Das Risiko entsteht, wenn der Vorgänger nur SS-Nachfolger hat. Wenn kein Nachfolger von der Fertigstellung des Vorgängers abhängt, darf die Verlängerung der Vorgängerdauer die nachgelagerten Arbeiten nicht verzögern. Der Terminplan sieht möglicherweise gut aus, auch wenn eine Aktivität länger dauert als geplant.

Diese Metrik identifiziert Aktivitäten mit mindestens einem SS-Nachfolger und keinem FS- oder FF-Nachfolger. Das Ziel sind null ungelöste Aktivitäten.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob das Ende einer Aktivität im logischen Netzwerk dargestellt wird. SS-Logik verbindet sich. Die FS- und FF-Logik verbindet das Ende einer Aktivität mit einem späteren Start oder Ende.

Eine Aktivität kann über eine gültige SS-Logik verfügen und dennoch eine abschlussbasierte Logik benötigen. Beispielsweise kann ein Nachfolger beginnen, nachdem der erste Teil der Arbeit begonnen hat, er kann jedoch möglicherweise erst dann fertig werden, wenn der Vorgänger abgeschlossen ist. In diesem Fall kann eine FF-Beziehung die Terminplanlogik besser schützen.

Ein hohes Ergebnis deutet darauf hin, dass Aktivitäten möglicherweise nur durch Startbedingungen verknüpft sind. Ein niedriges Ergebnis deutet darauf hin, dass der Aktivitätsabschluss im CPM-Netzwerk besser dargestellt wird.

## Warum dieses Thema wichtig ist

Die Terminplanlogik sollte sowohl zeigen, wie die Arbeit beginnt als auch wie die Arbeit endet. Wenn das Ende einer Aktivität nicht mit irgendetwas verbunden ist, verschieben Verzögerungen dieser Aktivität möglicherweise keine nachgelagerten Termine.

Dies kann Auswirkungen auf den Gesamtpuffer, den längsten Pfad, die Meilensteinkonfidenz und die Verzögerungsanalysebereitschaft haben. Es kann auch zu einer irreführenden Vorausschau kommen, da teilweise begonnene Arbeiten scheinbar nachgelagerte Aktivitäten freigeben, ohne zu zeigen, was noch von der Fertigstellung abhängt.

## Häufige Ursachen für schlechte Ergebnisse

- Übermäßiger Einsatz von SS-Beziehungen zur Modellierung überlappender Arbeiten
- Fehlende FF-Beziehungen für Arbeiten, die gemeinsam abgeschlossen werden müssen
- Fehlende FS-Beziehungen für Übergabe-, Inspektions- oder Umsatzschritte
- Terminplanlogik aus älteren Projekten kopiert
- Es werden Verzögerungen anstelle einer klareren, zielorientierten Logik verwendet
- Fehlende Feldeingabe zur tatsächlichen Abschlussabhängigkeit

## So verbessern Sie das Ergebnis

### 1. Überprüfen Sie die Nachfolgerlogik

Filtern Sie nach Aktivitäten mit SS-Nachfolgern und keinen FS- oder FF-Nachfolgern. Überprüfen Sie die Nachfolgerliste, die Beziehungstypen, die Verzögerungen, den Aktivitätsstatus und den Gesamtbestand.

Fragen Sie, was vom Abschluss der Aktivität abhängt. Wenn die Antwort ein Meilenstein für den Start, die Übergabe, die Inspektion oder die Fertigstellung des Nachfolgers ist, benötigt der Terminplan wahrscheinlich eine abschlussbasierte Logik.

### 2. Fügen Sie die richtige, auf dem Finish basierende Beziehung hinzu

Verwenden Sie FS, wenn die nächste Aktivität erst beginnen kann, wenn diese Aktivität abgeschlossen ist. Verwenden Sie FF, wenn sich die Arbeit überschneiden kann, der Nachfolger jedoch erst dann fertig werden kann, wenn diese Aktivität abgeschlossen ist.

Vermeiden Sie es, Logik hinzuzufügen, nur um die Metrik zu löschen. Die Beziehung sollte die tatsächliche Ausführungsreihenfolge widerspiegeln.

### 3. Dokumentieren Sie gültige Ausnahmen

Bei einigen Aktivitäten kann es sich um gültige Ausnahmen handeln. Aufgrund des Aufwands, der Unterstützung oder der Verwaltungstätigkeiten sind möglicherweise keine zielorientierten Nachfolger erforderlich. Dokumentieren Sie in diesen Fällen den Grund, damit das Element kein ungeklärtes Qualitätsproblem im Terminplan darstellt.

## Beispielszenario

Ein Terminplan enthält eine Aktivität namens „Installieren von unterirdischen Rohrleitungen“ mit einem SS-Nachfolger für „Graben auffüllen“. Die Beziehung ist nützlich, da mit der Hinterfüllung begonnen werden kann, nachdem der erste Rohrabschnitt installiert wurde.

Es gibt jedoch keinen FS- oder FF-Nachfolger, der an den Abschluss der Rohrleitungsaktivität gebunden ist. Wenn sich die Rohrleitungsarbeiten um fünf Tage verlängern, kann es sein, dass die Verfüllarbeiten weiterhin planmäßig voranschreiten, ohne dass sie durch die endgültige Fertigstellung der Rohrleitungen aufgehalten werden.

Der Planer fügt eine FF-Beziehung von „Unterirdische Rohrleitungen installieren“ zu „Graben auffüllen“ hinzu. Jetzt können sich die Arbeiten immer noch überschneiden, aber die Fertigstellung der Hinterfüllung ist an die Fertigstellung der Rohrleitungen gebunden. Der Terminplan spiegelt die tatsächliche Feldabhängigkeit besser wider.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik durch und identifizieren Sie betroffene Aktivitäten.
- Tage 2–3: Überprüfen Sie zunächst kritische und nahezu kritische Elemente.
- Tage 4–5: Fügen Sie gültige FS- oder FF-Logik hinzu und entfernen Sie bei Bedarf irreführende Verzögerungen.
- Tag 6: Bestätigen Sie Ausnahmen und überprüfen Sie die Terminplanbewegung.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie es, jede SS-Beziehung als Problem zu betrachten. Das Problem ist nicht die SS-Logik selbst; Das Problem besteht darin, dass die zielorientierte Logik fehlt, wenn es auf das Ziel ankommt.

Vermeiden Sie es, alle SS-Beziehungen durch FS-Beziehungen zu ersetzen. Überschneidungen können realistisch und nützlich sein.

Vermeiden Sie es, Ausnahmen undokumentiert zu lassen. Prüfer müssen wissen, ob es sich bei einem Artikel um eine beabsichtigte oder unvollendete Logikentwicklung handelt.

## Wichtige Erkenntnisse

- Die SS-Logik steuert den Start, nicht das Ende.
- Aktivitäten mit SS-Nachfolgern und keinen FS- oder FF-Nachfolgern haben möglicherweise keinen Einfluss mehr auf nachgelagerte Daten, wenn sich ihre Dauer ändert.
- Die FF-Logik ist oft nützlich, wenn überlappende Arbeiten der Reihe nach abgeschlossen werden müssen.
- Das Ziel sind null ungelöste Aktivitäten.
- Dokumentieren Sie gültige Ausnahmen klar und deutlich.

## Abschluss

Mithilfe dieser Metrik können Planer bestätigen, dass der Aktivitätsabschluss im Netzwerk dargestellt wird. SS-Beziehungen können gültig sein, sollten jedoch nicht dazu führen, dass wichtige Aktivitätsabschlüsse vom Rest des Terminplans getrennt werden.

Die Überprüfung dieser Metrik verbessert die CPM-Qualität, die Puffer-Zuverlässigkeit und das Vertrauen in den längsten Pfad. Es hilft PMO-Prüfern auch dabei, realistische überlappende Logik von schwacher oder unvollständiger Sequenzierung zu unterscheiden.

## Aufruf zum Handeln

Überprüfen Sie Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger in Ihrem nächsten Primavera P6-Terminplan-Update. Fragen Sie für jede Aufgabe, ob das Ende der Aktivität die nachgelagerte Arbeit vorantreiben soll. Wenn dies der Fall sein sollte, fügen Sie eine gültige, auf dem Abschluss basierende Logik hinzu. Sollte dies nicht der Fall sein, dokumentieren Sie die Ausnahme.
## Verwandte Inhalte
- [Aktivitäten mit SS-Nachfolgern und ohne FS- oder FF-Nachfolger - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
