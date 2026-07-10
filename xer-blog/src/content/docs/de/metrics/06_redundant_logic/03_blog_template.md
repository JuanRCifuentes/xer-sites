---
title: "Redundante Logik in Primavera P6-Terminplänen"
seo_title: "Redundante Logik in Primavera P6-Terminplänen"
meta_description: "Erklärt, warum Redundante Logik in Primavera P6-Terminplänen CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Redundante Logik in Primavera P6-Terminplänen"
  - "Primavera P6 Redundante Logik in Primavera P6-Terminplänen"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de-blog-article-redundant-logic-primavera-p6"
language: "de"
content_type: "blog"
version: "1.0"
topic: "Terminplanqualität"
audience:
  - "Terminplaner"
  - "Scheduler"
  - "Projektcontrolling-Teams"
primary_search_intent: "Erklärt, warum Redundante Logik in Primavera P6-Terminplänen CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
related_metrics:
  - "09_metrics_de/06_redundant_logic/01_overview_template.md"
  - "09_metrics_de/06_redundant_logic/02_guide_template.md"
related_blogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/06_redundant_logic/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Redundante Logik in Primavera P6-Terminplänen

## Titel

Redundante Logik in Primavera P6-Terminplänen

## Geschätzte Lese-/Sprechzeit

5-10 Minuten

## Ziellänge

750-1.500 Wörter

## Publikum

Dieser Blog richtet sich an Planer, Planungsingenieure, Projektsteuerungsingenieure, Projektmanager und PMO-Prüfer, die die Terminplanlogik von Primavera P6 bewerten.

## Öffnungshaken

Mehr Logik bedeutet nicht immer bessere Logik. Ein Terminplan kann gut verbunden aussehen, obwohl er doppelte Beziehungen, wiederholte Vorgängerpfade und Abhängigkeiten enthält, die keine wirkliche Kontrolle bieten.

## Einführung

Logik ist das Rückgrat eines CPM-Plans. Es zeigt, wie die Arbeit von einer Aktivität zur nächsten verläuft, und ermöglicht Primavera P6 die Berechnung von Terminen, Pufferzeiten und dem kritischen oder längsten Pfad.

Redundante Logik tritt auf, wenn eine Beziehung eine Abhängigkeit wiederholt, die bereits an einer anderen Stelle im Netzwerk vorhanden ist. Dabei kann es sich um ein exaktes Duplikat, eine zweite Beziehung zwischen denselben beiden Aktivitäten oder einen direkten Link handeln, der einen Upstream-Pfad wiederholt.

Diese Metrik identifiziert redundante Logikmuster, die überprüft und entfernt werden sollten, sofern sie nicht eindeutig gerechtfertigt sind. Das Ziel sind null ungelöste Beziehungen.

## Was dieser Parameter bedeutet

Dieser Parameter prüft, ob der Terminplan Beziehungen enthält, die keine sinnvolle Reihenfolge hinzufügen. Häufige Beispiele sind, dass derselbe Vorgänger mehr als einmal mit demselben Nachfolger verbunden ist, wie z. B. FS plus SS oder FS plus FF.

Die Metrik sucht auch nach geerbter Vorgängerlogik. Wenn beispielsweise Aktivität A Aktivität B steuert und Aktivität B Aktivität C steuert, ist eine direkte Beziehung von Aktivität A zu Aktivität C möglicherweise unnötig, es sei denn, sie stellt eine separate reale Abhängigkeit dar.

SS plus FF zwischen denselben beiden Aktivitäten können akzeptabel sein, wenn Überschneidungen beabsichtigt sind. Die SS-Beziehung kann steuern, wann der Nachfolger beginnt, während die FF-Beziehung steuert, wann er enden kann. Entscheidend ist, ob beide Beziehungen reale Verhältnisse darstellen.

## Warum dieses Thema wichtig ist

Redundante Logik erschwert das Verständnis eines Terminplans. Dies führt zu Störungen im Netzwerk und kann es schwierig machen, zu erkennen, welche Beziehung tatsächlich die Daten kontrolliert.

Es kann auch den Puffer verzerren, falsche Fahrpfade erzeugen und die Verzögerungsanalyse erschweren. Bei PMO- oder Terminplanqualitätsüberprüfungen wirft redundante Logik die Frage auf, ob das Netzwerk absichtlich aufgebaut oder durch kopierte und angesammelte Links zusammengestellt wurde.

## Häufige Ursachen für schlechte Ergebnisse

- Kopierte Terminplanabschnitte, die nicht bereinigt wurden
- Mehrere Beziehungstypen zwischen denselben beiden Aktivitäten hinzugefügt
- FS plus SS oder FS plus FF werden zum Erzwingen von Datumsangaben verwendet
- Direkte Links hinzugefügt, obwohl die Abhängigkeit bereits über eine Kette besteht
- Bei Aktualisierungen hinzugefügte Beziehungen ohne Überprüfung der vorhandenen Logik
- Unnötige Abhängigkeiten sorgen dafür, dass der Terminplan zusammenhängender erscheint

## So verbessern Sie das Ergebnis

### 1. Finden Sie doppelte Beziehungsmuster

Beginnen Sie damit, Aktivitäten zu identifizieren, die durch mehr als eine Beziehung verbunden sind. Achten Sie besonders auf die Kombinationen FS plus SS und FS plus FF. In vielen Fällen erledigt eine Beziehung die eigentliche Arbeit und die andere ist überflüssig.

Sehen Sie sich die SS- und FF-Kombinationen genauer an. Sie können gültig sein, wenn für überlappende Arbeiten sowohl Start- als auch Zielkontrollen erforderlich sind.

### 2. Überprüfen Sie die geerbte Vorgängerlogik

Suchen Sie nach Aktivitäten, die denselben Vorgänger und denselben Beziehungstyp wie ihr eigener Vorgänger haben. Wenn dieselbe Abhängigkeit bereits über den Pfad besteht, ist die direkte Beziehung möglicherweise nicht erforderlich.

Diese Überprüfung kann auch über das Netzwerk um mehrere Schritte nach hinten erweitert werden. Die Frage ist einfach: Fügt diese direkte Beziehung eine echte Abhängigkeit hinzu oder wiederholt sie einen bereits vorhandenen Pfad?

### 3. Entfernen Sie unnötige Abhängigkeiten

Entfernen Sie Beziehungen, die keinen Zugriff, keine Genehmigung, Übergabe, Baureihenfolge, Beschaffungsreihenfolge, Risikokontrolle oder Vertragslogik darstellen.

Nachdem Sie eine Beziehung entfernt haben, berechnen Sie den Terminplan neu und überprüfen Sie den Puffer, die steuernde Logik, den längsten Pfad und die Meilensteintermine. Wenn sich ein Datum unerwartet ändert, prüfen Sie, ob die entfernte Beziehung tatsächlich gültig war oder ob eine klarere Beziehung erforderlich ist.

## Beispielszenario

In einem Terminplan ist Aktivität A mit Aktivität B über eine FS-Beziehung und auch über eine SS-Beziehung verknüpft. Der Scheduler hat den SS-Link während eines Updates hinzugefügt, um B zu zwingen, früher zu starten, aber der FS-Link steuert immer noch die tatsächliche Übergabe.

Die Überprüfung zeigt, dass die SS-Beziehung keine echte Startbedingung darstellt. Es sorgt nur für Verwirrung. Der Scheduler entfernt die SS-Verbindung und behält die FS-Beziehung bei.

In einem anderen Bereich steuert Aktivität A Aktivität B und Aktivität B steuert Aktivität C. Aktivität A ist auch direkt mit Aktivität C über denselben Beziehungstyp verknüpft. Das Team bestätigt, dass es keine gesonderte Übergabe- oder Zugangsbedingung gibt. Die direkte A-zu-C-Verbindung wird entfernt und das Netzwerk bleibt logisch korrekt.

## Empfohlener Verbesserungsplan

- Tag 1: Führen Sie die Metrik aus und gruppieren Sie die Ergebnisse nach doppelten Paaren, geerbter Logik und unnötigen Abhängigkeiten.
- Tage 2–3: Überprüfen Sie zunächst kritische und nahezu kritische Beziehungen.
- Tage 4–5: Entfernen Sie doppelte Logik und berechnen Sie den Terminplan neu.
- Tag 6: Bestätigen Sie Ausnahmen und überprüfen Sie die Terminplanbewegung.
- Tag 7: Bewerten Sie die Metrik neu und dokumentieren Sie das Ergebnis.

## Zu vermeidende Fehler

Vermeiden Sie es, Beziehungen nur deshalb zu entfernen, weil sie dupliziert aussehen. Bestätigen Sie zunächst den tatsächlichen Arbeitsablauf.

Vermeiden Sie doppelte Links, da diese harmlos erscheinen. Redundante Logik kann die Puffer- und Fahrpfadanalyse immer noch verzerren.

Vermeiden Sie es, SS plus FF automatisch als falsch zu behandeln. Es kann gültig sein, wenn sowohl Start- als auch Zielkontrollen erforderlich sind.

## Wichtige Erkenntnisse

- Redundante Logik wiederholt eine Abhängigkeit, die bereits an anderer Stelle dargestellt ist.
- FS plus SS oder FS plus FF zwischen denselben Aktivitäten müssen normalerweise überprüft werden.
- SS plus FF können gültig sein, wenn sowohl die Start- als auch die Endkontrolle der Überlappung real sind.
- Durch die geerbte Vorgängerlogik können unnötige direkte Verknüpfungen entstehen.
- Das Ziel sind keine ungelösten redundanten Beziehungen.

## Abschluss

Redundante Logik verbessert die Terminplanqualität nicht. Dadurch ist das Netzwerk schwerer zu lesen, zu aktualisieren und zu verteidigen.

Die Überprüfung dieser Metrik hilft Planern, das CPM-Netzwerk sauber und zielgerichtet zu halten. Die beste Terminplanlogik ist nicht das komplizierteste Netzwerk; Es ist das klarste Netzwerk, das die Arbeit genau darstellt.

## Aufruf zum Handeln

Überprüfen Sie die redundante Logik in Ihrem nächsten Primavera P6-Terminplan-Update. Fragen Sie für jede gekennzeichnete Beziehung, ob sie eine echte Abhängigkeit hinzufügt oder nur die bereits im Netzwerk vorhandene Logik wiederholt. Entfernen Sie Unnötiges und dokumentieren Sie, was absichtlich beibehalten wird.
## Verwandte Inhalte
- [Redundante Logik in Primavera P6-Terminplänen - Überblick](01_overview_template.md)
- [Redundante Logik in Primavera P6-Terminplänen - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
