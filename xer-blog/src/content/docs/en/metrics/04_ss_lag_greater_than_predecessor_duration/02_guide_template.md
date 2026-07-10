---
title: "SS Lag Greater Than Predecessor Duration - Improvement Guide"
seo_title: "How to Fix SS Lag Greater Than Predecessor Duration in Primavera P6"
meta_description: "Identify and correct start-to-start lag greater than predecessor duration in Primavera P6 using schedule logic checks, validation, and reassessment steps."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "SS Lag Greater Than Predecessor Duration"
  - "Primavera P6 SS Lag Greater Than Predecessor Duration"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
slug: "improvement-guide-ss-lag-greater-than-predecessor-duration-primavera-p6"
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
  - "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/01_overview_template.md"
  - "01_metrics_en/04_ss_lag_greater_than_predecessor_duration/03_blog_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# SS Lag Greater Than Predecessor Duration - Improvement Guide
## Purpose

This guide helps schedulers review and correct Start-to-Start relationships where the lag is greater than the predecessor activity duration. It supports clearer CPM logic by replacing excessive SS lag with relationship logic that better represents the real work sequence.

## Before You Start

Gather the following information before taking action:

- Current assessment result for this metric.
- List of SS relationships where lag is greater than predecessor duration.
- Predecessor and successor Activity IDs, names, WBS, durations, calendars, and status.
- Relationship lag, relationship type, and any related constraints.
- Schedule calculation settings and calendar basis used for lag.
- Field, engineering, procurement, or handover logic explaining the intended dependency.

## Understand Your Result

A strong result is zero unresolved SS relationships where lag exceeds predecessor duration.

An acceptable result may include documented exceptions, but these should be rare. Long SS lag often indicates that the relationship type does not match the dependency being modeled.

A weak result means the schedule contains multiple start-to-start links where the successor starts only after a delay longer than the predecessor duration. This may hide finish-driven logic behind an SS relationship.

## Improvement Goal

The target is 0 unresolved SS relationships with lag greater than predecessor duration.

The goal is to confirm whether each relationship should remain SS, be converted to FS or FF logic, have the lag reduced, or be documented as a valid exception.

## Action Plan

### Step 1: Identify the Main Issue

Create a P6 layout or export that lists SS relationships where lag is greater than the predecessor duration. Include predecessor and successor Activity ID, Activity Name, WBS, Original Duration, Remaining Duration, Relationship Type, Lag, Calendar, Total Float, and Activity Status.

Review each relationship and ask:

- Why does the successor start after such a long delay?
- Does the successor actually depend on the predecessor starting, or on the predecessor finishing?
- Is the lag greater than the predecessor original duration, remaining duration, or both?
- Is the lag being used to model procurement, curing, review time, access, or another real waiting period?
- Would an FS or FF relationship make the dependency clearer?

```mermaid
flowchart TD
    A["SS relationship with lag greater than predecessor duration"] --> B{"Is the dependency truly start-based?"}
    B -- "No" --> C["Replace with valid FS or FF logic"]
    B -- "Yes" --> D{"Is the lag justified and measurable?"}
    D -- "No" --> E["Reduce or remove lag"]
    D -- "Yes" --> F["Document approved exception"]
    C --> G["Recalculate and reassess"]
    E --> G
    F --> G
```

### Step 2: Apply the Recommended Fixes

If the successor should begin after the predecessor finishes, replace the SS relationship with an FS relationship. If the work can overlap but the successor cannot finish until the predecessor finishes, use FF logic.

If the relationship is truly start-based, review the lag value. Reduce excessive lag where it was used as a rough placeholder or inherited from copied logic. If the lag represents a real waiting period, confirm that the unit, calendar, and explanation are correct.

Avoid using long lag as a substitute for activities that should be visible in the schedule. If the lag represents review, curing, delivery, mobilization, or approval time, consider modeling that work as a separate activity.

### Step 3: Remove Common Blockers

Common blockers include copied logic from previous schedules, hidden waiting periods, calendar confusion, and pressure to keep the network simple. Resolve these by confirming the intended dependency with the responsible owner.

Another blocker is treating lag as harmless. Long lag can be difficult to review, can hide risk, and can make delay analysis harder because the waiting period is not visible as an activity.

### Step 4: Validate the Changes

Recalculate the schedule after corrections. Re-run the metric and confirm that each remaining item is either corrected or documented as an approved exception.

Review total float, longest path, critical path, and near-term milestones. If relationship changes move key dates, communicate the result to the project controls lead or PMO reviewer.

## Improvement Schedule

### Day 1: Review and Diagnose

Run the metric, confirm the affected relationship list, and separate items into wrong relationship type, excessive lag, hidden activity, calendar issue, and possible exception.

### Days 2-3: Implement Priority Actions

Correct critical and near-critical relationships first. Convert SS logic to FS or FF where appropriate, reduce unjustified lag, and document valid exceptions.

### Days 4-5: Monitor Early Results

Recalculate the schedule and review movement in float, longest path, and milestone dates.

### Day 6: Final Adjustments

Resolve remaining uncertain items with the responsible discipline, package owner, or construction lead.

### Day 7: Reassess and Compare

Run the assessment again and compare the result against the target threshold.

## Tracking Progress

Use a simple tracker to manage corrections and approvals.

| Date | Action Taken | Expected Impact | Result / Observation | Next Step |
| --- | --- | --- | --- | --- |
| [Date] | Reviewed SS lag greater than predecessor duration | Identify weak or unclear logic | [Observed result] | Assign corrections |
| [Date] | Converted relationship to FS or FF | Improve CPM logic clarity | [Observed result] | Recalculate schedule |
| [Date] | Reduced or documented lag | Improve review traceability | [Observed result] | Reassess metric |

## If Results Do Not Improve

If results do not improve, check whether the same relationship patterns are repeated in a specific WBS area, discipline, or copied schedule section. Repeated findings may indicate that the team is using SS lag as a standard shortcut instead of modeling real dependencies.

Escalate unresolved items when they affect critical, near-critical, contractual, procurement, approval, or handover-related work.

## Maintenance

Review this metric during each schedule update and before baseline approval. Pay special attention after copied schedule development, resequencing, recovery planning, or major scope changes.

## Summary Checklist

- [ ] Current result reviewed
- [ ] Target threshold confirmed
- [ ] Main issue identified
- [ ] SS relationships reviewed
- [ ] Excessive lag corrected or justified
- [ ] FS or FF replacements applied where needed
- [ ] Hidden work modeled where appropriate
- [ ] Schedule recalculated
- [ ] Results monitored
- [ ] Assessment repeated
- [ ] Next steps documented

## Related Content
- [Overview](01_overview_template.md)
- [Blog Article](03_blog_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
