---
title: Сводка метрик
description: Обзор метрик качества расписания и взаимосвязи соответствующих страниц.
template: splash
hero:
  tagline: Метрики качества расписания измеряют достоверность и качество построения расписания по МКП в Primavera P6. Каждая метрика направлена на одну конкретную слабость и сопровождается документацией о том, что она измеряет, почему это важно и как улучшить неудовлетворительный результат.
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Стилизованный диаграмма Ганта с выделенной линией даты данных">
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
    - text: Изучить первую метрику
      link: /ru/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: Читать блог
      link: /ru/blog/
      variant: minimal
sidebar:
  order: 0
---

## Работы, начинающиеся на дату данных без управляющей логики

Эта метрика выявляет открытые или не начавшиеся работы, запланированные к началу на дату данных без действительной управляющей логики предшественника. Работы, скапливающиеся на границе даты данных без логики, искажают резерв, затрудняют определение наидлиннейшего пути и делают прогноз ненадёжным. Целевой порог — 0 работ.

- [Обзор](/ru/metrics/data-date-no-driving-logic-overview/) — что измеряет метрика, её пороговое значение и почему она важна для достоверности расписания.
- [Руководство по улучшению](/ru/metrics/data-date-no-driving-logic-improvement-guide/) — как плановики и специалисты по управлению проектами устраняют отмеченные работы в ходе проверок качества и циклов актуализации.

Для понимания того, почему эта метрика важна, в нарративном изложении, прочитайте связанную статью блога: [Работы, начинающиеся на дату данных без управляющей логики](/ru/blog/activities-starting-on-data-date-no-driving-logic/).
