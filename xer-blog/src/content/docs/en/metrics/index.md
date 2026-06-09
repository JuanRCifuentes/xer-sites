---
title: Metrics Summary
description: Overview of the schedule quality metrics and how their pages relate.
template: splash
hero:
  tagline: Schedule quality metrics measure how credible and well-built a Primavera P6 CPM schedule is. Each metric targets one specific weakness and comes with documentation on what it measures, why it matters, and how to improve a poor result.
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stylized Gantt chart with a highlighted data date line">
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
    - text: Explore the first metric
      link: /en/metrics/first-post/
      icon: right-arrow
      variant: primary
    - text: Read the blog
      link: /en/blog/
      variant: minimal
sidebar:
  order: 0
---

## Activities Starting on the Data Date with No Driving Logic

This metric identifies open or not-started activities scheduled to start on the Data Date without valid predecessor logic driving that start. Activities collecting at the Data Date boundary without logic distort float, obscure the longest path, and make the forecast unreliable. The target threshold is 0 activities.

- [Overview](/en/metrics/first-post/) — what the metric measures, its threshold, and why it matters for schedule credibility.
- [Improvement Guide](/en/metrics/second-post/) — how schedulers and project controls teams resolve flagged activities during quality reviews and update cycles.

For the narrative version of why this metric matters, read the related blog post: [Activities Starting on the Data Date with No Driving Logic: Why This Schedule Metric Matters](/en/blog/fourth-post/).
