---
title: "SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist"
seo_title: "SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist - Primavera P6"
meta_description: "Erklärt, warum SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist"
  - "Primavera P6 SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-blog-article-ss-lag-greater-than-predecessor-duration-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/04_ss_lag_greater_than_predecessor_duration/01_overview_template.md"
  - "09_metrics_de/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist

## Titel

SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die die Terminplanlogik von Primavera P6 bewerten.

## Öffnungshaken

Eine Start-Start-Beziehung sollte normalerweise eine Arbeit beschreiben, die beginnen kann, nachdem eine andere Aktivität begonnen hat. Aber wenn die SS-Verzögerung länger ist als die Dauer des Vorgängers, beginnt die Logik, eine andere Geschichte zu erzählen.

## Einführung

In Primavera P6 wird Verzögerung häufig verwendet, um eine Wartezeit zwischen zwei Aktivitäten darzustellen. Eine kleine SS-Verzögerung kann nützlich sein, wenn die Arbeit nach einem definierten Fortschritt beginnt. Beispielsweise können die Fertigstellungsteams zwei Tage nach Beginn der Installation beginnen.

Das Problem tritt auf, wenn die SS-Verzögerung größer ist als die Dauer des Vorgängers. Wenn der Vorgänger fünf Tage durchhält und die SS-Verzögerung zehn Tage beträgt, startet der Nachfolger nicht wirklich, weil der Vorgänger gestartet ist. Es beginnt mit einer Verzögerung, die über das Ende des Vorgängers hinausgeht.

Diese Metrik identifiziert SS-Beziehungen, bei denen die Verzögerung größer ist als die Vorgängerdauer. Das Ziel sind null ungelöste Beziehungen.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob eine SS-Beziehung in einer Weise verwendet wird, die noch logisch sinnvoll ist. Die SS-Logik verbindet den Anfang des Vorgängers mit dem Anfang des Nachfolgers. Wenn die Verzögerung die Dauer des Vorgängers überschreitet, wird der Start des Nachfolgers über das Ende des Vorgängers hinaus verschoben.

Das bedeutet nicht automatisch, dass die Beziehung falsch ist, aber es bedeutet, dass die Beziehung überprüft werden muss. Die Abhängigkeit kann besser als FS-Logik, FF-Logik oder als separate Aktivität dargestellt werden, die die Wartezeit klar anzeigt.

Ein hohes Ergebnis deutet darauf hin, dass der Terminplan möglicherweise lange Verzögerungen verwendet, um Arbeit, Wartezeiten oder abschlussbasierte Abhängigkeiten zu verbergen. Ein niedriges Ergebnis deutet darauf hin, dass SS-Logik und Verzögerung vorsichtiger eingesetzt werden.

## Warum dieses Thema wichtig ist

Eine lange Verzögerung kann das Verständnis eines Terminplans erschweren. Es verbirgt die Zeit innerhalb einer Beziehung, anstatt die Arbeits- oder Wartezeit als Teil des Aktivitätsnetzwerks anzuzeigen.

Dies kann sich auf Puffer, die Sichtbarkeit kritischer Pfade, die Überprüfung des längsten Pfads und die Verzögerungsanalysebereitschaft auswirken. Wenn ein Gutachter nicht leicht verstehen kann, warum ein Nachfolger zu diesem Zeitpunkt antritt, wird es schwieriger, den Terminplan zu verteidigen.

## Häufige Ursachen für schlechte Ergebnisse

- SS-Beziehungen aus älteren Fahrplänen kopiert
- Verzögerungen, die während der frühen Planung als Platzhalter verwendet werden
- In der Beziehungsverzögerung verborgene Wartezeiten
- FS- oder FF-Logik wurde fälschlicherweise als SS plus Verzögerung modelliert
- Kalenderunterschiede, die die Interpretation der Verzögerung erschweren
- Beschaffungs-, Heilungs-, Genehmigungs- oder Zugriffszeiträume, die nicht als Aktivitäten modelliert werden

## So verbessern Sie das Ergebnis

### 1. Überprüfen Sie die Beziehungsabsicht

Filtern Sie nach SS-Beziehungen, bei denen die Verzögerung größer ist als die Vorgängerdauer. Überprüfen Sie Vorgänger, Nachfolger, Verzögerung, Kalender, Dauer, Status und Gesamtpuffer.

Fragen Sie, was die Beziehung darstellen soll. Wenn der Nachfolger von der Vervollständigung des Vorgängers abhängt, handelt es sich bei der Beziehung wahrscheinlich nicht um eine echte SS-Abhängigkeit.

### 2. Ersetzen Sie die schwache SS-Logik

Verwenden Sie FS, wenn der Nachfolger nicht starten kann, bis der Vorgänger fertig ist. Verwenden Sie FF, wenn sich beide Aktivitäten überschneiden können, der Nachfolger jedoch erst dann fertig werden kann, wenn der Vorgänger fertig ist.

Wenn die Verzögerung eine echte Wartezeit darstellt, überlegen Sie, ob diese Wartezeit als separate Aktivität modelliert werden sollte. Bei Überprüfungen, Fortschrittsaktualisierungen und Verzögerungsanalysen ist dies oft klarer.

### 3. Dokumentieren Sie gültige Ausnahmen

Einige lange SS-Verzögerungen können beabsichtigt sein. Wenn die Beziehung gültig ist, dokumentieren Sie den Grund und bestätigen Sie den Verzögerungskalender. Die Erklärung sollte so klar sein, dass ein PMO-Prüfer oder ein Projektkontrollleiter sie verstehen kann, ohne zu raten.

## Beispielszenario

Ein Terminplan umfasst eine SS-Beziehung von „Schalung einbauen“ bis „Beton gießen“ mit einer Verzögerung von zehn Tagen. Die Schalungsmaßnahme dauert fünf Tage.

Das bedeutet, dass mit dem Betonieren zehn Tage nach Beginn der Schalung begonnen wird, auch wenn die Schalung nach fünf Tagen abgeschlossen ist. Die Logik beschreibt wahrscheinlich keine echte Start-Start-Abhängigkeit. Möglicherweise wird versucht, die Fertigstellung der Schalung plus Inspektions- oder Aushärtezeit darzustellen.

Der Planer überprüft die Reihenfolge und ersetzt die Beziehung durch eine klarere Logik: eine FS-Beziehung zu einer Inspektionsaktivität, gefolgt vom Betonieren. Der Terminplan zeigt nun die tatsächliche Abhängigkeit und die Wartezeit ist sichtbar.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik durch und identifizieren Sie betroffene Beziehungen.
- Tage 2–3: Überprüfen Sie zunächst kritische und nahezu kritische Beziehungen.
- Tage 4–5: Schwache SS-Logik ersetzen, ungerechtfertigte Verzögerungen reduzieren oder versteckte Wartezeiten modellieren.
- Tag 6: Bestätigen Sie Ausnahmen und überprüfen Sie die Terminplanbewegung.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie es, alle Verzögerungen als falsch zu behandeln. Verzögerung kann nützlich sein, wenn sie einen echten und begrenzten Versatz darstellt.

Vermeiden Sie es, lange Verzögerungen ungeklärt zu lassen. Wenn die Verzögerung länger als die Dauer des Vorgängers ist, muss dafür ein klarer Grund angegeben werden.

Vermeiden Sie es, Arbeit innerhalb der Verzögerung auszublenden, wenn die Arbeit als Aktivität sichtbar sein soll.

## Wichtige Erkenntnisse

- Die SS-Logik sollte eine startbasierte Abhängigkeit darstellen.
- Eine Verzögerung, die größer als die Dauer des Vorgängers ist, weist häufig auf eine schwache oder unklare Logik hin.
- FS, FF oder eine separate Aktivität können die Abhängigkeit besser erklären.
- Das Ziel sind null ungelöste Beziehungen.
- Gültige Ausnahmen sollten dokumentiert werden.

## Abschluss

Diese Metrik hilft Planern, SS-Beziehungen zu finden, bei denen Verzögerungen möglicherweise die tatsächliche Abhängigkeit verbergen. Das Ziel besteht nicht darin, alle SS-Verzögerungen zu beseitigen, sondern sicherzustellen, dass die Verzögerungen angemessen, sichtbar und vertretbar sind.

Die Überprüfung dieser Metrik verbessert die CPM-Klarheit, die Puffer-Zuverlässigkeit und das Vertrauen in den längsten Pfad. Es hilft PMO-Prüfern auch dabei, nützliche Überlappungslogik von Terminplanverknüpfungen zu trennen.

## Aufruf zum Handeln

Überprüfen Sie SS-Beziehungen, bei denen die Verzögerung größer ist als die Vorgängerdauer, bei Ihrer nächsten Aktualisierung des Primavera P6-Terminplans. Fragen Sie bei jedem einzelnen, ob es sich tatsächlich um eine Anfangsbeziehung handelt. Ist dies nicht der Fall, ersetzen Sie es durch eine klarere Logik oder modellieren Sie die Wartezeit direkt.
## Verwandte Inhalte
- [SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist - Überblick](01_overview_template.md)
- [SS-Beziehungen mit einer Verzögerung, die größer als die Dauer des Vorgängers ist - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
