---
title: "Activities with SS Successor and No FS/FF Successor - Blog Article"
seo_title: "Activities with SS Successor and No FS/FF Successor in Primavera P6"
meta_description: "Learn why SS-successor activities with no FS/FF successor weaken Primavera P6 logic, float, and project controls reporting."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Activities with SS Successor and No FS/FF Successor"
  - "Primavera P6 Activities with SS Successor and No FS/FF Successor"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "blog-article-activities-with-ss-successor-and-no-fs-ff-successor-primavera-p6"
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
  - "01_metrics_en/02_activities_with_ss_successor_and_no_fs_ff_successor/01_overview_template.md"
  - "01_metrics_en/02_activities_with_ss_successor_and_no_fs_ff_successor/02_guide_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# Activities with SS Successor and No FS/FF Successor
## Title

Activities with SS Successors and No FS or FF Successors

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who assess Primavera P6 schedule logic.

## Opening Hook

Start-to-Start logic can be useful. It allows overlapping work and helps model real field execution. But when an activity has an SS successor and no FS or FF successor, its finish may stop mattering to the rest of the schedule.

## Introduction

In Primavera P6, relationship type matters. A Start-to-Start relationship allows a successor to start after the predecessor starts. This can be appropriate when work overlaps, such as starting installation after an area is partially released.

The risk appears when the predecessor has SS successors only. If no successor depends on the predecessor finishing, then extending the predecessor duration may not delay downstream work. The schedule may look healthy even though an activity is taking longer than planned.

This metric identifies activities with at least one SS successor and no FS or FF successor. The target is zero unresolved activities.

## What This Parameter Means

This parameter checks whether an activity's finish is represented in the logic network. SS logic connects starts. FS and FF logic connect an activity finish to a later start or finish.

An activity can have valid SS logic and still need finish-based logic. For example, a successor may start after the first portion of work begins, but it may not be able to finish until the predecessor is complete. In that case, an FF relationship may better protect the schedule logic.

A high result suggests that activities may be linked only by start conditions. A low result suggests that activity completion is better represented in the CPM network.

## Why This Subject Matters

Schedule logic should show both how work starts and how work finishes. If an activity's finish is not connected to anything, delays to that activity may not move downstream dates.

This can affect total float, longest path, milestone confidence, and delay analysis readiness. It can also create a misleading lookahead because partially started work appears to release downstream activities without showing what still depends on completion.

## Common Causes of Poor Results

- Overuse of SS relationships to model overlapping work
- Missing FF relationships for work that must finish together
- Missing FS relationships for handover, inspection, or turnover steps
- Copied schedule logic from older projects
- Lags used instead of clearer finish-driven logic
- Lack of field input on the real completion dependency

## How to Improve the Result

### 1. Review the Successor Logic

Filter for activities with SS successors and no FS or FF successors. Review the successor list, relationship types, lags, activity status, and total float.

Ask what depends on the activity finishing. If the answer is a successor start, handover, inspection, or completion milestone, the schedule likely needs finish-based logic.

### 2. Add the Right Finish-Based Relationship

Use FS when the next activity cannot start until this activity finishes. Use FF when work can overlap but the successor cannot finish until this activity finishes.

Avoid adding logic only to clear the metric. The relationship should reflect the actual execution sequence.

### 3. Document Valid Exceptions

Some activities may be valid exceptions. Level-of-effort, support, or administrative activities may not need finish-driven successors. In those cases, document the reason so the item does not remain an unexplained schedule quality concern.

## Example Scenario

A schedule has an activity called "Install underground piping" with an SS successor to "Backfill trench." The relationship is useful because backfill can begin after the first section of pipe is installed.

However, there is no FS or FF successor tied to the piping activity finish. If the piping work extends by five days, the backfill activity may still progress in the schedule without being held by final pipe completion.

The scheduler adds an FF relationship from "Install underground piping" to "Backfill trench." Now the work can still overlap, but backfill completion is tied to piping completion. The schedule better reflects the real field dependency.

## Recommended Improvement Schedule

- Day 1: Run the metric and identify affected activities.
- Days 2-3: Review critical and near-critical items first.
- Days 4-5: Add valid FS or FF logic and remove misleading lag where needed.
- Day 6: Confirm exceptions and review schedule movement.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid treating every SS relationship as a problem. The issue is not SS logic itself; the issue is missing finish-driven logic when the finish matters.

Avoid replacing all SS relationships with FS relationships. Overlap may be realistic and useful.

Avoid leaving exceptions undocumented. Reviewers need to know whether an item is intentional or unfinished logic development.

## Key Takeaways

- SS logic controls starts, not finishes.
- Activities with SS successors and no FS or FF successors may stop influencing downstream dates when their duration changes.
- FF logic is often useful when overlapping work must finish in sequence.
- The target is zero unresolved activities.
- Document valid exceptions clearly.

## Conclusion

This metric helps schedulers confirm that activity completion is represented in the network. SS relationships can be valid, but they should not leave important activity finishes disconnected from the rest of the schedule.

Reviewing this metric improves CPM quality, float reliability, and confidence in the longest path. It also helps PMO reviewers distinguish realistic overlapping logic from weak or incomplete sequencing.

## Call to Action

Review activities with SS successors and no FS or FF successors in your next Primavera P6 schedule update. For each one, ask whether the activity finish should drive downstream work. If it should, add valid finish-based logic. If it should not, document the exception.

## Related Content
- [Overview](01_overview_template.md)
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
