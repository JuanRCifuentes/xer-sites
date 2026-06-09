---
title: 'Activities Starting on the Data Date with No Driving Logic: Why This Schedule Metric Matters'
description: 'A practical overview of schedule quality checks'
pubDate: 'Jun 8 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-1.jpg
---

## Estimated Reading / Speaking Time

5-10 minutes

## Target Length

750-1,500 words

## Audience

This blog is for planning engineers, project controls engineers, schedulers, project managers, and PMO reviewers who use Primavera P6 to assess schedule quality. It is especially useful for teams that review schedule updates and need to confirm whether near-term activities are properly driven by CPM logic.

## Opening Hook

One of the most common schedule review surprises is seeing a group of activities all starting on the Data Date. At first glance, it may look like the project team is ready to begin several pieces of work immediately. But when those activities have no logic driving them, the schedule may be telling a weaker story: the activities are starting because the update boundary moved, not because the work is genuinely ready.

## Introduction

The Data Date in Primavera P6 is the dividing line between the past and the forecast. Everything before it should represent actual progress or completed work. Everything after it should represent the plan from this point forward.

Because the Data Date is so important, activities that start exactly on it deserve attention. Some may be valid, such as an activity authorized after a formal notice, access release, or project kickoff. But when an open or not-started activity starts on the Data Date without driving predecessor logic, the schedule reviewer should pause.

This metric looks for activities scheduled to start on the Data Date without valid logic driving that start. The target is zero unresolved activities. Document and approve any exceptions.

## What This Parameter Means

An activity starting on the Data Date with no driving logic is an activity whose forecast start date sits at the current update boundary without a clear predecessor path explaining why it can begin.

In CPM scheduling, activities should normally be connected through relationships. One activity finishes, another starts. One area becomes available, then a crew mobilizes. A design package is approved, then procurement can proceed. These relationships allow the schedule to calculate meaningful dates, float, and critical path behavior.

When logic is missing, Primavera P6 may still place the activity somewhere in the schedule. If the activity is open and not properly driven by predecessors, it can appear at or near the Data Date after the schedule is calculated. That does not necessarily mean the activity is ready. It may only mean the schedule has no better logic telling it when the activity should start.

A high count for this metric suggests that the schedule has open starts, weak predecessor logic, artificial constraints, or update problems. A low count, ideally zero, suggests that near-term work is better connected to the schedule network.

## Why This Subject Matters

This metric matters because the Data Date is where project reporting becomes most sensitive. The updated schedule answers practical questions:

- What work should start next?
- Which activities are ready?
- What is driving the critical or longest path?
- Where are the near-term risks?
- Are forecast dates reliable?

If activities are starting on the Data Date with no driving logic, the answers may be misleading. The schedule may show work as available when predecessor work, approvals, materials, access, or interfaces are not actually complete.

This can distort float values, weaken the critical path, and make lookahead planning less reliable.

For PMO governance, this is also a quality signal. DCMA-style assessments and common schedule health checks emphasize complete logic, valid sequencing, and defensible dates.

## Common Causes of Poor Results

The most common reasons this metric performs poorly are practical and usually fixable.

- Missing predecessor relationships
- Predecessors that exist but do not actually drive the activity
- Start constraints or expected dates used instead of real logic
- Incomplete progress updates or missing actual starts
- Open-start activities left from early schedule development
- Out-of-sequence progress or update settings that have not been reviewed
- External interface activities that were not documented as exceptions

The key point is that this is not just a formatting issue. The problem is that the schedule may not explain why the date is valid.

## How to Improve the Result

### 1. Build a P6 Layout That Shows the Problem Clearly

Start by creating a layout or report in Primavera P6 that filters for open or not-started activities with a start date equal to the Data Date. Add columns that help the reviewer understand the cause: Activity ID, Activity Name, WBS, Start, Finish, Status, Total Float, Calendar, Primary Constraint, Predecessors, and Successors.

### 2. Correct Missing or Weak Logic

For each activity, ask what must happen before this work can start. The answer may be a physical predecessor, an engineering deliverable, a procurement event, a permit, a handover, or an access condition.

Add logic that represents real dependency, not just a relationship added to pass the metric. A finish-to-start relationship may be correct in many cases, but start-to-start or finish-to-finish relationships may be more realistic for overlapping work. Use the relationship type that reflects how the work will actually be managed.

After adding logic, recalculate the schedule and check whether the start is now genuinely driven by predecessor completion.

### 3. Review Constraints, Status, and Exceptions

Some activities start on the Data Date because of constraints. Constraints are not automatically wrong, but they should be used carefully. If a start constraint is replacing normal logic, it may hide the true sequence and distort float.

Review status as well. If an activity has actually started, enter the actual start and remaining duration correctly. If it has not started, do not allow it to appear ready unless the logic supports that forecast.

Finally, document exceptions. A project start milestone or externally authorized activity may not need a normal predecessor. But if it remains in the metric result, the reason should be clear to the scheduler, project controls lead, and PMO reviewer.

## Example Scenario

Imagine a construction schedule with a Data Date of 01 June. After the monthly update, the scheduler finds 18 not-started activities with start dates of 01 June and no driving predecessor logic.

At first, the team assumes these are ready-to-start activities. But the review shows otherwise. Several installation activities are missing predecessor links to material delivery. A few testing activities are not linked to installation completion. Two activities have old start constraints. One activity is a legitimate interface milestone that should be documented as an exception.

The scheduler adds the missing relationships, removes unnecessary constraints, updates the exception note, and recalculates the schedule. The result drops from 18 activities to one documented exception. The lookahead now gives the project team a much clearer view of what is truly ready to start.

## Recommended Improvement Schedule

Use a simple one-week improvement cycle:

- Day 1: Review the current result and confirm the Data Date.
- Days 2-3: Correct missing predecessor logic and remove unjustified constraints.
- Days 4-5: Recalculate the schedule and review float, longest path, and milestone impact.
- Day 6: Resolve remaining issues with discipline leads or package owners.
- Day 7: Reassess the metric and document any approved exceptions.

## Mistakes to Avoid

Avoid adding random predecessor relationships just to reduce the metric count. Logic should represent real work sequence.

Avoid using constraints as a shortcut when a relationship would better explain the schedule. Constraints can be valid, but they should not become a substitute for CPM logic.

Avoid ignoring activities because they are not on the critical path. Near-term non-critical work still affects coordination, lookahead planning, and resource readiness.

Avoid treating exceptions casually. If an activity is intentionally allowed to start on the Data Date without driving logic, document the reason.

## Key Takeaways

- Activities starting on the Data Date with no driving logic can signal missing sequencing or weak update discipline.
- The target result is zero unresolved activities.
- Valid exceptions may exist, but they should be documented and approved.
- The best correction is real CPM logic, not artificial relationships or unnecessary constraints.
- Recalculate and review float, longest path, and near-term activities after making changes.

## Conclusion

Activities that start on the Data Date without driving logic deserve careful review because they sit at the point where actual performance ends and the forecast begins.

When this metric is controlled, the schedule becomes easier to trust. Near-term work is better connected, the critical path is clearer, and reporting is stronger.

Improving the result requires disciplined schedule review: identify the activities, understand why they are starting, add valid logic, remove unnecessary constraints, correct status, and document exceptions.

## Call to Action

Review your latest Primavera P6 schedule update and filter for open or not-started activities starting on the Data Date. For each one, ask a simple question: what is driving this start? If the answer is not clear, correct the logic or document the exception before the schedule is issued.

## Related Metrics

- [Activities Starting in dd with no logic driving - Overview](/metrics/first-post/)
- [TBD](/metrics/third-post/)
