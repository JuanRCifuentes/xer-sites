---
title: 지표 요약
description: 일정 품질 지표 개요 및 관련 페이지 안내.
template: splash
hero:
  tagline: 일정 품질 지표는 Primavera P6 CPM 일정이 얼마나 신뢰할 수 있고 잘 구성되었는지를 측정합니다. 각 지표는 하나의 특정 약점을 목표로 하며, 무엇을 측정하는지, 왜 중요한지, 나쁜 결과를 어떻게 개선하는지에 대한 문서와 함께 제공됩니다.
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="데이터 기준일 라인이 강조된 양식화된 간트 차트">
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
    - text: 첫 번째 지표 살펴보기
      link: /ko/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: 블로그 읽기
      link: /ko/blog/
      variant: minimal
sidebar:
  order: 0
---

## 데이터 기준일에 구동 로직 없이 시작되는 활동

이 지표는 유효한 선행 로직의 구동 없이 데이터 기준일에 시작하도록 예정된 미착수 또는 미시작 활동을 식별합니다. 로직 없이 데이터 기준일 경계에 집중되는 활동은 여유 시간을 왜곡하고, 최장 경로를 불명확하게 하며, 예측을 신뢰할 수 없게 만듭니다. 목표 임계값은 활동 수 0입니다.

- [개요](/ko/metrics/data-date-no-driving-logic-overview/) — 지표가 측정하는 것, 임계값, 그리고 일정 신뢰성에 중요한 이유.
- [개선 가이드](/ko/metrics/data-date-no-driving-logic-improvement-guide/) — 일정 담당자와 프로젝트 컨트롤 팀이 품질 검토 및 업데이트 주기 중에 표시된 활동을 해결하는 방법.

이 지표가 왜 중요한지에 대한 내러티브 버전은 관련 블로그 포스트를 읽으십시오: [데이터 기준일에 구동 로직 없이 시작되는 활동](/ko/blog/activities-starting-on-data-date-no-driving-logic/).
