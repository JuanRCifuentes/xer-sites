---
title: "Task Remaining Duration Zero and Status Not Complete - Blog Article"
seoTitle: "Task Remaining Duration Zero and Status Not Complete in Primavera P6"
description: "Learn why task remaining duration is zero while status is not complete affects Primavera P6 schedule credibility, CPM logic, float."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Task Remaining Duration Zero and Status Not Complete"
  - "Primavera P6 Task Remaining Duration Zero and Status Not Complete"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 blog"
slug: "en/blog/task-remaining-duration-zero-status-not-complete-primavera-p6"
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
  - "01_metrics_en/17_task_remaining_duration_zero_status_not_complete/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---

Remaining Duration is one of the most important status fields in a Primavera P6 update. It tells the schedule how much time is still needed to finish the activity. When a normal task activity has Remaining Duration equal to 0, the message is simple: there is no time left to perform. If that same task is not marked Complete, the schedule is telling two different stories at once.

This metric identifies task activities where Remaining Duration is 0 but the task status is not Complete. It is a focused version of a broader status-quality check because task activities are where this inconsistency can directly affect work plans, progress reporting, earned value, and lookahead reviews.

For a normal task, zero remaining duration usually means the work is done. The activity should have an Actual Finish, completed status, and progress values that match the project's update procedure. If the task is still In Progress or Not Started, then Remaining Duration should normally be greater than 0 because some amount of work is still expected.

This issue often appears during busy update cycles. A field team may report that an activity is effectively done, so the scheduler reduces Remaining Duration to 0 but does not enter Actual Finish. An import file may update Remaining Duration without updating Activity Status. A manual update may set progress values but leave the activity in the wrong status. The result is a task that looks finished from a duration perspective but incomplete from a status perspective.

That inconsistency matters. A task with no remaining duration may stop driving future work as expected. It may disappear from lookahead attention even though it is not formally complete. It may distort earned value reporting if progress and completion are not aligned. It may also create confusion during client or PMO reviews because the schedule cannot clearly answer whether the task is finished.

The review should start with a simple P6 layout. Include Activity ID, Activity Name, WBS, Activity Type, Activity Status, Actual Start, Actual Finish, Original Duration, Remaining Duration, At Completion Duration, Percent Complete Type, Activity Percent Complete, Start, Finish, and Total Float. Filter for task activities where Remaining Duration equals 0 and Activity Status is not Complete.

Each flagged task should be reviewed with the responsible owner. Is the work actually complete? If yes, the task should normally be marked Complete and given the correct Actual Finish. The scheduler should also confirm that percent complete and remaining duration align with the project's progress rules.

If the work is not complete, the fix is different. The task should keep the correct status, such as In Progress or Not Started, but Remaining Duration should be restored to a valid value. That value should reflect the remaining work as of the Data Date, not a target finish date or a reporting preference.

Consider a task called "Install Fire Alarm Devices." The field report says installation is nearly complete, and the scheduler sets Remaining Duration to 0. But testing found several devices still need correction, and the activity was not actually finished by the Data Date. In this case, the task should not remain with zero remaining duration. The remaining effort should be estimated and entered so the schedule continues to forecast the unfinished work.

Now consider a task called "Pour Level 3 Slab." The concrete pour was completed before the Data Date, but the activity still shows In Progress and has no Actual Finish. Here the Remaining Duration of 0 is probably correct, but the status update is incomplete. The scheduler should enter the Actual Finish and mark the task Complete.

The target threshold for this metric should be zero unresolved task activities. The word unresolved is important. Some items may need field confirmation before correction, but they should not remain unexplained in a reporting schedule. Each item should be corrected, assigned to an owner, or documented if there is a temporary update reason.

This metric also helps improve update discipline. If the same issue appears every cycle, the team should review import mappings, update forms, field reporting instructions, and checks before schedule issue. Users may be setting Remaining Duration to 0 because it feels like the fastest way to show progress, without completing the activity properly.

Cleaning up this metric makes the schedule easier to trust. It aligns remaining duration, activity status, actual finish dates, and progress values. More importantly, it helps the project team make better decisions about what work is truly complete and what work still needs attention.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
