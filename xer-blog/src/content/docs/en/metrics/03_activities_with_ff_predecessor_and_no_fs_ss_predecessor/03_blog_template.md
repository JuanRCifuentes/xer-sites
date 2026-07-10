---
title: "Activities with FF Predecessor and No FS/SS Predecessor - Blog Article"
seoTitle: "Activities with FF Predecessor and No FS/SS Predecessor in Primavera P6"
description: "Learn why FF-predecessor activities with no FS/SS predecessor weaken Primavera P6 logic, float, and project controls reporting."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Activities with FF Predecessor and No FS/SS Predecessor"
  - "Primavera P6 Activities with FF Predecessor and No FS/SS Predecessor"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "en/blog/activities-with-ff-predecessor-and-no-fs-ss-predecessor-primavera-p6"
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
  - "01_metrics_en/03_activities_with_ff_predecessor_and_no_fs_ss_predecessor/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---
## Title

Activities with FF Predecessors and No FS or SS Predecessors

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who assess Primavera P6 schedule logic.

## Opening Hook

Finish-to-Finish logic can be useful when two activities need to complete together. But if an activity has an FF predecessor and no FS or SS predecessor, its finish may be controlled while its start remains weakly defined.

## Introduction

In Primavera P6, an FF relationship ties the finish of one activity to the finish of another. This can be appropriate when work overlaps but one activity cannot finish until another activity finishes.

The risk appears when an activity has FF predecessors only. If no predecessor controls when the activity can start, the schedule may allow the activity to begin earlier than the real work sequence supports.

This metric identifies activities with at least one FF predecessor and no FS or SS predecessor. The target is zero unresolved activities.

## What This Parameter Means

This parameter checks whether an activity's start is represented in the logic network. FF logic connects finishes. FS and SS logic can connect upstream work to the activity start.

An activity can have valid FF logic and still need start-driving logic. For example, testing may need to finish with installation, but it cannot start until a portion of installation is available. In that case, an SS relationship may be needed in addition to the FF relationship.

A high result suggests that activities may be linked only by finish conditions. A low result suggests that activity starts are better represented in the CPM network.

## Why This Subject Matters

Schedule logic should show both how work starts and how work finishes. If an activity's start is not connected to upstream work, early dates may be unrealistic.

This can affect total float, longest path, milestone confidence, and short-term planning. It can also make overlapping work appear easier to start than it really is.

## Common Causes of Poor Results

- Overuse of FF relationships to model overlapping work
- Missing SS relationships for work that can start after partial progress
- Missing FS relationships for work that requires full predecessor completion
- Copied schedule logic from older projects
- Lags used instead of clearer start-driving logic
- Lack of field input on the real start condition

## How to Improve the Result

### 1. Review the Predecessor Logic

Filter for activities with FF predecessors and no FS or SS predecessors. Review the predecessor list, relationship types, lags, activity status, and total float.

Ask what must happen before the activity can start. If the answer is a predecessor start, partial release, full completion, approval, access, or handover, the schedule likely needs start-driving logic.

### 2. Add the Right Start-Driving Relationship

Use FS when the activity cannot start until the predecessor finishes. Use SS when the activity can start after the predecessor starts or reaches a defined point of progress.

Avoid adding logic only to clear the metric. The relationship should reflect the actual execution sequence.

### 3. Document Valid Exceptions

Some activities may be valid exceptions. Level-of-effort, support, or administrative activities may not need start-driving predecessors. In those cases, document the reason so the item does not remain an unexplained schedule quality concern.

## Example Scenario

A schedule has an activity called "Final testing" with an FF predecessor from "Complete installation." The relationship is useful because testing cannot finish until installation is complete.

However, there is no FS or SS predecessor tied to the testing start. If the schedule calculates early dates, testing may appear able to start before enough installation work is available.

The scheduler adds an SS relationship from "Complete installation" to "Final testing" with an appropriate lag or progress point. The FF relationship remains to protect final completion. Now the schedule shows both when testing can start and when it can finish.

## Recommended Improvement Schedule

- Day 1: Run the metric and identify affected activities.
- Days 2-3: Review critical and near-critical items first.
- Days 4-5: Add valid FS or SS logic and remove misleading lag where needed.
- Day 6: Confirm exceptions and review schedule movement.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid treating every FF relationship as a problem. The issue is not FF logic itself; the issue is missing start-driving logic when the start matters.

Avoid replacing all FF relationships with FS relationships. Overlap may be realistic and useful.

Avoid leaving exceptions undocumented. Reviewers need to know whether an item is intentional or unfinished logic development.

## Key Takeaways

- FF logic controls finish alignment, not activity start.
- Activities with FF predecessors and no FS or SS predecessors may start earlier than the real sequence supports.
- SS logic is often useful when overlapping work needs a clear start condition.
- The target is zero unresolved activities.
- Document valid exceptions clearly.

## Conclusion

This metric helps schedulers confirm that activity starts are represented in the network. FF relationships can be valid, but they should not leave important activity starts disconnected from upstream work.

Reviewing this metric improves CPM quality, float reliability, and confidence in the longest path. It also helps PMO reviewers distinguish realistic overlapping logic from weak or incomplete sequencing.

## Call to Action

Review activities with FF predecessors and no FS or SS predecessors in your next Primavera P6 schedule update. For each one, ask whether the activity start should be driven by upstream work. If it should, add valid start-driving logic. If it should not, document the exception.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
