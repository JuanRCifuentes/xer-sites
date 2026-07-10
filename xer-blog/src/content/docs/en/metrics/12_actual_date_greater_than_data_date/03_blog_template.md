---
title: "Actual Date Greater Than Data Date - Blog Article"
seo_title: "Actual Date Greater Than Data Date in Primavera P6"
meta_description: "Learn why actual date greater than Data Date affects Primavera P6 schedule credibility, CPM logic, float, and project controls reporting."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Actual Date Greater Than Data Date"
  - "Primavera P6 Actual Date Greater Than Data Date"
  - "schedule quality"
  - "project controls"
  - "CPM schedule logic"
  - "Primavera P6 Data Date"
  - "Primavera P6 blog"
slug: "blog-article-actual-date-greater-than-data-date-primavera-p6"
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
  - "01_metrics_en/12_actual_date_greater_than_data_date/01_overview_template.md"
  - "01_metrics_en/12_actual_date_greater_than_data_date/02_guide_template.md"
related_blogs:
  - "01b_blogs_en/01_WHAT A SCHEDULE IS/01_blog.md"
  - "01b_blogs_en/02_ROBUST LOGIC/02_ROBUST LOGIC.md"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-06-26"
---
# Actual Date Greater Than Data Date
## Title

Actual Dates Later Than the Data Date in Primavera P6

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for schedulers, planning engineers, project controls engineers, project managers, and PMO reviewers who validate Primavera P6 schedule updates.

## Opening Hook

The Data Date is the line between actual history and the forecast. If an actual date falls after that line, the schedule is mixing the future into the past.

## Introduction

In Primavera P6, the Data Date defines the update boundary. Actual work should be recorded on or before that date. Forecast work should remain after it.

When an Actual Start, Actual Finish, or another actual date is later than the Data Date, the schedule contains a status-date error. The activity may show work as already started or completed even though that date is outside the current reporting period.

This metric identifies activities with actual dates greater than the Data Date. The target is zero unresolved activities.

## What This Parameter Means

This parameter checks whether actual dates are consistent with the current update cycle. Actual dates should represent real performance already achieved by the Data Date.

If an actual date is later than the Data Date, one of two things is usually wrong. Either the actual date was entered incorrectly, or the Data Date does not match the approved reporting period.

A high result suggests weak update cut-off control, import problems, or confusion between actual and forecast dates.

## Why This Subject Matters

Future actual dates can damage schedule credibility. They may distort progress reporting, earned value, float, and milestone forecasts.

They also make schedule reviews harder. PMO reviewers and clients expect the Data Date to clearly separate what has happened from what is planned to happen.

If that boundary is not respected, the update becomes difficult to trust.

## Common Causes of Poor Results

- Actual dates entered beyond the update cut-off
- Incorrect project Data Date
- Progress imported from files covering future dates
- Confusion between actual dates and forecast dates
- Manual status updates entered without checking the Data Date
- Timesheet or field systems not aligned with the schedule update period

## How to Improve the Result

### 1. Confirm the Data Date

Start by confirming the approved Data Date for the update. If the Data Date is wrong, correct it before changing activity status.

The Data Date should match the reporting period and project controls procedure.

### 2. Review Future Actual Dates

Filter for actual dates greater than the Data Date. Review Actual Start, Actual Finish, Activity Status, Remaining Duration, and Percent Complete together.

If the future actual date is wrong, correct or remove it. If the work has not actually happened by the Data Date, it should not be recorded as actual.

### 3. Fix the Update Workflow

If the issue came from an import, review the source file and mapping. If it came from manual updates, reinforce the update cut-off procedure.

The goal is to prevent future actuals from entering the schedule before reporting.

## Example Scenario

A monthly schedule update has a Data Date of 31 May. During review, the scheduler finds an Actual Finish of 03 June on an installation activity.

The field report included work completed after the reporting cut-off. The scheduler removes the future Actual Finish, restores the correct status as of 31 May, and keeps the remaining work in the forecast.

The schedule now separates May actual progress from June planned work, making the update easier to trust.

## Recommended Improvement Schedule

- Day 1: Run the metric and confirm the Data Date.
- Days 2-3: Correct future actual dates and activity status.
- Days 4-5: Review import files and update workflow.
- Day 6: Check reports, earned value outputs, and milestone dates.
- Day 7: Reassess the metric and document the result.

## Mistakes to Avoid

Avoid moving the Data Date only to hide future actuals. The Data Date should follow the approved reporting period.

Avoid deleting actual dates without confirming the real field status.

Avoid ignoring import sources. If future actuals came from an import, the issue may repeat next cycle.

## Key Takeaways

- Actual dates should be on or before the Data Date.
- The target is zero unresolved activities.
- Future actuals may indicate wrong status, wrong Data Date, or import issues.
- Correct Activity Status, Remaining Duration, and Percent Complete after fixing dates.
- Update cut-off control prevents repeat issues.

## Conclusion

Actual dates after the Data Date are a clear schedule update problem. They blur the line between history and forecast.

Managing this metric improves update discipline, progress reporting, earned value reliability, and confidence in Primavera P6 schedule submissions.

## Call to Action

Review all actual dates after the Data Date before issuing your next schedule update. Correct the date, status, or Data Date source issue so the schedule cleanly separates actual performance from forecast work.

## Related Content
- [Overview](01_overview_template.md)
- [Improvement Guide](02_guide_template.md)
- [What A Schedule Is](../../01b_blogs_en/01_WHAT%20A%20SCHEDULE%20IS/01_blog.md)
- [Robust Logic](../../01b_blogs_en/02_ROBUST%20LOGIC/02_ROBUST%20LOGIC.md)
