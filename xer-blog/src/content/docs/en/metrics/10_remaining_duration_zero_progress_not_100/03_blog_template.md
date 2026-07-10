---
title: "Remaining Duration Zero and Progress Not 100% - Blog Article"
seo_title: "Remaining Duration Zero and Progress Not 100% in Primavera P6"
meta_description: "Learn why remaining duration zero and progress not 100 percent affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Remaining Duration Zero and Progress Not 100%"
  - "Primavera P6 Remaining Duration Zero and Progress Not 100%"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "blog-article-remaining-duration-zero-progress-not-100-primavera-p6"
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
  - "01_metrics_en/10_remaining_duration_zero_progress_not_100/01_overview_template.md"
  - "01_metrics_en/10_remaining_duration_zero_progress_not_100/02_guide_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# Remaining Duration Zero and Progress Not 100%
## Title

Activities with Remaining Duration 0 and Progress Not 100%

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who validate Primavera P6 progress updates.

## Opening Hook

If an activity has no remaining duration, it should normally be finished. When the same activity shows progress below 100%, the schedule is sending mixed signals.

## Introduction

Primavera P6 schedule updates depend on clean status information. Remaining Duration tells the schedule how much time is still needed to complete an activity. Progress percent tells the team how much work has been achieved, based on the selected percent complete method.

When Remaining Duration equals 0 but progress is not 100%, those two signals do not agree. The activity may be complete but missing an Actual Finish, or it may still have work remaining but was incorrectly updated to zero remaining duration.

This metric identifies activities with Remaining Duration = 0 and progress <> 100%. The target is zero unresolved activities.

## What This Parameter Means

This parameter checks for consistency between remaining time and reported progress. If an activity has no remaining duration, it normally means the activity has no work left to perform. In that case, progress should usually be 100% and the activity should have the correct completion status.

The result may depend on the activity's Percent Complete Type. Physical Percent Complete, Duration Percent Complete, and Units Percent Complete can behave differently. That is why the review should look at both the remaining duration and the percent complete method.

A high result suggests that the update process may have incomplete actual finish dates, incorrect remaining durations, or inconsistent progress entry.

## Why This Subject Matters

Status consistency matters because progress data feeds schedule reports, earned value, lookahead planning, and management decisions.

If an activity appears to have no remaining duration but is not complete, the forecast may understate remaining work. If an activity is actually complete but progress remains below 100%, reports may understate completed work.

Both cases reduce trust in the schedule update.

## Common Causes of Poor Results

- Actual Finish missing on completed activities
- Remaining Duration set to 0 by mistake
- Physical Percent Complete not updated
- Percent Complete Type misunderstood
- Progress imported from another system without validation
- Activities marked complete inconsistently
- Update cut-off process not followed

## How to Improve the Result

### 1. Confirm Whether the Work Is Complete

Start by checking the field status. If the activity is complete, confirm the Actual Finish date and set progress to 100% using the project update procedure.

If the work is not complete, the activity should normally have Remaining Duration greater than 0.

### 2. Review the Percent Complete Type

Check whether the activity uses Physical, Duration, or Units Percent Complete. The correction should match the project controls method.

For example, if Physical Percent Complete is used, the scheduler may need to update the physical progress field manually even when remaining duration has reached zero.

### 3. Correct the Schedule Status

For completed work, enter the Actual Finish and confirm progress is 100%. For incomplete work, restore a realistic Remaining Duration and update progress based on the selected method.

After corrections, recalculate the schedule and re-run the metric.

## Example Scenario

A schedule update shows "Install cable trays" with Remaining Duration = 0 and Physical Percent Complete = 85%. The activity has an Actual Start but no Actual Finish.

The scheduler checks with the field engineer and learns that installation is not complete. A crew still needs three days to finish punch list work and final supports.

The scheduler restores Remaining Duration to three days and keeps Physical Percent Complete at 85%. The activity now reflects both the completed work and the remaining effort.

## Recommended Improvement Schedule

- Day 1: Run the metric and identify affected activities.
- Days 2-3: Confirm completion status with responsible owners.
- Days 4-5: Correct Actual Finish, Remaining Duration, and progress fields.
- Day 6: Review reports and earned value outputs.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid assuming Remaining Duration = 0 always means the work is complete. Confirm the status first.

Avoid changing progress to 100% without checking whether the activity is actually finished.

Avoid ignoring Percent Complete Type. The wrong correction can create new reporting issues.

## Key Takeaways

- Remaining Duration = 0 and progress <> 100% is a status inconsistency.
- The target is zero unresolved activities.
- Check Actual Finish, Remaining Duration, and Percent Complete Type together.
- Completed work should be closed out correctly.
- Incomplete work should retain realistic Remaining Duration.

## Conclusion

This metric helps schedulers catch a small but important update problem. The issue is not just a number on a screen; it affects completion reporting, forecast quality, and confidence in the update.

Managing this metric keeps activity status clean and makes Primavera P6 reports easier to trust.

## Call to Action

Review activities with Remaining Duration = 0 and progress not equal to 100% during your next schedule update. Confirm whether each activity is complete, then correct Actual Finish, Remaining Duration, or progress as needed.

## Related Content
- [Overview](01_overview_template.md)
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
