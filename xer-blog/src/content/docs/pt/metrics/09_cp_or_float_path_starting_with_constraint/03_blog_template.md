---
title: "Caminho crítico ou caminho de folga começando com uma restrição"
seo_title: "Caminho crítico ou caminho de folga começando com uma restrição - Primavera P6"
meta_description: "Veja por que Caminho crítico ou caminho de folga começando com uma restrição afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Caminho crítico ou caminho de folga começando com uma restrição"
  - "Primavera P6 Caminho crítico ou caminho de folga começando com uma restrição"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-cp-or-float-path-starting-with-constraint-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Caminho crítico ou caminho de folga começando com uma restrição afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/09_cp_or_float_path_starting_with_constraint/01_overview_template.md"
  - "06_metrics_pt/09_cp_or_float_path_starting_with_constraint/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/09_cp_or_float_path_starting_with_constraint/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Caminho crítico ou caminho de folga começando com uma restrição

## Título

Caminho crítico ou caminho de folga começando com uma restrição

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para programadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que avaliam o caminho crítico e a qualidade do caminho de folga do Primavera P6.

## Gancho de abertura

Um caminho crítico deve contar a história da obra. Se o caminho começa com uma restrição, pode estar contando a história de uma data imposta.

## Introdução

No Primavera P6, as restrições podem ser úteis quando uma data é exigida externamente. Um marco de início do projeto, aviso para prosseguir, liberação de licença ou data de acesso do proprietário podem ser legítimos.

O problema aparece quando um caminho crítico ou caminho de folga começa com uma atividade restrita que não é o início do projeto aprovado. Nesse caso, o caminho pode ser conduzido por um controle de data e não pela lógica predecessora.

Esta métrica identifica cadeias de caminho crítico ou de caminho de folga que começam com uma atividade restrita, excluindo o início do projeto aprovado. O alvo é zero caminhos não resolvidos.

## O que este parâmetro significa

Este parâmetro verifica a primeira atividade em um caminho crítico ou caminho de folga selecionado. Se essa primeira atividade tiver uma restrição, o revisor deverá perguntar se o caminho é verdadeiramente orientado pela lógica.

O início do projeto aprovado é geralmente uma exceção válida. Todo projeto precisa de um ponto de partida. Mas um caminho restrito iniciado a jusante no cronograma pode indicar lógica ausente, datas forçadas ou um requisito externo que precisa de documentação.

Um resultado alto sugere que os caminhos principais podem ser controlados por restrições e não pela lógica CPM. Um resultado baixo sugere que o início do caminho é melhor suportado pelo sequenciamento real.

## Por que este assunto é importante

As revisões do caminho crítico e do caminho de folga são usadas para previsão, relatórios de PMO e análise de atraso. Se um caminho começa com uma restrição desnecessária, o caminho pode não explicar o que realmente está motivando o trabalho.

Isso pode distorcer a folga, ocultar a lógica do antecessor ausente e tornar o cronograma mais difícil de defender. Também pode criar confusão quando diferentes revisores tentam entender por que um marco é crítico.

## Causas comuns de maus resultados

- Restrições herdadas de linhas de base antigas
- Restrições usadas para forçar datas previstas
- Predecessor ou lógica de interface ausente
- Acesso externo, licença ou datas do proprietário não documentadas
- Planos de recuperação que deixam restrições temporárias
- Confusão entre restrições de início de projeto e restrições posteriores

## Como melhorar o resultado

### 1. Confirme o início do caminho

Execute o relatório de caminho crítico ou caminho de folga e identifique a primeira atividade em cada caminho. Verifique se essa atividade possui uma restrição primária, uma data de restrição, uma data esperada ou outro controle de data.

Se a atividade restrita for o início do projeto aprovado, documente-a como uma exceção válida.

### 2. Revise a base de restrição

Para inícios de caminho restrito downstream, pergunte quem solicitou a data e por quê. Os motivos válidos podem incluir aviso para prosseguir, acesso do cliente, liberação de licença, ponto de espera regulatório ou interface contratual.

Se não houver uma razão externa clara, a restrição deve ser contestada.

### 3. Restaurar o sequenciamento baseado em lógica

Se a lógica predecessora estiver faltando, adicione uma lógica válida que reflita a dependência real. Se a restrição for desnecessária, remova-a e recalcule o cronograma.

Após o recálculo, revise se o caminho crítico ou o caminho de folga foram alterados. Uma mudança significativa pode revelar que o caminho anterior era orientado por datas e não por lógica.

## Cenário de exemplo

Um cronograma do projeto mostra o caminho crítico começando com “Iniciar instalação do equipamento”. A atividade tem uma restrição Iniciar em ou Após, mas não é o início do projeto.

Durante a revisão, o planejador descobre que a restrição foi adicionada durante um plano de recuperação para forçar a sequência de instalação em uma janela de destino. Faltava a verdadeira lógica antecessora de entrega de material e transferência de área.

O agendador remove a restrição, adiciona a lógica de entrega e transferência ausente e recalcula o cronograma. O caminho crítico muda, mas agora explica os verdadeiros impulsionadores do trabalho.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e identifique atividades restritas de início do caminho.
- Dias 2-3: Confirmar as exceções de início do projeto e a base de restrições externas.
- Dias 4 a 5: Remova restrições desnecessárias e adicione lógica ausente.
- Dia 6: Revise o movimento do caminho e documente as exceções aprovadas.
- Dia 7: Reavalie a métrica e compare o resultado com o limite.

## Erros a evitar

Evite assumir que todo início de caminho restrito é válido. O início do projecto pode ser válido, mas as restrições a jusante necessitam de revisão.

Evite remover restrições sem compreender sua origem. Algumas restrições refletem requisitos contratuais ou externos reais.

Evite aceitar um caminho crítico sem verificar se ele é orientado pela lógica.

## Principais conclusões

- Um caminho crítico ou de folga geralmente deve começar pela lógica, não por uma restrição desnecessária.
- O início do projeto aprovado é uma exceção válida.
- Inícios de caminho restrito downstream podem indicar lógica ausente ou datas forçadas.
- O alvo é zero caminhos não resolvidos.
- As restrições externas válidas devem ser documentadas.

## Conclusão

Essa métrica ajuda os agendadores e revisores a testar se os caminhos principais são orientados pela lógica. As restrições nem sempre estão erradas, mas devem ser justificadas quando iniciam um caminho crítico ou de folga.

O gerenciamento dessa métrica melhora a credibilidade do caminho, a confiabilidade da folga e a confiança nos relatórios do PMO e na análise de atrasos.

## Chamada para ação

Revise a primeira atividade em cada caminho crítico ou caminho de folga em sua próxima atualização do Primavera P6. Se o caminho começar com uma restrição, confirme se é o início aprovado do projeto, um requisito externo válido ou um problema que precisa de correção.
## Conteúdo relacionado
- [Caminho crítico ou caminho de folga começando com uma restrição - Visão geral](01_overview_template.md)
- [Caminho crítico ou caminho de folga começando com uma restrição - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
