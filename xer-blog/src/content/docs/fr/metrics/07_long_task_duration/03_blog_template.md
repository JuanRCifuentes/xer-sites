---
title: "Longue durée de tâche dans les examens de planification Primavera P6"
seoTitle: "Longue durée de tâche dans les examens de planification Primavera P6"
description: "Explique pourquoi Longue durée de tâche dans les examens de planification Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Longue durée de tâche dans les examens de planification Primavera P6"
  - "Primavera P6 Longue durée de tâche dans les examens de planification Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/long-task-duration-primavera-p6"
language: "fr"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primarySearchIntent: "Explique pourquoi Longue durée de tâche dans les examens de planification Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/07_long_task_duration/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/07_long_task_duration/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titre

Longue durée de tâche dans les examens de planification Primavera P6

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui évaluent la qualité du planning Primavera P6.

## Crochet d'ouverture

Une activité longue peut simplifier un planning, mais elle peut également masquer le travail que l'équipe de projet doit contrôler. Si une activité dure trop longtemps, les progrès deviennent plus difficiles à mesurer et les retards, plus difficiles à constater.

## Introduction

La longue durée des tâches est une mesure de qualité du planning qui identifie les activités plus longues que le seuil de durée approuvé. Il n’existe pas de limite universelle unique qui fonctionne pour chaque projet.

Le bon seuil dépend du type de projet, du niveau de détail, du cycle de reporting, des attentes du client et des règles de qualité du planning du PMO. Un calendrier de conception, un calendrier d'approvisionnement, un calendrier de construction et un calendrier de mise en service peuvent chacun nécessiter des limites de durée différentes.

Cette mesure ne dit pas que toute activité longue est mauvaise. It says that long activities need review. L’objectif est de zéro activité non résolue au-delà de la durée limite approuvée du projet.

## Ce que signifie ce paramètre

Ce paramètre vérifie si les activités sont correctement dimensionnées pour la planification, le contrôle et le reporting. Dans Primavera P6, la durée de l'activité affecte les mises à jour de progression, la planification anticipée, le calcul de la marge et la visibilité du chemin critique.

Une activité qui dure plus longtemps que le cycle de reporting peut être difficile à mettre à jour avec précision. Par exemple, si le projet est mis à jour mensuellement et qu'une activité dure 90 jours, le planificateur peut avoir du mal à expliquer ce qui a été réalisé au cours de la période en cours.

Un résultat élevé suggère que le calendrier est peut-être trop résumé ou que certains lots de travaux nécessitent plus de détails. Un résultat faible suggère que la taille des activités est plus proche de la manière dont le travail sera géré.

## Pourquoi ce sujet est important

Les activités de longue durée réduisent la visibilité. Ils peuvent masquer des étapes de travail, des emplacements, des systèmes, des approbations et des transferts distincts au sein d’une seule et même activité.

Cela est important pour les examens du PMO, les rapports clients, la valeur acquise, la mesure des progrès et l'analyse des retards. Si le travail est trop vaste, il devient plus difficile de savoir si le projet progresse réellement ou s'il ne progresse que partiellement dans une activité de grande envergure.

## Causes courantes de mauvais résultats

- Activités copiées à partir d'un planning de planification de haut niveau
- Structure WBS trop large
- Lots de travaux non répartis par domaine, système, phase ou livrable
- Faible contribution au domaine ou à la discipline lors de l’élaboration du calendrier
- Le nombre d'activités est maintenu à un niveau bas pour simplifier les rapports
- Seuil du projet pas clairement défini

## Comment améliorer le résultat

### 1. Définir le seuil de durée

Confirmez la limite de longue durée approuvée pour le projet. Le seuil peut dépendre du niveau du calendrier, des exigences du contrat, de la période de reporting et de la sensibilité du client.

Certains projets peuvent accepter des activités d’ingénierie ou d’approvisionnement plus longues que les activités de construction. D'autres peuvent nécessiter des durées d'activité serrées parce que les progrès sont examinés chaque semaine ou parce que le client attend un contrôle détaillé.

### 2. Décomposer les grandes activités

Examinez chaque activité au-dessus du seuil et demandez si elle contient plusieurs étapes de travail, domaines, systèmes ou livrables. Si tel est le cas, divisez-le en activités plus petites qui peuvent être planifiées, mises à jour et mesurées clairement.

Utilisez des méthodes de répartition pratiques telles que l'emplacement, la phase, la discipline, le système, le package de dessins, le package de matériel, la séquence d'équipage ou le point de transfert.

### 3. Documenter les exceptions valides

Certaines activités longues peuvent être valables. Les exemples incluent des activités nécessitant un niveau d'effort, de longues périodes d'approvisionnement, des périodes de durcissement, des périodes de révision ou des activités intentionnellement gérées à un niveau de détail plus élevé.

Documentez la raison afin que les évaluateurs comprennent pourquoi l'activité reste au-dessus du seuil.

## Exemple de scénario

Un calendrier de construction comprend une activité appelée « Installer les systèmes mécaniques » d'une durée de 80 jours. Le projet est mis à jour mensuellement et le client attend des rapports d'avancement détaillés.

Au cours de l'examen, le planificateur constate que l'activité comprend l'installation dans quatre bâtiments et trois principaux types de systèmes. L'activité est trop vaste pour être mesurée clairement.

Le planificateur le divise en activités plus petites par bâtiment et système. Chaque nouvelle activité a sa propre logique, sa durée et sa base de progression. Le calendrier devient plus facile à mettre à jour et le plan prévisionnel fournit à l'équipe de projet des informations plus utiles.

## Calendrier d’amélioration recommandé

- Jour 1 : Confirmez le seuil de durée et identifiez les activités au-dessus de celui-ci.
- Jours 2 et 3 : Examinez d'abord les activités critiques, quasi critiques et sensibles au client.
- Jours 4-5 : Décomposez les grandes activités et ajoutez une logique correcte.
- Jour 6 : Documenter les exceptions valides et examiner les mouvements du calendrier.
- Jour 7 : Réévaluez la métrique et comparez le résultat au seuil.

## Erreurs à éviter

Évitez d'utiliser un seuil universel sans tenir compte du type de projet et du niveau de calendrier.

Évitez de diviser les activités en fragments dénués de sens. Plus de détails ne sont utiles que lorsqu'ils améliorent la planification, le contrôle ou le reporting.

Évitez de laisser de longues activités inexpliquées. Si la durée est valide, indiquez pourquoi.

## Points clés à retenir

- La longue durée des tâches dépend du type de projet, du niveau de détail et des attentes du client.
- Le seuil doit être défini avant l’évaluation.
- De longues activités peuvent masquer les progrès et retarder les risques.
- La décomposition des activités devrait améliorer le contrôle, et pas seulement réduire un nombre de mesures.
- Les exceptions valides doivent être documentées.

## Conclusion

Les activités de longue durée ne sont pas automatiquement mauvaises, mais elles nécessitent un examen attentif. La question est de savoir si l’activité est suffisamment détaillée pour planifier, mettre à jour et contrôler le travail.

Lorsque cette mesure est bien gérée, le calendrier devient plus facile à mettre à jour, plus facile à expliquer et plus utile pour la planification à court terme et la surveillance du PMO.

## Appel à l'action

Passez en revue les activités dépassant le seuil de durée approuvé dans votre prochaine mise à jour du calendrier Primavera P6. Pour chacun d’entre eux, décidez s’il doit être décomposé, affiné ou documenté en tant qu’exception valide.
## Contenu associé
- [Longue durée de tâche dans les examens de planification Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
