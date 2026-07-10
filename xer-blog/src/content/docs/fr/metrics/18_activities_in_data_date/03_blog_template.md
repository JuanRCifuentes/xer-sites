---
title: "Activités à la date des données"
seo_title: "Activités à la date des données"
meta_description: "Explique pourquoi Activités à la date des données"
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Activités à la date des données"
  - "Primavera P6 Activités à la date des données"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-blog-article-activities-on-the-data-date-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Explique pourquoi Activités à la date des données : contrôles de début et de fin anticipés dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
related_metrics:
  - "08_metrics_fr/18_activities_in_data_date/01_overview_template.md"
  - "08_metrics_fr/18_activities_in_data_date/02_guide_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/18_activities_in_data_date/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Activités à la date des données

La date des données est l'une des dates les plus importantes d'un calendrier Primavera P6. Il marque la frontière entre les performances réelles et les prévisions futures. Les travaux effectués avant la date des données doivent être statutés. Les travaux après la date de données doivent être prévus. Lorsque de nombreuses activités ont un début anticipé ou une fin anticipée exactement à la date de données, le calendrier mérite un examen plus approfondi.

Cette métrique vérifie les activités pour lesquelles Début anticipé est égal à la date des données ou Fin anticipée est égale à la date des données. Le but n'est pas de dire que chaque activité sur la date de données est fausse. Certains travaux peuvent légitimement commencer ou se terminer à la limite de la mise à jour. L’objectif est d’identifier le regroupement à la frontière et de confirmer si chaque activité a une raison valable d’être là.

Un démarrage anticipé à la date des données peut être raisonnable lorsque les travaux à court terme sont prêts à commencer après les prédécesseurs terminés. Cela peut aussi être un signe d’avertissement. Les activités peuvent se trouver à la date des données parce qu'il leur manque une logique de prédécesseur, une logique non motrice, des contraintes, des dates prévues ou des mises à jour de statut incomplètes. Si de nombreuses activités non démarrées sont en attente à la date de données, le calendrier peut impliquer que le travail est prêt à démarrer même lorsque les conditions requises n'ont pas été modélisées.

La fin anticipée à la date des données peut également raconter deux histoires différentes. Il peut montrer que le travail dont il est correctement prévu qu'il se terminera à la limite de mise à jour. Mais cela peut aussi indiquer que les progrès n’ont pas été entièrement mis à jour. Si le travail s'est réellement terminé avant ou à la date de données, l'activité peut nécessiter une fin réelle. Si les travaux ne sont pas terminés, la durée restante et la fin prévue devront peut-être être mises à jour.

L'examen pratique commence par une simple mise en page P6. Inclut l'ID d'activité, le nom de l'activité, le WBS, le statut de l'activité, le début anticipé, la fin anticipée, le début, la fin, le début réel, la fin réelle, la durée restante, la marge totale, le calendrier, les contraintes, les prédécesseurs et les successeurs. Filtrez ensuite pour Début anticipé égal à la date des données et Fin anticipée égale à la date des données.

La première question est le statut. L'activité est-elle terminée, en cours ou n'a-t-elle pas commencé ? Si les dates réelles ou la durée restante sont erronées, corrigez le statut avant de modifier la logique. Un calendrier avec des données d'état médiocres ne peut pas produire des dates de prévision fiables.

La deuxième question est logique. L'activité est-elle conduite jusqu'à la date de données par des relations de prédécesseur et de successeur valides ? S'il n'y a pas de prédécesseur, une logique faible ou des relations non motrices, la date de données peut masquer un début ou une fin ouvert. La solution devrait consister à ajouter ou à corriger la logique de planification réelle, et non à déplacer l'activité manuellement.

La troisième question est de savoir si les contraintes, les dates prévues ou les calendriers affectent le résultat. Une contrainte de début, une contrainte de fin, une date attendue obsolète ou un calendrier inhabituel peuvent amener une activité vers la limite de mise à jour. Certaines d’entre elles peuvent être valides, mais elles doivent être intentionnelles et documentées.

Considérons un projet avec une date de données du 30 avril. Un groupe d'activités électriques affichent tous Early Start le 30 avril. Si les travaux de construction précédents ont été achevés et que la zone a été libérée, cela peut être valable. Mais si plusieurs de ces activités n’ont pas de prédécesseurs ou sont contrôlées par des contraintes, le calendrier ne présente pas un véritable plan logique.

Considérons maintenant une activité avec une fin anticipée le 30 avril et un statut En cours. Si le travail a été terminé avant la date limite de mise à jour, le planificateur doit saisir la fin réelle et marquer l'activité comme terminée. S'il reste encore plusieurs jours au travail, la durée restante doit être mise à jour afin que la fin prévue se situe au-delà de la date des données.

Le seuil cible pour cette mesure devrait être zéro activité inexpliquée. Cette formulation est importante. L’objectif n’est pas d’éliminer toutes les activités à la date des données. L'objectif est de s'assurer que chacun est expliqué par l'état actuel, une logique valide ou une exception approuvée.

Cette métrique est particulièrement utile lors des révisions de mises à jour. Une fois la date des données avancée, les activités peuvent être collectées à la limite si le calendrier n'est pas entièrement défini ou si la logique est faible. Un groupe d'activités sur la date de données est souvent le symptôme d'une pression de mise à jour, d'une logique copiée, de démarrages ouverts, de contraintes ou d'un feedback de champ incomplet.

Le nettoyage de cette mesure améliore la crédibilité des prévisions à court terme. Cela aide les équipes de projet à distinguer le travail réellement prêt du travail qui a simplement dérivé jusqu'à la date de mise à jour actuelle. Pour les rapports PMO et clients, cela montre également que la date des données a été traitée comme une limite de statut réelle, et pas seulement comme une date utilisée pour recalculer le fichier.
## Contenu associé
- [Activités à la date des données : contrôles de début et de fin anticipés dans Primavera P6 - Vue d’ensemble](01_overview_template.md)
- [Activités à la date des données : contrôles de début et de fin anticipés dans Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
