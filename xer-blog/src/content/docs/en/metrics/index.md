---
title: Metrics Summary
description: Overview of the schedule quality metrics and how their pages relate.
sidebar:
  order: 0
---

Schedule quality metrics measure how credible and well-built a Primavera P6 CPM schedule is. Each metric targets one specific weakness — such as work appearing ready to start without the logic to support it — and comes with documentation that explains what it measures, why it matters, and how to improve a poor result.

## Activities Starting on the Data Date with No Driving Logic

This metric identifies open or not-started activities scheduled to start on the Data Date without valid predecessor logic driving that start. Activities collecting at the Data Date boundary without logic distort float, obscure the longest path, and make the forecast unreliable. The target threshold is 0 activities.

- [Overview](/en/metrics/first-post/) — what the metric measures, its threshold, and why it matters for schedule credibility.
- [Improvement Guide](/en/metrics/second-post/) — how schedulers and project controls teams resolve flagged activities during quality reviews and update cycles.
- [Details](/en/metrics/third-post/) — supporting material for this metric (in progress).

For the narrative version of why this metric matters, read the related blog post: [Activities Starting on the Data Date with No Driving Logic: Why This Schedule Metric Matters](/en/blog/fourth-post/).
