---
title: 'Vorgänge, die am Stichtag ohne steuernde Logik beginnen'
description: 'Warum Vorgänge, die am Stichtag ohne steuernde Logik beginnen, einen Primavera P6-Terminplan schwächen, was sie verursacht und wie man die Metrik Schritt für Schritt verbessert.'
pubDate: 'Jun 8 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-1.jpg
---

## Geschätzte Lese- / Sprechzeit

5–10 Minuten

## Zielumfang

750–1.500 Wörter

## Zielgruppe

Dieser Blog richtet sich an Planungsingenieure, Projektsteuerungsingenieure, Terminplaner, Projektmanager und PMO-Prüfer, die Primavera P6 zur Beurteilung der Terminqualität einsetzen. Er ist besonders nützlich für Teams, die Terminaktualisierungen überprüfen und bestätigen müssen, ob kurzfristige Vorgänge ordnungsgemäß durch CPM-Logik gesteuert werden.

## Einstieg

Eine der häufigsten Überraschungen bei Terminprüfungen ist, wenn man eine Gruppe von Vorgängen sieht, die alle am Stichtag beginnen. Auf den ersten Blick mag es so aussehen, als ob das Projektteam bereit ist, sofort mehrere Arbeitspakete zu beginnen. Wenn diese Vorgänge jedoch keine steuernde Logik haben, kann der Terminplan eine schwächere Geschichte erzählen: Die Vorgänge beginnen, weil sich die Aktualisierungsgrenze verschoben hat, nicht weil die Arbeit wirklich bereit ist.

## Einführung

Der Stichtag (Data Date) in Primavera P6 ist die Trennlinie zwischen Vergangenheit und Prognose. Alles davor sollte tatsächlichen Fortschritt oder abgeschlossene Arbeit darstellen. Alles danach sollte den Plan von diesem Zeitpunkt an darstellen.

Da der Stichtag so wichtig ist, verdienen Vorgänge, die genau daran beginnen, Aufmerksamkeit. Einige können gültig sein, z. B. ein Vorgang, der nach einer formellen Mitteilung, Zugangsgenehmigung oder einem Projektstart genehmigt wurde. Wenn jedoch ein offener oder nicht gestarteter Vorgang am Stichtag ohne steuernde Vorgängerlogik beginnt, sollte der Terminplanprüfer innehalten.

Diese Metrik sucht nach Vorgängen, die am Stichtag ohne gültige steuernde Logik starten sollen. Das Ziel sind null ungelöste Vorgänge. Dokumentieren und genehmigen Sie etwaige Ausnahmen.

## Was dieser Parameter bedeutet

Ein Vorgang, der am Stichtag ohne steuernde Logik beginnt, ist ein Vorgang, dessen prognostiziertes Startdatum an der aktuellen Aktualisierungsgrenze liegt, ohne einen klaren Vorgängerpfad, der erklärt, warum er beginnen kann.

Bei der CPM-Terminplanung sollten Vorgänge normalerweise durch Beziehungen verbunden sein. Ein Vorgang endet, ein anderer beginnt. Ein Bereich wird verfügbar, dann mobilisiert ein Team. Ein Entwurfspaket wird genehmigt, dann kann die Beschaffung fortfahren. Diese Beziehungen ermöglichen es dem Terminplan, bedeutungsvolle Termine, Puffer (Float) und kritisches Wegverhalten zu berechnen.

Wenn Logik fehlt, kann Primavera P6 den Vorgang immer noch irgendwo im Terminplan platzieren. Wenn der Vorgang offen und nicht ordnungsgemäß durch Vorgänger gesteuert ist, kann er nach der Terminplanberechnung am oder nahe dem Stichtag erscheinen. Das bedeutet nicht unbedingt, dass der Vorgang bereit ist. Es kann nur bedeuten, dass der Terminplan keine bessere Logik hat, die ihm sagt, wann der Vorgang beginnen sollte.

Eine hohe Anzahl für diese Metrik deutet darauf hin, dass der Terminplan offene Starts, schwache Vorgängerlogik, künstliche Einschränkungen oder Aktualisierungsprobleme hat. Eine niedrige Anzahl, idealerweise null, deutet darauf hin, dass kurzfristige Arbeit besser mit dem Terminplannetzwerk verbunden ist.

## Warum dieses Thema wichtig ist

Diese Metrik ist wichtig, weil der Stichtag der Ort ist, an dem die Projektberichterstattung am sensibelsten wird. Der aktualisierte Terminplan beantwortet praktische Fragen:

- Welche Arbeit sollte als nächstes starten?
- Welche Vorgänge sind bereit?
- Was steuert den kritischen oder längsten Weg?
- Wo liegen die kurzfristigen Risiken?
- Sind prognostizierte Termine zuverlässig?

Wenn Vorgänge am Stichtag ohne steuernde Logik beginnen, können die Antworten irreführend sein. Der Terminplan kann Arbeit als verfügbar anzeigen, wenn Vorgängerarbeit, Genehmigungen, Materialien, Zugang oder Schnittstellen nicht tatsächlich abgeschlossen sind.

Dies kann Pufferwerte verzerren, den kritischen Weg schwächen und die Vorausschauplanning (Lookahead) weniger zuverlässig machen.

Für die PMO-Governance ist dies auch ein Qualitätssignal. DCMA-artige Bewertungen und gängige Termingesundheitsprüfungen betonen vollständige Logik, gültige Sequenzierung und verteidigbare Termine.

## Häufige Ursachen schlechter Ergebnisse

Die häufigsten Gründe, warum diese Metrik schlecht abschneidet, sind praktisch und meist behebbar.

- Fehlende Vorgängerbeziehungen
- Vorgänger, die existieren, den Vorgang aber nicht wirklich steuern
- Starteinschränkungen oder erwartete Termine anstelle echter Logik
- Unvollständige Fortschrittsaktualisierungen oder fehlende Ist-Starts
- Offene Starts aus der frühen Terminplanentwicklung
- Außerplanmäßiger Fortschritt oder Aktualisierungseinstellungen, die nicht überprüft wurden
- Externe Schnittstellenvorgänge, die nicht als Ausnahmen dokumentiert wurden

Der entscheidende Punkt ist, dass dies kein Formatierungsproblem ist. Das Problem ist, dass der Terminplan möglicherweise nicht erklären kann, warum das Datum gültig ist.

## Wie man das Ergebnis verbessert

### 1. Ein P6-Layout erstellen, das das Problem klar zeigt

Erstellen Sie zunächst ein Layout oder einen Bericht in Primavera P6, das/der nach offenen oder nicht gestarteten Vorgängen mit einem Startdatum gleich dem Stichtag filtert. Fügen Sie Spalten hinzu, die dem Prüfer helfen, die Ursache zu verstehen: Vorgangs-ID, Vorgangsname, PSP (WBS), Start, Ende, Status, Gesamtpuffer, Kalender, primäre Einschränkung, Vorgänger und Nachfolger.

### 2. Fehlende oder schwache Logik korrigieren

Fragen Sie für jeden Vorgang, was vor dieser Arbeit geschehen muss. Die Antwort kann ein physischer Vorgänger, ein Engineering-Liefergegenstand, ein Beschaffungsereignis, eine Genehmigung, eine Übergabe oder eine Zugangsbedingung sein.

Fügen Sie Logik hinzu, die echte Abhängigkeit darstellt, nicht nur eine Beziehung, die hinzugefügt wurde, um die Metrik zu erfüllen. Eine Ende-Anfang-Beziehung (Finish-to-Start) kann in vielen Fällen richtig sein, aber Anfang-Anfang- (Start-to-Start) oder Ende-Ende-Beziehungen (Finish-to-Finish) können für überlappende Arbeit realistischer sein. Verwenden Sie den Beziehungstyp, der widerspiegelt, wie die Arbeit tatsächlich verwaltet wird.

Berechnen Sie nach dem Hinzufügen von Logik den Terminplan neu und prüfen Sie, ob der Start jetzt wirklich durch den Abschluss des Vorgängers gesteuert wird.

### 3. Einschränkungen, Status und Ausnahmen überprüfen

Einige Vorgänge beginnen am Stichtag aufgrund von Einschränkungen. Einschränkungen sind nicht automatisch falsch, sollten aber sorgfältig verwendet werden. Wenn eine Starteinschränkung normale Logik ersetzt, kann sie die echte Abfolge verbergen und den Puffer verzerren.

Überprüfen Sie auch den Status. Wenn ein Vorgang tatsächlich gestartet hat, geben Sie den Ist-Start und die verbleibende Dauer korrekt ein. Wenn er nicht gestartet hat, erlauben Sie nicht, dass er als bereit erscheint, es sei denn, die Logik unterstützt diese Prognose.

Dokumentieren Sie schließlich Ausnahmen. Ein Projektstart-Meilenstein oder ein extern genehmigter Vorgang benötigt möglicherweise keinen normalen Vorgänger. Wenn er jedoch im Metrikergebnis verbleibt, sollte der Grund für den Terminplaner, den Projektsteuerungsleiter und den PMO-Prüfer klar sein.

## Beispielszenario

Stellen Sie sich einen Bauterminplan mit einem Stichtag vom 01. Juni vor. Nach der monatlichen Aktualisierung findet der Terminplaner 18 nicht gestartete Vorgänge mit Startdaten am 01. Juni und ohne steuernde Vorgängerlogik.

Zunächst geht das Team davon aus, dass diese Vorgänge startbereit sind. Die Überprüfung zeigt jedoch etwas anderes. Mehrere Installationsvorgänge haben keine Vorgängerverknüpfungen zur Materiallieferung. Einige Testvorgänge sind nicht mit dem Installationsabschluss verknüpft. Zwei Vorgänge haben alte Starteinschränkungen. Ein Vorgang ist ein berechtigter Schnittstellen-Meilenstein, der als Ausnahme dokumentiert werden sollte.

Der Terminplaner fügt die fehlenden Beziehungen hinzu, entfernt unnötige Einschränkungen, aktualisiert die Ausnahmedokumentation und berechnet den Terminplan neu. Das Ergebnis sinkt von 18 Vorgängen auf eine dokumentierte Ausnahme. Der Vorausschau gibt dem Projektteam nun einen viel klareren Überblick darüber, was wirklich bereit ist zu starten.

## Empfohlener Verbesserungsplan

Verwenden Sie einen einfachen einwöchigen Verbesserungszyklus:

- Tag 1: Aktuelles Ergebnis überprüfen und Stichtag bestätigen.
- Tage 2–3: Fehlende Vorgängerlogik korrigieren und ungerechtfertigte Einschränkungen entfernen.
- Tage 4–5: Terminplan neu berechnen und Puffer, längsten Weg und Meilensteinauswirkung überprüfen.
- Tag 6: Verbleibende Probleme mit Fachbereichsleitern oder Paketverantwortlichen lösen.
- Tag 7: Metrik neu bewerten und etwaige genehmigte Ausnahmen dokumentieren.

## Fehler, die zu vermeiden sind

Vermeiden Sie das Hinzufügen zufälliger Vorgängerbeziehungen nur um die Metrikanzahl zu reduzieren. Logik sollte echte Arbeitsabfolge darstellen.

Vermeiden Sie die Verwendung von Einschränkungen als Abkürzung, wenn eine Beziehung den Terminplan besser erklären würde. Einschränkungen können gültig sein, sollten aber kein Ersatz für CPM-Logik werden.

Vermeiden Sie es, Vorgänge zu ignorieren, weil sie nicht auf dem kritischen Weg liegen. Kurzfristige unkritische Arbeit beeinflusst immer noch die Koordination, Vorausschauplanning und Ressourcenbereitschaft.

Vermeiden Sie lässigen Umgang mit Ausnahmen. Wenn ein Vorgang absichtlich am Stichtag ohne steuernde Logik starten darf, dokumentieren Sie den Grund.

## Wichtigste Erkenntnisse

- Vorgänge, die am Stichtag ohne steuernde Logik beginnen, können auf fehlende Sequenzierung oder schwache Aktualisierungsdisziplin hinweisen.
- Das Zielergebnis sind null ungelöste Vorgänge.
- Gültige Ausnahmen können existieren, sollten aber dokumentiert und genehmigt werden.
- Die beste Korrektur ist echte CPM-Logik, keine künstlichen Beziehungen oder unnötigen Einschränkungen.
- Terminplan neu berechnen und nach Änderungen Puffer, längsten Weg und kurzfristige Vorgänge überprüfen.

## Fazit

Vorgänge, die am Stichtag ohne steuernde Logik beginnen, verdienen sorgfältige Überprüfung, weil sie an dem Punkt liegen, wo die tatsächliche Leistung endet und die Prognose beginnt.

Wenn diese Metrik kontrolliert wird, wird der Terminplan leichter vertrauenswürdig. Kurzfristige Arbeit ist besser verbunden, der kritische Weg ist klarer und die Berichterstattung ist stärker.

Die Verbesserung des Ergebnisses erfordert disziplinierte Terminplanprüfung: Vorgänge identifizieren, verstehen, warum sie starten, gültige Logik hinzufügen, unnötige Einschränkungen entfernen, Status korrigieren und Ausnahmen dokumentieren.

## Handlungsaufforderung

Überprüfen Sie Ihre neueste Primavera P6-Terminplanaktualisierung und filtern Sie nach offenen oder nicht gestarteten Vorgängen, die am Stichtag beginnen. Stellen Sie für jeden eine einfache Frage: Was treibt diesen Start? Wenn die Antwort nicht klar ist, korrigieren Sie die Logik oder dokumentieren Sie die Ausnahme, bevor der Terminplan ausgegeben wird.

## Verwandte Metriken

- [Vorgänge, die am Stichtag ohne steuernde Logik beginnen — Übersicht](/de/metrics/data-date-no-driving-logic-overview/)
