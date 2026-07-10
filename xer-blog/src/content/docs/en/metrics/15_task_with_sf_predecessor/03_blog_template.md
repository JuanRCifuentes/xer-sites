---
title: "Task with SF Predecessor - Blog Article"
seo_title: "Task with SF Predecessor in Primavera P6"
meta_description: "Learn why task activities with start-to-finish predecessors in Primavera P6 affects Primavera P6 schedule credibility, CPM logic, float."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Task with SF Predecessor"
  - "Primavera P6 Task with SF Predecessor"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "blog-article-task-with-sf-predecessor-primavera-p6"
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
  - "01_metrics_en/15_task_with_sf_predecessor/01_overview_template.md"
  - "01_metrics_en/15_task_with_sf_predecessor/02_guide_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# Task Activities with SF Predecessors in Primavera P6

Start-to-Finish relationships are one of the least common relationship types in CPM scheduling. In Primavera P6, an SF relationship means the successor activity cannot finish until the predecessor activity starts. That can be valid in unusual cases, but it is not how most project work is sequenced.

For normal task activities, a Start-to-Finish predecessor should immediately raise a review question: what real-world condition is this relationship trying to represent? If the answer is not clear, the relationship may be weakening the schedule logic.

Most project schedules rely on three practical relationship types. Finish-to-Start is used when one activity must finish before another can start. Start-to-Start is used when activities can begin together or one start depends on another start. Finish-to-Finish is used when the completion of one activity is tied to the completion of another. These relationship types are usually easier for field teams, project managers, and reviewers to understand.

SF is different. It connects the start of a predecessor to the finish of a successor. That means the successor's finish is being held until the predecessor starts. In many construction, engineering, procurement, and commissioning schedules, that logic is hard to explain. If a task cannot finish until another task starts, the planner should be able to describe the exact operational condition behind that rule.

A common issue is copied logic. A scheduler may copy a group of activities from another project, import external logic, or apply global changes, and an SF relationship remains in the schedule without anyone noticing. The calculated dates may still look acceptable, so the relationship survives. Later, during a review, the logic path becomes difficult to defend because the relationship does not reflect the way work actually happens.

Another issue is date control. Sometimes SF logic is used with lag to make an activity finish on a desired date. This can hide the real driver. If the schedule needs a contractual date, access window, delivery condition, or handover milestone, that condition should usually be modeled directly. The schedule should not rely on a confusing relationship type simply because it produces the desired finish date.

Consider a task called "Temporary Bypass Operation" with an SF predecessor from "Start Permanent System Operation." In this case, the bypass operation cannot finish until the permanent system starts. This could be a defensible SF relationship if the bypass must remain active until the replacement system is live. Even then, the scheduler should document the reason because reviewers will reasonably question the relationship.

Now consider a normal task called "Install Cable Tray" with an SF predecessor from "Start Cable Pulling." That relationship is harder to justify. If cable tray installation must finish before cable pulling can start, FS logic from cable tray to cable pulling may be more appropriate. If the work overlaps, SS or FF logic may be clearer. The SF relationship should not remain unless it represents the actual construction sequence.

The best review method in P6 is to build a layout that includes Activity ID, Activity Name, WBS, Activity Type, predecessor ID, predecessor name, relationship type, lag, start, finish, total float, constraints, and critical or longest path status. Filter for task activities with SF predecessors. Then review the critical and near-critical findings first, because those relationships can directly affect reported project drivers.

For each finding, ask a simple set of questions. What condition is the SF relationship modeling? Would FS, SS, or FF describe the logic more clearly? Is lag being used to force a date? Is the relationship affecting critical path or milestone reporting? Is there a documented reason for keeping it?

The target threshold should be zero unresolved SF predecessor relationships on task activities. This does not mean every SF relationship is automatically wrong. It means every SF relationship must either be corrected or clearly justified. Unexplained SF logic can reduce confidence in the network because it makes the logic harder to audit and harder to communicate.

When the relationship is invalid, replace it with the relationship type that matches the real sequence. If the activity should start after another finishes, use FS. If starts are linked, use SS. If finishes must align, use FF. If the issue is a missing milestone, delivery, approval, or access condition, add or correct the activity that represents that condition.

After corrections, recalculate the schedule and review the affected logic path. Check total float, critical or longest path, milestone dates, and near-term lookahead reports. The goal is not only to improve the metric score. The goal is to make the schedule easier to explain and more reliable for decision-making.

Task activities with SF predecessors are small but important signals. They often point to copied logic, forced dates, or unclear sequencing. Reviewing them helps the project team clean up the logic network before those weaknesses become reporting problems.

## Related Content
- [Overview](01_overview_template.md)
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
