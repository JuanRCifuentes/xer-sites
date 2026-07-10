---
title: "Activités avec des successeurs SS et aucun successeur FS ou FF"
seo_title: "Activités avec des successeurs SS et aucun successeur FS ou FF - Primavera P6"
meta_description: "Explique pourquoi Activités avec des successeurs SS et aucun successeur FS ou FF influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Activités avec des successeurs SS et aucun successeur FS ou FF"
  - "Primavera P6 Activités avec des successeurs SS et aucun successeur FS ou FF"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-blog-article-activities-with-ss-successor-and-no-fs-ff-successor-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Explique pourquoi Activités avec des successeurs SS et aucun successeur FS ou FF influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
related_metrics:
  - "08_metrics_fr/02_activities_with_ss_successor_and_no_fs_ff_successor/01_overview_template.md"
  - "08_metrics_fr/02_activities_with_ss_successor_and_no_fs_ff_successor/02_guide_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/02_activities_with_ss_successor_and_no_fs_ff_successor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Activités avec des successeurs SS et aucun successeur FS ou FF

## Titre

Activités avec des successeurs SS et aucun successeur FS ou FF

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui évaluent la logique de planification de Primavera P6.

## Crochet d'ouverture

La logique début-démarrage peut être utile. Il permet le chevauchement des travaux et aide à modéliser une exécution réelle sur le terrain. Mais lorsqu'une activité a un successeur SS et aucun successeur FS ou FF, sa fin peut ne plus avoir d'importance pour le reste du planning.

## Introduction

Dans Primavera P6, le type de relation compte. Une relation Début à Début permet à un successeur de démarrer après le démarrage du prédécesseur. Cela peut être approprié lorsque les travaux se chevauchent, comme par exemple démarrer l’installation après qu’une zone soit partiellement libérée.

Le risque apparaît lorsque le prédécesseur n’a que des successeurs SS. Si aucun successeur ne dépend de la finition du prédécesseur, la prolongation de la durée du prédécesseur ne peut pas retarder les travaux en aval. L’emploi du temps peut sembler sain même si une activité prend plus de temps que prévu.

Cette métrique identifie les activités avec au moins un successeur SS et aucun successeur FS ou FF. L’objectif est zéro activité non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie si la fin d'une activité est représentée dans le réseau logique. La logique SS connecte les démarrages. Les logiques FS et FF connectent la fin d’une activité à un début ou une fin ultérieure.

Une activité peut avoir une logique SS valide et nécessiter néanmoins une logique basée sur la fin. Par exemple, un successeur peut commencer après le début de la première partie du travail, mais il se peut qu'il ne puisse pas se terminer tant que le prédécesseur n'est pas terminé. Dans ce cas, une relation FF peut mieux protéger la logique de planification.

Un résultat élevé suggère que les activités peuvent être liées uniquement par les conditions de démarrage. Un résultat faible suggère que l’achèvement des activités est mieux représenté dans le réseau CPM.

## Pourquoi ce sujet est important

La logique de planification doit montrer à la fois comment le travail commence et comment il se termine. Si la fin d'une activité n'est liée à rien, les retards de cette activité ne peuvent pas décaler les dates en aval.

Cela peut affecter la marge totale, le chemin le plus long, la confiance des jalons et la préparation à l'analyse des retards. Cela peut également créer une prévision trompeuse, car un travail partiellement commencé semble libérer des activités en aval sans montrer ce qui dépend encore de son achèvement.

## Causes courantes de mauvais résultats

- Utilisation excessive des relations SS pour modéliser les travaux qui se chevauchent
- Relations FF manquantes pour un travail qui doit se terminer ensemble
- Relations FS manquantes pour les étapes de transfert, d'inspection ou de rotation
- Logique de planification copiée à partir de projets plus anciens
- Des décalages utilisés au lieu d'une logique plus claire axée sur la finition
- Manque de saisie sur le terrain sur la dépendance d'achèvement réelle

## Comment améliorer le résultat

### 1. Examinez la logique du successeur

Filtrez les activités avec des successeurs SS et aucun successeur FS ou FF. Passez en revue la liste des successeurs, les types de relations, les décalages, le statut de l'activité et le solde total.

Demandez ce qui dépend de la fin de l'activité. Si la réponse est une étape successive de démarrage, de transfert, d’inspection ou d’achèvement, le calendrier nécessite probablement une logique basée sur la fin.

### 2. Ajoutez la bonne relation basée sur la finition

Utilisez FS lorsque l'activité suivante ne peut pas démarrer tant que cette activité n'est pas terminée. Utilisez FF lorsque le travail peut se chevaucher mais que le successeur ne peut pas terminer tant que cette activité n'est pas terminée.

Évitez d'ajouter de la logique uniquement pour effacer la métrique. La relation doit refléter la séquence d'exécution réelle.

### 3. Documenter les exceptions valides

Certaines activités peuvent constituer des exceptions valables. Le niveau d'effort, le support ou les activités administratives n'ont peut-être pas besoin de successeurs axés sur la finition. Dans ces cas-là, documentez la raison afin que l’élément ne reste pas un problème inexpliqué de qualité du planning.

## Exemple de scénario

Un planning comporte une activité appelée « Installer la tuyauterie souterraine » avec un SS successeur de « Remblayer la tranchée ». Cette relation est utile car le remblai peut commencer après l’installation de la première section de canalisation.

Cependant, il n'existe pas de successeur FS ou FF lié à la finition de l'activité de tuyauterie. Si les travaux de canalisation s'étendent sur cinq jours, l'activité de remblayage peut toujours progresser dans le planning sans être retardée par l'achèvement final de la canalisation.

Le planificateur ajoute une relation FF de « Installer une tuyauterie souterraine » à « Remblayer une tranchée ». Désormais, les travaux peuvent toujours se chevaucher, mais l'achèvement du remblayage est lié à l'achèvement de la tuyauterie. Le planning reflète mieux la dépendance réelle du terrain.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez la métrique et identifiez les activités affectées.
- Jours 2 et 3 : Examinez d'abord les éléments critiques et quasi critiques.
- Jours 4 à 5 : ajoutez une logique FS ou FF valide et supprimez le décalage trompeur si nécessaire.
- Jour 6 : Confirmez les exceptions et examinez les mouvements du planning.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de traiter chaque relation SS comme un problème. Le problème n’est pas la logique SS elle-même ; le problème est qu’il manque une logique axée sur la finition lorsque la finition compte.

Évitez de remplacer toutes les relations SS par des relations FS. Le chevauchement peut être réaliste et utile.

Évitez de laisser des exceptions non documentées. Les évaluateurs doivent savoir si un élément est un développement logique intentionnel ou inachevé.

## Points clés à retenir

- La logique SS contrôle le démarrage et non la fin.
- Les activités avec des successeurs SS et aucun successeur FS ou FF peuvent cesser d'influencer les dates en aval lorsque leur durée change.
- La logique FF est souvent utile lorsque des travaux qui se chevauchent doivent se terminer dans l'ordre.
- L’objectif est zéro activité non résolue.
- Documentez clairement les exceptions valides.

## Conclusion

Cette métrique aide les planificateurs à confirmer que l'achèvement des activités est représenté dans le réseau. Les relations SS peuvent être valides, mais elles ne doivent pas laisser les fins d’activités importantes déconnectées du reste du calendrier.

L'examen de cette métrique améliore la qualité du CPM, la fiabilité de la marge et la confiance dans le chemin le plus long. Cela aide également les réviseurs du PMO à distinguer une logique de chevauchement réaliste d'un séquençage faible ou incomplet.

## Appel à l'action

Passez en revue les activités avec les successeurs SS et aucun successeur FS ou FF dans votre prochaine mise à jour du calendrier Primavera P6. Pour chacun d’entre eux, demandez si la fin de l’activité doit entraîner le travail en aval. Si tel est le cas, ajoutez une logique valide basée sur la finition. Si ce n’est pas le cas, documentez l’exception.
## Contenu associé
- [Activités avec des successeurs SS et aucun successeur FS ou FF - Vue d’ensemble](01_overview_template.md)
- [Activités avec des successeurs SS et aucun successeur FS ou FF - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
