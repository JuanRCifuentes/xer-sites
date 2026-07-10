---
title: "Glossário de Planejamento e Controles de Projeto para Primavera P6"
seo_title: "Glossário de Planejamento e Controles de Projeto para Primavera P6"
meta_description: "Um glossário prático de Primavera P6, cronograma CPM, planejamento de projetos e termos de controles de projetos para planejadores, programadores, gerentes de projetos e equipes de PMO."
description: "Um glossário prático de Primavera P6, cronograma CPM, planejamento de projetos e termos de controles de projetos para planejadores, programadores, gerentes de projetos e equipes de PMO."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Glossário do Primavera P6"
  - "glossário de controles de projeto"
  - "termos de planejamento e programação"
  - "Glossário de programação de CPM"
  - "Termos do Primavera P6"
  - "termos de qualidade do cronograma"
  - "Revisão do cronograma do PMO"
  - "glossário do método do caminho crítico"
slug: "pt/blog/primavera-p6-glossary"
language: "pt"
content_type: "blog"
draft: false
version: "1.0"
topic: "Primavera P6 e controles de projeto"
audience:
  - "Engenheiros de planejamento"
  - "Engenheiros de controle de projeto"
  - "Agendadores"
  - "Gerentes de projeto"
  - "Equipes de PMO"
primary_search_intent: "Entenda a terminologia comum do Primavera P6, agendamento CPM, planejamento e controles de projeto."
related_metrics:
  - "06_metrics_pt"
related_blogs:
  - "06b_blogs_pt"
translation_of: "01b_blogs_en/00_GLOSSARY/00_glossary_en.md"
canonical_url: ""
last_reviewed: "2026-07-07"
pubDate: "2026-07-07"
---
# Glossário de Planejamento e Controles de Projeto para Primavera P6

Este glossário define termos comuns de planejamento, cronograma e controles de projeto usados no desenvolvimento de cronograma do Primavera P6, avaliação de qualidade de cronograma, revisões de PMO e relatórios de projeto. As descrições foram escritas para leitores com experiências variadas, desde planejadores juniores até profissionais experientes em controle de projetos.

## Um

### (Actual Cost) Custo real

Custo Real é o custo realmente incorrido para o trabalho concluído durante um período de relatório ou até a data. Nos controles do projeto, ele é comparado com o valor planejado e o valor agregado para compreender o desempenho dos custos. No Primavera P6, o custo real pode ser inserido manualmente, calculado a partir de recursos ou importado de outro sistema de custos dependendo da configuração do projeto.

### (Actual Date) Data real

Uma Data Real é uma data registrada que mostra quando o trabalho realmente começou ou terminou. No Primavera P6, as datas reais de início e término devem refletir o progresso de campo verificado, e não a intenção prevista. Datas reais incorretas podem distorcer a data dos dados, a duração restante, a folga, o valor agregado e os relatórios de desempenho do cronograma.

### (Actual Finish) Término real

Término Real é a data em que uma atividade foi concluída. Depois que uma atividade chega ao fim, ela normalmente é considerada concluída e não deve ter duração restante. Inserir um término real após a Data Date é um problema de qualidade do cronograma porque o desempenho real não deve ser registrado no futuro.

### (Actual Start) Início real

Início Real é a data em que o trabalho realmente começou em uma atividade. No Primavera P6, uma atividade com um início real, mas sem progresso ou revisão da duração restante, pode criar um status enganoso. As partidas reais devem ser validadas durante cada ciclo de atualização.

### (Activity) Atividade

Uma atividade é uma parte discreta do trabalho no cronograma. No Primavera P6, as atividades carregam datas, durações, relacionamentos, calendários, recursos, custos, códigos e status. As atividades são os blocos básicos usados ​​para calcular o cronograma de CPM.

### (Activity Calendar) Calendário de atividades

Um calendário de atividades define o horário de trabalho e de folga usado para agendar uma atividade. Os calendários afetam as datas de início, datas de término, durações, folga e comportamento de relacionamento. Nas revisões do cronograma P6, as atribuições incomuns do calendário são verificadas porque podem criar movimentos inesperados no cronograma.

### (Activity Code) Código de atividade

Um Código de Atividade é um campo de classificação usado para agrupar, filtrar, classificar e relatar atividades. Os códigos de atividade comuns incluem área, fase, disciplina, contratante, pacote de trabalho, responsabilidade e sistema. Uma boa codificação de atividades melhora a análise do cronograma, os relatórios e a supervisão do PMO.

### (Activity ID) ID da atividade

Activity ID é o identificador exclusivo atribuído a uma atividade no Primavera P6. Uma estrutura clara de ID de atividade ajuda os usuários a localizar, classificar e relatar o trabalho de forma consistente. Uma estrutura de ID deficiente geralmente não afeta o cálculo do CPM, mas pode reduzir a usabilidade e a auditabilidade do cronograma.

### (Activity Name) Nome da atividade

Nome da atividade é o título descritivo do trabalho que está sendo agendado. Um bom nome de atividade deve ser específico o suficiente para explicar o escopo do trabalho sem exigir que o leitor abra documentos externos. Nomes de atividades fracos dificultam as revisões do cronograma e a coordenação de campo.

### (Activity Status) Status da atividade

O Status da Atividade indica se uma atividade está Não Iniciada, Em Andamento ou Concluída. No P6, o status afeta o comportamento das datas, da duração restante, dos valores reais e dos cálculos de cronograma. O status deve ser consistente com as datas reais, porcentagem concluída e duração restante.

### (Ahead of Schedule) Antes do previsto

Antecipadamente significa que o trabalho está progredindo antes do plano ou linha de base aprovado. Deve ser medido usando uma comparação confiável de linha de base, valor agregado, análise de marcos ou revisão do caminho crítico, em vez de apenas por comparação visual de datas.

### (Approved Baseline) Linha de base aprovada

Uma Linha de Base Aprovada é a versão formalmente aceita do cronograma usada para medição de desempenho e controle de mudanças. Representa o plano acordado com o qual o progresso atual e as mudanças previstas são comparados.

### (As-Built Schedule) Cronograma As-Built

Um Cronograma As-Built representa como o trabalho realmente ocorreu. É frequentemente usado para lições aprendidas, análise de atrasos, suporte a reclamações e encerramento de projetos. Datas reais precisas de início e término são essenciais para um cronograma as-built confiável.

## B

### (Backward Pass) Passe para trás

Backward Pass é o processo de cálculo de CPM que determina as datas de atraso trabalhando retroativamente a partir do término do projeto ou do ponto de término necessário. Ele ajuda a calcular a folga e a identificar como as atividades atrasadas podem ocorrer sem atrasar o projeto ou o marco de conclusão selecionado.

### (Baseline) Linha de base

Uma Linha de Base é uma cópia salva de um cronograma do projeto usada como referência para comparação. No Primavera P6, as linhas de base permitem que as equipes comparem datas atuais, durações, progresso e variação em relação ao plano aprovado.

### (Baseline Finish) Término da linha de base

Término da Linha de Base é a data de término planejada armazenada no cronograma da linha de base. Comparar as datas de término atuais com as datas de término da linha de base ajuda a medir o atraso, o movimento previsto e o desempenho dos marcos.

### (Baseline Start) Início da linha de base

O início da linha de base é a data de início planejada armazenada no cronograma da linha de base. É usado para comparar a previsão atual com o plano original ou aprovado.

### (Budgeted Cost) Custo Orçado

Custo Orçado é o custo planejado atribuído ao trabalho antes da execução. Nos controles de projeto, o custo orçado dá suporte a cronogramas carregados de custos, análise de valor agregado, previsão de fluxo de caixa e relatórios de desempenho.

## C

### (Calendar) Calendário

Um calendário define dias úteis, dias não úteis, feriados, turnos e horários de trabalho. No Primavera P6, os calendários podem ser atribuídos a projetos, recursos e atividades. As diferenças de calendário podem afetar materialmente as datas, a folga e a lógica de sequência.

### (Calendar Exception) Exceção de calendário

Uma Exceção de Calendário é um ajuste específico de trabalho ou não, como feriado, desligamento, turno prolongado ou dia de trabalho especial. As exceções de calendário devem ser controladas porque podem alterar as datas calculadas e a folga.

### (Change Control) Controle de alterações

Controle de Mudanças é o processo formal para revisar, aprovar e documentar mudanças no escopo, cronograma, custo ou condições contratuais. No agendamento, o controle de alterações protege a linha de base e garante que as alterações previstas sejam rastreáveis.

### (Claim) Reivindicação

Uma reivindicação é uma solicitação formal de tempo adicional, dinheiro ou alívio contratual. A qualidade do cronograma é importante nos sinistros porque lógica fraca, atualizações deficientes e registros ausentes podem reduzir a credibilidade da análise de atrasos.

### (Complete Logic) Lógica Completa

Lógica Completa significa que as atividades estão adequadamente conectadas com predecessores e sucessores, exceto para exceções documentadas válidas, como marcos de início ou término do projeto. A lógica completa é um princípio fundamental de qualidade do cronograma.

### (Constraint) Restrição

Uma restrição é uma restrição de data aplicada a uma atividade ou marco. As restrições podem ser úteis quando representam requisitos contratuais ou externos reais, mas restrições excessivas ou injustificadas podem substituir a lógica do cronograma, distorcer a folga e enfraquecer a confiabilidade do CPM.

### (Contract Milestone) Marco do contrato

Um marco do contrato é uma data ou evento obrigatório definido pelo contrato. Os marcos do contrato devem ser claramente representados no cronograma, vinculados a uma lógica apropriada e monitorados durante cada ciclo de atualização.

### (Cost Loading) Carregamento de custos

Carregamento de custos é a atribuição de custos orçados a atividades, recursos ou elementos da EAP. Um cronograma carregado de custos pode dar suporte à previsão de fluxo de caixa, valor agregado e análise de desempenho de custos.

### (Critical Activity) Atividade Crítica

Uma Atividade Crítica é uma atividade que afeta diretamente a data de conclusão do projeto ou o ponto final do caminho crítico selecionado. Em muitos cronogramas, as atividades críticas têm folga total zero ou negativa, mas a definição exata depende das configurações do cronograma e do procedimento de controle do projeto.

### (Critical Path) Caminho Crítico

O Caminho Crítico é a sequência de atividades que determina a data mais próxima possível de conclusão do projeto ou a conclusão de um marco importante. Um caminho crítico confiável deve ser orientado por lógica, durações, calendários e restrições realistas.

### (Critical Path Method) Método do Caminho Crítico

O Método do Caminho Crítico, ou CPM, é o método de agendamento usado para calcular as datas das atividades, a folga e o caminho do trabalho que controla a conclusão do projeto. Primavera P6 usa cálculos de CPM para produzir datas de início e término previstas com base em durações, calendários, relacionamentos, restrições e status.

### (Current Schedule) Cronograma Atual

A Programação Atual é a programação ativa atualizada que mostra o progresso real e a previsão mais recente. Geralmente é comparado com a linha de base aprovada para avaliar a variação, o atraso e as necessidades de recuperação.

## D

### (Data Date) Data Date

A Data de Dados é a data de status no Primavera P6 que separa o desempenho real do trabalho de previsão. O trabalho antes da Data Date deve refletir o progresso real, enquanto o trabalho após a Data Date deve representar o plano restante. A disciplina de data e dados é essencial para atualizações confiáveis ​​do cronograma.

### (DCMA Schedule Assessment) Avaliação do cronograma DCMA

A Avaliação do Cronograma DCMA refere-se às verificações de qualidade do cronograma comumente associadas às diretrizes da Agência de Gerenciamento de Contratos de Defesa. Essas verificações analisam problemas como lógica ausente, folga alta, folga negativa, restrições, atrasos, leads e datas inválidas. São referências úteis, mas devem ser aplicadas com o contexto do projeto e o julgamento do PMO.

### (Delay) Atraso

Um Atraso é um evento ou condição que faz com que o trabalho ou um marco ocorra mais tarde do que o planejado. A análise de atrasos depende de uma lógica de cronograma confiável, atualizações precisas, linhas de base válidas e registros contemporâneos claros.

### (Delay Analysis) Análise de atraso

Análise de Atrasos é o processo de identificar, medir e explicar atrasos no cronograma. Os métodos comuns incluem análise de impacto de tempo, análise de janelas e comparação conforme planejado versus conforme construído. Um cronograma P6 de baixa qualidade torna a análise de atraso mais difícil de defender.

### (Deliverable) Entregável

Um entregável é uma saída definida que deve ser concluída, enviada, aprovada ou entregue. Nos cronogramas, os resultados podem ser representados como atividades ou marcos e devem estar vinculados ao trabalho que possibilitam.

### (Driving Logic) Lógica direcionadora

Lógica direcionadora é a lógica de relacionamento que determina o início ou término calculado de uma atividade. Se uma atividade começar na Data Date sem lógica direcionadora, o cronograma poderá não explicar por que o trabalho está pronto para começar.

### (Driving Predecessor) Predecessor direcionador

Um Predecessor direcionador é um relacionamento de antecessor que controla ou influencia diretamente o início ou o término de uma atividade sucessora. A identificação dos predecessores direcionadores ajuda os programadores a entender por que uma atividade está programada no momento em que está.

### (Driving Relationship) Relacionamento direcionador

Um relacionamento direcionador é um relacionamento que controla o tempo de uma atividade vinculada. No Primavera P6, a condução de indicadores de relacionamento direcionador pode ajudar os revisores a distinguir entre relacionamentos que existem e relacionamentos que realmente determinam datas.

### (Duration) Duração

Duração é a quantidade de tempo de trabalho necessário para concluir uma atividade. No P6, a duração é calculada utilizando o calendário atribuído. Durações irrealistas podem enfraquecer a credibilidade do cronograma, o planejamento antecipado e a análise do caminho crítico.

## E

### (Early Dates) Datas iniciais

Datas Antecipadas são as primeiras datas de início e término calculadas com base no avanço do cálculo de CPM. Eles mostram quando as atividades podem ocorrer se a lógica predecessora e as condições do calendário forem satisfeitas o mais cedo possível.

### (Earned Value) Valor agregado

Valor Agregado é um método de controle de projeto que mede o valor do trabalho realmente executado em relação ao valor planejado e ao custo real. Ajuda a avaliar o desempenho do cronograma e dos custos quando as regras de medição do cronograma e do progresso são confiáveis.

### (Engineering Schedule) Cronograma de Engenharia

Um Cronograma de Engenharia representa atividades de projeto, revisão, aprovação e produção de entrega. Deve ser integrado com a lógica de aquisição e construção para que o trabalho posterior seja realisticamente conduzido pela conclusão da engenharia.

### (Enterprise Project Structure) Estrutura do projeto empresarial

Enterprise Project Structure, ou EPS, é a hierarquia usada no Primavera P6 para organizar projetos em um portfólio ou organização. A estrutura EPS oferece suporte ao controle de acesso, relatórios e governança em nível de portfólio.

### (Expected Finish) Término esperado

Término Esperado é um campo de data P6 às vezes usado para influenciar quando se espera que uma atividade termine. Deve ser controlado cuidadosamente porque pode afetar o comportamento do cálculo do cronograma e ocultar uma lógica fraca se for usado sem uma governança clara.

## F

### (Finish Milestone) Marco de término

Um marco de término é uma atividade de duração zero que representa a conclusão de um evento ou entrega significativa. Normalmente deve ter uma lógica antecessora válida que explique como o marco é alcançado.

### (Finish-to-Finish Relationship) Relacionamento término-a-término

Um relacionamento Término a Término significa que a atividade sucessora não pode terminar até que a atividade predecessora termine, sujeita a qualquer atraso. É útil para trabalhos sobrepostos onde a conclusão de uma atividade controla a conclusão de outra.

### (Finish-to-Start Relationship) Relacionamento término-a-início

Um relacionamento término-a-início significa que a atividade sucessora não pode começar até que a atividade predecessora termine, sujeita a qualquer atraso. É o tipo de relacionamento mais comum e frequentemente mais claro nas programações de CPM.

### (Float) Folga

Folga é a quantidade de tempo que uma atividade pode se mover sem atrasar um ponto final definido. A folga é calculada a partir da lógica do cronograma, calendários, restrições e status. A folga deve ser interpretada com cuidado porque lógica deficiente ou restrições excessivas podem distorcê-lo.

### (Caminho de folga) Caminho de folga

Caminho de folga é um método P6 para rastrear caminhos de trabalho com base em cálculos de folga de uma atividade ou marco selecionado. A análise de caminho de folga pode ajudar a identificar caminhos quase críticos e identificar direcionadores além do caminho crítico primário.

### (Forecast Dates) Datas previstas

As Datas de Previsão são datas calculadas ou projetadas para o trabalho restante. Eles devem ser orientados por lógica, calendários, restrições e durações realistas, e não apenas por expectativas manuais.

### (Forward Pass) Passe para frente

Forward Pass é o processo de cálculo de CPM que determina as datas de início e término antecipado, avançando pela rede de cronograma a partir do início do projeto ou da Data de Dados.

### (Free Float) Folga livre

A folga livre é a quantidade de tempo que uma atividade pode ser adiada sem atrasar o início antecipado de sua sucessora imediata. É útil para coordenação de curto prazo, mas não substitui a folga total ou a análise do caminho crítico.

## G

### (Global Change) Mudança Global

Mudança Global é uma função do Primavera P6 usada para modificar vários valores de atividades com base em condições definidas. Pode ser poderoso, mas deve ser controlado porque mudanças amplas podem afetar involuntariamente a qualidade dos dados do cronograma.

### (Governance) Governança

Governança é o conjunto de padrões, processos de revisão, aprovações e controles usados para gerenciar a qualidade do cronograma e relatórios do projeto. A governança do PMO ajuda a garantir que os cronogramas sejam consistentes, confiáveis ​​e úteis para a tomada de decisões.

## H

### (Hammock Activity) Atividade de rede

Uma atividade de rede resume um período de tempo entre atividades ou marcos vinculados. As redes podem ser úteis para relatar trabalho indireto, esforço de gerenciamento ou durações em nível de resumo, mas não devem substituir a lógica detalhada do CPM.

### (Hard Constraint) Restrição rígida

Uma restrição rígida é uma restrição que restringe fortemente o cálculo do cronograma, como início obrigatório ou término obrigatório. Restrições rígidas podem substituir a lógica e criar flutuações enganosas, portanto devem ser raras, justificadas e documentadas.

### (High Float) Alta folga

Alta folga refere-se a atividades com folga total incomumente grande. Pode indicar falta de lógica, sequenciamento fraco, diferenças excessivas de calendário ou trabalho que não está devidamente vinculado à rede de agendamento.

## eu

### (In Progress Activity) Atividade em andamento

Uma atividade em andamento foi iniciada, mas ainda não foi concluída. Deve ter um início real, duração restante e valores de progresso que correspondam ao status da atualização. As atividades em andamento exigem uma revisão cuidadosa quando existe trabalho fora de sequência.

### (Interface Milestone) Marco da interface

Um Marco de Interface representa um ponto de transferência, dependência ou coordenação entre partes, sistemas, áreas, contratos ou pacotes de trabalho. Os marcos da interface devem ser claramente vinculados e monitorados porque muitas vezes impulsionam o trabalho posterior.

### (Invalid Date) Data inválida

Uma Data Inválida é uma condição de data que entra em conflito com a Data Date ou com a lógica de programação, como datas reais posteriores à Data Date ou datas de previsão anteriores à Data Date. Datas inválidas reduzem a credibilidade do cronograma.

## eu

### (Lag) Atraso

Lag é um atraso ou compensação aplicado a um relacionamento entre duas atividades. O atraso positivo pode representar tempo de espera, tempo de cura, tempo de revisão ou lacunas de mobilização. Atrasos excessivos ou não documentados podem ocultar atividades ausentes e reduzir a transparência do cronograma.

### (Late Dates) Datas atrasadas

Datas Atrasadas são as últimas datas calculadas de início e término que uma atividade pode ter sem atrasar o projeto ou o ponto final selecionado. Eles são determinados durante a passagem para trás e são usados ​​para calcular a folga.

### (Lead) Liderar

Lead é um atraso negativo, permitindo que um sucessor comece ou termine antes que o relacionamento do antecessor normalmente permitiria. Leads geralmente são desencorajados em cronogramas de qualidade porque podem tornar a lógica mais difícil de entender e defender.

### (Level of Effort) Nível de esforço

Nível de Esforço, ou LOE, é um tipo de atividade usado para representar o trabalho de apoio contínuo cuja duração depende de outras atividades. As atividades de LOE são úteis para gerenciamento de projetos, supervisão ou trabalho administrativo, mas não devem orientar o caminho crítico.

### (Logic) Lógica

Lógica é a rede de relacionamentos que define como as atividades dependem umas das outras. Uma boa lógica representa a sequência real de trabalho, acesso, aprovações, aquisição, testes, comissionamento e condições de entrega.

### (Logic Tie) Laço Lógico

Um Logic Tie é um relacionamento que conecta duas atividades ou marcos. Os vínculos lógicos são usados ​​para calcular a sequência e as datas em uma programação CPM.

### (Longest Path) Caminho mais longo

O Caminho Mais Longo é a sequência de atividades que determina o término calculado do projeto no Primavera P6. É frequentemente usado como um método de caminho crítico porque rastreia a conclusão do caminho, mesmo quando os valores de folga são afetados por restrições ou comportamento do calendário.

### (Lookahead Schedule) Cronograma de curto prazo

Um cronograma antecipado é uma visão de planejamento de curto prazo, geralmente cobrindo as próximas duas a oito semanas. Deve basear-se no cronograma atual do CPM e mostrar o trabalho que está lógicamente pronto, devidamente sequenciado e realista para execução em campo.

## M

### (Mandatory Finish) Término obrigatório

Término obrigatório é uma restrição rígida que exige que uma atividade ou marco termine em uma data específica. Ele pode substituir a lógica e distorcer a folga, portanto deve ser usado somente quando exigido contratualmente ou externamente.

### (Mandatory Start) Início Obrigatório

Início obrigatório é uma restrição rígida que exige que uma atividade ou marco comece em uma data específica. Pode fazer com que uma atividade pareça fixa, independentemente da lógica predecessora e deve ser usada com forte justificativa.

### (Milestone) Marco

Um marco é uma atividade de duração zero que representa um evento significativo, decisão, aprovação, transferência, início ou ponto final. Os marcos devem ser conectados lógicamente, a menos que sejam pontos de referência válidos para o início do projeto ou externos.

### (Missing Logic) Lógica ausente

Lógica ausente significa que uma atividade não possui um predecessor, um sucessor ou ambos necessários. A falta de lógica enfraquece o cálculo do CPM, a confiabilidade da folga, a análise do caminho crítico e a qualidade do cronograma.

## N

### (Near-Critical Activity) Atividade Quase Crítica

Uma atividade quase crítica está perto de se tornar crítica com base na análise de folga ou caminho. As equipes de PMO e de controle de projetos geralmente monitoram trabalhos quase críticos porque pequenos atrasos podem alterar o caminho crítico.

### (Negative Float) Folga negativa

Folga negativa significa que o cronograma calculado é posterior a uma restrição, marco ou data de término necessária. É um aviso de que o projeto ou marco pode não cumprir a data exigida sem ação de recuperação ou mudança aprovada.

### (Non-Driving Logic) Lógica não direcionadora

Lógica não direcionadora é um relacionamento que existe mas não controla a data calculada da atividade. As relações não direcionadoras ainda podem ser úteis, mas não explicam o momento atual do sucessor.

### (Not Started Activity) Atividade não iniciada

Uma atividade não iniciada não tem início real nem término real. Representa o trabalho restante que deve ser previsto por lógica, calendários, durações e restrições válidas.

## Ó

### (extremidade aberta) Fim Aberto

Um extremidade aberta é uma atividade sem um antecessor ou sucessor, exceto para exceções aprovadas de início ou término. As extremidades abertas são um problema comum de qualidade do cronograma porque quebram a rede lógica.

### (início aberto) início aberto

Um início aberto é uma atividade sem nenhuma lógica predecessora válida controlando seu início. Os inícios abertos podem fazer com que as atividades apareçam na Data Date ou no início do projeto sem um motivo real de cronograma.

### (término aberto) Término aberto

Um término aberto é uma atividade sem lógica sucessora válida ou ponto final de conclusão. Os términos em aberto podem impedir que o cronograma mostre como o trabalho afeta as atividades posteriores ou a conclusão do projeto.

### (Original Duration) Duração original

A Duração Original é o tempo de trabalho planejado atribuído a uma atividade antes que o progresso seja registrado. Deve representar um escopo de trabalho realista e suposições de produtividade.

### (Out-of-Sequence Progress) Progresso fora de sequência

O progresso fora de sequência ocorre quando o trabalho começa ou progride antes que sua lógica predecessora seja satisfeita. Pode refletir condições reais de campo, mas deve ser revisado porque afeta a lógica retida, o comportamento de substituição de progresso, a folga e as datas previstas.

## P

### (Percent Complete) Porcentagem concluída

Porcentagem concluída indica quanto de uma atividade foi concluída. No Primavera P6, a porcentagem concluída pode ser baseada na duração, física ou em unidades, dependendo das configurações. O tipo selecionado deve corresponder ao procedimento de controles do projeto.

### (Performance Measurement Baseline) Linha de base de medição de desempenho

A Linha de Base de Medição de Desempenho é o escopo, cronograma e plano orçamentário aprovados usados para medir o desempenho do projeto. Ele oferece suporte a valor agregado, análise de variação e relatórios gerenciais.

### (Physical Percent Complete) Porcentagem física concluída

A porcentagem física concluída é uma medida de progresso baseada na realização física real, e não na duração decorrida ou nas unidades gastas. É útil quando o progresso pode ser medido por quantidades instaladas, resultados ou verificação de campo.

### (Planned Value) Valor planejado

Valor planejado é o valor orçado do trabalho programado para ser concluído em um determinado momento. É usado no gerenciamento do valor agregado para comparar o progresso planejado com o desempenho obtido e real.

### (Planning) Planejamento

Planejamento é o processo de definir como o projeto será executado, incluindo sequência de escopo, pacote de trabalho, recursos, restrições, interfaces e estratégia de controle. O agendamento é uma saída do planejamento, mas o planejamento é mais amplo do que o cálculo de datas.

### (Planning Package) Pacote de planejamento

Um Pacote de Planejamento é uma parte do trabalho futuro que ainda não está suficientemente detalhado para um planejamento completo em nível de atividade. Deve eventualmente ser dividido em atividades detalhadas antes da execução.

### (Predecessor) Predecessor

Um Antecessor é uma atividade ou marco que deve ocorrer antes que outra atividade possa começar ou terminar de acordo com o relacionamento definido. Os antecessores explicam o que determina o momento do trabalho posterior.

### (Primavera P6) Primavera P6

Primavera P6 é um sistema de agendamento de projetos e gerenciamento de portfólio de projetos usado para desenvolver, atualizar, analisar e relatar cronogramas de CPM. Nos controles de projetos, o P6 é comumente usado para cronogramas de linha de base, atualizações mensais, análise de atrasos, planejamento de recursos e relatórios de PMO.

### (Procurement Schedule) Cronograma de Aquisições

Um Cronograma de Aquisições representa atividades de compras, dados de fornecedores, fabricação, entrega e logística. Deve estar vinculado aos insumos de engenharia e às necessidades de construção para que o cronograma mostre se os materiais e equipamentos estarão disponíveis a tempo.

### (Progress Override) Substituição de progresso

Substituição de Progresso é uma opção de programação do P6 que pode ignorar a lógica predecessora restante para atividades fora de sequência ao calcular o cronograma restante. Deve ser usado somente quando alinhado com o procedimento de controles do projeto porque pode alterar o comportamento da lógica de previsão.

### (Progress Update) Atualização de progresso

Uma Atualização de Progresso é o processo periódico de inserção de datas reais, durações restantes, porcentagem concluída, quantidades e outras informações de status no cronograma. Boas atualizações de progresso são essenciais para previsões confiáveis.

### (Project Controls) Controles do Projeto

Controles do Projeto é a disciplina de planejamento, medição, previsão e controle do escopo, cronograma, custo, risco, mudança e desempenho do projeto. Ele fornece as informações necessárias para decisões de gestão e ações corretivas.

### (Project Finish) Finalização do Projeto

Término do Projeto é o ponto de conclusão calculado ou necessário do projeto. Pode ser representado por um marco de término e deve estar lógicamente conectado ao trabalho necessário para concluir o projeto.

### (Project Must Finish By) O projeto deve terminar em

O projeto deve ser concluído até é uma data no nível do projeto P6 que pode criar folga negativa quando o término calculado excede o término exigido. Deve ser usado com cuidado e documentado porque afeta a interpretação da folga.

### (Project Start) Início do Projeto

O Início do Projeto é o ponto inicial do cronograma do projeto. Geralmente é representado por um marco de início ou data de início do projeto e deve estar alinhado com os requisitos do contrato, autorização ou aviso para prosseguir.

## R

### (Recovery Schedule) Cronograma de Recuperação

Um Cronograma de Recuperação é um plano revisado projetado para recuperar atrasos ou cumprir os marcos exigidos. Pode incluir re-sequenciamento, recursos adicionados, alteração de calendários, horas extras, trabalho paralelo ou alterações na estratégia de escopo. Os planos de recuperação devem ser realistas e apoiados pela lógica.

### (Relationship) Relacionamento

Um relacionamento é uma conexão lógica entre duas atividades ou marcos. No P6, os tipos de relacionamento incluem término para início, início para início, término para término e início para fim. Os relacionamentos são o núcleo do cálculo do cronograma CPM.

### (Remaining Duration) Duração restante

A Duração Restante é a quantidade de tempo de trabalho necessário para concluir uma atividade a partir da Data Date. Deve ser atualizado com base no progresso real e na produtividade realista, e não deixado como valor padrão.

### (Remaining Early Dates) Datas iniciais restantes

As Datas Antecipadas Remanescentes são datas antecipadas calculadas para o trabalho que permanece após a Data Date. Eles são afetados pela lógica, calendários, restrições e status atual.

### (Resource) Recurso

Um Recurso é mão de obra, equipamento, material ou outra capacidade atribuída a uma atividade. No P6, os recursos podem apoiar o planejamento da carga de trabalho, o carregamento de custos, a análise de produtividade e o nivelamento de recursos.

### (Resource Leveling) Nivelamento de recursos

Nivelamento de recursos é o processo de ajuste de datas de atividades com base na disponibilidade de recursos. Pode ser útil para um planejamento realista, mas deve ser revisado com cuidado porque pode alterar as datas fora da lógica normal do CPM.

### (Retained Logic) Lógica Retida

Lógica Retida é uma opção de programação do P6 que preserva a sequência lógica restante para trabalho fora de sequência. Pode atrasar o trabalho restante até que a lógica predecessora seja satisfeita. A configuração selecionada deve corresponder ao procedimento de atualização dos controles do projeto.

### (Risk Register) Registro de Risco

Um Registro de Riscos é uma lista controlada de riscos do projeto, incluindo causas, impactos, proprietários, respostas e status. Os riscos do cronograma do registro de riscos podem influenciar contingências, atividades de mitigação ou análise de riscos do cronograma.

## S

### (Schedule) Cronograma

Um Cronograma é um plano baseado em tempo que mostra a sequência, duração, tempo e dependências do trabalho do projeto. Um cronograma forte apoia a execução, previsão, coordenação, relatórios e tomada de decisões.

### (base do cronograma) Base de cronograma

Base do Cronograma é a explicação documentada de suposições, calendários, restrições, sequenciamento, produtividade, recursos, inclusões, exclusões e metodologia usada para construir o cronograma. Ajuda os revisores a compreender e defender o plano.

### (Schedule Compression) Compressão de cronograma

A compactação de cronograma é o processo de encurtar a duração do cronograma por meio de métodos como travamento, rastreamento rápido, novo sequenciamento, turnos adicionais ou alterações de recursos. A compressão deve ser avaliada quanto ao risco e viabilidade.

### (Schedule Forecast) Previsão de cronograma

Uma Previsão do Cronograma é o tempo previsto do trabalho restante com base no progresso atual, lógica, durações, calendários, restrições e condições conhecidas do projeto. Uma boa previsão depende de atualizações precisas e de uma rede de horários confiável.

### (Schedule Health Check) Verificação de integridade do cronograma

Uma verificação de integridade do cronograma é uma revisão estruturada da qualidade do cronograma. Geralmente examina lógica, restrições, atrasos, leads, flutuações, durações, calendários, datas inválidas, alinhamento de linha de base e disciplina de atualização.

### (Schedule Narrative) Narrativa do cronograma

Uma Narrativa do Cronograma é a explicação escrita enviada com uma atualização do cronograma. Normalmente descreve o progresso, as mudanças no caminho crítico, os atrasos, os riscos, as ações de mitigação, o movimento dos marcos e as principais suposições.

### (Schedule Performance Index) Índice de desempenho do cronograma

O Índice de Desempenho do Cronograma, ou SPI, é uma medida de valor agregado calculada como o valor agregado dividido pelo valor planejado. O SPI abaixo de 1,0 indica menos trabalho ganho do que o planejado, enquanto o SPI acima de 1,0 indica mais trabalho ganho do que o planejado.

### (Schedule Quality) Qualidade do cronograma

Qualidade do cronograma é o grau em que um cronograma é completo, lógico, realista, controlado e útil para previsões. A qualidade depende de uma lógica sólida, calendários válidos, durações razoáveis, status preciso, restrições controladas e relatórios claros.

### (Schedule Risk Analysis) Análise de risco do cronograma

A Análise de Risco do Cronograma é o processo de avaliação da incerteza nas durações, lógica e riscos do cronograma para estimar datas prováveis de conclusão. Muitas vezes utiliza métodos de simulação e requer um cronograma base confiável.

### (Schedule Variance) Variação de cronograma

A variação do cronograma é a diferença entre o desempenho planejado e o real ou previsto. Pode ser medido usando datas, valor agregado, movimento de marcos ou comparação de linha de base.

### (Scheduling) Programação do cronograma

Programação é o processo de conversão do plano do projeto em uma sequência baseada no tempo de atividades, durações, relacionamentos, calendários e restrições. O agendamento oferece suporte ao planejamento de execução e controle de desempenho.

### (Scope) Escopo

Escopo é o trabalho necessário para entregar os objetivos do projeto. Um cronograma deve representar todo o escopo aprovado no nível apropriado de detalhe.

### (Soft Constraint) Restrição Suave

Uma restrição suave é uma restrição de data que influencia, mas não substitui totalmente o cálculo do cronograma, como Iniciar em ou Depois ou Terminar em ou Antes. As restrições suaves ainda requerem justificação e não devem substituir a lógica.

### (Start Milestone) Marco inicial

Um marco inicial é uma atividade de duração zero que representa o início de uma fase principal, pacote de trabalho ou evento do projeto. Normalmente deve ter lógica sucessora e, a menos que seja um início de projeto válido, predecessor apropriado ou lógica de autorização.

### (Start-to-Finish Relationship) Relacionamento início-a-término

Um relacionamento início-a-término significa que o sucessor não pode terminar até que o antecessor comece, sujeito a qualquer atraso. É uma lógica rara e muitas vezes considerada incomum, por isso deve ser revisada e justificada quando usada.

### (Start-to-Start Relationship) Relacionamento início-a-início

Um relacionamento início-a-início significa que o sucessor não pode iniciar até que o antecessor inicie, sujeito a qualquer atraso. É útil para trabalhos sobrepostos, mas deve ser apoiado por pressupostos de coordenação realistas.

### (Status Date) Data de status

Data de status é outro termo frequentemente usado para data de dados. Marca o ponto através do qual o progresso real foi relatado e a partir do qual o trabalho restante é previsto.

### (Successor) Sucessor

Um Sucessor é uma atividade ou marco que depende de outra atividade. A lógica sucessora mostra como uma atividade afeta o trabalho posterior e a conclusão do projeto.

## T

### (Target Schedule) Cronograma Alvo

Um Cronograma Alvo é uma versão de referência usada para comparação, muitas vezes semelhante a uma linha de base. Na terminologia P6, os cronogramas-alvo eram usados ​​em versões mais antigas e são geralmente comparáveis ​​aos conceitos básicos.

### (Threshold) Limite

Um Limite é um limite aceitável ou valor alvo usado para avaliar a qualidade ou o desempenho do cronograma. Por exemplo, uma métrica de cronograma pode definir um limite alvo de zero atividades lógicas ausentes.

### (Time Impact Analysis) Análise de impacto no tempo

A análise de impacto no tempo é um método de análise de atraso que insere um evento de atraso ou fragnet em uma atualização adequada do cronograma para medir seu efeito na conclusão do projeto ou nos marcos.

### (Total Float) Folga total

A folga total é a quantidade de tempo que uma atividade pode ser adiada sem atrasar o término do projeto ou o ponto de restrição selecionado. É um resultado chave do CPM, mas pode ser distorcido por restrições, calendários, lógica ausente e configurações de cronograma.

## você

### (Update Cycle) Ciclo de atualização

Um Ciclo de Atualização é o processo recorrente de status do cronograma, como atualização semanal ou mensal. Inclui coletar o progresso, inserir dados reais, revisar a lógica, recalcular o cronograma, analisar alterações e emitir relatórios.

### (User Defined Field) Campo definido pelo usuário

Um campo definido pelo usuário, ou UDF, é um campo personalizado no Primavera P6 usado para capturar informações específicas do projeto. As UDFs podem oferecer suporte a relatórios, trilhas de auditoria, atribuições de responsabilidades ou rastreamento de métricas.

## V

### (Variance) Variação

A variação é a diferença entre os valores planejados, reais, de linha de base ou previstos. Na programação, as variações comuns incluem variação inicial, variação final, variação de duração e variação de custo ou valor agregado.

## W

### (What-If Schedule) Cronograma de variações hipotéticas

Um cronograma de variações hipotéticas é um cronograma de cenário usado para testar possíveis mudanças, ações de mitigação, atrasos ou estratégias de recuperação. Deve ser claramente separado do calendário oficial actual, a menos que seja formalmente aprovado.

### (Work Breakdown Structure) Estrutura Analítica do Trabalho

Estrutura Analítica do Trabalho, ou EAP, é a divisão hierárquica do escopo do projeto em componentes gerenciáveis. No Primavera P6, a EAP organiza atividades e oferece suporte ao planejamento, relatórios, atribuição de responsabilidades e controle de cronograma.

### (Work Package) Pacote de Trabalho

Um Pacote de Trabalho é um grupo gerenciável de trabalho dentro da EAP, geralmente atribuído a uma disciplina, contratado, área ou proprietário responsável. Os pacotes de trabalho ajudam a conectar as atividades do cronograma à responsabilidade de execução.

### (Working Day) Dia útil

Um Dia Útil é um dia disponível para trabalhar de acordo com o calendário atribuído. Os dias úteis afetam durações, datas de início, datas de término, folga e cálculos lógicos.
