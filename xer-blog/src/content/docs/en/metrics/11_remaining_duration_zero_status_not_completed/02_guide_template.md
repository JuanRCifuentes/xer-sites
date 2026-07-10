---
title: "Remaining Duration Zero and Status Not Completed - Improvement Guide"
seo_title: "How to Fix Remaining Duration Zero and Status Not Completed in Primavera P6"
meta_description: "Identify and correct remaining duration zero and status not completed in Primavera P6 using schedule logic checks, validation, and reassessment steps."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Remaining Duration Zero and Status Not Completed"
  - "Primavera P6 Remaining Duration Zero and Status Not Completed"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
slug: "improvement-guide-remaining-duration-zero-status-not-completed-primavera-p6"
language: "en"
content_type: "metric"
version: "1.0"
topic: "Schedule Quality"
audience:
  - "Planning engineers"
  - "Schedulers"
  - "Project controls teams"
primary_search_intent: "Learn how to improve this Primavera P6 schedule quality result."
related_metrics:
  - "01_metrics_en/11_remaining_duration_zero_status_not_completed/01_overview_template.md"
  - "01_metrics_en/11_remaining_duration_zero_status_not_completed/03_blog_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# Remaining Duration Zero and Status Not Completed - Improvement Guide
## Purpose

This guide helps schedulers review and correct activities where Remaining Duration equals 0 but Activity Status is not Completed. It supports clean Primavera P6 updates by aligning remaining duration, actual finish, and activity status.

## Before You Start

Gather the following information before taking action:

- Current assessment result for this metric.
- List of activities with Remaining Duration = 0 and Activity Status <> Completed.
- Activity Status, Actual Start, Actual Finish, Original Duration, Remaining Duration, and At Completion Duration.
- Percent Complete Type and key progress fields.
- Data Date and latest update notes.
- Field confirmation of whether the work is complete or still has remaining work.

## Understand Your Result

A strong result is zero activities with Remaining Duration = 0 and status not Completed.

An acceptable result may include rare temporary update cases, but these should be resolved before formal reporting.

A weak result means the schedule contains activities whose time remaining and completion status do not agree. This can create misleading progress reports, incomplete actualization, and unreliable lookahead or earned value outputs.

## Improvement Goal

The target is 0 unresolved activities with Remaining Duration = 0 and Activity Status <> Completed.

The goal is to confirm whether each activity is complete and should be closed, or incomplete and should have valid Remaining Duration restored.

## Action Plan

### Step 1: Identify the Main Issue

Create a P6 layout or report that filters for activities where Remaining Duration equals 0 and Activity Status is not Completed. Include Activity ID, Activity Name, WBS, Activity Status, Actual Start, Actual Finish, Original Duration, Remaining Duration, Percent Complete Type, Activity Percent Complete, Start, Finish, and Total Float.

Review each activity and ask:

- Is the work actually complete?
- If complete, why is Activity Status not Completed?
- Is Actual Finish missing?
- If work is not complete, why is Remaining Duration 0?
- Was status imported or updated manually?
- Is the activity a milestone, level-of-effort, or other special activity type?

```mermaid
flowchart TD
    A["Remaining Duration = 0 and Status <> Completed"] --> B{"Is the work actually complete?"}
    B -- "Yes" --> C["Enter Actual Finish and mark activity Completed"]
    B -- "No" --> D["Restore valid Remaining Duration"]
    D --> E["Keep or set status based on actual progress"]
    B -- "Unclear" --> F["Confirm status with responsible owner"]
    C --> G["Recalculate and reassess"]
    E --> G
    F --> G
```

### Step 2: Apply the Recommended Fixes

If the work is complete, update the activity as Completed. Enter the Actual Finish, confirm Remaining Duration is 0, and confirm progress values align with the project update procedure.

If the work is not complete, restore an appropriate Remaining Duration. Confirm the remaining work with the responsible owner and keep the activity status as In Progress or Not Started based on actual progress.

If the issue comes from imported progress data, review the import mapping and update workflow. The update process should not leave activities with zero remaining time but incomplete status.

### Step 3: Remove Common Blockers

Common blockers include missing Actual Finish dates, incomplete field confirmation, imported update data, and confusion between duration status and activity status.

Another blocker is closing remaining duration without formally completing the activity. Remaining Duration and Activity Status should tell the same story about whether work remains.

### Step 4: Validate the Changes

Recalculate the schedule after corrections. Re-run the metric and confirm that each remaining item is corrected or assigned for follow-up.

Review completed activity lists, actual finish dates, progress reports, earned value outputs, and lookahead reports to confirm that the correction did not create new inconsistencies.

## Improvement Schedule

### Day 1: Review and Diagnose

Run the metric, confirm the Data Date, and separate findings into complete work missing completed status, incomplete work with zero remaining duration, and import or workflow issues.

### Days 2-3: Implement Priority Actions

Correct activities used in reporting first. Enter Actual Finish, mark activities Completed, or restore Remaining Duration as needed.

### Days 4-5: Monitor Early Results

Recalculate the schedule and review completed activity reports, progress reports, and earned value outputs.

### Day 6: Final Adjustments

Resolve remaining uncertain items with the responsible discipline, field lead, or project controls lead.

### Day 7: Reassess and Compare

Run the assessment again and compare the result against the target threshold.

## Tracking Progress

Use a simple tracker to manage corrections and approvals.

| Date | Action Taken | Expected Impact | Result / Observation | Next Step |
| --- | --- | --- | --- | --- |
| [Date] | Reviewed RD 0 and status not Completed activities | Identify status inconsistency | [Observed result] | Assign owner |
| [Date] | Entered Actual Finish and marked Completed | Align completed status | [Observed result] | Recalculate schedule |
| [Date] | Restored Remaining Duration | Correct unfinished activity status | [Observed result] | Reassess metric |

## If Results Do Not Improve

If results do not improve, check whether progress updates are imported, copied, or manually edited inconsistently. Review whether Actual Finish dates are missing from the update workflow or whether users are setting Remaining Duration to 0 without completing activities.

Escalate unresolved items when they affect critical, near-critical, earned value, client reporting, payment, or handover-related work.

## Maintenance

Review this metric during every update cycle before issuing reports. It should be part of the standard update validation alongside actual dates, remaining duration, percent complete, and activity status checks.

## Summary Checklist

- [ ] Current result reviewed
- [ ] Target threshold confirmed
- [ ] Data Date confirmed
- [ ] Main issue identified
- [ ] Completed activities marked correctly
- [ ] Actual Finish dates entered where needed
- [ ] Remaining Duration restored where work is incomplete
- [ ] Import or update workflow checked
- [ ] Schedule recalculated
- [ ] Results monitored
- [ ] Assessment repeated
- [ ] Next steps documented

## Related Content
- [Overview](01_overview_template.md)
- [Blog Article](03_blog_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
