---
title: "Activities on the Data Date - Blog Article"
seoTitle: "Activities on the Data Date in Primavera P6"
description: "Learn why activities on the Data Date: early start and early finish checks in Primavera P6 affects Primavera P6 schedule credibility, CPM logic, float."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Activities on the Data Date"
  - "Primavera P6 Activities on the Data Date"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 Data Date"
  - "Primavera P6 blog"
slug: "en/blog/activities-on-the-data-date-primavera-p6"
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
  - "01_metrics_en/18_activities_in_data_date/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---

The Data Date is one of the most important dates in a Primavera P6 schedule. It marks the boundary between actual performance and future forecast. Work before the Data Date should be statused. Work after the Data Date should be forecast. When many activities have Early Start or Early Finish exactly on the Data Date, the schedule deserves a closer look.

This metric checks for activities where Early Start equals the Data Date or Early Finish equals the Data Date. The purpose is not to say that every activity on the Data Date is wrong. Some work may legitimately start or finish at the update boundary. The purpose is to identify clustering at the boundary and confirm whether each activity has a valid reason for being there.

Early Start on the Data Date can be reasonable when near-term work is ready to begin after completed predecessors. It can also be a warning sign. Activities may be sitting on the Data Date because they have missing predecessor logic, non-driving logic, constraints, expected dates, or incomplete status updates. If many not-started activities are sitting on the Data Date, the schedule may be implying that work is ready to start even when the required conditions have not been modeled.

Early Finish on the Data Date can also tell two different stories. It may show work that is correctly forecast to finish at the update boundary. But it may also indicate that progress was not fully updated. If the work actually finished before or on the Data Date, the activity may need an Actual Finish. If the work did not finish, Remaining Duration and the forecast finish may need to be updated.

The practical review starts with a simple P6 layout. Include Activity ID, Activity Name, WBS, Activity Status, Early Start, Early Finish, Start, Finish, Actual Start, Actual Finish, Remaining Duration, Total Float, Calendar, constraints, predecessors, and successors. Then filter for Early Start equal to the Data Date and Early Finish equal to the Data Date.

The first question is status. Is the activity complete, in progress, or not started? If actual dates or remaining duration are wrong, fix status before changing logic. A schedule with poor status data cannot produce reliable forecast dates.

The second question is logic. Is the activity being driven to the Data Date by valid predecessor and successor relationships? If it has no predecessor, weak logic, or non-driving relationships, the Data Date may be masking an open start or open finish. The fix should be to add or correct real schedule logic, not to move the activity manually.

The third question is whether constraints, expected dates, or calendars are affecting the result. A start constraint, finish constraint, stale expected date, or unusual calendar can pull an activity to the update boundary. Some of these may be valid, but they should be intentional and documented.

Consider a project with a Data Date of 30 April. A group of electrical activities all show Early Start on 30 April. If the predecessor construction work was completed and the area was released, that may be valid. But if several of those activities have no predecessors or are controlled by constraints, the schedule is not showing a true logic-driven plan.

Now consider an activity with Early Finish on 30 April and status In Progress. If the work was completed by the update cut-off, the scheduler should enter the Actual Finish and mark the activity complete. If the work still has several days remaining, the Remaining Duration should be updated so the forecast finish moves beyond the Data Date.

The target threshold for this metric should be zero unexplained activities. That wording matters. The goal is not to eliminate every activity at the Data Date. The goal is to make sure each one is explained by current status, valid logic, or an approved exception.

This metric is especially useful during update reviews. After the Data Date moves forward, activities can collect at the boundary if the schedule is not fully statused or if logic is weak. A cluster of activities on the Data Date is often a symptom of update pressure, copied logic, open starts, constraints, or incomplete field feedback.

Cleaning up this metric improves the credibility of the near-term forecast. It helps project teams distinguish work that is genuinely ready from work that has simply drifted to the current update date. For PMO and client reporting, it also shows that the Data Date was treated as a real status boundary, not just a date used to recalculate the file.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
