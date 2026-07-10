---
title: "Atividades iniciadas com 0% de progresso no Primavera P6"
seo_title: "Atividades iniciadas com 0% de progresso no Primavera P6"
meta_description: "Veja por que Atividades iniciadas com 0% de progresso no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Atividades iniciadas com 0% de progresso no Primavera P6"
  - "Primavera P6 Atividades iniciadas com 0% de progresso no Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-activity-started-progress-zero-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Atividades iniciadas com 0% de progresso no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/13_activity_started_progress_zero/01_overview_template.md"
  - "06_metrics_pt/13_activity_started_progress_zero/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/13_activity_started_progress_zero/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Atividades iniciadas com 0% de progresso no Primavera P6

## Título

Atividades iniciadas com 0% de progresso no Primavera P6

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que validam atualizações de progresso do Primavera P6.

## Gancho de abertura

Quando uma atividade é marcada como Iniciada, o cronograma indica que o trabalho real começou. Se o progresso ainda for de 0%, os revisores irão naturalmente perguntar o que realmente começou.

## Introdução

O status e o progresso da atividade devem contar uma história consistente. No Primavera P6, uma atividade Iniciada normalmente tem uma data de Início Real e algum progresso relatado.

Quando uma atividade é iniciada, mas o progresso permanece em 0%, a atualização do cronograma pode estar incompleta. O início real pode estar errado, o progresso pode não ter sido inserido ou o tipo de porcentagem concluída pode não corresponder à forma como o progresso está sendo medido.

Esta métrica identifica atividades com Status da atividade = Iniciada e progresso = 0%. A meta é zero atividades não resolvidas.

## O que este parâmetro significa

Este parâmetro verifica se uma atividade iniciada obteve ou registrou algum progresso. Se o trabalho realmente for iniciado, a equipe do projeto normalmente deverá ser capaz de relatar algum progresso mensurável.

A revisão deverá considerar o Tipo de Percentual Concluído da atividade. Porcentagem física concluída, Porcentagem de duração concluída e Porcentagem de unidades concluídas podem exigir campos de atualização diferentes.

Um resultado alto sugere uma disciplina de atualização fraca, falta de quantidades de progresso, problemas de status importado ou atividades marcadas como iniciadas antes do início do trabalho real.

## Por que este assunto é importante

Atividades iniciadas com 0% de progresso podem reduzir a confiança na atualização. Eles não deixam claro se o trabalho realmente começou ou se a atividade foi iniciada administrativamente.

Isso afeta relatórios de progresso, valor agregado, planejamento antecipado e revisão do PMO. Também pode criar confusão quando as equipes comparam os relatórios de campo com o cronograma P6.

## Causas comuns de maus resultados

- Início real inserido antes do trabalho realmente começar
- O valor do progresso não é atualizado após o início do trabalho
- Porcentagem física concluída deixada em 0
- Duração ou progresso das unidades não calculado conforme esperado
- Dados de status importados sem valores de progresso correspondentes
- Equipes diferentes usando definições diferentes de início
- O trabalho começou perto do limite da atualização, sem progresso mensurável ainda

## Como melhorar o resultado

### 1. Confirme se o trabalho realmente começou

Verifique o relatório de campo, atualização da disciplina ou confirmação do proprietário responsável. Se o trabalho não tiver sido realmente iniciado, remova o Início Real e retorne a atividade para Não Iniciado.

O Início Real deve representar o início real do trabalho, e não a intenção de começar em breve.

### 2. Atualize o campo de progresso correto

Se o trabalho foi iniciado, identifique o tipo de porcentagem concluída da atividade. Em seguida, atualize o campo de progresso correto.

Para Porcentagem física concluída, insira o progresso físico medido. Para a porcentagem de duração concluída, confirme se a duração restante reflete o trabalho realizado. Para Porcentagem de unidades concluídas, confirme se as unidades reais ou se o progresso dos recursos está atualizado.

### 3. Documente exceções raras

Às vezes, uma atividade começa logo antes do término da atualização e nenhum progresso mensurável foi obtido ainda. Se o projeto permitir isso, documente o motivo e faça o acompanhamento na próxima atualização.

Essas exceções devem ser raras. Se muitas atividades forem iniciadas com 0% de progresso, o processo de atualização precisa de revisão.

## Cenário de exemplo

Uma atualização de cronograma mostra "Instalar luminárias" como Iniciado com início real inserido, mas a porcentagem física concluída é 0%.

O programador verifica com o condutor elétrico e descobre que a equipe mobilizou materiais, mas não instalou nenhum equipamento antes da Data Date. A atividade foi marcada como iniciada muito cedo.

O agendador remove o Início Real e mantém a atividade Não Iniciada. Uma atividade separada de mobilização ou preparação de materiais pode ser adicionada se esse trabalho precisar ser monitorado.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e identifique as atividades afetadas.
- Dias 2-3: Confirme o status de início real com os proprietários responsáveis.
- Dias 4 a 5: Corrija o Início Real, valores de progresso ou exceções.
- Dia 6: Revise os relatórios de progresso e os resultados de valor agregado.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite marcar atividades como iniciadas antes do início do trabalho real.

Evite atualizar o Actual Start sem atualizar o campo de progresso relevante.

Evite ignorar o tipo de porcentagem completa. O progresso pode ser armazenado em um campo diferente do esperado.

## Principais conclusões

- O status iniciado com 0% de progresso é um problema de consistência de status.
- A meta é zero atividades não resolvidas.
- Confirme se o trabalho realmente começou antes de alterar o progresso.
- Atualize o campo de progresso correto com base no tipo de porcentagem concluída.
- Exceções raras devem ser documentadas e acompanhadas.

## Conclusão

Essa métrica ajuda os agendadores a manter o status e o progresso alinhados. Uma actividade iniciada deve contar uma história clara sobre o trabalho iniciado e o progresso alcançado.

O gerenciamento dessa métrica melhora os relatórios de progresso, a confiança no valor agregado e a confiabilidade das atualizações do Primavera P6.

## Chamada para ação

Revise as atividades marcadas como Iniciadas com 0% de progresso durante a próxima atualização do cronograma. Confirme se o trabalho realmente foi iniciado e corrija o Início Real, o progresso ou a documentação antes de emitir relatórios.
## Conteúdo relacionado
- [Atividades iniciadas com 0% de progresso no Primavera P6 - Visão geral](01_overview_template.md)
- [Atividades iniciadas com 0% de progresso no Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
