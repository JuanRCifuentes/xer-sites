---
title: "Calendars with Different Start and Finish Times in the Day - Blog Article"
seoTitle: "Calendars with Different Start and Finish Times in the Day in Primavera P6"
description: "Learn why calendars with different start and finish times in Primavera P6 affects Primavera P6 schedule credibility, CPM logic, float."
authorName: "Juan D Vargas"
authorDescription: "Project control manager, 30+ years of experience in Project Control"
authorUrl: "https://www.linkedin.com/in/juan-d-vargas-v/"
keywords:
  - "Calendars with Different Start and Finish Times in the Day"
  - "Primavera P6 Calendars with Different Start and Finish Times in the Day"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 calendars"
  - "Primavera P6 blog"
slug: "en/blog/calendars-with-different-start-finish-time-in-day-primavera-p6"
language: "en"
contentType: "blog"
metricPageType: "narrative"
draft: false
sidebar:
  label: "Blog"
  order: 2
version: "1.0"
topic: "Primavera P6 Calendars"
audience:
  - "Planning engineers"
  - "Project managers"
  - "PMO teams"
primarySearchIntent: "Explain this Primavera P6 schedule quality topic in a practical blog format."
relatedMetrics:
  - "01_metrics_en/20_calendars_with_different_start_finish_time_in_day/02_guide_template.md"
relatedBlogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translationOf: ""
canonicalUrl: ""
lastReviewed: "2026-06-26"
pubDate: "2026-06-26"
---

Calendars are one of the quiet drivers of a Primavera P6 schedule. They define when work can happen, how durations convert into dates, and how relationships move activities through time. Because calendars often sit behind the scenes, small differences in daily start and finish times can create schedule behavior that is hard to see in normal layouts.

This metric identifies calendars whose workday start or finish times differ from the approved project standard. The issue is not that every calendar must be identical. Many projects need special calendars for night shift work, weekend work, shutdown windows, resource availability, or restricted access. The issue is whether those differences are intentional, documented, and assigned only where they belong.

For example, one project calendar may run from 7:00 to 17:00 while another runs from 8:00 to 18:00. Both may show ten working hours per day. At a high level they look similar. But in P6, the time of day can affect the exact placement of starts and finishes, relationship ties, float values, and apparent date movement. A one-hour shift may look minor, but it can change how activities align across calendars.

This becomes more important when activities on different calendars are linked together. A predecessor on one work window may finish late in the day while the successor calendar cannot start until the next morning. Another activity may appear to finish on the same date but at a different time. If reviewers only look at dates and not times, the schedule can seem inconsistent or hard to explain.

Calendar differences can also affect critical path and total float. If a critical activity uses a non-standard calendar by accident, the path may move differently than expected. Float can appear to increase or decrease because of calendar alignment rather than real schedule flexibility. During PMO or client review, that makes it harder to explain why dates moved.

The practical review starts by identifying the approved calendar standard for the project. What is the normal workday? What are the standard start and finish times? Which calendars are allowed to differ? Then export or review all calendars and compare their daily work periods. The review should include calendar name, calendar type, start time, finish time, daily hours, exceptions, and assigned activities.

The next step is to review assignments. A special calendar may be valid, but it should be assigned only to the activities that need it. A night shift calendar should not spread into normal daytime work. A shutdown calendar should not remain assigned after the outage scope is copied into another area. A resource calendar should not accidentally control activity dates unless that is part of the project method.

If a calendar difference is accidental, the fix is usually simple: align the start time, finish time, and work periods with the project standard. Then recalculate the schedule and review the affected dates and float values. If the difference is valid, document the reason and confirm the owner. Valid reasons may include restricted access, environmental windows, client operating limits, permit conditions, or planned shift work.

Consider a commissioning schedule where most work uses a 7:00 to 17:00 calendar, but the testing team uses a 22:00 to 6:00 night shift calendar. That difference may be valid because testing can only happen when operations are offline. The scheduler should document the basis and confirm that only the testing activities use that calendar.

Now consider a copied construction activity that accidentally inherits the night shift calendar. Its dates may calculate oddly compared with nearby work. It may appear to finish on an unexpected date or create float differences that do not match field expectations. In that case, the issue is not the existence of the night shift calendar. The issue is the wrong activity assignment.

The target threshold for this metric should be zero unexplained calendars. Some non-standard calendars may remain, but every one should have a clear reason. If the scheduler cannot explain why a calendar starts or finishes at a different time, it should be reviewed.

Cleaning up this metric improves schedule transparency. It helps teams avoid hidden partial-day effects, misleading float, and unexplained date movement. It also makes the schedule easier to audit because calendar assumptions are no longer buried inside the file. For project controls teams, that is a small review with a big payoff.

## Related Content
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
