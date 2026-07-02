---
title: 'Was für ein Zeitplan ist'
description: ''
pubDate: 'Jul 2 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-2.jpg
---

Ein Projektplan ist mehr als eine Liste von Terminen. Es handelt sich um eine grafische und logische Darstellung des Projektlieferplans. Es erklärt, wie das Projekt von Anfang bis Ende durchgeführt wird, wie Arbeitspakete zusammenhängen, wann wichtige Meilensteine ​​erreicht werden sollten und welche Informationen das Projektteam für seine Entscheidungen nutzen sollte.

In simple terms, the schedule turns the project plan into a roadmap. It helps everyone involved understand what needs to be done, when it needs to happen, and who is responsible for making it happen. Für Projektmanager, Planer, Bauteams, Ingenieure, Beschaffungsleiter und PMO-Prüfer wird der Zeitplan zu einem der wichtigsten Werkzeuge zur Koordination und Kontrolle.

Der Zeitplan ist ein Zeitplan, aber nicht nur ein Zeitplan. Ein schwacher Zeitplan zeigt möglicherweise Termine an. Ein starker Zeitplan erklärt, warum diese Daten glaubwürdig sind.

## Der Zeitplan als Liefer-Roadmap

Jedes Projekt beginnt mit einer Absicht. Das Team weiß, was geliefert werden muss: ein Gebäude, eine Anlage, ein Industriesystem, eine Abschaltung, eine Infrastrukturanlage oder ein Arbeitspaket. Aber die Lieferung erfordert mehr als nur die Kenntnis des Endziels. Das Team muss die Reihenfolge verstehen.

Was kommt zuerst? Was kann parallel passieren? Was muss auf die Entwurfsgenehmigung, Materiallieferung, Zugang, Genehmigungsfreigabe, Prüfung oder Übergabe warten? Welche Aktivitäten steuern den Endtermin? Welche Meilensteine ​​sind für den Kunden am wichtigsten?

Ein Zeitplan beantwortet diese Fragen, indem er den Plan in Aktivitäten, Dauer, Abhängigkeiten, Kalender, Ressourcen, Kosten und Meilensteine ​​umwandelt.

```mermaid
flowchart LR
    A["Projektlieferplan"] --> B["Aufschlüsselung der Aktivitäten und des Umfangs"]
    B --> C["Dauer, Kalender, Ressourcen und Kosten"]
    C --> D["Abhängigkeiten und Reihenfolge"]
    D --> E["Berechneter Zeitplan"]
    E --> F["Meilensteine, kritischer Pfad, Float, Histogramme, Kurven und Cashflow"]
```

Die grafische Zeitleiste ist nützlich, da die Leute die Arbeit sehen können. Das Logiknetzwerk ist nützlich, da die Software die Arbeit berechnen kann. Zusammen ermöglichen sie, dass der Zeitplan sowohl zu einem Kommunikationsinstrument als auch zu einem Kontrollinstrument wird.

## Was speist den Zeitplan?

Ein Zeitplan ist nur so zuverlässig wie die Informationen, die zu seiner Erstellung verwendet werden. In Primavera P6 wird der Zeitplan durch mehrere wichtige Eingaben gespeist.

Die erste Eingabe ist die Aktivitätsliste. Aktivitäten unterteilen das Projekt in überschaubare Arbeitsschritte. Jede Aktivität sollte klar genug sein, um sie planen, bewerten und messen zu können.

Die zweite Eingabe ist die deterministische Dauer. Dies ist die geplante Arbeitszeit, die zur Erledigung jeder Aktivität benötigt wird. Die Dauer sollte die Ausführungsmethode, Produktivitätsannahmen, Teamgröße, Zugang, Einschränkungen der Arbeitsfläche und Projektbedingungen widerspiegeln.

Die dritte Eingabe ist die Abhängigkeitslogik. Abhängigkeiten erklären, wie Aktivitäten miteinander in Beziehung stehen. Möglicherweise muss eine Aktivität abgeschlossen sein, bevor eine andere beginnt. Zwei Aktivitäten können gleichzeitig beginnen. Möglicherweise müssen zwei Oberflächen ausgerichtet werden. Diese Beziehungen bilden das CPM-Netzwerk.

The fourth input is sequencing. Sequencing is the practical order of execution. Dabei werden Baubarkeit, technischer Ablauf, Beschaffungszeitpunkt, Zugang, Inbetriebnahmelogik, Übergabestrategie und Kundenprioritäten berücksichtigt.

Der fünfte Input sind Ressourcen und Kosten. Durch die Ressourcenauslastung kann der Zeitplan Arbeits-, Ausrüstungs- und Materialbedarf im Zeitverlauf anzeigen. Durch die Kostenbelastung kann der Zeitplan Cashflow, Ertragswert und Finanzprognosen unterstützen.

Wenn diese Eingaben vollständig und realistisch sind, kann der Zeitplan nützliche Ergebnisse liefern.

## Was uns der Zeitplan sagt

Ein gut ausgearbeiteter Zeitplan gibt Aufschluss über die Gesamtdauer des Projekts. Es zeigt geplante Fertigstellungsmeilensteine ​​und Zwischenergebnisse an. Es erstellt Ressourcenhistogramme, die zeigen, wann der Arbeits- oder Ausrüstungsbedarf steigt und fällt. Es unterstützt Fortschrittskurven, Cashflow-Kurven, Earned-Value-Reporting und Look-Ahead-Planung.

Am wichtigsten ist, dass es den kritischen Pfad oder längsten Pfad identifiziert. Dies ist die Arbeitskette, die den Projektabschluss vorantreibt. Wenn Aktivitäten auf diesem Pfad verschoben werden, kann sich auch der Abschlusstermin des Projekts verschieben. Deshalb ist Logik so wichtig. Ohne gute Abhängigkeiten zeigt der kritische Pfad möglicherweise nicht die tatsächlichen Treiber des Projekts.

Float ist eine weitere wichtige Ausgabe. Float gibt an, wie viel Flexibilität eine Aktivität hat, bevor sie sich auf eine andere Aktivität oder den Projektabschluss auswirkt. Float ist jedoch nur dann sinnvoll, wenn das Zeitplannetzwerk vollständig ist. Fehlt den Aktivitäten die Logik, kann Float besser oder schlechter aussehen als die Realität.

## Warum Logik die Zeitleiste glaubwürdig macht

Hier wird die Metrik „Aktivitäten beginnend am Datendatum ohne Fahrlogik“ wichtig.

Das Datendatum in P6 ist die Grenze zwischen der tatsächlichen Leistung und der Prognose. Alles vor dem Datendatum sollte das widerspiegeln, was bereits geschehen ist. Alles nach dem Datendatum sollte den Plan von nun an darstellen.

Wenn Aktivitäten genau am Datendatum beginnen und keine Logik dahinter steckt, sendet der Zeitplan ein Warnsignal. Es mag so aussehen, als ob die Arbeiten sofort beginnen könnten, aber der Zeitplan lässt sich möglicherweise nicht erklären, warum. Möglicherweise gibt es keinen Vorgänger, der zeigt, dass der Bereich verfügbar ist, keine Verbindung zur Materiallieferung, keine Verbindung zur Entwurfsgenehmigung, keine Verbindung zur Inspektionsfreigabe und keine Logik aus früheren Arbeiten.

Das ist wichtig, denn ein Zeitplan sollte die Arbeit nicht einfach auf ein Datum festlegen. Es sollte den Weg zu diesem Datum erklären.

Wenn eine Aktivität am Datendatum beginnt, weil alle erforderlichen Vorgängerarbeiten abgeschlossen sind und die Logik den Start unterstützt, ist das Datum vertretbar. Wenn es dort beginnt, weil die Aktivität offen, nicht gesteuert, eingeschränkt oder schlecht aktualisiert ist, ist das Datum schwach. Das Projektteam glaubt möglicherweise, dass die Arbeit fertig ist, obwohl die tatsächlichen Voraussetzungen noch nicht modelliert wurden.

## Ein praktisches Beispiel

Stellen Sie sich einen Projektzeitplan mit dem Datendatum 1. Juni vor. Nach dem Update starten am 01. Juni mehrere Aktivitäten:

- Installieren Sie die Kabelrinne im Bereich B.
- Beginnen Sie mit der Rohrdruckprüfung.
- Beginnen Sie mit der Geräteausrichtung.
- Isolierpersonal mobilisieren.

Auf den ersten Blick scheint der Lookahead beschäftigt und bereit zu sein. Aber wenn der Planer die Logik überprüft, wird das Problem klar. Die Installation der Kabelrinnen ist nicht mit der Materiallieferung verbunden. Die Druckprüfung ist nicht mit der Fertigstellung der Rohrleitungen verbunden. Beim Vorgänger fehlt die Geräteausrichtung zur mechanischen Vervollständigung. Für die Mobilisierung der Isolierungsmannschaft gibt es keinen Vorgänger zur Zugangsfreigabe.

Der Zeitplan zeigt die Arbeiten zum Datentermin, erklärt jedoch nicht, warum die Arbeiten beginnen können. Das ist kein verlässlicher Fahrplan. Es handelt sich um eine Liste kurzfristiger Absichten.

Die Lösung besteht darin, echte CPM-Logik hinzuzufügen oder zu korrigieren. Wenn die Materiallieferung die Installation der Kabeltrasse vorantreibt, verknüpfen Sie sie. Wenn die Fertigstellung der Rohrleitungen Drucktests erfordert, verknüpfen Sie sie. Wenn die Zugangsfreigabe die Isolierung beeinflusst, modellieren Sie diesen Zustand. Nach der Neuberechnung beginnen einige Aktivitäten möglicherweise immer noch in der Nähe des Datendatums, aber jetzt kann der Zeitplan erklären, warum.

## Was ein guter Zeitplan bewirken sollte

Ein guter Zeitplan sollte dem Team helfen, den Plan zu erkennen, zu testen und zu verwalten.

Es sollte zeigen, was getan werden muss. Es sollte die Arbeitsreihenfolge erläutern. Es sollte erkennen, wer wann handeln muss. Es sollte den kritischen Pfad aufzeigen. Es sollte Ressourcenplanung, Fortschrittsmessung, Cashflow-Prognose und PMO-Berichte unterstützen.

Es soll auch Schwachstellen sichtbar machen. Fehlende Logik, strenge Einschränkungen, veraltete Termine, offene Starts, offene Enden und die Häufung von Aktivitäten am Datendatum sind nicht nur technische Probleme. Sie wirken sich darauf aus, wie das Projektteam Bereitschaft, Risiko und Kontrolle versteht.

## Abschluss

Ein Zeitplan ist der Projektabwicklungsplan, ausgedrückt in Zeit, Logik und messbarer Arbeit. Es ist eine Roadmap, ein Berechnungsmodell und ein Kommunikationstool.

Wenn es gut aufgebaut ist, sagt es dem Projektteam, was passieren muss, wann es passieren muss und warum die Termine glaubwürdig sind. Wenn Aktivitäten am Datendatum ohne treibende Logik beginnen, wird diese Glaubwürdigkeit geschwächt. Der Zeitplan hört auf, den Plan zu erklären, und beginnt, den nächsten Schritt zu erraten.

Aus diesem Grund sollte bei der Überprüfung der Zeitplanqualität immer eine einfache Frage gestellt werden: Erklärt der Zeitplan, warum die Arbeit beginnt, wenn sie beginnt? Wenn die Antwort „Ja“ lautet, erfüllt der Zeitplan seine Aufgabe. Wenn die Antwort „Nein“ lautet, benötigt die Roadmap mehr Logik, bevor man ihr vertrauen kann.
