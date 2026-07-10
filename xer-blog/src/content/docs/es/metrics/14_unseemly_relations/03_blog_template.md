---
title: "Relaciones Inadecuadas en Primavera P6"
seo_title: "Relaciones Inadecuadas en Primavera P6"
meta_description: "Explica por qué Relaciones Inadecuadas en Primavera P6"
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Relaciones Inadecuadas en Primavera P6"
  - "Primavera P6 Relaciones Inadecuadas en Primavera P6"
  - "calidad del cronograma"
  - "Primavera P6"
  - "control de proyectos"
  - "lógica CPM"
  - "revisión del cronograma"
slug: "es-blog-article-unusual-relationships-primavera-p6"
language: "es"
content_type: "blog"
version: "1.0"
topic: "Calidad del cronograma"
audience:
  - "Planificadores"
  - "Schedulers"
  - "Equipos de control de proyectos"
primary_search_intent: "Explica por qué Relaciones Inadecuadas en Primavera P6: Milestones, LOE y Tipos de Relacion afecta la lógica CPM, la holgura y la confiabilidad del cronograma en Primavera P6."
related_metrics:
  - "02_metrics_es/14_unusual_relations/01_overview_template.md"
  - "02_metrics_es/14_unusual_relations/02_guide_template.md"
related_blogs:
  - "02b_blogs_es/01_WHAT A SCHEDULE IS/01_blog.md"
  - "02b_blogs_es/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/14_unseemly_relations/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Relaciones Inadecuadas en Primavera P6

La logica de relaciones es una de las partes mas faciles de copiar rapido y una de las mas dificiles de defender despues. Una relacion puede parecer normal en una tabla de P6, pero el tipo de actividad en cada lado importa. Una relacion que funciona entre dos actividades normales puede ser debil o confusa cuando una de ellas es un Start Milestone, Finish Milestone o Level of Effort.

Esta metrica se enfoca en relaciones inadecuadas: patrones de relacion que deben revisarse porque muchas veces no coinciden con el proposito del tipo de actividad. El objetivo no es rechazar automaticamente toda relacion inusual. El objetivo es encontrar logica que necesita una segunda revision antes de afectar fechas de hitos, float, reporte de ruta critica o confianza del cliente.

El primer grupo de hallazgos involucra Finish Milestones. Un Finish Milestone representa un evento de finalizacion. Normalmente se usa para marcar que un paquete, fase, entrega, aprobacion o punto contractual fue alcanzado. Cuando un Finish Milestone tiene un sucesor SS o SF, la logica puede estar diciendo que una actividad posterior puede empezar porque el evento de finalizacion empieza, o puede terminar porque el evento de finalizacion empieza. Eso normalmente es dificil de explicar. Un Finish Milestone con predecesor SS tambien puede ser sospechoso porque la finalizacion del hito puede quedar vinculada al inicio de un trabajo previo, no a la condicion de terminacion que realmente demuestra que el hito se alcanzo.

El segundo grupo involucra Start Milestones. Un Start Milestone representa el comienzo de un evento, fase, ventana de acceso o autorizacion. Si un Start Milestone tiene predecesor FF o SF, el evento de inicio puede quedar vinculado al fin de un predecesor de una forma que no describe claramente la condicion requerida para iniciar. Si un Start Milestone tiene sucesor FS o FF, el hito puede estar actuando como punto de finalizacion de una tarea en vez de evento de inicio. A veces esto ocurre porque se eligio mal el tipo de hito. Otras veces, el tipo de relacion fue copiado desde otra parte del cronograma y nunca se reviso.

El tercer grupo involucra actividades LOE. Las actividades LOE se usan para representar soporte, supervision, gestion, inspeccion u otro esfuerzo que acompana o abarca otro trabajo. No estan pensadas normalmente para impulsar actividades discretas de produccion como lo haria una tarea normal. Cuando una actividad LOE tiene una relacion FS o SF, el revisor debe preguntar si el LOE esta controlando trabajo que deberia ser impulsado por actividades fisicas, acceso, aprobaciones o hitos contractuales.

En la practica, esta metrica es util porque obliga a conversar sobre la intencion. Que representa este hito? El LOE resume trabajo o lo esta impulsando? Esta relacion describe secuencia real, o solo esta ahi para hacer que una fecha se comporte?

Considere un Finish Milestone llamado "Mechanical Completion". Si tiene un sucesor SS hacia "Start Commissioning", el cronograma puede estar implicando que commissioning puede iniciar cuando mechanical completion inicia. Eso no encaja bien con el concepto de hito. Si commissioning puede iniciar despues de un turnover parcial, una mejor correccion puede ser agregar una actividad discreta de turnover o un hito mas especifico. Si commissioning realmente depende de mechanical completion completo, una relacion FS desde el hito de completion hacia commissioning es mas facil de entender y defender.

Ahora considere una actividad LOE llamada "Project Management Support" con una relacion FS hacia una actividad de construccion. Esa relacion puede convertir el soporte en impulsor del trabajo de campo, lo cual normalmente no es la intencion. El planificador debe revisar si la actividad de construccion deberia estar impulsada por ingenieria, procura, acceso, permisos, construccion predecesora u otra condicion discreta. El LOE puede necesitar otros impulsores de inicio y fin para abarcar el trabajo sin controlarlo incorrectamente.

El metodo de revision es sencillo. Construya un layout en P6 que muestre Activity ID, Activity Name, Activity Type, predecesor, sucesor, relationship type, lag, start, finish, total float y estado critical o longest path. Filtre hitos y actividades LOE, luego aisle los patrones de relacion marcados por la metrica. Revise primero los items criticos y casi criticos porque pueden afectar el reporte del proyecto de inmediato.

No todo item marcado estara mal. Algunos proyectos tienen reglas especificas del cliente o requisitos de reporte inusuales. Algunos modelos de cronograma usan hitos especiales para integrarse con otros sistemas. Esos casos deben ser pocos, aprobados y documentados. Si un revisor no puede explicar la relacion en lenguaje simple de planificacion, probablemente debe corregirse.

Un buen objetivo para esta metrica es cero relaciones sin resolver. La palabra clave es sin resolver. El equipo debe corregir la relacion, revisar el tipo de actividad, agregar una mejor actividad para representar la condicion real o documentar la excepcion aprobada. Dejar estas relaciones sin explicacion debilita el cronograma porque hace que la red logica sea mas dificil de confiar.

Las relaciones inadecuadas suelen ser sintomas pequenos de problemas mayores de calidad: logica copiada, definiciones poco claras de hitos, mal uso de LOE o costumbre de forzar fechas mediante tipos de relacion. Corregirlas mejora mas que el puntaje de una metrica. Hace que el cronograma sea mas facil de revisar, mas facil de explicar y mas confiable para gobierno PMO y decisiones del proyecto.
## Contenido relacionado
- [01_overview_template](../14_unusual_relations/01_overview_template.md)
- [02_guide_template](../14_unusual_relations/02_guide_template.md)
- [Que Es Un Cronograma](../../02b_blogs_es/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logica Robusta](../../02b_blogs_es/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
