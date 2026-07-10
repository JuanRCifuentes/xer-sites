---
title: "Actividades con Predecesores FF y sin Predecesores FS o SS"
seoTitle: "Actividades con Predecesores FF y sin Predecesores FS o SS - Primavera P6"
description: "Explica por qué Actividades con Predecesores FF y sin Predecesores FS o SS afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Actividades con Predecesores FF y sin Predecesores FS o SS"
  - "Primavera P6 Actividades con Predecesores FF y sin Predecesores FS o SS"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/activities-with-ff-predecessor-and-no-fs-ss-predecessor-primavera-p6"
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
primarySearchIntent: "Explica por qué Actividades con Predecesores FF y sin Predecesores FS o SS afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Título

Actividades con Predecesores FF y sin Predecesores FS o SS

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que evalúan la lógica de cronogramas en Primavera P6.

## Gancho Inicial

La lógica Finish-to-Finish puede ser útil cuando dos actividades deben terminar juntas. Pero si una actividad tiene un predecesor FF y ningún predecesor FS o SS, su finalización puede estar controlada mientras que su inicio queda débilmente definido.

## Introducción

En Primavera P6, una relación FF vincula la finalización de una actividad con la finalización de otra. Esto puede ser apropiado cuando el trabajo se solapa pero una actividad no puede terminar hasta que otra termina.

El riesgo aparece cuando una actividad solo tiene predecesores FF. Si ningún predecesor controla cuándo puede iniciar, el cronograma puede permitir que la actividad comience antes de lo que permite la secuencia real.

Esta métrica identifica actividades con al menos un predecesor FF y ningún predecesor FS o SS. El objetivo es cero actividades no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica si el inicio de una actividad está representado en la red lógica. La lógica FF conecta finalizaciones. La lógica FS y SS puede conectar trabajo previo con el inicio de la actividad.

Una actividad puede tener lógica FF válida y aun así necesitar lógica que impulse el inicio. Por ejemplo, las pruebas pueden necesitar terminar con la instalación, pero no pueden iniciar hasta que una parte de la instalación esté disponible.

Un resultado alto sugiere que las actividades pueden estar conectadas solo por condiciones de finalización. Un resultado bajo sugiere que los inicios están mejor representados en la red CPM.

## Por Qué Importa Este Tema

La lógica del cronograma debe mostrar cómo inicia y cómo termina el trabajo. Si el inicio de una actividad no está conectado al trabajo previo, las fechas tempranas pueden ser poco realistas.

Esto puede afectar la holgura total, la ruta más larga, la confianza en hitos y la planificación de corto plazo.

## Causas Comunes de Resultados Deficientes

- Uso excesivo de relaciones FF para modelar trabajo solapado
- Relaciones SS faltantes para trabajo que puede iniciar después de avance parcial
- Relaciones FS faltantes para trabajo que requiere finalización completa del predecesor
- Lógica copiada de proyectos anteriores
- Lags usados en lugar de lógica de inicio más clara
- Falta de input del campo sobre la condición real de inicio

## Cómo Mejorar el Resultado

### 1. Revisar la Lógica Predecesora

Filtre actividades con predecesores FF y sin predecesores FS o SS. Revise predecesores, tipos de relación, lags, estado de actividad y holgura total.

Pregunte qué debe ocurrir antes de que la actividad pueda iniciar. Si la respuesta es inicio del predecesor, liberación parcial, finalización completa, aprobación, acceso o entrega, probablemente se necesita lógica que impulse el inicio.

### 2. Agregar la Relación Correcta que Impulsa el Inicio

Use FS cuando la actividad no pueda iniciar hasta que el predecesor termine. Use SS cuando la actividad pueda iniciar después de que el predecesor comience o alcance un punto definido de avance.

Evite agregar lógica solo para limpiar la métrica. La relación debe reflejar la secuencia real de ejecución.

### 3. Documentar Excepciones Válidas

Algunas actividades pueden ser excepciones válidas. Actividades level-of-effort, de apoyo o administrativas pueden no necesitar predecesores que impulsen el inicio. En esos casos, documente la razón.

## Escenario de Ejemplo

Un cronograma tiene la actividad "Pruebas finales" con un predecesor FF desde "Completar instalación". La relación es útil porque las pruebas no pueden terminar hasta que la instalación esté completa.

Sin embargo, no existe predecesor FS o SS ligado al inicio de las pruebas. Si el cronograma calcula fechas tempranas, las pruebas pueden aparecer como disponibles antes de que exista suficiente instalación completada.

El planificador agrega una relación SS desde "Completar instalación" hacia "Pruebas finales" con un lag o punto de avance apropiado. La relación FF se mantiene para proteger la finalización.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica e identificar actividades afectadas.
- Días 2-3: Revisar primero actividades críticas y casi críticas.
- Días 4-5: Agregar lógica FS o SS válida y corregir lags engañosos.
- Día 6: Confirmar excepciones y revisar movimiento del cronograma.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No trate toda relación FF como un problema. El problema no es la lógica FF; el problema es la falta de lógica que impulse el inicio cuando el inicio importa.

No reemplace todas las relaciones FF con FS. El solape puede ser realista y útil.

No deje excepciones sin documentar. Los revisores necesitan saber si un caso es intencional o si falta desarrollo lógico.

## Conclusiones Clave

- La lógica FF controla alineación de finalización, no el inicio de la actividad.
- Actividades con predecesores FF y sin FS o SS pueden iniciar antes de lo que permite la secuencia real.
- La lógica SS es útil cuando trabajo solapado necesita una condición clara de inicio.
- El objetivo es cero actividades no resueltas.
- Las excepciones válidas deben documentarse.

## Conclusión

Esta métrica ayuda a confirmar que los inicios de actividades estén representados en la red. Las relaciones FF pueden ser válidas, pero no deben dejar inicios importantes desconectados del trabajo previo.

Revisar esta métrica mejora la calidad CPM, la confiabilidad de la holgura y la confianza en la ruta más larga.

## Llamado a la Acción

Revise actividades con predecesores FF y sin predecesores FS o SS en su próxima actualización de Primavera P6. Para cada una, pregunte si el inicio debe ser impulsado por trabajo previo. Si debe hacerlo, agregue lógica válida que impulse el inicio. Si no, documente la excepción.
## Contenido relacionado
- [Actividades con Predecesores FF y sin Predecesores FS o SS - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
