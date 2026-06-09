---
title: 'Atividades Iniciando na Data de Dados sem Lógica Condicionante — Visão Geral'
sidebar:
  label: 'Sem Lógica Condicionante na Data de Dados — Visão Geral'
description: 'Métrica de qualidade do cronograma: atividades iniciando na Data de Dados do Primavera P6 sem lógica predecessor condicionante — o que mede, sua meta zero e por que importa.'
pubDate: 'Junio 8, 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-3.jpg
---
# Visão Geral

## Descrição

Esta métrica identifica atividades abertas ou não iniciadas que estão programadas para iniciar na Data de Dados do Primavera P6 mas não possuem lógica predecessor válida condicionando esse início. Em um cronograma CPM bem construído, uma atividade normalmente deve iniciar porque o trabalho predecessor, o acesso ao projeto, aprovações, suprimentos ou outras condições necessárias foram logicamente satisfeitas.

## O Que Mede

Esta métrica mede o número de atividades cuja data de início está alinhada com a Data de Dados sem um caminho predecessor lógico que explique por que o trabalho pode começar naquele ponto.

## Limite

Limite-alvo: 0 atividades.

## Por Que Importa

Atividades que começam na Data de Dados sem lógica condicionante podem enfraquecer a credibilidade do cronograma. Podem fazer com que o próximo período de trabalho pareça pronto para começar mesmo quando o trabalho predecessor, aprovações, materiais ou condições de acesso não foram devidamente modelados.

Isso importa porque a Data de Dados é o limite entre o desempenho real e a previsão. Se atividades se acumulam nesse limite sem lógica, a previsão pode se tornar não confiável. Os valores de folga podem ser distorcidos, o caminho mais longo pode ficar obscuro, e as equipes do projeto podem perder a confiança no que o cronograma está realmente dizendo.

Para usuários do Primavera P6, esta métrica suporta melhor disciplina de atualização, lógica CPM mais forte e revisões de qualidade de cronograma mais defensáveis. Ajuda os planejadores a confirmar que o trabalho está iniciando por uma razão real de cronograma, não simplesmente porque o software moveu atividades não condicionadas para a data de atualização atual.

## Artigo Relacionado do Blog

- [Atividades Iniciando na Data de Dados sem Lógica Condicionante](/pt/blog/activities-starting-on-data-date-no-driving-logic/)
