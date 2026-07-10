---
title: "Expected Finish Antes de la fecha de datos en Primavera P6"
seo_title: "Expected Finish Antes de la fecha de datos en Primavera P6"
meta_description: "Explica por qué Expected Finish Antes de la fecha de datos en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Expected Finish Antes de la fecha de datos en Primavera P6"
  - "Primavera P6 Expected Finish Antes de la fecha de datos en Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-blog-article-expected-finish-less-than-data-date-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Expected Finish Antes de la fecha de datos en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/16_expected_finish_less_than_data_date/01_overview_template.md"
  - "02_metrics_es/16_expected_finish_less_than_data_date/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/16_expected_finish_less_than_data_date/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Expected Finish Antes de la fecha de datos en Primavera P6

La fecha de datos es la linea entre lo que ya ocurrio y lo que todavia esta pronosticado. En una actualizacion limpia del cronograma, la informacion de estado antes de la fecha de datos debe resolverse como avance real, mientras que el trabajo restante debe proyectarse desde la fecha de datos hacia adelante. Cuando una actividad tiene Expected Finish antes de la fecha de datos, ese limite se vuelve confuso.

Esta metrica identifica actividades donde Expected Finish es anterior a la fecha de datos actual. Es una revision simple, pero puede revelar informacion de estado obsoleta, Actual Finish faltante, pronosticos de campo desactualizados o flujos de actualizacion que no mantienen correctamente las fechas esperadas.

En Primavera P6, Expected Finish suele usarse como campo de pronostico o actualizacion, dependiendo del proceso de la organizacion y la configuracion del cronograma. Algunos equipos lo usan para capturar expectativas de campo en actividades en progreso. Otros lo importan desde hojas de calculo o sistemas de progreso. Como el campo puede influir en el comportamiento del cronograma en ciertos flujos de trabajo, no debe permanecer en el pasado sin revision.

Considere una actividad llamada "Install Main Cable Tray". La fecha de datos del proyecto es 31 de marzo, pero la actividad tiene Expected Finish el 24 de marzo. Si la actividad realmente termino el 24 de marzo, el cronograma normalmente deberia tener Actual Finish y estado completado. Si la actividad no termino, el Expected Finish esta obsoleto y debe actualizarse con la informacion mas reciente de campo. En cualquiera de los casos, el valor actual requiere atencion.

Este problema aparece con frecuencia cuando los equipos avanzan la fecha de datos pero no actualizan completamente todos los campos de pronostico. Puede actualizarse el percent complete. Puede ajustarse Remaining Duration. Pueden ingresarse algunas fechas reales. Pero los valores de Expected Finish de la actualizacion anterior quedan sin tocar. El resultado es un cronograma parcialmente actualizado que todavia contiene fechas esperadas de terminacion en el pasado.

La primera pregunta es si la fecha de datos es correcta. Si la fecha de datos fue configurada incorrectamente, la metrica puede estar marcando el limite equivocado. Una vez confirmada, cada actividad debe revisarse contra su estado real. La actividad fue completada antes de la fecha de datos? Falta Actual Finish? La actividad sigue activa? Remaining Duration todavia representa el trabajo pendiente?

Para trabajo completado, la correccion normalmente es ingresar o corregir Actual Finish, y despues confirmar que Activity Status, Percent Complete y Remaining Duration sean consistentes. Para trabajo que sigue activo, Expected Finish debe actualizarse a una fecha valida en o despues de la fecha de datos. Remaining Duration tambien debe revisarse para que el calculo del cronograma refleje el pronostico actual.

Para trabajo no iniciado, un Expected Finish antes de la fecha de datos normalmente indica un valor antiguo o importado. El planificador debe confirmar si la actividad todavia pertenece al plan, si sus fechas pronostico deben recalcularse y si la fecha esperada debe eliminarse o reemplazarse segun el procedimiento de actualizacion del proyecto.

Una revision practica en P6 debe incluir Activity ID, Activity Name, WBS, Activity Status, Expected Finish, Actual Start, Actual Finish, Remaining Duration, Percent Complete, Start, Finish, Total Float y Calendar. El equipo debe priorizar actividades criticas y casi criticas, trabajo de entrega, hitos visibles para el cliente y actividades del lookahead de corto plazo.

Esta metrica tambien ayuda a revelar problemas de proceso. Si el mismo problema aparece en cada actualizacion, la fuente puede ser un archivo de importacion, una plantilla de hoja de calculo o un flujo de reporte de campo. El equipo debe revisar si Expected Finish se carga desde otro sistema y si existen reglas de validacion antes de calcular y emitir el cronograma.

El umbral objetivo debe ser cero actividades sin resolver. Eso no significa que toda actividad marcada sea un problema mayor. Significa que cada actividad debe corregirse o explicarse. Un Expected Finish antes de la fecha de datos no debe permanecer en el cronograma simplemente porque nadie lo reviso.

Limpiar esta metrica mejora la credibilidad del cronograma. Ayuda al equipo a mantener un limite claro de actualizacion, distinguir desempeno real de trabajo pronosticado y evitar resultados misleading en lookahead o float. En revisiones PMO, tambien demuestra que el cronograma no solo fue calculado, sino revisado por consistencia de estado.
## Contenido relacionado
- [Expected Finish Antes de la fecha de datos en Primavera P6 - Descripción general](01_overview_template.md)
- [Expected Finish Antes de la fecha de datos en Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
