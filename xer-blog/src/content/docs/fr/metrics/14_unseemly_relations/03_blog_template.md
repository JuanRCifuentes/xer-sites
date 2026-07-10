---
title: "Relations inconvenantes dans Primavera P6"
seoTitle: "Relations inconvenantes dans Primavera P6"
description: "Explique pourquoi Relations inconvenantes dans Primavera P6"
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Relations inconvenantes dans Primavera P6"
  - "Primavera P6 Relations inconvenantes dans Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/unusual-relationships-primavera-p6"
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
primarySearchIntent: "Explique pourquoi Relations inconvenantes dans Primavera P6 : jalons, LOE et vérifications du type de relation influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/14_unusual_relations/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/14_unseemly_relations/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

La logique relationnelle est l’une des parties d’un planning les plus faciles à copier rapidement et l’une des parties les plus difficiles à défendre plus tard. Une relation peut paraître inoffensive dans un tableau P6, mais le type d’activité de chaque côté compte. Une relation qui a du sens entre deux activités de tâche normales peut être gênante ou trompeuse lorsqu'une des parties est une activité de jalon de début, de jalon de fin ou de niveau d'effort.

Cette métrique se concentre sur les relations inconvenantes : des modèles de relations qui doivent être revus car ils ne correspondent souvent pas à l'objectif de planification du type d'activité. Le but n’est pas de rejeter automatiquement toute relation inhabituelle. L'objectif est de trouver une logique qui nécessite un second examen avant qu'elle n'affecte les dates des jalons, la marge, les rapports sur le chemin critique ou la confiance des clients.

Le premier groupe de résultats concerne les jalons de fin. Un jalon de fin représente un événement d’achèvement. Il est généralement utilisé pour marquer qu'un package, une phase, un transfert, une approbation ou un point contractuel a été atteint. Lorsqu'un jalon de fin a un successeur SS ou SF, la logique peut dire qu'une activité ultérieure peut commencer parce que l'événement de fin a commencé, ou peut se terminer parce que l'événement de fin commence. C'est généralement difficile à expliquer. Un jalon de fin avec un prédécesseur SS peut également être suspect car l'achèvement du jalon peut être lié au début des travaux antérieurs plutôt qu'à la condition d'achèvement qui prouve réellement que le jalon a été atteint.

Le deuxième groupe concerne les étapes de démarrage. Un jalon de début représente le début d’un événement, d’une phase, d’une fenêtre d’accès ou d’une autorisation. Si un jalon de départ a un prédécesseur FF ou SF, l'événement de départ peut être lié à un prédécesseur d'arrivée d'une manière qui ne décrit pas clairement la condition de départ requise. Si un jalon de début a un successeur FS ou FF, le jalon peut agir comme un point d'arrivée de tâche plutôt que comme un événement de départ. Parfois, cela se produit parce que le type de jalon n’a pas été sélectionné correctement. Dans d’autres cas, le type de relation était copié à partir d’une autre partie du planning et n’était jamais révisé.

Le troisième groupe concerne les activités LOE. Les activités LOE sont utilisées pour représenter le soutien, la supervision, la gestion, l’inspection ou tout autre effort qui s’étend à d’autres travaux. Ils ne sont normalement pas destinés à piloter des activités de production discrètes de la même manière qu’une tâche normale. Lorsqu'une activité LOE a une relation FS ou SF, le réviseur du calendrier doit se demander si la LOE contrôle un travail qui devrait plutôt être piloté par des activités de travail physiques, des contraintes d'accès, des approbations ou des jalons contractuels.

En pratique, cette métrique est utile car elle impose une conversation claire sur l’intention. Que représente cette étape ? Cette LOE résume-t-elle le travail ou le pilote-t-elle ? Cette relation décrit-elle un véritable séquençage, ou n'est-elle là que pour faire tenir un rendez-vous ?

Considérons une étape de finition appelée « Achèvement mécanique ». S'il existe un SS successeur de « Démarrer la mise en service », le calendrier peut impliquer que la mise en service peut commencer lorsque l'achèvement mécanique commence. Cela ne correspond pas très bien au concept de jalon. Si la mise en service peut commencer après un chiffre d’affaires partiel, la meilleure solution consiste peut-être à ajouter une activité de chiffre d’affaires discrète ou un jalon plus spécifique. Si la mise en service dépend véritablement de l'achèvement mécanique complet, une relation FS depuis l'étape d'achèvement jusqu'à la mise en service est plus facile à comprendre et à défendre.

Considérons maintenant une activité LOE appelée « Support à la gestion de projet » avec une relation FS avec une activité de construction. Cette relation peut faire de l’activité de soutien un moteur du travail sur le terrain, ce qui n’est généralement pas l’intention. Un planificateur doit vérifier si l'activité de construction doit plutôt être motivée par l'ingénierie, l'approvisionnement, l'accès, les permis, la construction précédente ou une autre condition discrète. Le LOE peut nécessiter des pilotes de début et de fin différents afin de couvrir le travail sans le contrôler de manière incorrecte.

La meilleure méthode d’examen est simple. Créez une présentation P6 qui affiche l'ID d'activité, le nom de l'activité, le type d'activité, le prédécesseur, le successeur, le type de relation, le décalage, le début, la fin, la marge totale et l'état du chemin critique ou le plus long. Filtrez les jalons et les activités LOE, puis isolez les modèles de relation signalés par la métrique. Examinez d'abord les éléments critiques et quasi-critiques, car ils peuvent affecter immédiatement les rapports de projet.

Tous les éléments signalés ne seront pas erronés. Certains projets ont des règles logiques spécifiques au client ou des exigences de reporting inhabituelles. Certains modèles de planification utilisent des jalons spéciaux pour s'interfacer avec d'autres systèmes. Ces cas doivent être rares, approuvés et documentés. Si un évaluateur ne peut pas expliquer la relation dans un langage de planification simple, il devra probablement la corriger.

Un bon objectif pour cette métrique est zéro relation non résolue. Le mot important n’est pas résolu. L'équipe de planification doit soit corriger la relation, réviser le type d'activité, ajouter une meilleure activité pour représenter la condition réelle ou documenter l'exception approuvée. Laisser ces relations inexpliquées affaiblit le calendrier car cela rend le réseau logique plus difficile à faire confiance.

Les relations inconvenantes sont souvent de petits symptômes de problèmes de qualité de calendrier plus importants : logique copiée, définitions d'étapes peu claires, utilisation abusive des activités LOE ou habitude de forcer les dates à travers les types de relations. Les nettoyer améliore plus qu’un score métrique. Cela rend le calendrier plus facile à examiner, plus facile à expliquer et plus fiable pour la gouvernance du PMO et la prise de décision en matière de projet.
## Contenu associé
- [02_guide_template](../14_unusual_relations/02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
