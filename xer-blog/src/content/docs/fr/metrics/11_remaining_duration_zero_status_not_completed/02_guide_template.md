---
title: "Activités avec une durée restante de 0 et un statut non terminé - Guide d’amélioration"
seo_title: "Activités avec une durée restante de 0 et un statut non terminé - Guide d’amélioration - Primavera P6"
meta_description: "Apprenez à corriger Activités avec une durée restante de 0 et un statut non terminé dans Primavera P6 avec des contrôles de logique, de validation et de réévaluation."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Activités avec une durée restante de 0 et un statut non terminé"
  - "Primavera P6 Activités avec une durée restante de 0 et un statut non terminé"
  - "qualité du planning"
  - "Primavera P6"
  - "contrôle projet"
  - "logique CPM"
  - "revue de planning"
slug: "fr-improvement-guide-remaining-duration-zero-status-not-completed-primavera-p6"
language: "fr"
content_type: "metric"
version: "1.0"
topic: "Qualité du planning"
audience:
  - "Planificateurs"
  - "Ordonnanceurs"
  - "Équipes de contrôle projet"
primary_search_intent: "Apprenez à corriger Activités avec une durée restante de 0 et un statut non terminé dans Primavera P6 avec des contrôles de logique, de validation et de réévaluation."
related_metrics:
  - "08_metrics_fr/11_remaining_duration_zero_status_not_completed/01_overview_template.md"
  - "08_metrics_fr/11_remaining_duration_zero_status_not_completed/03_blog_template.md"
related_blogs:
  - "08b_blogs_fr/01_WHAT A SCHEDULE IS/01_blog.md"
  - "08b_blogs_fr/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: "01_metrics_en/11_remaining_duration_zero_status_not_completed/02_guide_template.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# Activités avec une durée restante de 0 et un statut non terminé - Guide d’amélioration

## But

Ce guide aide les planificateurs à examiner et à corriger les activités dont la durée restante est égale à 0 mais dont le statut d'activité n'est pas terminé. Il prend en charge les mises à jour propres de Primavera P6 en alignant la durée restante, la fin réelle et l'état de l'activité.

## Avant de commencer

Rassemblez les informations suivantes avant d’agir :

- Résultat de l'évaluation actuelle pour cette métrique.
- Liste des activités avec Durée restante = 0 et Statut de l'activité <> Terminé.
- Statut de l'activité, début réel, fin réelle, durée initiale, durée restante et durée de fin.
- Type de pourcentage achevé et champs de progression clés.
- Date des données et dernières notes de mise à jour.
- Confirmation sur le terrain indiquant si le travail est terminé ou s'il reste encore du travail.

## Comprenez votre résultat

Un bon résultat est une activité nulle avec une durée restante = 0 et un statut non terminé.

Un résultat acceptable peut inclure de rares cas de mise à jour temporaire, mais ceux-ci doivent être résolus avant le rapport formel.

Un résultat faible signifie que le planning contient des activités dont le temps restant et l'état d'avancement ne concordent pas. Cela peut créer des rapports d’avancement trompeurs, une actualisation incomplète et des résultats d’anticipation ou de valeur acquise peu fiables.

## Objectif d'amélioration

L'objectif est de 0 activité non résolue avec une durée restante = 0 et un statut d'activité <> terminé.

L'objectif est de confirmer si chaque activité est terminée et doit être fermée, ou incomplète et doit avoir une durée restante valide restaurée.

## Plan d'action

### Étape 1 : Identifiez le problème principal

Créez une présentation ou un rapport P6 qui filtre les activités pour lesquelles la durée restante est égale à 0 et le statut de l'activité n'est pas terminé. Incluez l'ID d'activité, le nom de l'activité, le WBS, l'état de l'activité, le début réel, la fin réelle, la durée initiale, la durée restante, le type de pourcentage achevé, le pourcentage d'activité achevé, le début, la fin et la marge totale.

Passez en revue chaque activité et demandez :

- Les travaux sont-ils réellement terminés ?
- Si c'est terminé, pourquoi le statut d'activité n'est-il pas terminé ?
- La fin réelle est-elle manquante ?
- Si le travail n’est pas terminé, pourquoi la durée restante est-elle de 0 ?
- Le statut a-t-il été importé ou mis à jour manuellement ?
- L'activité est-elle un jalon, un niveau d'effort ou un autre type d'activité spéciale ?

```mermaid
flowchart TD
    A["Durée restante = 0 et statut <> terminé"] --> B{"Les travaux sont-ils réellement terminés ?"}
    B -- "Oui" --> C["Entrez la fin réelle et marquez l'activité terminée."]
    B -- "Non" --> D["Restaurer la durée restante valide"]
    D --> E["Conserver ou définir le statut en fonction des progrès réels"]
    B -- "Peu clair" --> F["Confirmer le statut avec le propriétaire responsable"]
    C --> G["Recalculer et réévaluer"]
    E --> G
    F --> G
```

### Étape 2 : appliquer les correctifs recommandés

Si le travail est terminé, mettez à jour l'activité comme Terminé. Entrez la fin réelle, confirmez que la durée restante est 0 et confirmez que les valeurs de progression s'alignent sur la procédure de mise à jour du projet.

Si les travaux ne sont pas terminés, restaurez une durée restante appropriée. Confirmez le travail restant avec le propriétaire responsable et conservez le statut de l'activité comme En cours ou Non démarré en fonction de l'avancement réel.

Si le problème provient des données de progression importées, examinez le mappage d'importation et mettez à jour le workflow. Le processus de mise à jour ne doit pas laisser les activités avec un temps restant nul mais un statut incomplet.

### Étape 3 : Supprimer les bloqueurs courants

Les bloqueurs courants incluent les dates de fin réelle manquantes, la confirmation de champ incomplète, les données de mise à jour importées et la confusion entre le statut de durée et le statut d'activité.

Un autre bloqueur ferme la durée restante sans terminer formellement l'activité. La durée restante et le statut d'activité devraient raconter la même histoire quant à savoir si le travail reste.

### Étape 4 : Validez les modifications

Recalculez le planning après corrections. Réexécutez la métrique et confirmez que chaque élément restant est corrigé ou affecté au suivi.

Examinez les listes d'activités terminées, les dates de fin réelles, les rapports d'avancement, les résultats de la valeur acquise et les rapports prospectifs pour confirmer que la correction n'a pas créé de nouvelles incohérences.

## Calendrier d'amélioration

### Jour 1 : Examiner et diagnostiquer

Exécutez la métrique, confirmez la date des données et séparez les résultats en travaux terminés dont le statut n'est pas terminé, travaux incomplets avec une durée restante nulle et problèmes d'importation ou de flux de travail.

### Jours 2-3 : Mettre en œuvre les actions prioritaires

Corrigez d’abord les activités utilisées dans les rapports. Entrez la fin réelle, marquez les activités terminées ou restaurez la durée restante selon vos besoins.

### Jours 4 et 5 : surveiller les premiers résultats

Recalculez le calendrier et examinez les rapports d'activité terminés, les rapports d'avancement et les résultats de la valeur acquise.

### Jour 6 : derniers ajustements

Résolvez les éléments incertains restants avec la discipline responsable, le responsable de terrain ou le responsable des contrôles du projet.

### Jour 7 : Réévaluer et comparer

Réexécutez l’évaluation et comparez le résultat au seuil cible.

## Suivi des progrès

Utilisez un simple tracker pour gérer les corrections et les approbations.

| Date | Mesure prise | Impact attendu | Résultat / Observation | Étape suivante |
| --- | --- | --- | --- | --- |
| [Date] | Révisé RD 0 et statut Activités non terminées | Identifier les incohérences de statut | [Résultat observé] | Attribuer un propriétaire |
| [Date] | Fin réelle saisie et marqué Terminé | Aligner le statut terminé | [Résultat observé] | Recalculer le planning |
| [Date] | Durée restante restaurée | Corriger le statut d'activité inachevée | [Résultat observé] | Réévaluer la métrique |

## Si les résultats ne s'améliorent pas

Si les résultats ne s'améliorent pas, vérifiez si les mises à jour de progression sont importées, copiées ou modifiées manuellement de manière incohérente. Vérifiez si les dates de fin réelle sont manquantes dans le flux de travail de mise à jour ou si les utilisateurs définissent la durée restante sur 0 sans terminer les activités.

Faites remonter les éléments non résolus lorsqu'ils affectent des tâches critiques, quasi-critiques, de valeur acquise, de reporting client, de paiement ou de transfert.

## Entretien

Examinez cette mesure à chaque cycle de mise à jour avant de publier des rapports. Cela doit faire partie de la validation standard des mises à jour, aux côtés des dates réelles, de la durée restante, du pourcentage achevé et des contrôles de l'état des activités.

## Liste de contrôle récapitulative

- [ ] Résultat actuel examiné
- [ ] Seuil cible confirmé
- [ ] Date des données confirmée
- [ ] Principal problème identifié
- [ ] Activités terminées marquées correctement
- [ ] Dates de fin réelles saisies si nécessaire
- [ ] Durée restante restaurée là où les travaux sont incomplets
- [ ] Workflow d'importation ou de mise à jour coché
- [ ] Horaire recalculé
- [ ] Résultats surveillés
- [ ] Évaluation répétée
- [ ] Prochaines étapes documentées
## Contenu associé
- [Activités avec une durée restante de 0 et un statut non terminé - Vue d’ensemble](01_overview_template.md)
- [Modèle de blog](03_blog_template.md)
- [Qu'est-ce qu'un horaire](../../08b_blogs_fr/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Logique robuste](../../08b_blogs_fr/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
