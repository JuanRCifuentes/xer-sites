---
title: "Kalender mit unterschiedlichen Start- und Endzeiten in Primavera P6"
seoTitle: "Kalender mit unterschiedlichen Start- und Endzeiten in Primavera P6"
description: "Erklärt, warum Kalender mit unterschiedlichen Start- und Endzeiten in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Kalender mit unterschiedlichen Start- und Endzeiten in Primavera P6"
  - "Primavera P6 Kalender mit unterschiedlichen Start- und Endzeiten in Primavera P6"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/calendars-with-different-start-finish-time-in-day-primavera-p6"
language: "de"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Terminplanung in Primavera P6"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primarySearchIntent: "Erklärt, warum Kalender mit unterschiedlichen Start- und Endzeiten in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/20_calendars_with_different_start_finish_time_in_day/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/20_calendars_with_different_start_finish_time_in_day/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Kalender sind einer der leisen Treiber eines Primavera P6-Terminplans. Sie definieren, wann Arbeit stattfinden kann, wie Dauer in Datumsangaben umgewandelt wird und wie Beziehungen Aktivitäten über die Zeit hinweg verschieben. Da Kalender oft im Verborgenen stattfinden, können kleine Unterschiede in den täglichen Start- und Endzeiten zu einem Terminplanverhalten führen, das in normalen Layouts schwer zu erkennen ist.

Diese Metrik identifiziert Kalender, deren Arbeitsbeginn- oder -endezeiten vom genehmigten Projektstandard abweichen. Das Problem besteht nicht darin, dass jeder Kalender identisch sein muss. Viele Projekte benötigen spezielle Kalender für Nachtschichtarbeit, Wochenendarbeit, Shutdown-Fenster, Ressourcenverfügbarkeit oder eingeschränkten Zugang. Die Frage ist, ob diese Unterschiede beabsichtigt sind, dokumentiert und nur dort zugewiesen werden, wo sie hingehören.

Beispielsweise kann ein Projektkalender von 7:00 bis 17:00 Uhr laufen, während ein anderer von 8:00 bis 18:00 Uhr läuft. Beide können zehn Arbeitsstunden pro Tag ausweisen. Auf hohem Niveau sehen sie ähnlich aus. Aber in P6 kann die Tageszeit die genaue Platzierung von Starts und Enden, Beziehungsbindungen, Puffer-Werte und scheinbare Datumsbewegungen beeinflussen. Eine einstündige Schicht sieht vielleicht unbedeutend aus, kann aber die Ausrichtung von Aktivitäten in verschiedenen Kalendern verändern.

Dies wird noch wichtiger, wenn Aktivitäten in verschiedenen Kalendern miteinander verknüpft werden. Ein Vorgänger in einem Arbeitsfenster endet möglicherweise spät am Tag, während der Nachfolgerkalender erst am nächsten Morgen beginnen kann. Es kann sein, dass eine andere Aktivität am selben Datum, aber zu einer anderen Uhrzeit endet. Wenn Gutachter nur auf Daten und nicht auf Zeiten achten, kann der Terminplan inkonsistent oder schwer zu erklären sein.

Kalenderunterschiede können sich auch auf den kritischen Pfad und den Gesamtpuffer auswirken. Wenn eine kritische Aktivität versehentlich einen nicht standardmäßigen Kalender verwendet, verläuft der Pfad möglicherweise anders als erwartet. Aufgrund der Kalenderausrichtung und nicht aufgrund der tatsächlichen Flexibilität des Terminplans kann es so aussehen, als ob der Puffer zunimmt oder abnimmt. Während der PMO- oder Kundenüberprüfung ist es dadurch schwieriger zu erklären, warum sich Termine verschoben haben.

Die praktische Überprüfung beginnt mit der Ermittlung des genehmigten Kalenderstandards für das Projekt. Was ist der normale Arbeitstag? Was sind die Standard-Start- und Endzeiten? Welche Kalender dürfen abweichen? Anschließend exportieren oder überprüfen Sie alle Kalender und vergleichen ihre täglichen Arbeitsperioden. Die Überprüfung sollte Kalendernamen, Kalendertyp, Startzeit, Endzeit, tägliche Stunden, Ausnahmen und zugewiesene Aktivitäten umfassen.

Der nächste Schritt besteht darin, die Aufgaben zu überprüfen. Ein spezieller Kalender mag gültig sein, er sollte jedoch nur den Aktivitäten zugewiesen werden, die ihn benötigen. Ein Nachtschichtkalender sollte nicht auf die normale Tagesarbeit übergreifen. Ein Abschaltkalender sollte nicht zugewiesen bleiben, nachdem der Ausfallbereich in einen anderen Bereich kopiert wurde. Ein Ressourcenkalender sollte nicht versehentlich Aktivitätstermine steuern, es sei denn, dies ist Teil der Projektmethode.

Wenn ein Kalenderunterschied versehentlich auftritt, ist die Lösung normalerweise einfach: Richten Sie die Startzeit, die Endzeit und die Arbeitsperioden an den Projektstandards aus. Berechnen Sie dann den Terminplan neu und überprüfen Sie die betroffenen Daten und Puffer-Werte. Wenn die Differenz gültig ist, dokumentieren Sie den Grund und bestätigen Sie den Eigentümer. Gültige Gründe können eingeschränkter Zugang, Umgebungsfenster, Betriebsgrenzen des Kunden, Genehmigungsbedingungen oder geplante Schichtarbeit sein.

Stellen Sie sich einen Terminplan für die Inbetriebnahme vor, bei dem für die meisten Arbeiten ein Kalender von 7:00 bis 17:00 Uhr gilt, das Testteam jedoch einen Nachtschichtkalender von 22:00 bis 6:00 Uhr verwendet. Dieser Unterschied kann gültig sein, da Tests nur durchgeführt werden können, wenn der Betrieb offline ist. Der Planer sollte die Grundlage dokumentieren und bestätigen, dass nur die Testaktivitäten diesen Kalender verwenden.

Betrachten Sie nun eine kopierte Bautätigkeit, die versehentlich den Nachtschichtkalender übernimmt. Im Vergleich zu Werken in der Nähe sind die Daten möglicherweise seltsam berechnet. Es kann den Anschein haben, als würde es an einem unerwarteten Datum enden, oder es entstehen Puffer-Differenzen, die nicht den Felderwartungen entsprechen. In diesem Fall geht es nicht um die Existenz des Nachtschichtkalenders. Das Problem ist die falsche Aktivitätszuordnung.

Der Zielschwellenwert für diese Metrik sollte bei null unerklärten Kalendern liegen. Es mag weiterhin einige nicht standardmäßige Kalender geben, aber jeder sollte einen klaren Grund haben. Wenn der Planer nicht erklären kann, warum ein Kalender zu einem anderen Zeitpunkt beginnt oder endet, sollte er überprüft werden.

Durch die Bereinigung dieser Metrik wird die Terminplantransparenz verbessert. Es hilft Teams, versteckte Teiltageseffekte, irreführende Schwankungen und unerklärliche Datumsverschiebungen zu vermeiden. Dadurch lässt sich der Terminplan auch einfacher prüfen, da Kalenderannahmen nicht mehr in der Datei vergraben sind. Für Projektkontrollteams ist das eine kleine Überprüfung mit großem Nutzen.
## Verwandte Inhalte
- [Kalender mit unterschiedlichen Start- und Endzeiten in Primavera P6 - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
