---
title: "Actividades en la fecha de datos"
seoTitle: "Actividades en la fecha de datos"
description: "Explica por qué Actividades en la fecha de datos"
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Actividades en la fecha de datos"
  - "Primavera P6 Actividades en la fecha de datos"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es/blog/activities-on-the-data-date-primavera-p6"
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
primarySearchIntent: "Explica por qué Actividades en la fecha de datos: Revisiones de Early Start y Early Finish en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
relatedMetrics:
  - "02_metrics_es/18_activities_in_data_date/02_guide_template.md"
relatedBlogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/18_activities_in_data_date/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

La fecha de datos es una de las fechas mas importantes en un cronograma de Primavera P6. Marca el limite entre el desempeno real y el pronostico futuro. El trabajo antes de la fecha de datos debe estar actualizado como estado real. El trabajo despues de la fecha de datos debe quedar pronosticado. Cuando muchas actividades tienen Early Start o Early Finish exactamente en la fecha de datos, el cronograma merece una revision mas cercana.

Esta metrica revisa actividades donde Early Start es igual a la fecha de datos o Early Finish es igual a la fecha de datos. El proposito no es decir que toda actividad en la fecha de datos esta mal. Algunas actividades pueden iniciar o terminar legitimamente en el limite de actualizacion. El objetivo es identificar concentracion en ese limite y confirmar si cada actividad tiene una razon valida para estar alli.

Early Start en la fecha de datos puede ser razonable cuando el trabajo de corto plazo esta listo para iniciar despues de predecesores completados. Tambien puede ser una senal de alerta. Las actividades pueden estar ubicadas en la fecha de datos porque tienen logica predecesora faltante, logica no impulsora, restricciones, expected dates o actualizacion incompleta de status. Si muchas actividades not-started estan en la fecha de datos, el cronograma puede estar implicando que el trabajo esta listo para iniciar aunque las condiciones requeridas no esten modeladas.

Early Finish en la fecha de datos tambien puede contar dos historias. Puede mostrar trabajo correctamente pronosticado para terminar en el limite de actualizacion. Pero tambien puede indicar que el avance no fue actualizado completamente. Si el trabajo realmente termino antes o en la fecha de datos, la actividad puede necesitar Actual Finish. Si el trabajo no termino, Remaining Duration y pronostico finish pueden necesitar actualizacion.

La revision practica empieza con un layout simple en P6. Incluya Activity ID, Activity Name, WBS, Activity Status, Early Start, Early Finish, Start, Finish, Actual Start, Actual Finish, Remaining Duration, Total Float, Calendar, restricciones, predecesores y sucesores. Luego filtre Early Start igual a la fecha de datos y Early Finish igual a la fecha de datos.

La primera pregunta es el status. La actividad esta complete, in progress o not started? Si actual dates o remaining duration estan mal, corrija el status antes de cambiar la logica. Un cronograma con datos de estado deficientes no puede producir fechas pronostico confiables.

La segunda pregunta es la logica. La actividad esta siendo llevada a la fecha de datos por relaciones predecesoras y sucesoras validas? Si no tiene predecesor, tiene logica debil o relaciones que no impulsan, la fecha de datos puede estar ocultando un open start u open finish. La correccion debe ser agregar o corregir logica real del cronograma, no mover la actividad manualmente.

La tercera pregunta es si restricciones, expected dates o calendars estan afectando el resultado. Un start restriccion, finish restriccion, expected date obsoleto o calendar inusual puede llevar una actividad al limite de actualizacion. Algunos casos pueden ser validos, pero deben ser intencionales y documentados.

Considere un proyecto con fecha de datos de 30 de abril. Un grupo de actividades electricas muestra Early Start el 30 de abril. Si el trabajo de construccion predecesor fue completado y el area fue liberada, puede ser valido. Pero si varias de esas actividades no tienen predecesores o estan controladas por restricciones, el cronograma no esta mostrando un plan realmente impulsado por logica.

Ahora considere una actividad con Early Finish el 30 de abril y status In Progress. Si el trabajo fue completado al corte de actualizacion, el planificador debe ingresar Actual Finish y marcar la actividad como complete. Si el trabajo todavia tiene varios dias pendientes, Remaining Duration debe actualizarse para que el pronostico finish se mueva despues de la fecha de datos.

El umbral objetivo para esta metrica debe ser cero actividades sin explicacion. Esa frase importa. La meta no es eliminar toda actividad en la fecha de datos. La meta es asegurar que cada una este explicada por status actual, logica valida o excepcion aprobada.

Esta metrica es especialmente util durante revisiones de actualizacion. Despues de mover la fecha de datos, las actividades pueden concentrarse en el limite si el cronograma no esta completamente actualizado o si la logica es debil. Un grupo de actividades en la fecha de datos suele ser sintoma de presion de actualizacion, logica copiada, open starts, restricciones o feedback de campo incompleto.

Limpiar esta metrica mejora la credibilidad del pronostico cercano. Ayuda al equipo del proyecto a distinguir trabajo realmente listo de trabajo que simplemente se desplazo a la fecha actual de actualizacion. Para reportes PMO y cliente, tambien muestra que la fecha de datos fue tratada como un limite real de status, no solo como una fecha usada para recalcular el archivo.
## Contenido relacionado
- [Actividades en la fecha de datos: Revisiones de Early Start y Early Finish en Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
