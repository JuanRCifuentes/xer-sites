---
title: "Logique redondante dans les planifications Primavera P6"
seoTitle: "Logique redondante dans les planifications Primavera P6"
description: "Explique pourquoi Logique redondante dans les planifications Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Logique redondante dans les planifications Primavera P6"
  - "Primavera P6 Logique redondante dans les planifications Primavera P6"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr/blog/redundant-logic-primavera-p6"
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
primarySearchIntent: "Explique pourquoi Logique redondante dans les planifications Primavera P6 influence la logique CPM, la marge et la fiabilité du planning dans Primavera P6."
relatedMetrics:
  - "08_metrics_fr/06_redundant_logic/02_guide_template.md"
relatedBlogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/06_redundant_logic/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

## Titre

Logique redondante dans les planifications Primavera P6

## Temps de lecture / de parole estimé

5 à 10 minutes

## Longueur cible

750 à 1 500 mots

## Public

Ce blog est destiné aux planificateurs, ingénieurs de planification, ingénieurs de contrôle de projet, chefs de projet et réviseurs PMO qui évaluent la logique de planification de Primavera P6.

## Crochet d'ouverture

Plus de logique ne signifie pas toujours une meilleure logique. Une planification peut sembler bien connectée tout en comportant des relations en double, des chemins de prédécesseurs répétés et des dépendances qui n'ajoutent pas de réel contrôle.

## Introduction

La logique est l’épine dorsale d’un planning CPM. Il montre comment le travail se déroule d'une activité à la suivante et permet à Primavera P6 de calculer les dates, la marge et le chemin critique ou le plus long.

Une logique redondante apparaît lorsqu'une relation répète une dépendance déjà représentée ailleurs dans le réseau. Il peut s'agir d'un double exact, d'une seconde relation entre les deux mêmes activités ou d'un lien direct qui répète un chemin amont.

Cette métrique identifie les modèles logiques redondants qui doivent être examinés et supprimés à moins qu'ils ne soient clairement justifiés. L’objectif est zéro relation non résolue.

## Ce que signifie ce paramètre

Ce paramètre vérifie si la planification contient des relations qui n'ajoutent pas de séquencement significatif. Les exemples courants incluent le même prédécesseur connecté au même successeur plus d'une fois, comme FS plus SS ou FS plus FF.

La métrique recherche également la logique héritée du prédécesseur. Par exemple, si l’activité A pilote l’activité B et que l’activité B pilote l’activité C, une relation directe entre l’activité A et l’activité C peut s’avérer inutile, à moins qu’elle ne représente une dépendance réelle distincte.

SS plus FF entre les deux mêmes activités peuvent être acceptables lorsque le chevauchement est intentionnel. La relation SS peut contrôler le moment où le successeur commence, tandis que la relation FF contrôle le moment où il peut se terminer. La clé est de savoir si les deux relations représentent des conditions réelles.

## Pourquoi ce sujet est important

La logique redondante rend un planning plus difficile à comprendre. Cela ajoute du bruit au réseau et peut rendre difficile la détermination de la relation qui contrôle réellement les dates.

Cela peut également déformer la marge, créer de fausses trajectoires et rendre l’analyse des retards plus difficile. Lors des examens de qualité du PMO ou du planning, la logique redondante soulève des questions quant à savoir si le réseau a été construit intentionnellement ou assemblé via des liens copiés et accumulés.

## Causes courantes de mauvais résultats

- Sections de planification copiées qui n'ont pas été nettoyées
- Plusieurs types de relations ajoutés entre les deux mêmes activités
- FS plus SS ou FS plus FF utilisé pour forcer les dates
- Liens directs ajoutés même si la dépendance existe déjà via une chaîne
- Relations ajoutées lors des mises à jour sans vérifier la logique existante
- Dépendances inutiles utilisées pour rendre le planning plus connecté

## Comment améliorer le résultat

### 1. Rechercher des modèles de relations en double

Commencez par identifier les activités liées par plus d’une relation. Portez une attention particulière aux combinaisons FS plus SS et FS plus FF. Dans de nombreux cas, une relation fait le vrai travail et l’autre est redondante.

Review SS plus FF combinations more carefully. Ils peuvent être valables lorsque des contrôles de début et de fin sont nécessaires pour des travaux qui se chevauchent.

### 2. Vérifiez la logique du prédécesseur hérité

Recherchez les activités qui ont le même prédécesseur et le même type de relation que leur propre prédécesseur. Si la même dépendance existe déjà via le chemin, la relation directe n’est peut-être pas nécessaire.

Cet examen peut également être étendu plusieurs étapes en arrière à travers le réseau. La question est simple : cette relation directe ajoute-t-elle une réelle dépendance, ou répète-t-elle un chemin déjà existant ?

### 3. Supprimez les dépendances inutiles

Supprimez les relations qui ne représentent pas l'accès, l'approbation, le transfert, la séquence de construction, la séquence d'approvisionnement, le contrôle des risques ou la logique contractuelle.

Après avoir supprimé une relation, recalculez la planification et examinez la marge, la logique de pilotage, le chemin le plus long et les dates des jalons. Si une date change de manière inattendue, vérifiez si la relation supprimée était réellement valide ou si une relation plus claire est nécessaire.

## Exemple de scénario

Un planning a l'activité A liée à l'activité B avec une relation FS et également une relation SS. Le planificateur a ajouté le lien SS lors d'une mise à jour pour forcer B à démarrer plus tôt, mais le lien FS contrôle toujours le véritable transfert.

L'examen montre que la relation SS ne représente pas une véritable condition de départ. Cela ne fait qu'ajouter à la confusion. Le planificateur supprime le lien SS et conserve la relation FS.

Dans un autre domaine, l'activité A pilote l'activité B et l'activité B pilote l'activité C. L'activité A est également directement liée à l'activité C avec le même type de relation. L’équipe confirme qu’il n’y a pas de transfert séparé ni de condition d’accès. La liaison directe A vers C est supprimée et le réseau reste logiquement correct.

## Calendrier d’amélioration recommandé

- Jour 1 : exécutez les résultats des métriques et des groupes par paires en double, logique héritée et dépendances inutiles.
- Jours 2 et 3 : Examinez d’abord les relations critiques et quasi critiques.
- Jours 4-5 : supprimez la logique en double et recalculez le calendrier.
- Jour 6 : Confirmez les exceptions et examinez les mouvements du planning.
- Jour 7 : Réévaluez la métrique et documentez le résultat.

## Erreurs à éviter

Évitez de supprimer les relations uniquement parce qu’elles semblent dupliquées. Confirmez d'abord la séquence de travail réelle.

Évitez de conserver des liens en double car ils semblent inoffensifs. Une logique redondante peut toujours fausser l'analyse de la marge et du chemin de conduite.

Évitez de traiter SS plus FF comme automatiquement faux. Il peut être valable lorsque des contrôles de départ et d'arrivée sont nécessaires.

## Points clés à retenir

- La logique redondante répète une dépendance déjà représentée ailleurs.
- FS plus SS ou FS plus FF entre les mêmes activités doivent généralement être révisés.
- SS plus FF peuvent être valides lorsque les contrôles de début et de fin de chevauchement sont réels.
- La logique héritée du prédécesseur peut créer des liens directs inutiles.
- L’objectif est zéro relation redondante non résolue.

## Conclusion

La logique redondante n’améliore pas la qualité du planning. Cela rend le réseau plus difficile à lire, plus difficile à mettre à jour et plus difficile à défendre.

L'examen de cette métrique aide les planificateurs à maintenir le réseau CPM propre et intentionnel. La meilleure logique de planification n’est pas le réseau le plus compliqué ; c'est le réseau le plus clair qui représente fidèlement l'œuvre.

## Appel à l'action

Passez en revue la logique redondante dans votre prochaine mise à jour du calendrier Primavera P6. Pour chaque relation signalée, demandez si elle ajoute une dépendance réelle ou ne fait que répéter une logique déjà présente dans le réseau. Supprimez ce qui est inutile et documentez ce qui est intentionnellement conservé.
## Contenu associé
- [Logique redondante dans les planifications Primavera P6 - Guide d’amélioration](02_guide_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
