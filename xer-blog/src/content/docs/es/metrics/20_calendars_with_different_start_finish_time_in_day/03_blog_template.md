---
title: "Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6"
seo_title: "Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6"
meta_description: "Explica por qué Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6"
  - "Primavera P6 Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-blog-article-calendars-with-different-start-finish-time-in-day-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Planificación en Primavera P6"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6 afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/20_calendars_with_different_start_finish_time_in_day/01_overview_template.md"
  - "02_metrics_es/20_calendars_with_different_start_finish_time_in_day/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/20_calendars_with_different_start_finish_time_in_day/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6

Los calendarios son uno de los impulsores silenciosos de un cronograma de Primavera P6. Definen cuando puede ocurrir el trabajo, como las duraciones se convierten en fechas y como las relaciones mueven actividades a traves del tiempo. Como los calendarios suelen quedar detras de escena, pequenas diferencias en las horas diarias de inicio y fin pueden crear comportamientos dificiles de ver en layouts normales.

Esta metrica identifica calendarios cuyo horario diario de inicio o fin difiere del estandar aprobado del proyecto. El problema no es que todos los calendarios deban ser identicos. Muchos proyectos necesitan calendarios especiales para turnos nocturnos, trabajo de fin de semana, ventanas de parada, disponibilidad de recursos o acceso restringido. El problema es si esas diferencias son intencionales, documentadas y asignadas solo donde corresponden.

Por ejemplo, un calendario del proyecto puede trabajar de 7:00 a 17:00 mientras otro trabaja de 8:00 a 18:00. Ambos pueden mostrar diez horas de trabajo por dia. A nivel general parecen similares. Pero en P6, la hora del dia puede afectar la ubicacion exacta de starts y finishes, relaciones logicas, valores de float y movimientos aparentes de fechas. Un cambio de una hora puede parecer menor, pero puede cambiar como se alinean actividades entre calendarios.

Esto se vuelve mas importante cuando actividades con calendarios diferentes estan vinculadas. Un predecesor en una ventana de trabajo puede terminar tarde en el dia mientras el calendario del sucesor no puede iniciar hasta la manana siguiente. Otra actividad puede parecer terminar en la misma fecha pero a una hora diferente. Si los revisores miran solo fechas y no horas, el cronograma puede parecer inconsistente o dificil de explicar.

Las diferencias de calendario tambien pueden afectar ruta critica y Total Float. Si una actividad critica usa por accidente un calendario no estandar, la ruta puede moverse distinto a lo esperado. El float puede parecer aumentar o disminuir por alineacion de calendarios, no por flexibilidad real del trabajo. Durante revisiones PMO o del cliente, eso hace mas dificil explicar por que se movieron las fechas.

La revision practica empieza identificando el estandar aprobado de calendario para el proyecto. Cual es el dia laboral normal? Cuales son las horas estandar de inicio y fin? Que calendarios tienen permiso para diferir? Luego exporte o revise todos los calendarios y compare sus periodos diarios de trabajo. La revision debe incluir calendar name, calendar type, start time, finish time, daily hours, exceptions y assigned activities.

El siguiente paso es revisar asignaciones. Un calendario especial puede ser valido, pero debe asignarse solo a las actividades que lo necesitan. Un calendario de turno nocturno no debe extenderse a trabajo diurno normal. Un calendario de parada no debe permanecer asignado despues de que el alcance de outage fue copiado a otra area. Un resource calendar no debe controlar fechas de actividad accidentalmente salvo que sea parte del metodo del proyecto.

Si una diferencia de calendario es accidental, la correccion suele ser simple: alinear la hora de inicio, hora de fin y periodos de trabajo con el estandar del proyecto. Luego recalcule el cronograma y revise fechas y float afectados. Si la diferencia es valida, documente la razon y confirme el responsable. Razones validas pueden incluir acceso restringido, ventanas ambientales, limites operativos del cliente, condiciones de permiso o trabajo planificado por turnos.

Considere un cronograma de commissioning donde la mayoria del trabajo usa un calendario de 7:00 a 17:00, pero el equipo de pruebas usa un calendario nocturno de 22:00 a 6:00. Esa diferencia puede ser valida porque las pruebas solo pueden hacerse cuando operaciones esta fuera de servicio. El planificador debe documentar la base y confirmar que solo las actividades de prueba usen ese calendario.

Ahora considere una actividad de construccion copiada que hereda accidentalmente el calendario nocturno. Sus fechas pueden calcularse de forma extrana comparadas con el trabajo cercano. Puede parecer que termina en una fecha inesperada o crear diferencias de float que no coinciden con expectativas de campo. En ese caso, el problema no es la existencia del calendario nocturno. El problema es la asignacion incorrecta de la actividad.

El umbral objetivo para esta metrica debe ser cero calendarios sin explicacion. Algunos calendarios no estandar pueden permanecer, pero cada uno debe tener una razon clara. Si el planificador no puede explicar por que un calendario inicia o termina a una hora diferente, debe revisarse.

Limpiar esta metrica mejora la transparencia del cronograma. Ayuda a los equipos a evitar efectos ocultos de dia parcial, float misleading y movimiento de fechas sin explicacion. Tambien hace que el cronograma sea mas facil de auditar porque los supuestos de calendario ya no quedan enterrados dentro del archivo. Para equipos de project controls, es una revision pequena con un impacto grande.
## Contenido relacionado
- [Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6 - Descripción general](01_overview_template.md)
- [Calendarios con Diferentes Horas de Inicio y Fin en Primavera P6 - Guía de mejora](02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
