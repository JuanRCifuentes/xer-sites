---
title: "Relaciones FF con Lag Mayor que la Duración del Sucesor"
seoTitle: "Relaciones FF con Lag Mayor que la Duración del Sucesor - Primavera P6"
description: "Explica por qué Relaciones FF con Lag Mayor que la Duración del Sucesor afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Relaciones FF con Lag Mayor que la Duración del Sucesor"
  - "Primavera P6 Relaciones FF con Lag Mayor que la Duración del Sucesor"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/ff-lag-greater-than-successor-duration-primavera-p6"
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
primarySearchIntent: "Explica por qué Relaciones FF con Lag Mayor que la Duración del Sucesor afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/05_ff_lag_greater_than_successor_duration/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/05_ff_lag_greater_than_successor_duration/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Relaciones FF con Lag Mayor que la Duración del Sucesor

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que evalúan la lógica de cronogramas en Primavera P6.

## Gancho Inicial

Una relación Finish-to-Finish normalmente debe describir dos actividades cuyas fechas de finalización necesitan estar vinculadas. Pero cuando el lag FF es mayor que la duración del sucesor, la relación puede ocultar más de lo que explica.

## Introducción

En Primavera P6, la lógica FF suele usarse cuando dos actividades pueden solaparse pero el sucesor no puede terminar hasta que el predecesor termine. Un lag FF pequeño puede ser útil cuando se necesita un desplazamiento corto de cierre, revisión o entrega.

El problema aparece cuando el lag FF es mayor que la duración del sucesor. Si el sucesor dura cinco días y el lag FF es de diez días, el desplazamiento de finalización es más largo que la actividad controlada. Eso puede significar que el cronograma oculta un periodo de espera, una actividad faltante o un tipo de dependencia diferente.

Esta métrica identifica relaciones FF donde el lag es mayor que la duración del sucesor. El objetivo es cero relaciones no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica si una relación FF se usa de forma lógica. La lógica FF conecta la finalización del predecesor con la finalización del sucesor. Cuando el lag supera la duración del sucesor, puede empujar la finalización del sucesor de una forma difícil de entender desde la lista de actividades.

Eso no significa automáticamente que la relación sea incorrecta, pero sí requiere revisión. La dependencia puede estar mejor representada como lógica FS, lógica SS o una actividad separada que muestre claramente el periodo de espera.

Un resultado alto sugiere que el cronograma puede estar usando lag largo para ocultar trabajo, esperas o secuenciación poco clara. Un resultado bajo sugiere que la lógica FF y el lag se usan con más cuidado.

## Por Qué Importa Este Tema

El lag largo puede hacer que un cronograma sea más difícil de entender. Oculta tiempo dentro de una relación en lugar de mostrar el trabajo o periodo de espera dentro de la red de actividades.

Esto puede afectar holgura, visibilidad de ruta crítica, revisión de ruta más larga y preparación para análisis de demoras. Si un revisor no puede entender por qué un sucesor termina cuando termina, el cronograma es más difícil de defender.

## Causas Comunes de Resultados Deficientes

- Relaciones FF copiadas de cronogramas antiguos
- Lags usados como marcadores durante planificación temprana
- Periodos de espera ocultos dentro del lag
- Lógica FS o SS modelada incorrectamente como FF más lag
- Diferencias de calendario que dificultan interpretar el lag
- Periodos de revisión, aprobación, comisionamiento o entrega no modelados como actividades

## Cómo Mejorar el Resultado

### 1. Revisar la Intención de la Relación

Filtre relaciones FF donde el lag es mayor que la duración del sucesor. Revise predecesor, sucesor, lag, calendarios, duración, estado y holgura total.

Pregunte qué representa la relación. Si el sucesor depende de la finalización del predecesor antes de poder iniciar, puede ser más clara una relación FS. Si el sucesor puede iniciar después de que el trabajo previo comience, una relación SS puede ser más apropiada.

### 2. Reemplazar Lógica FF Débil

Use FS cuando el sucesor no pueda iniciar hasta que el predecesor termine. Use SS cuando el sucesor pueda iniciar después de que el predecesor comience o alcance un punto definido de avance.

Si el lag representa una espera real, considere si esa espera debe modelarse como actividad separada. Esto suele ser más claro para revisiones, actualizaciones y análisis de demoras.

### 3. Documentar Excepciones Válidas

Algunos lags FF largos pueden ser intencionales. Si la relación es válida, documente la razón y confirme el calendario del lag. La explicación debe ser suficientemente clara para un revisor PMO o líder de control de proyectos.

## Escenario de Ejemplo

Un cronograma incluye una relación FF desde "Completar instalación" hacia "Paquete de cierre aprobado" con un lag de quince días. La actividad de paquete de cierre tiene una duración de cinco días.

Esto significa que la finalización del paquete de cierre se retrasa por más tiempo que la duración del sucesor. La lógica puede estar intentando representar revisión o aprobación que no es visible como actividad.

El planificador revisa la secuencia y reemplaza el lag largo con una actividad separada: "Revisión del cliente del paquete de cierre". Ahora el cronograma muestra el periodo real de espera y la lógica es más fácil de actualizar y defender.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica e identificar relaciones afectadas.
- Días 2-3: Revisar primero relaciones críticas y casi críticas.
- Días 4-5: Reemplazar lógica FF débil, reducir lag injustificado o modelar esperas ocultas.
- Día 6: Confirmar excepciones y revisar movimiento del cronograma.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No trate todo lag como incorrecto. El lag puede ser útil cuando representa un desplazamiento real y limitado.

No deje lag largo sin explicación. Si el lag es mayor que la duración del sucesor, necesita una razón clara.

No oculte trabajo dentro del lag cuando el trabajo debe ser visible como actividad.

## Conclusiones Clave

- La lógica FF debe representar una dependencia basada en finalización.
- Lag mayor que la duración del sucesor suele indicar lógica débil o poco clara.
- FS, SS o una actividad separada pueden explicar mejor la dependencia.
- El objetivo es cero relaciones no resueltas.
- Las excepciones válidas deben documentarse.

## Conclusión

Esta métrica ayuda a encontrar relaciones FF donde el lag puede ocultar la dependencia real. El objetivo no es eliminar todo lag FF, sino asegurar que sea razonable, visible y defendible.

Revisar esta métrica mejora la claridad CPM, la confiabilidad de la holgura y la confianza en la ruta más larga.

## Llamado a la Acción

Revise relaciones FF donde el lag sea mayor que la duración del sucesor en su próxima actualización de Primavera P6. Para cada una, pregunte si la relación es realmente de finalización a finalización. Si no lo es, reemplácela con lógica más clara o modele directamente el periodo de espera.
## Contenido relacionado
- [Relaciones FF con Lag Mayor que la Duración del Sucesor - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
