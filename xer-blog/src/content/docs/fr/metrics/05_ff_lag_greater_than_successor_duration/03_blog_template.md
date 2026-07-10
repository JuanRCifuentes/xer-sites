---
title: "Relations FF avec un décalage supérieur à la durée du successeur"
seoTitle: "Relations FF avec un décalage supérieur à la durée du successeur - Primavera P6"
description: "Explique pourquoi Relations FF avec un décalage supérieur à la durée du successeur influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Relations FF avec un décalage supérieur à la durée du successeur"
  - "Primavera P6 Relations FF avec un décalage supérieur à la durée du successeur"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/ff-lag-greater-than-successor-duration-primavera-p6"
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
primarySearchIntent: "Explique pourquoi Relations FF avec un décalage supérieur à la durée du successeur influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/05_ff_lag_greater_than_successor_duration/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/05_ff_lag_greater_than_successor_duration/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titre

Relations FF avec un décalage supérieur à la durée du successeur

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui évaluent la logique de planification de Primavera P6.

## Crochet d'ouverture

Une relation Fin à Fin doit normalement décrire deux activités dont les dates de fin doivent être liées. Mais lorsque le décalage FF est plus long que la durée du successeur, la relation peut cacher plus qu’elle n’explique.

## Introduction

Dans Primavera P6, la logique FF est souvent utilisée lorsque deux activités peuvent se chevaucher mais que le successeur ne peut pas se terminer tant que le prédécesseur n'a pas terminé. Un petit décalage FF peut être utile lorsqu'un court décalage de clôture, de révision ou de transfert est nécessaire.

Le problème apparaît lorsque le décalage FF est supérieur à la durée du successeur. Si le successeur dure cinq jours et que le décalage FF est de dix jours, le décalage de fin est plus long que l'activité contrôlée. Cela peut signifier que le calendrier cache une période d'attente, une activité manquante ou un autre type de dépendance.

Cette métrique identifie les relations FF dans lesquelles le décalage est supérieur à la durée du successeur. L’objectif est zéro relation non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie si une relation FF est utilisée d'une manière qui a toujours un sens logique. La logique FF relie la finition du prédécesseur à la finition du successeur. Lorsque le décalage dépasse la durée du successeur, la relation peut pousser l'arrivée du successeur d'une manière difficile à comprendre à partir de la seule liste d'activités.

Cela ne signifie pas automatiquement que la relation est mauvaise, mais cela signifie qu’elle doit être revue. La dépendance peut être mieux représentée par une logique FS, une logique SS ou une activité distincte qui montre clairement la période d'attente.

Un résultat élevé suggère que le calendrier utilise peut-être un décalage important pour masquer le travail, les périodes d'attente ou un séquencement peu clair. Un résultat faible suggère que la logique et le décalage FF sont utilisés avec plus de prudence.

## Pourquoi ce sujet est important

Un long décalage peut rendre un planning plus difficile à comprendre. Il cache le temps au sein d’une relation au lieu d’afficher le travail ou la période d’attente dans le cadre du réseau d’activités.

Cela peut affecter la marge, la visibilité du chemin critique, l’examen du chemin le plus long et la préparation à l’analyse des retards. Si un évaluateur ne peut pas facilement comprendre pourquoi un successeur termine son travail à un moment donné, le calendrier devient plus difficile à défendre.

## Causes courantes de mauvais résultats

- Relations FF copiées à partir d'anciennes planifications
- Décalages utilisés comme espaces réservés lors des premières planifications
- Périodes d'attente cachées dans le décalage relationnel
- Logique FS ou SS modélisée incorrectement comme FF plus décalage
- Des différences de calendrier qui rendent le décalage plus difficile à interpréter
- Périodes de révision, d'approbation, de mise en service ou de transfert non modélisées comme des activités

## Comment améliorer le résultat

### 1. Examinez l'intention de la relation

Filtrez les relations FF où le décalage est supérieur à la durée du successeur. Passez en revue le prédécesseur, le successeur, le décalage, les calendriers, la durée, le statut et la marge totale.

Demandez ce que la relation est censée représenter. Si le successeur dépend de l'achèvement du prédécesseur avant de pouvoir démarrer, la relation peut être plus claire en tant que logique FS. Si le successeur peut commencer après le début des travaux en amont, la logique SS peut être plus appropriée.

### 2. Remplacer la logique FF faible

Utilisez FS lorsque le successeur ne peut pas démarrer tant que le prédécesseur n'a pas terminé. Utilisez SS lorsque le successeur peut démarrer après le démarrage du prédécesseur ou atteint un point de progression défini.

Si le décalage représente une période d’attente réelle, demandez-vous si cette période d’attente doit être modélisée comme une activité distincte. C'est souvent plus clair pour les revues, les mises à jour d'avancement et l'analyse des retards.

### 3. Documenter les exceptions valides

Certains longs décalages FF peuvent être intentionnels. Si la relation est valide, documentez la raison et confirmez le calendrier de décalage. L'explication doit être suffisamment claire pour qu'un examinateur du PMO ou un responsable des contrôles de projet puisse la comprendre sans deviner.

## Exemple de scénario

Un planning comprend une relation FF depuis « Installation complète » jusqu'à « Package de clôture approuvé » avec un décalage de quinze jours. L'activité de clôture du package a une durée de cinq jours.

Cela signifie que la fin du package de clôture est retardée de plus de temps que la durée du successeur elle-même. La logique peut tenter de représenter le temps de révision ou d’approbation qui n’est pas visible en tant qu’activité.

Le planificateur examine la séquence et remplace le long décalage par une activité distincte "Revue client du dossier de clôture". Le planning affiche désormais le délai d'attente réel, ce qui rend la logique plus facile à mettre à jour et à défendre.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez la métrique et identifiez les relations affectées.
- Jours 2 et 3 : Examinez d’abord les relations critiques et quasi critiques.
- Jours 4 et 5 : remplacez la logique FF faible, réduisez les décalages injustifiés ou modélisez les périodes d'attente cachées.
- Jour 6 : Confirmez les exceptions et examinez les mouvements du planning.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de traiter tous les décalages comme des erreurs. Le décalage peut être utile lorsqu'il représente un décalage réel et limité.

Évitez de laisser un long décalage inexpliqué. Si le décalage est supérieur à la durée du successeur, il mérite une raison claire.

Évitez de cacher le travail à l’intérieur du décalage alors que le travail doit être visible en tant qu’activité.

## Points clés à retenir

- La logique FF doit représenter une dépendance basée sur la finition.
- Un décalage supérieur à la durée du successeur signale souvent une logique faible ou peu claire.
- FS, SS ou une activité distincte peuvent mieux expliquer la dépendance.
- L’objectif est zéro relation non résolue.
- Les exceptions valides doivent être documentées.

## Conclusion

Cette métrique aide les planificateurs à trouver les relations FF où le décalage peut cacher la véritable dépendance. L’objectif n’est pas de supprimer tout le décalage FF, mais de s’assurer que le décalage est raisonnable, visible et défendable.

L'examen de cette métrique améliore la clarté du CPM, la fiabilité de la marge et la confiance dans le chemin le plus long. Il aide également les réviseurs du PMO à séparer la logique de finition utile des raccourcis de planification.

## Appel à l'action

Examinez les relations FF où le décalage est supérieur à la durée du successeur dans votre prochaine mise à jour du calendrier Primavera P6. Pour chacun d’entre eux, demandez-vous si la relation est véritablement basée sur la fin. Si ce n’est pas le cas, remplacez-le par une logique plus claire ou modélisez directement le délai d’attente.
## Contenu associé
- [Relations FF avec un décalage supérieur à la durée du successeur - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
