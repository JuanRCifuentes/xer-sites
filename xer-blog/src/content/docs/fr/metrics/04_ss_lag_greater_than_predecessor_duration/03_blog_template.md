---
title: "Relations SS avec un décalage supérieur à la durée du prédécesseur"
seo_title: "Relations SS avec un décalage supérieur à la durée du prédécesseur - Primavera P6"
meta_description: "Explique pourquoi Relations SS avec un décalage supérieur à la durée du prédécesseur influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Relations SS avec un décalage supérieur à la durée du prédécesseur"
  - "Primavera P6 Relations SS avec un décalage supérieur à la durée du prédécesseur"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-blog-article-ss-lag-greater-than-predecessor-duration-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Explique pourquoi Relations SS avec un décalage supérieur à la durée du prédécesseur influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
related_metrics:
  - "08_metrics_fr/04_ss_lag_greater_than_predecessor_duration/01_overview_template.md"
  - "08_metrics_fr/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Relations SS avec un décalage supérieur à la durée du prédécesseur

## Titre

Relations SS avec un décalage supérieur à la durée du prédécesseur

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui évaluent la logique de planification de Primavera P6.

## Crochet d'ouverture

Une relation Début-début doit normalement décrire un travail qui peut commencer après le début d’une autre activité. Mais lorsque le décalage du SS est plus long que la durée de son prédécesseur, la logique commence à raconter une histoire différente.

## Introduction

Dans Primavera P6, le décalage est souvent utilisé pour représenter une période d'attente entre deux activités. A small SS lag can be useful when work starts after a defined amount of progress. Par exemple, les équipes de finition peuvent commencer deux jours après le début de l'installation.

Le problème apparaît lorsque le décalage SS est supérieur à la durée du prédécesseur. Si le prédécesseur dure cinq jours et que le décalage SS est de dix jours, le successeur ne démarre pas vraiment car le prédécesseur a démarré. Il démarre après un délai qui s'étend au-delà de la fin du prédécesseur.

Cette métrique identifie les relations SS dans lesquelles le décalage est supérieur à la durée du prédécesseur. L’objectif est zéro relation non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie si une relation SS est utilisée d'une manière qui a toujours un sens logique. La logique SS relie le début du prédécesseur au début du successeur. Lorsque le décalage dépasse la durée du prédécesseur, le début du successeur est repoussé au-delà de la fin du prédécesseur.

Cela ne signifie pas automatiquement que la relation est mauvaise, mais cela signifie qu’elle doit être revue. La dépendance peut être mieux représentée par une logique FS, une logique FF ou une activité distincte qui montre clairement la période d'attente.

Un résultat élevé suggère que le planning utilise peut-être un long décalage pour masquer le travail, les périodes d'attente ou les dépendances basées sur la fin. Un résultat faible suggère que la logique et le décalage SS sont utilisés avec plus de prudence.

## Pourquoi ce sujet est important

Un long décalage peut rendre un planning plus difficile à comprendre. Il cache le temps au sein d’une relation au lieu d’afficher le travail ou la période d’attente dans le cadre du réseau d’activités.

Cela peut affecter la marge, la visibilité du chemin critique, l’examen du chemin le plus long et la préparation à l’analyse des retards. Si un évaluateur ne comprend pas facilement pourquoi un successeur commence à ce moment-là, le calendrier devient plus difficile à défendre.

## Causes courantes de mauvais résultats

- Relations SS copiées à partir d'anciens plannings
- Décalages utilisés comme espaces réservés lors des premières planifications
- Périodes d'attente cachées dans le décalage relationnel
- Logique FS ou FF modélisée incorrectement comme SS plus décalage
- Des différences de calendrier qui rendent le décalage plus difficile à interpréter
- Périodes d'approvisionnement, de traitement, d'approbation ou d'accès non modélisées en tant qu'activités

## Comment améliorer le résultat

### 1. Examinez l'intention de la relation

Filtrez les relations SS où le décalage est supérieur à la durée du prédécesseur. Passez en revue le prédécesseur, le successeur, le décalage, les calendriers, la durée, le statut et la marge totale.

Demandez ce que la relation est censée représenter. Si le successeur dépend de l'achèvement du prédécesseur, la relation n'est probablement pas une véritable dépendance SS.

### 2. Remplacer la logique SS faible

Utilisez FS lorsque le successeur ne peut pas démarrer tant que le prédécesseur n'a pas terminé. Utilisez FF lorsque les deux activités peuvent se chevaucher mais que le successeur ne peut pas terminer tant que le prédécesseur n'a pas terminé.

Si le décalage représente une période d’attente réelle, demandez-vous si cette période d’attente doit être modélisée comme une activité distincte. C'est souvent plus clair pour les revues, les mises à jour d'avancement et l'analyse des retards.

### 3. Documenter les exceptions valides

Certains longs décalages SS peuvent être intentionnels. Si la relation est valide, documentez la raison et confirmez le calendrier de décalage. L'explication doit être suffisamment claire pour qu'un examinateur du PMO ou un responsable des contrôles de projet puisse la comprendre sans deviner.

## Exemple de scénario

Un planning comprend une relation SS de « Installer le coffrage » à « Couler le béton » avec un décalage de dix jours. L'activité de coffrage a une durée de cinq jours.

Cela signifie que le coulage du béton commence dix jours après le début du coffrage, même si le coffrage se termine au bout de cinq jours. La logique ne décrit probablement pas une véritable dépendance de début à début. Il peut s'agir d'essayer de représenter l'achèvement du coffrage plus le temps d'inspection ou de durcissement.

Le planificateur revoit la séquence et remplace la relation par une logique plus claire : une relation FS avec une activité d'inspection, suivie du coulage du béton. Le planning montre désormais la dépendance réelle et le délai d'attente est visible.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez la métrique et identifiez les relations affectées.
- Jours 2 et 3 : Examinez d’abord les relations critiques et quasi critiques.
- Jours 4 et 5 : remplacez la logique SS faible, réduisez les décalages injustifiés ou modélisez les périodes d'attente cachées.
- Jour 6 : Confirmez les exceptions et examinez les mouvements du planning.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de traiter tous les décalages comme des erreurs. Le décalage peut être utile lorsqu'il représente un décalage réel et limité.

Évitez de laisser un long décalage inexpliqué. Si le décalage est plus long que la durée précédente, il mérite une raison claire.

Évitez de cacher le travail à l’intérieur du décalage alors que le travail doit être visible en tant qu’activité.

## Points clés à retenir

- La logique SS doit représenter une dépendance basée sur le démarrage.
- Un décalage supérieur à la durée du prédécesseur signale souvent une logique faible ou peu claire.
- FS, FF ou une activité distincte peut mieux expliquer la dépendance.
- L’objectif est zéro relation non résolue.
- Les exceptions valides doivent être documentées.

## Conclusion

Cette métrique aide les planificateurs à trouver les relations SS dans lesquelles le décalage peut cacher la véritable dépendance. L’objectif n’est pas de supprimer tous les décalages SS, mais de s’assurer que les décalages sont raisonnables, visibles et défendables.

L'examen de cette métrique améliore la clarté du CPM, la fiabilité de la marge et la confiance dans le chemin le plus long. Il aide également les réviseurs du PMO à séparer la logique de chevauchement utile des raccourcis de planification.

## Appel à l'action

Examinez les relations SS où le décalage est supérieur à la durée du prédécesseur dans votre prochaine mise à jour du calendrier Primavera P6. Pour chacun d’entre eux, demandez-vous si la relation est véritablement basée sur le début. Si ce n’est pas le cas, remplacez-le par une logique plus claire ou modélisez directement le délai d’attente.
## Contenu associé
- [Relations SS avec un décalage supérieur à la durée du prédécesseur - Vue d’ensemble](01_overview_template.md)
- [Relations SS avec un décalage supérieur à la durée du prédécesseur - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
