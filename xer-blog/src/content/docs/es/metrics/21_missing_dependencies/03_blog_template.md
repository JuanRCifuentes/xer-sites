---
title: "Dependencias Faltantes en Primavera P6"
seoTitle: "Dependencias Faltantes en Primavera P6"
description: "Explica por qué Dependencias Faltantes en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Dependencias Faltantes en Primavera P6"
  - "Primavera P6 Dependencias Faltantes en Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/missing-dependencies-primavera-p6"
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
primarySearchIntent: "Explica por qué Dependencias Faltantes en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/21_missing_dependencies/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/21_missing_dependencies/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Las dependencias son la columna vertebral de un cronograma CPM. Explican como el trabajo avanza de una actividad a otra, que debe ocurrir antes de que una actividad pueda iniciar y que depende de que cada actividad se complete. Cuando faltan dependencias, el cronograma puede calcular, pero el resultado es mas dificil de confiar.

Esta metrica identifica actividades con logica de dependencia faltante en Primavera P6. Cubre actividades sin predecesores, actividades sin sucesores y actividades aisladas que no tienen ninguno de los dos. A menudo se conocen como open starts y open finishes. Algunas pueden ser validas, pero la mayoria deben revisarse.

Una actividad sin predecesor puede iniciar sin ningun requisito logico de trabajo anterior. Eso puede ser aceptable para un hito aprobado de inicio de proyecto o un inicio autorizado externamente. Para trabajo normal del proyecto, normalmente es una senal de alerta. Actividades de construccion, ingenieria, procura, pruebas y entrega normalmente dependen de algo: acceso, liberacion de diseno, entrega de materiales, instalacion previa, inspeccion, aprobacion de permisos u otra condicion del proyecto.

Una actividad sin sucesor puede terminar sin entregar su resultado a otra actividad. Eso puede ser aceptable para un hito final de completacion del proyecto. Pero para la mayoria de actividades, la pregunta es simple: que habilita este trabajo? Si nada depende de ella, la actividad puede tener logica siguiente faltante, estar obsoleta o no estar integrada correctamente al cronograma.

Las actividades aisladas son la preocupacion mas clara. Si una actividad no tiene predecesor ni sucesor, realmente no forma parte de la red CPM. Puede estar en el archivo, tener fechas y aparecer en reportes, pero no ayuda al cronograma a explicar la secuencia de trabajo.

Las dependencias faltantes afectan mas que los puntajes de calidad de logica. Pueden distorsionar fechas de inicio, fechas de fin, valores de float y ruta critica. Un open start puede desplazarse a la fecha de datos o iniciar demasiado pronto porque nada lo retiene. Un open finish puede mostrar float que no refleja el impacto del trabajo en el resto del proyecto. Durante revisiones PMO o del cliente, estas brechas hacen mas dificil explicar por que las fechas son creibles.

La revision practica empieza con un layout de P6 que incluya Activity ID, Activity Name, WBS, Activity Type, Activity Status, Start, Finish, Total Float, Calendar, restricciones, predecesores y sucesores. Filtre actividades sin predecesores, sin sucesores y sin ninguno. Luego separe excepciones validas de items que requieren correccion.

Las excepciones validas deben ser limitadas. El inicio aprobado del proyecto puede no necesitar predecesor. El hito final de completacion puede no necesitar sucesor. Algunos hitos de interfaz externa pueden representar trabajo controlado fuera del cronograma. Estas excepciones deben documentarse para que los revisores no tengan que adivinar.

Para open starts, agregue logica predecesora que refleje la condicion real requerida antes de que el trabajo pueda iniciar. Puede ser una actividad de construccion previa, aprobacion de diseno, entrega de materiales, liberacion de acceso, inspeccion, permiso o entrega de interfaz. La relacion debe describir la dependencia real, no solo conectar la actividad para pasar una revision.

Para open finishes, agregue logica sucesora que represente lo que sigue. El sucesor puede ser otra actividad de trabajo, pruebas, commissioning, turnover, closeout, un hito o un paquete downstream. El punto es mostrar como el resultado de la actividad afecta el resto del plan.

Para actividades aisladas, primero confirme si la actividad todavia es necesaria. Si es alcance valido, conectela correctamente. Si esta obsoleta, duplicada o quedo de una actualizacion anterior, eliminela o cierrela segun el procedimiento de project controls.

El umbral objetivo debe ser cero actividades sin resolver. Esto no significa que cada predecesor o sucesor faltante sea automaticamente incorrecto. Significa que cada excepcion debe ser intencional y documentada. Las dependencias faltantes sin explicacion debilitan la red del cronograma.

Limpiar esta metrica mejora el cronograma inmediatamente. Hace que la ruta critica sea mas confiable, que el float sea mas facil de interpretar y que los planes lookahead sean mas utiles. Tambien ayuda al equipo del proyecto a ver si el cronograma es un modelo real del trabajo o solo una lista de actividades con fechas.
## Contenido relacionado
- [Dependencias Faltantes en Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
