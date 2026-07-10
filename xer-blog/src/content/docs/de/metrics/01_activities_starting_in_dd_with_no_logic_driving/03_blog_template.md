---
title: "Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen"
seo_title: "Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen - Primavera P6"
meta_description: "Erklärt, warum Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen"
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen"
  - "Primavera P6 Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-blog-article-activities-starting-on-the-data-date-with-no-logic-driving-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen: Warum diese Terminplanmetrik wichtig ist CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/01_activities_starting_in_dd_with_no_logic_driving/01_overview_template.md"
  - "09_metrics_de/01_activities_starting_in_dd_with_no_logic_driving/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/01_activities_starting_in_dd_with_no_logic_driving/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen

## Titel

Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen: Warum diese Terminplanmetrik wichtig ist

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planungsingenieure, Projektsteuerungsingenieure, Planer, Projektmanager und PMO-Prüfer, die Primavera P6 zur Bewertung der Terminqualität verwenden. Dies ist besonders nützlich für Teams, die Terminplanaktualisierungen überprüfen und bestätigen müssen, ob kurzfristige Aktivitäten ordnungsgemäß von der CPM-Logik gesteuert werden.

## Öffnungshaken

Eine der häufigsten Überraschungen bei der Terminüberprüfung ist der Anblick einer Gruppe von Aktivitäten, die alle am Datenstichtag beginnen. Auf den ersten Blick mag es so aussehen, als sei das Projektteam bereit, sofort mit mehreren Arbeiten zu beginnen. Wenn diesen Aktivitäten jedoch keine Logik zugrunde liegt, sagt der Terminplan möglicherweise eine schwächere Aussage: Die Aktivitäten beginnen, weil die Aktualisierungsgrenze verschoben wurde, und nicht, weil die Arbeit wirklich fertig ist.

## Einführung

Der Datenstichtag in Primavera P6 ist die Trennlinie zwischen der Vergangenheit und der Prognose. Alles davor sollte den tatsächlichen Fortschritt oder die abgeschlossene Arbeit darstellen. Alles, was danach folgt, sollte den Plan von diesem Punkt an darstellen.

Da der Datenstichtag so wichtig ist, verdienen Aktivitäten, die genau an diesem Datum beginnen, Aufmerksamkeit. Einige können gültig sein, beispielsweise eine Aktivität, die nach einer formellen Mitteilung, einer Zugangsfreigabe oder einem Projektstart genehmigt wurde. Wenn jedoch eine offene oder nicht gestartete Aktivität am Datenstichtag beginnt, ohne dass die Vorgängerlogik vorangetrieben wird, sollte der Terminplanprüfer eine Pause einlegen.

Diese Metrik sucht nach Aktivitäten, deren Start am Datenstichtag geplant ist, ohne dass eine gültige Logik diesen Start steuert. Das Ziel sind null ungelöste Aktivitäten. Dokumentieren und genehmigen Sie alle Ausnahmen.

## Was dieser Parameter bedeutet

Eine Aktivität, die am Datenstichtag ohne steuernde Logik beginnt, ist eine Aktivität, deren prognostiziertes Startdatum an der aktuellen Aktualisierungsgrenze liegt, ohne dass es einen klaren Vorgängerpfad gibt, der erklärt, warum sie beginnen kann.

Bei der CPM-Planung sollten Aktivitäten normalerweise durch Beziehungen verbunden sein. Eine Aktivität endet, eine andere beginnt. Ein Bereich wird frei, dann mobilisiert eine Mannschaft. Ein Designpaket wird genehmigt, dann kann die Beschaffung fortgesetzt werden. Mithilfe dieser Beziehungen kann der Terminplan aussagekräftige Daten, Pufferzeiten und das Verhalten kritischer Pfade berechnen.

Wenn die Logik fehlt, platziert Primavera P6 die Aktivität möglicherweise trotzdem irgendwo im Terminplan. Wenn die Aktivität offen ist und nicht ordnungsgemäß von Vorgängern gesteuert wird, kann sie nach der Berechnung des Terminplans am oder in der Nähe des Datenstichtags erscheinen. Das bedeutet nicht unbedingt, dass die Aktivität fertig ist. Dies bedeutet möglicherweise nur, dass der Terminplan keine bessere Logik hat, die angibt, wann die Aktivität beginnen soll.

Ein hoher Wert für diese Metrik deutet darauf hin, dass der Terminplan offene Starts, eine schwache Vorgängerlogik, künstliche Einschränkungen oder Aktualisierungsprobleme aufweist. Eine niedrige Zahl, idealerweise Null, deutet darauf hin, dass kurzfristige Arbeiten besser mit dem Terminplannetz verbunden sind.

## Warum dieses Thema wichtig ist

Diese Metrik ist wichtig, da die Projektberichterstattung am Datenstichtag am sensibelsten ist. Der aktualisierte Terminplan beantwortet praktische Fragen:

- Mit welcher Arbeit soll als nächstes begonnen werden?
- Welche Aktivitäten stehen bereit?
- Was treibt den kritischen oder längsten Weg voran?
- Wo liegen die kurzfristigen Risiken?
- Sind die Prognosedaten zuverlässig?

Wenn Aktivitäten am Datenstichtag ohne steuernde Logik beginnen, können die Antworten irreführend sein. Der Terminplan kann Arbeiten als verfügbar anzeigen, wenn Vorgängerarbeiten, Genehmigungen, Materialien, Zugriffe oder Schnittstellen tatsächlich nicht abgeschlossen sind.

Dies kann Puffer-Werte verzerren, den kritischen Pfad schwächen und die Vorausschauplanung weniger zuverlässig machen.

Auch für die PMO-Governance ist dies ein Qualitätssignal. Bei Beurteilungen im DCMA-Stil und allgemeinen Gesundheitsprüfungen des Terminplans liegt der Schwerpunkt auf vollständiger Logik, gültiger Reihenfolge und vertretbaren Daten.

## Häufige Ursachen für schlechte Ergebnisse

Die häufigsten Gründe für eine schlechte Leistung dieser Metrik sind praktischer Natur und können in der Regel behoben werden.

- Fehlende Vorgängerbeziehungen
- Vorgänger, die existieren, aber die Aktivität nicht wirklich vorantreiben
- Anstelle echter Logik werden Startbeschränkungen oder erwartete Termine verwendet
- Unvollständige Fortschrittsaktualisierungen oder fehlende tatsächliche Starts
- Offene Aktivitäten, die von der frühen Terminplanentwicklung übrig geblieben sind
- Der Fortschritt ist nicht in der richtigen Reihenfolge oder die Aktualisierungseinstellungen wurden nicht überprüft
- Externe Schnittstellenaktivitäten, die nicht als Ausnahmen dokumentiert wurden

Der entscheidende Punkt ist, dass es sich hierbei nicht nur um ein Formatierungsproblem handelt. Das Problem besteht darin, dass der Terminplan möglicherweise nicht erklärt, warum das Datum gültig ist.

## So verbessern Sie das Ergebnis

### 1. Erstellen Sie ein P6-Layout, das das Problem deutlich zeigt

Erstellen Sie zunächst ein Layout oder einen Bericht in Primavera P6, der nach offenen oder noch nicht begonnenen Aktivitäten filtert, deren Startdatum dem Datenstichtag entspricht. Fügen Sie Spalten hinzu, die dem Prüfer helfen, die Ursache zu verstehen: Aktivitäts-ID, Aktivitätsname, PSP, Start, Ende, Status, Gesamtpuffer, Kalender, primäre Einschränkung, Vorgänger und Nachfolger.

### 2. Korrigieren Sie fehlende oder schwache Logik

Fragen Sie bei jeder Aktivität, was passieren muss, bevor mit dieser Arbeit begonnen werden kann. Die Antwort kann ein physischer Vorgänger, eine technische Leistung, ein Beschaffungsereignis, eine Genehmigung, eine Übergabe oder eine Zugangsbedingung sein.

Fügen Sie eine Logik hinzu, die eine echte Abhängigkeit darstellt, nicht nur eine Beziehung, die hinzugefügt wird, um die Metrik zu übergeben. Eine Ende-zu-Anfang-Beziehung mag in vielen Fällen richtig sein, bei sich überschneidenden Arbeiten können jedoch Anfang-zu-Anfang- oder Ende-Ende-Beziehungen realistischer sein. Verwenden Sie den Beziehungstyp, der widerspiegelt, wie die Arbeit tatsächlich verwaltet wird.

Nachdem Sie die Logik hinzugefügt haben, berechnen Sie den Terminplan neu und prüfen Sie, ob der Start nun tatsächlich durch den Abschluss des Vorgängers bestimmt wird.

### 3. Überprüfen Sie Einschränkungen, Status und Ausnahmen

Aufgrund von Einschränkungen beginnen einige Aktivitäten am Stichtag. Einschränkungen sind nicht automatisch falsch, sollten aber mit Bedacht eingesetzt werden. Wenn eine Startbeschränkung die normale Logik ersetzt, kann sie die wahre Sequenz verbergen und Puffer verzerren.

Überprüfen Sie auch den Status. Wenn eine Aktivität tatsächlich begonnen hat, geben Sie den tatsächlichen Start und die verbleibende Dauer korrekt ein. Wenn es noch nicht gestartet ist, lassen Sie es nicht als bereit erscheinen, es sei denn, die Logik unterstützt diese Prognose.

Dokumentieren Sie abschließend Ausnahmen. Für einen Projektstartmeilenstein oder eine extern autorisierte Aktivität ist möglicherweise kein normaler Vorgänger erforderlich. Wenn es jedoch im Metrikergebnis verbleibt, sollte der Grund für den Planer, den Projektkontrollleiter und den PMO-Prüfer klar sein.

## Beispielszenario

Stellen Sie sich einen BauTerminplan mit dem Datenstichtag 1. Juni vor. Nach der monatlichen Aktualisierung findet der Planer 18 nicht gestartete Aktivitäten mit dem Startdatum 01. Juni und ohne vorantreibende Vorgängerlogik.

Zunächst geht das Team davon aus, dass es sich um startbereite Aktivitäten handelt. Doch die Rezension zeigt etwas anderes. Bei mehreren Installationsaktivitäten fehlen Vorgängerlinks zur Materiallieferung. Einige Testaktivitäten sind nicht mit dem Abschluss der Installation verbunden. Für zwei Aktivitäten gelten alte Startbeschränkungen. Eine Aktivität ist ein legitimer Schnittstellenmeilenstein, der als Ausnahme dokumentiert werden sollte.

Der Planer fügt die fehlenden Beziehungen hinzu, entfernt unnötige Einschränkungen, aktualisiert die Ausnahmenotiz und berechnet den Terminplan neu. Das Ergebnis sinkt von 18 Aktivitäten auf eine dokumentierte Ausnahme. Der Ausblick gibt dem Projektteam nun einen viel klareren Überblick darüber, was wirklich startbereit ist.

## Empfohlener Verbesserungsplan

Nutzen Sie einen einfachen einwöchigen Verbesserungszyklus:

- Tag 1: Überprüfen Sie das aktuelle Ergebnis und bestätigen Sie der Datenstichtag.
- Tage 2–3: Fehlende Vorgängerlogik korrigieren und ungerechtfertigte Einschränkungen beseitigen.
- Tage 4–5: Berechnen Sie den Terminplan neu und überprüfen Sie den Puffer, den längsten Weg und die Meilensteinauswirkungen.
- Tag 6: Beheben Sie verbleibende Probleme mit Disziplinarleitern oder Paketeigentümern.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie alle genehmigten Ausnahmen.

## Zu vermeidende Fehler

Vermeiden Sie das Hinzufügen zufälliger Vorgängerbeziehungen, nur um die Anzahl der Metriken zu reduzieren. Die Logik sollte den tatsächlichen Arbeitsablauf darstellen.

Vermeiden Sie die Verwendung von Einschränkungen als Abkürzung, wenn eine Beziehung den Terminplan besser erklären würde. Einschränkungen können gültig sein, sie sollten jedoch kein Ersatz für die CPM-Logik sein.

Vermeiden Sie es, Aktivitäten zu ignorieren, da sie sich nicht auf dem kritischen Pfad befinden. Kurzfristige unkritische Arbeiten wirken sich immer noch auf die Koordination, Vorausplanung und Ressourcenbereitschaft aus.

Vermeiden Sie es, Ausnahmen beiläufig zu behandeln. Wenn eine Aktivität absichtlich am Datenstichtag beginnen darf, ohne dass eine entsprechende Logik vorliegt, dokumentieren Sie den Grund.

## Wichtige Erkenntnisse

- Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen, können auf fehlende Sequenzierung oder schwache Aktualisierungsdisziplin hinweisen.
- Das angestrebte Ergebnis sind null ungelöste Aktivitäten.
- Es kann gültige Ausnahmen geben, diese sollten jedoch dokumentiert und genehmigt werden.
- Die beste Korrektur ist echte CPM-Logik, keine künstlichen Beziehungen oder unnötigen Einschränkungen.
- Berechnen und überprüfen Sie Puffer, längsten Pfad und kurzfristige Aktivitäten neu, nachdem Sie Änderungen vorgenommen haben.

## Abschluss

Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen, verdienen eine sorgfältige Prüfung, da sie an dem Punkt angesiedelt sind, an dem die tatsächliche Leistung endet und die Prognose beginnt.

Wenn diese Metrik kontrolliert wird, wird es einfacher, dem Terminplan zu vertrauen. Kurzfristige Arbeiten sind besser vernetzt, der kritische Pfad ist klarer und die Berichterstattung ist aussagekräftiger.

Um das Ergebnis zu verbessern, ist eine disziplinierte Terminplanprüfung erforderlich: Identifizieren Sie die Aktivitäten, verstehen Sie, warum sie beginnen, fügen Sie gültige Logik hinzu, entfernen Sie unnötige Einschränkungen, korrigieren Sie den Status und dokumentieren Sie Ausnahmen.

## Aufruf zum Handeln

Sehen Sie sich Ihre neueste Aktualisierung des Primavera P6-Terminplans an und filtern Sie nach offenen oder noch nicht begonnenen Aktivitäten, die am Datenstichtag beginnen. Stellen Sie für jeden eine einfache Frage: Was treibt diesen Start voran? Wenn die Antwort nicht klar ist, korrigieren Sie die Logik oder dokumentieren Sie die Ausnahme, bevor der Terminplan herausgegeben wird.
## Verwandte Inhalte
- [Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen: Warum diese Terminplanmetrik wichtig ist - Überblick](01_overview_template.md)
- [Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen: Warum diese Terminplanmetrik wichtig ist - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
