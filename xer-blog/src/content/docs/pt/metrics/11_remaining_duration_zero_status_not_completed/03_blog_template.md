---
title: "Atividades com Duração Restante 0 e Status Não Concluído"
seo_title: "Atividades com Duração Restante 0 e Status Não Concluído - Primavera P6"
meta_description: "Veja por que Atividades com Duração Restante 0 e Status Não Concluído afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Atividades com Duração Restante 0 e Status Não Concluído"
  - "Primavera P6 Atividades com Duração Restante 0 e Status Não Concluído"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-remaining-duration-zero-status-not-completed-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Atividades com Duração Restante 0 e Status Não Concluído afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/11_remaining_duration_zero_status_not_completed/01_overview_template.md"
  - "06_metrics_pt/11_remaining_duration_zero_status_not_completed/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/11_remaining_duration_zero_status_not_completed/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Atividades com Duração Restante 0 e Status Não Concluído

## Título

Atividades com Duração Restante 0 e Status Não Concluído

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que validam atualizações de progresso do Primavera P6.

## Gancho de abertura

Quando uma atividade não tem duração restante, o cronograma indica que não há tempo para terminá-la. Se a mesma atividade não estiver marcada como Concluída, a atualização precisa de atenção.

## Introdução

As atualizações de cronograma do Primavera P6 dependem de dados de status consistentes. A Duração Restante mostra quanto tempo ainda é necessário para concluir uma atividade. O Status da Atividade mostra se a atividade está Não Iniciada, Em Andamento ou Concluída.

Quando a Duração Restante for igual a 0, mas o status não for Concluído, esses campos não coincidem. A atividade pode ter sido concluída, mas falta uma conclusão real, ou ainda pode ter trabalho restante, mas foi atualizada incorretamente para zero duração restante.

Esta métrica identifica atividades com Duração Restante = 0 e Status da Atividade <> Concluída. A meta é zero atividades não resolvidas.

## O que este parâmetro significa

Este parâmetro verifica se o tempo restante de uma atividade corresponde ao seu status de conclusão. Se não houver duração restante, a atividade normalmente deverá ser concluída e ter uma data de Término Real.

Se a atividade ainda estiver em andamento, normalmente deverá ter alguma duração restante, a menos que o trabalho esteja sendo encerrado na mesma atualização. Se não for iniciado, a duração restante de 0 geralmente é um claro problema de status.

Um resultado alto sugere que o processo de atualização pode ter conclusões reais ausentes, durações restantes incorretas, problemas de status importados ou atualizações manuais inconsistentes.

## Por que este assunto é importante

A consistência do status afeta relatórios de cronograma, planejamento antecipado, valor agregado, curvas de progresso e decisões gerenciais.

Se as atividades não tiverem duração restante, mas não forem concluídas, o cronograma poderá subestimar o trabalho restante ou não conseguir encerrar adequadamente o trabalho concluído. De qualquer forma, a atualização se torna menos confiável.

Isto é especialmente importante antes de emitir relatórios para clientes, equipes de PMO ou liderança de projeto.

## Causas comuns de maus resultados

- Conclusão real ausente nas atividades concluídas
- Duração restante definida como 0 por engano
- Status da atividade não alterado para Concluído
- Progresso importado de outro sistema sem validação
- Fluxo de trabalho de atualização manual não concluído
- Marcos ou tipos de atividades especiais não revisados ​​cuidadosamente
- Processo de corte de atualização não seguido

## Como melhorar o resultado

### 1. Confirme o status real da atividade

Comece confirmando se o trabalho está realmente concluído. Use relatórios de campo, atualizações disciplinares, registros de inspeção ou confirmação do proprietário do pacote.

Se o trabalho for concluído, a atividade deverá ser encerrada corretamente. Se o trabalho não for concluído, a Duração Restante deverá ser restaurada.

### 2. Atividades concluídas corretas

Para trabalho concluído, insira a data de término real e marque a atividade como concluída. Confirme se os valores de progresso e a duração restante estão alinhados com o procedimento de atualização do projeto.

Isso mantém consistentes as listas de atividades concluídas, os relatórios de progresso e os resultados de valor agregado.

### 3. Corrija atividades incompletas

Para trabalhos incompletos, restaure uma Duração Restante realista. Mantenha a atividade como Em andamento ou Não iniciada dependendo do status real.

Após as correções, recalcule o cronograma e execute novamente a métrica para confirmar que a inconsistência foi resolvida.

## Cenário de exemplo

Uma atualização de agendamento mostra "Fiação completa do painel" com Duração restante = 0, mas o status da atividade ainda está em andamento. A atividade tem Início Real, mas não Término Real.

O agendador verifica com o cabo elétrico e confirma o trabalho concluído dois dias antes da Data Date. A atualização foi incompleta porque a duração restante foi reduzida a zero, mas o Término Real não foi inserido.

O agendador insere o Término Real e marca a atividade como Concluída. A atividade agora corresponde ao status do campo e os relatórios de progresso estão mais limpos.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e identifique as atividades afetadas.
- Dias 2 a 3: Confirme o status de conclusão com os proprietários responsáveis.
- Dias 4 a 5: Corrija o término real, o status da atividade ou a duração restante.
- Dia 6: Revise os relatórios e os resultados do valor agregado.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite assumir que Duração Restante = 0 sempre significa que a atividade está concluída. Confirme primeiro o status do campo.

Evite marcar atividades como Concluídas sem uma data de término real precisa.

Evite restaurar a Duração Restante sem verificar se a atividade foi realmente finalizada.

## Principais conclusões

- Duração restante = 0 e status <> Concluído é uma inconsistência de status.
- A meta é zero atividades não resolvidas.
- O trabalho concluído deve ter o status Real Finish e Completed.
- O trabalho incompleto deve manter uma duração restante realista.
- As importações de atualizações e os fluxos de trabalho manuais devem ser validados.

## Conclusão

Essa métrica ajuda a detectar um problema comum de qualidade de atualização. Ele mantém o trabalho restante, as datas reais e o status da atividade alinhados para que o cronograma conte uma história consistente.

O gerenciamento dessa métrica melhora a precisão dos relatórios, a confiança no progresso e a confiabilidade das atualizações de cronograma do Primavera P6.

## Chamada para ação

Revise as atividades com Duração Restante = 0 e status não Concluído durante a próxima atualização do cronograma. Confirme o status real de cada atividade e corrija o Término Real, o Status da Atividade ou a Duração Restante antes de emitir relatórios.
## Conteúdo relacionado
- [Atividades com Duração Restante 0 e Status Não Concluído - Visão geral](01_overview_template.md)
- [Atividades com Duração Restante 0 e Status Não Concluído - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
