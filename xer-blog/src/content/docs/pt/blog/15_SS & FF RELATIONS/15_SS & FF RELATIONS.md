---
title: "Relações SS e FF"
seo_title: "Relações SS e FF - Primavera P6"
meta_description: "Aprenda Relações SS e FF no Primavera P6 com foco prático em planejamento, controles de projeto e qualidade do cronograma."
description: "Aprenda Relações SS e FF no Primavera P6 com foco prático em planejamento, controles de projeto e qualidade do cronograma."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Relações SS e FF"
  - "Primavera P6 Relações SS e FF"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt/blog/ss-and-ff-relations-in-primavera-p6"
language: "pt"
content_type: "blog"
draft: false
version: "1.0"
topic: "Planejamento em Primavera P6"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Aprenda Relações SS e FF no Primavera P6 com foco prático em planejamento, controles de projeto e qualidade do cronograma."
related_metrics:
  - "06_metrics_pt/01_activities_starting_in_dd_with_no_logic_driving/01_overview_template.md"
related_blogs:
  - "06b_blogs_pt/14_RESOURCES BALANCING IN P6/14_RESOURCES BALANCING IN P6.md"
  - "06b_blogs_pt/16_CPM (CRITICAL PATH METHOD)/16_CPM (CRITICAL PATH METHOD).md"
translation_of: "01b_blogs_en/15_SS & FF RELATIONS/15_SS & FF RELATIONS.md"
canonical_url: ""
last_reviewed: "2026-07-02"
pubDate: "2026-07-02"
---
# Relações SS e FF

As relações início-a-início (SS) e término-a-término (FF) são tipos de lógica válidos no Primavera P6. Elas são úteis quando duas atividades se sobrepõem e o cronograma precisa representar essa sobreposição melhor do que uma relação simples término-a-início.

O problema não está em SS ou FF por si só. O problema aparece quando elas são usadas sozinhas em uma atividade que precisa ter os dois extremos controlados. Uma relação SS controla o início do sucessor, mas não controla seu término. Uma relação FF controla o término do sucessor, mas não controla seu início. Por isso muitos planejadores chamam esse uso de meia relação.

## O Que SS e FF Significam

Uma relação SS indica que o sucessor pode iniciar quando o predecessor inicia, ou depois de um lag definido a partir do início do predecessor.

Uma relação FF indica que o sucessor pode terminar quando o predecessor termina, ou depois de um lag definido a partir do término do predecessor.

Ambas podem representar trabalho real. Uma revisão de engenharia pode iniciar depois que a producao do desenho comeca. Um teste pode terminar somente quando a instalação termina. Em construção por áreas, uma frente pode iniciar depois da outra, mas o término também precisa estar controlado.

## Por Que Uma SS Sozinha Pode Ser Incompleta

Uma SS sozinha ancora apenas o início do sucessor. Ela não explica o que controla o término do sucessor.

Se a duração do sucessor muda, ou se a atividade se estende além do realista, o cronograma pode não mostrar corretamente o impacto, a menos que exista lógica downstream capturando esse efeito. O início está conectado, mas o término pode ficar solto.

No P6, isso pode fazer o cronograma parecer melhor conectado do que realmente está.

## Por Que Uma FF Sozinha Pode Ser Incompleta

Uma FF sozinha cria o problema oposto. Ela ancora o término do sucessor, mas não explica quando o sucessor pode iniciar.

Isso pode fazer o início antecipado ser calculado muito para trás, especialmente em um cronograma atualizado. A atividade pode parecer pronta para iniciar na Data Date, ou antes, não porque o trabalho esteja realmente pronto, mas porque a condição de início não foi definida na lógica.

Isso pode distorcer a folga, o caminho crítico e planejamento de curto prazo.

## O Par SS + FF

Quando o trabalho realmente se sobrepoe, o modelo mais forte costuma ser um par SS + FF.

A SS controla quando o sucessor pode iniciar. A FF controla quando o sucessor pode terminar. Juntas, elas definem o envelope logico do trabalho sobreposto.

```mermaid
flowchart LR
    A["Atividade predecessora"] -- "SS: condição de início" --> B["Atividade sucessora"]
    A -- "FF: condição de término" --> B
    B --> C["Início e término ficam ancorados na lógica"]
```

Isso é útil em trabalho contínuo, construção por áreas, ciclos de projeto e revisão, instalação e testes, ou sequências repetitivas.

## Quando SS ou FF Sozinha Pode Ser Aceitável

Nem toda SS ou FF isolada está automaticamente errada.

Uma SS sozinha pode ser aceitável se o término do sucessor estiver controlado por outra relação posterior válida. Uma FF sozinha pode ser aceitável se o início do sucessor estiver controlado por outro predecessor válido. A pergunta principal é se os dois extremos da atividade estão controlados em algum ponto da rede.

O planejador deve conseguir explicar por que a relação isolada é suficiente.

## Como Revisar no P6

No P6, revise atividades com predecessores SS, sucessores SS, predecessores FF e sucessores FF. Dê atenção especial a atividades cujo único predecessor é FF ou cujo único sucessor é SS.

Campos úteis incluem ID da atividade, nome da atividade, início, término, status da atividade, folga total, predecessores, sucessores, tipo de relacionamento, defasagem, restrições e relacionamento direcionador quando disponível.

Pergunte:

- O que permite esta atividade iniciar?
- O que controla seu término?
- A sobreposição é física ou contratual?
- O lag esta escondendo detalhe faltante?
- A relação explica o plano de execução?
- Um revisor independente entenderia a lógica?

## Problemas Comuns

Um problema comum é usar SS para puxar trabalho para mais cedo sem modelar a condição real que permite a sobreposição.

Outro problema é usar FF para segurar uma data de término enquanto o início fica aberto.

SS e FF também podem ser usadas quando o trabalho deveria ter sido decomposto em atividades menores. Se a atividade é ampla demais, o planejador pode forçar o resultado com relações em vez de modelar passos mais claros.

## Boas Praticas

Use SS e FF com intenção. Elas devem representar sequência real, não conveniência do cronograma.

Ao usar SS, confirme que o término do sucessor também esta controlado logicamente. Ao usar FF, confirme que o início do sucessor também esta controlado logicamente.

Use pares SS + FF para trabalho sobreposto quando início e término precisam estar vinculados. Documente exceções quando uma SS ou FF isolada for deliberada e defensável.

## Conclusao

SS e FF são ferramentas úteis no P6, mas exigem disciplina. Usadas sozinhas, podem criar lógica incompleta ao controlar apenas um extremo da atividade.

Um cronograma CPM confiável deve explicar por que o trabalho pode iniciar e o que controla seu término. Quando SS e FF ajudam a responder essas perguntas, fortalecem o cronograma. Quando deixam um extremo aberto, criam lógica fraca que deve ser revisada.
## Conteúdo relacionado
- [Atividades começando na data dos dados sem nenhuma lógica direcionadora: por que essa métrica de cronograma é importante - Visão geral](../../metrics/01_activities_starting_in_dd_with_no_logic_driving/02_guide_template.md)
- [Balanceamento de recursos no P6](../14_RESOURCES%20BALANCING%20IN%20P6/14_RESOURCES%20BALANCING%20IN%20P6.md)
- [CPM (Critical Path Method)](../16_CPM%20(CRITICAL%20PATH%20METHOD)/16_CPM%20(CRITICAL%20PATH%20METHOD).md)
