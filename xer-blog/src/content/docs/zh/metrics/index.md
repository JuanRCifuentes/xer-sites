---
title: 度量指标汇总
description: 进度质量度量指标概览及各指标页面之间的关联关系。
template: splash
hero:
  tagline: 进度质量度量指标衡量 Primavera P6 CPM 进度计划的可信度和构建质量。每个指标针对一个特定的薄弱点，并附有相关文档，说明其测量内容、重要性，以及如何改善不良结果。
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="风格化的甘特图，带有高亮的数据日期线">
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
    - text: 探索第一个度量指标
      link: /zh/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: 阅读博客
      link: /zh/blog/
      variant: minimal
sidebar:
  order: 0
---

## 在数据日期启动且无驱动逻辑的活动

该度量指标识别计划在数据日期启动、却没有有效前置逻辑驱动该启动的开放或未启动活动。活动在没有逻辑的情况下聚集于数据日期边界，会扭曲浮时、掩盖最长路径，并使预测变得不可靠。目标阈值为 0 项活动。

- [概述](/zh/metrics/data-date-no-driving-logic-overview/)——该度量指标测量的内容、阈值，以及其对进度可信度的重要性。
- [改善指南](/zh/metrics/data-date-no-driving-logic-improvement-guide/)——进度计划师和项目控制团队在质量审查和更新周期中如何解决被标记的活动。

有关该度量指标重要性的叙述性说明，请阅读相关博客文章：[在数据日期启动且无驱动逻辑的活动](/zh/blog/activities-starting-on-data-date-no-driving-logic/)。
