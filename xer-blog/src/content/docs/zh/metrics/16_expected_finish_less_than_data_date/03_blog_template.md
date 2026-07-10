---
title: "Primavera P6 预计在数据日期之前完成"
seoTitle: "Primavera P6 预计在数据日期之前完成"
description: "说明“Primavera P6 预计在数据日期之前完成”为什么会影响 Primavera P6 的 CPM 逻辑、浮时和进度可信度。"
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Primavera P6 预计在数据日期之前完成"
  - "Primavera P6 预计在数据日期之前完成"
  - "进度质量"
  - "Primavera P6"
  - "项目控制"
  - "CPM逻辑"
  - "进度审查"
slug: "zh/blog/expected-finish-less-than-data-date-primavera-p6"
language: "zh"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "进度质量"
audience:
  - "计划工程师"
  - "进度计划软件人员"
  - "项目控制团队"
primarySearchIntent: "说明“Primavera P6 预计在数据日期之前完成”为什么会影响 Primavera P6 的 CPM 逻辑、浮时和进度可信度。"
relatedMetrics:
  - "03_metrics_zh/16_expected_finish_less_than_data_date/02_guide_template.md"
relatedBlogs:
  - "03b_blogs_zh/01_WHAT A SCHEDULE IS/01_blog.md"
  - "03b_blogs_zh/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: "01_metrics_en/16_expected_finish_less_than_data_date/03_blog_template.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

数据日期是已发生的情况和仍预测的情况之间的界线。在干净的进度更新中，数据日期之前的状态信息应作为实际进度来解决，而剩余工作应从数据日期开始进行预测。当活动的预期完成时间早于数据日期时，该边界就会变得模糊。

该指标标识预期完成时间早于当前数据日期的活动。这是一项简单的检查，但它可以揭示陈旧的状态输入、缺少实际完成、过时的现场预测或更新未正确维护预期日期的工作流程。

在 Primavera P6 中，预期完成时间通常用作预测或更新字段，具体取决于组织的流程和计划设置。一些团队使用它来捕获对正在进行的活动的现场期望。其他人从电子表格或进度系统导入它。由于该字段可能会影响某些工作流程中的计划行为，因此不应允许它在未经审查的情况下搁置过去。

考虑一项名为“安装主电缆桥架”的活动。项目数据日期为 3 月 31 日，但活动预计完成时间为 3 月 24 日。如果活动确实于 3 月 24 日完成，则计划通常应具有“实际完成”和“已完成”状态。如果活动未完成，则预期完成时间已过时，应根据最新的现场信息进行更新。不管怎样，当前的价值需要关注。

当团队将数据日期提前但未完全更新所有预测字段时，通常会出现此问题。完成百分比可能会更新。剩余持续时间可以调整。可以输入一些实际日期。但之前更新的预期完成值保持不变。结果是一个看起来部分更新的进度计划，但仍然包含过去的预期完成日期。

第一个问题是数据日期是否正确。如果数据日期设置不正确，指标可能会标记错误的边界。确认数据日期后，应根据其真实状态审查每项活动。活动是否在数据日期之前完成？实际完成日期是否缺失？活动还活跃吗？剩余工期还代表剩余的工作吗？

对于已完成的工作，修复通常是输入或更正实际完成时间，然后确认活动状态、完成百分比和剩余持续时间一致。对于仍处于活动状态的工作，预期完成时间应更新为数据日期当天或之后的有效日期。还应检查剩余持续时间，以便计划计算反映当前预测。

对于未开始的工作，数据日期之前的预期完成通常表示旧值或导入值。进度计划人员应根据项目更新程序确认该活动是否仍属于计划，其预测日期是否需要重新计算，以及是否应删除或替换预期日期。

P6 中的实际审核应包括活动 ID、活动名称、WBS、活动状态、预期完成、实际开始、实际完成、剩余持续时间、完成百分比、开始、完成、总浮时和日历。团队应优先考虑关键和近乎关键的活动、移交工作、面向客户的里程碑以及近期展望中的活动。

该指标还有助于揭示流程问题。如果每次更新都出现相同的问题，则来源可能是导入文件、电子表格模板或现场报告工作流程。在计算和发布计划之前，团队应检查是否从另一个系统加载预期完成时间以及是否存在验证规则。

目标阈值应为零未解决的活动。这并不意味着每个被标记的活动都是一个主要问题。这意味着每项活动都应该被纠正或解释。数据日期之前的预期完成不应仅仅因为没有人查看而保留在进度计划中。

清理这个指标可以提高计划的可信度。它帮助团队保持清晰的更新边界，区分实际绩效和预测工作，并避免误导性的前瞻或浮时结果。在PMO审查中，还表明进度更新不仅是计算出来的，而且实际上检查了状态一致性。
## 相关内容
- [Primavera P6 预计在数据日期之前完成 - 改进指南](02_guide_template.md)
- [什么是进度计划](../../03b_blogs_zh/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [强大的逻辑](../../03b_blogs_zh/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
