---
title: "Unusual Relationships - Blog Article"
seoTitle: "Unusual Relationships in Primavera P6"
description: "Learn why unusual relationships in Primavera P6: milestones, loe, and relationship type checks affects Primavera P6 schedule credibility, CPM logic, float."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Unusual Relationships"
  - "Primavera P6 Unusual Relationships"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "en/blog/unusual-relationships-primavera-p6"
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
  - "01_metrics_en/14_unusual_relations/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---

Relationship logic is one of the easiest parts of a schedule to copy quickly and one of the hardest parts to defend later. A relationship may look harmless in a P6 table, but the activity type on each side matters. A relationship that makes sense between two normal task activities may be awkward or misleading when one side is a Start Milestone, Finish Milestone, or Level of Effort activity.

This metric focuses on unusual relationships: relationship patterns that should be reviewed because they often do not match the scheduling purpose of the activity type. The goal is not to reject every unusual relationship automatically. The goal is to find logic that needs a second look before it affects milestone dates, float, critical path reporting, or client confidence.

The first group of findings involves Finish Milestones. A Finish Milestone represents a completion event. It is usually used to mark that a package, phase, handover, approval, or contractual point has been achieved. When a Finish Milestone has an SS or SF successor, the logic may be saying that a later activity can start because the finish event has started, or can finish because the finish event starts. That is usually difficult to explain. A Finish Milestone with an SS predecessor can also be suspicious because the milestone completion may be tied to the start of prior work rather than the completion condition that actually proves the milestone has been reached.

The second group involves Start Milestones. A Start Milestone represents the beginning of an event, phase, access window, or authorization. If a Start Milestone has an FF or SF predecessor, the start event may be tied to a predecessor finish in a way that does not clearly describe the required start condition. If a Start Milestone has an FS or FF successor, the milestone may be acting like a task finish point rather than a start event. Sometimes this happens because the milestone type was selected incorrectly. Other times, the relationship type was copied from another part of the schedule and never reviewed.

The third group involves LOE activities. LOE activities are used to represent support, supervision, management, inspection, or other effort that spans other work. They are not normally meant to drive discrete production activities in the same way a normal task does. When an LOE activity has an FS or SF relationship, the schedule reviewer should ask whether the LOE is controlling work that should instead be driven by physical work activities, access constraints, approvals, or contractual milestones.

In practice, this metric is useful because it forces a clean conversation about intent. What is this milestone meant to represent? Is this LOE summarizing work or driving it? Does this relationship describe real sequencing, or is it only there to make a date behave?

Consider a Finish Milestone called "Mechanical Completion." If it has an SS successor to "Start Commissioning," the schedule may be implying that commissioning can start when mechanical completion starts. That does not fit the milestone concept very well. If commissioning can begin after a partial turnover, the better fix may be to add a discrete turnover activity or a more specific milestone. If commissioning truly depends on full mechanical completion, an FS relationship from the completion milestone to commissioning is easier to understand and defend.

Now consider an LOE activity called "Project Management Support" with an FS relationship to a construction activity. That relationship may make the support activity a driver of field work, which is usually not the intent. A scheduler should check whether the construction activity should instead be driven by engineering, procurement, access, permits, predecessor construction, or another discrete condition. The LOE may need different start and finish drivers so it spans the work without controlling it incorrectly.

The best review method is simple. Build a P6 layout that shows Activity ID, Activity Name, Activity Type, predecessor, successor, relationship type, lag, start, finish, total float, and critical or longest path status. Filter for milestones and LOE activities, then isolate the relationship patterns flagged by the metric. Review the critical and near-critical items first because those can affect project reporting immediately.

Not every flagged item will be wrong. Some projects have client-specific logic rules or unusual reporting requirements. Some schedule models use special milestones to interface with other systems. Those cases should be rare, approved, and documented. If a reviewer cannot explain the relationship in plain scheduling language, it probably needs to be corrected.

A good target for this metric is zero unresolved relationships. The important word is unresolved. The schedule team should either correct the relationship, revise the activity type, add a better activity to represent the real condition, or document the approved exception. Leaving these relationships unexplained weakens the schedule because it makes the logic network harder to trust.

Unusual relations are often small symptoms of larger schedule quality problems: copied logic, unclear milestone definitions, misuse of LOE activities, or a habit of forcing dates through relationship types. Cleaning them up improves more than a metric score. It makes the schedule easier to review, easier to explain, and more reliable for PMO governance and project decision-making.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
