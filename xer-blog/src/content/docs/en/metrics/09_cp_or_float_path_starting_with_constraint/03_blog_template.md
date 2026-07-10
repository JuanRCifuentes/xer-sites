---
title: "Critical Path or Float Path Starting with Constraint - Blog Article"
seoTitle: "Critical Path or Float Path Starting with Constraint in Primavera P6"
description: "Learn why critical path or float path starting with constraint affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Critical Path or Float Path Starting with Constraint"
  - "Primavera P6 Critical Path or Float Path Starting with Constraint"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "P6 constraints"
  - "critical path and float"
slug: "en/blog/cp-or-float-path-starting-with-constraint-primavera-p6"
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
  - "01_metrics_en/09_cp_or_float_path_starting_with_constraint/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---
## Title

Critical Path or Float Path Starting with a Constraint

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who assess Primavera P6 critical path and float path quality.

## Opening Hook

A critical path should tell the story of the work. If the path starts with a constraint, it may be telling the story of an imposed date instead.

## Introduction

In Primavera P6, constraints can be useful when a date is externally required. A project start milestone, notice to proceed, permit release, or owner access date may be legitimate.

The problem appears when a critical path or float path starts with a constrained activity that is not the approved project start. In that case, the path may be driven by a date control rather than by predecessor logic.

This metric identifies critical path or float path chains that begin with a constrained activity, excluding the approved project start. The target is zero unresolved paths.

## What This Parameter Means

This parameter checks the first activity on a critical path or selected float path. If that first activity has a constraint, the reviewer should ask whether the path is truly logic-driven.

The approved project start is usually a valid exception. Every project needs a starting point. But a constrained path start downstream in the schedule may indicate missing logic, forced dates, or an external requirement that needs documentation.

A high result suggests that key paths may be controlled by constraints rather than CPM logic. A low result suggests that path starts are better supported by real sequencing.

## Why This Subject Matters

Critical path and float path reviews are used for forecasting, PMO reporting, and delay analysis. If a path begins with an unnecessary constraint, the path may not explain what is actually driving the work.

This can distort float, hide missing predecessor logic, and make the schedule harder to defend. It can also create confusion when different reviewers try to understand why a milestone is critical.

## Common Causes of Poor Results

- Constraints inherited from old baselines
- Constraints used to force target dates
- Missing predecessor or interface logic
- External access, permit, or owner dates not documented
- Recovery plans that leave temporary constraints in place
- Confusion between project start constraints and downstream constraints

## How to Improve the Result

### 1. Confirm the Path Start

Run the critical path or float path report and identify the first activity on each path. Check whether that activity has a primary constraint, constraint date, expected date, or other date control.

If the constrained activity is the approved project start, document it as a valid exception.

### 2. Review the Constraint Basis

For downstream constrained path starts, ask who required the date and why. Valid reasons may include notice to proceed, client access, permit release, regulatory hold point, or contractual interface.

If there is no clear external reason, the constraint should be challenged.

### 3. Restore Logic-Driven Sequencing

If predecessor logic is missing, add valid logic that reflects the real dependency. If the constraint is unnecessary, remove it and recalculate the schedule.

After recalculation, review whether the critical path or float path changed. A meaningful change may reveal that the previous path was date-driven rather than logic-driven.

## Example Scenario

A project schedule shows the critical path beginning with "Start equipment installation." The activity has a Start On or After constraint, but it is not the project start.

During review, the scheduler finds that the constraint was added during a recovery plan to force the installation sequence into a target window. The real predecessor logic from material delivery and area handover was missing.

The scheduler removes the constraint, adds the missing delivery and handover logic, and recalculates the schedule. The critical path changes, but it now explains the real drivers of the work.

## Recommended Improvement Schedule

- Day 1: Run the metric and identify constrained path-start activities.
- Days 2-3: Confirm project-start exceptions and external constraint basis.
- Days 4-5: Remove unnecessary constraints and add missing logic.
- Day 6: Review path movement and document approved exceptions.
- Day 7: Reassess the metric and compare the result against the threshold.

## Mistakes to Avoid

Avoid assuming every constrained path start is valid. The project start may be valid, but downstream constraints need review.

Avoid removing constraints without understanding their source. Some constraints reflect real contractual or external requirements.

Avoid accepting a critical path without checking whether it is logic-driven.

## Key Takeaways

- A critical or float path should usually begin from logic, not an unnecessary constraint.
- The approved project start is a valid exception.
- Downstream constrained path starts may indicate missing logic or forced dates.
- The target is zero unresolved paths.
- Valid external constraints should be documented.

## Conclusion

This metric helps schedulers and reviewers test whether key paths are logic-driven. Constraints are not always wrong, but they must be justified when they start a critical or float path.

Managing this metric improves path credibility, float reliability, and confidence in PMO reporting and delay analysis.

## Call to Action

Review the first activity on each critical path or float path in your next Primavera P6 update. If the path starts with a constraint, confirm whether it is the approved project start, a valid external requirement, or an issue that needs correction.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
