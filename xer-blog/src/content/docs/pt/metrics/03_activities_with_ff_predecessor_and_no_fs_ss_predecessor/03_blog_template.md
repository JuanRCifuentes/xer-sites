---
title: "Atividades com predecessores FF e sem predecessores FS ou SS"
seoTitle: "Atividades com predecessores FF e sem predecessores FS ou SS - Primavera P6"
description: "Veja por que Atividades com predecessores FF e sem predecessores FS ou SS afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Atividades com predecessores FF e sem predecessores FS ou SS"
  - "Primavera P6 Atividades com predecessores FF e sem predecessores FS ou SS"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/activities-with-ff-predecessor-and-no-fs-ss-predecessor-primavera-p6"
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
primarySearchIntent: "Veja por que Atividades com predecessores FF e sem predecessores FS ou SS afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
relatedMetrics:
  - "06_metrics_pt/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/02_guide_template.md"
relatedBlogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Atividades com predecessores FF e sem predecessores FS ou SS

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que avaliam a lógica de cronograma do Primavera P6.

## Gancho de abertura

A lógica de término a término pode ser útil quando duas atividades precisam ser concluídas juntas. Mas se uma actividade tiver um antecessor FF e nenhum antecessor FS ou SS, o seu fim pode ser controlado enquanto o seu início permanece fracamente definido.

## Introdução

No Primavera P6, um relacionamento FF vincula o término de uma atividade ao término de outra. Isto pode ser apropriado quando o trabalho se sobrepõe, mas uma atividade não pode terminar até que outra atividade termine.

O risco aparece quando uma atividade possui apenas antecessores FF. Se nenhum antecessor controlar quando a atividade pode começar, o cronograma poderá permitir que a atividade comece mais cedo do que a sequência real de trabalho suporta.

Esta métrica identifica atividades com pelo menos um antecessor de FF e nenhum antecessor de FS ou SS. A meta é zero atividades não resolvidas.

## O que este parâmetro significa

Este parâmetro verifica se o início de uma atividade está representado na rede lógica. A lógica FF conecta acabamentos. A lógica FS e SS pode conectar o trabalho upstream ao início da atividade.

Uma atividade pode ter uma lógica FF válida e ainda precisar de uma lógica de acionamento inicial. Por exemplo, o teste pode precisar terminar com a instalação, mas não pode ser iniciado até que uma parte da instalação esteja disponível. Nesse caso, um relacionamento SS pode ser necessário além do relacionamento FF.

Um resultado elevado sugere que as atividades podem estar ligadas apenas pelas condições de acabamento. Um resultado baixo sugere que o início da atividade está melhor representado na rede CPM.

## Por que este assunto é importante

A lógica do cronograma deve mostrar como o trabalho começa e como o trabalho termina. Se o início de uma actividade não estiver ligado ao trabalho a montante, as datas antecipadas podem não ser realistas.

Isso pode afetar a folga total, o caminho mais longo, a confiança nos marcos e o planejamento de curto prazo. Também pode fazer com que o trabalho sobreposto pareça mais fácil de começar do que realmente é.

## Causas comuns de maus resultados

- Uso excessivo de relacionamentos FF para modelar trabalho sobreposto
- Faltam relacionamentos SS para trabalho que pode começar após progresso parcial
- Relacionamentos FS ausentes para trabalhos que exigem conclusão completa do antecessor
- Lógica de cronograma copiada de projetos mais antigos
- Atrasos usados ​​em vez de uma lógica de partida mais clara
- Falta de entrada de campo na condição real de início

## Como melhorar o resultado

### 1. Revise a lógica do predecessor

Filtre por atividades com antecessores FF e sem antecessores FS ou SS. Revise a lista de predecessores, tipos de relacionamento, atrasos, status da atividade e folga total.

Pergunte o que deve acontecer antes que a atividade possa começar. Se a resposta for um início predecessor, liberação parcial, conclusão total, aprovação, acesso ou transferência, o cronograma provavelmente precisará de uma lógica de orientação inicial.

### 2. Adicione a relação certa entre começar e dirigir

Use FS quando a atividade não puder ser iniciada até que a predecessora termine. Use SS quando a atividade puder ser iniciada após o início da predecessora ou atingir um ponto definido de progresso.

Evite adicionar lógica apenas para limpar a métrica. O relacionamento deve refletir a sequência de execução real.

### 3. Documentar exceções válidas

Algumas atividades podem ser exceções válidas. O nível de esforço, o suporte ou as atividades administrativas podem não precisar de predecessores que impulsionem o início. Nesses casos, documente o motivo para que o item não continue sendo uma preocupação inexplicável de qualidade do cronograma.

## Cenário de exemplo

Um cronograma possui uma atividade chamada "Teste final" com um antecessor FF de "Instalação completa". O relacionamento é útil porque o teste não pode ser concluído até que a instalação seja concluída.

No entanto, não há antecessor de FS ou SS vinculado ao início dos testes. Se o cronograma calcular datas antecipadas, os testes podem parecer capazes de começar antes que o trabalho de instalação suficiente esteja disponível.

O agendador adiciona um relacionamento SS de "Instalação completa" a "Teste final" com um atraso ou ponto de progresso apropriado. O relacionamento FF continua protegendo a conclusão final. Agora o cronograma mostra quando o teste pode começar e quando pode terminar.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e identifique as atividades afetadas.
- Dias 2-3: Revise primeiro os itens críticos e quase críticos.
- Dias 4 a 5: Adicione lógica FS ou SS válida e remova o atraso enganoso quando necessário.
- Dia 6: Confirme as exceções e revise a movimentação do cronograma.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite tratar cada relacionamento FF como um problema. A questão não é a lógica FF em si; o problema é a falta da lógica de partida quando a largada é importante.

Evite substituir todos os relacionamentos FF por relacionamentos FS. A sobreposição pode ser realista e útil.

Evite deixar exceções sem documentação. Os revisores precisam saber se um item é um desenvolvimento lógico intencional ou inacabado.

## Principais conclusões

- A lógica FF controla o alinhamento final, não o início da atividade.
- Atividades com predecessores FF e sem predecessores FS ou SS podem começar antes do que a sequência real suporta.
- A lógica SS costuma ser útil quando o trabalho sobreposto precisa de uma condição de início clara.
- A meta é zero atividades não resolvidas.
- Documente claramente as exceções válidas.

## Conclusão

Essa métrica ajuda os agendadores a confirmar se os inícios das atividades estão representados na rede. As relações FF podem ser válidas, mas não devem deixar o início de atividades importantes desconectado do trabalho anterior.

A revisão dessa métrica melhora a qualidade do CPM, a confiabilidade da folga e a confiança no caminho mais longo. Também ajuda os revisores do PMO a distinguir a lógica sobreposta realista do sequenciamento fraco ou incompleto.

## Chamada para ação

Revise as atividades com antecessores FF e sem predecessores FS ou SS em sua próxima atualização de cronograma do Primavera P6. Para cada um, pergunte se o início da actividade deve ser impulsionado pelo trabalho a montante. Se for o caso, adicione uma lógica de partida válida. Caso contrário, documente a exceção.
## Conteúdo relacionado
- [Atividades com predecessores FF e sem predecessores FS ou SS - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
