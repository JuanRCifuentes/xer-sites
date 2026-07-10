---
title: "Relacionamentos SS com atraso maior que a duração do antecessor"
seoTitle: "Relacionamentos SS com atraso maior que a duração do antecessor - Primavera P6"
description: "Veja por que Relacionamentos SS com atraso maior que a duração do antecessor afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Relacionamentos SS com atraso maior que a duração do antecessor"
  - "Primavera P6 Relacionamentos SS com atraso maior que a duração do antecessor"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/ss-lag-greater-than-predecessor-duration-primavera-p6"
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
primarySearchIntent: "Veja por que Relacionamentos SS com atraso maior que a duração do antecessor afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
relatedMetrics:
  - "06_metrics_pt/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
relatedBlogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Relacionamentos SS com atraso maior que a duração do antecessor

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que avaliam a lógica de cronograma do Primavera P6.

## Gancho de abertura

Um relacionamento Início para Início normalmente deve descrever o trabalho que pode começar após o início de outra atividade. Mas quando o atraso SS é maior que a duração do antecessor, a lógica começa a contar uma história diferente.

## Introdução

No Primavera P6, o lag é frequentemente usado para representar um período de espera entre duas atividades. Um pequeno atraso de SS pode ser útil quando o trabalho começa após um progresso definido. Por exemplo, as equipes de acabamento podem começar dois dias após o início da instalação.

O problema aparece quando o atraso SS é maior que a duração do antecessor. Se o antecessor durar cinco dias e o atraso do SS for de dez dias, o sucessor não está realmente iniciando porque o antecessor iniciou. Ele está iniciando após um atraso que vai além do término do antecessor.

Esta métrica identifica relacionamentos SS onde o atraso é maior que a duração do antecessor. O alvo é zero relacionamentos não resolvidos.

## O que este parâmetro significa

Este parâmetro verifica se um relacionamento SS está sendo usado de uma forma que ainda faça sentido lógico. A lógica SS conecta o início do antecessor ao início do sucessor. Quando o atraso excede a duração do antecessor, o início do sucessor é empurrado para além do término do antecessor.

Isso não significa automaticamente que o relacionamento esteja errado, mas significa que o relacionamento precisa ser revisto. A dependência pode ser melhor representada como lógica FS, lógica FF ou uma atividade separada que mostre claramente o período de espera.

Um resultado alto sugere que o cronograma pode estar usando um longo atraso para ocultar trabalho, períodos de espera ou dependências baseadas no término. Um resultado baixo sugere que a lógica e o atraso SS estão sendo usados ​​com mais cuidado.

## Por que este assunto é importante

Um longo atraso pode dificultar a compreensão de um cronograma. Esconde o tempo dentro de um relacionamento em vez de mostrar o trabalho ou o período de espera como parte da rede de atividades.

Isso pode afetar a folga, a visibilidade do caminho crítico, a revisão do caminho mais longo e atrasar a prontidão da análise. Se um revisor não consegue entender fácilmente por que um sucessor começa naquele momento, o cronograma se torna mais difícil de defender.

## Causas comuns de maus resultados

- Relacionamentos SS copiados de programações mais antigas
- Atrasos usados ​​como espaços reservados durante o planejamento inicial
- Períodos de espera ocultos no atraso do relacionamento
- Lógica FS ou FF modelada incorretamente como SS mais lag
- Diferenças de calendário que tornam o atraso mais difícil de interpretar
- Períodos de aquisição, cura, aprovação ou acesso não modelados como atividades

## Como melhorar o resultado

### 1. Revise a intenção de relacionamento

Filtre os relacionamentos SS em que o atraso é maior que a duração do antecessor. Revise o antecessor, sucessor, atraso, calendários, duração, status e folga total.

Pergunte o que o relacionamento pretende representar. Se o sucessor depende da conclusão do antecessor, o relacionamento provavelmente não é uma verdadeira dependência de SS.

### 2. Substitua a lógica SS fraca

Use FS quando o sucessor não puder iniciar até que o antecessor termine. Use FF quando ambas as atividades puderem se sobrepor, mas a sucessora não puder terminar até que a predecessora termine.

Se o atraso representar um período de espera real, considere se esse período de espera deve ser modelado como uma atividade separada. Isso geralmente fica mais claro para revisões, atualizações de progresso e análises de atrasos.

### 3. Documentar exceções válidas

Algumas defasagens longas de SS podem ser intencionais. Se o relacionamento for válido, documente o motivo e confirme o calendário de atrasos. A explicação deve ser clara o suficiente para que um revisor do PMO ou líder de controle do projeto entenda sem adivinhar.

## Cenário de exemplo

Um cronograma inclui uma relação SS de “Instalar fôrma” até “Despejar concreto” com um atraso de dez dias. A atividade de cofragem tem a duração de cinco dias.

Isso significa que a concretagem começa dez dias após o início da fôrma, embora a fôrma termine após cinco dias. A lógica provavelmente não descreve uma verdadeira dependência de início para início. Pode estar tentando representar a conclusão da fôrma mais o tempo de inspeção ou cura.

O programador revisa a sequência e substitui o relacionamento por uma lógica mais clara: um relacionamento FS para uma atividade de inspeção, seguido pela concretagem. O cronograma agora mostra a dependência real e o período de espera fica visível.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e identifique os relacionamentos afetados.
- Dias 2-3: Revise primeiro os relacionamentos críticos e quase críticos.
- Dias 4 a 5: Substitua a lógica SS fraca, reduza o atraso injustificado ou modele períodos de espera ocultos.
- Dia 6: Confirme as exceções e revise a movimentação do cronograma.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite tratar todos os atrasos como errados. O atraso pode ser útil quando representa um deslocamento real e limitado.

Evite deixar um longo atraso sem explicação. Se o atraso for maior que a duração do antecessor, merece um motivo claro.

Evite ocultar o trabalho dentro do lag quando o trabalho deveria estar visível como uma atividade.

## Principais conclusões

- A lógica SS deve representar uma dependência baseada em início.
- O atraso maior que a duração do antecessor geralmente sinaliza uma lógica fraca ou pouco clara.
- FS, FF ou uma atividade separada podem explicar melhor a dependência.
- O alvo é zero relacionamentos não resolvidos.
- Exceções válidas devem ser documentadas.

## Conclusão

Essa métrica ajuda os agendadores a encontrar relacionamentos SS onde o atraso pode estar ocultando a dependência real. O objetivo não é remover todo o atraso SS, mas garantir que o atraso seja razoável, visível e defensável.

A revisão dessa métrica melhora a clareza do CPM, a confiabilidade da folga e a confiança no caminho mais longo. Também ajuda os revisores do PMO a separar a lógica de sobreposição útil dos atalhos de cronograma.

## Chamada para ação

Revise os relacionamentos SS onde o atraso é maior que a duração do antecessor em sua próxima atualização de cronograma do Primavera P6. Para cada um, pergunte se o relacionamento é realmente baseado no início. Caso contrário, substitua-o por uma lógica mais clara ou modele diretamente o período de espera.
## Conteúdo relacionado
- [Relacionamentos SS com atraso maior que a duração do antecessor - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
