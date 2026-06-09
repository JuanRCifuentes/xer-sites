---
title: メトリクス概要
description: スケジュール品質メトリクスとそのページの関係についての概要。
template: splash
hero:
  tagline: スケジュール品質メトリクスは、Primavera P6 CPMスケジュールがどれほど信頼性があり、適切に構築されているかを測定します。各メトリクスはひとつの特定の弱点を対象とし、測定内容、重要性、および低い結果を改善する方法についての文書とともに提供されます。
  image:
    html: |
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="データ日付ラインが強調表示された様式化されたガントチャート">
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
    - text: 最初のメトリクスを探索する
      link: /ja/metrics/data-date-no-driving-logic-overview/
      icon: right-arrow
      variant: primary
    - text: ブログを読む
      link: /ja/blog/
      variant: minimal
sidebar:
  order: 0
---

## データ日付にドライビングロジックなしで開始する作業

このメトリクスは、有効な先行ロジックなしにデータ日付に開始するようにスケジュールされたオープンまたは未開始の作業を識別します。ロジックなしにデータ日付境界に集まる作業は、フロートを歪め、最長パスを不明瞭にし、予測を信頼性の低いものにします。目標閾値は0作業です。

- [概要](/ja/metrics/data-date-no-driving-logic-overview/) — メトリクスが測定するもの、その閾値、およびスケジュールの信頼性にとってなぜ重要かについて。
- [改善ガイド](/ja/metrics/data-date-no-driving-logic-improvement-guide/) — スケジューラーおよびプロジェクト管理チームが品質レビューと更新サイクル中にフラグ立てられた作業を解決する方法。

このメトリクスが重要な理由の説明版については、関連ブログ記事をお読みください：[データ日付にドライビングロジックなしで開始する作業](/ja/blog/activities-starting-on-data-date-no-driving-logic/)。
