---
title: "FF Lag Greater Than Successor Duration - Blog Article"
seoTitle: "FF Lag Greater Than Successor Duration in Primavera P6"
description: "Learn why finish-to-finish lag greater than successor duration affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "FF Lag Greater Than Successor Duration"
  - "Primavera P6 FF Lag Greater Than Successor Duration"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "en/blog/ff-lag-greater-than-successor-duration-primavera-p6"
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
  - "01_metrics_en/05_ff_lag_greater_than_successor_duration/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---
## Title

FF Relationships with Lag Greater Than the Successor Duration

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who assess Primavera P6 schedule logic.

## Opening Hook

A Finish-to-Finish relationship should normally describe two activities whose finish dates need to be linked. But when the FF lag is longer than the successor duration, the relationship may be hiding more than it explains.

## Introduction

In Primavera P6, FF logic is often used when two activities can overlap but the successor cannot finish until the predecessor finishes. A small FF lag can be useful when a short closeout, review, or handover offset is needed.

The problem appears when the FF lag is greater than the successor duration. If the successor lasts five days and the FF lag is ten days, the finish offset is longer than the activity being controlled. That may mean the schedule is hiding a waiting period, missing activity, or different dependency type.

This metric identifies FF relationships where lag is greater than successor duration. The target is zero unresolved relationships.

## What This Parameter Means

This parameter checks whether an FF relationship is being used in a way that still makes logical sense. FF logic connects the finish of the predecessor to the finish of the successor. When the lag exceeds the successor duration, the relationship can push the successor finish in a way that is difficult to understand from the activity list alone.

That does not automatically mean the relationship is wrong, but it does mean the relationship needs review. The dependency may be better represented as FS logic, SS logic, or a separate activity that shows the waiting period clearly.

A high result suggests that the schedule may be using long lag to hide work, waiting periods, or unclear sequencing. A low result suggests that FF logic and lag are being used more carefully.

## Why This Subject Matters

Long lag can make a schedule harder to understand. It hides time inside a relationship instead of showing the work or waiting period as part of the activity network.

This can affect float, critical path visibility, longest path review, and delay analysis readiness. If a reviewer cannot easily understand why a successor finishes when it does, the schedule becomes harder to defend.

## Common Causes of Poor Results

- FF relationships copied from older schedules
- Lags used as placeholders during early planning
- Waiting periods hidden inside relationship lag
- FS or SS logic modeled incorrectly as FF plus lag
- Calendar differences that make lag harder to interpret
- Review, approval, commissioning, or handover periods not modeled as activities

## How to Improve the Result

### 1. Review the Relationship Intent

Filter for FF relationships where lag is greater than successor duration. Review the predecessor, successor, lag, calendars, duration, status, and total float.

Ask what the relationship is meant to represent. If the successor depends on predecessor completion before it can start, the relationship may be clearer as FS logic. If the successor can begin after upstream work begins, SS logic may be more appropriate.

### 2. Replace Weak FF Logic

Use FS when the successor cannot start until the predecessor finishes. Use SS when the successor can start after the predecessor starts or reaches a defined progress point.

If the lag represents a real waiting period, consider whether that waiting period should be modeled as a separate activity. This is often clearer for reviews, progress updates, and delay analysis.

### 3. Document Valid Exceptions

Some long FF lags may be intentional. If the relationship is valid, document the reason and confirm the lag calendar. The explanation should be clear enough for a PMO reviewer or project controls lead to understand without guessing.

## Example Scenario

A schedule includes an FF relationship from "Complete installation" to "Closeout package approved" with a lag of fifteen days. The closeout package activity has a duration of five days.

This means the closeout package finish is delayed by more time than the successor duration itself. The logic may be trying to represent review or approval time that is not visible as an activity.

The scheduler reviews the sequence and replaces the long lag with a separate "Client review of closeout package" activity. The schedule now shows the real waiting period, making the logic easier to update and defend.

## Recommended Improvement Schedule

- Day 1: Run the metric and identify affected relationships.
- Days 2-3: Review critical and near-critical relationships first.
- Days 4-5: Replace weak FF logic, reduce unjustified lag, or model hidden waiting periods.
- Day 6: Confirm exceptions and review schedule movement.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid treating all lag as wrong. Lag can be useful when it represents a real and limited offset.

Avoid leaving long lag unexplained. If the lag is greater than the successor duration, it deserves a clear reason.

Avoid hiding work inside lag when the work should be visible as an activity.

## Key Takeaways

- FF logic should represent a finish-based dependency.
- Lag greater than successor duration often signals weak or unclear logic.
- FS, SS, or a separate activity may explain the dependency better.
- The target is zero unresolved relationships.
- Valid exceptions should be documented.

## Conclusion

This metric helps schedulers find FF relationships where lag may be hiding the real dependency. The goal is not to remove all FF lag, but to make sure lag is reasonable, visible, and defensible.

Reviewing this metric improves CPM clarity, float reliability, and confidence in the longest path. It also helps PMO reviewers separate useful finish logic from schedule shortcuts.

## Call to Action

Review FF relationships where lag is greater than successor duration in your next Primavera P6 schedule update. For each one, ask whether the relationship is truly finish-based. If it is not, replace it with clearer logic or model the waiting period directly.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
