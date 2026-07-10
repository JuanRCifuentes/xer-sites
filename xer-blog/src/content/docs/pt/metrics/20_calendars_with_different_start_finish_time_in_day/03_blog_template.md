---
title: "Calendários com diferentes horários de início e término no Primavera P6"
seoTitle: "Calendários com diferentes horários de início e término no Primavera P6"
description: "Veja por que Calendários com diferentes horários de início e término no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Calendários com diferentes horários de início e término no Primavera P6"
  - "Primavera P6 Calendários com diferentes horários de início e término no Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/calendars-with-different-start-finish-time-in-day-primavera-p6"
language: "pt"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Planejamento em Primavera P6"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primarySearchIntent: "Veja por que Calendários com diferentes horários de início e término no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
relatedMetrics:
  - "06_metrics_pt/20_calendars_with_different_start_finish_time_in_day/02_guide_template.md"
relatedBlogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/20_calendars_with_different_start_finish_time_in_day/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Os calendários são um dos direcionadores silenciosos da programação do Primavera P6. Eles definem quando o trabalho pode acontecer, como as durações se convertem em datas e como os relacionamentos movem as atividades ao longo do tempo. Como os calendários geralmente ficam nos bastidores, pequenas diferenças nos horários de início e término diários podem criar um comportamento de agendamento que é difícil de ver em layouts normais.

Esta métrica identifica calendários cujos horários de início ou término dos dias úteis diferem do padrão do projeto aprovado. A questão não é que todos os calendários devam ser idênticos. Muitos projetos precisam de calendários especiais para trabalho noturno, trabalho de fim de semana, janelas de desligamento, disponibilidade de recursos ou acesso restrito. A questão é se essas diferenças são intencionais, documentadas e atribuídas apenas onde pertencem.

Por exemplo, um calendário de projeto pode funcionar das 7h00 às 17h00, enquanto outro funciona das 8h00 às 18h00. Ambos podem apresentar dez horas de trabalho por dia. Em alto nível, eles parecem semelhantes. Mas no P6, a hora do dia pode afetar o posicionamento exato do início e do término, os laços de relacionamento, os valores de folga e o movimento aparente da data. Um turno de uma hora pode parecer insignificante, mas pode mudar a forma como as atividades se alinham nos calendários.

Isto se torna mais importante quando atividades em calendários diferentes estão interligadas. Um antecessor em uma janela de trabalho pode terminar no final do dia, enquanto o calendário sucessor não pode começar até a manhã seguinte. Outra atividade pode parecer terminar na mesma data, mas em um horário diferente. Se os revisores olharem apenas para as datas e não para os horários, o cronograma pode parecer inconsistente ou difícil de explicar.

As diferenças de calendário também podem afetar o caminho crítico e a folga total. Se uma atividade crítica usar um calendário fora do padrão por acidente, o caminho poderá se mover de forma diferente do esperado. A folga pode parecer aumentar ou diminuir devido ao alinhamento do calendário, e não à flexibilidade real do cronograma. Durante o PMO ou a revisão do cliente, fica mais difícil explicar por que as datas mudaram.

A revisão prática começa identificando o padrão de calendário aprovado para o projeto. Qual é o dia normal de trabalho? Quais são os horários padrão de início e término? Quais calendários podem ser diferentes? Em seguida, exporte ou revise todos os calendários e compare seus períodos de trabalho diários. A revisão deve incluir o nome do calendário, tipo de calendário, hora de início, hora de término, horas diárias, exceções e atividades atribuídas.

A próxima etapa é revisar as atribuições. Um calendário especial pode ser válido, mas deve ser atribuído apenas às atividades que dele necessitem. O calendário do turno noturno não deve se estender ao trabalho diurno normal. Um calendário de desligamento não deve permanecer atribuído após o escopo da interrupção ser copiado para outra área. Um calendário de recursos não deve controlar acidentalmente as datas das atividades, a menos que isso faça parte do método do projeto.

Se uma diferença de calendário for acidental, a solução geralmente é simples: alinhe o horário de início, o horário de término e os períodos de trabalho com o padrão do projeto. Em seguida, recalcule o cronograma e revise as datas afetadas e os valores de folga. Se a diferença for válida, documente o motivo e confirme o proprietário. Os motivos válidos podem incluir acesso restrito, janelas ambientais, limites operacionais do cliente, condições de licença ou trabalho em turnos planejado.

Considere um cronograma de comissionamento em que a maior parte do trabalho usa um calendário das 7h às 17h, mas a equipe de testes usa um calendário noturno das 22h às 6h. Essa diferença pode ser válida porque os testes só podem acontecer quando as operações estão offline. O agendador deve documentar a base e confirmar que apenas as atividades de teste utilizam esse calendário.

Agora considere uma atividade de construção copiada que acidentalmente herda o calendário do turno noturno. Suas datas podem ser calculadas de forma estranha em comparação com trabalhos próximos. Pode parecer que termina em uma data inesperada ou criar diferenças de folga que não correspondem às expectativas de campo. Nesse caso, a questão não é a existência do calendário noturno. O problema é a atribuição de atividade errada.

O limite alvo para esta métrica deve ser zero calendários inexplicáveis. Alguns calendários fora do padrão podem permanecer, mas cada um deve ter um motivo claro. Se o agendador não puder explicar por que um calendário começa ou termina em um horário diferente, ele deverá ser revisado.

Limpar essa métrica melhora a transparência do cronograma. Ele ajuda as equipes a evitar efeitos ocultos de dias parciais, flutuações enganosas e movimentos inexplicáveis ​​de datas. Isso também fácilita a auditoria do cronograma porque as suposições do calendário não ficam mais ocultas no arquivo. Para as equipes de controle de projeto, essa é uma pequena revisão com grande retorno.
## Conteúdo relacionado
- [Calendários com diferentes horários de início e término no Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
