---
title: "Atividades fora de sequência no Primavera P6"
seoTitle: "Atividades fora de sequência no Primavera P6"
description: "Veja por que Atividades fora de sequência no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Atividades fora de sequência no Primavera P6"
  - "Primavera P6 Atividades fora de sequência no Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/activities-out-of-sequence-primavera-p6"
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
primarySearchIntent: "Veja por que Atividades fora de sequência no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
relatedMetrics:
  - "06_metrics_pt/08_activities_out_of_sequence/02_guide_template.md"
relatedBlogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/08_activities_out_of_sequence/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Atividades fora de sequência no Primavera P6

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que avaliam atualizações de cronograma do Primavera P6.

## Gancho de abertura

Às vezes, o trabalho começa antes do cronograma indicar que deveria. Isso pode refletir um progresso real no campo, mas também pode expor um problema na atualização, na lógica ou na forma como o plano atual está sendo relatado.

## Introdução

Atividades fora de sequência são atividades que foram iniciadas ou progredidas antes que sua lógica predecessora fosse satisfeita. No Primavera P6, este é um problema comum durante as atualizações do cronograma porque a execução real do campo nem sempre segue exatamente a rede planejada.

O progresso fora de sequência não é automaticamente ruim. Os projetos sequenciam novamente o trabalho para acesso, recursos, clima, licenças, liberações de projeto e muitos outros motivos. A questão é se o cronograma foi atualizado para refletir claramente esse novo sequenciamento.

Esta métrica identifica atividades com progresso que entram em conflito com a sequência lógica planejada. A meta é zero atividades não resolvidas.

## O que este parâmetro significa

Este parâmetro verifica se o progresso real é consistente com a lógica de relacionamento no cronograma. Por exemplo, se a Atividade B tiver um predecessor Término para Início da Atividade A, mas a Atividade B já tiver sido iniciada enquanto a Atividade A não estiver concluída, a Atividade B poderá estar fora de sequência.

O resultado pode apontar para um simples erro de status, como a falta de um término real no antecessor. Também pode apontar para uma lógica desatualizada ou um evento real de resequenciamento de campo.

No Primavera P6, o impacto depende parcialmente das configurações de cálculo do cronograma, como lógica retida e substituição de progresso. Essas configurações afetam como o trabalho restante é calculado após ocorrer o progresso fora de sequência.

## Por que este assunto é importante

Atividades fora de sequência podem reduzir a confiança na previsão. Eles podem distorcer a folga, alterar o caminho mais longo e dificultar a explicação do cronograma.

Eles também são importantes para a governança. Os revisores do PMO e as equipes de controle do projeto precisam saber se o cronograma representa o plano atual real ou se ainda contém lógica de uma sequência mais antiga.

## Causas comuns de maus resultados

- O trabalho começou antes da conclusão do antecessor
- Datas reais ausentes ou incorretas
- O status do antecessor não foi atualizado corretamente
- Resequenciamento de campo não refletido na lógica
- Relacionamentos desatualizados após planejamento de recuperação
- Confusão sobre lógica retida e configurações de substituição de progresso
- Progresso aceito sem revisão lógica do cronograma

## Como melhorar o resultado

### 1. Verifique primeiro o status

Antes de alterar a lógica, confirme as datas e o status reais da atividade sinalizada e de suas antecessoras. Muitos problemas fora de sequência são causados ​​por términos reais ausentes, inícios reais incorretos ou duração restante que não foi atualizada corretamente.

Se os dados da atividade estiverem errados, corrija a atualização e recalcule antes de fazer alterações lógicas.

### 2. Revise a lógica em relação ao plano atual

Se o progresso for real, pergunte se o relacionamento existente ainda reflete a sequência de execução planejada. Se o trabalho de campo mudou, a lógica também pode precisar mudar.

Não remova relacionamentos apenas para limpar a métrica. Substitua a lógica desatualizada por relacionamentos válidos que expliquem o plano atual aprovado.

### 3. Confirme a abordagem de cálculo P6

Revise se o projeto usa lógica retida ou substituição de progresso. A lógica retida preserva o controle do antecessor sobre o trabalho restante. A substituição do progresso pode permitir que o trabalho continue apesar da lógica predecessora incompleta.

A configuração correta depende do procedimento de controles do projeto, mas a equipe deve entender qual configuração está sendo usada antes de interpretar o resultado.

## Cenário de exemplo

Uma tabela mostra "Instalar a bandeja de cabos" com um antecessor de "Suportes de aço completos". Durante a atualização, a atividade da bandeja de cabos é iniciada de fato, mesmo que os suportes de aço não estejam marcados como concluídos.

O agendador verifica o relatório de campo e descobre que os apoios foram concluídos na Área A, mas não na Área B. As atividades originais eram muito amplas para a sequência real.

O cronograma é revisado por área. O trabalho de suporte concluído na Área A agora impulsiona a instalação da eletrocalhas na Área A, enquanto a Área B permanece devidamente sequenciada. O problema fora de sequência é resolvido e a previsão torna-se mais precisa.

## Cronograma de melhoria recomendado

- Dia 1: execute a métrica e confirme a data dos dados.
- Dias 2 a 3: Corrija erros de status e datas reais.
- Dias 4 a 5: Revise o resequenciamento real e revise a lógica desatualizada.
- Dia 6: Confirme as exceções e revise a movimentação do cronograma.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite alterar a lógica antes de verificar se a atualização do status está correta.

Evite ignorar o progresso fora de sequência porque o trabalho aconteceu no campo. O cronograma ainda precisa representar o plano atual.

Evite alterar a lógica retida ou as configurações de substituição de progresso sem compreender o procedimento de controles do projeto.

## Principais conclusões

- Atividades fora de sequência mostram progresso que entra em conflito com a lógica predecessora.
- A causa pode ser erro de status, erro lógico ou ressequenciamento real.
- As configurações de cálculo P6 afetam a forma como o problema aparece na previsão.
- A meta é zero atividades não resolvidas.
- O novo sequenciamento aprovado deve ser refletido na lógica do cronograma.

## Conclusão

O progresso fora da sequência é um sinal de que o cronograma precisa de revisão. Às vezes, a correção é uma simples correção de status. Outras vezes, é necessário atualizar a lógica para corresponder à forma como o projeto está sendo executado.

O gerenciamento dessa métrica melhora a qualidade da atualização, a confiabilidade das previsões e a confiança no caminho crítico ou mais longo.

## Chamada para ação

Revise as atividades fora de sequência durante sua próxima atualização do Primavera P6. Para cada item, decida se o problema é de status, lógico ou ressequenciamento real e, em seguida, corrija o cronograma antes de emitir relatórios.
## Conteúdo relacionado
- [Atividades fora de sequência no Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
