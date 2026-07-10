---
title: "Hard Constraints - Blog Article"
seo_title: "Hard Constraints in Primavera P6"
meta_description: "Learn why hard constraints in Primavera P6 affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Hard Constraints"
  - "Primavera P6 Hard Constraints"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "P6 constraints"
  - "Primavera P6 blog"
slug: "blog-article-hard-constraints-primavera-p6"
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
  - "01_metrics_en/19_hard_constraints/01_overview_template.md"
  - "01_metrics_en/19_hard_constraints/02_guide_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# Hard Constraints in Primavera P6

Constraints are not automatically wrong. In a real project schedule, some dates are imposed by contract, permits, access windows, shutdown periods, regulatory requirements, or client decisions. The problem begins when constraints become a shortcut for schedule logic.

This metric focuses on hard constraints in Primavera P6, especially Mandatory Start and Mandatory Finish. These constraints can strongly control activity dates and may override the behavior of the normal CPM network. If they are not justified, they can make the schedule look controlled while actually hiding weak logic.

A good CPM schedule should explain how work moves from one activity to the next. Relationships, durations, calendars, and status updates should calculate the forecast. A hard constraint interrupts that story. It tells the software that an activity must start or finish on a specific date, even if the surrounding logic would calculate something different.

There are valid reasons to use a hard constraint. A project may have an owner-directed access date, a regulatory hold point, a permit release, a fixed outage window, or a contract milestone that cannot move without formal approval. In those cases, the constraint should be visible and documented. The reviewer should be able to see why the date exists, who approved it, and whether it is still current.

The risk is that hard constraints are often used for less defensible reasons. A scheduler may enter a Mandatory Finish to preserve a target milestone. A recovery plan may use hard constraints to force dates into a desired window. A copied fragnet may bring old constraints into a new schedule. Over time, these dates can remain in the file long after their original reason has disappeared.

Hard constraints can distort total float and critical path reporting. If an activity is forced to a date, P6 may show float values that reflect the imposed date rather than the real flexibility of the work. The critical path may shift toward a constrained date instead of showing the true sequence of work driving project completion. This makes PMO review, client reporting, and delay analysis harder to defend.

The practical review starts with a P6 layout that includes Activity ID, Activity Name, WBS, Activity Status, Start, Finish, Constraint Type, Constraint Date, Total Float, critical or longest path status, predecessors, and successors. Filter for hard constraint types. Then review the critical and near-critical activities first because those have the highest reporting impact.

For each hard constraint, ask a few direct questions. What is the source of the date? Is it contractual, regulatory, or externally imposed? Is the constraint replacing missing logic? Is it forcing a management target instead of modeling the real sequence? Is the reason documented and approved?

If the hard constraint is not required, remove it and correct the schedule logic. Add missing predecessors or successors, review activity duration, check calendars, and confirm that the forecast date is calculated by the network. If a target date still needs visibility, consider whether a milestone, deadline, softer constraint, or report note would communicate the target without forcing the CPM calculation.

If the hard constraint is required, keep it only with documentation. The schedule should show the basis for the constraint, the approving party, and the review owner. It should also be checked each update cycle to confirm the date is still valid.

The target threshold for this metric should be zero unexplained hard constraints. That wording is important. Some hard constraints may remain, but none should be mysterious. Every hard constraint should either be removed or explained clearly enough that a scheduler, PMO reviewer, or client can understand why it exists.

Cleaning up hard constraints improves schedule credibility. It allows the CPM network to do its job, makes float values easier to interpret, and gives project teams a clearer view of what is truly driving the work. A schedule with fewer unexplained hard constraints is usually easier to trust, easier to review, and easier to defend.

## Related Content
- [Overview](01_overview_template.md)
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
