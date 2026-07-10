---
title: "Fin prévue avant la date des données dans Primavera P6"
seoTitle: "Fin prévue avant la date des données dans Primavera P6"
description: "Explique pourquoi Fin prévue avant la date des données dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Fin prévue avant la date des données dans Primavera P6"
  - "Primavera P6 Fin prévue avant la date des données dans Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/expected-finish-less-than-data-date-primavera-p6"
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
primarySearchIntent: "Explique pourquoi Fin prévue avant la date des données dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/16_expected_finish_less_than_data_date/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/16_expected_finish_less_than_data_date/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

La date des données est la ligne entre ce qui s'est passé et ce qui est encore prévu. Dans une mise à jour propre du calendrier, les informations d'état avant la date des données doivent être résolues comme une progression réelle, tandis que le travail restant doit être prévu à partir de la date des données. Lorsqu'une activité a une fin prévue antérieure à la date des données, cette limite devient floue.

Cette mesure identifie les activités pour lesquelles la fin prévue est antérieure à la date de données actuelle. Il s'agit d'une simple vérification, mais elle peut révéler des entrées d'état obsolètes, des finitions réelles manquantes, des prévisions de terrain obsolètes ou des flux de travail de mise à jour qui ne respectent pas correctement les dates prévues.

Dans Primavera P6, la fin attendue est souvent utilisée comme champ de prévision ou de mise à jour, en fonction des paramètres de processus et de calendrier de l'organisation. Certaines équipes l'utilisent pour capturer les attentes du terrain concernant les activités en cours. D'autres l'importent à partir de feuilles de calcul ou de systèmes de progression. Étant donné que le champ peut influencer le comportement de planification dans certains flux de travail, il ne doit pas être autorisé à rester dans le passé sans examen.

Considérez une activité intitulée « Installer le chemin de câbles principal ». La date des données du projet est le 31 mars, mais la fin prévue de l'activité est le 24 mars. Si l'activité s'est réellement terminée le 24 mars, le planning doit normalement avoir un statut Fin réelle et un statut Terminé. Si l'activité ne s'est pas terminée, la fin attendue est obsolète et doit être mise à jour en fonction des dernières informations du champ. Quoi qu’il en soit, la valeur actuelle nécessite une attention particulière.

Ce problème apparaît souvent lorsque les équipes avancent la date des données mais ne mettent pas entièrement à jour tous les champs de prévision. Le pourcentage achevé peut être mis à jour. La durée restante peut être ajustée. Certaines dates réelles peuvent être saisies. Mais les valeurs de fin attendue de la mise à jour précédente restent intactes. Le résultat est un calendrier qui semble partiellement mis à jour mais qui contient toujours des dates d'achèvement prévues dans le passé.

La première question est de savoir si la date des données est correcte. Si la date des données n'a pas été définie correctement, la métrique peut signaler la mauvaise limite. Une fois la date des données confirmée, chaque activité doit être examinée par rapport à son véritable statut. L'activité a-t-elle été terminée avant la date des données ? La fin réelle est-elle manquante ? L'activité est-elle toujours active ? La durée restante représente-t-elle toujours le travail restant ?

Pour un travail terminé, la solution consiste généralement à saisir ou à corriger la fin réelle, puis à confirmer que l'état de l'activité, le pourcentage achevé et la durée restante sont cohérents. Pour les travaux toujours actifs, la fin prévue doit être mise à jour à une date valide à la date ou après la date des données. La durée restante doit également être revue afin que le calcul du calendrier reflète la prévision actuelle.

Pour les travaux non commencés, une fin attendue avant la date des données indique généralement une valeur ancienne ou importée. Le planificateur doit confirmer si l'activité appartient toujours au plan, si ses dates prévisionnelles doivent être recalculées et si la date prévue doit être supprimée ou remplacée selon la procédure de mise à jour du projet.

Un examen pratique dans P6 doit inclure l'ID d'activité, le nom de l'activité, le WBS, le statut de l'activité, la fin prévue, le début réel, la fin réelle, la durée restante, le pourcentage achevé, le début, la fin, le solde total et le calendrier. L’équipe doit donner la priorité aux activités critiques et quasi-critiques, au travail de transfert, aux jalons liés aux clients et aux activités à court terme.

Cette métrique permet également de révéler les problèmes de processus. Si le même problème apparaît à chaque mise à jour, la source peut être un fichier d'importation, un modèle de feuille de calcul ou un workflow de reporting sur le terrain. L'équipe doit vérifier si la fin attendue est chargée à partir d'un autre système et si des règles de validation existent avant que le calendrier ne soit calculé et émis.

Le seuil cible devrait être zéro activité non résolue. Cela ne signifie pas que chaque activité signalée constitue un problème majeur. Cela signifie que chaque activité doit être corrigée ou expliquée. Une fin attendue avant la date des données ne doit pas rester dans le planning simplement parce que personne ne l'a regardée.

Le nettoyage de cette métrique améliore la crédibilité du calendrier. Cela aide l'équipe à maintenir une limite de mise à jour claire, à distinguer les performances réelles du travail prévu et à éviter les résultats d'anticipation ou de marge trompeurs. Dans les examens du PMO, cela montre également que la mise à jour du calendrier a non seulement été calculée, mais qu'elle a en fait vérifié la cohérence du statut.
## Contenu associé
- [Fin prévue avant la date des données dans Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
