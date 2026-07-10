---
title: "Activities Out of Sequence - Blog Article"
seoTitle: "Activities Out of Sequence in Primavera P6"
description: "Learn why activities out of sequence affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Activities Out of Sequence"
  - "Primavera P6 Activities Out of Sequence"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "en/blog/activities-out-of-sequence-primavera-p6"
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
  - "01_metrics_en/08_activities_out_of_sequence/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---
## Title

Activities Out of Sequence in Primavera P6

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who assess Primavera P6 schedule updates.

## Opening Hook

Sometimes work starts before the schedule says it should. That may reflect real field progress, but it can also expose a problem in the update, the logic, or the way the current plan is being reported.

## Introduction

Activities out of sequence are activities that have started or progressed before their predecessor logic has been satisfied. In Primavera P6, this is a common issue during schedule updates because actual field execution does not always follow the planned network exactly.

Out-of-sequence progress is not automatically bad. Projects resequence work for access, resources, weather, permits, design releases, and many other reasons. The issue is whether the schedule has been updated to reflect that resequencing clearly.

This metric identifies activities with progress that conflicts with the planned logic sequence. The target is zero unresolved activities.

## What This Parameter Means

This parameter checks whether actual progress is consistent with the relationship logic in the schedule. For example, if Activity B has a Finish-to-Start predecessor from Activity A, but Activity B has already started while Activity A is not complete, Activity B may be out of sequence.

The result may point to a simple status error, such as a missing actual finish on the predecessor. It may also point to outdated logic or a real field resequencing event.

In Primavera P6, the impact depends partly on schedule calculation settings such as retained logic and progress override. These settings affect how remaining work is calculated after out-of-sequence progress occurs.

## Why This Subject Matters

Out-of-sequence activities can reduce confidence in the forecast. They may distort float, change the longest path, and make the schedule harder to explain.

They also matter for governance. PMO reviewers and project controls teams need to know whether the schedule represents the actual current plan or whether it still contains logic from an older sequence.

## Common Causes of Poor Results

- Work started before predecessor completion
- Missing or incorrect actual dates
- Predecessor status not updated correctly
- Field resequencing not reflected in the logic
- Outdated relationships after recovery planning
- Confusion over retained logic and progress override settings
- Progress accepted without schedule logic review

## How to Improve the Result

### 1. Check the Status First

Before changing logic, confirm the actual dates and status of both the flagged activity and its predecessors. Many out-of-sequence issues are caused by missing actual finishes, incorrect actual starts, or remaining duration that was not updated properly.

If the activity data is wrong, correct the update and recalculate before making logic changes.

### 2. Review the Logic Against the Current Plan

If the progress is real, ask whether the existing relationship still reflects the planned execution sequence. If field work has changed, the logic may need to change too.

Do not remove relationships only to clear the metric. Replace outdated logic with valid relationships that explain the approved current plan.

### 3. Confirm the P6 Calculation Approach

Review whether the project uses retained logic or progress override. Retained logic preserves predecessor control over remaining work. Progress override may allow work to continue despite incomplete predecessor logic.

The right setting depends on the project controls procedure, but the team should understand which setting is being used before interpreting the result.

## Example Scenario

A schedule shows "Install cable tray" with a predecessor from "Complete steel supports." During the update, the cable tray activity receives an actual start even though steel supports are not marked complete.

The scheduler checks the field report and finds that supports were completed in Area A but not in Area B. The original activities were too broad for the actual sequence.

The schedule is revised by area. The completed support work in Area A now drives cable tray installation in Area A, while Area B remains properly sequenced. The out-of-sequence issue is resolved and the forecast becomes more accurate.

## Recommended Improvement Schedule

- Day 1: Run the metric and confirm the Data Date.
- Days 2-3: Correct status errors and actual dates.
- Days 4-5: Review real resequencing and revise outdated logic.
- Day 6: Confirm exceptions and review schedule movement.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid changing logic before checking whether the status update is correct.

Avoid ignoring out-of-sequence progress because the work happened in the field. The schedule still needs to represent the current plan.

Avoid changing retained logic or progress override settings without understanding the project controls procedure.

## Key Takeaways

- Out-of-sequence activities show progress that conflicts with predecessor logic.
- The cause may be status error, logic error, or real resequencing.
- P6 calculation settings affect how the issue appears in the forecast.
- The target is zero unresolved activities.
- Approved resequencing should be reflected in the schedule logic.

## Conclusion

Out-of-sequence progress is a signal that the schedule needs review. Sometimes the fix is a simple status correction. Other times it requires updating the logic to match how the project is now being executed.

Managing this metric improves update quality, forecast reliability, and confidence in the critical or longest path.

## Call to Action

Review out-of-sequence activities during your next Primavera P6 update. For each item, decide whether the issue is status, logic, or real resequencing, then correct the schedule before issuing reports.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
