---
title: "Unpassende Beziehungen in Primavera P6"
seoTitle: "Unpassende Beziehungen in Primavera P6"
description: "Erklärt, warum Unpassende Beziehungen in Primavera P6"
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Unpassende Beziehungen in Primavera P6"
  - "Primavera P6 Unpassende Beziehungen in Primavera P6"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/unusual-relationships-primavera-p6"
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
primarySearchIntent: "Erklärt, warum Unpassende Beziehungen in Primavera P6: Meilensteine, LOE und Beziehungstypprüfungen CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/14_unusual_relations/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/14_unseemly_relations/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Die Beziehungslogik ist einer der am einfachsten schnell zu kopierenden Teile eines Terminplans und einer der am schwierigsten später zu verteidigenden Teile. Eine Beziehung mag in einer P6-Tabelle harmlos aussehen, aber der Aktivitätstyp auf beiden Seiten ist wichtig. Eine sinnvolle Beziehung zwischen zwei normalen Aufgabenaktivitäten kann unangenehm oder irreführend sein, wenn es sich bei einer Seite um einen Startmeilenstein, einen Endmeilenstein oder eine Aufwandsstufenaktivität handelt.

Diese Metrik konzentriert sich auf unangemessene Beziehungen: Beziehungsmuster, die überprüft werden sollten, da sie häufig nicht mit dem Planungszweck des Aktivitätstyps übereinstimmen. Das Ziel besteht nicht darin, jede ungewöhnliche Beziehung automatisch abzulehnen. Das Ziel besteht darin, Logik zu finden, die einen zweiten Blick erfordert, bevor sie sich auf Meilensteintermine, Puffer, Berichte über kritische Pfade oder das Kundenvertrauen auswirkt.

Die erste Gruppe von Erkenntnissen betrifft Finish-Meilensteine. Ein Zielmeilenstein stellt ein Abschlussereignis dar. Es wird normalerweise verwendet, um zu kennzeichnen, dass ein Paket, eine Phase, eine Übergabe, eine Genehmigung oder ein Vertragspunkt erreicht wurde. Wenn ein Endmeilenstein einen SS- oder SF-Nachfolger hat, kann die Logik besagen, dass eine spätere Aktivität beginnen kann, weil das Endereignis begonnen hat, oder enden kann, weil das Endereignis beginnt. Das ist meist schwer zu erklären. Ein Abschlussmeilenstein mit einem SS-Vorgänger kann ebenfalls verdächtig sein, da die Fertigstellung des Meilensteins möglicherweise an den Beginn früherer Arbeiten gebunden ist und nicht an die Abschlussbedingung, die tatsächlich beweist, dass der Meilenstein erreicht wurde.

Die zweite Gruppe umfasst Startmeilensteine. Ein Startmeilenstein stellt den Beginn eines Ereignisses, einer Phase, eines Zugriffsfensters oder einer Autorisierung dar. Wenn ein Startmeilenstein einen FF- oder SF-Vorgänger hat, ist das Startereignis möglicherweise auf eine Weise mit einem Vorgängerziel verknüpft, die die erforderliche Startbedingung nicht klar beschreibt. Wenn ein Startmeilenstein einen FS- oder FF-Nachfolger hat, fungiert der Meilenstein möglicherweise eher wie ein Aufgabenendpunkt als wie ein Startereignis. Manchmal passiert dies, weil der Meilensteintyp falsch ausgewählt wurde. In anderen Fällen wurde der Beziehungstyp aus einem anderen Teil des Terminplans kopiert und nie überprüft.

Die dritte Gruppe umfasst LOE-Aktivitäten. LOE-Aktivitäten werden verwendet, um Unterstützung, Aufsicht, Management, Inspektion oder andere Anstrengungen darzustellen, die andere Arbeiten umfassen. Sie sind normalerweise nicht dazu gedacht, diskrete Produktionsaktivitäten in der gleichen Weise anzutreiben wie eine normale Aufgabe. Wenn eine LOE-Aktivität eine FS- oder SF-Beziehung hat, sollte der Terminplanprüfer fragen, ob die LOE Arbeit kontrolliert, die stattdessen durch physische Arbeitsaktivitäten, Zugriffsbeschränkungen, Genehmigungen oder vertragliche Meilensteine ​​gesteuert werden sollte.

In der Praxis ist diese Metrik nützlich, da sie eine klare Konversation über die Absicht erzwingt. Was soll dieser Meilenstein darstellen? Fasst diese LOE die Arbeit zusammen oder treibt sie sie voran? Beschreibt diese Beziehung eine echte Abfolge oder dient sie nur dazu, ein Datum zu verhalten?

Erwägen Sie einen Endmeilenstein mit der Bezeichnung „Mechanischer Abschluss“. Wenn es einen SS-Nachfolger für „Start Commissioning“ gibt, deutet der Terminplan möglicherweise darauf hin, dass die Inbetriebnahme beginnen kann, wenn die mechanische Fertigstellung beginnt. Das passt nicht so gut zum Meilensteinkonzept. Wenn die Inbetriebnahme nach einem Teilumsatz beginnen kann, besteht die bessere Lösung möglicherweise darin, eine diskrete Umsatzaktivität oder einen spezifischeren Meilenstein hinzuzufügen. Wenn die Inbetriebnahme wirklich von der vollständigen mechanischen Fertigstellung abhängt, ist eine FS-Beziehung vom Fertigstellungsmeilenstein bis zur Inbetriebnahme leichter zu verstehen und zu verteidigen.

Betrachten Sie nun eine LOE-Aktivität namens „Projektmanagementunterstützung“ mit einer FS-Beziehung zu einer Bauaktivität. Diese Beziehung kann dazu führen, dass die Supportaktivität zu einem Treiber für die Arbeit vor Ort wird, was normalerweise nicht beabsichtigt ist. Ein Planer sollte prüfen, ob die Bautätigkeit stattdessen durch Planung, Beschaffung, Zugang, Genehmigungen, Vorgängerbau oder eine andere diskrete Bedingung gesteuert werden sollte. Das LOE benötigt möglicherweise unterschiedliche Start- und Endtreiber, damit es die Arbeit abdeckt, ohne sie falsch zu steuern.

Die beste Überprüfungsmethode ist einfach. Erstellen Sie ein P6-Layout, das Aktivitäts-ID, Aktivitätsname, Aktivitätstyp, Vorgänger, Nachfolger, Beziehungstyp, Verzögerung, Start, Ende, Gesamtpuffer und den kritischen oder längsten Pfadstatus anzeigt. Filtern Sie nach Meilensteinen und LOE-Aktivitäten und isolieren Sie dann die durch die Metrik gekennzeichneten Beziehungsmuster. Überprüfen Sie zuerst die kritischen und nahezu kritischen Elemente, da diese sich unmittelbar auf die Projektberichterstattung auswirken können.

Nicht jedes markierte Element ist falsch. Einige Projekte haben kundenspezifische Logikregeln oder ungewöhnliche Berichtsanforderungen. Einige Terminplanmodelle verwenden spezielle Meilensteine, um eine Schnittstelle zu anderen Systemen herzustellen. Diese Fälle sollten selten, genehmigt und dokumentiert sein. Wenn ein Gutachter die Beziehung nicht in einfacher Planungssprache erklären kann, muss sie wahrscheinlich korrigiert werden.

Ein gutes Ziel für diese Kennzahl sind null ungelöste Beziehungen. Das wichtige Wort ist ungelöst. Das Planungsteam sollte entweder die Beziehung korrigieren, den Aktivitätstyp überarbeiten, eine bessere Aktivität hinzufügen, um den tatsächlichen Zustand darzustellen, oder die genehmigte Ausnahme dokumentieren. Wenn diese Beziehungen ungeklärt bleiben, wird der Terminplan geschwächt, da das logische Netzwerk dadurch schwerer vertrauenswürdig ist.

Unpassende Beziehungen sind oft kleine Symptome größerer Probleme mit der Terminplanqualität: kopierte Logik, unklare Meilensteindefinitionen, Missbrauch von LOE-Aktivitäten oder die Angewohnheit, Termine durch Beziehungstypen zu erzwingen. Wenn Sie sie bereinigen, verbessert sich mehr als nur eine metrische Punktzahl. Dadurch ist der Terminplan einfacher zu überprüfen, einfacher zu erklären und für die PMO-Governance und Projektentscheidungsfindung zuverlässiger.
## Verwandte Inhalte
- [02_guide_template](../14_unusual_relations/02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
