---
title: "Lógica redundante em programações do Primavera P6"
seo_title: "Lógica redundante em programações do Primavera P6"
meta_description: "Veja por que Lógica redundante em programações do Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Lógica redundante em programações do Primavera P6"
  - "Primavera P6 Lógica redundante em programações do Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-redundant-logic-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Lógica redundante em programações do Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/06_redundant_logic/01_overview_template.md"
  - "06_metrics_pt/06_redundant_logic/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/06_redundant_logic/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Lógica redundante em programações do Primavera P6

## Título

Lógica redundante em programações do Primavera P6

## Tempo estimado de leitura/falação

5-10 minutos

## Comprimento alvo

750-1.500 palavras

## Público

Este blog é para agendadores, engenheiros de planejamento, engenheiros de controle de projeto, gerentes de projeto e revisores de PMO que avaliam a lógica de cronograma do Primavera P6.

## Gancho de abertura

Mais lógica nem sempre significa melhor lógica. Um cronograma pode parecer bem conectado enquanto carrega relacionamentos duplicados, caminhos predecessores repetidos e dependências que não adicionam controle real.

## Introdução

A lógica é a espinha dorsal de uma programação CPM. Ele mostra como o trabalho flui de uma atividade para outra e permite que o Primavera P6 calcule datas, flutuações e o caminho crítico ou mais longo.

A lógica redundante aparece quando um relacionamento repete uma dependência que já está representada em algum outro lugar da rede. Pode ser uma duplicata exata, um segundo relacionamento entre as mesmas duas atividades ou um link direto que repete um caminho upstream.

Esta métrica identifica padrões lógicos redundantes que devem ser revisados ​​e removidos, a menos que sejam claramente justificados. O alvo é zero relacionamentos não resolvidos.

## O que este parâmetro significa

Este parâmetro verifica se o planejamento contém relacionamentos que não adicionam sequenciamento significativo. Exemplos comuns incluem o mesmo antecessor conectado ao mesmo sucessor mais de uma vez, como FS mais SS ou FS mais FF.

A métrica também procura lógica predecessora herdada. Por exemplo, se a Atividade A impulsiona a Atividade B e a Atividade B impulsiona a Atividade C, um relacionamento direto da Atividade A para a Atividade C pode ser desnecessário, a menos que represente uma dependência real separada.

SS mais FF entre as mesmas duas atividades podem ser aceitáveis ​​quando a sobreposição é intencional. O relacionamento SS pode controlar quando o sucessor começa, enquanto o relacionamento FF controla quando ele pode terminar. A chave é se ambas as relações representam condições reais.

## Por que este assunto é importante

A lógica redundante torna o cronograma mais difícil de entender. Isso adiciona ruído à rede e pode dificultar a visualização de qual relacionamento está realmente controlando as datas.

Também pode distorcer a folga, criar caminhos de condução falsos e dificultar a análise de atrasos. Durante o PMO ou revisões de qualidade do cronograma, a lógica redundante levanta questões sobre se a rede foi construída intencionalmente ou montada através de links copiados e acumulados.

## Causas comuns de maus resultados

- Seções de cronograma copiadas que não foram limpas
- Vários tipos de relacionamento adicionados entre as mesmas duas atividades
- FS mais SS ou FS mais FF usado para forçar datas
- Links diretos adicionados mesmo que a dependência já exista através de uma cadeia
- Relacionamentos adicionados durante atualizações sem verificar a lógica existente
- Dependências desnecessárias usadas para fazer o cronograma parecer mais conectado

## Como melhorar o resultado

### 1. Encontre padrões de relacionamento duplicados

Comece identificando atividades conectadas por mais de um relacionamento. Preste muita atenção às combinações FS mais SS e FS mais FF. Em muitos casos, um relacionamento está fazendo o verdadeiro trabalho e o outro é redundante.

Revise as combinações SS mais FF com mais cuidado. Eles podem ser válidos quando os controles de início e término são necessários para trabalhos sobrepostos.

### 2. Verifique a lógica do predecessor herdado

Procure atividades que tenham o mesmo antecessor e tipo de relacionamento que seu próprio antecessor. Se a mesma dependência já existir no caminho, o relacionamento direto poderá não ser necessário.

Esta revisão também pode ser estendida vários passos atrás na rede. A questão é simples: esta relação direta acrescenta uma dependência real ou repete um caminho que já existe?

### 3. Remova dependências desnecessárias

Remova relacionamentos que não representem acesso, aprovação, transferência, sequência de construção, sequência de aquisição, controle de risco ou lógica contratual.

Depois de remover um relacionamento, recalcule o cronograma e revise a folga, a lógica direcionadora, o caminho mais longo e as datas dos marcos. Se uma data mudar inesperadamente, investigue se o relacionamento removido era realmente válido ou se é necessário um relacionamento mais claro.

## Cenário de exemplo

Um cronograma possui a Atividade A vinculada à Atividade B com um relacionamento FS e também um relacionamento SS. O escalonador adicionou o link SS durante uma atualização para forçar B a iniciar mais cedo, mas o link FS ainda controla a transferência real.

A revisão mostra que o relacionamento SS não representa uma condição inicial real. Isso apenas adiciona confusão. O escalonador remove o link SS e mantém o relacionamento FS.

Em outra área, a Atividade A impulsiona a Atividade B e a Atividade B impulsiona a Atividade C. A Atividade A também está diretamente ligada à Atividade C com o mesmo tipo de relacionamento. A equipe confirma que não há transferência separada ou condição de acesso. O link direto A-C é removido e a rede permanece lógicamente correta.

## Cronograma de melhoria recomendado

- Dia 1: Execute a métrica e agrupe as descobertas por pares duplicados, lógica herdada e dependências desnecessárias.
- Dias 2-3: Revise primeiro os relacionamentos críticos e quase críticos.
- Dias 4 a 5: Remova a lógica duplicada e recalcule a programação.
- Dia 6: Confirme as exceções e revise a movimentação do cronograma.
- Dia 7: Reavalie a métrica e documente o resultado.

## Erros a evitar

Evite remover relacionamentos apenas porque parecem duplicados. Confirme primeiro a sequência real de trabalho.

Evite manter links duplicados porque parecem inofensivos. A lógica redundante ainda pode distorcer a folga e a análise do caminho de condução.

Evite tratar SS mais FF como automaticamente errados. Pode ser válido quando são necessários controles de início e fim.

## Principais conclusões

- A lógica redundante repete uma dependência que já está representada em outro lugar.
- FS mais SS ou FS mais FF entre as mesmas atividades geralmente precisam de revisão.
- SS mais FF podem ser válidos quando os controles de início e término da sobreposição são reais.
- A lógica predecessora herdada pode criar links diretos desnecessários.
- O alvo é zero relacionamentos redundantes não resolvidos.

## Conclusão

A lógica redundante não melhora a qualidade do cronograma. Isso torna a rede mais difícil de ler, mais difícil de atualizar e mais difícil de defender.

A revisão dessa métrica ajuda os agendadores a manter a rede CPM limpa e intencional. A melhor lógica de programação não é a rede mais complicada; é a rede mais clara que representa o trabalho com precisão.

## Chamada para ação

Revise a lógica redundante em sua próxima atualização de cronograma do Primavera P6. Para cada relacionamento sinalizado, pergunte se ele adiciona uma dependência real ou apenas repete a lógica já presente na rede. Remova o que é desnecessário e documente o que foi retido intencionalmente.
## Conteúdo relacionado
- [Lógica redundante em programações do Primavera P6 - Visão geral](01_overview_template.md)
- [Lógica redundante em programações do Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
