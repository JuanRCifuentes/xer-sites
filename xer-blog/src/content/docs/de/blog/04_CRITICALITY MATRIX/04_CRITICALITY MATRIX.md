---
title: "Kritikalitätsmatrix"
seoTitle: "Kritikalitätsmatrix - Primavera P6"
description: "Lernen Sie Kritikalitätsmatrix in Primavera P6 mit praktischem Fokus auf Terminplanung, Projektcontrolling und Terminplanqualität."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Kritikalitätsmatrix"
  - "Primavera P6 Kritikalitätsmatrix"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/criticality-matrix-in-primavera-p6"
language: "de"
contentType: "blog"
draft: false
version: "1.0"
topic: "Terminplanung in Primavera P6"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primarySearchIntent: "Lernen Sie Kritikalitätsmatrix in Primavera P6 mit praktischem Fokus auf Terminplanung, Projektcontrolling und Terminplanqualität."
relatedMetrics:
  - "09_metrics_de/09_cp_or_float_path_starting_with_constraint/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/03_CRITICAL PATH/03_CRITICAL PATH.md"
  - "09b_blogs_de/05_ACTIVITY TYPES IN P6/05_ACTIVITY TYPES IN P6.md"
translationOf: "01b_blogs_en/04_CRITICALITY MATRIX/04_CRITICALITY MATRIX.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Eine Kritikalitätsmatrix ist eine visuelle oder analytische Methode zur Klassifizierung und Priorisierung von Projektaktivitäten basierend darauf, wie wichtig sie für den Projektabschluss sind. Im Primavera P6-Kontext hilft es Projektmanagern, Planern und PMO-Prüfern dabei, herauszufinden, welche Aktivitäten das größte Terminrisiko darstellen.

Der kritische Pfad erzählt die aktuelle deterministische Geschichte des Terminplans. Eine Kritikalitätsmatrix geht noch einen Schritt weiter. Es hilft dem Team zu verstehen, welche Aktivitäten bereits kritisch sind, welche kurz davor stehen, kritisch zu werden, und welche schwerwiegende Auswirkungen haben würden, wenn sie scheitern.

Dies ist wichtig, da die Aktivität, die heute von entscheidender Bedeutung ist, nicht immer die einzige Aktivität ist, die Aufmerksamkeit verdient. Eine nahezu kritische Aktivität mit großen Verzögerungsauswirkungen könnte zum Problem von morgen werden. Eine langfristige Beschaffungsaktivität befindet sich möglicherweise nicht auf dem aktuellen kritischen Pfad, birgt jedoch möglicherweise genügend Risiken, um eine strenge Kontrolle zu rechtfertigen.

## Was Kritikalität in P6 bedeutet

In Primavera P6 bezieht sich die Kritikalität normalerweise darauf, ob sich eine Aktivität auf das Enddatum des Projekts auswirken kann, wenn sie sich verzögert. Traditionell identifiziert P6 kritische Aktivitäten anhand der Einstellungen „Gesamtpuffer“ oder „Längster Pfad“.

Die gängige deterministische Definition ist einfach:

- Kritische Aktivitäten sind Aktivitäten mit Null oder negativem Puffer.
- Diese Aktivitäten liegen auf dem kritischen Pfad oder sind eng damit verbunden.
- Wenn sie sich verzögern, wird sich wahrscheinlich auch der Endtermin des Projekts verzögern.

Diese Definition ist nützlich, aber nicht vollständig. Es basiert auf einer berechneten Terminplanbedingung. Es erklärt nicht vollständig die Unsicherheit, die Wahrscheinlichkeit oder das Ausmaß der Auswirkungen, wenn eine Aktivität ausbleibt.

Eine Kritikalitätsmatrix erweitert die Diskussion von „Ist diese Aktivität heute kritisch?“ zu „Wie wahrscheinlich ist es, dass diese Aktivität kritisch wird, und wie viel Schaden könnte sie anrichten?“

## Was für eine Kritikalitätsmatrix vereint

Eine Kritikalitätsmatrix kombiniert normalerweise zwei Dimensionen.

Die erste Dimension ist die Terminplansensitivität oder -wahrscheinlichkeit. Dies kann daran gemessen werden, wie oft eine Aktivität während der Monte-Carlo-Simulation kritisch wird, oder daran, wie nahe sie an kritisch ist, basierend auf Gesamtpuffer- oder nahezu kritischen Schwellenwerten.

Die zweite Dimension ist die Wirkung. Damit ist die Schwere der Verzögerung gemeint, wenn die Aktivität ausbleibt. Die Auswirkungen können auf der Dauer der Aktivität, dem Verzögerungseffekt auf den Projektabschluss, dem Sensitivitätsindex, dem Kostenrisiko, den Auswirkungen auf vertragliche Meilensteine ​​oder auf der Beurteilung des Managements basieren.

Zusammen helfen diese Dimensionen dem Team, Aktivitäten zu priorisieren.

```mermaid
quadrantChart
    title Criticality Matrix
    x-axis Low Impact --> High Impact
    y-axis Low Criticality --> High Criticality
    quadrant-1 Critical focus
    quadrant-2 Control
    quadrant-3 Monitor
    quadrant-4 Watch
    "Risikoarme Routinearbeiten": [0.20, 0.20]
    "Nahezu kritische Beschaffung": [0.75, 0.55]
    "Kritische Inbetriebnahme": [0.85, 0.90]
    "Mäßige Pfadaktivität": [0.45, 0.60]
```

Diese Art der Ansicht ist nützlich, da sie Aktivitäten, die lediglich im kritischen Filter erscheinen, von Aktivitäten trennt, die eine aktive Aufmerksamkeit des Managements erfordern.

## Eine einfache Matrixstruktur

Eine grundlegende Kritikalitätsmatrix kann als Raster dargestellt werden:

| Kritikalität/Auswirkung | Geringe Auswirkungen | Mittlere Wirkung | Hohe Wirkung |
| --- | --- | --- | --- |
| Geringe Kritikalität | Monitor | Monitor | Betrachten |
| Mittlere Kritikalität | Rezension | Kontrolle | Hohe Priorität |
| Hohe Kritikalität | Kontrolle | Hohe Priorität | Kritischer Fokus |

Die genauen Bezeichnungen können sich je nach Organisation ändern, die Idee bleibt jedoch dieselbe. Aktivitäten mit geringer Kritikalität und geringen Auswirkungen können überwacht werden. Aktivitäten mit hoher Kritikalität und großer Auswirkung erfordern eine gezielte Kontrolle.

## In der Matrix verwendete P6-Daten

Primavera P6 bietet normalerweise standardmäßig keine integrierte Kritikalitätsmatrixansicht. Die Matrix wird üblicherweise anhand von P6-Aktivitätsdaten in Kombination mit externer Analyse erstellt.

Zu den nützlichen P6-Feldern gehören:

- Gesamtschwimmer.
- freier Puffer.
- Aktivitätsdauer.
- Verbleibende Dauer.
- Aktivitätsstatus.
- Start- und Endtermine.
- Einschränkungen.
- Beziehungslogik.
- Kalender.
- WBS oder Aktivitätscodes.
- Kritische oder längste Pfadindikatoren.

Diese Daten ergeben die deterministische Terminplanansicht. Es zeigt den aktuell berechneten Pfad, nahezu kritische Arbeiten, eingeschränkte Aktivitäten und Aktivitäten mit langer verbleibender Exposition an.

## Eingaben zur Risikoanalyse

Um die Matrix leistungsfähiger zu machen, kann das Team probabilistische Terminplanrisikodaten aus der Monte-Carlo-Analyse hinzufügen. Dies kann von Tools wie Primavera Risk Analysis oder anderen Risikosimulationsplattformen stammen.

Zu den wichtigen Risikometriken gehören der Kritizitätsindex, der Gesamtpuffer, der Schedule Sensitivity Index sowie die Dauer oder der Auswirkungswert.

Der Kritikalitätsindex, oft auch CI genannt, zeigt den Prozentsatz der Simulationen an, bei denen eine Aktivität auf dem kritischen Pfad erscheint. Wenn eine Aktivität beispielsweise einen KI-Wert von 80 % aufweist, war sie in 80 % der simulierten Szenarien kritisch.

„Gesamtpuffer“ zeigt an, wie nah eine Aktivität daran ist, das Projektende im deterministischen Terminplan zu beeinflussen. Ein Puffer nahe Null ist ein Warnzeichen.

Der Schedule Sensitivity Index kombiniert Kritikalität und Auswirkung. Es hilft nicht nur zu zeigen, ob die Aktivität kritisch wird, sondern auch, ob sie das Ergebnis sinnvoll beeinflusst.

Die Dauer oder der Auswirkungswert helfen bei der Einschätzung des Schweregrads. Eine längere Aktivität, ein Beschaffungspaket mit hohem Risiko oder eine mit einem vertraglichen Meilenstein verbundene Aufgabe kann bei Verzögerung größere Auswirkungen haben.

## Beispiel

Betrachten Sie den folgenden vereinfachten Aktivitätssatz:

| Aktivität | Puffer | Kritikalitätsindex | Dauer | Matrixergebnis |
| --- | ---: | ---: | ---: | --- |
| A | 0 Tage | 95% | 20 Tage | Kritischer Fokus |
| B | 5 Tage | 60% | 15 Tage | Hohe Priorität |
| C | 20 Tage | 15% | 10 Tage | Monitor |

Aktivität A gehört in den Bereich mit hoher Kritikalität und hoher Auswirkung. Es hat keinen Puffer, erscheint in den meisten Simulationen kritisch und hat eine lange Dauer. Es verdient eine gezielte Kontrolle.

Aktivität B ist möglicherweise nicht so dringend wie Aktivität A, verdient aber dennoch Aufmerksamkeit. Der Puffer ist begrenzt und die Wahrscheinlichkeit, kritisch zu werden, ist groß.

Aktivität C hat mehr Puffer und eine geringere Kritikalität. Es sollte nicht ignoriert werden, erfordert aber nicht das gleiche Maß an Managementfokus.

## Warum es nützlich ist

Eine Kritikalitätsmatrix hilft dem Projektteam, sich nicht nur auf den einzelnen deterministischen kritischen Pfad zu verlassen. Der deterministische Pfad ist wichtig, aber es ist nur eine Sicht auf den Terminplan.

Die Matrix hilft Teams:

- Priorisieren Sie, was genau überwacht werden soll.
- Konzentrieren Sie sich bei der Risikominderung auf wichtige Risikoaktivitäten.
- Identifizieren Sie nahezu kritische Aktivitäten, bevor sie kritisch werden.
- Verstehen Sie das probabilistische Terminplanrisiko.
- Vergleichen Sie Wahrscheinlichkeit und Auswirkung in einer Ansicht.
- Kommunizieren Sie das Terminplanrisiko klarer an das Management.

Für das PMO-Reporting ist dies besonders nützlich, da es die Komplexität des Terminplans in einen Entscheidungsrahmen übersetzt. Anstatt Hunderte von Aktivitäten zu präsentieren, kann das Team zeigen, welche Aktivitäten sich in den Zonen „kritischer Fokus“, „hohe Priorität“, „Kontrolle“ oder „Überwachung“ befinden.

## Eine einfache Möglichkeit, eines zu bauen

Beginnen Sie mit dem Exportieren von Aktivitätsdaten aus P6. Schließen Sie Aktivitäts-ID, Aktivitätsname, WBS, Gesamtpuffer, verbleibende Dauer, Start, Ende, Kalender, Einschränkungen und Indikatoren für kritische oder längste Pfade ein.

Fügen Sie dann optionale Risikoanalysefelder hinzu, z. B. Criticality Index und Schedule Sensitivity Index. Wenn keine Simulationsdaten verfügbar sind, verwenden Sie praktische Schwellenwerte basierend auf Puffer und Dauer. Eine hohe Kritikalität könnte beispielsweise bedeuten, dass der Gesamtpuffer kleiner oder gleich 0 Tage ist oder dass der KI-Wert über 70 % liegt. Mittlere Kritikalität kann einen nahezu kritischen Puffer oder CI zwischen 40 % und 70 % bedeuten.

Definieren Sie Auswirkungsschwellenwerte. Eine Aktivität mit großer Auswirkung kann von langer Dauer sein, an einen vertraglichen Meilenstein gebunden sein, Teil eines Hochrisikopakets sein oder sich durch Simulation auf den Projektabschluss auswirken.

Zeichnen Sie abschließend die Aktivitäten in Excel, Power BI oder einem anderen Berichtstool auf. Das Ergebnis muss nicht kompliziert sein. Der Wert ergibt sich aus der Sichtbarmachung der Priorität.

## Nutzen Sie Urteilsvermögen

Eine Kritikalitätsmatrix ist ein Entscheidungsunterstützungstool und keine automatische Antwort. Schwellenwerte sollten vom Projektkontrollteam überprüft und an den Projekttyp, die Vertragssensibilität und den Terminplanreifegrad angepasst werden.

Denken Sie auch daran, dass die Matrix von der Qualität des Terminplans abhängt. Wenn dem P6-Terminplan Logik fehlt, unrealistische Dauer, strenge Einschränkungen, schlechte Kalender oder schwache Statusaktualisierungen vorliegen, übernimmt die Matrix diese Schwächen.

Die beste Verwendung der Matrix besteht darin, analytische Ergebnisse mit professioneller Planungsbeurteilung zu kombinieren.

## Abschluss

Eine Kritikalitätsmatrix ordnet Projektaktivitäten danach, wie wahrscheinlich es ist, dass sie kritisch werden, und wie groß die Auswirkungen wären, wenn sie sich verzögern würden. Es verwendet P6-Daten wie Gesamtpuffer, Dauer, Einschränkungen und Logik und kann mit Monte-Carlo-Ergebnissen wie dem Criticality Index und dem Schedule Sensitivity Index verstärkt werden.

Für Projektmanager und PMO-Prüfer verwandelt die Matrix das Terminplanrisiko in ein klareres Managementgespräch. Es hilft dem Team, sich auf die Aktivitäten zu konzentrieren, die am wichtigsten sind, und nicht nur auf die Aktivitäten, die heute im kritischen Filter erscheinen.

Bei richtiger Anwendung hilft eine Kritikalitätsmatrix dem Projektteam, von der reaktiven Berichterstattung zur proaktiven Terminkontrolle überzugehen.
## Verwandte Inhalte
- [Kritischer Pfad oder Pufferpfad, beginnend mit einer Einschränkung - Überblick](../../metrics/09_cp_or_float_path_starting_with_constraint/02_guide_template.md)
- [Kritischer Pfad](../03_CRITICAL%20PATH/03_CRITICAL%20PATH.md)
- [Aktivitätstypen in P6](../05_ACTIVITY%20TYPES%20IN%20P6/05_ACTIVITY%20TYPES%20IN%20P6.md)
