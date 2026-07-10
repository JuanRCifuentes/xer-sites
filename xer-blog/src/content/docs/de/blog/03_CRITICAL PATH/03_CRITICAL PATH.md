---
title: "Kritischer Pfad"
seo_title: "Kritischer Pfad - Primavera P6"
meta_description: "Lernen Sie Kritischer Pfad in Primavera P6 mit praktischem Fokus auf Terminplanung, Projektcontrolling und Terminplanqualität."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Kritischer Pfad"
  - "Primavera P6 Kritischer Pfad"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-critical-path-in-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanung in Primavera P6"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Lernen Sie Kritischer Pfad in Primavera P6 mit praktischem Fokus auf Terminplanung, Projektcontrolling und Terminplanqualität."
related_metrics:
  - "09_metrics_de/09_cp_or_float_path_starting_with_constraint/01_overview_template.md"
related_blogs:
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
  - "09b_blogs_de/04_CRITICALITY MATRIX/04_CRITICALITY MATRIX.md"
translation_of: "01b_blogs_en/03_CRITICAL PATH/03_CRITICAL PATH.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Kritischer Pfad

Der kritische Pfad ist die längste Abfolge abhängiger Aktivitäten in einem Terminplan. Es ermittelt die kürzestmögliche Projektdauer und legt direkt den Projektendtermin fest.

In der Praxis ist der kritische Pfad die Kette von Aufgaben, die nicht verzögert werden können, ohne dass sich dies auf die endgültige Frist auswirkt. Wenn eine Aktivität auf dem kritischen Pfad verschoben wird und sich sonst nichts ändert, verschiebt sich auch das Projektabschlussdatum.

Aus diesem Grund ist der kritische Pfad einer der wichtigsten Ergebnisse eines Primavera P6-Terminplans. Es handelt sich nicht nur um einen Filter, eine Farbe oder einen Bericht. Es ist die Erklärung des Terminplans, was die Fertigstellung vorantreibt.

## Was der kritische Pfad bedeutet

Ein Terminplan enthält viele Aktivitäten, aber nicht alle Aktivitäten haben die gleiche Auswirkung auf den Endtermin. Einige Aktivitäten haben Puffer. Sie können sich ein wenig bewegen, bevor sie sich auf die nächste Aktivität oder den Projektabschluss auswirken. Kritische Aktivitäten verfügen nicht über diese Flexibilität oder sie verfügen je nach Terminplanmethode und -einstellungen über die geringste Flexibilität.

Der kritische Pfad zeigt die Mindestzeit an, die zum Abschluss des Projekts erforderlich ist, basierend auf der aktuellen Logik, Dauer, Kalendern, Einschränkungen und Status.

```mermaid
flowchart LR
    A["Projektstart"] --> B["Designfreigabe"]
    B --> C["Besorgen Sie sich Geräte mit langer Vorlaufzeit"]
    C --> D["Ausrüstung installieren"]
    D --> E["Provisionssystem"]
    E --> F["Projektabschluss"]
```

Handelt es sich hierbei um die Kontrollkette, kann eine Verzögerung bei der Beschaffung die Installation verzögern. Eine Verzögerung bei der Installation kann die Inbetriebnahme verzögern. Eine Verzögerung bei der Inbetriebnahme kann den Projektabschluss verzögern. Der kritische Pfad hilft dem Team, diesen Zusammenhang zu erkennen.

## Es ist die Kette, die Sie nicht verzögern können

Der kritische Weg ist nicht nur die Arbeit, die sich wichtig anfühlt. Es ist die abhängige Arbeitsreihenfolge, die den Endtermin definiert.

Diese Unterscheidung ist wichtig. Eine hochwertige Aktivität ist möglicherweise nicht kritisch, wenn sie über Puffer verfügt. Ein sichtbarer Kundenmeilenstein ist möglicherweise nicht kritisch, wenn ein anderer Weg den Abschluss vorantreibt. Eine kleine technische Aktivität kann kritisch sein, wenn sie in der einzigen Kette steht, die zur endgültigen Übergabe führt.

Für Projektkontrollteams wird der kritische Pfad dadurch zu einem Entscheidungsinstrument. Es hilft bei der Beantwortung:

- Was treibt den Abschluss des Projekts voran?
- Welche Aktivitäten erfordern die meiste zeitliche Aufmerksamkeit?
- Wo würde sich eine Verzögerung unmittelbar auf die Fertigstellung auswirken?
- Welche Wiederherstellungsmaßnahmen könnten das Enddatum schützen?
- Ist der gemeldete Pfad sinnvoll?

Die letzte Frage ist, welche Planer niemals überspringen sollten.

## Akzeptieren Sie den kritischen Filter nicht blind

Primavera P6 kann kritische Aktivitäten identifizieren, aber die Software versteht die Projektabsicht nicht. Die Berechnung erfolgt auf Grundlage der bereitgestellten Daten: Logik, Kalender, Einschränkungen, Dauer, Fortschritt und Terminplanoptionen.

Wenn die Daten schwach sind, kann der kritische Pfad seltsam aussehen.

Aktivitäten oder Meilensteine ​​können im kritischen Filter erscheinen, obwohl sie das Projekt nicht wirklich vorantreiben. Dies kann aufgrund fehlender Logik, harter Einschränkungen, veralteter Daten, offener Enden, ungewöhnlicher Kalender, negativer Puffer, falschem Status oder beibehaltener Logikeinstellungen passieren.

Der Planer muss professionelles Urteilsvermögen an den Tag legen. Der kritische Pfad sollte in Frage gestellt werden. Es sollte vernünftig erscheinen. Es sollte eine Geschichte erzählen, die das Projektteam wiedererkennt.

Wenn der Pfad besagt, dass die endgültige Fertigstellung von einem administrativen Meilenstein ohne echte nachgelagerte Arbeit abhängt, stellen Sie dies in Frage. Wenn der Weg mit einem Meilenstein beginnt, der die Ausführung nicht wirklich steuert, fordern Sie ihn heraus. Wenn der Pfad über nicht zusammenhängende WBS-Bereiche ohne klare Schnittstelle führt, fordern Sie ihn heraus.

Der kritische Pfad ist nur so gut wie das dahinterstehende Terminplanmodell.

## Basispläne und der kritische Pfad

In einem Terminplan, der nie aktualisiert wurde, wie etwa einem ersten Basisplan, beginnt der kritische Pfad häufig mit dem Projektstart-Meilenstein und endet mit dem Projektabschluss-Meilenstein.

Das ist üblich, aber keine in Stein gemeißelte Regel.

Einige Projekte haben einen kritischen Pfad, der an einem wichtigen Zwischenmeilenstein beginnt. Beispielsweise kann mit dem Bau möglicherweise erst dann begonnen werden, wenn ein Eigentümer ein Gebiet übergibt, eine Genehmigung erteilt wird oder ein Entwurfspaket den Genehmigungsstatus erreicht. In diesem Fall kann der Übergabe- oder Freigabemeilenstein den Beginn des Controlling-Pfades auslösen.

Die gleiche Idee gilt gegen Ende des Projekts. Der kritische Pfad kann mit der endgültigen Fertigstellung enden, kann aber auch einen zwischenzeitlichen Vertragsmeilenstein, eine Übergabephase, einen Systemumsatz oder ein Kundenzugriffsdatum bestimmen, die derzeit restriktiver sind.

Der Schlüssel liegt nicht darin, ob der Weg am traditionellsten Ort beginnt und endet. Entscheidend ist, ob der Weg logisch, vollständig und vertretbar ist.

## In Bearbeitung befindliche Terminpläne

Sobald ein Terminplan ausgeführt wird, ändert sich die Form des kritischen Pfads. Abgeschlossene Arbeiten sollten künftige Fertigstellungen nicht mehr vorantreiben. Der Pfad sollte an der aktuellen Statusgrenze beginnen.

In einem aktualisierten Terminplan beginnt der kritische Pfad oft mit einer gerade laufenden Aktivität, einer noch nicht gestarteten Aktivität, die beginnen kann, oder einem gültigen Meilenstein, der den Zugriff auf zukünftige Arbeiten steuert. Es kann auch an einer Projektschnittstelle oder einem Übergabemeilenstein beginnen, wenn dieses Ereignis wirklich die nächste wichtige Arbeit vorantreibt.

Hier kommt es auf der Datenstichtag an. Der Datenstichtag trennt die tatsächliche Leistung von der prognostizierten Arbeit. Ein kritischer Pfad nach dem Datenstichtag sollte erklären, wie die verbleibende Arbeit zum Abschluss führt.

Wenn der Pfad mit einer Aktivität ohne steuernde Logik, einem ungeklärten Beginn des Datenstichtags oder einem fragwürdigen Meilenstein beginnt, sollte der Prüfer dies untersuchen. Der Terminplan zeigt möglicherweise einen berechneten, aber keinen glaubwürdigen Weg.

## Seien Sie vorsichtig mit Meilensteinen

Meilensteine ​​sind nützlich, weil sie wichtige Punkte markieren: Ankündigung zum Fortfahren, Bereichsübergabe, Entwurfsgenehmigung, mechanische Fertigstellung, Systemübergabe, wesentliche Fertigstellung und endgültige Fertigstellung.

Aber auch Meilensteine ​​können eine Überprüfung des kritischen Pfads in die Irre führen.

Ein Meilenstein kann kritisch erscheinen, weil er einer Einschränkung unterliegt. Es kann kritisch erscheinen, da es keine Dauer hat und an einer Datumsgrenze liegt. Es mag kritisch erscheinen, weil ihm die Logik fehlt. Das bedeutet nicht automatisch, dass der Meilenstein tatsächlich Teil der Controlling-Ausführungskette ist.

Seien Sie besonders vorsichtig, wenn der kritische Pfad mit einem Meilenstein beginnt. Fragen:

- Stellt dieser Meilenstein ein echtes Controlling-Ereignis dar?
- Welche Aktivität oder äußere Bedingung treibt den Meilenstein voran?
- Welche Arbeit wird durch den Meilenstein freigegeben?
- Ist der Meilenstein eher eingeschränkt als logikgesteuert?
- Wäre der Weg auch dann noch kritisch, wenn die Meilensteinlogik korrigiert würde?

Wenn der Meilenstein die Arbeit nicht kontrolliert, sollte es ihm nicht gestattet sein, die Geschichte des kritischen Pfads zu definieren.

## Behaltene Logik kann die Geschichte verändern

Beibehaltene Logik ist eine Primavera P6-Einstellung, die zur Handhabung von Fortschritten außerhalb der Reihenfolge verwendet wird. Dies kann angemessen sein, kann sich aber auch auf den kritischen Pfad in einer Weise auswirken, die Prüfer verstehen müssen.

Wenn beibehaltene Logik verwendet wird, behält P6 möglicherweise die Vorgängerlogik bei, selbst wenn die Nachfolgearbeit bereits außerhalb der Reihenfolge begonnen hat. Dies kann dazu führen, dass die verbleibende Arbeit so angehalten oder sequenziert wird, dass sich der berechnete kritische Pfad ändert.

Das Problem ist nicht, dass die beibehaltene Logik immer falsch ist. Das Problem besteht darin, dass der Planer verstehen muss, ob er eine realistische Prognose erstellt.

Wenn die beibehaltene Logik dazu führt, dass der kritische Pfad über Beziehungen verläuft, die nicht mehr widerspiegeln, wie die Arbeit ausgeführt wird, sollte das Team den Status, die Logik und die Terminplanoptionen überprüfen. Der Weg sollte einen vertretbaren Restplan widerspiegeln, nicht nur eine mechanische Berechnung.

## So überprüfen Sie den kritischen Pfad

Eine gute Überprüfung des kritischen Pfads sollte die P6-Ausgabe mit der Planungsbeurteilung kombinieren.

Beginnen Sie mit der Erstellung des Berichts über den längsten Pfad oder den kritischen Pfad. Überprüfen Sie dann den Pfad Aktivität für Aktivität. Sehen Sie sich Vorgänger, Nachfolger, Beziehungstypen, Verzögerungen, Einschränkungen, Kalender, Ist-Termine, verbleibende Dauer und Gesamtpuffer an.

Fragen Sie, ob der Weg sinnvoll ist:

- Folgt der Pfad einer glaubwürdigen Ausführungssequenz?
- Beginnt es mit einem gültigen aktuellen Treiber?
- Wird es mit dem richtigen Abschluss- oder Kontrollmeilenstein abgeschlossen?
- Zwingen Zwänge den Weg?
- Verstecken fehlende Beziehungen den wahren Treiber?
- Beeinflusst die beibehaltene Logik den Pfad auf irreführende Weise?
- Erkennt das Projektteam dies als Controlling-Arbeit an?

Wenn die Antwort „Nein“ lautet, muss der Terminplan überprüft werden, bevor der kritische Pfad sicher verwendet werden kann.

## Abschluss

Der kritische Pfad ist die Reihenfolge abhängiger Aufgaben, die den Endtermin des Projekts definiert. Es zeigt die Mindestzeit an, die zur Fertigstellung des Projekts benötigt wird, und identifiziert die Arbeiten, die nicht vernachlässigt werden dürfen, ohne dass sich dies auf die Frist auswirkt.

Aber den kritischen Weg kann man nicht blind akzeptieren. P6 berechnet, was die Daten ihm zu berechnen vorgeben. Der Planer muss hinterfragen, ob das Ergebnis vernünftig und logisch ist und mit dem tatsächlichen Ausführungsplan übereinstimmt.

In einem starken Terminplan erzählt der kritische Pfad eine klare Geschichte. Es geht von einem gültigen aktuellen Treiber aus, folgt realen Abhängigkeiten, vermeidet irreführende Einschränkungen, verarbeitet den Fortschritt korrekt und führt zum richtigen Abschlussmeilenstein.

Wenn diese Geschichte Sinn ergibt, wird der kritische Pfad zu einem der mächtigsten Werkzeuge der Projektsteuerung. Wenn dies nicht der Fall ist, ist dies eine Warnung, dass der Terminplan noch einmal überprüft werden muss, bevor der Prognose vertraut werden kann.
## Verwandte Inhalte
- [Kritischer Pfad oder Pufferpfad, beginnend mit einer Einschränkung - Überblick](../../09_metrics_de/09_cp_or_float_path_starting_with_constraint/01_overview_template.md)
- [Robuste Logik](../02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
- [Kritikalitätsmatrix](../04_CRITICALITY%20MATRIX/04_CRITICALITY%20MATRIX.md)
