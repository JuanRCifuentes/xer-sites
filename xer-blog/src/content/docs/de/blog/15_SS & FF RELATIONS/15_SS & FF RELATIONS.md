---
title: "SS- und FF-Beziehungen"
seoTitle: "SS- und FF-Beziehungen - Primavera P6"
description: "Lernen Sie SS- und FF-Beziehungen in Primavera P6 mit praktischem Fokus auf Terminplanung, Projektcontrolling und Terminplanqualität."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "SS- und FF-Beziehungen"
  - "Primavera P6 SS- und FF-Beziehungen"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/ss-and-ff-relations-in-primavera-p6"
language: "de"
contentType: "blog"
draft: false
version: "1.0"
topic: "Terminplanung in Primavera P6"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primarySearchIntent: "Lernen Sie SS- und FF-Beziehungen in Primavera P6 mit praktischem Fokus auf Terminplanung, Projektcontrolling und Terminplanqualität."
relatedMetrics:
  - "09_metrics_de/01_activities_starting_in_dd_with_no_logic_driving/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/14_RESOURCES BALANCING IN P6/14_RESOURCES BALANCING IN P6.md"
  - "09b_blogs_de/16_CPM (CRITICAL PATH METHOD)/16_CPM (CRITICAL PATH METHOD).md"
translationOf: "01b_blogs_en/15_SS & FF RELATIONS/15_SS & FF RELATIONS.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Start-to-Start (SS) und Finish-to-Finish (FF) sind gueltige Logiktypen in Primavera P6. Sie sind nuetzlich, wenn zwei Vorgaenge ueberlappen und der Terminplan diese Ueberlappung genauer abbilden soll als eine einfache Finish-to-Start-Beziehung.

Das Problem liegt nicht in SS oder FF selbst. Das Problem entsteht, wenn sie allein verwendet werden, obwohl ein Vorgang an beiden Enden logisch gesteuert werden muss. Eine einzelne SS-Beziehung steuert den Start des Nachfolgers, aber nicht sein Ende. Eine einzelne FF-Beziehung steuert das Ende des Nachfolgers, aber nicht seinen Start. Deshalb nennen viele Terminplaner solche Verknuepfungen halbe Beziehungen.

## Was SS und FF Bedeuten

Eine SS-Beziehung bedeutet, dass der Nachfolger starten kann, wenn der Vorgaenger startet, oder nach einem definierten lag ab dem Start des Vorgaengers.

Eine FF-Beziehung bedeutet, dass der Nachfolger enden kann, wenn der Vorgaenger endet, oder nach einem definierten lag ab dem Ende des Vorgaengers.

Beide koennen reale Arbeit darstellen. Eine technische Pruefung kann beginnen, nachdem die Planerstellung gestartet ist. Tests koennen erst enden, wenn die Installation abgeschlossen ist. Bei bereichsweiser Ausfuehrung kann ein Gewerk nach dem Start eines anderen Gewerks beginnen, waehrend auch das Ende gesteuert werden muss.

## Warum Eine Einzelne SS Unvollstaendig Sein Kann

Eine einzelne SS verankert nur den Start des Nachfolgers. Sie erklaert nicht, was sein Ende steuert.

Wenn sich die Dauer des Nachfolgers aendert oder die Aktivitaet unrealistisch weit laeuft, zeigt der Terminplan die Auswirkung moeglicherweise nicht korrekt, sofern keine nachgelagerte Logik sie auffaengt. Der Start ist verbunden, das Ende kann aber frei bleiben.

In P6 kann der Terminplan dadurch besser vernetzt aussehen, als er wirklich ist.

## Warum Eine Einzelne FF Unvollstaendig Sein Kann

Eine einzelne FF erzeugt das Gegenproblem. Sie verankert das Ende des Nachfolgers, erklaert aber nicht, wann der Nachfolger starten darf.

Dadurch kann der early start, besonders in einem aktualisierten Terminplan, zu weit in die Vergangenheit berechnet werden. Der Vorgang kann so wirken, als koenne er an der Datenstichtag oder frueher starten, nicht weil die Arbeit wirklich bereit ist, sondern weil die Startbedingung fehlt.

Das kann Puffer, kritischer Pfad und kurzfristige Planung verzerren.

## Das SS + FF Paar

Wenn Arbeit tatsaechlich ueberlappt, ist ein SS + FF Paar oft das staerkere Modell.

SS steuert, wann der Nachfolger starten darf. FF steuert, wann er enden darf. Zusammen definieren sie den logischen Rahmen der ueberlappenden Arbeit.

```mermaid
flowchart LR
    A["Vorgaenger"] -- "SS: Startbedingung" --> B["Nachfolger"]
    A -- "FF: Endbedingung" --> B
    B --> C["Start und Ende sind logisch verankert"]
```

Das ist sinnvoll bei kontinuierlichen Arbeiten, Ausfuehrung nach Bereichen, Entwurfs- und Pruefzyklen, Installation und Tests oder repetitiven Sequenzen.

## Wann Eine Einzelne SS oder FF Akzeptabel Sein Kann

Nicht jede einzelne SS oder FF ist automatisch falsch.

Eine einzelne SS kann akzeptabel sein, wenn das Ende des Nachfolgers durch eine andere gueltige nachgelagerte Beziehung gesteuert wird. Eine einzelne FF kann akzeptabel sein, wenn der Start des Nachfolgers durch einen anderen gueltigen Vorgaenger gesteuert wird. Die zentrale Frage ist, ob beide Enden des Vorgangs irgendwo im Netzwerk kontrolliert sind.

Der Terminplaner muss erklaeren koennen, warum die einzelne Beziehung ausreicht.

## Pruefung in P6

In P6 sollten Aktivitaeten mit SS predecessors, SS successors, FF predecessors und FF successors geprueft werden. Besonders wichtig sind Aktivitaeten, deren einziger predecessor FF ist oder deren einziger successor SS ist.

Nuetzliche Felder sind Aktivitäts-ID, Aktivitätsname, Start, Finish, Activity Status, Gesamtpuffer, Predecessors, Successors, Beziehungstyp, Lag, Constraints und Steuernde Beziehung, falls verfuegbar.

Fragen Sie:

- Was erlaubt dieser Aktivitaet zu starten?
- Was steuert ihr Ende?
- Ist die Ueberlappung technisch oder vertraglich real?
- Versteckt lag fehlende Detaillierung?
- Erklaert die Beziehung den Ausfuehrungsplan?
- Wuerde ein unabhaengiger Pruefer die Logik verstehen?

## Haeufige Probleme

Ein haeufiges Problem ist die Verwendung von SS, um Arbeit nach vorn zu ziehen, ohne die echte Startbedingung zu modellieren.

Ein anderes Problem ist die Verwendung von FF, um ein Enddatum zu halten, waehrend der Start offen bleibt.

SS und FF werden auch genutzt, wenn die Arbeit eigentlich in kleinere Aktivitaeten zerlegt werden sollte. Wenn ein Vorgang zu breit ist, wird mit Beziehungen ein Ergebnis erzwungen, statt die Arbeit sauberer zu modellieren.

## Gute Praxis

Verwenden Sie SS und FF bewusst. Sie sollten echte Abfolge darstellen, nicht Terminkosmetik.

Bei SS pruefen Sie, ob auch das Ende des Nachfolgers logisch gesteuert ist. Bei FF pruefen Sie, ob auch der Start des Nachfolgers logisch gesteuert ist.

Nutzen Sie SS + FF Paare fuer ueberlappende Arbeit, wenn Start und Ende verbunden sein muessen. Dokumentieren Sie Ausnahmen, wenn eine einzelne SS oder FF bewusst und vertretbar ist.

## Fazit

SS und FF sind nuetzliche Werkzeuge in P6, erfordern aber Disziplin. Allein verwendet koennen sie unvollstaendige Logik erzeugen, weil sie nur ein Ende eines Vorgangs steuern.

Ein verlaesslicher CPM-Terminplan muss erklaeren, warum Arbeit starten kann und was ihr Ende steuert. Wenn SS und FF diese Fragen beantworten, staerken sie den Terminplan. Wenn sie ein Ende offen lassen, entsteht schwache Logik, die geprueft werden sollte.
## Verwandte Inhalte
- [Aktivitäten, die am Datenstichtag ohne steuernde Logik beginnen: Warum diese Terminplanmetrik wichtig ist - Überblick](../../metrics/01_activities_starting_in_dd_with_no_logic_driving/02_guide_template.md)
- [Ressourcenausgleich in P6](../14_RESOURCES%20BALANCING%20IN%20P6/14_RESOURCES%20BALANCING%20IN%20P6.md)
- [CPM (Critical Path Method)](../16_CPM%20(CRITICAL%20PATH%20METHOD)/16_CPM%20(CRITICAL%20PATH%20METHOD).md)
