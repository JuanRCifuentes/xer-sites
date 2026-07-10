---
title: "Activités hors séquence dans Primavera P6"
seoTitle: "Activités hors séquence dans Primavera P6"
description: "Explique pourquoi Activités hors séquence dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Activités hors séquence dans Primavera P6"
  - "Primavera P6 Activités hors séquence dans Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/activities-out-of-sequence-primavera-p6"
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
primarySearchIntent: "Explique pourquoi Activités hors séquence dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/08_activities_out_of_sequence/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/08_activities_out_of_sequence/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titre

Activités hors séquence dans Primavera P6

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui évaluent les mises à jour du calendrier Primavera P6.

## Crochet d'ouverture

Parfois, le travail commence avant que le calendrier ne l’indique. Cela peut refléter de réels progrès sur le terrain, mais cela peut également révéler un problème dans la mise à jour, la logique ou la manière dont le plan actuel est présenté.

## Introduction

Les activités hors séquence sont des activités qui ont commencé ou progressé avant que la logique de leur prédécesseur ne soit satisfaite. Dans Primavera P6, il s'agit d'un problème courant lors des mises à jour du planning, car l'exécution réelle sur le terrain ne suit pas toujours exactement le réseau planifié.

Les progrès hors séquence ne sont pas automatiquement mauvais. Les projets réordonnent les travaux en fonction de l'accès, des ressources, de la météo, des permis, des autorisations de conception et de nombreuses autres raisons. La question est de savoir si le calendrier a été mis à jour pour refléter clairement ce réordonnancement.

Cette métrique identifie les activités dont les progrès entrent en conflit avec la séquence logique planifiée. L’objectif est zéro activité non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie si la progression réelle est cohérente avec la logique de relation dans le planning. Par exemple, si l'activité B a un prédécesseur de fin à début de l'activité A, mais que l'activité B a déjà commencé alors que l'activité A n'est pas terminée, l'activité B peut être hors séquence.

Le résultat peut indiquer une simple erreur d’état, telle qu’une fin réelle manquante sur le prédécesseur. Cela peut également indiquer une logique obsolète ou un véritable événement de reséquençage de champ.

Dans Primavera P6, l'impact dépend en partie des paramètres de calcul du planning tels que la logique conservée et le remplacement de la progression. Ces paramètres affectent la façon dont le travail restant est calculé après une progression hors séquence.

## Pourquoi ce sujet est important

Les activités hors séquence peuvent réduire la confiance dans les prévisions. Ils peuvent déformer la marge, modifier le chemin le plus long et rendre le calendrier plus difficile à expliquer.

Ils sont également importants pour la gouvernance. Les réviseurs du PMO et les équipes de contrôle de projet doivent savoir si le calendrier représente le plan actuel réel ou s'il contient toujours la logique d'une séquence plus ancienne.

## Causes courantes de mauvais résultats

- Travaux commencés avant l'achèvement du prédécesseur
- Dates réelles manquantes ou incorrectes
- Le statut du prédécesseur n'est pas mis à jour correctement
- Le réordonnancement des champs n'est pas reflété dans la logique
- Relations obsolètes après la planification du rétablissement
- Confusion sur la logique conservée et les paramètres de remplacement de la progression
- Progression acceptée sans révision de la logique du calendrier

## Comment améliorer le résultat

### 1. Vérifiez d'abord l'état

Avant de modifier la logique, confirmez les dates et le statut réels de l'activité signalée et de ses prédécesseurs. De nombreux problèmes hors séquence sont dus à des arrivées réelles manquantes, à des démarrages réels incorrects ou à une durée restante qui n'a pas été mise à jour correctement.

Si les données d'activité sont erronées, corrigez la mise à jour et recalculez avant d'apporter des modifications logiques.

### 2. Examiner la logique par rapport au plan actuel

Si les progrès sont réels, demandez-vous si la relation existante reflète toujours la séquence d’exécution prévue. Si le travail sur le terrain a changé, la logique devra peut-être aussi changer.

Ne supprimez pas les relations uniquement pour effacer la métrique. Remplacez la logique obsolète par des relations valides qui expliquent le plan actuel approuvé.

### 3. Confirmez l'approche de calcul P6

Vérifiez si le projet utilise la logique conservée ou le remplacement de la progression. La logique conservée préserve le contrôle du prédécesseur sur le travail restant. L'annulation de la progression peut permettre de poursuivre le travail malgré une logique incomplète du prédécesseur.

Le bon réglage dépend de la procédure de contrôle du projet, mais l'équipe doit comprendre quel paramètre est utilisé avant d'interpréter le résultat.

## Exemple de scénario

Un programme montre "Installer le chemin de câbles" avec un prédécesseur de "Supports en acier complets". Lors de la mise à jour, l'activité des chemins de câbles démarre réellement même si les supports en acier ne sont pas marqués comme terminés.

Le planificateur vérifie le rapport de terrain et constate que les supports ont été réalisés dans la zone A mais pas dans la zone B. Les activités initiales étaient trop vastes pour la séquence réelle.

Le planning est révisé par zone. Les travaux de support terminés dans la zone A entraînent désormais l'installation des chemins de câbles dans la zone A, tandis que la zone B reste correctement séquencée. Le problème de hors séquence est résolu et la prévision devient plus précise.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez la métrique et confirmez la date des données.
- Jours 2-3 : Corrigez les erreurs de statut et les dates réelles.
- Jours 4 et 5 : Examinez le reséquençage réel et révisez la logique obsolète.
- Jour 6 : Confirmez les exceptions et examinez les mouvements du planning.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de modifier la logique avant de vérifier si la mise à jour de l'état est correcte.

Évitez d’ignorer les progrès hors séquence parce que le travail s’est déroulé sur le terrain. Le calendrier doit toujours représenter le plan actuel.

Évitez de modifier la logique conservée ou les paramètres de remplacement de la progression sans comprendre la procédure de contrôle du projet.

## Points clés à retenir

- Les activités hors séquence montrent des progrès qui entrent en conflit avec la logique des prédécesseurs.
- La cause peut être une erreur d’état, une erreur logique ou un véritable reséquençage.
- Les paramètres de calcul P6 affectent la manière dont le problème apparaît dans les prévisions.
- L’objectif est zéro activité non résolue.
- Le réordonnancement approuvé doit être reflété dans la logique du calendrier.

## Conclusion

Des progrès hors séquence sont un signal que le calendrier doit être révisé. Parfois, le correctif est une simple correction de statut. D’autres fois, cela nécessite de mettre à jour la logique pour qu’elle corresponde à la façon dont le projet est actuellement exécuté.

La gestion de cette métrique améliore la qualité des mises à jour, la fiabilité des prévisions et la confiance dans le chemin critique ou le plus long.

## Appel à l'action

Passez en revue les activités hors séquence lors de votre prochaine mise à jour de Primavera P6. Pour chaque élément, décidez s'il s'agit d'un problème de statut, de logique ou de réordonnancement réel, puis corrigez le calendrier avant d'émettre des rapports.
## Contenu associé
- [Activités hors séquence dans Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
