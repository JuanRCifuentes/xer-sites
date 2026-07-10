---
title: "Activity Started with Zero Progress - Blog Article"
seo_title: "Activity Started with Zero Progress in Primavera P6"
meta_description: "Learn why activity started with zero progress affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Activity Started with Zero Progress"
  - "Primavera P6 Activity Started with Zero Progress"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "blog-article-activity-started-progress-zero-primavera-p6"
language: "en"
content_type: "blog"
version: "1.0"
topic: "Schedule Quality"
audience:
  - "Planning engineers"
  - "Project managers"
  - "PMO teams"
primary_search_intent: "Explain this Primavera P6 schedule quality topic in a practical blog format."
related_metrics:
  - "01_metrics_en/13_activity_started_progress_zero/01_overview_template.md"
  - "01_metrics_en/13_activity_started_progress_zero/02_guide_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# Activity Started with Zero Progress
## Title

Activities Started with 0% Progress in Primavera P6

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who validate Primavera P6 progress updates.

## Opening Hook

When an activity is marked Started, the schedule says real work has begun. If progress is still 0%, reviewers will naturally ask what actually started.

## Introduction

Activity Status and progress should tell a consistent story. In Primavera P6, a Started activity normally has an Actual Start date and some amount of reported progress.

When an activity is Started but progress remains 0%, the schedule update may be incomplete. The Actual Start may be wrong, progress may not have been entered, or the Percent Complete Type may not match how progress is being measured.

This metric identifies activities with Activity Status = Started and progress = 0%. The target is zero unresolved activities.

## What This Parameter Means

This parameter checks whether a started activity has earned or recorded any progress. If work truly started, the project team should normally be able to report some measurable progress.

The review should consider the activity's Percent Complete Type. Physical Percent Complete, Duration Percent Complete, and Units Percent Complete can each require different update fields.

A high result suggests weak update discipline, missing progress quantities, imported status issues, or activities being marked started before actual work begins.

## Why This Subject Matters

Started activities with 0% progress can reduce confidence in the update. They make it unclear whether work has actually begun or whether the activity was started administratively.

This affects progress reports, earned value, lookahead planning, and PMO review. It can also create confusion when teams compare field reports with the P6 schedule.

## Common Causes of Poor Results

- Actual Start entered before work actually began
- Progress value not updated after work started
- Physical Percent Complete left at 0
- Duration or units progress not calculated as expected
- Imported status data missing matching progress values
- Different teams using different definitions of started
- Work began near the update cut-off with no measurable progress yet

## How to Improve the Result

### 1. Confirm Whether Work Actually Started

Check the field report, discipline update, or responsible owner confirmation. If work did not actually start, remove the Actual Start and return the activity to Not Started.

Actual Start should represent real work beginning, not intent to begin soon.

### 2. Update the Correct Progress Field

If work did start, identify the activity's Percent Complete Type. Then update the correct progress field.

For Physical Percent Complete, enter the measured physical progress. For Duration Percent Complete, confirm Remaining Duration reflects work performed. For Units Percent Complete, confirm actual units or resource progress is updated.

### 3. Document Rare Exceptions

Sometimes an activity starts right before the update cut-off and no measurable progress has been earned yet. If the project allows this, document the reason and follow up in the next update.

These exceptions should be rare. If many activities are started with 0% progress, the update process needs review.

## Example Scenario

A schedule update shows "Install lighting fixtures" as Started with Actual Start entered, but Physical Percent Complete is 0%.

The scheduler checks with the electrical lead and learns that the crew mobilized materials but did not install any fixtures before the Data Date. The activity was marked started too early.

The scheduler removes the Actual Start and keeps the activity Not Started. A separate mobilization or material staging activity may be added if that work needs to be tracked.

## Recommended Improvement Schedule

- Day 1: Run the metric and identify affected activities.
- Days 2-3: Confirm actual start status with responsible owners.
- Days 4-5: Correct Actual Start, progress values, or exceptions.
- Day 6: Review progress reports and earned value outputs.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid marking activities Started before real work begins.

Avoid updating Actual Start without updating the relevant progress field.

Avoid ignoring Percent Complete Type. Progress may be stored in a different field than expected.

## Key Takeaways

- Started status with 0% progress is a status consistency issue.
- The target is zero unresolved activities.
- Confirm whether work actually started before changing progress.
- Update the correct progress field based on Percent Complete Type.
- Rare exceptions should be documented and followed up.

## Conclusion

This metric helps schedulers keep status and progress aligned. A started activity should tell a clear story about what work began and how much progress was achieved.

Managing this metric improves progress reporting, earned value confidence, and the reliability of Primavera P6 updates.

## Call to Action

Review activities marked Started with 0% progress during your next schedule update. Confirm whether work truly started, then correct Actual Start, progress, or documentation before issuing reports.

## Related Content
- [Overview](01_overview_template.md)
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
