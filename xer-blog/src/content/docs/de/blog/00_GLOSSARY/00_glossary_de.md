---
title: "Glossar zur Planung und Projektsteuerung für Primavera P6"
seo_title: "Glossar zur Planung und Projektsteuerung für Primavera P6"
meta_description: "Ein praktisches Glossar mit Begriffen aus Primavera P6, CPM-Planung, Projektplanung und Projektsteuerung für Planer, Terminplaner, Projektmanager und PMO-Teams."
description: "Ein praktisches Glossar mit Begriffen aus Primavera P6, CPM-Planung, Projektplanung und Projektsteuerung für Planer, Terminplaner, Projektmanager und PMO-Teams."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Primavera P6-Glossar"
  - "Projektsteuerungs-Glossar"
  - "Planungs- und Terminbedingungen"
  - "CPM-Planungsglossar"
  - "Primavera P6-Begriffe"
  - "Qualitätsbedingungen planen"
  - "Überprüfung des PMO-Terminplans"
  - "Glossar zur Methode des kritischen Pfades"
slug: "de/blog/primavera-p6-glossary"
language: "de"
content_type: "blog"
draft: false
version: "1.0"
topic: "Primavera P6 und Projektsteuerung"
audience:
  - "Planungsingenieure"
  - "Projektsteuerungsingenieure"
  - "Planer"
  - "Projektmanager"
  - "PMO-Teams"
primary_search_intent: "Verstehen Sie die allgemeine Terminologie für Primavera P6, CPM-Planung, Planung und Projektsteuerung."
related_metrics:
  - "09_metrics_de"
related_blogs:
  - "09b_blogs_de"
translation_of: "01b_blogs_en/00_GLOSSARY/00_glossary_en.md"
canonical_url: ""
last_reviewed: "2026-07-07"
pubDate: "2026-07-07"
---
# Planungs- und Projektkontroll-Glossar für Primavera P6

Dieses Glossar definiert allgemeine Planungs-, Terminplanungs- und Projektsteuerungsbegriffe, die in der Terminplanungsentwicklung, Terminqualitätsbewertung, PMO-Überprüfungen und Projektberichterstattung von Primavera P6 verwendet werden. Die Beschreibungen richten sich an Leser mit gemischter Erfahrung, vom Nachwuchsplaner bis zum erfahrenen Projektsteuerungsexperten.

## A

### (Actual Cost) Ist-Kosten

Ist-Kosten sind die tatsächlich angefallenen Kosten für abgeschlossene Arbeiten während eines Berichtszeitraums oder bis heute. In der Projektsteuerung werden sie mit dem Planwert und dem Earned Value verglichen, um die Kostenleistung zu verstehen. In Primavera P6 können die Ist-Kosten je nach Projekteinrichtung manuell eingegeben, aus Ressourcen berechnet oder aus einem anderen Kostensystem importiert werden.

### (Actual Date) Ist-Termin

Ein Ist-Termin ist ein aufgezeichnetes Datum, das angibt, wann die Arbeit tatsächlich begonnen oder beendet wurde. In Primavera P6 sollten die Ist-Start- und Ist-Endtermine den verifizierten Feldfortschritt und nicht die prognostizierte Absicht widerspiegeln. Falsche Ist-Termine können die Berichterstattung über Datenstichtag, verbleibende Dauer, Puffer, Earned Value und Terminplanleistung verzerren.

### (Actual Finish) Ist-Ende

Ist-Ende ist das Datum, an dem eine Aktivität abgeschlossen wurde. Sobald eine Aktivität tatsächlich abgeschlossen ist, gilt sie normalerweise als abgeschlossen und sollte keine verbleibende Dauer haben. Die Eingabe eines Ist-Endes nach dem Datenstichtag stellt ein Problem mit der Qualität des Terminplans dar, da die tatsächliche Leistung nicht in der Zukunft aufgezeichnet werden sollte.

### (Actual Start) Ist-Start

Ist-Start ist das Datum, an dem die Arbeit an einer Aktivität tatsächlich begonnen hat. In Primavera P6 kann eine Aktivität mit einem tatsächlichen Start, aber ohne Überprüfung des Fortschritts oder der verbleibenden Dauer zu einem irreführenden Status führen. Tatsächliche Starts sollten während jedes Aktualisierungszyklus validiert werden.

### (Activity) Aktivität

Eine Aktivität ist ein eigenständiger Teil der Arbeit im Terminplan. In Primavera P6 enthalten Aktivitäten Daten, Dauer, Beziehungen, Kalender, Ressourcen, Kosten, Codes und Status. Aktivitäten sind die Grundbausteine, die zur Berechnung des CPM-Terminplans verwendet werden.

### (Activity Calendar) Aktivitätskalender

Ein Aktivitätskalender definiert die arbeits- und arbeitsfreie Zeit, die zum Planen einer Aktivität verwendet wird. Kalender wirken sich auf Starttermine, Endtermine, Dauern, Puffer und Beziehungsverhalten aus. Bei P6-Terminüberprüfungen werden ungewöhnliche Kalenderzuweisungen überprüft, da sie zu unerwarteten Terminverschiebungen führen können.

### (Activity Code) Aktivitätscode

Ein Aktivitätscode ist ein Klassifizierungsfeld, das zum Gruppieren, Filtern, Sortieren und Berichten von Aktivitäten verwendet wird. Zu den gängigen Aktivitätscodes gehören Bereich, Phase, Disziplin, Auftragnehmer, Arbeitspaket, Verantwortung und System. Eine gute Aktivitätskodierung verbessert die Terminplananalyse, das Reporting und die PMO-Überwachung.

### (Activity ID) Aktivitäts-ID

Die Aktivitäts-ID ist die eindeutige Kennung, die einer Aktivität in Primavera P6 zugewiesen wird. Eine klare Aktivitäts-ID-Struktur hilft Benutzern, Arbeit konsistent zu lokalisieren, zu sortieren und zu melden. Eine schlechte ID-Struktur wirkt sich normalerweise nicht auf die CPM-Berechnung aus, kann jedoch die Benutzerfreundlichkeit und Überprüfbarkeit des Terminplans beeinträchtigen.

### (Activity Name) Aktivitätsname

Aktivitätsname ist der beschreibende Titel der geplanten Arbeit. Ein guter Aktivitätsname sollte spezifisch genug sein, um den Arbeitsumfang zu erklären, ohne dass der Leser externe Dokumente öffnen muss. Schwache Aktivitätsnamen erschweren die Überprüfung des Terminplans und die Koordinierung vor Ort.

### (Activity Status) Aktivitätsstatus

Der Aktivitätsstatus gibt an, ob eine Aktivität nicht gestartet, in Bearbeitung oder abgeschlossen ist. In P6 beeinflusst der Status das Verhalten von Terminen, verbleibender Dauer, Ist-Daten und Terminplanberechnungen. Der Status sollte mit den Ist-Terminen, dem Fertigstellungsgrad und der verbleibenden Dauer übereinstimmen.

### (Ahead of Schedule) Vor dem Terminplan

Dem Terminplan voraus bedeutet, dass die Arbeiten früher als im genehmigten Plan oder im Basisplan voranschreiten. Die Messung sollte mithilfe eines zuverlässigen Basisplanvergleichs, von Earned Value, einer Meilensteinanalyse oder einer Überprüfung des kritischen Pfads erfolgen und nicht nur durch einen visuellen Datumsvergleich.

### (Approved Baseline) Genehmigte Basisplan

Ein genehmigter Basisplan ist die offiziell akzeptierte Version des Terminplans, der zur Leistungsmessung und Änderungskontrolle verwendet wird. Es stellt den vereinbarten Plan dar, mit dem aktuelle Fortschritte und prognostizierte Änderungen verglichen werden.

### (As-Built Schedule) As-Built-Terminplan

Ein Bestandsplan stellt dar, wie die Arbeiten tatsächlich durchgeführt wurden. Es wird häufig für gewonnene Erkenntnisse, Verzögerungsanalysen, Unterstützung von Nachträgen und Projektabschlüsse verwendet. Genaue tatsächliche Start- und Endtermine sind für einen glaubwürdigen Bestandsplan unerlässlich.

## B

### (Backward Pass) Rückwärtspass

Backward Pass ist der CPM-Berechnungsprozess, der verspätete Termine ermittelt, indem er vom Projektende oder vom erforderlichen Endpunkt aus rückwärts arbeitet. Es hilft bei der Berechnung des Puffers und bei der Ermittlung, wie verspätete Aktivitäten auftreten können, ohne das Projekt oder den ausgewählten Abschlussmeilenstein zu verzögern.

### (Baseline) Basisplan

Ein Basisplan ist eine gespeicherte Kopie eines Projektterminplans, die als Referenz zum Vergleich dient. In Primavera P6 ermöglichen Basispläne den Teams, aktuelle Daten, Dauer, Fortschritt und Abweichung mit dem genehmigten Plan zu vergleichen.

### (Baseline Finish) Basisplan-Ende

Das geplante Enddatum ist das geplante Enddatum, das im Basisplan gespeichert ist. Der Vergleich der aktuellen Endtermine mit den geplanten Endterminen hilft dabei, Abweichungen, Prognosebewegungen und Meilensteinleistungen zu messen.

### (Baseline Start) Basisplan-Start

Der geplante Start ist das geplante Startdatum, das im Basisplan gespeichert ist. Es wird verwendet, um die aktuelle Prognose mit dem ursprünglichen oder genehmigten Plan zu vergleichen.

### (Budgeted Cost) Budgetierte Kosten

Die budgetierten Kosten sind die geplanten Kosten, die der Arbeit vor der Ausführung zugewiesen werden. Bei der Projektsteuerung unterstützen budgetierte Kosten kostengeladene Terminpläne, Earned-Value-Analysen, Cashflow-Prognosen und Leistungsberichte.

## C

### (Calendar) Kalender

Ein Kalender definiert Arbeitstage, arbeitsfreie Tage, Feiertage, Schichten und Arbeitszeiten. In Primavera P6 können Kalender Projekten, Ressourcen und Aktivitäten zugewiesen werden. Kalenderunterschiede können sich erheblich auf Datumsangaben, Puffer und Sequenzlogik auswirken.

### (Calendar Exception) Kalenderausnahme

Eine Kalenderausnahme ist eine bestimmte arbeits- oder arbeitsfreie Anpassung, z. B. ein Feiertag, eine Betriebsunterbrechung, eine verlängerte Schicht oder ein besonderer Arbeitstag. Kalenderausnahmen sollten kontrolliert werden, da sie berechnete Daten ändern und verschieben können.

### (Change Control) Änderungskontrolle

Change Control ist der formelle Prozess zur Überprüfung, Genehmigung und Dokumentation von Änderungen an Umfang, Terminplan, Kosten oder Vertragsbedingungen. Bei der Planung schützt die Änderungskontrolle den Basisplan und stellt sicher, dass Prognoseänderungen nachvollziehbar sind.

### (Claim) Anspruch

Ein Anspruch ist ein formeller Antrag auf zusätzliche Zeit, Geld oder vertragliche Erleichterungen. Die Qualität des Terminplans ist bei Schadensfällen wichtig, da schwache Logik, schlechte Aktualisierungen und fehlende Datensätze die Glaubwürdigkeit der Verzögerungsanalyse beeinträchtigen können.

### (Complete Logic) Vollständige Logik

Vollständige Logik bedeutet, dass Aktivitäten ordnungsgemäß mit Vorgängern und Nachfolgern verknüpft sind, mit Ausnahme gültiger dokumentierter Ausnahmen wie Projektstart- oder Projektabschlussmeilensteine. Vollständige Logik ist ein zentrales Prinzip der Terminplanqualität.

### (Constraint) Einschränkung

Eine Einschränkung ist eine Datumseinschränkung, die auf eine Aktivität oder einen Meilenstein angewendet wird. Einschränkungen können nützlich sein, wenn sie tatsächliche vertragliche oder externe Anforderungen darstellen. Übermäßige oder ungerechtfertigte Einschränkungen können jedoch die Terminplanlogik außer Kraft setzen, den Puffer verzerren und die CPM-Zuverlässigkeit schwächen.

### (Contract Milestone) Vertragsmeilenstein

Ein Vertragsmeilenstein ist ein im Vertrag definiertes erforderliches Datum oder Ereignis. Vertragsmeilensteine ​​sollten im Terminplan klar dargestellt, mit geeigneter Logik verknüpft und während jedes Aktualisierungszyklus überwacht werden.

### (Cost Loading) Kostenbelastung

Unter Cost Loading versteht man die Zuordnung budgetierter Kosten zu Aktivitäten, Ressourcen oder PSP-Elementen. Ein kostenintensiver Terminplan kann die Cashflow-Prognose, den Earned Value und die Kosten-Leistungs-Analyse unterstützen.

### (Critical Activity) Kritische Aktivität

Eine kritische Aktivität ist eine Aktivität, die sich direkt auf das Abschlussdatum des Projekts oder den ausgewählten Endpunkt des kritischen Pfads auswirkt. In vielen Terminplänen haben kritische Aktivitäten einen Gesamtpuffer von Null oder negativ, die genaue Definition hängt jedoch von den Terminplaneinstellungen und dem Projektkontrollverfahren ab.

### (Critical Path) Kritischer Pfad

Der kritische Pfad ist die Abfolge von Aktivitäten, die den frühestmöglichen Projektabschlusstermin oder den Abschluss eines wichtigen Meilensteins bestimmt. Ein glaubwürdiger kritischer Pfad sollte auf realistischer Logik, Dauern, Terminplänen und Einschränkungen basieren.

### (Critical Path Method) Kritische Pfadmethode

Die Critical Path Method (CPM) ist die Planungsmethode zur Berechnung von Aktivitätsterminen, Pufferzeiten und dem Arbeitspfad, der den Projektabschluss steuert. Primavera P6 verwendet CPM-Berechnungen, um prognostizierte Start- und Endtermine basierend auf Dauer, Kalendern, Beziehungen, Einschränkungen und Status zu erstellen.

### (Current Schedule) Aktueller Terminplan

Der aktuelle Terminplan ist der aktive aktualisierte Terminplan, der den tatsächlichen Fortschritt und die neueste Prognose anzeigt. Normalerweise wird es mit dem genehmigten Basisplan verglichen, um Abweichungen, Verzögerungen und Wiederherstellungsbedarf zu ermitteln.

## D

### (Data Date) Datenstichtag

Der Datenstichtag ist das Statusdatum in Primavera P6, das die tatsächliche Leistung von der prognostizierten Arbeit trennt. Die Arbeiten vor dem Datenstichtag sollten den tatsächlichen Fortschritt widerspiegeln, während die Arbeiten nach dem Datenstichtag den verbleibenden Plan darstellen sollten. Datendisziplin ist für zuverlässige Terminplanaktualisierungen unerlässlich.

### (DCMA Schedule Assessment) DCMA-Terminplanbewertung

Die DCMA-Terminplanbewertung bezieht sich auf Terminplanqualitätsprüfungen, die üblicherweise mit den Richtlinien der Defense Contract Management Agency verbunden sind. Bei diesen Prüfungen werden Probleme wie fehlende Logik, hoher Puffer, negativer Puffer, Einschränkungen, Verzögerungen, Leads und ungültige Daten überprüft. Sie sind nützliche Referenzen, sollten jedoch im Projektkontext und in der Beurteilung durch das PMO angewendet werden.

### (Delay) Verzögerung

Eine Verzögerung ist ein Ereignis oder eine Bedingung, die dazu führt, dass Arbeiten oder ein Meilenstein später als geplant erfolgen. Die Verzögerungsanalyse hängt von einer zuverlässigen Terminplanlogik, genauen Aktualisierungen, gültigen Basisplänen und klaren zeitgleichen Aufzeichnungen ab.

### (Delay Analysis) Verzögerungsanalyse

Bei der Verzögerungsanalyse handelt es sich um den Prozess der Identifizierung, Messung und Erklärung von Terminplanverzögerungen. Zu den gängigen Methoden gehören die Zeitauswirkungsanalyse, die Fensteranalyse und der Vergleich zwischen Plan und Bauzustand. Ein P6-Terminplan von schlechter Qualität erschwert die Verteidigung der Verzögerungsanalyse.

### (Deliverable) Liefergegenstand

Ein Liefergegenstand ist eine definierte Leistung, die abgeschlossen, eingereicht, genehmigt oder übergeben werden muss. In Terminplänen können Liefergegenstände als Aktivitäten oder Meilensteine ​​dargestellt werden und sollten mit der Arbeit verknüpft sein, die sie ermöglichen.

### (Driving Logic) steuernde Logik

Steuernde Logik ist die Beziehungslogik, die den berechneten Beginn oder das Ende einer Aktivität bestimmt. Wenn eine Aktivität am Datenstichtag ohne steuernde Logik beginnt, erklärt der Terminplan möglicherweise nicht, warum die Arbeit beginnen kann.

### (Driving Predecessor) Steuernder Vorgänger

Ein steuernder Vorgänger ist eine Vorgängerbeziehung, die den Beginn oder das Ende einer Nachfolgeraktivität steuert oder direkt beeinflusst. Durch die Identifizierung von steuernden Vorgängern können Planer verstehen, warum eine Aktivität zum richtigen Zeitpunkt geplant ist.

### (Driving Relationship) Steuernde Beziehung

Eine steuernde Beziehung ist eine Beziehung, die den Zeitpunkt einer verknüpften Aktivität steuert. In Primavera P6 können steuernde Beziehungsindikatoren Prüfern dabei helfen, zwischen bestehenden Beziehungen und Beziehungen, die tatsächlich Daten bestimmen, zu unterscheiden.

### (Duration) Dauer

Unter Dauer versteht man die Arbeitszeit, die zur Erledigung einer Tätigkeit benötigt wird. In P6 wird die Dauer anhand des zugewiesenen Kalenders berechnet. Unrealistische Dauern können die Glaubwürdigkeit des Terminplans, die vorausschauende Planung und die Analyse kritischer Pfade schwächen.

## E

### (Early Dates) Frühe Termine

Frühe Termine sind die frühesten berechneten Start- und Endtermine, die auf der Vorwärtsdurchlauf der CPM-Berechnung basieren. Sie zeigen, wann Aktivitäten stattfinden können, wenn Vorgängerlogik und Kalenderbedingungen so früh wie möglich erfüllt sind.

### (Earned Value) Earned Value

Earned Value ist eine Projektsteuerungsmethode, die den Wert der tatsächlich geleisteten Arbeit im Vergleich zum geplanten Wert und den Ist-Kosten misst. Er hilft bei der Bewertung der Termin- und Kostenleistung, wenn die Regeln zur Termin- und Fortschrittsmessung zuverlässig sind.

### (Engineering Schedule) Technischer Terminplan

Ein Konstruktionsplan stellt Entwurfs-, Prüf-, Genehmigungs- und lieferbare Produktionsaktivitäten dar. Es sollte in die Beschaffungs- und Baulogik integriert werden, damit die nachgelagerten Arbeiten realistischerweise durch den technischen Abschluss gesteuert werden.

### (Enterprise Project Structure) Unternehmensprojektstruktur

Enterprise Project Structure oder EPS ist die Hierarchie, die in Primavera P6 zum Organisieren von Projekten in einem Portfolio oder einer Organisation verwendet wird. Die EPS-Struktur unterstützt Zugriffskontrolle, Berichterstattung und Governance auf Portfolioebene.

### (Expected Finish) Erwartetes Ende

„Erwartetes Ende“ ist ein P6-Datumsfeld, das manchmal dazu verwendet wird, den voraussichtlichen Abschluss einer Aktivität zu beeinflussen. Es sollte sorgfältig kontrolliert werden, da es das Verhalten bei der Terminplanberechnung beeinflussen und schwache Logik verbergen kann, wenn es ohne klare Governance verwendet wird.

## F

### (Finish Milestone) Meilenstein abschließen

Ein Abschlussmeilenstein ist eine Aktivität von null Dauer, die den Abschluss eines wichtigen Ereignisses oder einer wichtigen Leistung darstellt. Normalerweise sollte es eine gültige Vorgängerlogik geben, die erklärt, wie der Meilenstein erreicht wird.

### (Finish-to-Finish Relationship) Finish-to-Finish-Beziehung

Eine Finish-to-Finish-Beziehung bedeutet, dass die Nachfolgeaktivität vorbehaltlich einer Verzögerung erst dann abgeschlossen werden kann, wenn die Vorgängeraktivität abgeschlossen ist. Dies ist nützlich für sich überschneidende Arbeiten, bei denen der Abschluss einer Aktivität den Abschluss einer anderen Aktivität steuert.

### (Finish-to-Start Relationship) End-to-Start-Beziehung

Eine Ende-Start-Beziehung bedeutet, dass die Nachfolgeaktivität nicht beginnen kann, bis die Vorgängeraktivität abgeschlossen ist, vorbehaltlich einer Verzögerung. Es ist der häufigste und oft klarste Beziehungstyp in CPM-Plänen.

### (Float) Puffer

Puffer ist die Zeitspanne, in der sich eine Aktivität bewegen kann, ohne einen definierten Endpunkt zu verzögern. Puffer wird aus Terminplanlogik, Kalendern, Einschränkungen und Status berechnet. Puffer sollte sorgfältig interpretiert werden, da schlechte Logik oder übermäßige Einschränkungen es verzerren können.

### (Float Path) Pufferpfad

Pufferpfad ist eine P6-Methode zum Verfolgen von Arbeitspfaden basierend auf Pufferberechnungen einer ausgewählten Aktivität oder eines ausgewählten Meilensteins. Die Pufferpfadanalyse kann dabei helfen, nahezu kritische Pfade zu identifizieren und Treiber jenseits des primären kritischen Pfads einzuplanen.

### (Forecast Dates) Prognosetermine

Prognosetermine sind berechnete oder prognostizierte Termine für die verbleibende Arbeit. Sie sollten auf Logik, Kalendern, Einschränkungen und realistischen Zeiträumen basieren und nicht nur auf manuellen Erwartungen.

### (Forward Pass) Vorwärtspass

Forward Pass ist der CPM-Berechnungsprozess, der frühe Start- und Endtermine bestimmt, indem er vom Projektstart oder Datenstichtag aus durch das Terminplannetzwerk vorwärts geht.

### (Free Float) Freier Puffer

Freier Puffer ist die Zeitspanne, um die eine Aktivität verzögert werden kann, ohne den frühen Start ihres unmittelbaren Nachfolgers zu verzögern. Es ist nützlich für die kurzfristige Koordination, ersetzt jedoch nicht die Total-Puffer-Analyse oder die Analyse des kritischen Pfads.

## G

### (Global Change) Globaler Wandel

Global Change ist eine Funktion von Primavera P6, mit der mehrere Aktivitätswerte basierend auf definierten Bedingungen geändert werden können. Es kann leistungsstark sein, sollte jedoch kontrolliert werden, da weitreichende Änderungen unbeabsichtigt die Qualität der Fahrplandaten beeinträchtigen können.

### (Governance) Governance

Unter Governance versteht man eine Reihe von Standards, Überprüfungsprozessen, Genehmigungen und Kontrollen, die zur Verwaltung der Terminqualität und der Projektberichterstattung verwendet werden. Die PMO-Governance trägt dazu bei, sicherzustellen, dass Terminpläne konsistent, glaubwürdig und für die Entscheidungsfindung nützlich sind.

## H

### (Hammock Activity) Hängemattenaktivität

Eine Hammock-Aktivität fasst einen Zeitraum zwischen verknüpften Aktivitäten oder Meilensteinen zusammen. Hammocks können nützlich sein, um indirekte Arbeit, Managementaufwand oder Dauer auf Zusammenfassungsebene zu melden, sie sollten jedoch keine detaillierte CPM-Logik ersetzen.

### (Hard Constraint) Harte Einschränkung

Eine harte Einschränkung ist eine Einschränkung, die die Terminplanberechnung stark einschränkt, z. B. obligatorischer Start oder obligatorisches Ende. Harte Einschränkungen können die Logik außer Kraft setzen und zu irreführenden Puffers führen. Daher sollten sie selten, gerechtfertigt und dokumentiert sein.

### (High Float) Hoher Puffer

hoher Puffer bezieht sich auf Aktivitäten mit ungewöhnlich großem GesamtPuffer. Dies kann auf fehlende Logik, schwache Reihenfolge, übermäßige Kalenderunterschiede oder Arbeit hinweisen, die nicht ordnungsgemäß in das Terminplannetzwerk eingebunden ist.

## I

### (In Progress Activity) Aktivität in Bearbeitung

Eine laufende Aktivität wurde gestartet, ist aber noch nicht abgeschlossen. Es sollte einen tatsächlichen Start, eine verbleibende Dauer und Fortschrittswerte haben, die dem Aktualisierungsstatus entsprechen. Laufende Aktivitäten erfordern eine sorgfältige Überprüfung, wenn Arbeiten außerhalb der Reihenfolge vorliegen.

### (Interface Milestone) Meilenstein der Schnittstelle

Ein Schnittstellenmeilenstein stellt einen Übergabe-, Abhängigkeits- oder Koordinationspunkt zwischen Parteien, Systemen, Bereichen, Verträgen oder Arbeitspaketen dar. Schnittstellenmeilensteine ​​sollten klar verknüpft und überwacht werden, da sie häufig nachgelagerte Arbeiten vorantreiben.

### (Invalid Date) Ungültiges Datum

Ein ungültiges Datum ist eine Datumsbedingung, die mit dem Datenstichtag oder der Terminplanlogik in Konflikt steht, z. B. Ist-Termine, die nach dem Datenstichtag liegen, oder Prognosedaten, die vor dem Datenstichtag liegen. Ungültige Daten verringern die Glaubwürdigkeit des Terminplans.

## L

### (Lag) Verzögerung

Verzögerung ist eine Verzögerung oder ein Offset, der auf eine Beziehung zwischen zwei Aktivitäten angewendet wird. Eine positive Verzögerung kann Wartezeit, Heilungszeit, Überprüfungszeit oder Mobilisierungslücken darstellen. Übermäßige oder nicht dokumentierte Verzögerungen können fehlende Aktivitäten verbergen und die Transparenz des Terminplans beeinträchtigen.

### (Late Dates) Verspätete Termine

Verspätete Termine sind die spätesten berechneten Start- und Endtermine, die eine Aktivität haben kann, ohne dass sich das Projekt oder der ausgewählte Endpunkt verzögert. Sie werden beim Rückwärtslauf ermittelt und zur Berechnung des Puffers verwendet.

### (Lead) Führen

Vorsprung ist eine negative Verzögerung, die es einem Nachfolger ermöglicht, zu beginnen oder zu enden, bevor die Vorgängerbeziehung dies normalerweise zulassen würde. Leads werden in Qualitätsplänen oft entmutigt, weil sie das Verständnis und die Verteidigung der Logik erschweren können.

### (Level of Effort) Aufwand

Level of Effort (LOE) ist ein Aktivitätstyp, der zur Darstellung laufender Unterstützungsarbeiten verwendet wird, deren Dauer von anderen Aktivitäten abhängt. LOE-Aktivitäten sind nützlich für Projektmanagement, Überwachung oder Verwaltungsarbeit, sollten jedoch nicht den kritischen Pfad vorantreiben.

### (Logic) Logik

Logik ist das Beziehungsnetzwerk, das definiert, wie Aktivitäten voneinander abhängen. Eine gute Logik repräsentiert reale Arbeitsabläufe, Zugangs-, Genehmigungs-, Beschaffungs-, Test-, Inbetriebnahme- und Übergabebedingungen.

### (Logic Tie) Logik-Krawatte

Eine logische Bindung ist eine Beziehung, die zwei Aktivitäten oder Meilensteine verbindet. Logische Verknüpfungen werden verwendet, um Reihenfolge und Termine in einem CPM-Terminplan zu berechnen.

### (Longest Path) Längster Weg

Der längste Weg ist die Abfolge von Aktivitäten, die das berechnete Projektende in Primavera P6 bestimmt. Sie wird häufig als Methode für kritische Pfade verwendet, da sie den Pfad verfolgt, der die Fertigstellung vorantreibt, selbst wenn Puffer-Werte durch Einschränkungen oder Kalenderverhalten beeinflusst werden.

### (Lookahead Schedule) Lookahead-Terminplan

Ein Lookahead-Terminplan ist eine kurzfristige Planungsansicht, die häufig die nächsten zwei bis acht Wochen abdeckt. Es sollte auf dem aktuellen CPM-Plan basieren und Arbeiten zeigen, die logisch fertig, in der richtigen Reihenfolge und realistisch für die Ausführung vor Ort sind.

## M

### (Mandatory Finish) Obligatorisches Finish

„Obligatorisches Ende“ ist eine strenge Einschränkung, die erfordert, dass eine Aktivität oder ein Meilenstein an einem bestimmten Datum abgeschlossen werden muss. Es kann die Logik außer Kraft setzen und Puffer verzerren und sollte daher nur verwendet werden, wenn dies vertraglich oder extern erforderlich ist.

### (Mandatory Start) Obligatorischer Start

Der obligatorische Start ist eine strenge Einschränkung, die vorschreibt, dass eine Aktivität oder ein Meilenstein an einem bestimmten Datum beginnen muss. Es kann dazu führen, dass eine Aktivität unabhängig von der Vorgängerlogik als festgelegt erscheint und sollte mit einer starken Begründung verwendet werden.

### (Milestone) Meilenstein

Ein Meilenstein ist eine Aktivität von null Dauer, die ein wichtiges Ereignis, eine Entscheidung, eine Genehmigung, eine Übergabe, einen Start- oder Endpunkt darstellt. Meilensteine ​​sollten logisch verbunden sein, es sei denn, es handelt sich um gültige Projektstart- oder externe Referenzpunkte.

### (Missing Logic) Fehlende Logik

Fehlende Logik bedeutet, dass einer Aktivität ein notwendiger Vorgänger, Nachfolger oder beides fehlt. Fehlende Logik schwächt die CPM-Berechnung, die Puffer-Zuverlässigkeit, die Analyse kritischer Pfade und die Terminplanqualität.

## N

### (Near-Critical Activity) Nahezu kritische Aktivität

Basierend auf der Puffer- oder Pfadanalyse steht eine nahezu kritische Aktivität kurz davor, kritisch zu werden. PMO- und Projektkontrollteams überwachen häufig nahezu kritische Arbeiten, da kleine Verzögerungen den kritischen Pfad verschieben können.

### (Negative Float) Negativer Puffer

negativer Puffer bedeutet, dass der berechnete Terminplan später als eine erforderliche Einschränkung, ein Meilenstein oder ein Enddatum liegt. Es handelt sich um eine Warnung, dass das Projekt oder der Meilenstein ohne Wiederherstellungsmaßnahmen oder genehmigte Änderungen möglicherweise nicht das erforderliche Datum einhalten kann.

### (Non-Driving Logic) Nicht-steuernde Logik

Nicht-steuernde Logik ist eine Beziehung, die existiert, aber das berechnete Datum der Aktivität nicht steuert. Nicht-fahrende Beziehungen mögen noch nützlich sein, aber sie erklären nicht den aktuellen Zeitpunkt der Nachfolge.

### (Not Started Activity) Nicht gestartete Aktivität

Eine nicht gestartete Aktivität hat keinen tatsächlichen Start und kein Ist-Ende. Es stellt die verbleibende Arbeit dar, die anhand von Logik, Kalendern, Dauer und gültigen Einschränkungen prognostiziert werden sollte.

## O

### (Open End) Offenes Ende

Ein offenes Ende ist eine Aktivität, bei der ein Vorgänger oder Nachfolger fehlt, mit Ausnahme genehmigter Start- oder Endausnahmen. Offene Enden sind ein häufiges Problem mit der Qualität von Fahrplänen, da sie das logische Netzwerk unterbrechen.

### (Open Start) Offener Start

Ein offener Start ist eine Aktivität ohne gültige Vorgängerlogik, die ihren Start steuert. Offene Starts können dazu führen, dass Aktivitäten am Datenstichtag oder Projektstart angezeigt werden, ohne dass es einen echten Terminplangrund gibt.

### (Open Finish) Offenes Ende

Ein offenes Ende ist eine Aktivität ohne gültige Nachfolgerlogik oder Abschlussendpunkt. Offene Abschlüsse können dazu führen, dass der Terminplan nicht zeigt, wie sich die Arbeit auf nachgelagerte Aktivitäten oder den Projektabschluss auswirkt.

### (Original Duration) Ursprüngliche Dauer

Die ursprüngliche Dauer ist die geplante Arbeitszeit, die einer Aktivität zugewiesen ist, bevor der Fortschritt aufgezeichnet wird. Es sollte realistische Annahmen zum Arbeitsumfang und zur Produktivität darstellen.

### (Out-of-Sequence Progress) Fortschritt außerhalb der Reihenfolge

Ein Out-of-Sequence-Fortschritt tritt auf, wenn die Arbeit beginnt oder voranschreitet, bevor die Vorgängerlogik erfüllt ist. Es spiegelt möglicherweise reale Feldbedingungen wider, muss jedoch überprüft werden, da es sich auf die beibehaltene Logik, das Fortschrittsüberschreibungsverhalten, die Puffer- und Prognosedaten auswirkt.

## P

### (Percent Complete) Prozent abgeschlossen

„Prozent abgeschlossen“ gibt an, wie viel einer Aktivität abgeschlossen ist. In Primavera P6 kann der Fertigstellungsgrad abhängig von den Einstellungen auf Dauer, physisch oder Einheiten basieren. Der ausgewählte Typ sollte mit dem Projektsteuerungsverfahren übereinstimmen.

### (Performance Measurement Baseline) Basisplan zur Leistungsmessung

Der Leistungsbasisplan ist der genehmigte Umfang, Terminplan und Budgetplan, der zur Messung der Projektleistung verwendet wird. Es unterstützt Earned Value, Varianzanalyse und Management-Reporting.

### (Physical Percent Complete) Physischer Prozentsatz abgeschlossen

„Physical Percent Complete“ ist eine Fortschrittsmessung, die auf der tatsächlichen körperlichen Leistung und nicht auf der verstrichenen Dauer oder den aufgewendeten Einheiten basiert. Dies ist nützlich, wenn der Fortschritt anhand installierter Mengen, Lieferungen oder Feldüberprüfungen gemessen werden kann.

### (Planned Value) Geplanter Wert

Der geplante Wert ist der budgetierte Wert der Arbeit, die zu einem bestimmten Zeitpunkt abgeschlossen sein soll. Es wird im Earned-Value-Management verwendet, um geplante Fortschritte mit verdienter und tatsächlicher Leistung zu vergleichen.

### (Planning) Planung

Planung ist der Prozess der Definition, wie das Projekt ausgeführt wird, einschließlich Umfangsreihenfolge, Arbeitspaket, Ressourcen, Einschränkungen, Schnittstellen und Kontrollstrategie. Die Terminplanung ist ein Ergebnis der Planung, aber die Planung ist umfassender als die Terminberechnung.

### (Planning Package) Planungspaket

Ein Planungspaket ist ein Teil der zukünftigen Arbeit, der noch nicht detailliert genug für eine vollständige Planung auf Aktivitätsebene ist. Es sollte schließlich vor der Ausführung in detaillierte Aktivitäten unterteilt werden.

### (Predecessor) Vorgänger

Ein Vorgänger ist eine Aktivität oder ein Meilenstein, der stattfinden muss, bevor eine andere Aktivität gemäß der definierten Beziehung beginnen oder enden kann. Vorgänger erklären, was den Zeitpunkt der nachgelagerten Arbeit bestimmt.

### (Primavera P6) Primavera P6

Primavera P6 ist ein Projektplanungs- und Projektportfoliomanagementsystem, das zum Entwickeln, Aktualisieren, Analysieren und Berichten von CPM-Plänen verwendet wird. In der Projektsteuerung wird P6 häufig für Basispläne, monatliche Aktualisierungen, Verzögerungsanalysen, Ressourcenplanung und PMO-Berichte verwendet.

### (Procurement Schedule) Beschaffungsplan

Ein Beschaffungsplan stellt Einkaufs-, Lieferantendaten-, Fertigungs-, Liefer- und Logistikaktivitäten dar. Es sollte mit den technischen Inputs und Bauanforderungen verknüpft werden, damit der Terminplan zeigt, ob Materialien und Ausrüstung rechtzeitig verfügbar sein werden.

### (Progress Override) Fortschrittsüberschreibung

Progress Override ist eine P6-Planungsoption, die bei der Berechnung des verbleibenden Terminplans die verbleibende Vorgängerlogik für Aktivitäten außerhalb der Reihenfolge ignorieren kann. Es sollte nur in Übereinstimmung mit dem Projektkontrollverfahren verwendet werden, da es das Verhalten der Prognoselogik ändern kann.

### (Progress Update) Fortschrittsaktualisierung

Eine Fortschrittsaktualisierung ist der periodische Prozess der Eingabe tatsächlicher Terminen, verbleibender Dauer, Fertigstellungsgrad, Mengen und anderer Statusinformationen in den Terminplan. Für glaubwürdige Prognosen sind gute Fortschrittsaktualisierungen unerlässlich.

### (Project Controls) Projektkontrollen

Projektkontrolle ist die Disziplin der Planung, Messung, Prognose und Kontrolle des Projektumfangs, des Terminplans, der Kosten, des Risikos, der Änderungen und der Leistung. Es liefert die Informationen, die für Managemententscheidungen und Korrekturmaßnahmen erforderlich sind.

### (Project Finish) Projektabschluss

Projektende ist der berechnete oder erforderliche Abschlusspunkt des Projekts. Er kann durch einen Endmeilenstein dargestellt werden und sollte logisch mit der Arbeit verbunden sein, die zum Abschluss des Projekts erforderlich ist.

### (Project Must Finish By) Projekt muss bis abgeschlossen sein

„Projekt muss abgeschlossen sein bis“ ist ein Datum auf P6-Projektebene, das zu einem negativen Puffer führen kann, wenn das berechnete Ende das erforderliche Ende überschreitet. Es sollte sorgfältig verwendet und dokumentiert werden, da es die Puffer-Interpretation beeinflusst.

### (Project Start) Projektstart

Der Projektstart ist der Anfangspunkt des Projektterminplans. Es wird oft durch einen Startmeilenstein oder ein Projektstartdatum dargestellt und sollte mit den Vertrags-, Genehmigungs- oder Bekanntmachungsanforderungen übereinstimmen.

## R

### (Recovery Schedule) Wiederherstellungsplan

Ein Wiederherstellungsplan ist ein überarbeiteter Plan, der darauf ausgelegt ist, Verzögerungen auszugleichen oder erforderliche Meilensteine zu erreichen. Dazu können Neuordnungen, hinzugefügte Ressourcen, geänderte Kalender, Überstunden, parallele Arbeit oder Änderungen der Umfangsstrategie gehören. Sanierungspläne sollten realistisch sein und auf Logik basieren.

### (Relationship) Beziehung

Eine Beziehung ist eine logische Verbindung zwischen zwei Aktivitäten oder Meilensteinen. In P6 gehören zu den Beziehungstypen Ende-zu-Anfang, Anfang-zu-Anfang, Ende-Ende und Anfang-zu-Ende. Beziehungen sind der Kern der CPM-Terminplanberechnung.

### (Remaining Duration) Verbleibende Dauer

Die verbleibende Dauer ist die Menge an Arbeitszeit, die benötigt wird, um eine Aktivität ab dem Datenstichtag abzuschließen. Er sollte auf der Grundlage des tatsächlichen Fortschritts und der realistischen Produktivität aktualisiert werden und nicht als Standardwert belassen werden.

### (Remaining Early Dates) Verbleibende frühe Termine

Verbleibende frühe Termine sind berechnete frühe Termine für Arbeiten, die nach dem Datenstichtag verbleiben. Sie werden von Logik, Kalendern, Einschränkungen und dem aktuellen Status beeinflusst.

### (Resource) Ressource

Eine Ressource ist Arbeitskraft, Ausrüstung, Material oder eine andere Kapazität, die einer Aktivität zugewiesen ist. In P6 können Ressourcen die Arbeitslastplanung, Kostenbelastung, Produktivitätsanalyse und Ressourcennivellierung unterstützen.

### (Resource Leveling) Ressourcennivellierung

Bei der Ressourcennivellierung handelt es sich um den Prozess der Anpassung von Aktivitätsterminen basierend auf der Ressourcenverfügbarkeit. Dies kann für eine realistische Planung nützlich sein, sollte aber sorgfältig geprüft werden, da es zu Datenänderungen außerhalb der normalen CPM-Logik führen kann.

### (Retained Logic) Behaltene Logik

Retained Logic ist eine P6-Planungsoption, die die verbleibende Logiksequenz für Arbeiten außerhalb der Reihenfolge beibehält. Es kann die verbleibende Arbeit verzögern, bis die Vorgängerlogik erfüllt ist. Die ausgewählte Einstellung sollte mit dem Aktualisierungsverfahren für die Projektsteuerung übereinstimmen.

### (Risk Register) Risikoregister

Ein Risikoregister ist eine kontrollierte Liste von Projektrisiken, einschließlich Ursachen, Auswirkungen, Eigentümer, Reaktionen und Status. Terminplanrisiken aus dem Risikoregister können sich auf Notfallsituationen, Abhilfemaßnahmen oder die Terminplanrisikoanalyse auswirken.

## S

### (Schedule) Terminplan

Ein Terminplan ist ein zeitbasierter Plan, der die Reihenfolge, Dauer, Terminplanung und Abhängigkeiten der Projektarbeit zeigt. Ein starker Terminplan unterstützt die Ausführung, Prognose, Koordination, Berichterstattung und Entscheidungsfindung.

### (Schedule Basis) Terminplanbasis

Die Terminplanbasis ist die dokumentierte Erläuterung von Annahmen, Kalendern, Einschränkungen, Reihenfolgen, Produktivität, Ressourcen, Einschlüssen, Ausschlüssen und Methoden, die zur Erstellung des Terminplans verwendet werden. Es hilft Prüfern, den Plan zu verstehen und zu verteidigen.

### (Schedule Compression) Komprimierung planen

Bei der Plankomprimierung handelt es sich um den Prozess der Verkürzung der Plandauer durch Methoden wie Abstürze, schnelle Nachverfolgung, Neuordnung, zusätzliche Schichten oder Ressourcenänderungen. Die Komprimierung sollte auf Risiko und Machbarkeit geprüft werden.

### (Schedule Forecast) Terminplanprognose

Eine Terminplanprognose ist der vorhergesagte Zeitpunkt der verbleibenden Arbeit auf der Grundlage des aktuellen Fortschritts, der Logik, der Dauer, des Kalenders, der Einschränkungen und der bekannten Projektbedingungen. Eine gute Prognose hängt von genauen Aktualisierungen und einem glaubwürdigen Terminplannetzwerk ab.

### (Schedule Health Check) Planen Sie einen Gesundheitscheck

Ein Schedule Health Check ist eine strukturierte Überprüfung der Terminplanqualität. Im Allgemeinen werden Logik, Einschränkungen, Verzögerungen, Leads, Puffer, Dauer, Kalender, ungültige Daten, Basisausrichtung und Aktualisierungsdisziplin untersucht.

### (Schedule Narrative) Erzählung planen

Eine Terminplanerzählung ist die schriftliche Erklärung, die mit einer Terminplanaktualisierung eingereicht wird. Typischerweise werden Fortschritte, kritische Pfadänderungen, Verzögerungen, Risiken, Abhilfemaßnahmen, Meilensteinbewegungen und wichtige Annahmen beschrieben.

### (Schedule Performance Index) Planleistungsindex

Der Schedule Performance Index (SPI) ist ein Earned-Value-Maß, das aus dem Earned-Value dividiert durch den Planwert berechnet wird. Ein SPI unter 1,0 bedeutet, dass weniger Arbeit geleistet wurde als geplant, während ein SPI über 1,0 darauf hindeutet, dass mehr Arbeit geleistet wurde als geplant.

### (Schedule Quality) Qualität planen

Die Terminplanqualität ist der Grad, in dem ein Terminplan vollständig, logisch, realistisch, kontrolliert und für Prognosen nützlich ist. Qualität hängt von einer soliden Logik, gültigen Kalendern, angemessenen Zeiträumen, einem genauen Status, kontrollierten Einschränkungen und einer klaren Berichterstattung ab.

### (Schedule Risk Analysis) Risikoanalyse planen

Bei der Terminrisikoanalyse handelt es sich um den Prozess der Bewertung der Unsicherheit in Bezug auf Termindauer, Logik und Risiken, um wahrscheinliche Fertigstellungstermine abzuschätzen. Es nutzt häufig Simulationsmethoden und erfordert einen glaubwürdigen Basisplan.

### (Schedule Variance) Planabweichung

Die Terminplanabweichung ist die Differenz zwischen der geplanten und der tatsächlichen oder prognostizierten Leistung. Die Messung kann anhand von Daten, Earned Value, Meilensteinbewegung oder Basisplanvergleich erfolgen.

### (Scheduling) Terminplanung

Planung ist der Prozess der Umwandlung des Projektplans in eine zeitbasierte Abfolge von Aktivitäten, Dauer, Beziehungen, Kalendern und Einschränkungen. Die Terminplanung unterstützt die Ausführungsplanung und Leistungskontrolle.

### (Scope) Geltungsbereich

Der Umfang ist die Arbeit, die erforderlich ist, um die Projektziele zu erreichen. Ein Terminplan sollte den gesamten genehmigten Umfang mit dem entsprechenden Detaillierungsgrad darstellen.

### (Soft Constraint) Weiche Einschränkung

Eine weiche Einschränkung ist eine Datumseinschränkung, die die Terminplanberechnung beeinflusst, aber nicht vollständig außer Kraft setzt, z. B. Beginn am oder nach oder Ende am oder vor. Weiche Einschränkungen erfordern immer noch eine Begründung und sollten die Logik nicht ersetzen.

### (Start Milestone) Meilenstein starten

Ein Startmeilenstein ist eine Aktivität von null Dauer, die den Beginn einer Hauptphase, eines Arbeitspakets oder eines Projektereignisses darstellt. Normalerweise sollte es eine Nachfolgelogik und, sofern es sich nicht um einen gültigen Projektstart handelt, eine entsprechende Vorgänger- oder Berechtigungslogik haben.

### (Start-to-Finish Relationship) Beziehung von Anfang bis Ende

Eine Start-Ende-Beziehung bedeutet, dass der Nachfolger nicht fertig werden kann, bis der Vorgänger startet, vorbehaltlich einer Verzögerung. Da es sich um eine seltene und oft als ungewöhnliche Logik angesehene Logik handelt, sollte sie bei ihrer Verwendung überprüft und begründet werden.

### (Start-to-Start Relationship) Start-to-Start-Beziehung

Eine Start-Start-Beziehung bedeutet, dass der Nachfolger nicht starten kann, bevor der Vorgänger startet, vorbehaltlich einer Verzögerung. Es ist nützlich für überlappende Arbeiten, sollte jedoch durch realistische Koordinationsannahmen unterstützt werden.

### (Status Date) Statusdatum

Statusdatum ist ein weiterer Begriff, der häufig für der Datenstichtag verwendet wird. Es markiert den Punkt, bis zu dem der tatsächliche Fortschritt gemeldet wurde und ab dem die verbleibende Arbeit prognostiziert wird.

### (Successor) Nachfolger

Ein Nachfolger ist eine Aktivität oder ein Meilenstein, der von einer anderen Aktivität abhängt. Die Nachfolgerlogik zeigt, wie sich eine Aktivität auf nachgelagerte Arbeiten und den Projektabschluss auswirkt.

## T

### (Target Schedule) Zielplan

Ein Zielplan ist eine Referenzversion, die zum Vergleich verwendet wird und oft einer Basisplan ähnelt. In der P6-Terminologie wurden Zielpläne in älteren Versionen verwendet und sind im Allgemeinen mit Basiskonzepten vergleichbar.

### (Threshold) Schwelle

Ein Schwellenwert ist ein akzeptabler Grenzwert oder Zielwert, der zur Bewertung der Terminplanqualität oder -leistung verwendet wird. Beispielsweise kann eine Terminplanmetrik einen Zielschwellenwert von null fehlenden Logikaktivitäten festlegen.

### (Time Impact Analysis) Zeitwirkungsanalyse

Time Impact Analysis ist eine Verzögerungsanalysemethode, die ein Verzögerungsereignis oder -fragment in eine entsprechende Terminplanaktualisierung einfügt, um dessen Auswirkung auf den Projektabschluss oder Meilensteine zu messen.

### (Total Float) Gesamtpuffer

Der Gesamtpuffer ist die Zeitspanne, um die eine Aktivität verzögert werden kann, ohne dass sich das Projektende oder der ausgewählte Einschränkungspunkt verzögert. Es handelt sich um eine wichtige CPM-Ausgabe, die jedoch durch Einschränkungen, Kalender, fehlende Logik und Terminplaneinstellungen verzerrt werden kann.

## U

### (Update Cycle) Aktualisierungszyklus

Ein Aktualisierungszyklus ist der wiederkehrende Terminplanstatusprozess, z. B. wöchentliche oder monatliche Aktualisierungen. Dazu gehört die Erfassung von Fortschritten, die Eingabe von Ist-Daten, die Überprüfung der Logik, die Neuberechnung des Terminplans, die Analyse von Änderungen und die Erstellung von Berichten.

### (User Defined Field) Benutzerdefiniertes Feld

Ein benutzerdefiniertes Feld oder UDF ist ein benutzerdefiniertes Feld in Primavera P6, das zur Erfassung projektspezifischer Informationen verwendet wird. UDFs können Berichte, Prüfpfade, Verantwortungszuweisungen oder Metrikverfolgung unterstützen.

## V

### (Variance) Varianz

Die Abweichung ist die Differenz zwischen geplanten, tatsächlichen, Basis- oder Prognosewerten. Zu den häufigsten Abweichungen bei der Terminplanung gehören Anfangsabweichung, Endabweichung, Dauerabweichung und Kosten- oder Leistungswertabweichung.

## W

### (What-If Schedule) Was-wäre-wenn-Terminplan

Ein Was-wäre-wenn-Terminplan ist ein Szenarioplan, der zum Testen möglicher Änderungen, Abhilfemaßnahmen, Verzögerungen oder Wiederherstellungsstrategien verwendet wird. Es sollte klar vom offiziellen aktuellen Terminplan getrennt sein, sofern es nicht offiziell genehmigt wird.

### (Work Breakdown Structure) Projektstrukturplan

Der Projektstrukturplan (WBS) ist die hierarchische Aufteilung des Projektumfangs in überschaubare Komponenten. In Primavera P6 organisiert der WBS Aktivitäten und unterstützt Planung, Berichterstattung, Verantwortungszuweisung und Terminkontrolle.

### (Work Package) Arbeitspaket

Ein Arbeitspaket ist eine überschaubare Gruppe von Arbeiten innerhalb des WBS, die oft einer Disziplin, einem Auftragnehmer, einem Bereich oder einem verantwortlichen Eigentümer zugeordnet sind. Arbeitspakete helfen dabei, Terminplanaktivitäten mit der Ausführungsverantwortung zu verbinden.

### (Working Day) Arbeitstag

Ein Arbeitstag ist ein Tag, der gemäß dem zugewiesenen Kalender für die Arbeit verfügbar ist. Arbeitstage wirken sich auf Dauer, Starttermine, Endtermine, Puffer und logische Berechnungen aus.
