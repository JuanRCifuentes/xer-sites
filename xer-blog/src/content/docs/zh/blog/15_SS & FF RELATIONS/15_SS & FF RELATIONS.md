---
title: "SS 与 FF 关系"
seoTitle: "SS 与 FF 关系 - Primavera P6"
description: "了解 Primavera P6 中的“SS 与 FF 关系”，重点关注进度计划、项目控制和进度质量。"
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "SS 与 FF 关系"
  - "Primavera P6 SS 与 FF 关系"
  - "进度质量"
  - "Primavera P6"
  - "项目控制"
  - "CPM逻辑"
  - "进度审查"
slug: "zh/blog/ss-and-ff-relations-in-primavera-p6"
language: "zh"
contentType: "blog"
draft: false
version: "1.0"
topic: "Primavera P6 进度计划"
audience:
  - "计划工程师"
  - "进度计划软件人员"
  - "项目控制团队"
primarySearchIntent: "了解 Primavera P6 中的“SS 与 FF 关系”，重点关注进度计划、项目控制和进度质量。"
relatedMetrics:
  - "03_metrics_zh/01_activities_starting_in_dd_with_no_logic_driving/02_guide_template.md"
relatedBlogs:
  - "03b_blogs_zh/14_RESOURCES BALANCING IN P6/14_RESOURCES BALANCING IN P6.md"
  - "03b_blogs_zh/16_CPM (CRITICAL PATH METHOD)/16_CPM (CRITICAL PATH METHOD).md"
translationOf: "01b_blogs_en/15_SS & FF RELATIONS/15_SS & FF RELATIONS.md"
canonicalUrl: ""
lastReviewed: "2026-07-02"
pubDate: "2026-07-02"
---

开始到开始（SS）和 完成到完成（FF）是 Primavera P6 中有效的逻辑关系类型。当两项活动需要重叠执行时，它们可以比简单的 完成到开始 关系更准确地表达计划逻辑。

问题不在于 SS 或 FF 本身。问题在于只单独使用它们，却没有控制活动的另一端。单独的 SS 关系控制后续活动的开始，但不控制其完成。单独的 FF 关系控制后续活动的完成，但不控制其开始。因此，很多计划审查人员会把这种用法称为半关系，也就是只约束了一半的逻辑。

## SS 和 FF 的含义

SS 表示后续活动可以在前置活动开始时开始，或在前置活动开始后经过一定 滞后 后开始。

FF 表示后续活动可以在前置活动完成时完成，或在前置活动完成后经过一定 滞后 后完成。

两者都可以代表真实工作。例如，设计审查可能在设计工作开始后启动；测试可能必须在安装完成后才能完成；分区施工中，一个工序可以在另一个工序开始后进入，但仍需要控制两个工序的完成关系。

## 为什么单独 SS 可能不完整

单独的 SS 只锚定后续活动的开始。它没有说明后续活动的完成由什么控制。

如果后续活动的工期发生变化，或活动延长到不合理的位置，除非下游逻辑能够捕捉影响，否则计划可能无法正确反映风险。开始端连接了，但完成端可能仍然漂浮。

在 P6 中，这会让计划看起来已经有前置逻辑，但实际上活动并没有完全嵌入网络。

## 为什么单独 FF 可能不完整

单独的 FF 会产生相反的问题。它锚定后续活动的完成，但没有说明后续活动何时可以开始。

在更新后的计划中，这可能导致 最早开始 被计算到过早的日期，甚至靠近 数据日期 或早于现实可执行时间。活动看起来可以开始，并不是因为工作真的准备好了，而是因为逻辑没有定义开始条件。

这会影响 浮时、关键路径分析和近期计划判断。

## SS + FF 组合

当工作确实需要重叠时，更可靠的模型通常是 SS + FF 组合。

SS 控制后续活动何时可以开始。FF 控制后续活动何时可以完成。两者一起定义重叠工作的逻辑边界。

```mermaid
flowchart LR
    A["前置活动"] -- "SS: 开始条件" --> B["后续活动"]
    A -- "FF: 完成条件" --> B
    B --> C["开始和完成都被逻辑锚定"]
```

这种模型适用于连续施工、分区作业、设计与审查循环、安装与测试、重复生产等场景。

## 什么时候单独 SS 或 FF 可以接受

不是每一个单独 SS 或 FF 都一定错误。

如果后续活动的完成由其他有效下游逻辑控制，单独 SS 可能可以接受。如果后续活动的开始由其他有效前置逻辑控制，单独 FF 也可能可以接受。关键问题是：活动的开始和完成是否都在网络中被控制。

计划工程师应能够解释为什么单独关系是充分的。

## 在 P6 中如何检查

在 P6 中，应检查带有 SS 前置、SS 后续、FF 前置和 FF 后续的活动。特别关注唯一前置关系是 FF，或唯一后续关系是 SS 的活动。

建议查看 活动 ID、活动名称、开始、完成、活动状态、总浮时、前置活动、后续活动、逻辑关系类型、滞后、约束，以及可用时的 驱动关系。

检查问题包括：

- 什么条件允许活动开始？
- 什么逻辑控制活动完成？
- 重叠是否真实存在？
- 滞后 是否在掩盖缺少的细节？
- 关系是否解释了执行计划？
- 独立审查人员能否理解该逻辑？

## 常见问题

常见问题之一，是使用 SS 把工作提前，但没有建模真实的开始条件。

另一个问题，是使用 FF 固定完成时间，却让开始端开放。

有时 SS 和 FF 被用来代替活动拆分。如果活动范围过大，计划人员可能用逻辑关系类型强行得到想要的日期，而不是把工作拆成更清楚的步骤。

## 良好做法

有意图地使用 SS 和 FF。它们应表达真实的施工或执行顺序，而不是用于方便调整日期。

使用 SS 时，确认后续活动的完成也受逻辑控制。使用 FF 时，确认后续活动的开始也受逻辑控制。

对于真正重叠的工作，必要时使用 SS + FF 组合。若单独使用 SS 或 FF，应记录清楚理由。

## 结论

SS 和 FF 是 P6 中有用的工具，但需要专业。单独使用时，它们可能只控制活动的一端，从而形成不完整逻辑。

可靠的 CPM 计划应说明工作为什么可以开始，以及什么控制其完成。当 SS 和 FF 能回答这些问题时，它们会加强计划。当它们让一端开放时，就形成了需要审查的弱逻辑。
## 相关内容
- [从数据日期开始且没有驱动逻辑的活动：为什么此计划指标很重要 - 概述](../../metrics/01_activities_starting_in_dd_with_no_logic_driving/02_guide_template.md)
- [P6 中的资源平衡](../14_RESOURCES%20BALANCING%20IN%20P6/14_RESOURCES%20BALANCING%20IN%20P6.md)
- [CPM（关键路径法）](../16_CPM%20(CRITICAL%20PATH%20METHOD)/16_CPM%20(CRITICAL%20PATH%20METHOD).md)
