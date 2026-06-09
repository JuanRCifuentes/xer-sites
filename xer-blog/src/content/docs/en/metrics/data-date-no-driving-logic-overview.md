---
title: 'Activities Starting on the Data Date with No Driving Logic — Overview'
sidebar:
  label: 'No Driving Logic at Data Date — Overview'
description: 'Schedule quality metric: activities starting on the Primavera P6 Data Date with no driving predecessor logic — what it measures, its zero target, and why it matters.'
pubDate: 'Junio 8, 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-3.jpg
---
# Overview

## Description

This metric identifies open or not-started activities that are scheduled to start on the Primavera P6 Data Date but do not have valid predecessor logic driving that start. In a well-built CPM schedule, an activity should normally start because preceding work, project access, approvals, procurement, or other required conditions have been logically satisfied.

## What it Measures

This metric measures the number of activities whose start date is aligned with the Data Date without a logical predecessor path explaining why the work can begin at that point.

## Threshhold

Target threshold: 0 activities.

## Why it matters

Activities that begin on the Data Date without driving logic can weaken the credibility of the schedule. They may make the next period of work look ready to start even when predecessor work, approvals, materials, or access conditions have not been properly modeled.

This matters because the Data Date is the boundary between actual performance and the forecast. If activities collect at that boundary without logic, the forecast can become unreliable. Float values may be distorted, the longest path may be unclear, and project teams may lose confidence in what the schedule is actually telling them.

For Primavera P6 users, this metric supports better update discipline, stronger CPM logic, and more defensible schedule quality reviews. It helps planners confirm that work is starting for a real schedule reason, not simply because the software moved undriven activities to the current update date.

## Related Blog Post

- [Activities Starting on the Data Date with No Driving Logic](/en/blog/activities-starting-on-data-date-no-driving-logic/)
