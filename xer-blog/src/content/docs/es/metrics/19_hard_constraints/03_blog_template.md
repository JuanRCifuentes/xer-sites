---
title: "Hard Constraints en Primavera P6"
seo_title: "Hard Constraints en Primavera P6"
meta_description: "Explica por qué Hard Constraints en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Hard Constraints en Primavera P6"
  - "Primavera P6 Hard Constraints en Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-blog-article-hard-restricciones-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Hard Constraints en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/19_hard_restricciones/01_overview_template.md"
  - "02_metrics_es/19_hard_restricciones/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/19_hard_restricciones/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Hard Constraints en Primavera P6

Los restricciones no son automaticamente incorrectos. En un cronograma real, algunas fechas son impuestas por contrato, permisos, ventanas de acceso, periodos de parada, requisitos regulatorios o decisiones del cliente. El problema aparece cuando los restricciones se convierten en un atajo para reemplazar la logica del cronograma.

Esta metrica se enfoca en hard restricciones en Primavera P6, especialmente Mandatory Start y Mandatory Finish. Estos restricciones pueden controlar fuertemente las fechas de actividad y pueden reemplazar el comportamiento normal de la red CPM. Si no estan justificados, pueden hacer que el cronograma parezca controlado mientras ocultan logica debil.

Un buen cronograma CPM debe explicar como el trabajo avanza de una actividad a otra. Relaciones, duraciones, calendarios y actualizaciones de estado deben calcular el pronostico. Un hard restriccion interrumpe esa historia. Le indica al software que una actividad debe iniciar o terminar en una fecha especifica, aunque la logica alrededor calcularia algo diferente.

Hay razones validas para usar un hard restriccion. Un proyecto puede tener una fecha de acceso indicada por el owner, un hold point regulatorio, una liberacion de permiso, una ventana fija de outage o un hito contractual que no puede moverse sin aprobacion formal. En esos casos, el restriccion debe ser visible y documentado. El revisor debe poder ver por que existe la fecha, quien la aprobo y si todavia esta vigente.

El riesgo es que los hard restricciones muchas veces se usan por razones menos defendibles. Un planificador puede ingresar un Mandatory Finish para conservar un hito objetivo. Un recovery plan puede usar hard restricciones para forzar fechas dentro de una ventana deseada. Un fragnet copiado puede traer restricciones antiguos a un nuevo cronograma. Con el tiempo, esas fechas pueden permanecer en el archivo mucho despues de que su razon original desaparecio.

Los hard restricciones pueden distorsionar Total Float y el reporte de ruta critica. Si una actividad esta forzada a una fecha, P6 puede mostrar valores de float que reflejan la fecha impuesta en lugar de la flexibilidad real del trabajo. La ruta critica puede moverse hacia una fecha restringida en vez de mostrar la secuencia real que impulsa la terminacion del proyecto. Esto hace que revisiones PMO, reportes al cliente y analisis de demora sean mas dificiles de defender.

La revision practica empieza con un layout de P6 que incluya Activity ID, Activity Name, WBS, Activity Status, Start, Finish, Constraint Type, Constraint Date, Total Float, estado critical o longest path, predecesores y sucesores. Filtre por tipos de hard restriccion. Luego revise primero actividades criticas y casi criticas porque tienen el mayor impacto de reporte.

Para cada hard restriccion, haga preguntas directas. Cual es la fuente de la fecha? Es contractual, regulatoria o impuesta externamente? El restriccion esta reemplazando logica faltante? Esta forzando una meta de gestion en lugar de modelar la secuencia real? La razon esta documentada y aprobada?

Si el hard restriccion no es requerido, eliminelo y corrija la logica del cronograma. Agregue predecesores o sucesores faltantes, revise la duracion, verifique calendarios y confirme que la fecha pronostico sea calculada por la red. Si una fecha objetivo todavia necesita visibilidad, revise si un hito, deadline, restriccion mas suave o nota de reporte comunicaria la meta sin forzar el calculo CPM.

Si el hard restriccion es requerido, mantengalo solo con documentacion. El cronograma debe mostrar la base del restriccion, la parte que lo aprobo y el responsable de revisarlo. Tambien debe revisarse en cada ciclo de actualizacion para confirmar que la fecha sigue siendo valida.

El umbral objetivo para esta metrica debe ser cero hard restricciones sin explicacion. Esa frase es importante. Algunos hard restricciones pueden permanecer, pero ninguno debe ser misterioso. Cada hard restriccion debe eliminarse o explicarse con suficiente claridad para que un planificador, revisor PMO o cliente entienda por que existe.

Limpiar hard restricciones mejora la credibilidad del cronograma. Permite que la red CPM haga su trabajo, hace que los valores de float sean mas faciles de interpretar y da al equipo una vista mas clara de lo que realmente esta impulsando el trabajo. Un cronograma con menos hard restricciones sin explicacion normalmente es mas confiable, mas facil de revisar y mas facil de defender.
## Contenido relacionado
- [Hard Constraints en Primavera P6 - Descripción general](01_overview_template.md)
- [Hard Constraints en Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
