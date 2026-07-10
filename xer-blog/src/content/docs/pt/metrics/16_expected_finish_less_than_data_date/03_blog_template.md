---
title: "Conclusão Esperada Antes da Data Date no Primavera P6"
seoTitle: "Conclusão Esperada Antes da Data Date no Primavera P6"
description: "Veja por que Conclusão Esperada Antes da Data Date no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Conclusão Esperada Antes da Data Date no Primavera P6"
  - "Primavera P6 Conclusão Esperada Antes da Data Date no Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/expected-finish-less-than-data-date-primavera-p6"
language: "pt"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primarySearchIntent: "Veja por que Conclusão Esperada Antes da Data Date no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
relatedMetrics:
  - "06_metrics_pt/16_expected_finish_less_than_data_date/02_guide_template.md"
relatedBlogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/16_expected_finish_less_than_data_date/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

A Data Date é a linha entre o que aconteceu e o que ainda está previsto. Em uma atualização limpa do cronograma, as informações de status antes da Data Date devem ser resolvidas como progresso real, enquanto o trabalho restante deve ser previsto a partir da Data Date. Quando uma atividade tem um término esperado anterior à data dos dados, esse limite fica confuso.

Esta métrica identifica atividades em que o término esperado é anterior à data atual. É uma verificação simples, mas pode revelar entradas de status desatualizadas, acabamentos reais ausentes, previsões de campo desatualizadas ou fluxos de trabalho de atualização que não mantêm as datas esperadas adequadamente.

No Primavera P6, o Final Esperado é frequentemente usado como um campo de previsão ou atualização, dependendo do processo da organização e das configurações de cronograma. Algumas equipes o utilizam para capturar as expectativas de campo para atividades em andamento. Outros importam-no de planilhas ou sistemas de progresso. Como o campo pode influenciar o comportamento do cronograma em determinados fluxos de trabalho, não deve ser permitido que ele fique no passado sem revisão.

Considere uma atividade chamada “Instalar a bandeja de cabos principal”. A data de dados do projeto é 31 de março, mas a atividade tem término esperado em 24 de março. Se a atividade realmente terminou em 24 de março, o cronograma normalmente deverá ter um Término Real e um status concluído. Se a atividade não for concluída, o Término Esperado ficará obsoleto e deverá ser atualizado com base nas informações de campo mais recentes. De qualquer forma, o valor atual precisa de atenção.

Esse problema geralmente aparece quando as equipes avançam a data dos dados, mas não atualizam totalmente todos os campos de previsão. A porcentagem concluída pode ser atualizada. A duração restante pode ser ajustada. Algumas datas reais podem ser inseridas. Mas os valores de conclusão esperada da atualização anterior permanecem inalterados. O resultado é um cronograma que parece parcialmente atualizado, mas ainda contém datas de conclusão esperadas no passado.

A primeira questão é se a data dos dados está correta. Se a data dos dados foi definida incorretamente, a métrica pode estar sinalizando o limite errado. Assim que a Data Date for confirmada, cada atividade deverá ser revisada em relação ao seu verdadeiro status. A atividade foi concluída antes da data dos dados? O término real está faltando? A atividade ainda está ativa? A Duração Restante ainda representa o trabalho restante?

Para o trabalho concluído, a correção geralmente é inserir ou corrigir o término real e, em seguida, confirmar se o status da atividade, a porcentagem concluída e a duração restante estão consistentes. Para trabalhos que ainda estão ativos, o Término Esperado deve ser atualizado para uma data válida na Data Date ou após ela. A Duração Restante também deve ser revisada para que o cálculo do cronograma reflita a previsão atual.

Para trabalhos não iniciados, um término esperado antes da data dos dados geralmente indica um valor antigo ou importado. O agendador deve confirmar se a atividade ainda pertence ao plano, se as datas previstas precisam ser recalculadas e se a data prevista deve ser removida ou substituída de acordo com o procedimento de atualização do projeto.

Uma revisão prática no P6 deve incluir ID da atividade, nome da atividade, EAP, status da atividade, término esperado, início real, término real, duração restante, porcentagem concluída, início, término, folga total e calendário. A equipe deve priorizar atividades críticas e quase críticas, trabalho de transferência, marcos voltados para o cliente e atividades futuras no curto prazo.

Essa métrica também ajuda a revelar problemas de processo. Se o mesmo problema aparecer a cada atualização, a origem poderá ser um arquivo de importação, um modelo de planilha ou um fluxo de trabalho de relatório de campo. A equipe deve verificar se o término esperado está sendo carregado de outro sistema e se existem regras de validação antes que o cronograma seja calculado e emitido.

O limite alvo deve ser zero atividades não resolvidas. Isso não significa que toda atividade sinalizada seja um grande problema. Isso significa que cada atividade deve ser corrigida ou explicada. Um término esperado antes da data dos dados não deve permanecer no cronograma simplesmente porque ninguém olhou para ele.

Limpar essa métrica melhora a credibilidade do cronograma. Ele ajuda a equipe a manter um limite de atualização claro, distinguir o desempenho real do trabalho previsto e evitar resultados antecipados ou de folga enganosos. Nas revisões do PMO, isso também mostra que a atualização do cronograma não foi apenas calculada, mas também verificada quanto à consistência do status.
## Conteúdo relacionado
- [Conclusão Esperada Antes da Data Date no Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
