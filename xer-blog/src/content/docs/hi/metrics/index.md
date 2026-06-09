---
title: Metrics Summary
description: Schedule quality metrics का overview और उनके pages कैसे संबंधित हैं।
template: splash
hero:
  tagline: Schedule quality metrics यह मापती हैं कि Primavera P6 CPM schedule कितनी credible और अच्छी तरह बनी है। हर metric एक specific weakness को target करती है और इसके साथ documentation होती है कि यह क्या measure करती है, यह क्यों matter करती है, और poor result को कैसे improve किया जाए।
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Highlighted data date line वाला stylized Gantt chart">
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
    - text: पहली metric देखें
      link: /hi/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: ब्लॉग पढ़ें
      link: /hi/blog/
      variant: minimal
sidebar:
  order: 0
---

## Data Date पर बिना Driving Logic के शुरू होने वाली Activities

यह metric उन open या not-started activities को identify करती है जो Data Date पर शुरू होने के लिए scheduled हैं बिना valid predecessor logic के जो उस start को drive करे। Activities जो बिना logic के Data Date boundary पर collect होती हैं, float को distort करती हैं, longest path को obscure करती हैं, और forecast को unreliable बनाती हैं। Target threshold है 0 activities।

- [Overview](/hi/metrics/data-date-no-driving-logic-overview/) — metric क्या measure करती है, उसकी threshold, और schedule credibility के लिए यह क्यों matter करती है।
- [Improvement Guide](/hi/metrics/data-date-no-driving-logic-improvement-guide/) — schedulers और project controls teams quality reviews और update cycles के दौरान flagged activities को कैसे resolve करती हैं।

इस metric के matter करने के narrative version के लिए, related blog post पढ़ें: [Data Date पर बिना Driving Logic के शुरू होने वाली Activities](/hi/blog/activities-starting-on-data-date-no-driving-logic/)।
