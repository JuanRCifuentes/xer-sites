---
title: 'Wo die Kosten in P6 leben'
description: ''
pubDate: 'Jul 2 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-2.jpg
---

Kosten in Primavera P6 können an mehreren Orten leben. Das ist nützlich, kann aber auch verwirrend sein. Ein Zeitplan kann die budgetierten Kosten, die tatsächlichen Kosten, die verbleibenden Kosten, die Kosten bei Fertigstellung, die Ressourcenkosten, die Rollenkosten, die Ausgabenkosten, die Felder für den Ertragswert und die Basiskosten anzeigen. Diese Werte hängen zusammen, bedeuten aber nicht alle dasselbe.

Für Projektkontrollteams ist die Schlüsselfrage nicht nur „Wie hoch sind die Kosten?“ Die bessere Frage ist: Woher kommen diese Kosten, was stellen sie dar und wie sollten sie verwendet werden?

In diesem Blog werden die wichtigsten Kostenarten erläutert, die in P6 verfügbar sind, die Unterschiede zwischen ihnen und wann jede einzelne nützlich ist.

## Warum der Kostenstandort wichtig ist

P6 ist in erster Linie ein Planungstool, kann aber auch kostenintensive Zeitpläne, Ertragswert-, Cashflow- und Prognoseberichte unterstützen. Um dies richtig zu machen, müssen die Kosten im richtigen Teil des Zeitplanmodells platziert werden.

Wenn Arbeitskosten als Aufwand eingegeben werden, erzählen Ressourcenhistogramme möglicherweise nicht die richtige Aussage. Wenn tatsächliche Kosten manuell eingegeben werden, das Projekt jedoch davon ausgeht, dass sie aus Ist-Werten der Ressourcen stammen, können Berichte inkonsistent werden. Wenn die Basiskosten fehlen, verlieren die Berichte zu Terminabweichungen und Kostenabweichungen ihren Kontext.

Der Standort der Kosten ist wichtig, da die Quelle der Kosten Einfluss darauf hat, wie sie zusammengefasst, aktualisiert, prognostiziert und berichtet werden.

```mermaid
flowchart TD
    A["Kosten in P6"] --> B["Ressourcenzuweisungen"]
    A --> C["Rollenzuweisungen"]
    A --> D["Kosten"]
    A --> E["Grundkosten"]
    B --> F["Budgetierte, tatsächliche, verbleibende Kosten bei Fertigstellung"]
    C --> F
    D --> F
    E --> G["Varianz- und Leistungsvergleich"]
    F --> H["Cashflow, Ertragswert, Berichte und Prognosen"]
    G --> H
```

## Ressourcenkosten

Ressourcenkosten ergeben sich aus Ressourcen, die Aktivitäten zugeordnet sind. Eine Ressource kann Arbeitskraft, Ausrüstung oder eine andere Ressourcenkategorie darstellen. Für jede Ressource können Tarife, Einheiten und Kostenberechnungen vorhanden sein.

Wenn für eine Aktivität beispielsweise 80 Stunden lang ein Rohrmonteurteam zu einem definierten Stundensatz eingesetzt wird, kann P6 die Arbeitskosten anhand der zugewiesenen Einheiten und des Tarifs berechnen.

Ressourcenkosten sind nützlich, wenn das Projekt Zeitplanaktivitäten mit Arbeits-, Ausrüstungs-, Produktivitäts- und Ressourcenhistogrammen verknüpfen möchte.

Verwenden Sie Ressourcenkosten, wenn:

- Der Arbeits- oder Ausrüstungsbedarf ist von Bedeutung.
- Es werden Ressourcenhistogramme benötigt.
- Die Kosten sind an Stunden oder Einheiten gebunden.
- Der erzielte Wert oder Fortschritt ist ressourcenbasiert.
- Der Zeitplan dient der Ressourcenplanung.

Das Hauptrisiko liegt in der Wartung. Ressourcenbelastete Zeitpläne erfordern Disziplin. Wenn Einheiten, Tarife, Kalender oder Ist-Werte nicht gepflegt werden, sind die Kostenberichte nicht zuverlässig.

## Rollenkosten

Rollen sind generische Jobfunktionen, wie z. B. Ingenieur, Elektriker, Planer, Prüfer oder Kranführer. In P6 können Rollen Aktivitäten zugewiesen werden, bevor benannte Ressourcen bekannt sind.

Rollenkosten können eine frühzeitige Planung unterstützen, wenn das Team die Art der benötigten Ressource kennt, aber nicht die spezifische Person oder Crew.

Während der frühen technischen Planung kann eine Aktivität beispielsweise 120 Stunden „Senior Engineer“-Zeit erfordern. Die benannte Person ist möglicherweise noch nicht zugewiesen, die Rolle kann jedoch eine Planungsrate und einen Kostenvoranschlag liefern.

Rollenkosten verwenden, wenn:

- Der Zeitplan ist noch in Planung.
- Die genannten Ressourcen sind noch nicht bestätigt.
- Das Projekt benötigt eine umfassende Ressourcen- oder Kostenschätzung.
- Rollen werden später durch tatsächliche Ressourcen ersetzt.

Rollenkosten sind für die Planung im Frühstadium nützlich, sollten jedoch im Laufe der Projektreife überprüft werden. Wenn Rollen bestehen bleiben, nachdem die tatsächlichen Ressourcen bekannt sind, wird der Zeitplan möglicherweise zu allgemein für eine detaillierte Steuerung.

## Spesenkosten

Ausgaben sind nicht ressourcenbezogene Kosten, die direkt Aktivitäten zugeordnet werden. Sie sind nützlich für Kosten, die nicht optimal durch Arbeits- oder Ausrüstungsressourcen repräsentiert werden.

Beispiele hierfür sind:

- Genehmigungen.
- Reisen.
- Lieferantenpauschalen.
- Pakete für Subunternehmer.
- Materialien, die als feste Menge gekauft werden.
- Prüfungsgebühren.
- Mobilisierungsgebühren.

Je nachdem, wie das Projekt sie verfolgt, können die Ausgaben budgetiert, tatsächlich, verbleibend oder bei Abschluss sein.

Verwenden Sie Ausgaben, wenn:

- Die Kosten hängen nicht von den Ressourcenstunden ab.
- Bei den Kosten handelt es sich um einen Fest- oder Pauschalbetrag.
- Für die Aktivität sind direkte, nicht ressourcenbezogene Kosten erforderlich.
- Das Projekt benötigt einen Cashflow für Nichtarbeitsposten.

Das Risiko besteht darin, dass Ausgaben zur Mülldeponie werden können. Wenn alle Kosten als Ausgaben erfasst werden, kann es sein, dass der Zeitplan nicht mehr in der Lage ist, Arbeit, Ausrüstung und Produktivität separat zu erklären.

## Budgetierte Kosten

Die budgetierten Kosten sind die geplanten Kosten, die der Aktivität zugeordnet sind. Es kann aus Ressourcenzuweisungen, Rollenzuweisungen, Ausgaben oder einer Kombination davon stammen.

Die budgetierten Kosten sind wichtig, da sie den Kostenplan vor der Ausführung darstellen. Es unterstützt Cashflow, Basiskosten, Earned-Value-Setup und Projektkontrollberichte.

Verwenden Sie „Budgetierte Kosten“, um die Frage zu beantworten: Wie hoch waren die geplanten Kosten für diese Aktivität?

Wenn die budgetierten Kosten fehlen oder inkonsistent sind, berechnet der Zeitplan möglicherweise weiterhin Termine, unterstützt jedoch keine aussagekräftigen kostenbelasteten Berichte.

## Tatsächliche Kosten

Die tatsächlichen Kosten stellen die bereits angefallenen Kosten dar. Abhängig von der Projektkonfiguration können die tatsächlichen Kosten anhand tatsächlicher Ressourceneinheiten und -sätze berechnet, manuell eingegeben, aus Stundenzetteln importiert oder aus einem externen Kostensystem geladen werden.

Die tatsächlichen Kosten sind wichtig für die Fortschrittsberichterstattung und den Ertragswert. Es zeigt an, was bisher ausgegeben oder erfasst wurde.

Verwenden Sie die tatsächlichen Kosten, um zu beantworten: Welche Kosten sind bereits angefallen oder erfasst?

Das Risiko besteht darin, Quellen zu vermischen. Wenn einige tatsächliche Kosten aus der Buchhaltung importiert werden und andere manuell in P6 eingegeben werden, benötigt das Team eine klare Regel, um Doppelarbeit oder Lücken zu vermeiden.

## Verbleibende Kosten

Die verbleibenden Kosten sind die prognostizierten Kosten, die noch zum Abschluss der Aktivität erforderlich sind. Es ist an verbleibende Einheiten, Ressourcensätze, verbleibende Ausgaben und Aktualisierungsannahmen gebunden.

Die Restkosten sind eines der wichtigsten Prognosefelder. Es teilt dem Projektteam mit, wie viel Kosten ab dem aktuellen Datendatum verbleiben.

Verwenden Sie „Verbleibende Kosten“, um die Frage zu beantworten: Wie hoch sind die noch zu erwartenden Kosten?

Wenn die verbleibende Dauer aktualisiert wird, die verbleibenden Kosten jedoch nicht, kann die Prognose inkonsistent werden. Das Gleiche gilt, wenn Ressourceneinheiten oder verbleibende Ausgabenwerte nicht gepflegt werden.

## Bei Fertigstellungskosten

Bei den Fertigstellungskosten handelt es sich um die erwarteten Gesamtkosten der Aktivität nach Kombination der tatsächlichen und verbleibenden Kosten.

In einfachen Worten:

Tatsächliche Kosten + Restkosten = Kosten bei Fertigstellung

Mithilfe der Kosten bei Fertigstellung können Sie erkennen, ob eine Aktivität voraussichtlich über, unter oder im Rahmen des Budgets abgeschlossen wird.

Verwenden Sie „Kosten bei Fertigstellung“, um die Frage zu beantworten: Wie hoch sind die zuletzt erwarteten Gesamtkosten?

## Grundkosten

Die Basiskosten stammen aus einem zugewiesenen Basisplan. Es wird verwendet, um aktuelle Kostenwerte mit dem genehmigten Plan zu vergleichen.

Die Basiskosten sind wichtig für die Abweichungsberichterstattung. Ohne eine Basislinie kennt das Projekt möglicherweise die aktuellen prognostizierten Kosten, weiß jedoch nicht, ob diese Prognose besser oder schlechter als der genehmigte Plan ist.

Verwenden Sie die Basiskosten, um die Frage zu beantworten: Wie sind die aktuellen Kosten im Vergleich zum genehmigten Kostenplan?

Die Basiskosten sind besonders wichtig, wenn P6 für den Ertragswert oder die formelle PMO-Berichterstattung verwendet wird.

## Felder für Ertragswertkosten

P6 kann je nach Projekteinrichtung Ertragswertfelder wie Planwert, Ertragswert, Ist-Kosten, Kostenabweichung und Zeitplanabweichung unterstützen.

Der Arbeitswert nutzt kostenbelastete Zeitplaninformationen, um geplante Arbeit, verdiente Arbeit und tatsächliche Kosten zu vergleichen.

Diese Felder sind nützlich, wenn das Projekt über einen formellen Earned-Value-Prozess verfügt. Sie erfordern konsistente Baselines, Fortschrittsregeln, Methoden für den Fertigstellungsgrad und Kostenbelastung.

Verwenden Sie Ertragswert-Kostenfelder, wenn:

- Das Projekt erfordert eine EV-Berichterstattung.
- Fortschrittsregeln werden definiert.
- Die Grundkosten werden genehmigt.
- Die tatsächliche Kostenquelle wird kontrolliert.
- Der Aktivitätsfortschritt wird konstant beibehalten.

Ohne diese Kontrollen können die Ergebnisse des Ertragswerts zwar präzise aussehen, aber unzuverlässig sein.

## Welche Kostenart sollten Sie verwenden?

Verwenden Sie Ressourcenkosten für Arbeitskräfte und Ausrüstung, die Ressourcenplanung, Produktivität und Histogramme unterstützen sollen.

Nutzen Sie Rollenkosten für eine frühzeitige Planung, wenn benannte Ressourcen noch nicht bekannt sind.

Verwenden Sie Spesenkosten für direkte Nichtressourcenkosten, Pauschalbeträge, Lieferantenartikel, Genehmigungen, Reisen oder Unterauftragspakete.

Verwenden Sie die Felder „Budgetierte Kosten“, „Istkosten“, „Restkosten“ und „Bei Fertigstellung“, um den zeitlichen Kostenlebenszyklus zu verstehen.

Vergleichen Sie die Basiskosten mit dem genehmigten Plan.

Verwenden Sie Ertragswertfelder, wenn das Projekt über die erforderliche Governance verfügt, um EV-Berichte zu unterstützen.

## Häufige Probleme

Ein häufiges Problem ist die Kostendoppelung. Die gleichen Subunternehmerkosten können als Ressourcenkosten und erneut als Aufwand eingegeben werden.

Ein weiteres Problem sind fehlende tatsächliche Kosten. Der Zeitplan enthält möglicherweise ein Budget und verbleibende Kosten, die tatsächlichen Kosten können jedoch in einem separaten Buchhaltungssystem gespeichert sein und niemals P6 erreichen.

Ein drittes Problem besteht darin, die Ausgaben für alles zu verwenden. Dies kann zwar zu Gesamtkosten, aber zu einer schwachen Ressourcentransparenz führen.

Ein weiteres Problem ist der inkonsistente Fortschritt. Wenn der Fertigstellungsgrad, die verbleibende Dauer und die verbleibenden Kosten nicht übereinstimmen, werden die Kosten bei Fertigstellung unzuverlässig.

## Gute Praxis

Definieren Sie die Kostenstrategie, bevor Sie den Zeitplan laden. Entscheiden Sie, wo Arbeitskräfte, Ausrüstung, Materialien, Subunternehmer und indirekte Kosten untergebracht werden sollen.

Verwenden Sie konsistente Kostenkonten, Aktivitätscodes, Ressourcen, Rollen und Ausgabenkategorien.

Dokumentieren Sie, ob tatsächliche Kosten in P6 eingegeben, importiert oder aus einem anderen System gemeldet werden.

Überprüfen Sie die Kostenfelder während jedes Aktualisierungszyklus. Budgetierte, tatsächliche, verbleibende und bei Fertigstellung anfallende Kosten sollten eine zusammenhängende Geschichte erzählen.

## Abschluss

Die Kosten in P6 können in Ressourcen-, Rollen-, Ausgaben-, Baseline- und Earned-Value-Feldern enthalten sein. Jeder Ort hat einen anderen Zweck.

Ressourcenkosten verbinden Kosten mit Arbeit und Ausrüstung. Rollenkosten unterstützen eine frühzeitige Planung. Spesenkosten erfassen direkte Posten, die keine Ressourcen sind. Budgetierte, tatsächliche, verbleibende und Fertigstellungskosten zeigen den Kostenlebenszyklus. Baseline- und Earned-Value-Felder unterstützen Vergleiche und Leistungsberichte.

Ein stark kostenintensiver Zeitplan entsteht nicht dadurch, dass man die Zahlen überall hinbringt, wo sie hinpassen. Der Aufbau erfolgt durch die Entscheidung, wo die einzelnen Kostenarten hingehören, und durch die Beibehaltung dieser Struktur in jedem Aktualisierungszyklus.
