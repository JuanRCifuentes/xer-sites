---
title: Resumo de Métricas
description: Visão geral das métricas de qualidade do cronograma e como suas páginas se relacionam.
template: splash
hero:
  tagline: As métricas de qualidade do cronograma medem o quanto um cronograma CPM no Primavera P6 é confiável e bem construído. Cada métrica aborda uma fraqueza específica e vem com documentação sobre o que mede, por que importa e como melhorar um resultado insatisfatório.
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gráfico de Gantt estilizado com uma linha de data de dados destacada">
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
    - text: Explorar a primeira métrica
      link: /pt/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: Ler o blog
      link: /pt/blog/
      variant: minimal
sidebar:
  order: 0
---

## Atividades Iniciando na Data de Dados sem Lógica Condicionante

Esta métrica identifica atividades abertas ou não iniciadas programadas para iniciar na Data de Dados sem lógica predecessor válida condicionando esse início. Atividades se acumulando no limite da Data de Dados sem lógica distorcem a folga, obscurecem o caminho mais longo e tornam a previsão não confiável. O limite-alvo é 0 atividades.

- [Visão Geral](/pt/metrics/data-date-no-driving-logic-overview/) — o que a métrica mede, seu limite e por que importa para a credibilidade do cronograma.
- [Guia de Melhoria](/pt/metrics/data-date-no-driving-logic-improvement-guide/) — como programadores e equipes de controle de projetos resolvem atividades sinalizadas durante revisões de qualidade e ciclos de atualização.

Para a versão narrativa de por que esta métrica importa, leia o artigo relacionado do blog: [Atividades Iniciando na Data de Dados sem Lógica Condicionante](/pt/blog/activities-starting-on-data-date-no-driving-logic/).
