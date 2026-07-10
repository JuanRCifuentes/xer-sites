---
title: "Relacionamentos FF com atraso maior que a duração do sucessor"
seoTitle: "Relacionamentos FF com atraso maior que a duração do sucessor - Primavera P6"
description: "Veja por que Relacionamentos FF com atraso maior que a duração do sucessor afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Relacionamentos FF com atraso maior que a duração do sucessor"
  - "Primavera P6 Relacionamentos FF com atraso maior que a duração do sucessor"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/ff-lag-greater-than-successor-duration-primavera-p6"
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
primarySearchIntent: "Veja por que Relacionamentos FF com atraso maior que a duração do sucessor afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
relatedMetrics:
  - "06_metrics_pt/05_ff_lag_greater_than_successor_duration/02_guide_template.md"
relatedBlogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/05_ff_lag_greater_than_successor_duration/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Relacionamentos FF com atraso maior que a duração do sucessor

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que avaliam a lógica de cronograma do Primavera P6.

## Gancho de abertura

Um relacionamento Término a Término normalmente deve descrever duas atividades cujas datas de término precisam ser vinculadas. Mas quando o atraso do FF é maior que a duração do sucessor, o relacionamento pode estar escondendo mais do que explica.

## Introdução

No Primavera P6, a lógica FF é frequentemente usada quando duas atividades podem se sobrepor, mas a sucessora não pode terminar até que a predecessora termine. Um pequeno atraso de FF pode ser útil quando um curto fechamento, revisão ou deslocamento de transferência for necessário.

O problema aparece quando o atraso do FF é maior que a duração do sucessor. Se o sucessor durar cinco dias e o atraso do FF for de dez dias, o deslocamento final será maior que a atividade que está sendo controlada. Isso pode significar que o agendamento está ocultando um período de espera, uma atividade ausente ou um tipo de dependência diferente.

Esta métrica identifica relacionamentos FF onde o atraso é maior que a duração do sucessor. O alvo é zero relacionamentos não resolvidos.

## O que este parâmetro significa

Este parâmetro verifica se um relacionamento FF está sendo usado de uma forma que ainda faça sentido lógico. A lógica FF conecta o final do antecessor ao final do sucessor. Quando o atraso excede a duração do sucessor, o relacionamento pode forçar o término do sucessor de uma forma que é difícil de entender apenas pela lista de atividades.

Isso não significa automaticamente que o relacionamento esteja errado, mas significa que o relacionamento precisa ser revisto. A dependência pode ser melhor representada como lógica FS, lógica SS ou uma atividade separada que mostra claramente o período de espera.

Um resultado alto sugere que o cronograma pode estar usando um longo atraso para ocultar trabalho, períodos de espera ou sequência pouco clara. Um resultado baixo sugere que a lógica e o atraso do FF estão sendo usados ​​com mais cuidado.

## Por que este assunto é importante

Um longo atraso pode dificultar a compreensão de um cronograma. Esconde o tempo dentro de um relacionamento em vez de mostrar o trabalho ou o período de espera como parte da rede de atividades.

Isso pode afetar a folga, a visibilidade do caminho crítico, a revisão do caminho mais longo e atrasar a prontidão da análise. Se um revisor não consegue entender fácilmente por que um sucessor termina naquele momento, o cronograma se torna mais difícil de defender.

## Causas comuns de maus resultados

- Relacionamentos FF copiados de programações mais antigas
- Atrasos usados ​​como espaços reservados durante o planejamento inicial
- Períodos de espera ocultos no atraso do relacionamento
- Lógica FS ou SS modelada incorretamente como FF mais atraso
- Diferenças de calendário que tornam o atraso mais difícil de interpretar
- Períodos de revisão, aprovação, comissionamento ou transferência não modelados como atividades

## Como melhorar o resultado

### 1. Revise a intenção de relacionamento

Filtre os relacionamentos FF em que o atraso é maior que a duração do sucessor. Revise o antecessor, sucessor, atraso, calendários, duração, status e folga total.

Pergunte o que o relacionamento pretende representar. Se o sucessor depender da conclusão do antecessor antes de poder começar, o relacionamento poderá ser mais claro como a lógica FS. Se o sucessor puder começar após o início do trabalho upstream, a lógica SS poderá ser mais apropriada.

### 2. Substitua a lógica FF fraca

Use FS quando o sucessor não puder iniciar até que o antecessor termine. Use SS quando o sucessor puder iniciar após o antecessor iniciar ou atingir um ponto de progresso definido.

Se o atraso representar um período de espera real, considere se esse período de espera deve ser modelado como uma atividade separada. Isso geralmente fica mais claro para revisões, atualizações de progresso e análises de atrasos.

### 3. Documentar exceções válidas

Alguns atrasos longos no FF podem ser intencionais. Se o relacionamento for válido, documente o motivo e confirme o calendário de atrasos. A explicação deve ser clara o suficiente para que um revisor do PMO ou líder de controle do projeto entenda sem adivinhar.

## Cenário de exemplo

Um cronograma inclui um relacionamento FF de "Instalação completa" até "Pacote de encerramento aprovado" com um intervalo de quinze dias. A atividade de encerramento do pacote tem duração de cinco dias.

Isso significa que o término do pacote de encerramento é atrasado mais tempo do que a própria duração do sucessor. A lógica pode estar tentando representar o tempo de revisão ou aprovação que não é visível como uma atividade.

O agendador revisa a sequência e substitui o longo atraso por uma atividade separada "Revisão do pacote de encerramento pelo cliente". O cronograma agora mostra o real período de espera, tornando a lógica mais fácil de atualizar e defender.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e identifique os relacionamentos afetados.
- Dias 2-3: Revise primeiro os relacionamentos críticos e quase críticos.
- Dias 4 a 5: Substitua a lógica FF fraca, reduza o atraso injustificado ou modele períodos de espera ocultos.
- Dia 6: Confirme as exceções e revise a movimentação do cronograma.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite tratar todos os atrasos como errados. O atraso pode ser útil quando representa um deslocamento real e limitado.

Evite deixar um longo atraso sem explicação. Se o atraso for maior que a duração do sucessor, merece um motivo claro.

Evite ocultar o trabalho dentro do lag quando o trabalho deveria estar visível como uma atividade.

## Principais conclusões

- A lógica FF deve representar uma dependência baseada no acabamento.
- O atraso maior que a duração do sucessor geralmente sinaliza uma lógica fraca ou pouco clara.
- FS, SS ou uma atividade separada podem explicar melhor a dependência.
- O alvo é zero relacionamentos não resolvidos.
- Exceções válidas devem ser documentadas.

## Conclusão

Essa métrica ajuda os agendadores a encontrar relacionamentos FF onde o atraso pode estar ocultando a dependência real. O objetivo não é remover todo o atraso do FF, mas garantir que o atraso seja razoável, visível e defensável.

A revisão dessa métrica melhora a clareza do CPM, a confiabilidade da folga e a confiança no caminho mais longo. Também ajuda os revisores do PMO a separar a lógica de conclusão útil dos atalhos de cronograma.

## Chamada para ação

Revise os relacionamentos FF onde o atraso é maior que a duração do sucessor em sua próxima atualização de cronograma do Primavera P6. Para cada um, pergunte se o relacionamento é realmente baseado no acabamento. Caso contrário, substitua-o por uma lógica mais clara ou modele diretamente o período de espera.
## Conteúdo relacionado
- [Relacionamentos FF com atraso maior que a duração do sucessor - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
