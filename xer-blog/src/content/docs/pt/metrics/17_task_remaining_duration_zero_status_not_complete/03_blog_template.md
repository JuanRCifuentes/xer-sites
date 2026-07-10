---
title: "A duração restante da tarefa é zero enquanto o status não está concluído"
seo_title: "A duração restante da tarefa é zero enquanto o status não está concluído - Primavera P6"
meta_description: "Veja por que A duração restante da tarefa é zero enquanto o status não está concluído afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "A duração restante da tarefa é zero enquanto o status não está concluído"
  - "Primavera P6 A duração restante da tarefa é zero enquanto o status não está concluído"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-task-remaining-duration-zero-status-not-complete-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que A duração restante da tarefa é zero enquanto o status não está concluído afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/17_task_remaining_duration_zero_status_not_complete/01_overview_template.md"
  - "06_metrics_pt/17_task_remaining_duration_zero_status_not_complete/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/17_task_remaining_duration_zero_status_not_complete/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# A duração restante da tarefa é zero enquanto o status não está concluído

A Duração Restante é um dos campos de status mais importantes em uma atualização do Primavera P6. Informa ao cronograma quanto tempo ainda é necessário para finalizar a atividade. Quando uma atividade de tarefa normal tem Duração Restante igual a 0, a mensagem é simples: não resta tempo para ser executada. Se a mesma tarefa não estiver marcada como Concluída, o cronograma contará duas histórias diferentes ao mesmo tempo.

Esta métrica identifica atividades de tarefa em que a Duração Restante é 0, mas o status da tarefa não é Concluído. É uma versão focada de uma verificação mais ampla da qualidade do status, porque é nas atividades das tarefas que essa inconsistência pode afetar diretamente os planos de trabalho, os relatórios de progresso, o valor agregado e as revisões antecipadas.

Para uma tarefa normal, zero duração restante geralmente significa que o trabalho está concluído. A atividade deve ter um término real, um status de concluído e valores de progresso que correspondam ao procedimento de atualização do projeto. Se a tarefa ainda estiver em andamento ou não iniciada, a duração restante normalmente deverá ser maior que 0 porque ainda é esperada alguma quantidade de trabalho.

Esse problema geralmente aparece durante ciclos de atualização intensos. Uma equipe de campo pode relatar que uma atividade foi efetivamente realizada, de modo que o agendador reduz a Duração Restante para 0, mas não informa o Término Real. Um arquivo de importação pode atualizar a Duração Restante sem atualizar o Status da Atividade. Uma atualização manual pode definir valores de progresso, mas deixar a atividade no status errado. O resultado é uma tarefa que parece concluída do ponto de vista da duração, mas incompleta do ponto de vista do status.

Essa inconsistência é importante. Uma tarefa sem duração restante pode parar de conduzir o trabalho futuro conforme esperado. Pode desaparecer da atenção antecipada, mesmo que não esteja formalmente completo. Pode distorcer o relatório do valor agregado se o progresso e a conclusão não estiverem alinhados. Também pode criar confusão durante as revisões do cliente ou do PMO porque o cronograma não consegue responder claramente se a tarefa foi concluída.

A revisão deve começar com um layout P6 simples. Inclui ID da atividade, nome da atividade, EAP, tipo de atividade, status da atividade, início real, término real, duração original, duração restante, duração na conclusão, tipo de porcentagem concluída, porcentagem de atividade concluída, início, término e folga total. Filtre as atividades de tarefa em que a Duração Restante é igual a 0 e o Status da Atividade não é Concluído.

Cada tarefa sinalizada deve ser revisada com o proprietário responsável. O trabalho está realmente concluído? Se sim, a tarefa normalmente deverá ser marcada como Concluída e receber o término real correto. O agendador também deve confirmar se a porcentagem concluída e a duração restante estão alinhadas com as regras de progresso do projeto.

Se o trabalho não for concluído, a correção é diferente. A tarefa deverá manter o status correto, como Em andamento ou Não iniciado, mas a Duração restante deverá ser restaurada para um valor válido. Esse valor deve refletir o trabalho restante na Data Date, e não uma data de término prevista ou uma preferência de relatório.

Considere uma tarefa chamada "Instalar dispositivos de alarme de incêndio". O relatório de campo diz que a instalação está quase concluída e o agendador define a Duração Restante como 0. Mas os testes revelaram que vários dispositivos ainda precisam de correção e a atividade não foi realmente concluída até a Data Date. Neste caso, a tarefa não deve permanecer com duração restante zero. O esforço restante deve ser estimado e inserido para que o cronograma continue prevendo o trabalho inacabado.

Agora considere uma tarefa chamada "Despejar laje de nível 3". A concretagem foi concluída antes da Data Date, mas a atividade ainda mostra Em Andamento e não tem Conclusão Real. Aqui a duração restante de 0 provavelmente está correta, mas a atualização de status está incompleta. O agendador deve inserir o término real e marcar a tarefa como concluída.

O limite alvo para esta métrica deve ser zero atividades de tarefas não resolvidas. A palavra não resolvido é importante. Alguns itens podem necessitar de confirmação em campo antes da correção, mas não devem permanecer sem explicação em um cronograma de relatório. Cada item deve ser corrigido, atribuído a um proprietário ou documentado se houver um motivo de atualização temporária.

Essa métrica também ajuda a melhorar a disciplina de atualização. Se o mesmo problema aparecer a cada ciclo, a equipe deverá revisar os mapeamentos de importação, atualizar formulários, instruções de relatórios de campo e verificações antes da emissão do cronograma. Os usuários podem definir a duração restante como 0 porque parece a maneira mais rápida de mostrar o progresso, sem concluir a atividade corretamente.

Limpar essa métrica torna o cronograma mais fácil de confiar. Ele alinha a duração restante, o status da atividade, as datas reais de término e os valores de progresso. Mais importante ainda, ajuda a equipe do projeto a tomar melhores decisões sobre qual trabalho está realmente concluído e qual trabalho ainda precisa de atenção.
## Conteúdo relacionado
- [A duração restante da tarefa é zero enquanto o status não está concluído - Visão geral](01_overview_template.md)
- [A duração restante da tarefa é zero enquanto o status não está concluído - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
