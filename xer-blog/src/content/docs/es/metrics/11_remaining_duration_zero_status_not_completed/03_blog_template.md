---
title: "Actividades con Remaining Duration 0 y Estado No Completed"
seo_title: "Actividades con Remaining Duration 0 y Estado No Completed - Primavera P6"
meta_description: "Explica por qué Actividades con Remaining Duration 0 y Estado No Completed afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Actividades con Remaining Duration 0 y Estado No Completed"
  - "Primavera P6 Actividades con Remaining Duration 0 y Estado No Completed"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-blog-article-remaining-duration-zero-status-not-completed-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Actividades con Remaining Duration 0 y Estado No Completed afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/11_remaining_duration_zero_status_not_completed/01_overview_template.md"
  - "02_metrics_es/11_remaining_duration_zero_status_not_completed/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/11_remaining_duration_zero_status_not_completed/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Actividades con Remaining Duration 0 y Estado No Completed

## Título

Actividades con Remaining Duration 0 y Estado No Completed

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que validan actualizaciones de Primavera P6.

## Gancho Inicial

Cuando una actividad no tiene duración remanente, el cronograma está diciendo que no falta tiempo para terminarla. Si la misma actividad no está marcada Completed, la actualización necesita revisión.

## Introducción

Las actualizaciones de Primavera P6 dependen de datos de estado consistentes. Remaining Duration muestra cuánto tiempo falta para completar una actividad. Activity Status muestra si la actividad está Not Started, In Progress o Completed.

Cuando Remaining Duration es 0 pero el estado no es Completed, esos campos no coinciden. La actividad puede estar terminada pero sin Actual Finish, o puede tener trabajo pendiente aunque fue actualizada con duración remanente cero.

Esta métrica identifica actividades con Remaining Duration = 0 y Activity Status <> Completed. El objetivo es cero actividades no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica si el tiempo remanente coincide con el estado de finalización. Si no hay duración remanente, la actividad normalmente debería estar completa y tener Actual Finish.

Si la actividad sigue In Progress, normalmente debería tener Remaining Duration salvo que se esté cerrando en la misma actualización. Si está Not Started, Remaining Duration de 0 suele ser un problema claro de estado.

Un resultado alto sugiere Actual Finish faltantes, duraciones remanentes incorrectas, problemas de estado importado o actualizaciones manuales inconsistentes.

## Por Qué Importa Este Tema

La consistencia de estado afecta reportes, lookahead, valor ganado, curvas de avance y decisiones de gestión.

Si las actividades no tienen duración remanente pero no están completadas, el cronograma puede subestimar trabajo pendiente o no cerrar trabajo completado correctamente. En ambos casos, la actualización pierde confiabilidad.

Esto es especialmente importante antes de emitir reportes a clientes, PMO o dirección del proyecto.

## Causas Comunes de Resultados Deficientes

- Actual Finish faltante en actividades completadas
- Remaining Duration ajustado a 0 por error
- Activity Status no cambiado a Completed
- Avance importado desde otro sistema sin validación
- Flujo manual de actualización incompleto
- Milestones o tipos especiales no revisados cuidadosamente
- Proceso de corte de actualización no seguido

## Cómo Mejorar el Resultado

### 1. Confirmar el Estado Real de la Actividad

Comience confirmando si el trabajo realmente está completo. Use reportes de campo, actualizaciones de disciplina, registros de inspección o confirmación del responsable.

Si el trabajo está completo, la actividad debe cerrarse correctamente. Si no está completo, Remaining Duration debe restaurarse.

### 2. Corregir Actividades Completadas

Para trabajo completado, ingrese Actual Finish y marque la actividad Completed. Confirme que los valores de avance y duración remanente estén alineados con el procedimiento del proyecto.

Esto mantiene consistentes las listas de actividades completadas, reportes de avance y salidas de valor ganado.

### 3. Corregir Actividades Incompletas

Para trabajo incompleto, restaure una Remaining Duration realista. Mantenga la actividad como In Progress o Not Started según su estado real.

Después de corregir, recalcule el cronograma y ejecute nuevamente la métrica para confirmar que la inconsistencia se resolvió.

## Escenario de Ejemplo

Una actualización muestra "Completar cableado de paneles" con Remaining Duration = 0, pero Activity Status todavía está In Progress. La actividad tiene Actual Start pero no Actual Finish.

El planificador consulta al líder eléctrico y confirma que el trabajo terminó dos días antes de la fecha de datos. La actualización quedó incompleta porque se redujo la duración remanente a cero, pero no se ingresó Actual Finish.

El planificador ingresa Actual Finish y marca la actividad Completed. La actividad ahora coincide con el estado real y los reportes de avance son más limpios.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica e identificar actividades afectadas.
- Días 2-3: Confirmar estado de finalización con responsables.
- Días 4-5: Corregir Actual Finish, Activity Status o Remaining Duration.
- Día 6: Revisar reportes y salidas de valor ganado.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No asuma que Remaining Duration = 0 siempre significa que la actividad está completa. Confirme el estado de campo primero.

No marque actividades Completed sin una fecha Actual Finish precisa.

No restaure Remaining Duration sin verificar si la actividad realmente terminó.

## Conclusiones Clave

- Remaining Duration = 0 y status <> Completed es una inconsistencia de estado.
- El objetivo es cero actividades no resueltas.
- El trabajo completado debe tener Actual Finish y estado Completed.
- El trabajo incompleto debe conservar Remaining Duration realista.
- Importaciones y flujos manuales deben validarse.

## Conclusión

Esta métrica ayuda a detectar un problema común de calidad de actualización. Mantiene alineados el trabajo remanente, las fechas reales y el estado para que el cronograma cuente una historia consistente.

Gestionar esta métrica mejora la precisión de reportes, la confianza en el avance y la confiabilidad de las actualizaciones en Primavera P6.

## Llamado a la Acción

Revise actividades con Remaining Duration = 0 y estado distinto de Completed durante su próxima actualización. Confirme el estado real de cada actividad y corrija Actual Finish, Activity Status o Remaining Duration antes de emitir reportes.
## Contenido relacionado
- [Actividades con Remaining Duration 0 y Estado No Completed - Descripción general](01_overview_template.md)
- [Actividades con Remaining Duration 0 y Estado No Completed - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
