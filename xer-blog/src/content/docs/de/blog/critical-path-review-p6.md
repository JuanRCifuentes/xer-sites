---
title: 'Wie man den kritischen Weg in Primavera P6 prüft'
description: 'Was der kritische Weg in Primavera P6 bedeutet, warum man den Kritisch-Filter nie blind akzeptieren sollte und wie man den Weg prüft, damit die Prognose vertrauenswürdig ist.'
pubDate: 'Jul 22 2022'
heroImage:
  folder: blog
  fileName: blog-placeholder-2.jpg
---


Der kritische Weg ist die längste Abfolge abhängiger Vorgänge in einem Terminplan. Er bestimmt die kürzestmögliche Projektdauer und definiert direkt das Projektfertigstellungsdatum.

In der Praxis ist der kritische Weg die Kette von Aufgaben, die nicht verzögert werden können, ohne den endgültigen Abgabetermin zu beeinflussen. Wenn ein Vorgang auf dem kritischen Weg sich verschiebt und sich sonst nichts ändert, verschiebt sich auch das Projektfertigstellungsdatum.

Deshalb ist der kritische Weg einer der wichtigsten Ausgaben eines Primavera P6-Terminplans. Er ist nicht nur ein Filter, eine Farbe oder ein Bericht. Er ist die Erklärung des Terminplans dafür, was die Fertigstellung steuert.

## Was der kritische Weg bedeutet

Ein Terminplan enthält viele Vorgänge, aber nicht alle Vorgänge haben den gleichen Einfluss auf das Fertigstellungsdatum. Einige Vorgänge haben Puffer (Float). Sie können sich ein wenig verschieben, bevor sie den nächsten Vorgang oder den Projektabschluss beeinflussen. Kritische Vorgänge haben diese Flexibilität nicht, oder sie haben die geringste Flexibilität je nach Terminplanmethode und Einstellungen.

Der kritische Weg zeigt die Mindestzeit, die zur Fertigstellung des Projekts auf der Grundlage der aktuellen Logik, Dauern, Kalender, Einschränkungen und des Status benötigt wird.

```mermaid
flowchart LR
    A["Projektstart"] --> B["Entwurfsfreigabe"]
    B --> C["Langfristige Ausrüstung beschaffen"]
    C --> D["Ausrüstung installieren"]
    D --> E["System in Betrieb nehmen"]
    E --> F["Projektfertigstellung"]
```

Wenn dies die steuernde Kette ist, kann eine Verzögerung bei der Beschaffung die Installation verzögern. Eine Verzögerung bei der Installation kann die Inbetriebnahme verzögern. Eine Verzögerung bei der Inbetriebnahme kann die Projektfertigstellung verzögern. Der kritische Weg hilft dem Team, diesen Zusammenhang zu erkennen.

## Es ist die Kette, die man nicht verzögern kann

Der kritische Weg ist nicht einfach die Arbeit, die sich wichtig anfühlt. Es ist die abhängige Arbeitsabfolge, die das Fertigstellungsdatum definiert.

Diese Unterscheidung ist wichtig. Ein hochwertiger Vorgang ist möglicherweise nicht kritisch, wenn er Puffer hat. Ein sichtbarer Auftraggeber-Meilenstein ist möglicherweise nicht kritisch, wenn ein anderer Weg die Fertigstellung steuert. Ein kleiner technischer Vorgang kann kritisch sein, wenn er in der einzigen Kette zur abschließenden Übergabe liegt.

Für Projektsteuerungsteams macht der kritische Weg ihn zu einem Entscheidungsinstrument. Er hilft, folgende Fragen zu beantworten:

- Was steuert den Projektabschluss?
- Welche Vorgänge benötigen die größte Terminaufmerksamkeit?
- Wo würde eine Verzögerung sofort die Fertigstellung beeinflussen?
- Welche Wiederherstellungsmaßnahmen könnten das Fertigstellungsdatum schützen?
- Macht der berichtete Weg Sinn?

Die letzte Frage ist die, die Planer nie überspringen sollten.

## Den Kritisch-Filter nicht blind akzeptieren

Primavera P6 kann kritische Vorgänge identifizieren, aber die Software versteht die Projektabsicht nicht. Sie berechnet auf der Grundlage der bereitgestellten Daten: Logik, Kalender, Einschränkungen, Dauern, Fortschritt und Terminplanoptionen.

Wenn die Daten schwach sind, kann der kritische Weg seltsam aussehen.

Vorgänge oder Meilensteine können im Kritisch-Filter erscheinen, obwohl sie das Projekt nicht wirklich steuern. Dies kann aufgrund fehlender Logik, harter Einschränkungen, veralteter Termine, offener Enden, ungewöhnlicher Kalender, negativem Puffer (Negative Float), falschem Status oder Retained-Logic-Einstellungen passieren.

Der Planer muss fachliches Urteilsvermögen einsetzen. Der kritische Weg sollte hinterfragt werden. Er sollte vernünftig erscheinen. Er sollte eine Geschichte erzählen, die das Projektteam erkennt.

Wenn der Weg sagt, dass der endgültige Abschluss von einem administrativen Meilenstein ohne reale nachgelagerte Arbeit gesteuert wird, hinterfragen Sie das. Wenn der Weg mit einem Meilenstein beginnt, der die Ausführung nicht wirklich steuert, hinterfragen Sie das. Wenn der Weg ohne klare Schnittstelle über unzusammenhängende PSP-Bereiche (WBS) springt, hinterfragen Sie das.

Der kritische Weg ist nur so gut wie das dahinterstehende Terminplanmodell.

## Basislinien und der kritische Weg

In einem Terminplan, der noch nie aktualisiert wurde, z. B. einer ersten Basislinie, beginnt der kritische Weg oft mit dem Projektstart-Meilenstein und endet mit dem Projektfertigstellungsmeilenstein.

Das ist üblich, aber keine in Stein gemeißelte Regel.

Einige Projekte haben einen kritischen Weg, der an einem wichtigen Zwischenmeilenstein beginnt. Zum Beispiel kann der Bau möglicherweise nicht beginnen, bis ein Auftraggeber einen Bereich übergibt, eine Genehmigung erteilt wird oder ein Entwurfspaket den genehmigten Status erreicht. In diesem Fall kann der Übergabe- oder Freigabemeilenstein den Beginn des steuernden Weges auslösen.

Dasselbe Prinzip gilt gegen Ende des Projekts. Der kritische Weg kann an der Endfertigstellung enden, aber er kann auch einen Zwischenvertragsmeilenstein, eine Übergabephase, eine Systemübergabe oder ein Auftraggeber-Zugangsdatum steuern, das derzeit restriktiver ist.

Der Schlüssel liegt nicht darin, ob der Weg am traditionellsten Ort beginnt und endet. Der Schlüssel ist, ob der Weg logisch, vollständig und verteidigbar ist.

## Laufende Terminpläne

Sobald ein Terminplan in Bearbeitung ist, ändert sich die Form des kritischen Weges. Abgeschlossene Arbeit sollte die künftige Fertigstellung nicht mehr steuern. Der Weg sollte von der aktuellen Statusgrenze aus beginnen.

In einem aktualisierten Terminplan beginnt der kritische Weg oft mit einem derzeit laufenden Vorgang, einem nicht gestarteten Vorgang, der bereit ist zu beginnen, oder einem gültigen Meilenstein, der den Zugang zu künftiger Arbeit steuert. Er kann auch von einem Projektschnittstellen- oder Übergabemeilenstein beginnen, wenn dieses Ereignis die nächste kritische Arbeit tatsächlich steuert.

Hier ist der Stichtag (Data Date) von Bedeutung. Der Stichtag trennt die tatsächliche Leistung von der prognostizierten Arbeit. Ein kritischer Weg nach dem Stichtag sollte erklären, wie die verbleibende Arbeit zur Fertigstellung führt.

Wenn der Weg mit einem Vorgang beginnt, der keine steuernde Logik hat, einem unerklärten Stichtagsstart oder einem fragwürdigen Meilenstein, sollte der Prüfer dies untersuchen. Der Terminplan kann einen berechneten Weg zeigen, aber keinen glaubwürdigen.

## Vorsicht bei Meilensteinen

Meilensteine sind nützlich, weil sie wichtige Punkte markieren: Beginn der Ausführung, Bereichsübergabe, Entwurfsgenehmigung, mechanischer Abschluss, Systemübergabe, wesentliche Fertigstellung und Endfertigstellung.

Aber Meilensteine können auch eine kritische Wegprüfung irreführen.

Ein Meilenstein kann als kritisch erscheinen, weil er eine Einschränkung hat. Er kann als kritisch erscheinen, weil er keine Dauer hat und an einer Datumsgrenze liegt. Er kann als kritisch erscheinen, weil die Logik um ihn herum fehlt. Das bedeutet nicht automatisch, dass der Meilenstein wirklich Teil der steuernden Ausführungskette ist.

Seien Sie besonders vorsichtig, wenn der kritische Weg mit einem Meilenstein beginnt. Fragen Sie:

- Stellt dieser Meilenstein ein echtes steuerndes Ereignis dar?
- Welcher Vorgang oder welche externe Bedingung steuert den Meilenstein?
- Welche Arbeit wird durch den Meilenstein freigegeben?
- Ist der Meilenstein eingeschränkt statt logikgesteuert?
- Wäre der Weg immer noch kritisch, wenn die Meilensteinlogik korrigiert wäre?

Wenn der Meilenstein die Arbeit nicht steuert, sollte er nicht die Geschichte des kritischen Weges definieren dürfen.

## Retained Logic kann die Geschichte verändern

Retained Logic (beibehaltene Logik) ist eine Primavera P6-Einstellung für die Behandlung von außerplanmäßigem Fortschritt. Sie kann angemessen sein, aber sie kann auch den kritischen Weg in einer Weise beeinflussen, die Prüfer verstehen müssen.

Wenn Retained Logic verwendet wird, kann P6 die Vorgängerlogik beibehalten, auch wenn die Nachfolgerarbeit bereits außerplanmäßig begonnen hat. Dies kann dazu führen, dass verbleibende Arbeit auf eine Weise gehalten oder sequenziert wird, die den berechneten kritischen Weg ändert.

Das Problem ist nicht, dass Retained Logic immer falsch ist. Das Problem ist, dass der Planer verstehen muss, ob sie eine realistische Prognose erzeugt.

Wenn Retained Logic den kritischen Weg durch Beziehungen führt, die nicht mehr widerspiegeln, wie die Arbeit ausgeführt wird, sollte das Team den Status, die Logik und die Terminplanoptionen überprüfen. Der Weg sollte einen verteidigbaren verbleibenden Plan widerspiegeln, nicht nur eine mechanische Berechnung.

## Wie man den kritischen Weg prüft

Eine gute kritische Wegprüfung sollte P6-Ausgaben mit terminplanerischem Urteilsvermögen kombinieren.

Beginnen Sie mit der Erstellung des Longest-Path- oder Critical-Path-Berichts. Überprüfen Sie dann den Weg Vorgang für Vorgang. Betrachten Sie Vorgänger (Predecessors), Nachfolger (Successors), Beziehungstypen, Versatz (Lag), Einschränkungen, Kalender, Ist-Termine, verbleibende Dauer und Gesamtpuffer.

Fragen Sie, ob der Weg Sinn macht:

- Folgt der Weg einer glaubwürdigen Ausführungsabfolge?
- Beginnt er von einem gültigen aktuellen Treiber?
- Endet er am richtigen Fertigstellungs- oder Steuerungsmeilenstein?
- Zwingen Einschränkungen den Weg?
- Verbergen fehlende Beziehungen den echten Treiber?
- Beeinflusst Retained Logic den Weg irreführend?
- Erkennt das Projektteam dies als die steuernde Arbeit?

Wenn die Antwort nein ist, muss der Terminplan überprüft werden, bevor der kritische Weg zuversichtlich verwendet werden kann.

## Fazit

Der kritische Weg ist die Abfolge abhängiger Aufgaben, die das Projektfertigstellungsdatum definiert. Er zeigt die Mindestzeit, die zur Fertigstellung des Projekts benötigt wird, und identifiziert die Arbeit, die nicht ins Gleiten geraten darf, ohne den Abgabetermin zu beeinflussen.

Aber der kritische Weg ist nichts, das man blind akzeptieren sollte. P6 berechnet, was die Daten ihm zu berechnen sagen. Der Planer muss hinterfragen, ob das Ergebnis vernünftig, logisch und mit dem echten Ausführungsplan übereinstimmt.

In einem starken Terminplan erzählt der kritische Weg eine klare Geschichte. Er beginnt von einem gültigen aktuellen Treiber, folgt echten Abhängigkeiten, vermeidet irreführende Einschränkungen, behandelt Fortschritt korrekt und führt zum richtigen Fertigstellungsmeilenstein.

Wenn diese Geschichte Sinn macht, wird der kritische Weg zu einem der mächtigsten Instrumente in der Projektsteuerung. Wenn nicht, ist er eine Warnung, dass der Terminplan mehr Überprüfung benötigt, bevor der Prognose vertraut werden kann.
