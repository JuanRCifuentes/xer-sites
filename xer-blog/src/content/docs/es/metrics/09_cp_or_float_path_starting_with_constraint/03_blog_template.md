---
title: "Ruta Crítica o Ruta de Holgura que Inicia con una Restricción"
seoTitle: "Ruta Crítica o Ruta de Holgura que Inicia con una Restricción - Primavera P6"
description: "Explica por qué Ruta Crítica o Ruta de Holgura que Inicia con una Restricción afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Ruta Crítica o Ruta de Holgura que Inicia con una Restricción"
  - "Primavera P6 Ruta Crítica o Ruta de Holgura que Inicia con una Restricción"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/cp-or-float-path-starting-with-restriccion-primavera-p6"
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
primarySearchIntent: "Explica por qué Ruta Crítica o Ruta de Holgura que Inicia con una Restricción afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/09_cp_or_float_path_starting_with_restriccion/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/09_cp_or_float_path_starting_with_restriccion/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Ruta Crítica o Ruta de Holgura que Inicia con una Restricción

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que evalúan ruta crítica y rutas de holgura en Primavera P6.

## Gancho Inicial

Una ruta crítica debe contar la historia del trabajo. Si la ruta comienza con una restricción, puede estar contando la historia de una fecha impuesta.

## Introducción

En Primavera P6, las restricciones pueden ser útiles cuando una fecha es requerida externamente. Un hito de inicio, notice to proceed, permiso o fecha de acceso del cliente puede ser legítimo.

El problema aparece cuando una ruta crítica o ruta de holgura inicia con una actividad restringida que no es el inicio aprobado del proyecto. En ese caso, la ruta puede estar controlada por una fecha y no por lógica predecesora.

Esta métrica identifica rutas críticas o de holgura que comienzan con una actividad restringida, excluyendo el inicio aprobado del proyecto. El objetivo es cero rutas no resueltas.

## Qué Significa Este Parámetro

Este parámetro revisa la primera actividad de una ruta crítica o de holgura. Si esa actividad tiene una restricción, el revisor debe preguntar si la ruta realmente está impulsada por lógica.

El inicio aprobado del proyecto normalmente es una excepción válida. Todo proyecto necesita un punto de partida. Pero un inicio restringido más adelante puede indicar lógica faltante, fechas forzadas o un requisito externo que necesita documentación.

Un resultado alto sugiere que rutas clave pueden estar controladas por restricciones. Un resultado bajo sugiere que los inicios de ruta están mejor respaldados por secuenciación real.

## Por Qué Importa Este Tema

Las revisiones de ruta crítica y rutas de holgura se usan para pronósticos, reportes PMO y análisis de demoras. Si una ruta inicia con una restricción innecesaria, puede no explicar qué impulsa realmente el trabajo.

Esto puede distorsionar holgura, ocultar lógica predecesora faltante y hacer que el cronograma sea más difícil de defender.

## Causas Comunes de Resultados Deficientes

- Restricciones heredadas de líneas base antiguas
- Restricciones usadas para forzar fechas objetivo
- Lógica predecesora o de interfaz faltante
- Fechas externas de acceso, permiso o cliente sin documentación
- Planes de recuperación que dejan restricciones temporales
- Confusión entre restricciones de inicio del proyecto y restricciones posteriores

## Cómo Mejorar el Resultado

### 1. Confirmar el Inicio de la Ruta

Ejecute el reporte de ruta crítica o ruta de holgura e identifique la primera actividad de cada ruta. Verifique si tiene restricción primaria, fecha de restricción, fecha esperada u otro control de fecha.

Si la actividad restringida es el inicio aprobado del proyecto, documéntela como excepción válida.

### 2. Revisar la Base de la Restricción

Para inicios restringidos posteriores, pregunte quién exigió la fecha y por qué. Razones válidas pueden incluir notice to proceed, acceso del cliente, permiso, punto regulatorio o interfaz contractual.

Si no hay una razón externa clara, la restricción debe cuestionarse.

### 3. Restaurar Secuenciación por Lógica

Si falta lógica predecesora, agregue lógica válida que refleje la dependencia real. Si la restricción es innecesaria, elimínela y recalcule el cronograma.

Después del recálculo, revise si la ruta crítica o de holgura cambió. Un cambio importante puede revelar que la ruta anterior estaba impulsada por fechas y no por lógica.

## Escenario de Ejemplo

Un cronograma muestra la ruta crítica iniciando con "Iniciar instalación de equipos". La actividad tiene una restricción Start On or After, pero no es el inicio del proyecto.

Durante la revisión, el planificador encuentra que la restricción fue agregada durante un plan de recuperación para forzar una ventana objetivo. La lógica real desde entrega de materiales y entrega de área estaba faltante.

El planificador elimina la restricción, agrega la lógica faltante de entrega y entrega, y recalcula el cronograma. La ruta crítica cambia, pero ahora explica los impulsores reales del trabajo.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica e identificar actividades restringidas que inician rutas.
- Días 2-3: Confirmar excepciones de inicio y bases externas de restricción.
- Días 4-5: Eliminar restricciones innecesarias y agregar lógica faltante.
- Día 6: Revisar movimiento de ruta y documentar excepciones aprobadas.
- Día 7: Reevaluar la métrica y comparar contra el umbral.

## Errores a Evitar

No asuma que todo inicio de ruta restringido es válido. El inicio del proyecto puede ser válido, pero restricciones posteriores requieren revisión.

No elimine restricciones sin entender su fuente. Algunas reflejan requisitos contractuales o externos reales.

No acepte una ruta crítica sin revisar si está impulsada por lógica.

## Conclusiones Clave

- Una ruta crítica o de holgura normalmente debe iniciar por lógica, no por una restricción innecesaria.
- El inicio aprobado del proyecto es una excepción válida.
- Inicios restringidos posteriores pueden indicar lógica faltante o fechas forzadas.
- El objetivo es cero rutas no resueltas.
- Las restricciones externas válidas deben documentarse.

## Conclusión

Esta métrica ayuda a probar si las rutas clave están impulsadas por lógica. Las restricciones no siempre son incorrectas, pero deben justificarse cuando inician una ruta crítica o de holgura.

Gestionar esta métrica mejora la credibilidad de la ruta, la confiabilidad de la holgura y la confianza en reportes PMO y análisis de demoras.

## Llamado a la Acción

Revise la primera actividad de cada ruta crítica o ruta de holgura en su próxima actualización de Primavera P6. Si la ruta inicia con una restricción, confirme si es el inicio aprobado, un requisito externo válido o un problema que debe corregirse.
## Contenido relacionado
- [Ruta Crítica o Ruta de Holgura que Inicia con una Restricción - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
