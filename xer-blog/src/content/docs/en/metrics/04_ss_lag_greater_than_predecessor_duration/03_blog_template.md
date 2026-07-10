---
title: "SS Lag Greater Than Predecessor Duration - Blog Article"
seoTitle: "SS Lag Greater Than Predecessor Duration in Primavera P6"
description: "Learn why start-to-start lag greater than predecessor duration affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "SS Lag Greater Than Predecessor Duration"
  - "Primavera P6 SS Lag Greater Than Predecessor Duration"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "en/blog/ss-lag-greater-than-predecessor-duration-primavera-p6"
language: "en"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Schedule Quality"
audience:
  - "Planning engineers"
  - "Project managers"
  - "PMO teams"
primarySearchIntent: "Explain this Primavera P6 schedule quality topic in a practical blog format."
relatedMetrics:
  - "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---
## Title

SS Relationships with Lag Greater Than the Predecessor Duration

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who assess Primavera P6 schedule logic.

## Opening Hook

A Start-to-Start relationship should normally describe work that can begin after another activity begins. But when the SS lag is longer than the predecessor duration, the logic starts to tell a different story.

## Introduction

In Primavera P6, lag is often used to represent a waiting period between two activities. A small SS lag can be useful when work starts after a defined amount of progress. For example, finishing crews may start two days after installation begins.

The problem appears when the SS lag is greater than the predecessor duration. If the predecessor lasts five days and the SS lag is ten days, the successor is not really starting because the predecessor started. It is starting after a delay that extends beyond the predecessor finish.

This metric identifies SS relationships where lag is greater than predecessor duration. The target is zero unresolved relationships.

## What This Parameter Means

This parameter checks whether an SS relationship is being used in a way that still makes logical sense. SS logic connects the start of the predecessor to the start of the successor. When the lag exceeds the predecessor duration, the successor start is pushed beyond the predecessor finish.

That does not automatically mean the relationship is wrong, but it does mean the relationship needs review. The dependency may be better represented as FS logic, FF logic, or a separate activity that shows the waiting period clearly.

A high result suggests that the schedule may be using long lag to hide work, waiting periods, or finish-based dependencies. A low result suggests that SS logic and lag are being used more carefully.

## Why This Subject Matters

Long lag can make a schedule harder to understand. It hides time inside a relationship instead of showing the work or waiting period as part of the activity network.

This can affect float, critical path visibility, longest path review, and delay analysis readiness. If a reviewer cannot easily understand why a successor starts when it does, the schedule becomes harder to defend.

## Common Causes of Poor Results

- SS relationships copied from older schedules
- Lags used as placeholders during early planning
- Waiting periods hidden inside relationship lag
- FS or FF logic modeled incorrectly as SS plus lag
- Calendar differences that make lag harder to interpret
- Procurement, curing, approval, or access periods not modeled as activities

## How to Improve the Result

### 1. Review the Relationship Intent

Filter for SS relationships where lag is greater than predecessor duration. Review the predecessor, successor, lag, calendars, duration, status, and total float.

Ask what the relationship is meant to represent. If the successor depends on predecessor completion, the relationship is probably not a true SS dependency.

### 2. Replace Weak SS Logic

Use FS when the successor cannot start until the predecessor finishes. Use FF when both activities can overlap but the successor cannot finish until the predecessor finishes.

If the lag represents a real waiting period, consider whether that waiting period should be modeled as a separate activity. This is often clearer for reviews, progress updates, and delay analysis.

### 3. Document Valid Exceptions

Some long SS lags may be intentional. If the relationship is valid, document the reason and confirm the lag calendar. The explanation should be clear enough for a PMO reviewer or project controls lead to understand without guessing.

## Example Scenario

A schedule includes an SS relationship from "Install formwork" to "Pour concrete" with a lag of ten days. The formwork activity has a duration of five days.

This means the concrete pour starts ten days after formwork starts, even though formwork finishes after five days. The logic is probably not describing a true start-to-start dependency. It may be trying to represent formwork completion plus inspection or curing time.

The scheduler reviews the sequence and replaces the relationship with clearer logic: an FS relationship to an inspection activity, followed by the concrete pour. The schedule now shows the real dependency and the waiting period is visible.

## Recommended Improvement Schedule

- Day 1: Run the metric and identify affected relationships.
- Days 2-3: Review critical and near-critical relationships first.
- Days 4-5: Replace weak SS logic, reduce unjustified lag, or model hidden waiting periods.
- Day 6: Confirm exceptions and review schedule movement.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid treating all lag as wrong. Lag can be useful when it represents a real and limited offset.

Avoid leaving long lag unexplained. If the lag is longer than the predecessor duration, it deserves a clear reason.

Avoid hiding work inside lag when the work should be visible as an activity.

## Key Takeaways

- SS logic should represent a start-based dependency.
- Lag greater than predecessor duration often signals weak or unclear logic.
- FS, FF, or a separate activity may explain the dependency better.
- The target is zero unresolved relationships.
- Valid exceptions should be documented.

## Conclusion

This metric helps schedulers find SS relationships where lag may be hiding the real dependency. The goal is not to remove all SS lag, but to make sure lag is reasonable, visible, and defensible.

Reviewing this metric improves CPM clarity, float reliability, and confidence in the longest path. It also helps PMO reviewers separate useful overlap logic from schedule shortcuts.

## Call to Action

Review SS relationships where lag is greater than predecessor duration in your next Primavera P6 schedule update. For each one, ask whether the relationship is truly start-based. If it is not, replace it with clearer logic or model the waiting period directly.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
