---
title: "Redundant Logic - Blog Article"
seoTitle: "Redundant Logic in Primavera P6"
description: "Learn why redundant logic affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Redundant Logic"
  - "Primavera P6 Redundant Logic"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "en/blog/redundant-logic-primavera-p6"
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
  - "01_metrics_en/06_redundant_logic/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---
## Title

Redundant Logic in Primavera P6 Schedules

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who assess Primavera P6 schedule logic.

## Opening Hook

More logic does not always mean better logic. A schedule can look well connected while carrying duplicate relationships, repeated predecessor paths, and dependencies that do not add real control.

## Introduction

Logic is the backbone of a CPM schedule. It shows how work flows from one activity to the next and allows Primavera P6 to calculate dates, float, and the critical or longest path.

Redundant logic appears when a relationship repeats a dependency that is already represented somewhere else in the network. It may be an exact duplicate, a second relationship between the same two activities, or a direct link that repeats an upstream path.

This metric identifies redundant logic patterns that should be reviewed and removed unless they are clearly justified. The target is zero unresolved relationships.

## What This Parameter Means

This parameter checks whether the schedule contains relationships that do not add meaningful sequencing. Common examples include the same predecessor connected to the same successor more than once, such as FS plus SS or FS plus FF.

The metric also looks for inherited predecessor logic. For example, if Activity A drives Activity B, and Activity B drives Activity C, a direct relationship from Activity A to Activity C may be unnecessary unless it represents a separate real dependency.

SS plus FF between the same two activities may be acceptable when overlap is intentional. The SS relationship can control when the successor starts, while the FF relationship controls when it can finish. The key is whether both relationships represent real conditions.

## Why This Subject Matters

Redundant logic makes a schedule harder to understand. It adds noise to the network and can make it difficult to see which relationship is actually controlling the dates.

It can also distort float, create false driving paths, and make delay analysis more difficult. During PMO or schedule quality reviews, redundant logic raises questions about whether the network was built intentionally or assembled through copied and accumulated links.

## Common Causes of Poor Results

- Copied schedule sections that were not cleaned up
- Multiple relationship types added between the same two activities
- FS plus SS or FS plus FF used to force dates
- Direct links added even though the dependency already exists through a chain
- Relationships added during updates without checking existing logic
- Unnecessary dependencies used to make the schedule appear more connected

## How to Improve the Result

### 1. Find Duplicate Relationship Patterns

Start by identifying activities connected by more than one relationship. Pay close attention to FS plus SS and FS plus FF combinations. In many cases, one relationship is doing the real work and the other is redundant.

Review SS plus FF combinations more carefully. They can be valid when both start and finish controls are needed for overlapping work.

### 2. Check Inherited Predecessor Logic

Look for activities that have the same predecessor and relationship type as their own predecessor. If the same dependency already exists through the path, the direct relationship may not be needed.

This review can also be extended several steps back through the network. The question is simple: does this direct relationship add a real dependency, or does it repeat a path that already exists?

### 3. Remove Unnecessary Dependencies

Remove relationships that do not represent access, approval, handover, construction sequence, procurement sequence, risk control, or contractual logic.

After removing a relationship, recalculate the schedule and review float, driving logic, longest path, and milestone dates. If a date changes unexpectedly, investigate whether the removed relationship was actually valid or whether a clearer relationship is needed.

## Example Scenario

A schedule has Activity A linked to Activity B with an FS relationship and also an SS relationship. The scheduler added the SS link during an update to force B to start earlier, but the FS link still controls the real handover.

The review shows that the SS relationship does not represent a real start condition. It only adds confusion. The scheduler removes the SS link and keeps the FS relationship.

In another area, Activity A drives Activity B, and Activity B drives Activity C. Activity A is also directly linked to Activity C with the same relationship type. The team confirms there is no separate handover or access condition. The direct A-to-C link is removed, and the network remains logically correct.

## Recommended Improvement Schedule

- Day 1: Run the metric and group findings by duplicate pairs, inherited logic, and unnecessary dependencies.
- Days 2-3: Review critical and near-critical relationships first.
- Days 4-5: Remove duplicate logic and recalculate the schedule.
- Day 6: Confirm exceptions and review schedule movement.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid removing relationships only because they look duplicated. Confirm the real work sequence first.

Avoid keeping duplicate links because they appear harmless. Redundant logic can still distort float and driving path analysis.

Avoid treating SS plus FF as automatically wrong. It may be valid when both start and finish controls are needed.

## Key Takeaways

- Redundant logic repeats a dependency that is already represented elsewhere.
- FS plus SS or FS plus FF between the same activities usually needs review.
- SS plus FF can be valid when both overlap start and finish controls are real.
- Inherited predecessor logic can create unnecessary direct links.
- The target is zero unresolved redundant relationships.

## Conclusion

Redundant logic does not improve schedule quality. It makes the network harder to read, harder to update, and harder to defend.

Reviewing this metric helps schedulers keep the CPM network clean and intentional. The best schedule logic is not the most complicated network; it is the clearest network that accurately represents the work.

## Call to Action

Review redundant logic in your next Primavera P6 schedule update. For each flagged relationship, ask whether it adds a real dependency or only repeats logic already present in the network. Remove what is unnecessary and document what is intentionally retained.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
