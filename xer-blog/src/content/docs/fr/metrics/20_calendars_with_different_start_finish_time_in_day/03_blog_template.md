---
title: "Calendriers avec différentes heures de début et de fin dans Primavera P6"
seo_title: "Calendriers avec différentes heures de début et de fin dans Primavera P6"
meta_description: "Explique pourquoi Calendriers avec différentes heures de début et de fin dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Calendriers avec différentes heures de début et de fin dans Primavera P6"
  - "Primavera P6 Calendriers avec différentes heures de début et de fin dans Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-blog-article-calendars-with-different-start-finish-time-in-day-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Planification Primavera P6"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Explique pourquoi Calendriers avec différentes heures de début et de fin dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
related_metrics:
  - "08_metrics_fr/20_calendars_with_different_start_finish_time_in_day/01_overview_template.md"
  - "08_metrics_fr/20_calendars_with_different_start_finish_time_in_day/02_guide_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/20_calendars_with_different_start_finish_time_in_day/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Calendriers avec différentes heures de début et de fin dans Primavera P6

Les calendriers sont l'un des moteurs silencieux d'un calendrier Primavera P6. Ils définissent quand le travail peut avoir lieu, comment les durées se transforment en dates et comment les relations font évoluer les activités dans le temps. Étant donné que les calendriers se trouvent souvent en coulisses, de petites différences dans les heures de début et de fin quotidiennes peuvent créer un comportement de planification difficile à voir dans les mises en page normales.

Cette métrique identifie les calendriers dont les heures de début ou de fin des jours ouvrables diffèrent de la norme de projet approuvée. Le problème n’est pas que tous les calendriers doivent être identiques. De nombreux projets nécessitent des calendriers spéciaux pour le travail de nuit, le travail de week-end, les fenêtres d'arrêt, la disponibilité des ressources ou l'accès restreint. La question est de savoir si ces différences sont intentionnelles, documentées et attribuées uniquement à leur place.

Par exemple, un calendrier de projet peut s'exécuter de 7h00 à 17h00 tandis qu'un autre s'étend de 8h00 à 18h00. Les deux peuvent afficher dix heures de travail par jour. À un niveau élevé, ils se ressemblent. Mais dans P6, l'heure de la journée peut affecter l'emplacement exact des débuts et des fins, les liens de relation, les valeurs de marge et le mouvement apparent de la date. Un quart de travail d'une heure peut sembler mineur, mais il peut modifier la manière dont les activités s'alignent sur les calendriers.

Cela devient plus important lorsque les activités de différents calendriers sont liées entre elles. Un prédécesseur sur une fenêtre de travail peut terminer tard dans la journée tandis que le calendrier successeur ne peut démarrer que le lendemain matin. Une autre activité peut sembler se terminer à la même date mais à une heure différente. Si les évaluateurs examinent uniquement les dates et non les heures, le calendrier peut sembler incohérent ou difficile à expliquer.

Les différences de calendrier peuvent également affecter le chemin critique et la marge totale. Si une activité critique utilise par accident un calendrier non standard, le chemin peut évoluer différemment que prévu. La marge peut sembler augmenter ou diminuer en raison de l'alignement du calendrier plutôt que d'une réelle flexibilité des horaires. Lors de l'examen du PMO ou du client, il est plus difficile d'expliquer pourquoi les dates ont été déplacées.

L'examen pratique commence par l'identification de la norme de calendrier approuvée pour le projet. Quelle est la journée normale de travail ? Quelles sont les heures standard de début et de fin ? Quels calendriers peuvent différer ? Exportez ou examinez ensuite tous les calendriers et comparez leurs périodes de travail quotidiennes. L'examen doit inclure le nom du calendrier, le type de calendrier, l'heure de début, l'heure de fin, les heures quotidiennes, les exceptions et les activités assignées.

L'étape suivante consiste à revoir les devoirs. Un calendrier spécial peut être valable, mais il doit être attribué uniquement aux activités qui en ont besoin. Un calendrier de travail de nuit ne doit pas s'étendre au travail de jour normal. Un calendrier d'arrêt ne doit pas rester attribué une fois que l'étendue de l'interruption a été copiée dans une autre zone. Un calendrier de ressources ne doit pas contrôler accidentellement les dates d'activité, sauf si cela fait partie de la méthode projet.

Si une différence de calendrier est accidentelle, la solution est généralement simple : alignez l'heure de début, l'heure de fin et les périodes de travail sur la norme du projet. Recalculez ensuite le calendrier et examinez les dates et les valeurs de marge concernées. Si la différence est valable, documentez la raison et confirmez le propriétaire. Les raisons valables peuvent inclure un accès restreint, des fenêtres environnementales, des limites d'exploitation du client, des conditions de permis ou un travail posté planifié.

Considérez un horaire de mise en service dans lequel la plupart des travaux utilisent un calendrier de 7h00 à 17h00, mais l'équipe de test utilise un calendrier de nuit de 22h00 à 6h00. Cette différence peut être valable car les tests ne peuvent avoir lieu que lorsque les opérations sont hors ligne. Le planificateur doit documenter la base et confirmer que seules les activités de test utilisent ce calendrier.

Considérons maintenant une activité de construction copiée qui hérite accidentellement du calendrier des équipes de nuit. Ses dates peuvent être calculées bizarrement par rapport aux travaux à proximité. Il peut sembler se terminer à une date inattendue ou créer des différences margees qui ne correspondent pas aux attentes du champ. Dans ce cas, le problème n’est pas l’existence du calendrier des équipes de nuit. Le problème est la mauvaise attribution d’activité.

Le seuil cible pour cette métrique doit être de zéro calendrier inexpliqué. Certains calendriers non standards peuvent subsister, mais chacun doit avoir une raison claire. Si le planificateur ne peut pas expliquer pourquoi un calendrier commence ou se termine à une heure différente, il doit le réexaminer.

Le nettoyage de cette métrique améliore la transparence du calendrier. Il aide les équipes à éviter les effets de journée partielle cachés, les marges trompeurs et les mouvements de date inexpliqués. Cela rend également le calendrier plus facile à auditer car les hypothèses de calendrier ne sont plus enfouies dans le fichier. Pour les équipes de contrôle de projet, il s’agit d’un petit examen qui rapporte gros.
## Contenu associé
- [Calendriers avec différentes heures de début et de fin dans Primavera P6 - Vue d’ensemble](01_overview_template.md)
- [Calendriers avec différentes heures de début et de fin dans Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
