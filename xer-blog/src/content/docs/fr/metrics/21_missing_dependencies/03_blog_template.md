---
title: "Dépendances manquantes dans Primavera P6"
seoTitle: "Dépendances manquantes dans Primavera P6"
description: "Explique pourquoi Dépendances manquantes dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Dépendances manquantes dans Primavera P6"
  - "Primavera P6 Dépendances manquantes dans Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/missing-dependencies-primavera-p6"
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
primarySearchIntent: "Explique pourquoi Dépendances manquantes dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/21_missing_dependencies/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/21_missing_dependencies/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

Les dépendances sont l'épine dorsale d'un planning CPM. Ils expliquent comment le travail passe d'une activité à l'autre, ce qui doit se passer avant que le travail puisse commencer et ce qui dépend de la réalisation de chaque activité. Lorsque des dépendances sont manquantes, le calendrier peut toujours calculer, mais le résultat est plus difficile à faire confiance.

Cette métrique identifie les activités avec une logique de dépendance manquante dans Primavera P6. Il couvre les activités sans prédécesseurs, les activités sans successeurs et les activités isolées sans successeur. Ceux-ci sont souvent appelés départs ouverts et arrivées ouvertes. Quelques-uns peuvent être valables, mais la plupart devraient être révisés.

Une activité sans prédécesseur peut démarrer sans aucune exigence logique d’un travail antérieur. Cela peut être acceptable pour une étape de démarrage de projet approuvée ou pour un démarrage autorisé en externe. Pour un travail de projet normal, il s'agit généralement d'un signe d'avertissement. Les activités de construction, d'ingénierie, d'approvisionnement, de test et de transfert dépendent normalement de quelque chose : l'accès, la validation de la conception, la livraison du matériel, l'installation préalable, l'inspection, l'approbation du permis ou une autre condition du projet.

Une activité sans successeur peut se terminer sans transmettre son résultat à une autre activité. Cela peut être acceptable pour une étape finale d’achèvement du projet. Mais pour la plupart des activités, la question est simple : que permet ce travail ? Si rien n’en dépend, l’activité peut manquer de logique de suivi, être obsolète ou ne pas être correctement intégrée au planning.

Les activités isolées constituent la préoccupation la plus évidente. Si une activité n’a ni prédécesseur ni successeur, elle ne fait pas réellement partie du réseau CPM. Il se peut qu'il figure dans le dossier, qu'il comporte des dates et qu'il apparaisse dans les rapports, mais il n'aide pas le calendrier à expliquer la séquence des travaux.

Les dépendances manquantes affectent bien plus que les scores de qualité logique. Ils peuvent fausser les dates de début, les dates de fin, les valeurs de marge et le chemin critique. Un démarrage ouvert peut dériver vers la date des données ou démarrer trop tôt car rien ne le retient. Une finition ouverte peut présenter des flottaisons qui ne reflètent pas l'impact des travaux sur le reste du projet. Lors de l'examen du PMO ou du client, ces lacunes rendent plus difficile l'explication de la crédibilité des dates.

L'examen pratique commence par une présentation P6 qui comprend l'ID d'activité, le nom de l'activité, le WBS, le type d'activité, le statut de l'activité, le début, la fin, la marge totale, le calendrier, les contraintes, les prédécesseurs et les successeurs. Filtrez les activités sans prédécesseurs, sans successeurs et ni l'un ni l'autre. Séparez ensuite les exceptions valides des éléments qui nécessitent une correction.

Les exceptions valides doivent être limitées. Le démarrage du projet approuvé peut ne pas avoir besoin d'un prédécesseur. L’étape d’achèvement finale n’aura peut-être pas besoin d’un successeur. Certains jalons de l'interface externe peuvent représenter un travail contrôlé en dehors du planning. Ces exceptions doivent être documentées afin que les évaluateurs n'aient pas à deviner.

Pour les démarrages ouverts, ajoutez une logique de prédécesseur qui reflète la condition réelle requise avant que le travail puisse commencer. Il peut s'agir d'une activité de construction antérieure, d'une approbation de conception, d'une livraison de matériaux, d'une autorisation d'accès, d'une inspection, d'un permis ou d'un transfert d'interface. La relation doit décrire la dépendance réelle, et pas seulement connecter l'activité pour passer un contrôle.

Pour les finitions ouvertes, ajoutez une logique successeur qui représente ce qui suit. Le successeur peut être une autre activité de travail, des tests, une mise en service, un chiffre d'affaires, une clôture, une étape importante ou un package en aval. Le but est de montrer comment le résultat de l’activité affecte le reste du plan.

Pour les activités isolées, vérifiez d’abord si l’activité est toujours nécessaire. S'il s'agit d'une portée valide, connectez-la correctement. S'il est obsolète, dupliqué ou issu d'une ancienne mise à jour, supprimez-le ou fermez-le conformément à la procédure de contrôle du projet.

Le seuil cible devrait être zéro activité non résolue. Cela ne signifie pas que chaque prédécesseur ou successeur manquant se trompe automatiquement. Cela signifie que chaque exception doit être intentionnelle et documentée. Des dépendances manquantes inexpliquées affaiblissent le réseau de planification.

Le nettoyage de cette métrique améliore immédiatement le calendrier. Cela rend le chemin critique plus fiable, la marge plus facile à interpréter et les plans d'anticipation plus utiles. Cela aide également l'équipe de projet à voir si le calendrier est un véritable modèle de travail ou simplement une liste d'activités avec des dates.
## Contenu associé
- [Dépendances manquantes dans Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
