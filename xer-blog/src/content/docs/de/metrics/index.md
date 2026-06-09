---
title: Metriken-Übersicht
description: Übersicht der Terminqualitätsmetriken und wie ihre Seiten zusammenhängen.
template: splash
hero:
  tagline: Terminqualitätsmetriken messen, wie glaubwürdig und gut aufgebaut ein Primavera P6-CPM-Terminplan ist. Jede Metrik zielt auf eine spezifische Schwachstelle ab und enthält Dokumentation darüber, was sie misst, warum sie wichtig ist und wie ein schlechtes Ergebnis verbessert werden kann.
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stilisiertes Gantt-Diagramm mit einer hervorgehobenen Stichtagslinie">
        <rect x="20" y="20" width="120" height="22" rx="4" fill="var(--sl-color-accent)" opacity="0.9"/>
        <rect x="70" y="56" width="150" height="22" rx="4" fill="var(--sl-color-accent)" opacity="0.65"/>
        <rect x="130" y="92" width="110" height="22" rx="4" fill="var(--sl-color-accent)" opacity="0.45"/>
        <rect x="180" y="128" width="120" height="22" rx="4" fill="var(--sl-color-accent)" opacity="0.3"/>
        <rect x="156" y="164" width="60" height="22" rx="4" fill="var(--sl-color-orange)"/>
        <line x1="156" y1="8" x2="156" y2="194" stroke="var(--sl-color-orange)" stroke-width="2" stroke-dasharray="6 4"/>
        <path d="M140 31 L70 67" stroke="var(--sl-color-gray-3)" stroke-width="1.5"/>
        <path d="M220 67 L130 103" stroke="var(--sl-color-gray-3)" stroke-width="1.5"/>
        <path d="M240 103 L180 139" stroke="var(--sl-color-gray-3)" stroke-width="1.5"/>
      </svg>
  actions:
    - text: Erste Metrik erkunden
      link: /de/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: Blog lesen
      link: /de/blog/
      variant: minimal
sidebar:
  order: 0
---

## Vorgänge, die am Stichtag ohne steuernde Logik beginnen

Diese Metrik identifiziert offene oder nicht gestartete Vorgänge, die am Stichtag starten sollen, ohne dass gültige Vorgängerlogik diesen Start steuert. Vorgänge, die sich ohne Logik an der Stichtagsgrenze sammeln, verzerren den Puffer (Float), verschleiern den längsten Weg und machen die Prognose unzuverlässig. Der Zielgrenzwert liegt bei 0 Vorgängen.

- [Übersicht](/de/metrics/data-date-no-driving-logic-overview/) — was die Metrik misst, ihren Grenzwert und warum sie für die Terminglaubwürdigkeit wichtig ist.
- [Verbesserungsleitfaden](/de/metrics/data-date-no-driving-logic-improvement-guide/) — wie Terminplaner und Projektsteuerungsteams markierte Vorgänge bei Qualitätsprüfungen und Aktualisierungszyklen lösen.

Für die narrative Version, warum diese Metrik wichtig ist, lesen Sie den verwandten Blogbeitrag: [Vorgänge, die am Stichtag ohne steuernde Logik beginnen](/de/blog/activities-starting-on-data-date-no-driving-logic/).
