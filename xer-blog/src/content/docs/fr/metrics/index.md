---
title: Résumé des métriques
description: Vue d'ensemble des métriques de qualité du planning et de leurs liens entre elles.
template: splash
hero:
  tagline: Les métriques de qualité du planning mesurent la crédibilité et la solidité de construction d'un planning CPM sous Primavera P6. Chaque métrique cible une faiblesse spécifique et est accompagnée d'une documentation sur ce qu'elle mesure, pourquoi elle est importante et comment améliorer un mauvais résultat.
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme de Gantt stylisé avec une ligne de Date de Référence mise en évidence">
        <rect x="20" y="20" width="120" height="22" rx="4" fill="var(--sl-color-accent)" opacity="0.9"/>
        <rect x="70" y="56" width="150" height="22" rx="4" fill="var(--sl-color-accent)" opacity="0.65"/>
        <rect x="130" y="92" width="110" height="22" rx="4" fill="var(--sl-color-accent)" opacity="0.45"/>
        <rect x="180" y="128" width="120" height="22" rx="4" fill="var(--sl-color-accent)" opacity="0.3"/>
        <rect x="156" y="164" width="60" height="22" rx="4" fill="var(--sl-color-orange)"/>
        <line x1="156" y1="8" x2="156" y2="194" stroke="var(--sl-color-orange)" stroke-width="2" stroke-dasharray="6 4"/>
        <path d="M140 31 L70 67" stroke="var(--sl-color-gray-3)" stroke-width="1.5"/>
        <path d="M220 67 L130 103" stroke="var(--sl-color-gray-3)" stroke-width="1.5"/>
        <path d="M240 103 L180 139" stroke="var(--sl-color-gray-3)" stroke-width="1.5"/>
      </svg>
  actions:
    - text: Explorer la première métrique
      link: /fr/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: Lire le blog
      link: /fr/blog/
      variant: minimal
sidebar:
  order: 0
---

## Activités démarrant à la Date de Référence sans logique pilote

Cette métrique identifie les activités ouvertes ou non démarrées dont le démarrage prévu se situe à la Date de Référence sans logique prédécesseur valide pilotant ce démarrage. Les activités qui s'accumulent à la frontière de la Date de Référence sans logique déforment la marge, obscurcissent le chemin le plus long et rendent la prévision peu fiable. Le seuil cible est de 0 activité.

- [Vue d'ensemble](/fr/metrics/data-date-no-driving-logic-overview/) — ce que la métrique mesure, son seuil et pourquoi elle est importante pour la crédibilité du planning.
- [Guide d'amélioration](/fr/metrics/data-date-no-driving-logic-improvement-guide/) — comment les planificateurs et les équipes de contrôle de projet résolvent les activités signalées lors des révisions qualité et des cycles de mise à jour.

Pour la version narrative expliquant pourquoi cette métrique est importante, lisez l'article de blog associé : [Activités démarrant à la Date de Référence sans logique pilote](/fr/blog/activities-starting-on-data-date-no-driving-logic/).
