---
title: "Atividades com sucessores SS e sem sucessores FS ou FF"
seo_title: "Atividades com sucessores SS e sem sucessores FS ou FF - Primavera P6"
meta_description: "Veja por que Atividades com sucessores SS e sem sucessores FS ou FF afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Atividades com sucessores SS e sem sucessores FS ou FF"
  - "Primavera P6 Atividades com sucessores SS e sem sucessores FS ou FF"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-activities-with-ss-successor-and-no-fs-ff-successor-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Atividades com sucessores SS e sem sucessores FS ou FF afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/02_activities_with_ss_successor_and_no_fs_ff_successor/01_overview_template.md"
  - "06_metrics_pt/02_activities_with_ss_successor_and_no_fs_ff_successor/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/02_activities_with_ss_successor_and_no_fs_ff_successor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Atividades com sucessores SS e sem sucessores FS ou FF

## Título

Atividades com sucessores SS e sem sucessores FS ou FF

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que avaliam a lógica de cronograma do Primavera P6.

## Gancho de abertura

A lógica início-a-início pode ser útil. Permite trabalhos sobrepostos e ajuda a modelar a execução real em campo. Mas quando uma atividade tem um sucessor SS e nenhum sucessor FS ou FF, o seu final pode deixar de importar para o resto do cronograma.

## Introdução

No Primavera P6, o tipo de relacionamento é importante. Um relacionamento Início para Início permite que um sucessor inicie após o início do antecessor. Isto pode ser apropriado quando o trabalho se sobrepõe, como iniciar a instalação após uma área ser parcialmente liberada.

O risco aparece quando o antecessor tem apenas sucessores SS. Se nenhum sucessor depender da conclusão do antecessor, a extensão da duração do antecessor poderá não atrasar o trabalho posterior. O cronograma pode parecer saudável mesmo que uma atividade esteja demorando mais do que o planejado.

Esta métrica identifica atividades com pelo menos um sucessor SS e nenhum sucessor FS ou FF. A meta é zero atividades não resolvidas.

## O que este parâmetro significa

Este parâmetro verifica se o término de uma atividade está representado na rede lógica. A lógica SS conecta partidas. A lógica FS e FF conecta o término de uma atividade a um início ou término posterior.

Uma atividade pode ter lógica SS válida e ainda precisar de lógica baseada em conclusão. Por exemplo, um sucessor pode começar após o início da primeira parte do trabalho, mas pode não ser capaz de terminar até que o antecessor seja concluído. Nesse caso, um relacionamento FF pode proteger melhor a lógica do cronograma.

Um resultado elevado sugere que as atividades podem estar ligadas apenas pelas condições de início. Um resultado baixo sugere que a conclusão da atividade está melhor representada na rede CPM.

## Por que este assunto é importante

A lógica do cronograma deve mostrar como o trabalho começa e como o trabalho termina. Se o término de uma atividade não estiver conectado a nada, os atrasos nessa atividade poderão não mudar as datas posteriores.

Isso pode afetar a folga total, o caminho mais longo, a confiança do marco e a prontidão da análise de atraso. Também pode criar uma previsão enganosa porque o trabalho parcialmente iniciado parece liberar atividades posteriores sem mostrar o que ainda depende da conclusão.

## Causas comuns de maus resultados

- Uso excessivo de relacionamentos SS para modelar trabalho sobreposto
- Faltam relacionamentos FF para trabalhos que devem terminar juntos
- Relacionamentos FS ausentes para etapas de transferência, inspeção ou rotatividade
- Lógica de cronograma copiada de projetos mais antigos
- Atrasos usados ​​em vez de uma lógica mais clara orientada para o acabamento
- Falta de entrada de campo na dependência real de conclusão

## Como melhorar o resultado

### 1. Revise a lógica do sucessor

Filtrar por atividades com sucessores SS e sem sucessores FS ou FF. Revise a lista de sucessores, tipos de relacionamento, atrasos, status da atividade e folga total.

Pergunte o que depende do término da atividade. Se a resposta for um marco de início, transferência, inspeção ou conclusão do sucessor, o cronograma provavelmente precisará de uma lógica baseada na conclusão.

### 2. Adicione o relacionamento correto com base no acabamento

Use FS quando a próxima atividade não puder ser iniciada até que esta atividade termine. Use FF quando o trabalho puder se sobrepor, mas o sucessor não puder terminar até que esta atividade termine.

Evite adicionar lógica apenas para limpar a métrica. O relacionamento deve refletir a sequência de execução real.

### 3. Documentar exceções válidas

Algumas atividades podem ser exceções válidas. As atividades de nível de esforço, de suporte ou administrativas podem não precisar de sucessores orientados para o acabamento. Nesses casos, documente o motivo para que o item não continue sendo uma preocupação inexplicável de qualidade do cronograma.

## Cenário de exemplo

Um cronograma tem uma atividade chamada "Instalar tubulação subterrânea" com um SS sucessor de "Aterrar vala". A relação é útil porque o aterro pode começar após a instalação da primeira seção do tubo.

Entretanto, não há sucessor FS ou FF vinculado ao término da atividade de tubulação. Se o trabalho de tubulação se estender por cinco dias, a atividade de aterro ainda poderá progredir no cronograma sem ser interrompida até a conclusão final da tubulação.

O planejador adiciona um relacionamento FF de "Instalar tubulação subterrânea" para "Aterrar vala". Agora o trabalho ainda pode se sobrepor, mas a conclusão do aterro está vinculada à conclusão da tubulação. O cronograma reflete melhor a real dependência do campo.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e identifique as atividades afetadas.
- Dias 2-3: Revise primeiro os itens críticos e quase críticos.
- Dias 4 a 5: Adicione lógica FS ou FF válida e remova o atraso enganoso quando necessário.
- Dia 6: Confirme as exceções e revise a movimentação do cronograma.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite tratar todo relacionamento SS como um problema. A questão não é a lógica SS em si; o problema é a falta de lógica orientada para o final quando o final é importante.

Evite substituir todos os relacionamentos SS por relacionamentos FS. A sobreposição pode ser realista e útil.

Evite deixar exceções sem documentação. Os revisores precisam saber se um item é um desenvolvimento lógico intencional ou inacabado.

## Principais conclusões

- Os controles lógicos SS iniciam, não terminam.
- As atividades com sucessores de SS e sem sucessores de FS ou FF podem deixar de influenciar as datas posteriores quando a sua duração mudar.
- A lógica FF costuma ser útil quando o trabalho sobreposto deve terminar em sequência.
- A meta é zero atividades não resolvidas.
- Documente claramente as exceções válidas.

## Conclusão

Essa métrica ajuda os agendadores a confirmar se a conclusão da atividade está representada na rede. Os relacionamentos SS podem ser válidos, mas não devem deixar o término de atividades importantes desconectado do restante do cronograma.

A revisão dessa métrica melhora a qualidade do CPM, a confiabilidade da folga e a confiança no caminho mais longo. Também ajuda os revisores do PMO a distinguir a lógica sobreposta realista do sequenciamento fraco ou incompleto.

## Chamada para ação

Revise as atividades com sucessores SS e sem sucessores FS ou FF em sua próxima atualização de cronograma do Primavera P6. Para cada um, pergunte se o término da atividade deve impulsionar o trabalho posterior. Se for necessário, adicione uma lógica válida baseada em acabamento. Caso contrário, documente a exceção.
## Conteúdo relacionado
- [Atividades com sucessores SS e sem sucessores FS ou FF - Visão geral](01_overview_template.md)
- [Atividades com sucessores SS e sem sucessores FS ou FF - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
