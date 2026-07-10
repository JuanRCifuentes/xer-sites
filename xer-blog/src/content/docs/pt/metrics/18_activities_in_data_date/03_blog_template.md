---
title: "Atividades na Data de Dados"
seo_title: "Atividades na Data de Dados"
meta_description: "Veja por que Atividades na Data de Dados"
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Atividades na Data de Dados"
  - "Primavera P6 Atividades na Data de Dados"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-activities-on-the-data-date-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Atividades na Data de Dados: Verificações de Início Antecipado e Finalização Antecipada no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/18_activities_in_data_date/01_overview_template.md"
  - "06_metrics_pt/18_activities_in_data_date/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/18_activities_in_data_date/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Atividades na Data de Dados

A data dos dados é uma das datas mais importantes no cronograma do Primavera P6. Ele marca a fronteira entre o desempenho real e a previsão futura. O trabalho antes da Data Date deve ser status. O trabalho após a data dos dados deve ser previsto. Quando muitas atividades têm Início Antecipado ou Término Antecipado exatamente na Data Date, o cronograma merece uma análise mais detalhada.

Esta métrica verifica atividades em que Início Antecipado é igual à Data Date ou Término Antecipado é igual à Data Date. O objetivo não é dizer que todas as atividades no Data Date estão erradas. Algum trabalho pode começar ou terminar legitimamente no limite da atualização. O objetivo é identificar o agrupamento na fronteira e confirmar se cada atividade tem uma razão válida para estar ali.

O início antecipado na data dos dados pode ser razoável quando o trabalho de curto prazo estiver pronto para começar após a conclusão dos antecessores. Também pode ser um sinal de alerta. As atividades podem estar na Data de Dados porque têm lógica predecessora ausente, lógica não orientadora, restrições, datas esperadas ou atualizações de status incompletas. Se muitas atividades não iniciadas estiverem na Data de Dados, o cronograma pode estar implicando que o trabalho está pronto para começar mesmo quando as condições exigidas não tiverem sido modeladas.

O término antecipado na data dos dados também pode contar duas histórias diferentes. Pode mostrar um trabalho previsto corretamente para terminar no limite de atualização. Mas também pode indicar que o progresso não foi totalmente atualizado. Se o trabalho realmente foi concluído antes ou na Data Date, a atividade poderá precisar de um Término Real. Se o trabalho não for concluído, a Duração Restante e o término previsto poderão precisar ser atualizados.

A revisão prática começa com um layout P6 simples. Inclui ID da atividade, nome da atividade, EAP, status da atividade, início antecipado, término antecipado, início, término, início real, término real, duração restante, folga total, calendário, restrições, predecessores e sucessores. Em seguida, filtre por Início Antecipado igual à Data Date e Término Antecipado igual à Data Date.

A primeira questão é o status. A atividade está concluída, em andamento ou não foi iniciada? Se as datas reais ou a duração restante estiverem erradas, corrija o status antes de alterar a lógica. Um cronograma com dados de status insatisfatórios não pode produzir datas de previsão confiáveis.

A segunda questão é lógica. A atividade está sendo direcionada para a Data Date por relacionamentos válidos de antecessor e sucessor? Se não tiver antecessor, lógica fraca ou relacionamentos não direcionais, a Data de Dados pode estar mascarando um início ou um final aberto. A solução deveria ser adicionar ou corrigir a lógica real do cronograma, e não mover a atividade manualmente.

A terceira questão é se as restrições, as datas esperadas ou os calendários estão afetando o resultado. Uma restrição de início, uma restrição de término, uma data esperada obsoleta ou um calendário incomum podem puxar uma atividade para o limite de atualização. Algumas delas podem ser válidas, mas devem ser intencionais e documentadas.

Considere um projeto com data de dados de 30 de abril. Um grupo de atividades elétricas mostra início antecipado em 30 de abril. Se a obra antecessora foi concluída e a área liberada, isso pode ser válido. Mas se várias dessas atividades não têm antecessores ou são controladas por restrições, o cronograma não mostra um verdadeiro plano orientado pela lógica.

Agora considere uma atividade com conclusão antecipada em 30 de abril e status Em andamento. Se o trabalho foi concluído até o limite da atualização, o agendador deverá inserir o Término Real e marcar a atividade como concluída. Se o trabalho ainda tiver vários dias restantes, a Duração Restante deverá ser atualizada para que o término da previsão ultrapasse a Data Date.

O limite alvo para esta métrica deve ser zero atividades inexplicáveis. Essa redação é importante. O objetivo não é eliminar todas as atividades na Data Date. O objetivo é garantir que cada um seja explicado pelo status atual, pela lógica válida ou por uma exceção aprovada.

Essa métrica é especialmente útil durante revisões de atualizações. Depois que a Data Date avança, as atividades podem ser coletadas no limite se o cronograma não estiver totalmente status ou se a lógica estiver fraca. Um conjunto de atividades no Data Date costuma ser um sintoma de pressão de atualização, lógica copiada, inícios abertos, restrições ou feedback de campo incompleto.

A limpeza desta métrica melhora a credibilidade da previsão de curto prazo. Ele ajuda as equipes de projeto a distinguir o trabalho que está realmente pronto do trabalho que simplesmente foi transferido para a data de atualização atual. Para relatórios do PMO e do cliente, também mostra que a Data Date foi tratada como um limite de status real, e não apenas uma data usada para recalcular o arquivo.
## Conteúdo relacionado
- [Atividades na Data de Dados: Verificações de Início Antecipado e Finalização Antecipada no Primavera P6 - Visão geral](01_overview_template.md)
- [Atividades na Data de Dados: Verificações de Início Antecipado e Finalização Antecipada no Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
