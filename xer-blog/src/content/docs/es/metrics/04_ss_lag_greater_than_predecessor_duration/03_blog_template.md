---
title: "Relaciones SS con Lag Mayor que la Duración del Predecesor"
seo_title: "Relaciones SS con Lag Mayor que la Duración del Predecesor - Primavera P6"
meta_description: "Explica por qué Relaciones SS con Lag Mayor que la Duración del Predecesor afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
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
slug: "es-blog-article-ss-lag-greater-than-predecessor-duration-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Relaciones SS con Lag Mayor que la Duración del Predecesor afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/04_ss_lag_greater_than_predecessor_duration/01_overview_template.md"
  - "02_metrics_es/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Relaciones SS con Lag Mayor que la Duración del Predecesor

## Título

Relaciones SS con Lag Mayor que la Duración del Predecesor

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que evalúan la lógica de cronogramas en Primavera P6.

## Gancho Inicial

Una relación Start-to-Start normalmente debe describir trabajo que puede iniciar después de que otra actividad inicia. Pero cuando el lag SS es mayor que la duración del predecesor, la lógica empieza a contar otra historia.

## Introducción

En Primavera P6, el lag suele representar un periodo de espera entre dos actividades. Un lag SS pequeño puede ser útil cuando el trabajo inicia después de cierta cantidad de avance. Por ejemplo, una cuadrilla de terminación puede iniciar dos días después del inicio de instalación.

El problema aparece cuando el lag SS es mayor que la duración del predecesor. Si el predecesor dura cinco días y el lag SS es de diez días, el sucesor no inicia realmente porque el predecesor inició. Inicia después de una demora que supera la finalización del predecesor.

Esta métrica identifica relaciones SS donde el lag es mayor que la duración del predecesor. El objetivo es cero relaciones no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica si una relación SS se usa de forma lógica. La lógica SS conecta el inicio del predecesor con el inicio del sucesor. Cuando el lag supera la duración del predecesor, el inicio del sucesor se empuja más allá de la finalización del predecesor.

Eso no significa automáticamente que la relación sea incorrecta, pero sí requiere revisión. La dependencia puede estar mejor representada como lógica FS, lógica FF o una actividad separada que muestre claramente el periodo de espera.

Un resultado alto sugiere que el cronograma puede estar usando lag largo para ocultar trabajo, esperas o dependencias basadas en finalización. Un resultado bajo sugiere que la lógica SS y el lag se usan con más cuidado.

## Por Qué Importa Este Tema

El lag largo puede hacer que un cronograma sea más difícil de entender. Oculta tiempo dentro de una relación en lugar de mostrar el trabajo o periodo de espera dentro de la red de actividades.

Esto puede afectar holgura, visibilidad de ruta crítica, revisión de ruta más larga y preparación para análisis de demoras. Si un revisor no puede entender por qué un sucesor inicia cuando inicia, el cronograma es más difícil de defender.

## Causas Comunes de Resultados Deficientes

- Relaciones SS copiadas de cronogramas antiguos
- Lags usados como marcadores durante planificación temprana
- Periodos de espera ocultos dentro del lag
- Lógica FS o FF modelada incorrectamente como SS más lag
- Diferencias de calendario que dificultan interpretar el lag
- Periodos de procura, curado, aprobación o acceso no modelados como actividades

## Cómo Mejorar el Resultado

### 1. Revisar la Intención de la Relación

Filtre relaciones SS donde el lag es mayor que la duración del predecesor. Revise predecesor, sucesor, lag, calendarios, duración, estado y holgura total.

Pregunte qué representa la relación. Si el sucesor depende de la finalización del predecesor, probablemente no es una dependencia SS real.

### 2. Reemplazar Lógica SS Débil

Use FS cuando el sucesor no pueda iniciar hasta que el predecesor termine. Use FF cuando ambas actividades puedan solaparse pero el sucesor no pueda terminar hasta que el predecesor termine.

Si el lag representa una espera real, considere si esa espera debe modelarse como actividad separada. Esto suele ser más claro para revisiones, actualizaciones y análisis de demoras.

### 3. Documentar Excepciones Válidas

Algunos lags SS largos pueden ser intencionales. Si la relación es válida, documente la razón y confirme el calendario del lag. La explicación debe ser suficientemente clara para un revisor PMO o líder de control de proyectos.

## Escenario de Ejemplo

Un cronograma incluye una relación SS desde "Instalar encofrado" hacia "Vaciar concreto" con un lag de diez días. La actividad de encofrado tiene una duración de cinco días.

Esto significa que el vaciado inicia diez días después del inicio del encofrado, aunque el encofrado termina después de cinco días. La lógica probablemente no describe una dependencia real de inicio a inicio. Puede estar intentando representar terminación de encofrado más inspección o espera.

El planificador revisa la secuencia y reemplaza la relación con lógica más clara: una relación FS hacia una actividad de inspección, seguida por el vaciado de concreto. Ahora la dependencia real y el periodo de espera son visibles.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica e identificar relaciones afectadas.
- Días 2-3: Revisar primero relaciones críticas y casi críticas.
- Días 4-5: Reemplazar lógica SS débil, reducir lag injustificado o modelar esperas ocultas.
- Día 6: Confirmar excepciones y revisar movimiento del cronograma.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No trate todo lag como incorrecto. El lag puede ser útil cuando representa un desplazamiento real y limitado.

No deje lag largo sin explicación. Si el lag es mayor que la duración del predecesor, necesita una razón clara.

No oculte trabajo dentro del lag cuando el trabajo debe ser visible como actividad.

## Conclusiones Clave

- La lógica SS debe representar una dependencia basada en inicio.
- Lag mayor que la duración del predecesor suele indicar lógica débil o poco clara.
- FS, FF o una actividad separada pueden explicar mejor la dependencia.
- El objetivo es cero relaciones no resueltas.
- Las excepciones válidas deben documentarse.

## Conclusión

Esta métrica ayuda a encontrar relaciones SS donde el lag puede ocultar la dependencia real. El objetivo no es eliminar todo lag SS, sino asegurar que sea razonable, visible y defendible.

Revisar esta métrica mejora la claridad CPM, la confiabilidad de la holgura y la confianza en la ruta más larga.

## Llamado a la Acción

Revise relaciones SS donde el lag sea mayor que la duración del predecesor en su próxima actualización de Primavera P6. Para cada una, pregunte si la relación es realmente de inicio a inicio. Si no lo es, reemplácela con lógica más clara o modele directamente el periodo de espera.
## Contenido relacionado
- [Relaciones SS con Lag Mayor que la Duración del Predecesor - Descripción general](01_overview_template.md)
- [Relaciones SS con Lag Mayor que la Duración del Predecesor - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
