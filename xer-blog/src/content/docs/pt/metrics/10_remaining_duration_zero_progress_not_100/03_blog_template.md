---
title: "Atividades com duração restante 0 e progresso não 100%"
seo_title: "Atividades com duração restante 0 e progresso não 100% - Primavera P6"
meta_description: "Veja por que Atividades com duração restante 0 e progresso não 100% afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Atividades com duração restante 0 e progresso não 100%"
  - "Primavera P6 Atividades com duração restante 0 e progresso não 100%"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-remaining-duration-zero-progress-not-100-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Atividades com duração restante 0 e progresso não 100% afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/10_remaining_duration_zero_progress_not_100/01_overview_template.md"
  - "06_metrics_pt/10_remaining_duration_zero_progress_not_100/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/10_remaining_duration_zero_progress_not_100/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Atividades com duração restante 0 e progresso não 100%

## Título

Atividades com duração restante 0 e progresso não 100%

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que validam atualizações de progresso do Primavera P6.

## Gancho de abertura

Se uma atividade não tiver duração restante, normalmente deverá ser concluída. Quando a mesma atividade mostra progresso abaixo de 100%, o cronograma envia sinais confusos.

## Introdução

As atualizações de cronograma do Primavera P6 dependem de informações de status de limpeza. A Duração Restante informa ao cronograma quanto tempo ainda é necessário para concluir uma atividade. A porcentagem de progresso informa à equipe quanto trabalho foi realizado, com base no método de porcentagem concluída selecionado.

Quando a duração restante é igual a 0, mas o progresso não é 100%, esses dois sinais não coincidem. A atividade pode estar concluída, mas faltando uma conclusão real, ou ainda pode ter trabalho restante, mas foi atualizada incorretamente para zero duração restante.

Esta métrica identifica atividades com Duração Restante = 0 e progresso <> 100%. A meta é zero atividades não resolvidas.

## O que este parâmetro significa

Este parâmetro verifica a consistência entre o tempo restante e o progresso relatado. Se uma atividade não tiver duração restante, normalmente significa que a atividade não tem mais trabalho a realizar. Nesse caso, o progresso normalmente deverá ser de 100% e a atividade deverá ter o status de conclusão correto.

O resultado pode depender do tipo de porcentagem concluída da atividade. Porcentagem física concluída, Porcentagem de duração concluída e Porcentagem de unidades concluídas podem se comportar de maneira diferente. É por isso que a revisão deve considerar tanto a duração restante quanto o método de porcentagem concluída.

Um resultado alto sugere que o processo de atualização pode ter datas de término reais incompletas, durações restantes incorretas ou entrada de progresso inconsistente.

## Por que este assunto é importante

A consistência do status é importante porque os dados de progresso alimentam relatórios de cronograma, valor agregado, planejamento antecipado e decisões de gerenciamento.

Se uma actividade parecer não ter duração restante mas não estiver concluída, a previsão poderá subestimar o trabalho restante. Se uma atividade estiver realmente concluída, mas o progresso permanecer abaixo de 100%, os relatórios poderão subestimar o trabalho concluído.

Ambos os casos reduzem a confiança na atualização do cronograma.

## Causas comuns de maus resultados

- Conclusão real ausente nas atividades concluídas
- Duração restante definida como 0 por engano
- Porcentagem física concluída não atualizada
- Porcentagem completa Tipo mal compreendido
- Progresso importado de outro sistema sem validação
- Atividades marcadas como concluídas de forma inconsistente
- Processo de corte de atualização não seguido

## Como melhorar o resultado

### 1. Confirme se o trabalho está concluído

Comece verificando o status do campo. Se a atividade for concluída, confirme a data de término real e defina o progresso para 100% usando o procedimento de atualização do projeto.

Se o trabalho não for concluído, a atividade normalmente deverá ter Duração Restante maior que 0.

### 2. Revise o tipo de porcentagem concluída

Verifique se a atividade usa Percentagem Concluída Física, Duração ou Unidades. A correção deve corresponder ao método de controles do projeto.

Por exemplo, se a porcentagem física concluída for usada, o planejador poderá precisar atualizar o campo de progresso físico manualmente, mesmo quando a duração restante tiver atingido zero.

### 3. Corrija o status do cronograma

Para o trabalho concluído, insira o Término real e confirme se o progresso está em 100%. Para trabalho incompleto, restaure uma duração restante realista e atualize o progresso com base no método selecionado.

Após as correções, recalcule o cronograma e execute novamente a métrica.

## Cenário de exemplo

Uma atualização do cronograma mostra "Instalar bandejas de cabos" com duração restante = 0 e porcentagem física concluída = 85%. A atividade tem Início Real, mas não Término Real.

O agendador consulta o engenheiro de campo e descobre que a instalação não foi concluída. Uma equipe ainda precisa de três dias para terminar o trabalho da lista de pendências e o suporte final.

O agendador restaura a duração restante para três dias e mantém o percentual físico concluído em 85%. A atividade agora reflete tanto o trabalho concluído quanto o esforço restante.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e identifique as atividades afetadas.
- Dias 2 a 3: Confirme o status de conclusão com os proprietários responsáveis.
- Dias 4 a 5: Corrija o término real, a duração restante e os campos de progresso.
- Dia 6: Revise os relatórios e os resultados do valor agregado.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite assumir que a Duração Restante = 0 sempre significa que o trabalho está concluído. Confirme o status primeiro.

Evite alterar o progresso para 100% sem verificar se a atividade realmente foi concluída.

Evite ignorar o tipo de porcentagem completa. A correção errada pode criar novos problemas de relatórios.

## Principais conclusões

- Duração restante = 0 e progresso <> 100% é uma inconsistência de status.
- A meta é zero atividades não resolvidas.
- Verifique o término real, a duração restante e o tipo de porcentagem concluída juntos.
- O trabalho concluído deve ser encerrado corretamente.
- O trabalho incompleto deve manter uma duração restante realista.

## Conclusão

Essa métrica ajuda os agendadores a detectar um problema de atualização pequeno, mas importante. A questão não é apenas um número numa tela; afeta os relatórios de conclusão, a qualidade da previsão e a confiança na atualização.

O gerenciamento dessa métrica mantém o status da atividade limpo e torna os relatórios do Primavera P6 mais fáceis de confiar.

## Chamada para ação

Revise as atividades com duração restante = 0 e progresso diferente de 100% durante a próxima atualização do cronograma. Confirme se cada atividade foi concluída e corrija o Término Real, a Duração Restante ou o progresso conforme necessário.
## Conteúdo relacionado
- [Atividades com duração restante 0 e progresso não 100% - Visão geral](01_overview_template.md)
- [Atividades com duração restante 0 e progresso não 100% - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
