---
title: "Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger"
seo_title: "Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger - Primavera P6"
meta_description: "Erklärt, warum Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger"
  - "Primavera P6 Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-blog-article-activities-with-ff-predecessor-and-no-fs-ss-predecessor-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/01_overview_template.md"
  - "09_metrics_de/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger

## Titel

Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die die Terminplanlogik von Primavera P6 bewerten.

## Öffnungshaken

Die Finish-to-Finish-Logik kann nützlich sein, wenn zwei Aktivitäten gemeinsam abgeschlossen werden müssen. Wenn eine Aktivität jedoch einen FF-Vorgänger und keinen FS- oder SS-Vorgänger hat, kann ihr Ende kontrolliert werden, während ihr Start schwach definiert bleibt.

## Einführung

In Primavera P6 verknüpft eine FF-Beziehung das Ende einer Aktivität mit dem Ende einer anderen. Dies kann sinnvoll sein, wenn sich die Arbeit überschneidet, eine Aktivität jedoch erst abgeschlossen werden kann, wenn eine andere Aktivität abgeschlossen ist.

Das Risiko tritt auf, wenn eine Aktivität nur FF-Vorgänger hat. Wenn kein Vorgänger steuert, wann die Aktivität beginnen kann, ermöglicht der Terminplan möglicherweise, dass die Aktivität früher beginnt, als es der tatsächliche Arbeitsablauf zulässt.

Diese Metrik identifiziert Aktivitäten mit mindestens einem FF-Vorgänger und keinem FS- oder SS-Vorgänger. Das Ziel sind null ungelöste Aktivitäten.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob der Start einer Aktivität im logischen Netzwerk dargestellt wird. Die FF-Logik verbindet die Oberflächen. FS- und SS-Logik können vorgelagerte Arbeiten mit dem Aktivitätsstart verbinden.

Eine Aktivität kann über eine gültige FF-Logik verfügen und dennoch eine Startsteuerungslogik benötigen. Beispielsweise muss der Test möglicherweise mit der Installation abgeschlossen werden, kann aber erst beginnen, wenn ein Teil der Installation verfügbar ist. In diesem Fall ist möglicherweise zusätzlich zur FF-Beziehung eine SS-Beziehung erforderlich.

Ein hohes Ergebnis deutet darauf hin, dass Aktivitäten möglicherweise nur durch Endbedingungen verknüpft sind. Ein niedriges Ergebnis deutet darauf hin, dass Aktivitätsstarts im CPM-Netzwerk besser vertreten sind.

## Warum dieses Thema wichtig ist

Die Terminplanlogik sollte sowohl zeigen, wie die Arbeit beginnt als auch wie die Arbeit endet. Wenn der Beginn einer Aktivität nicht mit vorgelagerten Arbeiten verbunden ist, können frühe Termine unrealistisch sein.

Dies kann sich auf den Gesamtbestand, den längsten Pfad, die Meilensteinzuverlässigkeit und die kurzfristige Planung auswirken. Es kann auch dazu führen, dass sich überschneidende Arbeiten leichter zu beginnen scheinen, als sie tatsächlich sind.

## Häufige Ursachen für schlechte Ergebnisse

- Übermäßiger Einsatz von FF-Beziehungen zur Modellierung überlappender Arbeiten
- Fehlende SS-Beziehungen für Arbeiten, die nach teilweisem Fortschritt beginnen können
- Fehlende FS-Beziehungen für Arbeiten, die den vollständigen Vorgängerabschluss erfordern
- Terminplanlogik aus älteren Projekten kopiert
- Anstelle einer klareren Anfahrlogik werden Verzögerungen verwendet
- Fehlende Feldeingabe zur tatsächlichen Startbedingung

## So verbessern Sie das Ergebnis

### 1. Überprüfen Sie die Vorgängerlogik

Filtern Sie nach Aktivitäten mit FF-Vorgängern und keinen FS- oder SS-Vorgängern. Überprüfen Sie die Vorgängerliste, Beziehungstypen, Verzögerungen, Aktivitätsstatus und Gesamtpuffer.

Fragen Sie, was passieren muss, bevor die Aktivität beginnen kann. Wenn die Antwort ein Vorgängerstart, eine teilweise Freigabe, eine vollständige Fertigstellung, eine Genehmigung, ein Zugriff oder eine Übergabe ist, benötigt der Terminplan wahrscheinlich eine Startsteuerungslogik.

### 2. Fügen Sie die richtige Start-Fahr-Beziehung hinzu

Verwenden Sie FS, wenn die Aktivität erst beginnen kann, wenn die Vorgängerin abgeschlossen ist. Verwenden Sie SS, wenn die Aktivität beginnen kann, nachdem die Vorgängerin gestartet ist oder einen definierten Fortschrittspunkt erreicht.

Vermeiden Sie es, Logik hinzuzufügen, nur um die Metrik zu löschen. Die Beziehung sollte die tatsächliche Ausführungsreihenfolge widerspiegeln.

### 3. Dokumentieren Sie gültige Ausnahmen

Bei einigen Aktivitäten kann es sich um gültige Ausnahmen handeln. Für den Grad des Aufwands, der Unterstützung oder der Verwaltungstätigkeiten sind möglicherweise keine vorantreibenden Vorgänger erforderlich. Dokumentieren Sie in diesen Fällen den Grund, damit das Element kein ungeklärtes Qualitätsproblem im Terminplan darstellt.

## Beispielszenario

Ein Terminplan enthält eine Aktivität namens „Abschließende Tests“ mit einem FF-Vorgänger von „Installation abschließen“. Die Beziehung ist nützlich, da der Test erst abgeschlossen werden kann, wenn die Installation abgeschlossen ist.

Es gibt jedoch keinen FS- oder SS-Vorgänger, der an den Teststart gebunden ist. Wenn im Terminplan frühe Termine berechnet werden, scheint es möglich zu sein, dass mit den Tests begonnen werden kann, bevor genügend Installationsarbeiten verfügbar sind.

Der Planer fügt eine SS-Beziehung von „Installation abschließen“ bis „Abschließender Test“ mit einer entsprechenden Verzögerung oder einem entsprechenden Fortschrittspunkt hinzu. Die FF-Beziehung bleibt bestehen, um die endgültige Fertigstellung zu schützen. Jetzt zeigt der Terminplan an, wann der Test beginnen und wann er enden kann.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik durch und identifizieren Sie betroffene Aktivitäten.
- Tage 2–3: Überprüfen Sie zunächst kritische und nahezu kritische Elemente.
- Tage 4–5: Fügen Sie gültige FS- oder SS-Logik hinzu und entfernen Sie bei Bedarf irreführende Verzögerungen.
- Tag 6: Bestätigen Sie Ausnahmen und überprüfen Sie die Terminplanbewegung.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie es, jede FF-Beziehung als Problem zu betrachten. Das Problem ist nicht die FF-Logik selbst; Das Problem besteht darin, dass die Startsteuerungslogik fehlt, wenn es auf den Start ankommt.

Vermeiden Sie es, alle FF-Beziehungen durch FS-Beziehungen zu ersetzen. Überschneidungen können realistisch und nützlich sein.

Vermeiden Sie es, Ausnahmen undokumentiert zu lassen. Prüfer müssen wissen, ob es sich bei einem Artikel um eine beabsichtigte oder unvollendete Logikentwicklung handelt.

## Wichtige Erkenntnisse

- Die FF-Logik steuert die Beendigung der Ausrichtung, nicht den Beginn der Aktivität.
- Aktivitäten mit FF-Vorgängern und keinen FS- oder SS-Vorgängern beginnen möglicherweise früher, als die tatsächliche Reihenfolge unterstützt.
- SS-Logik ist oft nützlich, wenn überlappende Arbeiten eine klare Startbedingung erfordern.
- Das Ziel sind null ungelöste Aktivitäten.
- Dokumentieren Sie gültige Ausnahmen klar und deutlich.

## Abschluss

Mithilfe dieser Metrik können Planer bestätigen, dass Aktivitätsstarts im Netzwerk dargestellt werden. FF-Beziehungen können gültig sein, sollten jedoch nicht dazu führen, dass wichtige Aktivitätsstarts von der vorgelagerten Arbeit getrennt werden.

Die Überprüfung dieser Metrik verbessert die CPM-Qualität, die Puffer-Zuverlässigkeit und das Vertrauen in den längsten Pfad. Es hilft PMO-Prüfern auch dabei, realistische überlappende Logik von schwacher oder unvollständiger Sequenzierung zu unterscheiden.

## Aufruf zum Handeln

Überprüfen Sie Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger in Ihrem nächsten Primavera P6-Terminplan-Update. Fragen Sie für jeden, ob der Beginn der Aktivität durch vorgelagerte Arbeiten vorangetrieben werden soll. Wenn dies der Fall sein sollte, fügen Sie eine gültige Start-Steuernde Logik hinzu. Sollte dies nicht der Fall sein, dokumentieren Sie die Ausnahme.
## Verwandte Inhalte
- [Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger - Überblick](01_overview_template.md)
- [Aktivitäten mit FF-Vorgängern und ohne FS- oder SS-Vorgänger - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
