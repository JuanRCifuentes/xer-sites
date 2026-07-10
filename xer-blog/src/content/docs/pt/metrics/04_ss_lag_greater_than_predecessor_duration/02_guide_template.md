---
title: "Relacionamentos SS com atraso maior que a duração do antecessor - Guia de melhoria"
seo_title: "Relacionamentos SS com atraso maior que a duração do antecessor - Guia de melhoria - Primavera P6"
meta_description: "Aprenda a corrigir Relacionamentos SS com atraso maior que a duração do antecessor no Primavera P6 com verificação de lógica, validação e reavaliação."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Relacionamentos SS com atraso maior que a duração do antecessor"
  - "Primavera P6 Relacionamentos SS com atraso maior que a duração do antecessor"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-improvement-guide-ss-lag-greater-than-predecessor-duration-primavera-p6"
language: "pt"
content_type: "metric"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Aprenda a corrigir Relacionamentos SS com atraso maior que a duração do antecessor no Primavera P6 com verificação de lógica, validação e reavaliação."
related_metrics:
  - "06_metrics_pt/04_ss_lag_greater_than_predecessor_duration/01_overview_template.md"
  - "06_metrics_pt/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Relacionamentos SS com atraso maior que a duração do antecessor - Guia de melhoria

## Propósito

Este guia ajuda os agendadores a revisar e corrigir relacionamentos de início a início onde o atraso é maior que a duração da atividade predecessora. Ele oferece suporte a uma lógica de CPM mais clara, substituindo o atraso SS excessivo por uma lógica de relacionamento que representa melhor a sequência real de trabalho.

## Antes de começar

Reúna as seguintes informações antes de agir:

- Resultado da avaliação atual para esta métrica.
- Lista de relacionamentos SS onde o atraso é maior que a duração do antecessor.
- IDs de atividades predecessoras e sucessoras, nomes, EAP, durações, calendários e status.
- Atraso no relacionamento, tipo de relacionamento e quaisquer restrições relacionadas.
- Configurações de cálculo de cronograma e base de calendário usadas para atraso.
- Lógica de campo, engenharia, aquisição ou transferência explicando a dependência pretendida.

## Entenda o seu resultado

Um resultado forte é zero relacionamentos SS não resolvidos onde o atraso excede a duração do antecessor.

Um resultado aceitável pode incluir exceções documentadas, mas estas devem ser raras. Um longo atraso de SS geralmente indica que o tipo de relacionamento não corresponde à dependência que está sendo modelada.

Um resultado fraco significa que o cronograma contém vários links início a início, onde o sucessor inicia somente após um atraso maior que a duração do antecessor. Isto pode ocultar a lógica orientada para o acabamento por trás de um relacionamento SS.

## Meta de melhoria

O alvo é 0 relacionamentos SS não resolvidos com atraso maior que a duração do antecessor.

O objetivo é confirmar se cada relacionamento deve permanecer SS, ser convertido para lógica FS ou FF, ter o atraso reduzido ou ser documentado como uma exceção válida.

## Plano de Ação

### Etapa 1: Identifique o problema principal

Crie um layout P6 ou exporte que liste relacionamentos SS onde o atraso é maior que a duração do antecessor. Inclui ID da atividade predecessora e sucessora, nome da atividade, EAP, duração original, duração restante, tipo de relacionamento, atraso, calendário, folga total e status da atividade.

Revise cada relacionamento e pergunte:

- Por que o sucessor inicia após tanto atraso?
- O sucessor realmente depende do início do antecessor ou do término do antecessor?
- O atraso é maior que a duração original do antecessor, a duração restante ou ambas?
- O atraso está sendo usado para modelar aquisição, cura, tempo de revisão, acesso ou outro período de espera real?
- Um relacionamento FS ou FF tornaria a dependência mais clara?

```mermaid
flowchart TD
    A["Relacionamento SS com atraso maior que a duração do antecessor"] --> B{"A dependência é verdadeiramente baseada no início?"}
    B -- "Não" --> C["Substitua por lógica FS ou FF válida"]
    B -- "Sim" --> D{"O atraso é justificado e mensurável?"}
    D -- "Não" --> E["Reduza ou remova o atraso"]
    D -- "Sim" --> F["Exceção aprovada por documento"]
    C --> G["Recalcular e reavaliar"]
    E --> G
    F --> G
```

### Etapa 2: aplique as correções recomendadas

Se o sucessor começar após o antecessor terminar, substitua o relacionamento SS por um relacionamento FS. Se o trabalho puder se sobrepor, mas o sucessor não puder terminar até que o antecessor termine, use a lógica FF.

Se o relacionamento for realmente baseado no início, revise o valor do atraso. Reduza o atraso excessivo onde foi usado como espaço reservado aproximado ou herdado da lógica copiada. Se o atraso representar um período de espera real, confirme se a unidade, o calendário e a explicação estão corretos.

Evite usar o longo atraso como substituto de atividades que deveriam estar visíveis na programação. Se o atraso representar tempo de revisão, resolução, entrega, mobilização ou aprovação, considere modelar esse trabalho como uma atividade separada.

### Etapa 3: remover bloqueadores comuns

Os bloqueadores comuns incluem lógica copiada de programações anteriores, períodos de espera ocultos, confusão de calendário e pressão para manter a rede simples. Resolva-os confirmando a dependência pretendida com o proprietário responsável.

Outro bloqueador é tratar o lag como inofensivo. Latências longas podem ser difíceis de revisar, podem ocultar riscos e dificultar a análise de atrasos porque o período de espera não é visível como uma atividade.

### Etapa 4: validar as alterações

Recalcular o cronograma após as correções. Execute novamente a métrica e confirme se cada item restante foi corrigido ou documentado como uma exceção aprovada.

Revise a folga total, o caminho mais longo, o caminho crítico e os marcos de curto prazo. Se as mudanças no relacionamento mudarem as datas importantes, comunique o resultado ao líder de controles do projeto ou ao revisor do PMO.

## Cronograma de Melhoria

### Dia 1: Revisão e Diagnóstico

Execute a métrica, confirme a lista de relacionamentos afetados e separe os itens em tipo de relacionamento errado, atraso excessivo, atividade oculta, problema de calendário e possível exceção.

### Dias 2-3: Implementar Ações Prioritárias

Corrija primeiro os relacionamentos críticos e quase críticos. Converta a lógica SS em FS ou FF quando apropriado, reduza atrasos injustificados e documente exceções válidas.

### Dias 4-5: Monitore os primeiros resultados

Recalcule o cronograma e revise o movimento em datas e folga, caminho mais longo e marcos.

### Dia 6: Ajustes Finais

Resolva os itens incertos restantes com o responsável, proprietário do pacote ou líder de construção.

### Dia 7: Reavaliar e comparar

Execute a avaliação novamente e compare o resultado com o limite desejado.

## Acompanhando o progresso

Use um rastreador simples para gerenciar correções e aprovações.

| Data | Ação tomada | Impacto esperado | Resultado/Observação | Próxima etapa |
| --- | --- | --- | --- | --- |
| [Data] | Atraso SS revisado maior que a duração do antecessor | Identifique lógica fraca ou pouco clara | [Resultado observado] | Atribuir correções |
| [Data] | Relacionamento convertido para FS ou FF | Melhore a clareza da lógica do CPM | [Resultado observado] | Recalcular cronograma |
| [Data] | Atraso reduzido ou documentado | Melhore a rastreabilidade das revisões | [Resultado observado] | Reavaliar métrica |

## Se os resultados não melhorarem

Se os resultados não melhorarem, verifique se os mesmos padrões de relacionamento se repetem em uma área específica da EAP, disciplina ou seção copiada do cronograma. Descobertas repetidas podem indicar que a equipe está usando o SS lag como um atalho padrão em vez de modelar dependências reais.

Escale itens não resolvidos quando eles afetarem trabalhos críticos, quase críticos, contratuais, de aquisição, aprovação ou relacionados a transferências.

## Manutenção

Revise essa métrica durante cada atualização do cronograma e antes da aprovação da linha de base. Preste atenção especial após o desenvolvimento do cronograma copiado, resequenciamento, planejamento de recuperação ou grandes alterações de escopo.

## Lista de verificação resumida

- [ ] Resultado atual revisado
- [ ] Limite desejado confirmado
- [ ] Principal problema identificado
- [ ] Relacionamentos SS revisados
- [ ] Atraso excessivo corrigido ou justificado
- [ ] Substituições FS ou FF aplicadas quando necessário
- [ ] Trabalho oculto modelado quando apropriado
- [ ] Cronograma recalculado
- [ ] Resultados monitorados
- [ ] Avaliação repetida
- [ ] Próximas etapas documentadas
## Conteúdo relacionado
- [Relacionamentos SS com atraso maior que a duração do antecessor - Visão geral](01_overview_template.md)
- [Modelo de blog](03_blog_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
