---
title: "La durée restante de la tâche est nulle alors que l'état n'est pas terminé"
seo_title: "La durée restante de la tâche est nulle alors que l'état n'est pas terminé - Primavera P6"
meta_description: "Explique pourquoi La durée restante de la tâche est nulle alors que l'état n'est pas terminé influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "La durée restante de la tâche est nulle alors que l'état n'est pas terminé"
  - "Primavera P6 La durée restante de la tâche est nulle alors que l'état n'est pas terminé"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-blog-article-task-remaining-duration-zero-status-not-complete-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Explique pourquoi La durée restante de la tâche est nulle alors que l'état n'est pas terminé influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
related_metrics:
  - "08_metrics_fr/17_task_remaining_duration_zero_status_not_complete/01_overview_template.md"
  - "08_metrics_fr/17_task_remaining_duration_zero_status_not_complete/02_guide_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/17_task_remaining_duration_zero_status_not_complete/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# La durée restante de la tâche est nulle alors que l'état n'est pas terminé

La durée restante est l'un des champs de statut les plus importants dans une mise à jour Primavera P6. Il indique au planning combien de temps il lui reste encore à terminer l'activité. Lorsqu’une activité de tâche normale a une Durée restante égale à 0, le message est simple : il ne reste plus de temps à effectuer. Si cette même tâche n’est pas marquée comme terminée, le planning raconte deux histoires différentes à la fois.

Cette métrique identifie les activités de tâche pour lesquelles la durée restante est de 0 mais le statut de la tâche n'est pas terminé. Il s'agit d'une version ciblée d'un contrôle de qualité de statut plus large, car c'est dans les activités de tâche que cette incohérence peut affecter directement les plans de travail, les rapports d'avancement, la valeur acquise et les révisions prospectives.

Pour une tâche normale, une durée restante nulle signifie généralement que le travail est terminé. L'activité doit avoir une fin réelle, un statut terminé et des valeurs d'avancement qui correspondent à la procédure de mise à jour du projet. Si la tâche est toujours en cours ou non démarrée, la durée restante doit normalement être supérieure à 0 car une certaine quantité de travail est encore attendue.

Ce problème apparaît souvent lors de cycles de mise à jour chargés. Une équipe de terrain peut signaler qu'une activité est effectivement terminée, de sorte que le planificateur réduit la durée restante à 0 mais n'entre pas la fin réelle. Un fichier d'importation peut mettre à jour la durée restante sans mettre à jour le statut d'activité. Une mise à jour manuelle peut définir des valeurs de progression mais laisser l'activité dans un mauvais statut. Le résultat est une tâche qui semble terminée du point de vue de la durée mais incomplète du point de vue du statut.

Cette incohérence est importante. Une tâche sans durée restante peut arrêter de piloter les travaux futurs comme prévu. Il peut disparaître de l’attention prospective même s’il n’est pas formellement complet. Cela peut fausser les rapports sur la valeur acquise si les progrès et l'achèvement ne sont pas alignés. Cela peut également créer de la confusion lors des examens des clients ou du PMO, car le calendrier ne peut pas indiquer clairement si la tâche est terminée.

L’examen devrait commencer par une simple mise en page P6. Inclut l'ID d'activité, le nom de l'activité, le WBS, le type d'activité, le statut de l'activité, le début réel, la fin réelle, la durée initiale, la durée restante, la durée à la fin, le type de pourcentage achevé, le pourcentage d'activité achevé, le début, la fin et le solde total. Filtrez les activités de tâche pour lesquelles la durée restante est égale à 0 et le statut de l'activité n'est pas terminé.

Chaque tâche signalée doit être examinée avec le propriétaire responsable. Les travaux sont-ils réellement terminés ? Si oui, la tâche doit normalement être marquée comme terminée et se voir attribuer la bonne fin réelle. Le planificateur doit également confirmer que le pourcentage achevé et la durée restante correspondent aux règles d'avancement du projet.

Si le travail n’est pas terminé, le correctif est différent. La tâche doit conserver le statut correct, tel que En cours ou Non démarré, mais la durée restante doit être restaurée à une valeur valide. Cette valeur doit refléter le travail restant à la date de données, et non une date de fin cible ou une préférence de reporting.

Considérez une tâche appelée « Installer des dispositifs d'alarme incendie ». Le rapport de terrain indique que l'installation est presque terminée et que le planificateur définit la durée restante sur 0. Mais les tests ont révélé que plusieurs appareils doivent encore être corrigés et que l'activité n'était pas réellement terminée à la date des données. Dans ce cas, la tâche ne doit pas rester avec une durée restante nulle. L'effort restant doit être estimé et saisi afin que le calendrier continue de prévoir le travail inachevé.

Considérons maintenant une tâche appelée « Verser la dalle de niveau 3 ». Le coulage du béton a été terminé avant la date des données, mais l'activité affiche toujours En cours et n'a pas de Fin réelle. Ici, la durée restante de 0 est probablement correcte, mais la mise à jour du statut est incomplète. Le planificateur doit saisir la fin réelle et marquer la tâche comme terminée.

Le seuil cible pour cette métrique doit être zéro activité de tâche non résolue. Le mot non résolu est important. Certains éléments peuvent nécessiter une confirmation sur le terrain avant d'être corrigés, mais ils ne doivent pas rester inexpliqués dans un calendrier de reporting. Chaque élément doit être corrigé, attribué à un propriétaire ou documenté s'il existe une raison de mise à jour temporaire.

Cette métrique contribue également à améliorer la discipline de mise à jour. Si le même problème apparaît à chaque cycle, l'équipe doit examiner les mappages d'importation, mettre à jour les formulaires, les instructions de reporting sur le terrain et les vérifications avant de planifier le problème. Les utilisateurs peuvent définir la durée restante sur 0 car cela semble être le moyen le plus rapide d'afficher la progression, sans terminer l'activité correctement.

Le nettoyage de cette métrique rend le calendrier plus fiable. Il aligne la durée restante, le statut de l'activité, les dates de fin réelles et les valeurs de progression. Plus important encore, cela aide l'équipe de projet à prendre de meilleures décisions quant aux travaux réellement terminés et aux travaux qui nécessitent encore une attention particulière.
## Contenu associé
- [La durée restante de la tâche est nulle alors que l'état n'est pas terminé - Vue d’ensemble](01_overview_template.md)
- [La durée restante de la tâche est nulle alors que l'état n'est pas terminé - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
