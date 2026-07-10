---
title: "Actividades Task con Predecesores SF en Primavera P6"
seo_title: "Actividades Task con Predecesores SF en Primavera P6"
meta_description: "Explica por qué Actividades Task con Predecesores SF en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Actividades Task con Predecesores SF en Primavera P6"
  - "Primavera P6 Actividades Task con Predecesores SF en Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-blog-article-task-with-sf-predecessor-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Actividades Task con Predecesores SF en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/15_task_with_sf_predecessor/01_overview_template.md"
  - "02_metrics_es/15_task_with_sf_predecessor/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/15_task_with_sf_predecessor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Actividades Task con Predecesores SF en Primavera P6

Las relaciones Start-to-Finish son uno de los tipos de relacion menos comunes en la programacion CPM. En Primavera P6, una relacion SF significa que la actividad sucesora no puede terminar hasta que la actividad predecesora inicie. Puede ser valida en casos inusuales, pero no es la forma en que normalmente se secuencia el trabajo de un proyecto.

Para actividades task normales, un predecesor Start-to-Finish debe activar una pregunta inmediata de revision: que condicion del mundo real intenta representar esta relacion? Si la respuesta no es clara, la relacion puede estar debilitando la logica del cronograma.

La mayoria de cronogramas de proyecto usan tres tipos de relacion practicos. Finish-to-Start se usa cuando una actividad debe terminar antes de que otra pueda iniciar. Start-to-Start se usa cuando actividades pueden iniciar juntas o cuando un inicio depende de otro inicio. Finish-to-Finish se usa cuando la terminacion de una actividad esta vinculada a la terminacion de otra. Estos tipos de relacion suelen ser mas faciles de entender para equipos de campo, project managers y revisores.

SF es diferente. Conecta el start de un predecesor con el finish de un sucesor. Esto significa que el finish del sucesor queda retenido hasta que el predecesor inicie. En muchos cronogramas de construccion, ingenieria, procura y commissioning, esa logica es dificil de explicar. Si una task no puede terminar hasta que otra task inicie, el planificador debe poder describir la condicion operativa exacta detras de esa regla.

Un problema comun es la logica copiada. Un planificador puede copiar un grupo de actividades desde otro proyecto, importar logica externa o aplicar cambios globales, y una relacion SF permanece en el cronograma sin que nadie la note. Las fechas calculadas pueden verse aceptables, por lo que la relacion sobrevive. Mas adelante, durante una revision, la ruta logica se vuelve dificil de defender porque la relacion no refleja la forma en que el trabajo ocurre realmente.

Otro problema es el control de fechas. A veces se usa logica SF con lag para hacer que una actividad termine en una fecha deseada. Esto puede ocultar el verdadero impulsor. Si el cronograma necesita una fecha contractual, ventana de acceso, condicion de entrega o hito de entrega, esa condicion normalmente debe modelarse directamente. El cronograma no deberia depender de un tipo de relacion confuso solo porque produce la fecha de finish deseada.

Considere una task llamada "Temporary Bypass Operation" con un predecesor SF desde "Start Permanent System Operation". En este caso, la operacion temporal no puede terminar hasta que el sistema permanente inicie. Esta podria ser una relacion SF defendible si el bypass debe permanecer activo hasta que el sistema de reemplazo este en servicio. Aun asi, el planificador debe documentar la razon porque los revisores cuestionaran razonablemente la relacion.

Ahora considere una task normal llamada "Install Cable Tray" con un predecesor SF desde "Start Cable Pulling". Esa relacion es mas dificil de justificar. Si la instalacion de bandejas debe terminar antes de que el tendido de cable pueda iniciar, una logica FS desde cable tray hacia cable pulling puede ser mas apropiada. Si el trabajo se superpone, una logica SS o FF puede ser mas clara. La relacion SF no deberia permanecer salvo que represente la secuencia real de construccion.

El mejor metodo de revision en P6 es construir un layout que incluya Activity ID, Activity Name, WBS, Activity Type, predecessor ID, predecessor name, relationship type, lag, start, finish, total float, restricciones y estado critical o longest path. Filtre actividades task con predecesores SF. Luego revise primero los hallazgos criticos y casi criticos, porque esas relaciones pueden afectar directamente los impulsores reportados del proyecto.

Para cada hallazgo, haga preguntas simples. Que condicion modela la relacion SF? FS, SS o FF describiria la logica con mas claridad? Se esta usando lag para forzar una fecha? La relacion afecta ruta critica o reporte de hitos? Existe una razon documentada para mantenerla?

El umbral objetivo debe ser cero relaciones predecesoras SF sin resolver en actividades task. Esto no significa que toda relacion SF sea automaticamente incorrecta. Significa que cada relacion SF debe corregirse o justificarse claramente. La logica SF sin explicacion puede reducir la confianza en la red porque hace que la logica sea mas dificil de auditar y comunicar.

Cuando la relacion es invalida, reemplacela con el tipo de relacion que coincida con la secuencia real. Si la actividad debe iniciar despues de que otra termine, use FS. Si los inicios estan vinculados, use SS. Si los finishes deben alinearse, use FF. Si el problema es un hito, entrega, aprobacion o condicion de acceso faltante, agregue o corrija la actividad que representa esa condicion.

Despues de las correcciones, recalcule el cronograma y revise la ruta logica afectada. Verifique Total Float, critical o longest path, fechas de hitos y reportes lookahead. El objetivo no es solo mejorar el puntaje de la metrica. El objetivo es hacer que el cronograma sea mas facil de explicar y mas confiable para la toma de decisiones.

Las actividades task con predecesores SF son senales pequenas pero importantes. Muchas veces apuntan a logica copiada, fechas forzadas o secuencia poco clara. Revisarlas ayuda al equipo del proyecto a limpiar la red logica antes de que esas debilidades se conviertan en problemas de reporte.
## Contenido relacionado
- [Actividades Task con Predecesores SF en Primavera P6 - Descripción general](01_overview_template.md)
- [Actividades Task con Predecesores SF en Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
