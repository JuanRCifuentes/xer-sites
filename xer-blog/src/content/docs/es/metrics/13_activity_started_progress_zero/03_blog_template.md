---
title: "Actividades Iniciadas con 0% de Avance en Primavera P6"
seoTitle: "Actividades Iniciadas con 0% de Avance en Primavera P6"
description: "Explica por qué Actividades Iniciadas con 0% de Avance en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Actividades Iniciadas con 0% de Avance en Primavera P6"
  - "Primavera P6 Actividades Iniciadas con 0% de Avance en Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/activity-started-progress-zero-primavera-p6"
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
primarySearchIntent: "Explica por qué Actividades Iniciadas con 0% de Avance en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/13_activity_started_progress_zero/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/13_activity_started_progress_zero/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Actividades Iniciadas con 0% de Avance en Primavera P6

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que validan actualizaciones de Primavera P6.

## Gancho Inicial

Cuando una actividad está marcada Started, el cronograma dice que el trabajo real comenzó. Si el avance sigue en 0%, los revisores preguntarán qué comenzó realmente.

## Introducción

Activity Status y avance deben contar una historia consistente. En Primavera P6, una actividad Started normalmente tiene Actual Start y algún avance reportado.

Cuando una actividad está Started pero el avance permanece en 0%, la actualización puede estar incompleta. El Actual Start puede ser incorrecto, el avance puede no haberse ingresado, o el Percent Complete Type puede no coincidir con la forma de medición.

Esta métrica identifica actividades con Activity Status = Started y avance = 0%. El objetivo es cero actividades no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica si una actividad iniciada tiene algún avance ganado o registrado. Si el trabajo realmente inició, el equipo normalmente debería poder reportar algún avance medible.

La revisión debe considerar el Percent Complete Type. Physical Percent Complete, Duration Percent Complete y Units Percent Complete pueden requerir campos de actualización diferentes.

Un resultado alto sugiere disciplina de actualización débil, cantidades de avance faltantes, problemas de importación o actividades marcadas iniciadas antes del inicio real.

## Por Qué Importa Este Tema

Actividades Started con 0% de avance pueden reducir la confianza en la actualización. No queda claro si el trabajo realmente comenzó o si la actividad se inició administrativamente.

Esto afecta reportes de avance, valor ganado, lookahead y revisión PMO. También puede generar confusión cuando se comparan reportes de campo con el cronograma P6.

## Causas Comunes de Resultados Deficientes

- Actual Start ingresado antes de que el trabajo comenzara
- Avance no actualizado después del inicio
- Physical Percent Complete dejado en 0
- Avance por duración o unidades no calculado como se esperaba
- Datos importados con estado pero sin avance correspondiente
- Equipos usando diferentes definiciones de inicio
- Trabajo iniciado cerca del corte sin avance medible

## Cómo Mejorar el Resultado

### 1. Confirmar si el Trabajo Realmente Inició

Revise el reporte de campo, actualización de disciplina o confirmación del responsable. Si el trabajo no inició realmente, elimine Actual Start y devuelva la actividad a Not Started.

Actual Start debe representar inicio real del trabajo, no intención de iniciar pronto.

### 2. Actualizar el Campo de Avance Correcto

Si el trabajo inició, identifique el Percent Complete Type de la actividad. Luego actualice el campo correcto.

Para Physical Percent Complete, ingrese avance físico medido. Para Duration Percent Complete, confirme que Remaining Duration refleje el trabajo realizado. Para Units Percent Complete, confirme unidades reales o avance de recursos.

### 3. Documentar Excepciones Raras

A veces una actividad inicia justo antes del corte y todavía no gana avance medible. Si el proyecto lo permite, documente la razón y dé seguimiento en la próxima actualización.

Estas excepciones deben ser raras. Si muchas actividades están Started con 0%, el proceso de actualización necesita revisión.

## Escenario de Ejemplo

Una actualización muestra "Instalar luminarias" como Started con Actual Start ingresado, pero Physical Percent Complete sigue en 0%.

El planificador consulta al líder eléctrico y aprende que la cuadrilla solo movilizó materiales, pero no instaló luminarias antes de la fecha de datos. La actividad fue marcada iniciada demasiado pronto.

El planificador elimina Actual Start y mantiene la actividad como Not Started. Se puede agregar una actividad separada de movilización o acopio si ese trabajo necesita seguimiento.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica e identificar actividades afectadas.
- Días 2-3: Confirmar inicio real con responsables.
- Días 4-5: Corregir Actual Start, avance o excepciones.
- Día 6: Revisar reportes de avance y valor ganado.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No marque actividades Started antes de que el trabajo real comience.

No actualice Actual Start sin actualizar el campo de avance correspondiente.

No ignore Percent Complete Type. El avance puede estar en un campo diferente al esperado.

## Conclusiones Clave

- Estado Started con 0% de avance es una inconsistencia de estado.
- El objetivo es cero actividades no resueltas.
- Confirme si el trabajo realmente inició antes de cambiar el avance.
- Actualice el campo correcto según Percent Complete Type.
- Las excepciones raras deben documentarse y seguirse.

## Conclusión

Esta métrica ayuda a mantener alineados estado y avance. Una actividad iniciada debe explicar claramente qué trabajo comenzó y cuánto avance se logró.

Gestionar esta métrica mejora reportes de avance, confianza en valor ganado y confiabilidad de actualizaciones en Primavera P6.

## Llamado a la Acción

Revise actividades marcadas Started con 0% de avance durante su próxima actualización. Confirme si el trabajo realmente inició y corrija Actual Start, avance o documentación antes de emitir reportes.
## Contenido relacionado
- [Actividades Iniciadas con 0% de Avance en Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
