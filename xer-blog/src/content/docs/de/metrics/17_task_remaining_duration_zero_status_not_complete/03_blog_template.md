---
title: "Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist"
seo_title: "Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist - Primavera P6"
meta_description: "Erklärt, warum Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist"
  - "Primavera P6 Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-blog-article-task-remaining-duration-zero-status-not-complete-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/17_task_remaining_duration_zero_status_not_complete/01_overview_template.md"
  - "09_metrics_de/17_task_remaining_duration_zero_status_not_complete/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/17_task_remaining_duration_zero_status_not_complete/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist

Die verbleibende Dauer ist eines der wichtigsten Statusfelder in einem Primavera P6-Update. Es teilt dem Terminplan mit, wie viel Zeit noch benötigt wird, um die Aktivität abzuschließen. Wenn die verbleibende Dauer einer normalen Aufgabenaktivität den Wert 0 hat, ist die Meldung einfach: Es ist keine Zeit mehr für die Ausführung übrig. Wenn dieselbe Aufgabe nicht als „Abgeschlossen“ markiert ist, erzählt der Terminplan zwei verschiedene Geschichten gleichzeitig.

Diese Metrik identifiziert Aufgabenaktivitäten, bei denen die verbleibende Dauer 0 ist, der Aufgabenstatus jedoch nicht „Abgeschlossen“ ist. Es handelt sich um eine fokussierte Version einer umfassenderen Status-Qualitätsprüfung, da sich diese Inkonsistenz bei Aufgabenaktivitäten direkt auf Arbeitspläne, Fortschrittsberichte, verdienten Wert und Vorschauüberprüfungen auswirken kann.

Bei einer normalen Aufgabe bedeutet eine verbleibende Dauer von Null normalerweise, dass die Arbeit erledigt ist. Die Aktivität sollte über einen tatsächlichen Abschluss, einen abgeschlossenen Status und Fortschrittswerte verfügen, die mit dem Aktualisierungsverfahren des Projekts übereinstimmen. Wenn die Aufgabe noch „In Bearbeitung“ oder „Nicht gestartet“ ist, sollte die verbleibende Dauer normalerweise größer als 0 sein, da noch ein gewisses Arbeitsvolumen erwartet wird.

Dieses Problem tritt häufig während intensiver Aktualisierungszyklen auf. Ein Außendienstteam kann melden, dass eine Aktivität effektiv erledigt wurde, sodass der Planer die verbleibende Dauer auf 0 reduziert, aber nicht das tatsächliche Ende eingibt. Eine Importdatei aktualisiert möglicherweise die verbleibende Dauer, ohne den Aktivitätsstatus zu aktualisieren. Bei einer manuellen Aktualisierung werden möglicherweise Fortschrittswerte festgelegt, die Aktivität bleibt jedoch im falschen Status. Das Ergebnis ist eine Aufgabe, die aus Sicht der Dauer erledigt aussieht, aus Sicht des Status jedoch unvollständig.

Diese Inkonsistenz ist wichtig. Eine Aufgabe ohne verbleibende Dauer kann dazu führen, dass zukünftige Arbeiten nicht mehr wie erwartet vorangetrieben werden. Es kann vorkommen, dass es aus der Aufmerksamkeit der Vorausschau verschwindet, auch wenn es formal nicht vollständig ist. Es kann zu einer Verzerrung der Earned Valueberichterstattung kommen, wenn Fortschritt und Abschluss nicht aufeinander abgestimmt sind. Außerdem kann es bei Kunden- oder PMO-Überprüfungen zu Verwirrung kommen, da der Terminplan nicht eindeutig beantworten kann, ob die Aufgabe abgeschlossen ist.

Der Test sollte mit einem einfachen P6-Layout beginnen. Dazu gehören Aktivitäts-ID, Aktivitätsname, WBS, Aktivitätstyp, Aktivitätsstatus, Ist-Start, Ist-Ende, ursprüngliche Dauer, verbleibende Dauer, Dauer bei Abschluss, Art des abgeschlossenen Prozentsatzes, abgeschlossener Prozentsatz der Aktivität, Start, Ende und Gesamtpuffer. Filtern Sie nach Aufgabenaktivitäten, bei denen die verbleibende Dauer gleich 0 ist und der Aktivitätsstatus nicht abgeschlossen ist.

Jede gekennzeichnete Aufgabe sollte mit dem verantwortlichen Eigentümer besprochen werden. Ist die Arbeit tatsächlich abgeschlossen? Wenn ja, sollte die Aufgabe normalerweise als abgeschlossen markiert werden und den korrekten tatsächlichen Abschluss erhalten. Der Planer sollte außerdem bestätigen, dass der Fertigstellungsgrad und die verbleibende Dauer mit den Fortschrittsregeln des Projekts übereinstimmen.

Wenn die Arbeit nicht abgeschlossen ist, ist die Korrektur anders. Die Aufgabe sollte den korrekten Status beibehalten, z. B. „In Bearbeitung“ oder „Nicht gestartet“, aber die verbleibende Dauer sollte auf einen gültigen Wert zurückgesetzt werden. Dieser Wert sollte die verbleibende Arbeit zum Datenstichtag widerspiegeln, kein angestrebtes Enddatum oder eine Berichtspräferenz.

Stellen Sie sich eine Aufgabe namens „Brandmeldegeräte installieren“ vor. Laut Erfahrungsbericht ist die Installation fast abgeschlossen und der Planer setzt die verbleibende Dauer auf 0. Bei Tests wurde jedoch festgestellt, dass mehrere Geräte noch korrigiert werden müssen und die Aktivität bis zum Datenstichtag noch nicht abgeschlossen war. In diesem Fall sollte die Aufgabe nicht mit einer Restdauer von Null verbleiben. Der verbleibende Aufwand sollte geschätzt und eingegeben werden, damit der Terminplan weiterhin die unvollendeten Arbeiten vorhersagt.

Betrachten Sie nun eine Aufgabe mit dem Namen „Platte der Ebene 3 gießen“. Der Betonguss wurde vor dem Datenstichtag abgeschlossen, aber die Aktivität zeigt immer noch „In Bearbeitung“ an und hat kein Ist-Ende. Hier ist die verbleibende Dauer von 0 wahrscheinlich richtig, aber die Statusaktualisierung ist unvollständig. Der Planer sollte das tatsächliche Ende eingeben und die Aufgabe als abgeschlossen markieren.

Der Zielschwellenwert für diese Metrik sollte bei null ungelösten Aufgabenaktivitäten liegen. Das Wort ungelöst ist wichtig. Einige Elemente müssen vor der Korrektur möglicherweise vor Ort bestätigt werden, sollten jedoch in einem Berichtsplan nicht unerklärt bleiben. Jedes Element sollte korrigiert, einem Eigentümer zugewiesen oder dokumentiert werden, wenn ein vorübergehender Aktualisierungsgrund vorliegt.

Diese Metrik trägt auch dazu bei, die Update-Disziplin zu verbessern. Wenn in jedem Zyklus das gleiche Problem auftritt, sollte das Team vor dem Terminplanproblem die Importzuordnungen, Aktualisierungsformulare, Feldberichtsanweisungen und Prüfungen überprüfen. Benutzer setzen die verbleibende Dauer möglicherweise auf 0, da dies der schnellste Weg ist, den Fortschritt anzuzeigen, ohne die Aktivität ordnungsgemäß abzuschließen.

Durch die Bereinigung dieser Metrik wird es einfacher, dem Terminplan zu vertrauen. Es gleicht die verbleibende Dauer, den Aktivitätsstatus, die tatsächlichen Endtermine und die Fortschrittswerte an. Noch wichtiger ist, dass es dem Projektteam hilft, bessere Entscheidungen darüber zu treffen, welche Arbeit wirklich abgeschlossen ist und welche Arbeit noch Aufmerksamkeit erfordert.
## Verwandte Inhalte
- [Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist - Überblick](01_overview_template.md)
- [Die verbleibende Dauer der Aufgabe ist Null, während der Status nicht abgeschlossen ist - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
