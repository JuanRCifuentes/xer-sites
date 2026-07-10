---
title: "Aktivitäten am Datenstichtag"
seoTitle: "Aktivitäten am Datenstichtag"
description: "Erklärt, warum Aktivitäten am Datenstichtag"
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Aktivitäten am Datenstichtag"
  - "Primavera P6 Aktivitäten am Datenstichtag"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/activities-on-the-data-date-primavera-p6"
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
primarySearchIntent: "Erklärt, warum Aktivitäten am Datenstichtag: Frühstart- und Frühendprüfungen in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/18_activities_in_data_date/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/18_activities_in_data_date/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Der Datentermin ist einer der wichtigsten Termine in einem Primavera P6-Terminplan. Es markiert die Grenze zwischen tatsächlicher Leistung und Zukunftsprognose. Arbeiten vor dem Datenstichtag sollten mit einem Status versehen werden. Arbeiten nach dem Datenstichtag sollten prognostiziert werden. Wenn viele Aktivitäten genau am Datenstichtag einen frühen Start oder ein frühes Ende haben, verdient der Terminplan einen genaueren Blick.

Diese Metrik prüft auf Aktivitäten, bei denen der frühe Start dem Datenstichtag oder das frühe Ende dem Datenstichtag entspricht. Der Zweck besteht nicht darin, zu sagen, dass jede Aktivität am Datenstichtag falsch ist. Einige Arbeiten beginnen oder enden möglicherweise an der Aktualisierungsgrenze. Der Zweck besteht darin, Clusterbildung an der Grenze zu identifizieren und zu bestätigen, ob es für jede Aktivität einen gültigen Grund für ihre Anwesenheit dort gibt.

Ein früher Beginn am Stichtag kann sinnvoll sein, wenn nach Abschluss der Vorgängerarbeiten kurzfristige Arbeiten beginnen können. Es kann auch ein Warnzeichen sein. Aktivitäten befinden sich möglicherweise am Datenstichtag, weil ihnen Vorgängerlogik, nicht steuernde Logik, Einschränkungen, erwartete Daten oder unvollständige Statusaktualisierungen fehlen. Wenn viele noch nicht begonnene Aktivitäten am Datenstichtag liegen, deutet der Terminplan möglicherweise darauf hin, dass die Arbeiten startbereit sind, auch wenn die erforderlichen Bedingungen nicht modelliert wurden.

Auch das frühe Ende des Datentermins kann zwei verschiedene Geschichten erzählen. Möglicherweise werden Arbeiten angezeigt, deren Abschluss an der Aktualisierungsgrenze korrekt vorhergesagt wurde. Es kann aber auch darauf hinweisen, dass der Fortschritt nicht vollständig aktualisiert wurde. Wenn die Arbeit tatsächlich vor oder am Datenstichtag abgeschlossen wurde, muss die Aktivität möglicherweise tatsächlich abgeschlossen werden. Wenn die Arbeit nicht abgeschlossen wurde, müssen die verbleibende Dauer und das prognostizierte Ende möglicherweise aktualisiert werden.

Der praktische Test beginnt mit einem einfachen P6-Layout. Dazu gehören Aktivitäts-ID, Aktivitätsname, WBS, Aktivitätsstatus, früher Start, frühes Ende, Start, Ende, Ist-Start, Ist-Ende, verbleibende Dauer, Gesamtpuffer, Kalender, Einschränkungen, Vorgänger und Nachfolger. Filtern Sie dann nach „Früher Start gleich dem Datenstichtag“ und „Frühes Ende“ gleich dem Datenstichtag.

Die erste Frage ist der Status. Ist die Aktivität abgeschlossen, läuft sie oder wurde sie noch nicht gestartet? Wenn die Ist-Terminen oder die verbleibende Dauer falsch sind, korrigieren Sie den Status, bevor Sie die Logik ändern. Ein Terminplan mit schlechten Statusdaten kann keine zuverlässigen Prognosedaten liefern.

Die zweite Frage ist Logik. Wird die Aktivität durch gültige Vorgänger- und Nachfolgerbeziehungen zum Datenstichtag gesteuert? Wenn es keinen Vorgänger, keine schwache Logik oder keine treibenden Beziehungen hat, kann der Datenstichtag einen offenen Anfang oder ein offenes Ende maskieren. Die Lösung sollte darin bestehen, eine echte Terminplanlogik hinzuzufügen oder zu korrigieren, und nicht darin, die Aktivität manuell zu verschieben.

Die dritte Frage ist, ob Einschränkungen, erwartete Termine oder Kalender das Ergebnis beeinflussen. Eine Starteinschränkung, eine Endeinschränkung, ein veraltetes erwartetes Datum oder ein ungewöhnlicher Kalender können eine Aktivität an die Aktualisierungsgrenze ziehen. Einige davon mögen gültig sein, sie sollten jedoch beabsichtigt und dokumentiert sein.

Betrachten Sie ein Projekt mit einem Datenstichtag vom 30. April. Eine Gruppe von Elektroaktivitäten zeigt am 30. April den Early Start. Wenn die Vorgängerbauarbeiten abgeschlossen waren und die Fläche freigegeben wurde, kann dies gültig sein. Wenn jedoch mehrere dieser Aktivitäten keine Vorgänger haben oder durch Einschränkungen gesteuert werden, zeigt der Terminplan keinen echten logikgesteuerten Plan.

Betrachten Sie nun eine Aktivität mit vorzeitigem Ende am 30. April und dem Status „In Bearbeitung“. Wenn die Arbeit bis zur Aktualisierungsfrist abgeschlossen war, sollte der Planer das tatsächliche Ende eingeben und die Aktivität als abgeschlossen markieren. Wenn die Arbeit noch mehrere Tage dauert, sollte die verbleibende Dauer aktualisiert werden, damit das prognostizierte Ende über der Datenstichtag hinausgeht.

Der Zielschwellenwert für diese Metrik sollte bei null unerklärlichen Aktivitäten liegen. Diese Formulierung ist wichtig. Das Ziel besteht nicht darin, jede Aktivität am Datenstichtag zu eliminieren. Das Ziel besteht darin, sicherzustellen, dass jeder einzelne durch den aktuellen Status, eine gültige Logik oder eine genehmigte Ausnahme erklärt wird.

Diese Metrik ist besonders bei Update-Überprüfungen nützlich. Nachdem der Datenstichtag voranschreitet, können sich Aktivitäten an der Grenze ansammeln, wenn der Terminplan nicht vollständig im Status ist oder die Logik schwach ist. Eine Häufung von Aktivitäten am Datenstichtag ist oft ein Symptom für Aktualisierungsdruck, kopierte Logik, offene Starts, Einschränkungen oder unvollständiges Feld-Feedback.

Durch die Bereinigung dieser Kennzahl wird die Glaubwürdigkeit der kurzfristigen Prognose verbessert. Es hilft Projektteams dabei, Arbeit, die wirklich fertig ist, von Arbeit zu unterscheiden, die einfach auf das aktuelle Aktualisierungsdatum verschoben ist. Für PMO- und Kundenberichte zeigt es außerdem, dass der Datenstichtag als tatsächliche Statusgrenze und nicht nur als Datum zur Neuberechnung der Datei behandelt wurde.
## Verwandte Inhalte
- [Aktivitäten am Datenstichtag: Frühstart- und Frühendprüfungen in Primavera P6 - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
