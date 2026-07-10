---
title: "Relações Indecorosas no Primavera P6"
seo_title: "Relações Indecorosas no Primavera P6"
meta_description: "Veja por que Relações Indecorosas no Primavera P6"
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Relações Indecorosas no Primavera P6"
  - "Primavera P6 Relações Indecorosas no Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-unusual-relationships-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Relações Indecorosas no Primavera P6: Marcos, LOE e Verificações de Tipo de Relacionamento afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/14_unusual_relations/01_overview_template.md"
  - "06_metrics_pt/14_unusual_relations/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/14_unseemly_relations/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Relações Indecorosas no Primavera P6

A lógica de relacionamento é uma das partes mais fáceis de copiar rapidamente e uma das partes mais difíceis de defender posteriormente. Um relacionamento pode parecer inofensivo em uma tabela P6, mas o tipo de atividade de cada lado é importante. Uma relação que faz sentido entre duas atividades de tarefa normais pode ser estranha ou enganosa quando um dos lados é uma atividade de Marco Inicial, Marco Final ou Nível de Esforço.

Esta métrica concentra-se em relações impróprias: padrões de relacionamento que devem ser revistos porque muitas vezes não correspondem ao propósito de agendamento do tipo de atividade. O objetivo não é rejeitar automaticamente todo relacionamento incomum. O objetivo é encontrar a lógica que precisa de uma segunda análise antes que afete as datas dos marcos, a folga, os relatórios do caminho crítico ou a confiança do cliente.

O primeiro grupo de descobertas envolve marcos finais. Um Marco Final representa um evento de conclusão. Geralmente é usado para marcar que um pacote, fase, entrega, aprovação ou ponto contratual foi alcançado. Quando um Marco Final tem um sucessor SS ou SF, a lógica pode dizer que uma atividade posterior pode começar porque o evento final começou, ou pode terminar porque o evento final começou. Isso geralmente é difícil de explicar. Um marco de término com um antecessor SS também pode ser suspeito porque a conclusão do marco pode estar vinculada ao início do trabalho anterior, e não à condição de conclusão que realmente prova que o marco foi alcançado.

O segundo grupo envolve Start Milestones. Um Marco Inicial representa o início de um evento, fase, janela de acesso ou autorização. Se um marco inicial tiver um antecessor FF ou SF, o evento de início poderá estar vinculado a um término predecessor de uma forma que não descreva claramente a condição de início necessária. Se um marco inicial tiver um sucessor FS ou FF, o marco pode estar agindo como um ponto final de tarefa em vez de um evento inicial. Às vezes isso acontece porque o tipo de marco foi selecionado incorretamente. Outras vezes, o tipo de relacionamento era copiado de outra parte do cronograma e nunca revisado.

O terceiro grupo envolve atividades LOE. As atividades LOE são usadas para representar apoio, supervisão, gerenciamento, inspeção ou outro esforço que abrange outro trabalho. Normalmente, eles não se destinam a conduzir atividades de produção discretas da mesma forma que uma tarefa normal. Quando uma atividade da LOE tem um relacionamento FS ou SF, o revisor do cronograma deve perguntar se a LOE está controlando o trabalho que deveria ser conduzido por atividades de trabalho físico, restrições de acesso, aprovações ou marcos contratuais.

Na prática, essa métrica é útil porque força uma conversa clara sobre a intenção. O que esse marco pretende representar? Este LOE está resumindo o trabalho ou impulsionando-o? Esse relacionamento descreve um sequenciamento real ou existe apenas para fazer um encontro se comportar?

Considere um marco de término denominado "Conclusão Mecânica". Se tiver um sucessor SS para “Iniciar Comissionamento”, o cronograma pode estar implicando que o comissionamento pode começar quando a conclusão mecânica começar. Isso não se enquadra muito bem no conceito de marco. Se o comissionamento puder começar após uma rotatividade parcial, a melhor solução poderá ser adicionar uma atividade de rotatividade discreta ou um marco mais específico. Se o comissionamento realmente depende da conclusão mecânica completa, é mais fácil entender e defender uma relação FS desde o marco de conclusão até o comissionamento.

Agora considere uma atividade de LOE chamada “Apoio à Gestão de Projetos” com um relacionamento FS com uma atividade de construção. Essa relação pode tornar a atividade de apoio um impulsionador do trabalho de campo, o que normalmente não é a intenção. Um planejador deve verificar se a atividade de construção deve ser orientada por engenharia, aquisição, acesso, licenças, construção antecessora ou outra condição discreta. A LOE pode precisar de drivers de início e término diferentes para abranger o trabalho sem controlá-lo incorretamente.

O melhor método de revisão é simples. Crie um layout P6 que mostre o ID da atividade, o nome da atividade, o tipo de atividade, o predecessor, o sucessor, o tipo de relacionamento, o atraso, o início, o término, a folga total e o status do caminho crítico ou mais longo. Filtre por marcos e atividades de LOE e, em seguida, isole os padrões de relacionamento sinalizados pela métrica. Revise primeiro os itens críticos e quase críticos, pois eles podem afetar os relatórios do projeto imediatamente.

Nem todos os itens sinalizados estarão errados. Alguns projetos possuem regras lógicas específicas do cliente ou requisitos de relatórios incomuns. Alguns modelos de cronograma utilizam marcos especiais para interagir com outros sistemas. Esses casos devem ser raros, aprovados e documentados. Se um revisor não puder explicar o relacionamento em linguagem simples de agendamento, provavelmente será necessário corrigi-lo.

Uma boa meta para esta métrica é zero relacionamentos não resolvidos. A palavra importante é não resolvida. A equipe do cronograma deve corrigir o relacionamento, revisar o tipo de atividade, adicionar uma atividade melhor para representar a condição real ou documentar a exceção aprovada. Deixar essas relações sem explicação enfraquece o cronograma porque torna a rede lógica mais difícil de confiar.

Relações inadequadas são frequentemente pequenos sintomas de problemas maiores de qualidade do cronograma: lógica copiada, definições de marcos pouco claras, uso indevido de atividades de LOE ou um hábito de forçar datas através de tipos de relacionamento. Limpá-los melhora mais do que uma pontuação métrica. Isso torna o cronograma mais fácil de revisar, mais fácil de explicar e mais confiável para a governança do PMO e a tomada de decisões do projeto.
## Conteúdo relacionado
- [01_overview_template](../14_unusual_relations/01_overview_template.md)
- [02_guide_template](../14_unusual_relations/02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
