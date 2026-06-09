---
title: 'Activités démarrant à la Date de Référence sans logique pilote'
description: "Pourquoi les activités démarrant à la Date de Référence sans logique pilote affaiblissent un planning Primavera P6, ce qui les provoque et comment corriger la métrique étape par étape."
pubDate: 'Jun 8 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-1.jpg
---

## Durée estimée de lecture

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public cible

Cet article s'adresse aux ingénieurs planificateurs, aux ingénieurs de contrôle de projet, aux planificateurs, aux chefs de projet et aux réviseurs PMO qui utilisent Primavera P6 pour évaluer la qualité des plannings. Il est particulièrement utile pour les équipes qui révisent les mises à jour de planning et ont besoin de confirmer si les activités à court terme sont correctement pilotées par la logique CPM.

## Accroche

L'une des surprises les plus fréquentes lors d'une révision de planning est de voir un groupe d'activités démarrer toutes à la Date de Référence. À première vue, il peut sembler que l'équipe projet est prête à commencer plusieurs travaux immédiatement. Mais lorsque ces activités n'ont pas de logique qui les pilote, le planning peut raconter une histoire plus faible : les activités démarrent parce que la frontière de mise à jour a bougé, et non parce que le travail est genuinement prêt.

## Introduction

La Date de Référence (Data Date) dans Primavera P6 est la ligne de partage entre le passé et la prévision. Tout ce qui est antérieur doit représenter l'avancement réel ou les travaux achevés. Tout ce qui est postérieur doit représenter le plan à partir de maintenant.

Parce que la Date de Référence est si importante, les activités qui démarrent exactement à ce point méritent attention. Certaines peuvent être valides, comme une activité autorisée après un avis formel, une levée d'accès ou un lancement de projet. Mais lorsqu'une activité ouverte ou non démarrée commence à la Date de Référence sans logique prédécesseur pilote, le réviseur du planning doit marquer une pause.

Cette métrique recherche les activités dont le démarrage prévu est à la Date de Référence sans logique valide pilotant ce démarrage. La cible est zéro activité non résolue. Documenter et approuver les éventuelles exceptions.

## Ce que mesure ce paramètre

Une activité démarrant à la Date de Référence sans logique pilote est une activité dont la date de démarrage prévisionnelle se situe à la frontière de la mise à jour actuelle sans un chemin prédécesseur clair expliquant pourquoi elle peut commencer.

Dans la planification CPM, les activités doivent normalement être connectées par des relations. Une activité se termine, une autre démarre. Une zone devient disponible, puis une équipe se mobilise. Un dossier de conception est approuvé, puis l'approvisionnement peut procéder. Ces relations permettent au planning de calculer des dates, des marges et un comportement de chemin critique significatifs.

Lorsque la logique est manquante, Primavera P6 peut tout de même placer l'activité quelque part dans le planning. Si l'activité est ouverte et non correctement pilotée par des prédécesseurs, elle peut apparaître à la Date de Référence ou à proximité après le calcul du planning. Cela ne signifie pas nécessairement que l'activité est prête. Cela peut seulement signifier que le planning n'a pas de meilleure logique pour lui indiquer quand l'activité doit démarrer.

Un nombre élevé pour cette métrique suggère que le planning comporte des démarrages ouverts, une logique prédécesseur faible, des contraintes artificielles ou des problèmes de mise à jour. Un nombre faible, idéalement zéro, suggère que les travaux à court terme sont mieux connectés au réseau du planning.

## Pourquoi ce sujet est important

Cette métrique est importante parce que la Date de Référence est là où le reporting projet devient le plus sensible. Le planning mis à jour répond à des questions pratiques :

- Quels travaux doivent démarrer ensuite ?
- Quelles activités sont prêtes ?
- Qu'est-ce qui pilote le chemin critique ou le chemin le plus long ?
- Quels sont les risques à court terme ?
- Les dates prévisionnelles sont-elles fiables ?

Si des activités démarrent à la Date de Référence sans logique pilote, les réponses peuvent être trompeuses. Le planning peut afficher des travaux comme disponibles alors que les travaux prédécesseurs, les approbations, les matériaux, les accès ou les interfaces ne sont pas réellement achevés.

Cela peut déformer les valeurs de marge, affaiblir le chemin critique et rendre la planification à court terme moins fiable.

Pour la gouvernance PMO, c'est aussi un signal de qualité. Les évaluations de style DCMA et les contrôles de santé courants des plannings soulignent la logique complète, le séquencement valide et les dates défendables.

## Causes fréquentes d'un mauvais résultat

Les raisons les plus fréquentes pour lesquelles cette métrique est mal notée sont pratiques et généralement corrigeables.

- Relations prédécesseur manquantes
- Prédécesseurs qui existent mais ne pilotent pas réellement l'activité
- Contraintes de démarrage ou dates attendues utilisées à la place d'une vraie logique
- Mises à jour d'avancement incomplètes ou démarrages réels manquants
- Activités à démarrage ouvert laissées depuis le développement initial du planning
- Avancement hors séquence ou paramètres de mise à jour non révisés
- Activités d'interface externe non documentées comme exceptions

Le point clé est qu'il ne s'agit pas seulement d'un problème de format. Le problème est que le planning peut ne pas expliquer pourquoi la date est valide.

## Comment améliorer le résultat

### 1. Construire une présentation P6 qui montre clairement le problème

Commencez par créer une présentation ou un rapport dans Primavera P6 qui filtre les activités ouvertes ou non démarrées dont la date de démarrage est égale à la Date de Référence. Ajoutez des colonnes qui aident le réviseur à comprendre la cause : ID d'activité, nom d'activité, WBS, début, fin, statut, marge totale, calendrier, contrainte principale, prédécesseurs et successeurs.

### 2. Corriger la logique manquante ou faible

Pour chaque activité, demandez ce qui doit se passer avant que ce travail puisse commencer. La réponse peut être un prédécesseur physique, un livrable d'ingénierie, un événement d'approvisionnement, un permis, une remise ou une condition d'accès.

Ajoutez une logique qui représente une vraie dépendance, et non pas simplement une relation ajoutée pour satisfaire la métrique. Une relation Fin-Début peut être correcte dans de nombreux cas, mais les relations Début-Début ou Fin-Fin peuvent être plus réalistes pour les travaux qui se chevauchent. Utilisez le type de relation qui reflète comment les travaux seront réellement gérés.

Après avoir ajouté la logique, recalculez le planning et vérifiez si le démarrage est maintenant genuinement piloté par l'achèvement des prédécesseurs.

### 3. Réviser les contraintes, le statut et les exceptions

Certaines activités démarrent à la Date de Référence en raison de contraintes. Les contraintes ne sont pas automatiquement incorrectes, mais elles doivent être utilisées avec précaution. Si une contrainte de démarrage remplace la logique normale, elle peut cacher la vraie séquence et déformer la marge.

Révisez également le statut. Si une activité a effectivement commencé, entrez le démarrage réel et la durée restante correctement. Si elle n'a pas commencé, ne la laissez pas apparaître comme prête à moins que la logique ne soutienne cette prévision.

Enfin, documentez les exceptions. Un jalon de démarrage de projet ou une activité autorisée extérieurement peut ne pas nécessiter un prédécesseur normal. Mais si elle reste dans le résultat de la métrique, la raison doit être claire pour le planificateur, le responsable du contrôle de projet et le réviseur PMO.

## Exemple de scénario

Imaginez un planning de construction avec une Date de Référence au 1er juin. Après la mise à jour mensuelle, le planificateur trouve 18 activités non démarrées avec des dates de démarrage au 1er juin et sans logique prédécesseur pilote.

Au début, l'équipe suppose que ce sont des activités prêtes à démarrer. Mais la révision montre le contraire. Plusieurs activités d'installation sont dépourvues de liens prédécesseur vers la livraison des matériaux. Quelques activités d'essai ne sont pas liées à l'achèvement de l'installation. Deux activités ont d'anciennes contraintes de démarrage. Une activité est un jalon d'interface légitime qui doit être documenté comme exception.

Le planificateur ajoute les relations manquantes, supprime les contraintes inutiles, met à jour la note d'exception et recalcule le planning. Le résultat passe de 18 activités à une exception documentée. Le programme à court terme donne désormais à l'équipe projet une vision bien plus claire de ce qui est réellement prêt à démarrer.

## Programme d'amélioration recommandé

Utilisez un cycle d'amélioration simple d'une semaine :

- Jour 1 : Réviser le résultat actuel et confirmer la Date de Référence.
- Jours 2-3 : Corriger la logique prédécesseur manquante et supprimer les contraintes injustifiées.
- Jours 4-5 : Recalculer le planning et réviser la marge, le chemin le plus long et l'impact sur les jalons.
- Jour 6 : Résoudre les problèmes restants avec les responsables de discipline ou de lot.
- Jour 7 : Réévaluer la métrique et documenter les exceptions approuvées.

## Erreurs à éviter

Évitez d'ajouter des relations prédécesseur aléatoires simplement pour réduire le nombre de la métrique. La logique doit représenter la vraie séquence de travaux.

Évitez d'utiliser des contraintes comme raccourci lorsqu'une relation expliquerait mieux le planning. Les contraintes peuvent être valides, mais elles ne doivent pas devenir un substitut à la logique CPM.

Évitez d'ignorer des activités parce qu'elles ne sont pas sur le chemin critique. Les travaux non critiques à court terme affectent tout de même la coordination, la planification à court terme et la disponibilité des ressources.

Évitez de traiter les exceptions avec désinvolture. Si une activité est intentionnellement autorisée à démarrer à la Date de Référence sans logique pilote, documentez la raison.

## Points clés à retenir

- Les activités démarrant à la Date de Référence sans logique pilote peuvent signaler un séquencement manquant ou une discipline de mise à jour faible.
- Le résultat cible est zéro activité non résolue.
- Des exceptions valides peuvent exister, mais elles doivent être documentées et approuvées.
- La meilleure correction est une vraie logique CPM, et non pas des relations artificielles ou des contraintes inutiles.
- Recalculer et réviser la marge, le chemin le plus long et les activités à court terme après avoir effectué des modifications.

## Conclusion

Les activités qui démarrent à la Date de Référence sans logique pilote méritent un examen attentif parce qu'elles se trouvent au point où la performance réelle se termine et la prévision commence.

Lorsque cette métrique est maîtrisée, le planning devient plus facile à faire confiance. Les travaux à court terme sont mieux connectés, le chemin critique est plus clair et le reporting est plus solide.

L'amélioration du résultat requiert une révision disciplinée du planning : identifier les activités, comprendre pourquoi elles démarrent, ajouter une logique valide, supprimer les contraintes inutiles, corriger le statut et documenter les exceptions.

## Appel à l'action

Révisez votre dernière mise à jour de planning Primavera P6 et filtrez les activités ouvertes ou non démarrées démarrant à la Date de Référence. Pour chacune, posez une question simple : qu'est-ce qui pilote ce démarrage ? Si la réponse n'est pas claire, corrigez la logique ou documentez l'exception avant que le planning ne soit émis.

## Métriques associées

- [Activités démarrant à la Date de Référence sans logique pilote — Vue d'ensemble](/fr/metrics/data-date-no-driving-logic-overview/)
