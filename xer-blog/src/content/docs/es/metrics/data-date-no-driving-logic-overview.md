---
title: 'Actividades que inician en la fecha de datos sin lógica conductora — Descripción general'
sidebar:
  label: 'Sin lógica conductora en la fecha de datos — Descripción general'
description: 'Métrica de calidad del cronograma: actividades que inician en la fecha de datos de Primavera P6 sin lógica de predecesor conductora — qué mide, su objetivo de cero y por qué importa.'
pubDate: 'Junio 8, 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-3.jpg
---
# Descripción general

## Descripción

Esta métrica identifica las actividades abiertas o no iniciadas que están programadas para iniciar en la fecha de datos (data date) de Primavera P6 pero que no cuentan con lógica de predecesor válida que impulse ese inicio. En un cronograma CPM bien construido, una actividad normalmente debe iniciar porque el trabajo previo, el acceso al proyecto, las aprobaciones, las compras u otras condiciones requeridas han sido satisfechas lógicamente.

## Qué mide

Esta métrica mide el número de actividades cuya fecha de inicio coincide con la fecha de datos sin que exista una ruta de predecesor lógica que explique por qué el trabajo puede comenzar en ese punto.

## Umbral

Umbral objetivo: 0 actividades.

## Por qué importa

Las actividades que inician en la fecha de datos sin lógica conductora pueden debilitar la credibilidad del cronograma. Pueden hacer que el próximo período de trabajo parezca listo para iniciar incluso cuando el trabajo predecesor, las aprobaciones, los materiales o las condiciones de acceso no han sido modelados adecuadamente.

Esto importa porque la fecha de datos es el límite entre el desempeño real y el pronóstico. Si las actividades se acumulan en ese límite sin lógica, el pronóstico puede volverse poco confiable. Los valores de holgura pueden distorsionarse, la ruta más larga puede quedar poco clara y los equipos de proyecto pueden perder confianza en lo que el cronograma está realmente diciéndoles.

Para los usuarios de Primavera P6, esta métrica respalda una mejor disciplina de actualización, una lógica CPM más sólida y revisiones de calidad del cronograma más defendibles. Ayuda a los planificadores a confirmar que el trabajo está iniciando por una razón real del cronograma, no simplemente porque el software desplazó actividades sin impulsor hacia la fecha de actualización actual.

## Entrada de blog relacionada

- [Actividades que inician en la fecha de datos sin lógica conductora](/es/blog/activities-starting-on-data-date-no-driving-logic/)
