---
title: "FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist"
seo_title: "FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist - Primavera P6"
meta_description: "Erklärt, warum FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
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
slug: "de-blog-article-ff-lag-greater-than-successor-duration-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/05_ff_lag_greater_than_successor_duration/01_overview_template.md"
  - "09_metrics_de/05_ff_lag_greater_than_successor_duration/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/05_ff_lag_greater_than_successor_duration/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist

## Titel

FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die die Terminplanlogik von Primavera P6 bewerten.

## Öffnungshaken

Eine Finish-to-Finish-Beziehung sollte normalerweise zwei Aktivitäten beschreiben, deren Endtermine verknüpft werden müssen. Aber wenn die FF-Verzögerung länger ist als die Nachfolgedauer, verbirgt die Beziehung möglicherweise mehr, als sie erklärt.

## Einführung

In Primavera P6 wird die FF-Logik häufig verwendet, wenn sich zwei Aktivitäten überschneiden können, der Nachfolger jedoch nicht abgeschlossen werden kann, bis der Vorgänger abgeschlossen ist. Eine kleine FF-Verzögerung kann nützlich sein, wenn ein kurzer Abschluss, eine Überprüfung oder ein Übergabeausgleich erforderlich ist.

Das Problem tritt auf, wenn die FF-Verzögerung größer als die Nachfolgerdauer ist. Wenn der Nachfolger fünf Tage dauert und die FF-Verzögerung zehn Tage beträgt, ist der Endversatz länger als die kontrollierte Aktivität. Das kann bedeuten, dass der Terminplan eine Wartezeit, fehlende Aktivitäten oder einen anderen Abhängigkeitstyp verbirgt.

Diese Metrik identifiziert FF-Beziehungen, bei denen die Verzögerung größer ist als die Nachfolgerdauer. Das Ziel sind null ungelöste Beziehungen.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob eine FF-Beziehung in einer Weise verwendet wird, die noch logisch sinnvoll ist. Die FF-Logik verbindet das Ende des Vorgängers mit dem Ende des Nachfolgers. Wenn die Verzögerung die Dauer des Nachfolgers überschreitet, kann die Beziehung das Ende des Nachfolgers in einer Weise vorantreiben, die anhand der Aktivitätsliste allein schwer zu verstehen ist.

Das bedeutet nicht automatisch, dass die Beziehung falsch ist, aber es bedeutet, dass die Beziehung überprüft werden muss. Die Abhängigkeit kann besser als FS-Logik, SS-Logik oder eine separate Aktivität dargestellt werden, die die Wartezeit klar anzeigt.

Ein hohes Ergebnis deutet darauf hin, dass der Terminplan möglicherweise lange Verzögerungen verwendet, um Arbeit zu verbergen, Wartezeiten oder eine unklare Reihenfolge aufweist. Ein niedriges Ergebnis deutet darauf hin, dass FF-Logik und Verzögerung vorsichtiger eingesetzt werden.

## Warum dieses Thema wichtig ist

Eine lange Verzögerung kann das Verständnis eines Terminplans erschweren. Es verbirgt die Zeit innerhalb einer Beziehung, anstatt die Arbeits- oder Wartezeit als Teil des Aktivitätsnetzwerks anzuzeigen.

Dies kann sich auf Puffer, die Sichtbarkeit kritischer Pfade, die Überprüfung des längsten Pfads und die Verzögerungsanalysebereitschaft auswirken. Wenn ein Gutachter nicht leicht verstehen kann, warum ein Nachfolger zu diesem Zeitpunkt ausscheidet, wird es schwieriger, den Terminplan zu verteidigen.

## Häufige Ursachen für schlechte Ergebnisse

- FF-Beziehungen aus älteren Terminplänen kopiert
- Verzögerungen, die während der frühen Planung als Platzhalter verwendet werden
- In der Beziehungsverzögerung verborgene Wartezeiten
- FS- oder SS-Logik wurde fälschlicherweise als FF plus Verzögerung modelliert
- Kalenderunterschiede, die die Interpretation der Verzögerung erschweren
- Prüf-, Genehmigungs-, Inbetriebnahme- oder Übergabezeiträume, die nicht als Aktivitäten modelliert werden

## So verbessern Sie das Ergebnis

### 1. Überprüfen Sie die Beziehungsabsicht

Filtern Sie nach FF-Beziehungen, bei denen die Verzögerung größer ist als die Nachfolgerdauer. Überprüfen Sie Vorgänger, Nachfolger, Verzögerung, Kalender, Dauer, Status und Gesamtpuffer.

Fragen Sie, was die Beziehung darstellen soll. Wenn der Nachfolger von der Fertigstellung des Vorgängers abhängig ist, bevor er beginnen kann, ist die Beziehung möglicherweise klarer als die FS-Logik. Wenn der Nachfolger beginnen kann, nachdem die vorgelagerten Arbeiten begonnen haben, ist die SS-Logik möglicherweise angemessener.

### 2. Ersetzen Sie die schwache FF-Logik

Verwenden Sie FS, wenn der Nachfolger nicht starten kann, bis der Vorgänger fertig ist. Verwenden Sie SS, wenn der Nachfolger starten kann, nachdem der Vorgänger gestartet ist oder einen definierten Fortschrittspunkt erreicht.

Wenn die Verzögerung eine echte Wartezeit darstellt, überlegen Sie, ob diese Wartezeit als separate Aktivität modelliert werden sollte. Bei Überprüfungen, Fortschrittsaktualisierungen und Verzögerungsanalysen ist dies oft klarer.

### 3. Dokumentieren Sie gültige Ausnahmen

Einige lange FF-Verzögerungen können beabsichtigt sein. Wenn die Beziehung gültig ist, dokumentieren Sie den Grund und bestätigen Sie den Verzögerungskalender. Die Erklärung sollte so klar sein, dass ein PMO-Prüfer oder ein Projektkontrollleiter sie verstehen kann, ohne zu raten.

## Beispielszenario

Ein Terminplan umfasst eine FF-Beziehung von „Installation abschließen“ bis „Abschlusspaket genehmigt“ mit einer Verzögerung von fünfzehn Tagen. Die Restposten-Paketaktivität hat eine Dauer von fünf Tagen.

Dies bedeutet, dass die Fertigstellung des Abschlusspakets um mehr Zeit als die Nachfolgedauer selbst verzögert wird. Die Logik versucht möglicherweise, die Überprüfungs- oder Genehmigungszeit darzustellen, die nicht als Aktivität sichtbar ist.

Der Planer überprüft die Reihenfolge und ersetzt die lange Verzögerung durch eine separate Aktivität „Kundenüberprüfung des Restpostenpakets“. Der Terminplan zeigt jetzt die tatsächliche Wartezeit an, wodurch die Logik einfacher zu aktualisieren und zu verteidigen ist.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik durch und identifizieren Sie betroffene Beziehungen.
- Tage 2–3: Überprüfen Sie zunächst kritische und nahezu kritische Beziehungen.
- Tage 4–5: Schwache FF-Logik ersetzen, ungerechtfertigte Verzögerungen reduzieren oder versteckte Wartezeiten modellieren.
- Tag 6: Bestätigen Sie Ausnahmen und überprüfen Sie die Terminplanbewegung.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie es, alle Verzögerungen als falsch zu behandeln. Verzögerung kann nützlich sein, wenn sie einen echten und begrenzten Versatz darstellt.

Vermeiden Sie es, lange Verzögerungen ungeklärt zu lassen. Wenn die Verzögerung größer ist als die Nachfolgedauer, muss dafür ein klarer Grund angegeben werden.

Vermeiden Sie es, Arbeit innerhalb der Verzögerung auszublenden, wenn die Arbeit als Aktivität sichtbar sein soll.

## Wichtige Erkenntnisse

- Die FF-Logik sollte eine abschlussbasierte Abhängigkeit darstellen.
- Eine Verzögerung, die länger als die Dauer des Nachfolgers ist, weist häufig auf eine schwache oder unklare Logik hin.
- FS, SS oder eine separate Aktivität können die Abhängigkeit besser erklären.
- Das Ziel sind null ungelöste Beziehungen.
- Gültige Ausnahmen sollten dokumentiert werden.

## Abschluss

Diese Metrik hilft Planern, FF-Beziehungen zu finden, bei denen Verzögerungen möglicherweise die tatsächliche Abhängigkeit verbergen. Das Ziel besteht nicht darin, alle FF-Verzögerungen zu beseitigen, sondern sicherzustellen, dass die Verzögerungen angemessen, sichtbar und vertretbar sind.

Die Überprüfung dieser Metrik verbessert die CPM-Klarheit, die Puffer-Zuverlässigkeit und das Vertrauen in den längsten Pfad. Es hilft PMO-Prüfern auch dabei, nützliche Abschlusslogik von Terminplanverknüpfungen zu trennen.

## Aufruf zum Handeln

Überprüfen Sie FF-Beziehungen, bei denen die Verzögerung größer ist als die Nachfolgedauer, bei Ihrer nächsten Aktualisierung des Primavera P6-Terminplans. Fragen Sie bei jedem einzelnen, ob die Beziehung wirklich auf Ziele ausgerichtet ist. Ist dies nicht der Fall, ersetzen Sie es durch eine klarere Logik oder modellieren Sie die Wartezeit direkt.
## Verwandte Inhalte
- [FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist - Überblick](01_overview_template.md)
- [FF-Beziehungen mit einer Verzögerung, die größer als die Nachfolgerdauer ist - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
