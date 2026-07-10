---
title: "Datas reais posteriores à data dos dados no Primavera P6"
seoTitle: "Datas reais posteriores à data dos dados no Primavera P6"
description: "Veja por que Datas reais posteriores à data dos dados no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Datas reais posteriores à data dos dados no Primavera P6"
  - "Primavera P6 Datas reais posteriores à data dos dados no Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/actual-date-greater-than-data-date-primavera-p6"
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
primarySearchIntent: "Veja por que Datas reais posteriores à data dos dados no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
relatedMetrics:
  - "06_metrics_pt/12_actual_date_greater_than_data_date/02_guide_template.md"
relatedBlogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/12_actual_date_greater_than_data_date/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Datas reais posteriores à data dos dados no Primavera P6

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que validam atualizações de cronograma do Primavera P6.

## Gancho de abertura

A Data Date é a linha entre o histórico real e a previsão. Se uma data real cair depois dessa linha, o cronograma está misturando o futuro com o passado.

## Introdução

No Primavera P6, Data Date define o limite de atualização. O trabalho real deve ser registrado nessa data ou antes dela. O trabalho de previsão deve permanecer depois disso.

Quando um Início Real, um Término Real ou outra data real for posterior à Data de Dados, a programação contém um erro de data de status. A atividade pode mostrar o trabalho como já iniciado ou concluído, mesmo que essa data esteja fora do período de relatório atual.

Esta métrica identifica atividades com datas reais superiores à Data Date. A meta é zero atividades não resolvidas.

## O que este parâmetro significa

Este parâmetro verifica se as datas reais são consistentes com o ciclo de atualização atual. As datas reais devem representar o desempenho real já alcançado pela Data Date.

Se uma data real for posterior à Data Date, uma de duas coisas geralmente está errada. A data real foi inserida incorretamente ou a Data Date não corresponde ao período de relatório aprovado.

Um resultado alto sugere controle de corte de atualização fraco, problemas de importação ou confusão entre datas reais e previstas.

## Por que este assunto é importante

Datas reais futuras podem prejudicar a credibilidade do cronograma. Eles podem distorcer os relatórios de progresso, o valor agregado, a folga e as previsões de marcos.

Eles também dificultam as revisões de cronograma. Os revisores e clientes do PMO esperam que a data dos dados separe claramente o que aconteceu do que está planejado para acontecer.

Se esse limite não for respeitado, será difícil confiar na atualização.

## Causas comuns de maus resultados

- Datas reais inseridas além do limite de atualização
- Data de dados do projeto incorreta
- Progresso importado de arquivos que cobrem datas futuras
- Confusão entre datas reais e datas previstas
- Atualizações manuais de status inseridas sem verificar a data dos dados
- Quadro de horários ou sistemas de campo não alinhados com o período de atualização do cronograma

## Como melhorar o resultado

### 1. Confirme a data dos dados

Comece confirmando a data de dados aprovada para a atualização. Se a Data Date estiver errada, corrija-a antes de alterar o status da atividade.

A Data Date deve corresponder ao período do relatório e ao procedimento de controles do projeto.

### 2. Revise as datas reais futuras

Filtre por datas reais maiores que a Data Date. Revise o início real, o término real, o status da atividade, a duração restante e a porcentagem concluída em conjunto.

Se a data real futura estiver errada, corrija-a ou remova-a. Se o trabalho não tiver realmente ocorrido até a Data Date, ele não deverá ser registrado como real.

### 3. Corrija o fluxo de trabalho de atualização

Se o problema for proveniente de uma importação, revise o arquivo de origem e o mapeamento. Se veio de atualizações manuais, reforce o procedimento de corte de atualização.

O objetivo é evitar que dados reais futuros entrem no cronograma antes do relatório.

## Cenário de exemplo

Uma atualização mensal da programação tem uma data de dados de 31 de maio. Durante a revisão, o planejador encontra um Término Real de 03 de junho em uma atividade de instalação.

O relatório de campo incluiu o trabalho concluído após o encerramento do relatório. O agendador remove o Término Real futuro, restaura o status correto em 31 de maio e mantém o trabalho restante na previsão.

O cronograma agora separa o progresso real de maio do trabalho planejado de junho, tornando a atualização mais fácil de confiar.

## Cronograma de melhoria recomendado

- Dia 1: execute a métrica e confirme a data dos dados.
- Dias 2-3: Corrija as datas reais futuras e o status da atividade.
- Dias 4 a 5: Revise os arquivos de importação e atualize o fluxo de trabalho.
- Dia 6: Verifique os relatórios, resultados de valor agregado e datas de marcos.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite mover a data dos dados apenas para ocultar dados reais futuros. A Data Date deve seguir o período de relatório aprovado.

Evite excluir datas reais sem confirmar o status real do campo.

Evite ignorar as fontes de importação. Se os dados reais futuros vierem de uma importação, o problema poderá se repetir no próximo ciclo.

## Principais conclusões

- As datas reais devem ser iguais ou anteriores à Data Date.
- A meta é zero atividades não resolvidas.
- Os dados reais futuros podem indicar status errado, data de dados errada ou problemas de importação.
- Corrija o status da atividade, a duração restante e a porcentagem concluída após fixar as datas.
- O controle de corte de atualização evita problemas repetidos.

## Conclusão

As datas reais após a data dos dados são um claro problema de atualização do cronograma. Eles confundem a linha entre história e previsão.

O gerenciamento dessa métrica melhora a disciplina de atualização, os relatórios de progresso, a confiabilidade do valor agregado e a confiança nos envios de cronograma do Primavera P6.

## Chamada para ação

Revise todas as datas reais após a Data Date antes de emitir sua próxima atualização de programação. Corrija o problema de data, status ou fonte de data de dados para que o cronograma separe claramente o desempenho real do trabalho previsto.
## Conteúdo relacionado
- [Datas reais posteriores à data dos dados no Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
