---
title: "Actividades con Sucesores SS y sin Sucesores FS o FF"
seo_title: "Actividades con Sucesores SS y sin Sucesores FS o FF - Primavera P6"
meta_description: "Explica por qué Actividades con Sucesores SS y sin Sucesores FS o FF afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Actividades con Sucesores SS y sin Sucesores FS o FF"
  - "Primavera P6 Actividades con Sucesores SS y sin Sucesores FS o FF"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-blog-article-activities-with-ss-successor-and-no-fs-ff-successor-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Actividades con Sucesores SS y sin Sucesores FS o FF afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/02_activities_with_ss_successor_and_no_fs_ff_successor/01_overview_template.md"
  - "02_metrics_es/02_activities_with_ss_successor_and_no_fs_ff_successor/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/02_activities_with_ss_successor_and_no_fs_ff_successor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Actividades con Sucesores SS y sin Sucesores FS o FF

## Título

Actividades con Sucesores SS y sin Sucesores FS o FF

## Tiempo Estimado de Lectura / Presentación

5-10 minutos

## Longitud Objetivo

750-1,500 palabras

## Audiencia

Este blog es para planificadores, ingenieros de planificación, equipos de control de proyectos, gerentes de proyecto y revisores PMO que evalúan la lógica de cronogramas en Primavera P6.

## Gancho Inicial

La lógica Start-to-Start puede ser útil. Permite solapar trabajo y representar mejor la ejecución real. Pero cuando una actividad tiene sucesores SS y ningún sucesor FS o FF, su finalización puede dejar de importar para el resto del cronograma.

## Introducción

En Primavera P6, el tipo de relación importa. Una relación Start-to-Start permite que un sucesor inicie después de que el predecesor inicia. Esto puede ser apropiado cuando el trabajo se solapa.

El riesgo aparece cuando el predecesor solo tiene sucesores SS. Si ningún sucesor depende de que el predecesor termine, extender su duración puede no retrasar trabajo posterior.

Esta métrica identifica actividades con al menos un sucesor SS y ningún sucesor FS o FF. El objetivo es cero actividades no resueltas.

## Qué Significa Este Parámetro

Este parámetro verifica si la finalización de una actividad está representada en la red lógica. La lógica SS conecta inicios. La lógica FS y FF conecta la finalización de una actividad con un inicio o finalización posterior.

Una actividad puede tener lógica SS válida y aun así necesitar lógica basada en finalización. Por ejemplo, un sucesor puede iniciar después de que comience la primera parte del trabajo, pero quizá no pueda terminar hasta que el predecesor esté completo.

Un resultado alto sugiere que las actividades pueden estar conectadas solo por condiciones de inicio. Un resultado bajo sugiere que la finalización del trabajo está mejor representada en la red CPM.

## Por Qué Importa Este Tema

La lógica del cronograma debe mostrar cómo inicia y cómo termina el trabajo. Si la finalización de una actividad no está conectada a nada, las demoras de esa actividad pueden no mover fechas posteriores.

Esto puede afectar la holgura total, la ruta más larga, la confianza en hitos y la preparación para análisis de demoras.

## Causas Comunes de Resultados Deficientes

- Uso excesivo de relaciones SS para modelar trabajo solapado
- Relaciones FF faltantes para trabajos que deben terminar en secuencia
- Relaciones FS faltantes para entregas, inspecciones o entregas
- Lógica copiada de proyectos anteriores
- Lags usados en lugar de lógica de finalización más clara
- Falta de input del campo sobre la dependencia real

## Cómo Mejorar el Resultado

### 1. Revisar la Lógica Sucesora

Filtre actividades con sucesores SS y sin sucesores FS o FF. Revise sucesores, tipos de relación, lags, estado de actividad y holgura total.

Pregunte qué depende de que la actividad termine. Si la respuesta es un inicio sucesor, entrega, inspección o hito de terminación, probablemente se necesita lógica basada en finalización.

### 2. Agregar la Relación Correcta Basada en Finalización

Use FS cuando la siguiente actividad no pueda iniciar hasta que esta actividad termine. Use FF cuando el trabajo pueda solaparse pero el sucesor no pueda terminar hasta que esta actividad termine.

Evite agregar lógica solo para limpiar la métrica. La relación debe reflejar la secuencia real de ejecución.

### 3. Documentar Excepciones Válidas

Algunas actividades pueden ser excepciones válidas. Actividades level-of-effort, de apoyo o administrativas pueden no necesitar sucesores basados en finalización. En esos casos, documente la razón.

## Escenario de Ejemplo

Un cronograma tiene la actividad "Instalar tubería subterránea" con un sucesor SS hacia "Rellenar zanja". La relación es útil porque el relleno puede iniciar después de instalar la primera sección.

Sin embargo, no existe sucesor FS o FF ligado a la finalización de la tubería. Si la instalación se extiende cinco días, el relleno puede seguir avanzando en el cronograma sin estar retenido por la terminación final.

El planificador agrega una relación FF entre ambas actividades. Ahora el trabajo puede seguir solapado, pero la finalización del relleno queda ligada a la finalización de la tubería.

## Cronograma de Mejora Recomendado

- Día 1: Ejecutar la métrica e identificar actividades afectadas.
- Días 2-3: Revisar primero actividades críticas y casi críticas.
- Días 4-5: Agregar lógica FS o FF válida y corregir lags engañosos.
- Día 6: Confirmar excepciones y revisar movimiento del cronograma.
- Día 7: Reevaluar la métrica y documentar el resultado.

## Errores a Evitar

No trate toda relación SS como un problema. El problema no es la lógica SS; el problema es la falta de lógica basada en finalización cuando la finalización importa.

No reemplace todas las relaciones SS con FS. El solape puede ser realista y útil.

No deje excepciones sin documentar. Los revisores necesitan saber si un caso es intencional o si falta desarrollo lógico.

## Conclusiones Clave

- La lógica SS controla inicios, no finalizaciones.
- Actividades con sucesores SS y sin FS o FF pueden dejar de influir fechas posteriores.
- La lógica FF es útil cuando trabajos solapados deben terminar en secuencia.
- El objetivo es cero actividades no resueltas.
- Las excepciones válidas deben documentarse.

## Conclusión

Esta métrica ayuda a confirmar que la finalización de las actividades esté representada en la red. Las relaciones SS pueden ser válidas, pero no deben dejar finalizaciones importantes desconectadas del resto del cronograma.

Revisar esta métrica mejora la calidad CPM, la confiabilidad de la holgura y la confianza en la ruta más larga.

## Llamado a la Acción

Revise actividades con sucesores SS y sin sucesores FS o FF en su próxima actualización de Primavera P6. Para cada una, pregunte si la finalización debe impulsar trabajo posterior. Si debe hacerlo, agregue lógica válida basada en finalización. Si no, documente la excepción.
## Contenido relacionado
- [Actividades con Sucesores SS y sin Sucesores FS o FF - Descripción general](01_overview_template.md)
- [Actividades con Sucesores SS y sin Sucesores FS o FF - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
