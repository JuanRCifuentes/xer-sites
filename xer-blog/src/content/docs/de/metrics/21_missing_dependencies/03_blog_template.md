---
title: "Fehlende Abhängigkeiten in Primavera P6"
seoTitle: "Fehlende Abhängigkeiten in Primavera P6"
description: "Erklärt, warum Fehlende Abhängigkeiten in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Fehlende Abhängigkeiten in Primavera P6"
  - "Primavera P6 Fehlende Abhängigkeiten in Primavera P6"
  - "Terminplanqualität"
  - "Primavera P6"
  - "Projektcontrolling"
  - "CPM-Logik"
  - "Terminplanprüfung"
slug: "de/blog/missing-dependencies-primavera-p6"
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
primarySearchIntent: "Erklärt, warum Fehlende Abhängigkeiten in Primavera P6 CPM-Logik, Puffer und die Belastbarkeit des Terminplans in Primavera P6 beeinflusst."
relatedMetrics:
  - "09_metrics_de/21_missing_dependencies/02_guide_template.md"
relatedBlogs:
  - "09b_blogs_de/01_WHAT A SCHEDULE IS/01_blog.md"
  - "09b_blogs_de/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/21_missing_dependencies/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Abhängigkeiten sind das Rückgrat eines CPM-Terminplans. Sie erklären, wie die Arbeit von einer Aktivität zur nächsten übergeht, was passieren muss, bevor mit der Arbeit begonnen werden kann, und was von der Fertigstellung jeder Aktivität abhängt. Wenn Abhängigkeiten fehlen, kann der Terminplan zwar trotzdem berechnen, das Ergebnis ist jedoch schwerer vertrauenswürdig.

Diese Metrik identifiziert Aktivitäten mit fehlender Abhängigkeitslogik in Primavera P6. Es umfasst Aktivitäten ohne Vorgänger, Aktivitäten ohne Nachfolger und isolierte Aktivitäten ohne Vorgänger. Diese werden oft als offene Starts und offene Enden bezeichnet. Einige mögen gültig sein, die meisten sollten jedoch überprüft werden.

Eine Aktivität ohne Vorgänger kann ohne logische Anforderungen früherer Arbeiten beginnen. Dies kann für einen genehmigten Projektstartmeilenstein oder einen extern genehmigten Start akzeptabel sein. Bei normaler Projektarbeit ist es meist ein Warnzeichen. Bau-, Ingenieur-, Beschaffungs-, Test- und Übergabeaktivitäten hängen normalerweise von etwas ab: Zugang, Entwurfsfreigabe, Materiallieferung, vorherige Installation, Inspektion, Genehmigungsgenehmigung oder einer anderen Projektbedingung.

Eine Aktivität ohne Nachfolger kann beendet werden, ohne dass das Ergebnis an eine andere Aktivität übergeben wird. Das kann für einen endgültigen Projektabschlussmeilenstein akzeptabel sein. Bei den meisten Aktivitäten ist die Frage jedoch einfach: Was ermöglicht diese Arbeit? Wenn nichts davon abhängt, fehlt der Aktivität möglicherweise eine Folgelogik, sie ist veraltet oder sie ist möglicherweise nicht ordnungsgemäß in den Terminplan integriert.

Das eindeutigste Problem sind isolierte Aktivitäten. Wenn eine Aktivität keinen Vorgänger und keinen Nachfolger hat, ist sie nicht wirklich Teil des CPM-Netzwerks. Es kann in der Akte liegen, Datumsangaben enthalten und in Berichten erscheinen, aber es trägt nicht dazu bei, dass der Terminplan den Arbeitsablauf erklärt.

Fehlende Abhängigkeiten wirken sich mehr aus als nur auf die Logikqualitätswerte. Sie können Starttermine, Endtermine, Puffer-Werte und den kritischen Pfad verzerren. Ein offener Start kann zum Datenstichtag abdriften oder zu früh beginnen, weil ihn nichts mehr aufhalten kann. Bei einem offenen Abschluss kann es zu einem Puffer kommen, der nicht die Auswirkung der Arbeit auf den Rest des Projekts widerspiegelt. Während der PMO- oder Kundenüberprüfung erschweren diese Lücken die Erklärung, warum Daten glaubwürdig sind.

Die praktische Überprüfung beginnt mit einem P6-Layout, das Aktivitäts-ID, Aktivitätsname, WBS, Aktivitätstyp, Aktivitätsstatus, Start, Ende, Gesamtpuffer, Kalender, Einschränkungen, Vorgänger und Nachfolger umfasst. Filtern Sie nach Aktivitäten ohne Vorgänger, ohne Nachfolger und auch nicht. Trennen Sie dann gültige Ausnahmen von Elementen, die einer Korrektur bedürfen.

Gültige Ausnahmen sollten begrenzt werden. Der genehmigte Projektstart benötigt möglicherweise keinen Vorgänger. Der endgültige Abschlussmeilenstein benötigt möglicherweise keinen Nachfolger. Einige Meilensteine ​​der externen Schnittstelle stellen möglicherweise Arbeiten dar, die außerhalb des Terminplans kontrolliert werden. Diese Ausnahmen sollten dokumentiert werden, damit Prüfer nicht raten müssen.

Fügen Sie für offene Starts eine Vorgängerlogik hinzu, die den tatsächlichen Zustand widerspiegelt, der erforderlich ist, bevor mit der Arbeit begonnen werden kann. Dabei kann es sich um eine vorherige Baumaßnahme, Entwurfsgenehmigung, Materiallieferung, Zugangsfreigabe, Inspektion, Genehmigung oder Schnittstellenübergabe handeln. Die Beziehung sollte die tatsächliche Abhängigkeit beschreiben und nicht nur die Aktivität verbinden, um eine Prüfung zu bestehen.

Fügen Sie für offene Enden eine Nachfolgelogik hinzu, die das Folgende darstellt. Der Nachfolger kann eine andere Arbeitsaktivität, ein Test, eine Inbetriebnahme, ein Umsatz, ein Abschluss, ein Meilenstein oder ein nachgelagertes Paket sein. Es geht darum, zu zeigen, wie sich das Ergebnis der Aktivität auf den Rest des Plans auswirkt.

Bestätigen Sie bei isolierten Aktivitäten zunächst, ob die Aktivität noch benötigt wird. Wenn es sich um einen gültigen Bereich handelt, schließen Sie ihn ordnungsgemäß an. Wenn es veraltet, dupliziert oder von einem alten Update zurückgeblieben ist, entfernen oder schließen Sie es gemäß dem Projektkontrollverfahren.

Der Zielschwellenwert sollte bei null ungelösten Aktivitäten liegen. Das bedeutet nicht, dass jeder fehlende Vorgänger oder Nachfolger automatisch falsch ist. Das bedeutet, dass jede Ausnahme beabsichtigt und dokumentiert sein muss. Unerklärlicherweise fehlende Abhängigkeiten schwächen das Fahrplannetzwerk.

Durch die Bereinigung dieser Metrik wird der Terminplan sofort verbessert. Dadurch wird der kritische Pfad zuverlässiger, Puffer einfacher zu interpretieren und Look-Ahead-Pläne nützlicher. Es hilft dem Projektteam auch zu erkennen, ob der Terminplan ein echtes Modell der Arbeit oder nur eine Liste von Aktivitäten mit Terminen ist.
## Verwandte Inhalte
- [Fehlende Abhängigkeiten in Primavera P6 - Verbesserungsleitfaden](02_guide_template.md)
- [Was für ein Terminplan ist](../../09b_blogs_de/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robuste Logik](../../09b_blogs_de/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
