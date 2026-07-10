---
title: "Qu'est-ce qu'un horaire"
seo_title: "Qu'est-ce qu'un horaire - Primavera P6"
meta_description: "Comprendre Qu'est-ce qu'un horaire dans Primavera P6 avec une approche pratique de la planification, du contrôle projet et de la qualité du planning."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Qu'est-ce qu'un horaire"
  - "Primavera P6 Qu'est-ce qu'un horaire"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-what-a-planning-is-in-primavera-p6"
language: "fr"
content_type: "blog"
version: "1.0"
topic: "Planification Primavera P6"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Comprendre Qu'est-ce qu'un horaire dans Primavera P6 avec une approche pratique de la planification, du contrôle projet et de la qualité du planning."
related_metrics:
  - "08_metrics_fr/01_activities_starting_in_dd_with_no_logic_driving/01_overview_template.md"
related_blogs:
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Qu'est-ce qu'un horaire

Un calendrier de projet est plus qu’une liste de dates. Il s’agit d’une représentation graphique et logique du plan de livraison du projet. Il explique comment le projet sera exécuté du début à la fin, comment les lots de travaux s'articulent, quand les principales étapes doivent être atteintes et quelles informations l'équipe de projet doit utiliser pour prendre des décisions.

En termes simples, le calendrier transforme le plan de projet en feuille de route. Cela aide toutes les personnes impliquées à comprendre ce qui doit être fait, quand cela doit se produire et qui est responsable de sa réalisation. Pour les chefs de projet, les planificateurs, les équipes de construction, les ingénieurs, les responsables des achats et les réviseurs du PMO, le calendrier devient l'un des principaux outils de coordination et de contrôle.

Le calendrier est une chronologie, mais ce n’est pas seulement une chronologie. Un calendrier faible peut afficher des dates. Un calendrier chargé explique pourquoi ces dates sont crédibles.

## Le calendrier comme feuille de route de livraison

Chaque projet commence avec une intention. L'équipe sait ce qui doit être livré : un bâtiment, une installation, un système industriel, un arrêt, un actif d'infrastructure ou un ensemble de travaux. Mais pour y arriver, il ne suffit pas de connaître l’objectif final. L'équipe doit comprendre la séquence.

Qu'est-ce qui vient en premier ? Que peut-il se passer en parallèle ? Qu'est-ce qui doit attendre l'approbation de la conception, la livraison du matériel, l'accès, la délivrance du permis, les tests ou la remise ? Quelles activités contrôlent la date de fin ? Quelles étapes comptent le plus pour le client ?

Un planning répond à ces questions en convertissant le plan en activités, durées, dépendances, calendriers, ressources, coûts et jalons.

```mermaid
flowchart LR
    A["Plan de réalisation du projet"] --> B["Activités et répartition du périmètre"]
    B --> C["Durées, calendriers, ressources et coûts"]
    C --> D["Dépendances et séquençage"]
    D --> E["Chronologie du calendrier calculé"]
    E --> F["Jalons, chemin critique, marge, histogrammes, courbes et flux de trésorerie"]
```

La chronologie graphique est utile car les gens peuvent voir le travail. Le réseau logique est utile car le logiciel peut calculer le travail. Ensemble, ils permettent au planning de devenir à la fois un outil de communication et un outil de contrôle.

## Ce qui nourrit le planning

Un calendrier est aussi fiable que les informations utilisées pour le construire. Dans Primavera P6, le planning est alimenté par plusieurs entrées majeures.

La première entrée est la liste d'activités. Les activités divisent le projet en éléments de travail gérables. Chaque activité doit être suffisamment claire pour être planifiée, statutée et mesurée.

La deuxième entrée est la durée déterministe. Il s'agit du temps de travail prévu nécessaire pour réaliser chaque activité. La durée doit refléter la méthode d'exécution, les hypothèses de productivité, la taille de l'équipe, l'accès, les contraintes du chantier et les conditions du projet.

La troisième entrée est la logique de dépendance. Les dépendances expliquent comment les activités sont liées les unes aux autres. Il se peut qu’une activité doive être terminée avant qu’une autre ne commence. Deux activités peuvent démarrer ensemble. Deux finitions devront peut-être être alignées. Ces relations créent le réseau CPM.

La quatrième entrée est le séquençage. Le séquençage est l’ordre pratique d’exécution. Il prend en compte la constructibilité, le flux d'ingénierie, le calendrier d'approvisionnement, l'accès, la logique de mise en service, la stratégie de transfert et les priorités du client.

Le cinquième intrant concerne les ressources et les coûts. Le chargement des ressources permet au calendrier d'afficher la demande de main d'œuvre, d'équipement et de matériaux au fil du temps. Le chargement des coûts permet au calendrier de prendre en charge les flux de trésorerie, la valeur acquise et les prévisions financières.

Lorsque ces apports sont complets et réalistes, le calendrier peut produire des résultats utiles.

## Ce que nous dit le calendrier

Un calendrier bien construit indique la durée globale du projet. Il montre les étapes d'achèvement prévues et les livrables intermédiaires. Il produit des histogrammes de ressources qui montrent quand la demande de main-d'œuvre ou d'équipement augmente et diminue. Il prend en charge les courbes de progression, les courbes de flux de trésorerie, les rapports sur la valeur acquise et la planification prospective.

Plus important encore, il identifie le chemin critique ou le chemin le plus long. C’est la chaîne de travail qui mène à la fin du projet. Si les activités sur ce chemin glissent, la date d’achèvement du projet peut glisser. C'est pourquoi la logique est si importante. Sans bonnes dépendances, le chemin critique risque de ne pas montrer les véritables moteurs du projet.

marge est un autre résultat important. marge indique le degré de flexibilité d'une activité avant qu'elle n'affecte une autre activité ou la fin du projet. Mais marge n'a de sens que lorsque le réseau horaire est complet. Si les activités manquent de logique, la marge peut paraître meilleur ou pire que la réalité.

## Pourquoi la logique rend la chronologie crédible

C'est là que la métrique « Activités commençant à la date des données sans logique pilotante » devient importante.

La date des données dans P6 constitue la limite entre les performances réelles et les prévisions. Tout ce qui précède la date des données doit représenter ce qui s'est déjà produit. Tout ce qui se trouve après la date des données devrait représenter le plan à partir de maintenant.

Lorsque les activités commencent exactement à la date de données sans qu’aucune logique ne les pilote, le calendrier envoie un signal d’avertissement. Il peut sembler que les travaux sont prêts à commencer immédiatement, mais le calendrier n’explique peut-être pas pourquoi. Il se peut qu'il n'y ait aucun prédécesseur montrant que la zone est disponible, aucun lien avec la livraison des matériaux, aucun lien avec l'approbation de la conception, aucun lien avec la libération d'inspection et aucune logique des travaux antérieurs.

C’est important car un emploi du temps ne doit pas simplement fixer une date de travail. Il devrait expliquer le chemin menant à cette date.

Si une activité commence à la date des données parce que tous les travaux préalables requis sont terminés et que la logique prend en charge le début, la date est défendable. Si elle commence là parce que l'activité est ouverte, non pilotée, contrainte ou mal mise à jour, la date est faible. L’équipe du projet peut croire que le travail est prêt alors que les conditions réellement favorables n’ont pas été modélisées.

## Un exemple pratique

Imaginez un calendrier de projet avec une date de données au 1er juin. Après la mise à jour, plusieurs activités démarrent le 1er juin :

- Installez le chemin de câbles dans la zone B.
- Commencez les tests de pression des tuyaux.
- Commencez l’alignement de l’équipement.
- Mobiliser l’équipe d’isolation.

À première vue, l’anticipation semble occupée et prête. Mais lorsque le planificateur examine la logique, le problème devient clair. La pose des chemins de câbles n'est pas liée à la livraison du matériel. Les tests de pression ne sont pas liés à l’achèvement de la tuyauterie. L'alignement de l'équipement manque au prédécesseur pour l'achèvement mécanique. La mobilisation de l'équipe d'isolation n'a pas de prédécesseur de libération d'accès.

Le planning indique le travail à la date de données, mais il n'explique pas pourquoi le travail peut commencer. Ce n’est pas une feuille de route fiable. Il s'agit d'une liste d'intentions à court terme.

Le correctif consiste à ajouter ou à corriger la véritable logique CPM. Si la livraison du matériau nécessite l'installation du chemin de câbles, reliez-le. Si l'achèvement de la tuyauterie nécessite des tests de pression, reliez-la. Si la libération d'accès entraîne l'isolation, modélisez cette condition. Après le recalcul, certaines activités peuvent encore démarrer à proximité de la date des données, mais le calendrier peut désormais expliquer pourquoi.

## Ce qu'un bon emploi du temps devrait faire

Un bon planning devrait aider l’équipe à voir le plan, à le tester et à le gérer.

Il doit montrer ce qui doit être fait. Il devrait expliquer l’ordre des travaux. Il convient d’identifier qui doit agir et quand. Il devrait révéler le chemin critique. Il doit prendre en charge la planification des ressources, la mesure des progrès, la prévision des flux de trésorerie et le reporting du PMO.

Il faut également que les points faibles soient visibles. La logique manquante, les contraintes strictes, les dates périmées, les débuts et les fins ouverts et le regroupement d'activités à la date de données ne sont pas seulement des problèmes techniques. Ils affectent la façon dont l’équipe de projet comprend l’état de préparation, les risques et le contrôle.

## Conclusion

Un calendrier est le plan de réalisation du projet exprimé en temps, logique et travail mesurable. C'est une feuille de route, un modèle de calcul et un outil de communication.

Lorsqu’il est bien construit, il indique à l’équipe du projet ce qui doit se produire, quand cela doit se produire et pourquoi les dates sont crédibles. Lorsque les activités démarrent à la date des données sans logique pilotante, cette crédibilité est affaiblie. Le planning arrête d'expliquer le plan et commence à deviner l'étape suivante.

Pour cette raison, les examens de la qualité du planning doivent toujours poser une question simple : le calendrier explique-t-il pourquoi les travaux commencent au moment où ils commencent ? Si la réponse est oui, le planning fait son travail. Si la réponse est non, la feuille de route a besoin de plus de logique avant de pouvoir lui faire confiance.
## Contenu associé
- [Activités commençant à la date des données sans logique pilotante : pourquoi cette mesure de planification est importante - Vue d’ensemble](../../08_metrics_fr/01_activities_starting_in_dd_with_no_logic_driving/01_overview_template.md)
- [Logique robuste](../02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
