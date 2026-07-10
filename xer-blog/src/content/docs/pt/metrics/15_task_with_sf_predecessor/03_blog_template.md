---
title: "Atividades de tarefas com predecessores SF no Primavera P6"
seoTitle: "Atividades de tarefas com predecessores SF no Primavera P6"
description: "Veja por que Atividades de tarefas com predecessores SF no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Atividades de tarefas com predecessores SF no Primavera P6"
  - "Primavera P6 Atividades de tarefas com predecessores SF no Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/task-with-sf-predecessor-primavera-p6"
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
primarySearchIntent: "Veja por que Atividades de tarefas com predecessores SF no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
relatedMetrics:
  - "06_metrics_pt/15_task_with_sf_predecessor/02_guide_template.md"
relatedBlogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/15_task_with_sf_predecessor/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Os relacionamentos do início ao fim são um dos tipos de relacionamento menos comuns na programação de CPM. No Primavera P6, um relacionamento SF significa que a atividade sucessora não pode terminar até que a atividade predecessora seja iniciada. Isso pode ser válido em casos incomuns, mas não é assim que a maior parte do trabalho do projeto é sequenciada.

Para atividades de tarefas normais, um antecessor do Início ao Fim deve levantar imediatamente uma questão de revisão: que condição do mundo real esta relação está tentando representar? Se a resposta não for clara, o relacionamento pode estar enfraquecendo a lógica do cronograma.

A maioria dos cronogramas de projetos depende de três tipos práticos de relacionamento. Término-a-início é usado quando uma atividade deve terminar antes que outra possa começar. Início-a-início é usado quando as atividades podem começar juntas ou um início depende de outro início. Término a Término é usado quando a conclusão de uma atividade está vinculada à conclusão de outra. Esses tipos de relacionamento geralmente são mais fáceis de serem compreendidos pelas equipes de campo, gerentes de projeto e revisores.

SF é diferente. Ele conecta o início de um antecessor ao final de um sucessor. Isso significa que o término do sucessor será mantido até o início do antecessor. Em muitos cronogramas de construção, engenharia, aquisição e comissionamento, essa lógica é difícil de explicar. Se uma tarefa não puder ser concluída até que outra tarefa seja iniciada, o planejador deverá ser capaz de descrever a condição operacional exata por trás dessa regra.

Um problema comum é a lógica copiada. Um agendador pode copiar um grupo de atividades de outro projeto, importar lógica externa ou aplicar alterações globais, e um relacionamento SF permanece no cronograma sem que ninguém perceba. As datas calculadas ainda podem parecer aceitáveis, para que o relacionamento sobreviva. Mais tarde, durante uma revisão, o caminho lógico torna-se difícil de defender porque a relação não reflete a forma como o trabalho realmente acontece.

Outra questão é o controle de data. Às vezes, a lógica SF é usada com atraso para fazer uma atividade terminar na data desejada. Isso pode ocultar o direcionador real. Se o cronograma precisar de uma data contratual, janela de acesso, condição de entrega ou marco de entrega, essa condição geralmente deverá ser modelada diretamente. O cronograma não deve depender de um tipo de relacionamento confuso simplesmente porque produz a data de término desejada.

Considere uma tarefa chamada "Operação de Bypass Temporário" com um predecessor SF de "Iniciar Operação Permanente do Sistema". Neste caso, a operação de bypass não pode terminar até que o sistema permanente seja iniciado. Esta poderia ser uma relação SF defensável se o bypass tiver que permanecer ativo até que o sistema substituto esteja ativo. Mesmo assim, o agendador deve documentar o motivo porque os revisores questionarão razoavelmente o relacionamento.

Agora considere uma tarefa normal chamada "Instalar bandeja de cabos" com um predecessor SF de "Iniciar extração de cabos". Essa relação é mais difícil de justificar. Se a instalação da bandeja de cabos precisar ser concluída antes que a extração do cabo possa começar, a lógica FS da bandeja de cabos até a extração do cabo pode ser mais apropriada. Se o trabalho se sobrepuser, a lógica SS ou FF poderá ser mais clara. A relação SF não deve permanecer a menos que represente a sequência de construção real.

O melhor método de revisão no P6 é construir um layout que inclua ID da atividade, nome da atividade, EAP, tipo de atividade, ID do predecessor, nome do predecessor, tipo de relacionamento, atraso, início, término, folga total, restrições e status do caminho crítico ou mais longo. Filtre atividades de tarefas com predecessores de SF. Em seguida, revise primeiro as descobertas críticas e quase críticas, porque essas relações podem afetar diretamente os impulsionadores do projeto relatados.

Para cada descoberta, faça um conjunto simples de perguntas. Qual é a condição da modelagem de relacionamento SF? FS, SS ou FF descreveriam a lógica mais claramente? O atraso está sendo usado para forçar uma data? O relacionamento está afetando o caminho crítico ou os relatórios de marcos? Existe um motivo documentado para mantê-lo?

O limite alvo deve ser zero relacionamentos predecessores de SF não resolvidos em atividades de tarefa. Isso não significa que todo relacionamento SF esteja automaticamente errado. Isso significa que todo relacionamento de SF deve ser corrigido ou claramente justificado. A lógica SF inexplicável pode reduzir a confiança na rede porque torna a lógica mais difícil de auditar e de comunicar.

Quando o relacionamento for inválido, substitua-o pelo tipo de relacionamento que corresponda à sequência real. Caso a atividade deva começar após o término de outra, utilize FS. Se as partidas estiverem vinculadas, use SS. Se os acabamentos precisarem estar alinhados, use FF. Se o problema for um marco, entrega, aprovação ou condição de acesso ausente, adicione ou corrija a atividade que representa essa condição.

Após as correções, recalcule o cronograma e revise o caminho lógico afetado. Verifique a folga total, o caminho crítico ou mais longo, as datas dos marcos e os relatórios antecipados de curto prazo. O objetivo não é apenas melhorar a pontuação da métrica. O objetivo é tornar o cronograma mais fácil de explicar e mais confiável para a tomada de decisões.

As atividades de tarefas com predecessores de SF são sinais pequenos, mas importantes. Freqüentemente apontam para lógica copiada, datas forçadas ou sequência pouco clara. Revisá-los ajuda a equipe do projeto a limpar a rede lógica antes que esses pontos fracos se tornem problemas de relatório.
## Conteúdo relacionado
- [Atividades de tarefas com predecessores SF no Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
