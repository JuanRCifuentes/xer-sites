---
title: "Remaining Duration Cero Mientras la Task No Esta Complete"
seo_title: "Remaining Duration Cero Mientras la Task No Esta Complete - Primavera P6"
meta_description: "Explica por qué Remaining Duration Cero Mientras la Task No Esta Complete afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Remaining Duration Cero Mientras la Task No Esta Complete"
  - "Primavera P6 Remaining Duration Cero Mientras la Task No Esta Complete"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-blog-article-task-remaining-duration-zero-status-not-complete-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Remaining Duration Cero Mientras la Task No Esta Complete afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/17_task_remaining_duration_zero_status_not_complete/01_overview_template.md"
  - "02_metrics_es/17_task_remaining_duration_zero_status_not_complete/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/17_task_remaining_duration_zero_status_not_complete/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Remaining Duration Cero Mientras la Task No Esta Complete

Remaining Duration es uno de los campos de estado mas importantes en una actualizacion de Primavera P6. Indica cuanto tiempo todavia se necesita para terminar la actividad. Cuando una actividad task normal tiene Remaining Duration igual a 0, el mensaje es simple: no queda tiempo por ejecutar. Si esa misma task no esta marcada como Complete, el cronograma esta contando dos historias distintas al mismo tiempo.

Esta metrica identifica actividades task donde Remaining Duration es 0 pero el status de la task no es Complete. Es una version enfocada de una revision mas amplia de calidad de estado porque las actividades task son donde esta inconsistencia puede afectar directamente planes de trabajo, reporte de progreso, earned value y revisiones lookahead.

Para una task normal, cero remaining duration normalmente significa que el trabajo esta terminado. La actividad deberia tener Actual Finish, status Complete y valores de progreso que coincidan con el procedimiento de actualizacion del proyecto. Si la task sigue In Progress o Not Started, entonces Remaining Duration normalmente deberia ser mayor que 0 porque todavia se espera algun trabajo.

Este problema aparece a menudo durante ciclos de actualizacion con mucha presion. Un equipo de campo puede reportar que una actividad esta practicamente terminada, entonces el planificador reduce Remaining Duration a 0 pero no ingresa Actual Finish. Un archivo de importacion puede actualizar Remaining Duration sin actualizar Activity Status. Una actualizacion manual puede cambiar valores de progreso pero dejar la actividad con el status incorrecto. El resultado es una task que parece terminada desde la duracion, pero incompleta desde el status.

Esa inconsistencia importa. Una task sin remaining duration puede dejar de impulsar trabajo futuro como se esperaba. Puede desaparecer de la atencion del lookahead aunque no este formalmente completada. Puede distorsionar earned value si avance y completacion no estan alineados. Tambien puede generar confusion durante revisiones de cliente o PMO porque el cronograma no puede responder claramente si la task esta terminada.

La revision debe empezar con un layout simple en P6. Incluya Activity ID, Activity Name, WBS, Activity Type, Activity Status, Actual Start, Actual Finish, Original Duration, Remaining Duration, At Completion Duration, Percent Complete Type, Activity Percent Complete, Start, Finish y Total Float. Filtre actividades task donde Remaining Duration es igual a 0 y Activity Status no es Complete.

Cada task marcada debe revisarse con el responsable. El trabajo esta realmente completo? Si la respuesta es si, normalmente la task debe marcarse Complete y recibir el Actual Finish correcto. El planificador tambien debe confirmar que percent complete y remaining duration esten alineados con las reglas de progreso del proyecto.

Si el trabajo no esta completo, la correccion es distinta. La task debe mantener el status correcto, como In Progress o Not Started, pero Remaining Duration debe restaurarse a un valor valido. Ese valor debe reflejar el trabajo restante a la fecha de datos, no una fecha objetivo ni una preferencia de reporte.

Considere una task llamada "Install Fire Alarm Devices". El reporte de campo dice que la instalacion esta casi completa, y el planificador pone Remaining Duration en 0. Pero durante las pruebas se encuentran varios dispositivos que todavia requieren correccion, y la actividad no estaba realmente terminada a la fecha de datos. En este caso, la task no debe permanecer con remaining duration cero. El esfuerzo pendiente debe estimarse e ingresarse para que el cronograma siga pronosticado el trabajo incompleto.

Ahora considere una task llamada "Pour Level 3 Slab". El vaciado de concreto fue completado antes de la fecha de datos, pero la actividad sigue In Progress y no tiene Actual Finish. Aqui el Remaining Duration de 0 probablemente es correcto, pero la actualizacion de status esta incompleta. El planificador debe ingresar Actual Finish y marcar la task Complete.

El umbral objetivo para esta metrica debe ser cero actividades task sin resolver. La palabra sin resolver es importante. Algunos items pueden requerir confirmacion de campo antes de corregirse, pero no deben permanecer sin explicacion en un cronograma de reporte. Cada item debe corregirse, asignarse a un responsable o documentarse si existe una razon temporal de actualizacion.

Esta metrica tambien ayuda a mejorar la disciplina de actualizacion. Si el mismo problema aparece en cada ciclo, el equipo debe revisar mapeos de importacion, formularios de actualizacion, instrucciones de reporte de campo y chequeos antes de emitir el cronograma. Los usuarios pueden estar configurando Remaining Duration en 0 porque parece la forma mas rapida de mostrar avance, sin completar correctamente la actividad.

Limpiar esta metrica hace que el cronograma sea mas confiable. Alinea remaining duration, activity status, actual finish dates y valores de progreso. Mas importante aun, ayuda al equipo del proyecto a tomar mejores decisiones sobre que trabajo esta realmente completo y que trabajo todavia necesita atencion.
## Contenido relacionado
- [Remaining Duration Cero Mientras la Task No Esta Complete - Descripción general](01_overview_template.md)
- [Remaining Duration Cero Mientras la Task No Esta Complete - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
