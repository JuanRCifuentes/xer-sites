---
title: "Relations FF avec un décalage supérieur à la durée du successeur - Guide d’amélioration"
seo_title: "Relations FF avec un décalage supérieur à la durée du successeur - Guide d’amélioration - Primavera P6"
meta_description: "Apprenez à corriger Relations FF avec un décalage supérieur à la durée du successeur dans Primavera P6 avec des contrôles de logique, de validation et de réévaluation."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Relations FF avec un décalage supérieur à la durée du successeur"
  - "Primavera P6 Relations FF avec un décalage supérieur à la durée du successeur"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-improvement-guide-ff-lag-greater-than-successor-duration-primavera-p6"
language: "fr"
content_type: "metric"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Apprenez à corriger Relations FF avec un décalage supérieur à la durée du successeur dans Primavera P6 avec des contrôles de logique, de validation et de réévaluation."
related_metrics:
  - "08_metrics_fr/05_ff_lag_greater_than_successor_duration/01_overview_template.md"
  - "08_metrics_fr/05_ff_lag_greater_than_successor_duration/03_blog_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/05_ff_lag_greater_than_successor_duration/02_guide_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Relations FF avec un décalage supérieur à la durée du successeur - Guide d’amélioration

## But

Ce guide aide les planificateurs à examiner et à corriger les relations de fin à fin où le décalage est supérieur à la durée de l'activité du successeur. Il prend en charge une logique CPM plus claire en remplaçant le décalage FF excessif par une logique relationnelle ou des activités visibles qui représentent mieux la séquence de travail réelle.

## Avant de commencer

Rassemblez les informations suivantes avant d’agir :

- Résultat de l'évaluation actuelle pour cette métrique.
- Liste des relations FF où le décalage est supérieur à la durée du successeur.
- ID d’activité prédécesseur et successeur, noms, WBS, durées, calendriers et statut.
- Décalage relationnel, type de relation et toutes contraintes associées.
- Paramètres de calcul du calendrier et base de calendrier utilisées pour le décalage.
- Logique de terrain, d'ingénierie, d'approvisionnement, d'approbation ou de transfert expliquant la dépendance prévue.

## Comprenez votre résultat

Un résultat important est l’absence de relations FF non résolues où le décalage dépasse la durée du successeur.

Un résultat acceptable peut inclure des exceptions documentées, mais celles-ci doivent être rares. Un long décalage FF indique souvent que le type de relation ne correspond pas à la dépendance modélisée.

Un résultat faible signifie que le planning contient plusieurs liens de fin à fin où la fin du successeur est retardée de plus de temps que la durée de l'activité du successeur. Cela peut masquer une logique de démarrage, des périodes d'attente ou des activités intermédiaires manquantes.

## Objectif d'amélioration

L’objectif est de zéro relation FF non résolue avec un décalage supérieur à la durée du successeur.

L'objectif est de confirmer si chaque relation doit rester FF, être convertie en logique FS ou SS, voir le décalage réduit ou être documentée comme une exception valide.

## Plan d'action

### Étape 1 : Identifiez le problème principal

Créez une mise en page ou une exportation P6 qui répertorie les relations FF dans lesquelles le décalage est supérieur à la durée du successeur. Incluez l'ID d'activité du prédécesseur et du successeur, le nom de l'activité, le WBS, la durée d'origine, la durée restante, le type de relation, le décalage, le calendrier, la marge totale et l'état de l'activité.

Examinez chaque relation et demandez :

- Pourquoi le successeur termine-t-il après un si long retard ?
- Le successeur dépend-il réellement de la finition du prédécesseur ou d'une autre condition de démarrage ou de transfert ?
- Le décalage est-il supérieur à la durée initiale du successeur, à la durée restante, ou aux deux ?
- Le décalage est-il utilisé pour modéliser le temps d’examen, de traitement, de livraison, d’approbation, d’accès ou une autre période d’attente réelle ?
- Une relation FS ou SS rendrait-elle la dépendance plus claire ?

```mermaid
flowchart TD
    A["Relation FF avec un décalage supérieur à la durée du successeur"] --> B{"La dépendance est-elle vraiment basée sur la finition ?"}
    B -- "Non" --> C["Remplacer par une logique FS ou SS valide"]
    B -- "Oui" --> D{"Le décalage est-il justifié et mesurable ?"}
    D -- "Non" --> E["Réduire ou supprimer le décalage"]
    D -- "Oui" --> F["Exception approuvée pour le document"]
    C --> G["Recalculer et réévaluer"]
    E --> G
    F --> G
```

### Étape 2 : appliquer les correctifs recommandés

Si le successeur doit démarrer après la fin du prédécesseur, remplacez la relation FF par une relation FS. Si le successeur peut démarrer après le démarrage du prédécesseur ou atteint un point de progression défini, utilisez la logique SS.

Si la relation est réellement basée sur la fin, vérifiez la valeur du décalage. Réduisez le décalage excessif là où il a été utilisé comme espace réservé approximatif ou hérité d'une logique copiée. Si le décalage représente une période d'attente réelle, confirmez que l'unité, le calendrier et l'explication sont corrects.

Évitez d'utiliser un long décalage pour remplacer des activités qui devraient être visibles dans le calendrier. Si le décalage représente un délai de révision, de traitement, de livraison, de mobilisation, d'approbation ou de clôture, envisagez la modélisation qui fonctionne comme une activité distincte.

### Étape 3 : Supprimer les bloqueurs courants

Les bloqueurs courants incluent la logique copiée des horaires précédents, les périodes d'attente masquées, la confusion dans les calendriers et la pression pour garder le réseau simple. Résolvez-les en confirmant la dépendance prévue auprès du propriétaire responsable.

Un autre bloqueur considère le décalage comme inoffensif. Long lag can be difficult to review, can hide risk, and can make delay analysis harder because the waiting period is not visible as an activity.

### Étape 4 : Validez les modifications

Recalculez le planning après corrections. Réexécutez la métrique et confirmez que chaque élément restant est soit corrigé, soit documenté en tant qu'exception approuvée.

Examinez la marge totale, le chemin le plus long, le chemin critique et les jalons à court terme. Si les changements dans la relation déplacent les dates clés, communiquez le résultat au responsable des contrôles du projet ou au réviseur du PMO.

## Calendrier d'amélioration

### Jour 1 : Examiner et diagnostiquer

Exécutez la métrique, confirmez la liste des relations concernées et séparez les éléments en type de relation incorrect, décalage excessif, activité masquée, problème de calendrier et exception possible.

### Jours 2-3 : Mettre en œuvre les actions prioritaires

Corrigez d’abord les relations critiques et quasi critiques. Convertissez la logique FF en FS ou SS, le cas échéant, réduisez les décalages injustifiés et documentez les exceptions valides.

### Jours 4 et 5 : surveiller les premiers résultats

Recalculez le calendrier et examinez les mouvements dans les dates margees, de chemin le plus long et de jalon.

### Jour 6 : derniers ajustements

Résolvez les éléments incertains restants avec la discipline responsable, le propriétaire du package ou le responsable de la construction.

### Jour 7 : Réévaluer et comparer

Réexécutez l’évaluation et comparez le résultat au seuil cible.

## Suivi des progrès

Utilisez un simple tracker pour gérer les corrections et les approbations.

| Date | Mesure prise | Impact attendu | Résultat / Observation | Étape suivante |
| --- | --- | --- | --- | --- |
| [Date] | Décalage FF examiné supérieur à la durée du successeur | Identifier une logique faible ou peu claire | [Résultat observé] | Attribuer des corrections |
| [Date] | Relation convertie en FS ou SS | Améliorer la clarté de la logique CPM | [Résultat observé] | Recalculer le planning |
| [Date] | Décalage réduit ou documenté | Améliorer la traçabilité des avis | [Résultat observé] | Réévaluer la métrique |

## Si les résultats ne s'améliorent pas

Si les résultats ne s'améliorent pas, vérifiez si les mêmes modèles de relation se répètent dans un domaine WBS spécifique, une discipline ou une section de planning copiée. Des résultats répétés peuvent indiquer que l’équipe utilise le décalage FF comme raccourci standard au lieu de modéliser de véritables dépendances.

Faites remonter les éléments non résolus lorsqu'ils affectent des travaux critiques, quasi-critiques, contractuels, d'approvisionnement, d'approbation, de mise en service ou de transfert.

## Entretien

Examinez cette mesure lors de chaque mise à jour du calendrier et avant l’approbation de la ligne de base. Portez une attention particulière après l'élaboration d'un calendrier copié, le reséquençage, la planification de la récupération ou des modifications majeures de la portée.

## Liste de contrôle récapitulative

- [ ] Résultat actuel examiné
- [ ] Seuil cible confirmé
- [ ] Principal problème identifié
- [ ] Les relations FF examinées
- [ ] Décalage excessif corrigé ou justifié
- [ ] Remplacements FS ou SS appliqués si nécessaire
- [ ] Travail caché modélisé le cas échéant
- [ ] Horaire recalculé
- [ ] Résultats surveillés
- [ ] Évaluation répétée
- [ ] Prochaines étapes documentées
## Contenu associé
- [Relations FF avec un décalage supérieur à la durée du successeur - Vue d’ensemble](01_overview_template.md)
- [Modèle de blog](03_blog_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
