---
title: Resumen de métricas
description: Descripción general de las métricas de calidad del cronograma y la relación entre sus páginas.
template: splash
hero:
  tagline: Las métricas de calidad del cronograma miden cuán creíble y bien construido es un cronograma CPM en Primavera P6. Cada métrica apunta a una debilidad específica y cuenta con documentación sobre qué mide, por qué importa y cómo mejorar un resultado deficiente.
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de Gantt estilizado con una línea de fecha de datos resaltada">
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
    - text: Explorar la primera métrica
      link: /es/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: Leer el blog
      link: /es/blog/
      variant: minimal
sidebar:
  order: 0
---

## Actividades que inician en la fecha de datos sin lógica conductora

Esta métrica identifica actividades abiertas o no iniciadas programadas para iniciar en la fecha de datos sin lógica de predecesor válida que impulse ese inicio. Las actividades que se acumulan en el límite de la fecha de datos sin lógica distorsionan la holgura, oscurecen la ruta más larga y hacen que el pronóstico sea poco confiable. El umbral objetivo es 0 actividades.

- [Descripción general](/es/metrics/data-date-no-driving-logic-overview/) — qué mide la métrica, su umbral y por qué importa para la credibilidad del cronograma.
- [Guía de mejora](/es/metrics/data-date-no-driving-logic-improvement-guide/) — cómo los programadores y equipos de control de proyectos resuelven las actividades marcadas durante las revisiones de calidad y los ciclos de actualización.

Para la versión narrativa de por qué importa esta métrica, lea la entrada de blog relacionada: [Actividades que inician en la fecha de datos sin lógica conductora](/es/blog/activities-starting-on-data-date-no-driving-logic/).
