---
title: "Aufgabenaktivitäten mit SF-Vorgängern in Primavera P6"
seoTitle: "Aufgabenaktivitäten mit SF-Vorgängern in Primavera P6"
description: "Erklärt, warum Aufgabenaktivitäten mit SF-Vorgängern in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Aufgabenaktivitäten mit SF-Vorgängern in Primavera P6"
  - "Primavera P6 Aufgabenaktivitäten mit SF-Vorgängern in Primavera P6"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/task-with-sf-predecessor-primavera-p6"
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
primarySearchIntent: "Erklärt, warum Aufgabenaktivitäten mit SF-Vorgängern in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/15_task_with_sf_predecessor/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/15_task_with_sf_predecessor/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Anfang-zu-Ende-Beziehungen gehören zu den am wenigsten verbreiteten Beziehungstypen bei der CPM-Planung. In Primavera P6 bedeutet eine SF-Beziehung, dass die Nachfolgeaktivität erst beendet werden kann, wenn die Vorgängeraktivität beginnt. Das kann in Ausnahmefällen zutreffen, ist aber nicht der Ablauf der meisten Projektarbeiten.

Bei normalen Aufgabenaktivitäten sollte ein Start-to-Finish-Vorgänger sofort eine Überprüfungsfrage aufwerfen: Welchen realen Zustand soll diese Beziehung darstellen? Wenn die Antwort nicht klar ist, schwächt die Beziehung möglicherweise die Terminplanlogik.

Die meisten Projektpläne basieren auf drei praktischen Beziehungstypen. Finish-to-Start wird verwendet, wenn eine Aktivität abgeschlossen sein muss, bevor eine andere beginnen kann. Start-to-Start wird verwendet, wenn Aktivitäten gemeinsam beginnen können oder ein Start von einem anderen Start abhängt. Finish-to-Finish wird verwendet, wenn der Abschluss einer Aktivität mit dem Abschluss einer anderen verbunden ist. Diese Beziehungstypen sind für Außendienstteams, Projektmanager und Prüfer in der Regel leichter zu verstehen.

SF ist anders. Es verbindet den Beginn eines Vorgängers mit dem Ende eines Nachfolgers. Das bedeutet, dass das Ziel des Nachfolgers so lange aufgehalten wird, bis der Vorgänger startet. In vielen Bau-, Ingenieur-, Beschaffungs- und Inbetriebnahmeplänen ist diese Logik schwer zu erklären. Wenn eine Aufgabe nicht beendet werden kann, bevor eine andere Aufgabe beginnt, sollte der Planer in der Lage sein, den genauen Betriebszustand hinter dieser Regel zu beschreiben.

Ein häufiges Problem ist kopierte Logik. Ein Planer kann eine Gruppe von Aktivitäten aus einem anderen Projekt kopieren, externe Logik importieren oder globale Änderungen anwenden, und eine SF-Beziehung bleibt unbemerkt im Terminplan bestehen. Die berechneten Daten sehen möglicherweise noch akzeptabel aus, sodass die Beziehung bestehen bleibt. Später, während einer Überprüfung, wird es schwierig, den logischen Pfad zu verteidigen, da die Beziehung nicht die Art und Weise widerspiegelt, wie die Arbeit tatsächlich abläuft.

Ein weiteres Problem ist die Datumskontrolle. Manchmal wird die SF-Logik mit Verzögerung verwendet, um eine Aktivität an einem gewünschten Datum abzuschließen. Dadurch kann der wahre Fahrer verborgen bleiben. Wenn der Terminplan ein Vertragsdatum, ein Zugriffsfenster, eine Lieferbedingung oder einen Übergabemeilenstein erfordert, sollte diese Bedingung normalerweise direkt modelliert werden. Der Terminplan sollte sich nicht auf einen verwirrenden Beziehungstyp stützen, nur weil dieser den gewünschten Endtermin ergibt.

Stellen Sie sich eine Aufgabe namens „Temporary Bypass Operation“ mit einem SF-Vorgänger von „Start Permanent System Operation“ vor. In diesem Fall kann der Bypass-Vorgang erst abgeschlossen werden, wenn das permanente System startet. Dies könnte eine vertretbare SF-Beziehung sein, wenn der Bypass aktiv bleiben muss, bis das Ersatzsystem in Betrieb ist. Selbst dann sollte der Planer den Grund dokumentieren, da Prüfer die Beziehung vernünftigerweise in Frage stellen werden.

Betrachten Sie nun eine normale Aufgabe namens „Install Cable Tray“ mit einem SF-Vorgänger von „Start Cable Pulling“. Diese Beziehung ist schwerer zu rechtfertigen. Wenn die Installation der Kabelrinne abgeschlossen sein muss, bevor mit dem Kabeleinzug begonnen werden kann, ist die FS-Logik von der Kabeltrasse zum Kabeleinzug möglicherweise besser geeignet. Wenn sich die Arbeit überschneidet, ist die SS- oder FF-Logik möglicherweise klarer. Die SF-Beziehung sollte nicht bestehen bleiben, es sei denn, sie repräsentiert die tatsächliche Konstruktionssequenz.

Die beste Überprüfungsmethode in P6 besteht darin, ein Layout zu erstellen, das Aktivitäts-ID, Aktivitätsname, WBS, Aktivitätstyp, Vorgänger-ID, Vorgängername, Beziehungstyp, Verzögerung, Start, Ende, Gesamtpuffer, Einschränkungen und den kritischen oder längsten Pfadstatus umfasst. Filtern Sie nach Aufgabenaktivitäten mit SF-Vorgängern. Überprüfen Sie dann zunächst die kritischen und nahezu kritischen Ergebnisse, da sich diese Beziehungen direkt auf die gemeldeten Projekttreiber auswirken können.

Stellen Sie für jedes Ergebnis eine Reihe einfacher Fragen. Unter welchen Bedingungen ist die SF-Beziehungsmodellierung möglich? Würden FS, SS oder FF die Logik klarer beschreiben? Wird die Verzögerung genutzt, um ein Datum zu erzwingen? Beeinflusst die Beziehung die Berichterstattung über kritische Pfade oder Meilensteine? Gibt es einen dokumentierten Grund für die Aufbewahrung?

Der Zielschwellenwert sollte bei null ungelösten SF-Vorgängerbeziehungen bei Aufgabenaktivitäten liegen. Das bedeutet nicht, dass jede SF-Beziehung automatisch falsch ist. Das bedeutet, dass jede SF-Beziehung entweder korrigiert oder klar begründet werden muss. Unerklärte SF-Logik kann das Vertrauen in das Netzwerk verringern, da die Logik dadurch schwieriger zu prüfen und zu kommunizieren ist.

Wenn die Beziehung ungültig ist, ersetzen Sie sie durch den Beziehungstyp, der der tatsächlichen Reihenfolge entspricht. Wenn die Aktivität beginnen soll, nachdem eine andere beendet ist, verwenden Sie FS. Wenn Starts verknüpft sind, verwenden Sie SS. Wenn die Oberflächen aufeinander abgestimmt sein müssen, verwenden Sie FF. Wenn es sich bei dem Problem um einen fehlenden Meilenstein, eine fehlende Lieferung, eine Genehmigung oder eine Zugriffsbedingung handelt, fügen Sie die Aktivität hinzu oder korrigieren Sie sie, die diese Bedingung darstellt.

Berechnen Sie nach Korrekturen den Terminplan neu und überprüfen Sie den betroffenen Logikpfad. Überprüfen Sie den Gesamtpuffer, den kritischen oder längsten Pfad, Meilensteintermine und kurzfristige Vorschauberichte. Das Ziel besteht nicht nur darin, den Metrik-Score zu verbessern. Ziel ist es, den Terminplan leichter erklärbar und entscheidungssicherer zu machen.

Aufgabenaktivitäten mit SF-Vorgängern sind kleine, aber wichtige Signale. Sie deuten häufig auf kopierte Logik, erzwungene Daten oder unklare Reihenfolgen hin. Ihre Überprüfung hilft dem Projektteam, das Logiknetzwerk zu bereinigen, bevor diese Schwachstellen zu Berichtsproblemen werden.
## Verwandte Inhalte
- [Aufgabenaktivitäten mit SF-Vorgängern in Primavera P6 - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
