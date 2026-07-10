---
title: "Voraussichtliches Ende vor dem Datenstichtag in Primavera P6"
seo_title: "Voraussichtliches Ende vor dem Datenstichtag in Primavera P6"
meta_description: "Erklärt, warum Voraussichtliches Ende vor dem Datenstichtag in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Voraussichtliches Ende vor dem Datenstichtag in Primavera P6"
  - "Primavera P6 Voraussichtliches Ende vor dem Datenstichtag in Primavera P6"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-blog-article-expected-finish-less-than-data-date-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum Voraussichtliches Ende vor dem Datenstichtag in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/16_expected_finish_less_than_data_date/01_overview_template.md"
  - "09_metrics_de/16_expected_finish_less_than_data_date/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/16_expected_finish_less_than_data_date/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Voraussichtliches Ende vor dem Datenstichtag in Primavera P6

Der Datenstichtag ist die Grenze zwischen dem, was passiert ist, und dem, was noch prognostiziert wird. Bei einer sauberen Terminplanaktualisierung sollten Statusinformationen vor dem Datenstichtag als tatsächlicher Fortschritt aufgelöst werden, während die verbleibende Arbeit ab dem Datenstichtag prognostiziert werden sollte. Wenn eine Aktivität ein erwartetes Ende vor dem Datenstichtag hat, verschwimmt diese Grenze.

Diese Metrik identifiziert Aktivitäten, bei denen das erwartete Ende vor dem aktuellen Datenstichtag liegt. Es handelt sich um eine einfache Überprüfung, die jedoch veraltete Statuseingaben, fehlende tatsächliche Fertigstellungen, veraltete Feldprognosen oder Aktualisierungsworkflows aufdecken kann, die die erwarteten Termine nicht ordnungsgemäß einhalten.

In Primavera P6 wird „Erwartetes Ende“ je nach den Prozess- und Terminplaneinstellungen der Organisation häufig als Prognose- oder Aktualisierungsfeld verwendet. Einige Teams verwenden es, um die Erwartungen vor Ort an laufende Aktivitäten zu erfassen. Andere importieren es aus Tabellenkalkulationen oder Fortschrittssystemen. Da das Feld das Terminplanverhalten in bestimmten Arbeitsabläufen beeinflussen kann, sollte es nicht ohne Überprüfung in der Vergangenheit verbleiben.

Erwägen Sie eine Aktivität namens „Installieren des Hauptkabelkanals“. Der Datenstichtag des Projekts ist der 31. März, die Aktivität wird jedoch voraussichtlich am 24. März abgeschlossen sein. Wenn die Aktivität tatsächlich am 24. März abgeschlossen wurde, sollte der Terminplan normalerweise den Status „Ist-Ende“ und „Abgeschlossen“ aufweisen. Wenn die Aktivität nicht abgeschlossen wurde, ist das erwartete Ende veraltet und sollte basierend auf den neuesten Feldinformationen aktualisiert werden. In jedem Fall muss der aktuelle Wert beachtet werden.

Dieses Problem tritt häufig auf, wenn Teams der Datenstichtag nach vorne verschieben, aber nicht alle Prognosefelder vollständig aktualisieren. Der Fertigstellungsgrad kann aktualisiert werden. Die verbleibende Dauer kann angepasst werden. Es können einige Ist-Termine eingegeben werden. Die erwarteten Endwerte aus dem vorherigen Update bleiben jedoch unberührt. Das Ergebnis ist ein Terminplan, der teilweise aktualisiert aussieht, aber immer noch erwartete Fertigstellungstermine in der Vergangenheit enthält.

Die erste Frage ist, ob der Datenstichtag korrekt ist. Wenn der Datenstichtag falsch eingestellt wurde, markiert die Metrik möglicherweise die falsche Grenze. Sobald der Datenstichtag bestätigt ist, sollte jede Aktivität auf ihren tatsächlichen Status überprüft werden. Wurde die Aktivität vor dem Datenstichtag abgeschlossen? Fehlt das tatsächliche Finish? Ist die Aktivität noch aktiv? Stellt die verbleibende Dauer immer noch die verbleibende Arbeit dar?

Bei abgeschlossenen Arbeiten besteht die Korrektur normalerweise darin, den tatsächlichen Abschluss einzugeben oder zu korrigieren und dann zu bestätigen, dass der Aktivitätsstatus, der Fertigstellungsgrad und die verbleibende Dauer konsistent sind. Für Arbeiten, die noch aktiv sind, sollte das erwartete Ende auf ein gültiges Datum am oder nach dem Datenstichtag aktualisiert werden. Die verbleibende Dauer sollte ebenfalls überprüft werden, damit die Terminplanberechnung die aktuelle Prognose widerspiegelt.

Bei noch nicht begonnenen Arbeiten weist ein erwartetes Ende vor dem Datenstichtag normalerweise auf einen alten oder importierten Wert hin. Der Planer sollte bestätigen, ob die Aktivität noch in den Plan gehört, ob ihre Prognosetermine neu berechnet werden müssen und ob der erwartete Termin gemäß dem Projektaktualisierungsverfahren entfernt oder ersetzt werden sollte.

Eine praktische Überprüfung in P6 sollte Aktivitäts-ID, Aktivitätsname, WBS, Aktivitätsstatus, erwartetes Ende, Ist-Start, Ist-Ende, verbleibende Dauer, Prozentsatz der Fertigstellung, Start, Ende, Gesamtpuffer und Kalender umfassen. Das Team sollte kritische und nahezu kritische Aktivitäten, Übergabearbeiten, kundenorientierte Meilensteine ​​und Aktivitäten im kurzfristigen Ausblick priorisieren.

Diese Metrik hilft auch dabei, Prozessprobleme aufzudecken. Wenn bei jedem Update das gleiche Problem auftritt, kann die Quelle eine Importdatei, eine Tabellenvorlage oder ein Feldberichts-Workflow sein. Das Team sollte prüfen, ob das erwartete Ende von einem anderen System geladen wird und ob Validierungsregeln vorhanden sind, bevor der Terminplan berechnet und ausgegeben wird.

Der Zielschwellenwert sollte bei null ungelösten Aktivitäten liegen. Das bedeutet nicht, dass jede gemeldete Aktivität ein großes Problem darstellt. Das bedeutet, dass jede Aktivität korrigiert oder erklärt werden sollte. Ein erwartetes Ende vor dem Stichtag sollte nicht im Terminplan stehen bleiben, nur weil niemand darauf geachtet hat.

Durch die Bereinigung dieser Kennzahl wird die Glaubwürdigkeit des Terminplans verbessert. Es hilft dem Team, eine klare Aktualisierungsgrenze einzuhalten, die tatsächliche Leistung von der prognostizierten Arbeit zu unterscheiden und irreführende Lookahead- oder Puffer-Ergebnisse zu vermeiden. In PMO-Reviews zeigt sich zudem, dass die Terminaktualisierung nicht nur berechnet, sondern auch tatsächlich auf Statuskonsistenz überprüft wurde.
## Verwandte Inhalte
- [Voraussichtliches Ende vor dem Datenstichtag in Primavera P6 - Überblick](01_overview_template.md)
- [Voraussichtliches Ende vor dem Datenstichtag in Primavera P6 - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
