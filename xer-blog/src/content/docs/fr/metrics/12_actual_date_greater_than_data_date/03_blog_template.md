---
title: "Dates réelles postérieures à la date des données dans Primavera P6"
seo_title: "Dates réelles postérieures à la date des données dans Primavera P6"
meta_description: "Explique pourquoi Dates réelles postérieures à la date des données dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Dates réelles postérieures à la date des données dans Primavera P6"
  - "Primavera P6 Dates réelles postérieures à la date des données dans Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-blog-article-actual-date-greater-than-data-date-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Explique pourquoi Dates réelles postérieures à la date des données dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
related_metrics:
  - "08_metrics_fr/12_actual_date_greater_than_data_date/01_overview_template.md"
  - "08_metrics_fr/12_actual_date_greater_than_data_date/02_guide_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/12_actual_date_greater_than_data_date/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Dates réelles postérieures à la date des données dans Primavera P6

## Titre

Dates réelles postérieures à la date des données dans Primavera P6

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui valident les mises à jour du calendrier Primavera P6.

## Crochet d'ouverture

La date des données est la ligne entre l'historique réel et la prévision. Si une date réelle tombe après cette ligne, le calendrier mélange le futur avec le passé.

## Introduction

Dans Primavera P6, la date des données définit la limite de mise à jour. Le travail réel doit être enregistré au plus tard à cette date. Les travaux de prévision devraient rester après.

Lorsqu'une date de début réelle, une date de fin réelle ou une autre date réelle est postérieure à la date des données, la planification contient une erreur de date d'état. L'activité peut indiquer que le travail est déjà commencé ou terminé même si cette date se situe en dehors de la période de reporting en cours.

Cette métrique identifie les activités dont les dates réelles sont supérieures à la date des données. L’objectif est zéro activité non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie si les dates réelles sont cohérentes avec le cycle de mise à jour actuel. Les dates réelles doivent représenter les performances réelles déjà atteintes à la date de données.

Si une date réelle est postérieure à la date des données, l'une des deux choses suivantes est généralement fausse. Soit la date réelle a été mal saisie, soit la date des données ne correspond pas à la période de déclaration approuvée.

Un résultat élevé suggère un faible contrôle de la date limite de mise à jour, des problèmes d'importation ou une confusion entre les dates réelles et prévues.

## Pourquoi ce sujet est important

Les dates réelles futures peuvent nuire à la crédibilité du calendrier. Ils peuvent fausser les rapports d’avancement, la valeur acquise, la marge et les prévisions d’étapes.

Ils rendent également les révisions de planning plus difficiles. Les évaluateurs du PMO et les clients s'attendent à ce que la date des données sépare clairement ce qui s'est passé de ce qui est prévu.

Si cette limite n’est pas respectée, la mise à jour devient difficile à faire confiance.

## Causes courantes de mauvais résultats

- Dates réelles saisies au-delà de la date limite de mise à jour
- Date de données du projet incorrecte
- Progression importée à partir de fichiers couvrant des dates futures
- Confusion entre dates réelles et dates prévisionnelles
- Mises à jour manuelles du statut saisies sans vérifier la date des données
- Feuille de temps ou systèmes de terrain non alignés sur la période de mise à jour du planning

## Comment améliorer le résultat

### 1. Confirmez la date des données

Commencez par confirmer la date des données approuvée pour la mise à jour. Si la date des données est erronée, corrigez-la avant de modifier le statut de l'activité.

La date des données doit correspondre à la période de reporting et à la procédure de contrôle du projet.

### 2. Examiner les dates réelles futures

Filtrez les dates réelles supérieures à la date des données. Examinez ensemble le début réel, la fin réelle, l’état de l’activité, la durée restante et le pourcentage achevé.

Si la date réelle future est erronée, corrigez-la ou supprimez-la. Si le travail n’a pas réellement eu lieu à la date des données, il ne doit pas être enregistré comme étant réel.

### 3. Corrigez le flux de travail de mise à jour

Si le problème provient d'une importation, examinez le fichier source et le mappage. S'il s'agit de mises à jour manuelles, renforcez la procédure de coupure des mises à jour.

L'objectif est d'empêcher les futurs chiffres réels d'entrer dans le planning avant le reporting.

## Exemple de scénario

Une mise à jour mensuelle du calendrier a une date de données du 31 mai. Lors de l'examen, le planificateur trouve une fin réelle au 3 juin pour une activité d'installation.

Le rapport de terrain comprenait des travaux réalisés après la date limite de déclaration. Le planificateur supprime la future fin réelle, rétablit le statut correct au 31 mai et conserve le travail restant dans la prévision.

Le calendrier sépare désormais les progrès réels de mai des travaux prévus de juin, ce qui rend la mise à jour plus fiable.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez la métrique et confirmez la date des données.
- Jours 2-3 : Corrigez les dates réelles futures et le statut de l'activité.
- Jours 4 à 5 : Examiner les fichiers d'importation et mettre à jour le flux de travail.
- Jour 6 : Vérifiez les rapports, les résultats de la valeur acquise et les dates des jalons.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de déplacer la date des données uniquement pour masquer les chiffres réels futurs. La date des données doit suivre la période de déclaration approuvée.

Évitez de supprimer les dates réelles sans confirmer le statut réel du champ.

Évitez d’ignorer les sources d’importation. Si les chiffres réels futurs proviennent d'une importation, le problème peut se répéter au cycle suivant.

## Points clés à retenir

- Les dates réelles doivent être identiques ou antérieures à la date des données.
- L’objectif est zéro activité non résolue.
- Les chiffres réels futurs peuvent indiquer un statut erroné, une date de données incorrecte ou des problèmes d'importation.
- Corrigez le statut d'activité, la durée restante et le pourcentage d'avancement après avoir fixé les dates.
- Le contrôle de coupure de mise à jour évite les problèmes répétés.

## Conclusion

Les dates réelles après la date des données constituent un problème évident de mise à jour du calendrier. Ils brouillent la frontière entre l’histoire et les prévisions.

La gestion de cette métrique améliore la discipline de mise à jour, les rapports d'avancement, la fiabilité de la valeur acquise et la confiance dans les soumissions de calendrier Primavera P6.

## Appel à l'action

Passez en revue toutes les dates réelles après la date des données avant de publier votre prochaine mise à jour du calendrier. Corrigez le problème de date, de statut ou de source de date de données afin que le planning sépare clairement les performances réelles du travail prévu.
## Contenu associé
- [Dates réelles postérieures à la date des données dans Primavera P6 - Vue d’ensemble](01_overview_template.md)
- [Dates réelles postérieures à la date des données dans Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
