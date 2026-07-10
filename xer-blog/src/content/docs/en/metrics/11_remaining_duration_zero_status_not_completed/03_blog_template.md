---
title: "Remaining Duration Zero and Status Not Completed - Blog Article"
seo_title: "Remaining Duration Zero and Status Not Completed in Primavera P6"
meta_description: "Learn why remaining duration zero and status not completed affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Remaining Duration Zero and Status Not Completed"
  - "Primavera P6 Remaining Duration Zero and Status Not Completed"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "blog-article-remaining-duration-zero-status-not-completed-primavera-p6"
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
  - "01_metrics_en/11_remaining_duration_zero_status_not_completed/01_overview_template.md"
  - "01_metrics_en/11_remaining_duration_zero_status_not_completed/02_guide_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# Remaining Duration Zero and Status Not Completed
## Title

Activities with Remaining Duration 0 and Status Not Completed

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who validate Primavera P6 progress updates.

## Opening Hook

When an activity has no remaining duration, the schedule is saying there is no time left to finish it. If the same activity is not marked Completed, the update needs attention.

## Introduction

Primavera P6 schedule updates rely on consistent status data. Remaining Duration shows how much time is still needed to complete an activity. Activity Status shows whether the activity is Not Started, In Progress, or Completed.

When Remaining Duration equals 0 but the status is not Completed, those fields do not agree. The activity may be finished but missing an Actual Finish, or it may still have work remaining but was incorrectly updated to zero remaining duration.

This metric identifies activities with Remaining Duration = 0 and Activity Status <> Completed. The target is zero unresolved activities.

## What This Parameter Means

This parameter checks whether an activity's remaining time matches its completion status. If there is no remaining duration, the activity should normally be complete and have an Actual Finish date.

If the activity is still In Progress, it should normally have some Remaining Duration unless the work is being closed out in the same update. If it is Not Started, Remaining Duration of 0 is usually a clear status problem.

A high result suggests that the update process may have missing actual finishes, incorrect remaining durations, imported status issues, or inconsistent manual updates.

## Why This Subject Matters

Status consistency affects schedule reports, lookahead planning, earned value, progress curves, and management decisions.

If activities have no remaining duration but are not completed, the schedule may understate remaining work or fail to close completed work properly. Either way, the update becomes less reliable.

This is especially important before issuing reports to clients, PMO teams, or project leadership.

## Common Causes of Poor Results

- Actual Finish missing on completed activities
- Remaining Duration set to 0 by mistake
- Activity Status not changed to Completed
- Progress imported from another system without validation
- Manual update workflow not completed
- Milestone or special activity types not reviewed carefully
- Update cut-off process not followed

## How to Improve the Result

### 1. Confirm the Real Activity Status

Start by confirming whether the work is actually complete. Use field reports, discipline updates, inspection records, or package owner confirmation.

If the work is complete, the activity should be closed correctly. If the work is not complete, Remaining Duration should be restored.

### 2. Correct Completed Activities

For completed work, enter the Actual Finish date and mark the activity Completed. Confirm that progress values and remaining duration align with the project update procedure.

This keeps completed activity lists, progress reports, and earned value outputs consistent.

### 3. Correct Incomplete Activities

For incomplete work, restore a realistic Remaining Duration. Keep the activity as In Progress or Not Started depending on actual status.

After corrections, recalculate the schedule and re-run the metric to confirm the inconsistency is resolved.

## Example Scenario

A schedule update shows "Complete panel wiring" with Remaining Duration = 0, but Activity Status is still In Progress. The activity has an Actual Start but no Actual Finish.

The scheduler checks with the electrical lead and confirms the work finished two days before the Data Date. The update was incomplete because the remaining duration was reduced to zero, but the Actual Finish was not entered.

The scheduler enters the Actual Finish and marks the activity Completed. The activity now matches the field status and the progress reports are cleaner.

## Recommended Improvement Schedule

- Day 1: Run the metric and identify affected activities.
- Days 2-3: Confirm completion status with responsible owners.
- Days 4-5: Correct Actual Finish, Activity Status, or Remaining Duration.
- Day 6: Review reports and earned value outputs.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid assuming Remaining Duration = 0 always means the activity is complete. Confirm the field status first.

Avoid marking activities Completed without an accurate Actual Finish date.

Avoid restoring Remaining Duration without checking whether the activity was actually finished.

## Key Takeaways

- Remaining Duration = 0 and status <> Completed is a status inconsistency.
- The target is zero unresolved activities.
- Completed work should have Actual Finish and Completed status.
- Incomplete work should retain realistic Remaining Duration.
- Update imports and manual workflows should be validated.

## Conclusion

This metric helps catch a common update-quality issue. It keeps remaining work, actual dates, and activity status aligned so the schedule tells a consistent story.

Managing this metric improves reporting accuracy, progress confidence, and the reliability of Primavera P6 schedule updates.

## Call to Action

Review activities with Remaining Duration = 0 and status not Completed during your next schedule update. Confirm each activity's real status, then correct Actual Finish, Activity Status, or Remaining Duration before issuing reports.

## Related Content
- [Overview](01_overview_template.md)
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
