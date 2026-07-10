---
title: "Actividades Fuera de Secuencia en Primavera P6"
seoTitle: "Actividades Fuera de Secuencia en Primavera P6"
description: "Explica por qué Actividades Fuera de Secuencia en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Actividades Fuera de Secuencia en Primavera P6"
  - "Primavera P6 Actividades Fuera de Secuencia en Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/activities-out-of-sequence-primavera-p6"
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
primarySearchIntent: "Explica por qué Actividades Fuera de Secuencia en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/08_activities_out_of_sequence/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/08_activities_out_of_sequence/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Actividades Fuera de Secuencia en Primavera P6

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que evalúan actualizaciones de Primavera P6.

## Gancho Inicial

A veces el trabajo inicia antes de que el cronograma diga que debería hacerlo. Eso puede reflejar avance real en campo, pero también puede mostrar un problema en la actualización, la lógica o la forma en que se reporta el plan actual.

## Introducción

Las actividades fuera de secuencia son actividades que han iniciado o avanzado antes de que su lógica predecesora se haya cumplido. En Primavera P6, es un problema común durante las actualizaciones porque la ejecución real no siempre sigue exactamente la red planificada.

El avance fuera de secuencia no es automáticamente malo. Los proyectos resecuencian trabajo por acceso, recursos, clima, permisos, liberaciones de diseño y muchas otras razones. El problema es si el cronograma refleja esa resecuenciación claramente.

Esta métrica identifica actividades con avance que entra en conflicto con la secuencia lógica planificada. El objetivo es cero actividades no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica si el avance real es consistente con la lógica de relaciones del cronograma. Por ejemplo, si la Actividad B tiene un predecesor Finish-to-Start desde la Actividad A, pero B ya inició mientras A no está completa, B puede estar fuera de secuencia.

El resultado puede señalar un simple error de estado, como una fecha real faltante en el predecesor. También puede señalar lógica desactualizada o una resecuenciación real de campo.

En Primavera P6, el impacto depende en parte de opciones de cálculo como retained logic y progress override. Estas opciones afectan cómo se calcula el trabajo remanente después del avance fuera de secuencia.

## Por Qué Importa Este Tema

Las actividades fuera de secuencia pueden reducir la confianza en el pronóstico. Pueden distorsionar la holgura, cambiar la ruta más larga y hacer que el cronograma sea más difícil de explicar.

También importan para gobernanza. Los revisores PMO y equipos de control necesitan saber si el cronograma representa el plan actual o si todavía contiene lógica de una secuencia anterior.

## Causas Comunes de Resultados Deficientes

- Trabajo iniciado antes de completar predecesores
- Fechas reales faltantes o incorrectas
- Estado del predecesor no actualizado correctamente
- Resequenciación de campo no reflejada en la lógica
- Relaciones desactualizadas después de planes de recuperación
- Confusión sobre retained logic y progress override
- Avance aceptado sin revisión de lógica

## Cómo Mejorar el Resultado

### 1. Revisar Primero el Estado

Antes de cambiar lógica, confirme las fechas reales y el estado de la actividad marcada y sus predecesores. Muchos problemas se deben a actual finishes faltantes, actual starts incorrectos o duraciones remanentes mal actualizadas.

Si los datos son incorrectos, corrija la actualización y recalcule antes de cambiar relaciones.

### 2. Comparar la Lógica con el Plan Actual

Si el avance es real, pregunte si la relación existente todavía refleja la secuencia de ejecución planificada. Si el campo cambió la secuencia, la lógica también puede necesitar cambio.

No elimine relaciones solo para limpiar la métrica. Reemplace lógica desactualizada con relaciones válidas que expliquen el plan actual aprobado.

### 3. Confirmar el Enfoque de Cálculo en P6

Revise si el proyecto usa retained logic o progress override. Retained logic conserva el control del predecesor sobre el trabajo remanente. Progress override puede permitir que el trabajo continúe aunque la lógica predecesora esté incompleta.

La configuración correcta depende del procedimiento de control de proyectos, pero el equipo debe entender cuál se usa antes de interpretar el resultado.

## Escenario de Ejemplo

Un cronograma muestra "Instalar bandeja de cables" con un predecesor desde "Completar soportes metálicos". Durante la actualización, la actividad de bandejas recibe actual start aunque los soportes no están marcados como completos.

El planificador revisa el reporte de campo y encuentra que los soportes se completaron en Área A pero no en Área B. Las actividades originales eran demasiado amplias para la secuencia real.

El cronograma se revisa por área. Los soportes completados en Área A impulsan la instalación de bandejas en Área A, mientras que Área B permanece correctamente secuenciada. El problema fuera de secuencia queda resuelto.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica y confirmar la fecha de datos.
- Días 2-3: Corregir errores de estado y fechas reales.
- Días 4-5: Revisar resecuenciación real y lógica desactualizada.
- Día 6: Confirmar excepciones y revisar movimiento del cronograma.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No cambie lógica antes de verificar si la actualización de estado es correcta.

No ignore el avance fuera de secuencia porque el trabajo ocurrió en campo. El cronograma aún debe representar el plan actual.

No cambie retained logic o progress override sin entender el procedimiento de control del proyecto.

## Conclusiones Clave

- Las actividades fuera de secuencia muestran avance que entra en conflicto con la lógica predecesora.
- La causa puede ser error de estado, error de lógica o resecuenciación real.
- Las opciones de cálculo de P6 afectan cómo aparece el problema en el pronóstico.
- El objetivo es cero actividades no resueltas.
- La resecuenciación aprobada debe reflejarse en la lógica.

## Conclusión

El avance fuera de secuencia es una señal de que el cronograma necesita revisión. A veces la solución es una corrección simple de estado. Otras veces requiere actualizar la lógica para reflejar cómo se ejecuta ahora el proyecto.

Gestionar esta métrica mejora la calidad de actualización, la confiabilidad del pronóstico y la confianza en la ruta crítica o ruta más larga.

## Llamado a la Acción

Revise actividades fuera de secuencia durante su próxima actualización de Primavera P6. Para cada elemento, decida si el problema es estado, lógica o resecuenciación real, y corrija el cronograma antes de emitir reportes.
## Contenido relacionado
- [Actividades Fuera de Secuencia en Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
