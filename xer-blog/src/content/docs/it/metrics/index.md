---
title: Riepilogo delle metriche
description: Panoramica delle metriche di qualità dei programmi e come le relative pagine si relazionano tra loro.
template: splash
hero:
  tagline: Le metriche di qualità dei programmi misurano quanto un programma CPM Primavera P6 sia credibile e ben costruito. Ogni metrica si concentra su un'unica debolezza specifica ed è corredata da documentazione su cosa misura, perché è importante e come migliorare un risultato scadente.
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramma di Gantt stilizzato con una linea della data di aggiornamento evidenziata">
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
    - text: Esplora la prima metrica
      link: /it/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: Leggi il blog
      link: /it/blog/
      variant: minimal
sidebar:
  order: 0
---

## Attività che iniziano alla Data di Aggiornamento senza logica trainante

Questa metrica identifica le attività aperte o non iniziate programmate per iniziare alla Data di Aggiornamento senza una logica predecessore valida che guidi tale avvio. Le attività che si accumulano al confine della Data di Aggiornamento senza logica distorcono il float, oscurano il percorso più lungo e rendono la previsione inaffidabile. La soglia target è 0 attività.

- [Panoramica](/it/metrics/data-date-no-driving-logic-overview/) — cosa misura la metrica, la sua soglia e perché è importante per la credibilità del programma.
- [Guida al miglioramento](/it/metrics/data-date-no-driving-logic-improvement-guide/) — come i programmisti e i team di project controls risolvono le attività segnalate durante le revisioni qualitative e i cicli di aggiornamento.

Per la versione narrativa del perché questa metrica è importante, leggere l'articolo del blog correlato: [Attività che iniziano alla Data di Aggiornamento senza logica trainante](/it/blog/activities-starting-on-data-date-no-driving-logic/).
