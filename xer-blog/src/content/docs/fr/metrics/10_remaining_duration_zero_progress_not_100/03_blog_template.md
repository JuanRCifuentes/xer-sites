---
title: "Activités avec une durée restante de 0 et une progression non à 100 %"
seoTitle: "Activités avec une durée restante de 0 et une progression non à 100 % - Primavera P6"
description: "Explique pourquoi Activités avec une durée restante de 0 et une progression non à 100 % influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Activités avec une durée restante de 0 et une progression non à 100 %"
  - "Primavera P6 Activités avec une durée restante de 0 et une progression non à 100 %"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/remaining-duration-zero-progress-not-100-primavera-p6"
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
primarySearchIntent: "Explique pourquoi Activités avec une durée restante de 0 et une progression non à 100 % influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/10_remaining_duration_zero_progress_not_100/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/10_remaining_duration_zero_progress_not_100/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titre

Activités avec une durée restante de 0 et une progression non à 100 %

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui valident les mises à jour de progression de Primavera P6.

## Crochet d'ouverture

Si une activité n’a plus de durée restante, elle doit normalement être terminée. Lorsque la même activité affiche une progression inférieure à 100 %, le calendrier envoie des signaux mitigés.

## Introduction

Les mises à jour du calendrier Primavera P6 dépendent des informations d'état propre. La durée restante indique au planning combien de temps il reste encore nécessaire pour terminer une activité. Le pourcentage de progression indique à l'équipe la quantité de travail qui a été accomplie, en fonction de la méthode de pourcentage achevé sélectionnée.

Lorsque la durée restante est égale à 0 mais que la progression n'est pas de 100 %, ces deux signaux ne concordent pas. L'activité peut être terminée mais il manque une fin réelle, ou il peut encore y avoir du travail restant mais a été incorrectement mis à jour avec une durée restante nulle.

Cette métrique identifie les activités avec une durée restante = 0 et une progression <> 100 %. L’objectif est zéro activité non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie la cohérence entre le temps restant et la progression signalée. Si une activité n’a plus de durée restante, cela signifie normalement qu’elle n’a plus de travail à effectuer. Dans ce cas, la progression doit généralement être de 100 % et l'activité doit avoir le bon statut d'achèvement.

Le résultat peut dépendre du type de pourcentage achevé de l'activité. Le pourcentage d'achèvement physique, le pourcentage d'achèvement de la durée et le pourcentage d'achèvement des unités peuvent se comporter différemment. C’est pourquoi l’examen doit porter à la fois sur la durée restante et sur la méthode du pourcentage d’avancement.

Un résultat élevé suggère que le processus de mise à jour peut avoir des dates de fin réelles incomplètes, des durées restantes incorrectes ou une saisie de progression incohérente.

## Pourquoi ce sujet est important

La cohérence des statuts est importante car les données de progression alimentent les rapports de calendrier, la valeur acquise, la planification prospective et les décisions de gestion.

Si une activité semble n’avoir plus de durée restante mais n’est pas terminée, les prévisions peuvent sous-estimer le travail restant. Si une activité est réellement terminée mais que les progrès restent inférieurs à 100 %, les rapports peuvent sous-estimer le travail terminé.

Les deux cas réduisent la confiance dans la mise à jour du planning.

## Causes courantes de mauvais résultats

- Fin réelle manquante sur les activités terminées
- Durée restante réglée à 0 par erreur
- Pourcentage physique achevé non mis à jour
- Pourcentage achevé Type mal compris
- Progression importée d'un autre système sans validation
- Activités marquées comme terminées de manière incohérente
- Processus d'arrêt des mises à jour non suivi

## Comment améliorer le résultat

### 1. Confirmez si le travail est terminé

Commencez par vérifier l'état du champ. Si l'activité est terminée, confirmez la date de fin réelle et définissez l'avancement à 100 % à l'aide de la procédure de mise à jour du projet.

Si le travail n'est pas terminé, l'activité doit normalement avoir une durée restante supérieure à 0.

### 2. Vérifiez le type de pourcentage achevé

Vérifiez si l'activité utilise le pourcentage d'achèvement physique, la durée ou les unités. La correction doit correspondre à la méthode de contrôle du projet.

Par exemple, si le pourcentage physique achevé est utilisé, le planificateur devra peut-être mettre à jour manuellement le champ de progression physique même lorsque la durée restante a atteint zéro.

### 3. Corrigez l'état de la planification

Pour le travail terminé, entrez la fin réelle et confirmez que la progression est de 100 %. Pour un travail incomplet, restaurez une durée restante réaliste et mettez à jour la progression en fonction de la méthode sélectionnée.

Après les corrections, recalculez le calendrier et réexécutez la métrique.

## Exemple de scénario

Une mise à jour du planning affiche « Installer les chemins de câbles » avec Durée restante = 0 et Pourcentage physique achevé = 85 %. L'activité a un début réel mais pas de fin réelle.

Le planificateur vérifie auprès de l'ingénieur de terrain et apprend que l'installation n'est pas terminée. Une équipe a encore besoin de trois jours pour terminer le travail de liste de tâches et les supports finaux.

Le planificateur restaure la durée restante à trois jours et maintient le pourcentage physique achevé à 85 %. L'activité reflète désormais à la fois le travail achevé et l'effort restant.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez la métrique et identifiez les activités affectées.
- Jours 2-3 : Confirmez l'état d'avancement avec les propriétaires responsables.
- Jours 4 et 5 : Corrigez les champs de fin réelle, de durée restante et de progression.
- Jour 6 : Examiner les rapports et les résultats de la valeur acquise.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de supposer que la durée restante = 0 signifie toujours que le travail est terminé. Confirmez d'abord le statut.

Évitez de modifier la progression à 100 % sans vérifier si l'activité est réellement terminée.

Évitez d’ignorer le type de pourcentage achevé. Une mauvaise correction peut créer de nouveaux problèmes de reporting.

## Points clés à retenir

- La durée restante = 0 et la progression <> 100 % sont une incohérence de statut.
- L’objectif est zéro activité non résolue.
- Vérifiez ensemble la fin réelle, la durée restante et le type de pourcentage achevé.
- Les travaux terminés doivent être clôturés correctement.
- Les travaux incomplets doivent conserver une durée restante réaliste.

## Conclusion

Cette métrique aide les planificateurs à détecter un problème de mise à jour petit mais important. Le problème n’est pas seulement un numéro sur un écran ; cela affecte les rapports d'achèvement, la qualité des prévisions et la confiance dans la mise à jour.

La gestion de cette métrique maintient l'état d'activité propre et rend les rapports Primavera P6 plus faciles à faire confiance.

## Appel à l'action

Passez en revue les activités avec une durée restante = 0 et une progression non égale à 100 % lors de votre prochaine mise à jour du planning. Confirmez si chaque activité est terminée, puis corrigez la fin réelle, la durée restante ou la progression si nécessaire.
## Contenu associé
- [Activités avec une durée restante de 0 et une progression non à 100 % - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
