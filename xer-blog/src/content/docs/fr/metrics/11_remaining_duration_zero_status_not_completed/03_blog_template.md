---
title: "Activités avec une durée restante de 0 et un statut non terminé"
seo_title: "Activités avec une durée restante de 0 et un statut non terminé - Primavera P6"
meta_description: "Explique pourquoi Activités avec une durée restante de 0 et un statut non terminé influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Activités avec une durée restante de 0 et un statut non terminé"
  - "Primavera P6 Activités avec une durée restante de 0 et un statut non terminé"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-blog-article-remaining-duration-zero-status-not-completed-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Explique pourquoi Activités avec une durée restante de 0 et un statut non terminé influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
related_metrics:
  - "08_metrics_fr/11_remaining_duration_zero_status_not_completed/01_overview_template.md"
  - "08_metrics_fr/11_remaining_duration_zero_status_not_completed/02_guide_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/11_remaining_duration_zero_status_not_completed/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Activités avec une durée restante de 0 et un statut non terminé

## Titre

Activités avec une durée restante de 0 et un statut non terminé

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui valident les mises à jour de progression de Primavera P6.

## Crochet d'ouverture

Lorsqu’une activité n’a plus de durée restante, le planning indique qu’il ne reste plus de temps pour la terminer. Si la même activité n’est pas marquée Terminée, la mise à jour nécessite une attention particulière.

## Introduction

Les mises à jour du calendrier Primavera P6 reposent sur des données d'état cohérentes. La durée restante indique le temps restant nécessaire pour terminer une activité. L'état de l'activité indique si l'activité est Non démarrée, En cours ou Terminée.

Lorsque la durée restante est égale à 0 mais que le statut n'est pas Terminé, ces champs ne concordent pas. Il se peut que l'activité soit terminée mais qu'il manque une fin réelle, ou qu'il lui reste encore du travail mais qu'elle ait été mise à jour par erreur avec une durée restante nulle.

Cette métrique identifie les activités avec une durée restante = 0 et un statut d'activité <> terminé. L’objectif est zéro activité non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie si le temps restant d'une activité correspond à son état d'achèvement. S'il n'y a plus de durée restante, l'activité doit normalement être terminée et avoir une date de fin réelle.

Si l'activité est toujours en cours, elle devrait normalement avoir une durée restante à moins que le travail ne soit clôturé dans la même mise à jour. S'il n'est pas démarré, la durée restante de 0 est généralement un problème d'état clair.

Un résultat élevé suggère que le processus de mise à jour peut comporter des finitions réelles manquantes, des durées restantes incorrectes, des problèmes de statut importé ou des mises à jour manuelles incohérentes.

## Pourquoi ce sujet est important

La cohérence du statut affecte les rapports de calendrier, la planification anticipée, la valeur acquise, les courbes de progression et les décisions de gestion.

Si les activités n'ont pas de durée restante mais ne sont pas terminées, le calendrier peut sous-estimer le travail restant ou ne pas clôturer correctement le travail terminé. Quoi qu’il en soit, la mise à jour devient moins fiable.

Ceci est particulièrement important avant de publier des rapports aux clients, aux équipes PMO ou à la direction du projet.

## Causes courantes de mauvais résultats

- Fin réelle manquante sur les activités terminées
- Durée restante réglée à 0 par erreur
- Le statut de l'activité n'est pas modifié sur Terminé
- Progression importée d'un autre système sans validation
- Workflow de mise à jour manuelle non terminé
- Les types d’étapes ou d’activités spéciales n’ont pas été soigneusement examinés
- Processus d'arrêt des mises à jour non suivi

## Comment améliorer le résultat

### 1. Confirmez le statut d'activité réelle

Commencez par confirmer si les travaux sont réellement terminés. Utilisez les rapports de terrain, les mises à jour disciplinaires, les dossiers d'inspection ou la confirmation du propriétaire du colis.

Si les travaux sont terminés, l'activité doit être clôturée correctement. Si le travail n'est pas terminé, la durée restante doit être restaurée.

### 2. Corriger les activités terminées

Pour le travail terminé, entrez la date de fin réelle et marquez l'activité Terminée. Confirmez que les valeurs de progression et la durée restante correspondent à la procédure de mise à jour du projet.

Cela permet de conserver la cohérence des listes d'activités terminées, des rapports d'avancement et des résultats de la valeur acquise.

### 3. Corriger les activités incomplètes

Pour un travail incomplet, restaurez une durée restante réaliste. Conservez l'activité comme En cours ou Non démarrée en fonction de l'état réel.

Après les corrections, recalculez le calendrier et réexécutez la métrique pour confirmer que l'incohérence est résolue.

## Exemple de scénario

Une mise à jour du calendrier affiche « Câblage complet du panneau » avec une durée restante = 0, mais l'état d'activité est toujours en cours. L'activité a un début réel mais pas de fin réelle.

Le planificateur vérifie auprès du cordon électrique et confirme que les travaux sont terminés deux jours avant la date des données. La mise à jour était incomplète car la durée restante a été réduite à zéro, mais la fin réelle n'a pas été saisie.

Le planificateur entre la fin réelle et marque l'activité comme terminée. L'activité correspond désormais à l'état du terrain et les rapports de progression sont plus propres.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez la métrique et identifiez les activités affectées.
- Jours 2-3 : Confirmez l'état d'avancement avec les propriétaires responsables.
- Jours 4 à 5 : Corrigez la fin réelle, l'état de l'activité ou la durée restante.
- Jour 6 : Examiner les rapports et les résultats de la valeur acquise.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de supposer que la durée restante = 0 signifie toujours que l'activité est terminée. Confirmez d'abord l'état du champ.

Évitez de marquer les activités terminées sans une date de fin réelle précise.

Évitez de restaurer la durée restante sans vérifier si l'activité était réellement terminée.

## Points clés à retenir

- Durée restante = 0 et statut <> Terminé est une incohérence de statut.
- L’objectif est zéro activité non résolue.
- Le travail terminé doit avoir le statut Fin réelle et Terminé.
- Les travaux incomplets doivent conserver une durée restante réaliste.
- Les importations de mises à jour et les flux de travail manuels doivent être validés.

## Conclusion

Cette métrique permet de détecter un problème courant de qualité des mises à jour. Il maintient le travail restant, les dates réelles et le statut des activités alignés afin que le calendrier raconte une histoire cohérente.

La gestion de cette métrique améliore la précision des rapports, la confiance dans les progrès et la fiabilité des mises à jour du calendrier Primavera P6.

## Appel à l'action

Examinez les activités avec une durée restante = 0 et un statut non terminé lors de votre prochaine mise à jour du planning. Confirmez le statut réel de chaque activité, puis corrigez la fin réelle, le statut de l'activité ou la durée restante avant d'émettre des rapports.
## Contenu associé
- [Activités avec une durée restante de 0 et un statut non terminé - Vue d’ensemble](01_overview_template.md)
- [Activités avec une durée restante de 0 et un statut non terminé - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
