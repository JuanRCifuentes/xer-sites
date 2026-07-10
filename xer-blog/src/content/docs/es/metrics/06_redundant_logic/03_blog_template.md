---
title: "Lógica Redundante en Cronogramas Primavera P6"
seoTitle: "Lógica Redundante en Cronogramas Primavera P6"
description: "Explica por qué Lógica Redundante en Cronogramas Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Lógica Redundante en Cronogramas Primavera P6"
  - "Primavera P6 Lógica Redundante en Cronogramas Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/redundant-logic-primavera-p6"
language: "es"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primarySearchIntent: "Explica por qué Lógica Redundante en Cronogramas Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/06_redundant_logic/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/06_redundant_logic/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Lógica Redundante en Cronogramas Primavera P6

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que evalúan lógica de cronogramas en Primavera P6.

## Gancho Inicial

Más lógica no siempre significa mejor lógica. Un cronograma puede parecer bien conectado mientras contiene relaciones duplicadas, rutas predecesoras repetidas y dependencias que no agregan control real.

## Introducción

La lógica es la columna vertebral de un cronograma CPM. Muestra cómo el trabajo fluye de una actividad a otra y permite que Primavera P6 calcule fechas, holgura y ruta crítica o ruta más larga.

La lógica redundante aparece cuando una relación repite una dependencia que ya está representada en otra parte de la red. Puede ser un duplicado exacto, una segunda relación entre las mismas actividades o un vínculo directo que repite una ruta previa.

Esta métrica identifica patrones de lógica redundante que deben revisarse y eliminarse salvo que estén claramente justificados. El objetivo es cero relaciones no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica si el cronograma contiene relaciones que no agregan una secuencia significativa. Ejemplos comunes incluyen el mismo predecesor conectado al mismo sucesor más de una vez, como FS más SS o FS más FF.

La métrica también revisa lógica predecesora heredada. Por ejemplo, si la Actividad A impulsa la Actividad B, y la Actividad B impulsa la Actividad C, una relación directa de A hacia C puede ser innecesaria salvo que represente una dependencia real separada.

SS más FF entre las mismas dos actividades puede ser aceptable cuando el solape es intencional. La relación SS puede controlar cuándo inicia el sucesor, mientras que la relación FF controla cuándo puede terminar.

## Por Qué Importa Este Tema

La lógica redundante hace que un cronograma sea más difícil de entender. Agrega ruido a la red y puede dificultar ver qué relación controla realmente las fechas.

También puede distorsionar la holgura, crear rutas conductoras falsas y complicar el análisis de demoras. Durante revisiones PMO o de calidad, genera dudas sobre si la red fue construida intencionalmente o acumulada mediante vínculos copiados.

## Causas Comunes de Resultados Deficientes

- Secciones copiadas que no fueron limpiadas
- Múltiples tipos de relación entre las mismas actividades
- FS más SS o FS más FF usados para forzar fechas
- Vínculos directos agregados aunque la dependencia ya existe por una cadena
- Relaciones agregadas durante actualizaciones sin revisar lógica existente
- Dependencias innecesarias usadas para que la red parezca más conectada

## Cómo Mejorar el Resultado

### 1. Encontrar Patrones de Relaciones Duplicadas

Identifique actividades conectadas por más de una relación. Preste atención a combinaciones FS más SS y FS más FF. En muchos casos, una relación representa la dependencia real y la otra es redundante.

Revise combinaciones SS más FF con más cuidado. Pueden ser válidas cuando se necesitan controles de inicio y finalización para trabajo solapado.

### 2. Revisar Lógica Predecesora Heredada

Busque actividades que tengan el mismo predecesor y tipo de relación que su propio predecesor. Si la misma dependencia ya existe por la ruta, la relación directa puede no ser necesaria.

Esta revisión puede extenderse varios pasos hacia atrás en la red. La pregunta es simple: ¿esta relación directa agrega una dependencia real o repite una ruta existente?

### 3. Eliminar Dependencias Innecesarias

Elimine relaciones que no representen acceso, aprobación, entrega, secuencia constructiva, secuencia de procura, control de riesgo o lógica contractual.

Después de eliminar una relación, recalcule el cronograma y revise holgura, lógica impulsora, ruta más larga e hitos. Si una fecha cambia inesperadamente, investigue si la relación era válida o si se necesita una relación más clara.

## Escenario de Ejemplo

Un cronograma tiene la Actividad A vinculada a la Actividad B con una relación FS y también con una relación SS. El planificador agregó el vínculo SS durante una actualización para forzar que B iniciara antes, pero el vínculo FS todavía representa la entrega real.

La revisión muestra que la relación SS no representa una condición real de inicio. Solo agrega confusión. El planificador elimina el vínculo SS y mantiene la relación FS.

En otra área, la Actividad A impulsa la Actividad B, y la Actividad B impulsa la Actividad C. La Actividad A también está vinculada directamente con C usando el mismo tipo de relación. El equipo confirma que no existe una condición separada de entrega o acceso. El vínculo directo A-C se elimina.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica y agrupar hallazgos por pares duplicados, lógica heredada y dependencias innecesarias.
- Días 2-3: Revisar primero relaciones críticas y casi críticas.
- Días 4-5: Eliminar lógica duplicada y recalcular el cronograma.
- Día 6: Confirmar excepciones y revisar movimiento del cronograma.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No elimine relaciones solo porque parecen duplicadas. Primero confirme la secuencia real del trabajo.

No mantenga vínculos duplicados porque parecen inofensivos. La lógica redundante puede distorsionar holgura y rutas conductoras.

No trate SS más FF como automáticamente incorrecto. Puede ser válido cuando se necesitan controles reales de inicio y finalización.

## Conclusiones Clave

- La lógica redundante repite una dependencia ya representada en otra parte.
- FS más SS o FS más FF entre las mismas actividades normalmente requiere revisión.
- SS más FF puede ser válido cuando ambos controles son reales.
- La lógica predecesora heredada puede crear vínculos directos innecesarios.
- El objetivo es cero relaciones redundantes no resueltas.

## Conclusión

La lógica redundante no mejora la calidad del cronograma. Hace que la red sea más difícil de leer, actualizar y defender.

Revisar esta métrica ayuda a mantener la red CPM limpia e intencional. La mejor lógica no es la red más complicada; es la red más clara que representa correctamente el trabajo.

## Llamado a la Acción

Revise la lógica redundante en su próxima actualización de Primavera P6. Para cada relación marcada, pregunte si agrega una dependencia real o solo repite lógica existente. Elimine lo innecesario y documente lo que se retenga intencionalmente.
## Contenido relacionado
- [Lógica Redundante en Cronogramas Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
