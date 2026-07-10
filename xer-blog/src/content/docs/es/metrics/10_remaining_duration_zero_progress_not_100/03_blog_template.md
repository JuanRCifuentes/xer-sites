---
title: "Actividades con Remaining Duration 0 y Avance Distinto de 100%"
seoTitle: "Actividades con Remaining Duration 0 y Avance Distinto de 100% - Primavera P6"
description: "Explica por qué Actividades con Remaining Duration 0 y Avance Distinto de 100% afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Actividades con Remaining Duration 0 y Avance Distinto de 100%"
  - "Primavera P6 Actividades con Remaining Duration 0 y Avance Distinto de 100%"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/remaining-duration-zero-progress-not-100-primavera-p6"
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
primarySearchIntent: "Explica por qué Actividades con Remaining Duration 0 y Avance Distinto de 100% afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/10_remaining_duration_zero_progress_not_100/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/10_remaining_duration_zero_progress_not_100/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Actividades con Remaining Duration 0 y Avance Distinto de 100%

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que validan actualizaciones de Primavera P6.

## Gancho Inicial

Si una actividad no tiene duración remanente, normalmente debería estar terminada. Cuando esa misma actividad muestra avance menor a 100%, el cronograma está enviando señales mixtas.

## Introducción

Las actualizaciones de Primavera P6 dependen de información de estado limpia. Remaining Duration le dice al cronograma cuánto tiempo falta para completar una actividad. El porcentaje de avance indica cuánto trabajo se ha logrado, según el método seleccionado.

Cuando Remaining Duration es 0 pero el avance no es 100%, esas señales no coinciden. La actividad puede estar completa pero sin Actual Finish, o puede tener trabajo pendiente aunque fue actualizada con duración remanente cero.

Esta métrica identifica actividades con Remaining Duration = 0 y avance <> 100%. El objetivo es cero actividades no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica consistencia entre tiempo remanente y avance reportado. Si una actividad no tiene duración remanente, normalmente significa que no queda trabajo por ejecutar. En ese caso, el avance debería ser 100% y la actividad debería tener estado correcto.

El resultado puede depender del Percent Complete Type. Physical Percent Complete, Duration Percent Complete y Units Percent Complete pueden comportarse de forma diferente. Por eso la revisión debe mirar duración remanente y método de avance juntos.

Un resultado alto sugiere que el proceso de actualización puede tener Actual Finish faltantes, duraciones remanentes incorrectas o captura inconsistente de avance.

## Por Qué Importa Este Tema

La consistencia de estado importa porque los datos de avance alimentan reportes, valor ganado, lookahead y decisiones de gestión.

Si una actividad parece no tener duración remanente pero no está completa, el pronóstico puede subestimar el trabajo pendiente. Si una actividad está completa pero el avance permanece bajo 100%, los reportes pueden subestimar trabajo completado.

Ambos casos reducen la confianza en la actualización.

## Causas Comunes de Resultados Deficientes

- Actual Finish faltante en actividades completadas
- Remaining Duration ajustado a 0 por error
- Physical Percent Complete no actualizado
- Percent Complete Type mal entendido
- Avance importado desde otro sistema sin validación
- Actividades marcadas como completas de forma inconsistente
- Proceso de corte de actualización no seguido

## Cómo Mejorar el Resultado

### 1. Confirmar si el Trabajo Está Completo

Comience verificando el estado en campo. Si la actividad está completa, confirme la fecha Actual Finish y ajuste el avance a 100% según el procedimiento del proyecto.

Si el trabajo no está completo, la actividad normalmente debe tener Remaining Duration mayor que 0.

### 2. Revisar el Percent Complete Type

Verifique si la actividad usa Physical, Duration o Units Percent Complete. La corrección debe coincidir con el método de control del proyecto.

Por ejemplo, si se usa Physical Percent Complete, puede ser necesario actualizar manualmente el campo de avance físico aunque la duración remanente haya llegado a cero.

### 3. Corregir el Estado del Cronograma

Para trabajo completado, ingrese Actual Finish y confirme avance de 100%. Para trabajo incompleto, restaure una Remaining Duration realista y actualice el avance según el método seleccionado.

Después de corregir, recalcule el cronograma y ejecute nuevamente la métrica.

## Escenario de Ejemplo

Una actualización muestra "Instalar bandejas de cables" con Remaining Duration = 0 y Physical Percent Complete = 85%. La actividad tiene Actual Start pero no Actual Finish.

El planificador consulta al ingeniero de campo y confirma que la instalación no está completa. Aún se necesitan tres días para terminar soportes finales y punch list.

El planificador restaura Remaining Duration a tres días y mantiene Physical Percent Complete en 85%. La actividad ahora refleja el trabajo completado y el esfuerzo remanente.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica e identificar actividades afectadas.
- Días 2-3: Confirmar estado de finalización con responsables.
- Días 4-5: Corregir Actual Finish, Remaining Duration y campos de avance.
- Día 6: Revisar reportes y salidas de valor ganado.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No asuma que Remaining Duration = 0 siempre significa que el trabajo está completo. Confirme el estado primero.

No cambie el avance a 100% sin verificar que la actividad realmente terminó.

No ignore Percent Complete Type. La corrección incorrecta puede crear nuevos problemas de reporte.

## Conclusiones Clave

- Remaining Duration = 0 y avance <> 100% es una inconsistencia de estado.
- El objetivo es cero actividades no resueltas.
- Revise Actual Finish, Remaining Duration y Percent Complete Type juntos.
- El trabajo completado debe cerrarse correctamente.
- El trabajo incompleto debe conservar Remaining Duration realista.

## Conclusión

Esta métrica ayuda a detectar un problema pequeño pero importante de actualización. No es solo un número en pantalla; afecta reportes de completación, calidad del pronóstico y confianza en la actualización.

Gestionar esta métrica mantiene limpio el estado de actividades y hace que los reportes de Primavera P6 sean más confiables.

## Llamado a la Acción

Revise actividades con Remaining Duration = 0 y avance distinto de 100% durante su próxima actualización. Confirme si cada actividad está completa y corrija Actual Finish, Remaining Duration o avance según corresponda.
## Contenido relacionado
- [Actividades con Remaining Duration 0 y Avance Distinto de 100% - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
