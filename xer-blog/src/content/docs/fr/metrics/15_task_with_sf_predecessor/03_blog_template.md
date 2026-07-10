---
title: "Activités de tâches avec les prédécesseurs SF dans Primavera P6"
seo_title: "Activités de tâches avec les prédécesseurs SF dans Primavera P6"
meta_description: "Explique pourquoi Activités de tâches avec les prédécesseurs SF dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Activités de tâches avec les prédécesseurs SF dans Primavera P6"
  - "Primavera P6 Activités de tâches avec les prédécesseurs SF dans Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-blog-article-task-with-sf-predecessor-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Explique pourquoi Activités de tâches avec les prédécesseurs SF dans Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
related_metrics:
  - "08_metrics_fr/15_task_with_sf_predecessor/01_overview_template.md"
  - "08_metrics_fr/15_task_with_sf_predecessor/02_guide_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/15_task_with_sf_predecessor/03_blog_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Activités de tâches avec les prédécesseurs SF dans Primavera P6

Les relations du début à la fin sont l'un des types de relations les moins courants dans la planification du CPM. Dans Primavera P6, une relation SF signifie que l'activité successeur ne peut pas se terminer tant que l'activité prédécesseur n'a pas commencé. Cela peut être valable dans des cas inhabituels, mais ce n’est pas ainsi que la plupart des travaux de projet sont séquencés.

Pour les activités de tâches normales, un prédécesseur du début à la fin devrait immédiatement soulever une question de révision : quelle condition du monde réel cette relation tente-t-elle de représenter ? Si la réponse n’est pas claire, la relation peut affaiblir la logique du calendrier.

La plupart des calendriers de projets reposent sur trois types de relations pratiques. La fonction Fin au début est utilisée lorsqu'une activité doit se terminer avant qu'une autre puisse commencer. Le mode Début à début est utilisé lorsque les activités peuvent commencer ensemble ou qu'un démarrage dépend d'un autre démarrage. La fin à la fin est utilisée lorsque l’achèvement d’une activité est lié à l’achèvement d’une autre. Ces types de relations sont généralement plus faciles à comprendre pour les équipes de terrain, les chefs de projet et les réviseurs.

SF est différent. Il relie le début d’un prédécesseur à la fin d’un successeur. Cela signifie que la fin du successeur est conservée jusqu'au démarrage du prédécesseur. Dans de nombreux calendriers de construction, d’ingénierie, d’approvisionnement et de mise en service, cette logique est difficile à expliquer. Si une tâche ne peut pas se terminer avant qu'une autre tâche ne démarre, le planificateur doit être capable de décrire la condition opérationnelle exacte derrière cette règle.

Un problème courant est la logique copiée. Un planificateur peut copier un groupe d'activités d'un autre projet, importer une logique externe ou appliquer des modifications globales, et une relation SF reste dans le planning sans que personne ne s'en aperçoive. Les dates calculées peuvent toujours sembler acceptables, donc la relation survit. Plus tard, lors d’un bilan, la voie logique devient difficile à défendre car la relation ne reflète pas la manière dont le travail se déroule réellement.

Un autre problème est le contrôle des dates. Parfois, la logique SF est utilisée avec un décalage pour qu'une activité se termine à la date souhaitée. Cela peut cacher le vrai pilote. Si le calendrier nécessite une date contractuelle, une fenêtre d'accès, une condition de livraison ou une étape de transfert, cette condition doit généralement être modélisée directement. Le calendrier ne doit pas s'appuyer sur un type de relation déroutant simplement parce qu'il produit la date de fin souhaitée.

Considérons une tâche appelée « Opération de contournement temporaire » avec un prédécesseur SF de « Démarrer le fonctionnement permanent du système ». Dans ce cas, l'opération de bypass ne peut pas se terminer avant le démarrage du système permanent. Cela pourrait constituer une relation SF défendable si le contournement doit rester actif jusqu'à ce que le système de remplacement soit opérationnel. Même dans ce cas, le planificateur doit documenter la raison, car les évaluateurs remettront raisonnablement en question la relation.

Considérons maintenant une tâche normale appelée « Installer le chemin de câbles » avec un prédécesseur SF de « Démarrer le tirage du câble ». Cette relation est plus difficile à justifier. Si l'installation du chemin de câbles doit être terminée avant que le tirage du câble puisse commencer, la logique FS du chemin de câbles au tirage du câble peut être plus appropriée. Si les travaux se chevauchent, la logique SS ou FF peut être plus claire. La relation SF ne doit pas perdurer à moins qu'elle ne représente la séquence de construction réelle.

La meilleure méthode de révision dans P6 consiste à créer une présentation comprenant l'ID d'activité, le nom d'activité, le WBS, le type d'activité, l'ID de prédécesseur, le nom du prédécesseur, le type de relation, le décalage, le début, la fin, la marge totale, les contraintes et l'état du chemin critique ou le plus long. Filtrez les activités de tâches avec les prédécesseurs SF. Examinez ensuite d'abord les résultats critiques et quasi critiques, car ces relations peuvent affecter directement les moteurs de projet signalés.

Pour chaque résultat, posez une série de questions simples. Quelle est la condition de la modélisation de la relation SF ? FS, SS ou FF décriraient-ils la logique plus clairement ? Le décalage est-il utilisé pour forcer une date ? La relation affecte-t-elle le chemin critique ou le reporting des jalons ? Existe-t-il une raison documentée pour le conserver ?

Le seuil cible doit être de zéro relation de prédécesseur SF non résolue sur les activités de tâche. Cela ne signifie pas que chaque relation SF est automatiquement fausse. Cela signifie que chaque relation SF doit être soit corrigée, soit clairement justifiée. Une logique SF inexpliquée peut réduire la confiance dans le réseau, car elle rend la logique plus difficile à auditer et à communiquer.

Lorsque la relation n'est pas valide, remplacez-la par le type de relation qui correspond à la séquence réelle. Si l’activité doit démarrer après la fin d’une autre, utilisez FS. Si les départs sont liés, utilisez SS. Si les finitions doivent s'aligner, utilisez FF. Si le problème concerne un jalon, une livraison, une approbation ou une condition d'accès manquant, ajoutez ou corrigez l'activité qui représente cette condition.

Après corrections, recalculez le planning et examinez le chemin logique concerné. Vérifiez la marge totale, le chemin critique ou le plus long, les dates des jalons et les rapports prospectifs à court terme. L’objectif n’est pas seulement d’améliorer le score métrique. L’objectif est de rendre le planning plus facile à expliquer et plus fiable pour la prise de décision.

Les activités de tâches avec les prédécesseurs de SF sont des signaux petits mais importants. Ils pointent souvent vers une logique copiée, des dates forcées ou un séquençage peu clair. Leur examen aide l'équipe de projet à nettoyer le réseau logique avant que ces faiblesses ne se transforment en problèmes de reporting.
## Contenu associé
- [Activités de tâches avec les prédécesseurs SF dans Primavera P6 - Vue d’ensemble](01_overview_template.md)
- [Activités de tâches avec les prédécesseurs SF dans Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
