---
title: 'Vorgänge, die am Stichtag ohne steuernde Logik beginnen — Übersicht'
sidebar:
  label: 'Keine steuernde Logik am Stichtag — Übersicht'
description: 'Terminqualitätsmetrik: Vorgänge, die am Primavera P6-Stichtag ohne steuernde Vorgängerlogik beginnen — was sie misst, ihr Nullziel und warum sie wichtig ist.'
pubDate: 'Junio 8, 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-3.jpg
---
# Übersicht

## Beschreibung

Diese Metrik identifiziert offene oder nicht gestartete Vorgänge, die am Primavera P6-Stichtag (Data Date) starten sollen, aber keine gültige Vorgängerlogik haben, die diesen Start steuert. In einem gut aufgebauten CPM-Terminplan sollte ein Vorgang normalerweise starten, weil vorhergehende Arbeit, Projektzugang, Genehmigungen, Beschaffung oder andere erforderliche Bedingungen logisch erfüllt wurden.

## Was sie misst

Diese Metrik misst die Anzahl der Vorgänge, deren Startdatum mit dem Stichtag übereinstimmt, ohne dass ein logischer Vorgängerpfad erklärt, warum die Arbeit an diesem Punkt beginnen kann.

## Grenzwert

Zielgrenzwert: 0 Vorgänge.

## Warum sie wichtig ist

Vorgänge, die am Stichtag ohne steuernde Logik beginnen, können die Glaubwürdigkeit des Terminplans schwächen. Sie können dazu führen, dass der nächste Arbeitszeitraum startbereit erscheint, auch wenn Vorgängerarbeit, Genehmigungen, Materialien oder Zugangsbedingungen nicht ordnungsgemäß modelliert wurden.

Das ist wichtig, weil der Stichtag die Grenze zwischen tatsächlicher Leistung und der Prognose ist. Wenn sich Vorgänge ohne Logik an dieser Grenze sammeln, kann die Prognose unzuverlässig werden. Pufferwerte können verzerrt sein, der längste Weg kann unklar sein, und Projektteams können das Vertrauen darin verlieren, was der Terminplan ihnen eigentlich sagt.

Für Primavera P6-Benutzer unterstützt diese Metrik bessere Aktualisierungsdisziplin, stärkere CPM-Logik und besser verteidigbare Terminqualitätsprüfungen. Sie hilft Planern zu bestätigen, dass Arbeit aus einem echten terminplanerischen Grund beginnt und nicht einfach weil die Software ungesteuerte Vorgänge auf das aktuelle Aktualisierungsdatum verschoben hat.

## Verwandter Blogbeitrag

- [Vorgänge, die am Stichtag ohne steuernde Logik beginnen](/de/blog/activities-starting-on-data-date-no-driving-logic/)
