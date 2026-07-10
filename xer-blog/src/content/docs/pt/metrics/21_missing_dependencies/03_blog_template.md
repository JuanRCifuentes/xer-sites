---
title: "Dependências ausentes no Primavera P6"
seo_title: "Dependências ausentes no Primavera P6"
meta_description: "Veja por que Dependências ausentes no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Dependências ausentes no Primavera P6"
  - "Primavera P6 Dependências ausentes no Primavera P6"
  - "qualidade do cronograma"
  - "Primavera P6"
  - "controles de projeto"
  - "lógica CPM"
  - "revisão do cronograma"
slug: "pt-blog-article-missing-dependencies-primavera-p6"
language: "pt"
content_type: "blog"
version: "1.0"
topic: "Qualidade do cronograma"
audience:
  - "Planejadores"
  - "Schedulers"
  - "Equipes de controles de projeto"
primary_search_intent: "Veja por que Dependências ausentes no Primavera P6 afeta a lógica CPM, a folga e a confiabilidade do cronograma no Primavera P6."
related_metrics:
  - "06_metrics_pt/21_missing_dependencies/01_overview_template.md"
  - "06_metrics_pt/21_missing_dependencies/02_guide_template.md"
related_blogs:
  - "06b_blogs_pt/01_WHAT A SCHEDULE IS/01_blog.md"
  - "06b_blogs_pt/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/21_missing_dependencies/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Dependências ausentes no Primavera P6

As dependências são a espinha dorsal de uma programação CPM. Eles explicam como o trabalho passa de uma atividade para outra, o que deve acontecer antes que o trabalho possa começar e o que depende da conclusão de cada atividade. Quando faltam dependências, o cronograma ainda pode ser calculado, mas é mais difícil confiar no resultado.

Esta métrica identifica atividades com lógica de dependência ausente no Primavera P6. Abrange atividades sem antecessores, atividades sem sucessores e atividades isoladas que não possuem nenhum dos dois. Muitas vezes são chamados de inícios abertos e finais abertos. Alguns podem ser válidos, mas a maioria deve ser revista.

Uma atividade sem antecessor pode começar sem qualquer requisito lógico de trabalho anterior. Isso pode ser aceitável para um marco de início de projeto aprovado ou para um início autorizado externamente. Para trabalhos normais de projeto, geralmente é um sinal de alerta. As atividades de construção, engenharia, aquisição, testes e entrega normalmente dependem de algo: acesso, liberação do projeto, entrega de material, instalação prévia, inspeção, aprovação de licença ou outra condição do projeto.

Uma atividade sem sucessor pode terminar sem passar seu resultado para qualquer outra atividade. Isso pode ser aceitável para um marco de término de conclusão do projeto. Mas para a maioria das atividades, a questão é simples: o que é que este trabalho permite? Se nada depender disso, a atividade pode estar faltando uma lógica de acompanhamento, pode estar obsoleta ou pode não estar devidamente integrada ao cronograma.

As atividades isoladas são a preocupação mais evidente. Se uma atividade não tem antecessor nem sucessor, ela não faz realmente parte da rede CPM. Pode ficar no arquivo, conter datas e aparecer em relatórios, mas não ajuda o cronograma a explicar a sequência do trabalho.

As dependências ausentes afetam mais do que os índices de qualidade lógica. Eles podem distorcer as datas de início, datas de término, valores de folga e o caminho crítico. Um início aberto pode desviar-se para a Data Date ou começar muito cedo porque nada o está impedindo. Um acabamento aberto pode apresentar folga que não reflete o impacto da obra no restante do projeto. Durante o PMO ou a revisão do cliente, essas lacunas tornam mais difícil explicar por que as datas são confiáveis.

A revisão prática começa com um layout P6 que inclui ID da atividade, nome da atividade, EAP, tipo de atividade, status da atividade, início, término, folga total, calendário, restrições, predecessores e sucessores. Filtre por atividades sem predecessores, sem sucessores e nenhum dos dois. Em seguida, separe as exceções válidas dos itens que precisam de correção.

As exceções válidas devem ser limitadas. O início do projeto aprovado pode não precisar de um antecessor. O marco de conclusão final pode não precisar de um sucessor. Alguns marcos da interface externa podem representar trabalho controlado fora do cronograma. Estas exceções devem ser documentadas para que os revisores não tenham que adivinhar.

Para partidas abertas, adicione lógica predecessora que reflita a condição real necessária antes que o trabalho possa começar. Pode ser uma atividade prévia de construção, aprovação de projeto, entrega de material, liberação de acesso, inspeção, licença ou entrega de interface. O relacionamento deve descrever a dependência real, e não apenas conectar a atividade para passar na verificação.

Para acabamentos abertos, adicione uma lógica sucessora que represente o que se segue. O sucessor pode ser outra atividade de trabalho, testes, comissionamento, rotatividade, encerramento, um marco ou um pacote posterior. O objetivo é mostrar como o resultado da atividade afeta o restante do plano.

Para atividades isoladas, primeiro confirme se a atividade ainda é necessária. Se for um escopo válido, conecte-o corretamente. Se estiver obsoleto, duplicado ou deixado para trás em uma atualização antiga, remova-o ou feche-o de acordo com o procedimento de controles do projeto.

O limite alvo deve ser zero atividades não resolvidas. Isso não significa que todo antecessor ou sucessor ausente esteja automaticamente errado. Isso significa que toda exceção deve ser intencional e documentada. Dependências ausentes inexplicáveis ​​enfraquecem a rede de agendamento.

Limpar essa métrica melhora o cronograma imediatamente. Isso torna o caminho crítico mais confiável, a folga mais fácil de interpretar e os planos antecipados mais úteis. Também ajuda a equipe do projeto a ver se o cronograma é um modelo real do trabalho ou apenas uma lista de atividades com datas.
## Conteúdo relacionado
- [Dependências ausentes no Primavera P6 - Visão geral](01_overview_template.md)
- [Dependências ausentes no Primavera P6 - Guia de melhoria](02_guide_template.md)
- [O que é um cronograma](../../06b_blogs_pt/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Lógica Robusta](../../06b_blogs_pt/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
