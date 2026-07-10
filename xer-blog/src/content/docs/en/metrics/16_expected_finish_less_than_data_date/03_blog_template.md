---
title: "Expected Finish Less Than Data Date - Blog Article"
seoTitle: "Expected Finish Less Than Data Date in Primavera P6"
description: "Learn why expected finish before the Data Date in Primavera P6 affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Expected Finish Less Than Data Date"
  - "Primavera P6 Expected Finish Less Than Data Date"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 Data Date"
  - "Primavera P6 blog"
slug: "en/blog/expected-finish-less-than-data-date-primavera-p6"
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
  - "01_metrics_en/16_expected_finish_less_than_data_date/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---

The Data Date is the line between what has happened and what is still forecast. In a clean schedule update, status information before the Data Date should be resolved as actual progress, while remaining work should be forecast from the Data Date forward. When an activity has an Expected Finish earlier than the Data Date, that boundary becomes blurry.

This metric identifies activities where Expected Finish is before the current Data Date. It is a simple check, but it can reveal stale status input, missing actual finishes, outdated field forecasts, or update workflows that are not maintaining expected dates properly.

In Primavera P6, Expected Finish is often used as a forecast or update field, depending on the organization's process and schedule settings. Some teams use it to capture field expectations for in-progress activities. Others import it from spreadsheets or progress systems. Because the field can influence schedule behavior in certain workflows, it should not be allowed to sit in the past without review.

Consider an activity called "Install Main Cable Tray." The project Data Date is 31 March, but the activity has an Expected Finish of 24 March. If the activity truly finished on 24 March, the schedule should normally have an Actual Finish and a completed status. If the activity did not finish, the Expected Finish is stale and should be updated based on the latest field information. Either way, the current value needs attention.

This issue often appears when teams move the Data Date forward but do not fully update all forecast fields. Percent complete may be updated. Remaining Duration may be adjusted. Some actual dates may be entered. But Expected Finish values from the prior update remain untouched. The result is a schedule that looks partially updated but still contains expected completion dates in the past.

The first question is whether the Data Date is correct. If the Data Date was set incorrectly, the metric may be flagging the wrong boundary. Once the Data Date is confirmed, each activity should be reviewed against its true status. Was the activity completed before the Data Date? Is Actual Finish missing? Is the activity still active? Does Remaining Duration still represent the work left?

For completed work, the fix is usually to enter or correct the Actual Finish, then confirm Activity Status, Percent Complete, and Remaining Duration are consistent. For work that is still active, the Expected Finish should be updated to a valid date on or after the Data Date. The Remaining Duration should also be reviewed so the schedule calculation reflects the current forecast.

For not-started work, an Expected Finish before the Data Date usually indicates an old or imported value. The scheduler should confirm whether the activity still belongs in the plan, whether its forecast dates need to be recalculated, and whether the expected date should be removed or replaced according to the project update procedure.

A practical review in P6 should include Activity ID, Activity Name, WBS, Activity Status, Expected Finish, Actual Start, Actual Finish, Remaining Duration, Percent Complete, Start, Finish, Total Float, and Calendar. The team should prioritize critical and near-critical activities, handover work, client-facing milestones, and activities in the near-term lookahead.

This metric also helps reveal process issues. If the same problem appears every update, the source may be an import file, a spreadsheet template, or a field reporting workflow. The team should check whether Expected Finish is being loaded from another system and whether validation rules exist before the schedule is calculated and issued.

The target threshold should be zero unresolved activities. That does not mean every flagged activity is a major problem. It means every activity should be corrected or explained. An Expected Finish before the Data Date should not remain in the schedule simply because no one looked at it.

Cleaning up this metric improves schedule credibility. It helps the team maintain a clear update boundary, distinguish actual performance from forecast work, and avoid misleading lookahead or float results. In PMO reviews, it also shows that the schedule update was not only calculated, but actually checked for status consistency.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
