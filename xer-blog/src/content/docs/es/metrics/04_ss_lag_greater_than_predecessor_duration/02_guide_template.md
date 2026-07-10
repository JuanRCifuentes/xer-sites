---
title: "Relaciones SS con Lag Mayor que la Duración del Predecesor - Guía de mejora"
seo_title: "Relaciones SS con Lag Mayor que la Duración del Predecesor - Guía de mejora - Primavera P6"
meta_description: "Aprende a corregir Relaciones SS con Lag Mayor que la Duración del Predecesor en Primavera P6 con validación de lógica, fechas y control del cronograma."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Relaciones SS con Lag Mayor que la Duración del Predecesor"
  - "Primavera P6 Relaciones SS con Lag Mayor que la Duración del Predecesor"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-improvement-guide-ss-lag-greater-than-predecessor-duration-primavera-p6"
language: "es"
content_type: "metric"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Aprende a corregir Relaciones SS con Lag Mayor que la Duración del Predecesor en Primavera P6 con validación de lógica, fechas y control del cronograma."
related_metrics:
  - "02_metrics_es/04_ss_lag_greater_than_predecessor_duration/01_overview_template.md"
  - "02_metrics_es/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Relaciones SS con Lag Mayor que la Duración del Predecesor - Guía de mejora

## Propósito

Esta guía ayuda a revisar y corregir relaciones Start-to-Start donde el lag es mayor que la duración de la actividad predecesora. Apoya una lógica CPM más clara al reemplazar lag SS excesivo por lógica que represente mejor la secuencia real del trabajo.

## Antes de Empezar

Reúna la siguiente información antes de tomar acción:

- Resultado actual de la evaluación para esta métrica.
- Lista de relaciones SS donde el lag es mayor que la duración del predecesor.
- Activity ID, nombres, WBS, duraciones, calendarios y estado del predecesor y sucesor.
- Lag de relación, tipo de relación y restricciones relacionadas.
- Opciones de cálculo del cronograma y base de calendario usada para el lag.
- Lógica de campo, ingeniería, procura o entrega que explique la dependencia prevista.

## Entienda su Resultado

Un resultado sólido es cero relaciones SS no resueltas donde el lag supera la duración del predecesor.

Un resultado aceptable puede incluir excepciones documentadas, pero deben ser poco frecuentes. Un lag SS largo suele indicar que el tipo de relación no coincide con la dependencia modelada.

Un resultado débil significa que el cronograma contiene múltiples vínculos de inicio a inicio donde el sucesor inicia después de una demora mayor que la duración del predecesor.

## Objetivo de Mejora

El objetivo es tener 0 relaciones SS no resueltas con lag mayor que la duración del predecesor.

El objetivo es confirmar si cada relación debe permanecer como SS, convertirse a lógica FS o FF, reducir el lag, o documentarse como excepción válida.

## Plan de Acción

### Paso 1: Identificar el Problema Principal

Cree un layout o exportación de P6 que liste relaciones SS donde el lag es mayor que la duración del predecesor. Incluya Activity ID del predecesor y sucesor, Activity Name, WBS, Original Duration, Remaining Duration, Relationship Type, Lag, Calendar, Total Float y Activity Status.

Revise cada relación y pregunte:

- ¿Por qué el sucesor inicia después de una demora tan larga?
- ¿El sucesor depende realmente del inicio del predecesor o de su finalización?
- ¿El lag es mayor que la duración original, la duración remanente o ambas?
- ¿El lag modela procura, curado, revisión, acceso u otro periodo real de espera?
- ¿Una relación FS o FF haría más clara la dependencia?

```mermaid
flowchart TD
    A["Relacion SS con lag mayor que la duracion del predecesor"] --> B{"La dependencia es realmente de inicio?"}
    B -- "No" --> C["Reemplazar con logica FS o FF valida"]
    B -- "Si" --> D{"El lag esta justificado y es medible?"}
    D -- "No" --> E["Reducir o eliminar el lag"]
    D -- "Si" --> F["Documentar excepcion aprobada"]
    C --> G["Recalcular y reevaluar"]
    E --> G
    F --> G
```

### Paso 2: Aplicar las Correcciones Recomendadas

Si el sucesor debe iniciar después de que el predecesor termina, reemplace la relación SS por una relación FS. Si el trabajo puede solaparse pero el sucesor no puede terminar hasta que el predecesor termine, use lógica FF.

Si la relación realmente es de inicio a inicio, revise el valor del lag. Reduzca lag excesivo cuando fue usado como marcador aproximado o heredado de lógica copiada. Si el lag representa una espera real, confirme que unidad, calendario y explicación sean correctos.

Evite usar lag largo como sustituto de actividades que deberían ser visibles en el cronograma. Si el lag representa revisión, curado, entrega, movilización o aprobación, considere modelarlo como una actividad separada.

### Paso 3: Eliminar Bloqueos Comunes

Los bloqueos comunes incluyen lógica copiada de cronogramas anteriores, periodos de espera ocultos, confusión de calendarios y presión por mantener la red simple. Resuélvalos confirmando la dependencia prevista con el responsable.

Otro bloqueo es tratar el lag como inofensivo. Un lag largo puede ser difícil de revisar, ocultar riesgo y complicar el análisis de demoras.

### Paso 4: Validar los Cambios

Recalcule el cronograma después de las correcciones. Ejecute nuevamente la métrica y confirme que cada elemento restante esté corregido o documentado como excepción aprobada.

Revise holgura total, ruta más larga, ruta crítica e hitos de corto plazo. Si los cambios de relación mueven fechas clave, comunique el resultado al líder de control de proyectos o revisor PMO.

## Cronograma de Mejora

### Día 1: Revisar y Diagnosticar

Ejecute la métrica, confirme la lista de relaciones afectadas y separe elementos en tipo de relación incorrecto, lag excesivo, actividad oculta, problema de calendario y posible excepción.

### Días 2-3: Implementar Acciones Prioritarias

Corrija primero relaciones críticas y casi críticas. Convierta lógica SS a FS o FF donde corresponda, reduzca lag injustificado y documente excepciones válidas.

### Días 4-5: Monitorear Resultados Iniciales

Recalcule el cronograma y revise cambios en holgura, ruta más larga y fechas de hitos.

### Día 6: Ajustes Finales

Resuelva elementos inciertos con la disciplina responsable, dueño del paquete o líder de construcción.

### Día 7: Reevaluar y Comparar

Ejecute nuevamente la evaluación y compare el resultado contra el umbral objetivo.

## Seguimiento del Progreso

Use un tracker simple para gestionar correcciones y aprobaciones.

| Fecha | Acción Realizada | Impacto Esperado | Resultado / Observación | Siguiente Paso |
| --- | --- | --- | --- | --- |
| [Fecha] | Revisar lag SS mayor que duración del predecesor | Identificar lógica débil o poco clara | [Resultado observado] | Asignar correcciones |
| [Fecha] | Convertir relación a FS o FF | Mejorar claridad CPM | [Resultado observado] | Recalcular cronograma |
| [Fecha] | Reducir o documentar lag | Mejorar trazabilidad de revisión | [Resultado observado] | Reevaluar métrica |

## Si los Resultados No Mejoran

Si los resultados no mejoran, revise si los mismos patrones se repiten en un área WBS, disciplina o sección copiada del cronograma. Hallazgos repetidos pueden indicar que el equipo usa lag SS como atajo estándar.

Escale elementos no resueltos cuando afecten trabajo crítico, casi crítico, contractual, de procura, aprobación o entrega.

## Mantenimiento

Revise esta métrica en cada actualización del cronograma y antes de aprobar una línea base. Preste especial atención después de copiar cronogramas, resecuenciar, planificar recuperación o cambios importantes de alcance.

## Lista de Verificación Resumida

- [ ] Resultado actual revisado
- [ ] Umbral objetivo confirmado
- [ ] Problema principal identificado
- [ ] Relaciones SS revisadas
- [ ] Lag excesivo corregido o justificado
- [ ] Reemplazos FS o FF aplicados donde corresponda
- [ ] Trabajo oculto modelado donde corresponda
- [ ] Cronograma recalculado
- [ ] Resultados monitoreados
- [ ] Evaluación repetida
- [ ] Próximos pasos documentados
## Contenido relacionado
- [Relaciones SS con Lag Mayor que la Duración del Predecesor - Descripción general](01_overview_template.md)
- [Plantilla de Blog](03_blog_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
