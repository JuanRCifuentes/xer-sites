---
title: "Missing Dependencies - Blog Article"
seoTitle: "Missing Dependencies in Primavera P6"
description: "Learn why missing dependencies in Primavera P6 affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Missing Dependencies"
  - "Primavera P6 Missing Dependencies"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "en/blog/missing-dependencies-primavera-p6"
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
  - "01_metrics_en/21_missing_dependencies/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---

Dependencies are the backbone of a CPM schedule. They explain how work moves from one activity to the next, what must happen before work can begin, and what depends on each activity being completed. When dependencies are missing, the schedule may still calculate, but the result is harder to trust.

This metric identifies activities with missing dependency logic in Primavera P6. It covers activities with no predecessors, activities with no successors, and isolated activities that have neither. These are often called open starts and open finishes. A few may be valid, but most should be reviewed.

An activity with no predecessor can start without any logical requirement from earlier work. That may be acceptable for an approved project start milestone or an externally authorized start. For normal project work, it is usually a warning sign. Construction, engineering, procurement, testing, and handover activities normally depend on something: access, design release, material delivery, prior installation, inspection, permit approval, or another project condition.

An activity with no successor can finish without passing its result to any other activity. That may be acceptable for a final project completion milestone. But for most activities, the question is simple: what does this work enable? If nothing depends on it, the activity may be missing follow-on logic, may be obsolete, or may not be properly integrated into the schedule.

Isolated activities are the clearest concern. If an activity has no predecessor and no successor, it is not really part of the CPM network. It may sit in the file, carry dates, and appear in reports, but it is not helping the schedule explain the sequence of work.

Missing dependencies affect more than logic quality scores. They can distort start dates, finish dates, float values, and the critical path. An open start may drift to the Data Date or start too early because nothing is holding it back. An open finish may show float that does not reflect the impact of the work on the rest of the project. During PMO or client review, these gaps make it harder to explain why dates are credible.

The practical review starts with a P6 layout that includes Activity ID, Activity Name, WBS, Activity Type, Activity Status, Start, Finish, Total Float, Calendar, constraints, predecessors, and successors. Filter for activities with no predecessors, no successors, and neither. Then separate valid exceptions from items that need correction.

Valid exceptions should be limited. The approved project start may not need a predecessor. The final completion milestone may not need a successor. Some external interface milestones may represent work controlled outside the schedule. These exceptions should be documented so reviewers do not have to guess.

For open starts, add predecessor logic that reflects the real condition required before the work can begin. This may be a prior construction activity, design approval, material delivery, access release, inspection, permit, or interface handover. The relationship should describe the actual dependency, not just connect the activity to pass a check.

For open finishes, add successor logic that represents what follows. The successor may be another work activity, testing, commissioning, turnover, closeout, a milestone, or a downstream package. The point is to show how the result of the activity affects the rest of the plan.

For isolated activities, first confirm whether the activity is still needed. If it is valid scope, connect it properly. If it is obsolete, duplicated, or left behind from an old update, remove or close it according to the project controls procedure.

The target threshold should be zero unresolved activities. This does not mean every missing predecessor or successor is automatically wrong. It means every exception must be intentional and documented. Unexplained missing dependencies weaken the schedule network.

Cleaning up this metric improves the schedule immediately. It makes the critical path more reliable, float easier to interpret, and lookahead plans more useful. It also helps the project team see whether the schedule is a real model of the work or just a list of activities with dates.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
