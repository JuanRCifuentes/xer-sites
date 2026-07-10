---
title: "Activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS"
seoTitle: "Activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS - Primavera P6"
description: "Explique pourquoi Activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS"
  - "Primavera P6 Activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/activities-with-ff-predecessor-and-no-fs-ss-predecessor-primavera-p6"
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
primarySearchIntent: "Explique pourquoi Activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titre

Activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui évaluent la logique de planification de Primavera P6.

## Crochet d'ouverture

La logique de fin à fin peut être utile lorsque deux activités doivent être réalisées ensemble. Mais si une activité a un prédécesseur FF et aucun prédécesseur FS ou SS, sa fin peut être contrôlée alors que son début reste faiblement défini.

## Introduction

Dans Primavera P6, une relation FF lie la fin d'une activité à la fin d'une autre. Cela peut être approprié lorsque le travail se chevauche mais qu’une activité ne peut pas se terminer tant qu’une autre activité n’est pas terminée.

Le risque apparaît lorsqu'une activité n'a que des prédécesseurs FF. Si aucun prédécesseur ne contrôle le moment où l'activité peut démarrer, le calendrier peut permettre à l'activité de commencer plus tôt que ne le permet la séquence de travail réelle.

Cette métrique identifie les activités avec au moins un prédécesseur FF et aucun prédécesseur FS ou SS. L’objectif est zéro activité non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie si le début d'une activité est représenté dans le réseau logique. La logique FF connecte les finitions. Les logiques FS et SS peuvent connecter le travail en amont au démarrage de l'activité.

Une activité peut avoir une logique FF valide et nécessiter néanmoins une logique de démarrage. Par exemple, les tests peuvent devoir se terminer avec l'installation, mais ils ne peuvent pas démarrer tant qu'une partie de l'installation n'est pas disponible. Dans ce cas, une relation SS peut être nécessaire en plus de la relation FF.

Un résultat élevé suggère que les activités peuvent être liées uniquement par les conditions de finition. Un résultat faible suggère que les démarrages d’activité sont mieux représentés dans le réseau CPM.

## Pourquoi ce sujet est important

La logique de planification doit montrer à la fois comment le travail commence et comment il se termine. Si le démarrage d'une activité n'est pas lié aux travaux en amont, des dates anticipées peuvent s'avérer irréalistes.

Cela peut affecter la marge totale, le chemin le plus long, la confiance des jalons et la planification à court terme. Cela peut également donner l’impression que le travail qui se chevauche est plus facile à démarrer qu’il ne l’est en réalité.

## Causes courantes de mauvais résultats

- Utilisation excessive des relations FF pour modéliser le travail qui se chevauche
- Relations SS manquantes pour des travaux pouvant démarrer après un avancement partiel
- Relations FS manquantes pour les travaux qui nécessitent l'achèvement complet du prédécesseur
- Logique de planification copiée à partir de projets plus anciens
- Des décalages utilisés au lieu d'une logique de démarrage-conduite plus claire
- Manque de saisie sur le terrain sur la condition de démarrage réelle

## Comment améliorer le résultat

### 1. Passez en revue la logique du prédécesseur

Filtrez les activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS. Passez en revue la liste des prédécesseurs, les types de relations, les décalages, le statut de l'activité et le solde total.

Demandez ce qui doit se passer avant que l’activité puisse commencer. Si la réponse est un démarrage antérieur, une version partielle, un achèvement complet, une approbation, un accès ou un transfert, le calendrier nécessite probablement une logique de démarrage.

### 2. Ajoutez la bonne relation démarrage-conduite

Utilisez FS lorsque l'activité ne peut pas démarrer tant que le prédécesseur n'est pas terminé. Utilisez SS lorsque l'activité peut démarrer après le démarrage du prédécesseur ou après avoir atteint un point de progression défini.

Évitez d'ajouter de la logique uniquement pour effacer la métrique. La relation doit refléter la séquence d'exécution réelle.

### 3. Documenter les exceptions valides

Certaines activités peuvent constituer des exceptions valables. Le niveau d'effort, le support ou les activités administratives peuvent ne pas nécessiter de prédécesseurs. Dans ces cas-là, documentez la raison afin que l’élément ne reste pas un problème inexpliqué de qualité du planning.

## Exemple de scénario

Un planning comporte une activité appelée « Test final » avec un prédécesseur FF de « Installation complète ». Cette relation est utile car les tests ne peuvent pas se terminer tant que l'installation n'est pas terminée.

Cependant, aucun prédécesseur FS ou SS n’est lié au début des tests. Si le calendrier prévoit des dates rapprochées, les tests peuvent sembler pouvoir démarrer avant que suffisamment de travaux d'installation ne soient disponibles.

Le planificateur ajoute une relation SS de « Installation complète » à « Test final » avec un décalage ou un point de progression approprié. La relation FF reste pour protéger l’achèvement final. Désormais, le calendrier indique à la fois quand les tests peuvent commencer et quand ils peuvent se terminer.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez la métrique et identifiez les activités affectées.
- Jours 2 et 3 : Examinez d'abord les éléments critiques et quasi critiques.
- Jours 4 et 5 : ajoutez une logique FS ou SS valide et supprimez le décalage trompeur si nécessaire.
- Jour 6 : Confirmez les exceptions et examinez les mouvements du planning.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de traiter chaque relation FF comme un problème. Le problème n’est pas la logique FF elle-même ; le problème vient du manque de logique de démarrage lorsque le démarrage est important.

Évitez de remplacer toutes les relations FF par des relations FS. Le chevauchement peut être réaliste et utile.

Évitez de laisser des exceptions non documentées. Les évaluateurs doivent savoir si un élément est un développement logique intentionnel ou inachevé.

## Points clés à retenir

- La logique FF contrôle la fin de l'alignement, pas le début de l'activité.
- Les activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS peuvent commencer plus tôt que la séquence réelle ne le prend en charge.
- La logique SS est souvent utile lorsque des travaux qui se chevauchent nécessitent une condition de départ claire.
- L’objectif est zéro activité non résolue.
- Documentez clairement les exceptions valides.

## Conclusion

Cette métrique aide les planificateurs à confirmer que les démarrages d'activité sont représentés dans le réseau. Les relations FF peuvent être valides, mais elles ne doivent pas laisser les débuts d’activités importantes déconnectés du travail en amont.

L'examen de cette métrique améliore la qualité du CPM, la fiabilité de la marge et la confiance dans le chemin le plus long. Cela aide également les réviseurs du PMO à distinguer une logique de chevauchement réaliste d'un séquençage faible ou incomplet.

## Appel à l'action

Passez en revue les activités avec les prédécesseurs FF et aucun prédécesseur FS ou SS dans votre prochaine mise à jour du calendrier Primavera P6. Pour chacun d’entre eux, demandez-vous si le démarrage de l’activité doit être impulsé par un travail en amont. Si tel est le cas, ajoutez une logique de démarrage-conduite valide. Si ce n’est pas le cas, documentez l’exception.
## Contenu associé
- [Activités avec des prédécesseurs FF et aucun prédécesseur FS ou SS - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
