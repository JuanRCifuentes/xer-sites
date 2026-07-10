---
title: "Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6"
seo_title: "Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6"
meta_description: "Erklärt, warum Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6"
  - "Primavera P6 Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-blog-article-actual-date-greater-than-data-date-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/12_actual_date_greater_than_data_date/01_overview_template.md"
  - "09_metrics_de/12_actual_date_greater_than_data_date/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/12_actual_date_greater_than_data_date/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6

## Titel

Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die Terminplanaktualisierungen von Primavera P6 validieren.

## Öffnungshaken

Der Datenstichtag ist die Grenze zwischen der tatsächlichen Historie und der Prognose. Wenn ein Ist-Termin hinter dieser Linie liegt, vermischt der Terminplan die Zukunft mit der Vergangenheit.

## Einführung

In Primavera P6 definiert der Datenstichtag die Aktualisierungsgrenze. Die tatsächliche Arbeit sollte an oder vor diesem Datum aufgezeichnet werden. Prognosearbeiten sollten danach bleiben.

Wenn ein Ist-Start, ein Ist-Ende oder ein anderes Ist-Termin nach dem Datenstichtag liegt, enthält der Terminplan einen Statusdatumsfehler. Für die Aktivität kann es sein, dass die Arbeit als bereits begonnen oder abgeschlossen angezeigt wird, obwohl dieses Datum außerhalb des aktuellen Berichtszeitraums liegt.

Diese Metrik identifiziert Aktivitäten mit Ist-Terminen, die über dem Datenstichtag liegen. Das Ziel sind null ungelöste Aktivitäten.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob die Ist-Terminen mit dem aktuellen Aktualisierungszyklus übereinstimmen. Tatsächliche Daten sollten die tatsächliche Leistung widerspiegeln, die bis zum Datenstichtag bereits erreicht wurde.

Wenn ein Ist-Termin nach dem Datenstichtag liegt, ist normalerweise eines von zwei Dingen falsch. Entweder wurde das tatsächliche Datum falsch eingegeben oder der Datenstichtag stimmt nicht mit dem genehmigten Berichtszeitraum überein.

Ein hohes Ergebnis deutet auf eine schwache Update-Cut-Off-Kontrolle, Importprobleme oder eine Verwechslung zwischen tatsächlichen und prognostizierten Daten hin.

## Warum dieses Thema wichtig ist

Zukünftige tatsächliche Termine können die Glaubwürdigkeit des Terminplans beeinträchtigen. Sie können Fortschrittsberichte, Earned Value-, Puffer- und Meilensteinprognosen verzerren.

Sie erschweren auch die Überprüfung des Terminplans. PMO-Prüfer und Kunden erwarten, dass der Datenstichtag klar trennt, was geschehen ist und was geplant ist.

Wenn diese Grenze nicht eingehalten wird, wird es schwierig, dem Update zu vertrauen.

## Häufige Ursachen für schlechte Ergebnisse

- Tatsächliche Daten, die nach dem Aktualisierungsstichtag eingegeben wurden
- Falsches Projektdatendatum
- Aus Dateien importierter Fortschritt, der zukünftige Daten abdeckt
- Verwechslung zwischen Ist-Terminen und prognostizierten Daten
- Manuelle Statusaktualisierungen eingegeben, ohne der Datenstichtag zu überprüfen
- Arbeitszeittabellen- oder Außendienstsysteme sind nicht auf den Terminplanaktualisierungszeitraum abgestimmt

## So verbessern Sie das Ergebnis

### 1. Bestätigen Sie der Datenstichtag

Beginnen Sie mit der Bestätigung des genehmigten Datenstichtags für das Update. Wenn der Datenstichtag falsch ist, korrigieren Sie es, bevor Sie den Aktivitätsstatus ändern.

Der Datenstichtag sollte mit dem Berichtszeitraum und dem Projektkontrollverfahren übereinstimmen.

### 2. Überprüfen Sie zukünftige Ist-Termine

Filtern Sie nach Ist-Terminen, die über dem Datenstichtag liegen. Überprüfen Sie den tatsächlichen Start, das tatsächliche Ende, den Aktivitätsstatus, die verbleibende Dauer und den Prozentsatz der Fertigstellung zusammen.

Wenn das tatsächliche zukünftige Datum falsch ist, korrigieren oder entfernen Sie es. Wenn die Arbeiten bis zum Datenstichtag noch nicht tatsächlich durchgeführt wurden, sollten sie nicht als tatsächlich durchgeführt werden.

### 3. Korrigieren Sie den Update-Workflow

Wenn das Problem auf einen Import zurückzuführen ist, überprüfen Sie die Quelldatei und die Zuordnung. Wenn es sich um manuelle Updates handelt, verstärken Sie das Update-Abschaltverfahren.

Das Ziel besteht darin, zu verhindern, dass zukünftige Ist-Werte vor der Berichterstattung in den Terminplan eingehen.

## Beispielszenario

Eine monatliche Terminplanaktualisierung hat der Datenstichtag 31. Mai. Bei der Überprüfung findet der Planer für eine Installationsaktivität das tatsächliche Ende am 3. Juni.

Der Erfahrungsbericht umfasste Arbeiten, die nach dem Berichtsschluss abgeschlossen wurden. Der Planer entfernt das zukünftige Ist-Ende, stellt den korrekten Status zum 31. Mai wieder her und behält die verbleibende Arbeit in der Prognose.

Der Terminplan trennt nun den tatsächlichen Fortschritt für Mai von der geplanten Arbeit für Juni, wodurch das Update vertrauenswürdiger wird.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik aus und bestätigen Sie der Datenstichtag.
- Tage 2–3: Korrigieren Sie zukünftige Ist-Termine und den Aktivitätsstatus.
- Tage 4–5: Überprüfen Sie die Importdateien und den Aktualisierungsworkflow.
- Tag 6: Überprüfen Sie Berichte, Earned Valueergebnisse und Meilensteintermine.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie es, der Datenstichtag zu verschieben, nur um zukünftige Ist-Werte zu verbergen. Der Datenstichtag sollte dem genehmigten Berichtszeitraum folgen.

Vermeiden Sie es, Ist-Termine zu löschen, ohne den tatsächlichen Feldstatus zu bestätigen.

Vermeiden Sie es, Importquellen zu ignorieren. Wenn zukünftige Ist-Werte aus einem Import stammen, kann sich das Problem im nächsten Zyklus wiederholen.

## Wichtige Erkenntnisse

- Die Ist-Terminen sollten am oder vor dem Datenstichtag liegen.
- Das Ziel sind null ungelöste Aktivitäten.
- Zukünftige Istwerte können auf einen falschen Status, ein falsches Datenstichtag oder Importprobleme hinweisen.
- Korrigieren Sie den Aktivitätsstatus, die verbleibende Dauer und den Fertigstellungsgrad nach der Festlegung der Termine.
- Die Aktualisierungsunterbrechungskontrolle verhindert wiederholte Probleme.

## Abschluss

Tatsächliche Daten nach dem Datenstichtag stellen eindeutig ein Problem bei der Aktualisierung des Terminplans dar. Sie verwischen die Grenze zwischen Geschichte und Prognose.

Die Verwaltung dieser Metrik verbessert die Aktualisierungsdisziplin, die Fortschrittsberichterstattung, die Zuverlässigkeit des verdienten Werts und das Vertrauen in die Übermittlung von Primavera P6-Terminplänen.

## Aufruf zum Handeln

Überprüfen Sie alle Ist-Terminen nach dem Datenstichtag, bevor Sie Ihre nächste Terminplanaktualisierung herausgeben. Korrigieren Sie das Datums-, Status- oder Datenquellenproblem, sodass der Terminplan die tatsächliche Leistung sauber von der prognostizierten Arbeit trennt.
## Verwandte Inhalte
- [Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6 - Überblick](01_overview_template.md)
- [Tatsächliche Daten liegen später als der Datenstichtag in Primavera P6 - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
