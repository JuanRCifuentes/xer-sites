---
title: "Planning and Project Controls Glossary for Primavera P6"
seo_title: "Planning and Project Controls Glossary for Primavera P6"
meta_description: "A practical glossary of Primavera P6, CPM scheduling, project planning, and project controls terms for planners, schedulers, project managers, and PMO teams."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "Primavera P6 glossary"
  - "project controls glossary"
  - "planning and scheduling terms"
  - "CPM scheduling glossary"
  - "Primavera P6 terms"
  - "schedule quality terms"
  - "PMO schedule review"
  - "critical path method glossary"
slug: "primavera-p6-glossary"
language: "en"
content_type: "blog"
version: "1.0"
topic: "Primavera P6 and Project Controls"
audience:
  - "Planning engineers"
  - "Project controls engineers"
  - "Schedulers"
  - "Project managers"
  - "PMO teams"
primary_search_intent: "Understand common Primavera P6, CPM scheduling, planning, and project controls terminology."
related_metrics:
  - "01_metrics_en"
related_blogs:
  - "01b_blogs_en"
translation_of: ""
canonical_url: ""
last_reviewed: "2026-07-07"
---

# Planning and Project Controls Glossary for Primavera P6

This glossary defines common planning, scheduling, and project controls terms used in Primavera P6 schedule development, schedule quality assessment, PMO reviews, and project reporting. The descriptions are written for mixed-experience readers, from junior planners to experienced project controls professionals.

## A

### Actual Cost

Actual Cost is the cost actually incurred for completed work during a reporting period or to date. In project controls, it is compared against planned value and earned value to understand cost performance. In Primavera P6, actual cost may be entered manually, calculated from resources, or imported from another cost system depending on project setup.

### Actual Date

An Actual Date is a recorded date showing when work actually started or finished. In Primavera P6, actual start and actual finish dates should reflect verified field progress, not forecast intent. Incorrect actual dates can distort the Data Date, remaining duration, float, earned value, and schedule performance reporting.

### Actual Finish

Actual Finish is the date when an activity was completed. Once an activity has an actual finish, it is normally considered complete and should have no remaining duration. Entering an actual finish after the Data Date is a schedule quality issue because actual performance should not be recorded in the future.

### Actual Start

Actual Start is the date when work actually began on an activity. In Primavera P6, an activity with an actual start but no progress or remaining duration review may create misleading status. Actual starts should be validated during every update cycle.

### Activity

An Activity is a discrete piece of work in the schedule. In Primavera P6, activities carry dates, durations, relationships, calendars, resources, costs, codes, and status. Activities are the basic building blocks used to calculate the CPM schedule.

### Activity Calendar

An Activity Calendar defines the working and nonworking time used to schedule an activity. Calendars affect start dates, finish dates, durations, float, and relationship behavior. In P6 schedule reviews, unusual calendar assignments are checked because they can create unexpected schedule movement.

### Activity Code

An Activity Code is a classification field used to group, filter, sort, and report activities. Common activity codes include area, phase, discipline, contractor, work package, responsibility, and system. Good activity coding improves schedule analysis, reporting, and PMO oversight.

### Activity ID

Activity ID is the unique identifier assigned to an activity in Primavera P6. A clear Activity ID structure helps users locate, sort, and report work consistently. Poor ID structure does not usually affect CPM calculation, but it can reduce schedule usability and auditability.

### Activity Name

Activity Name is the descriptive title of the work being scheduled. A good activity name should be specific enough to explain the work scope without requiring the reader to open external documents. Weak activity names make schedule reviews and field coordination harder.

### Activity Status

Activity Status indicates whether an activity is Not Started, In Progress, or Completed. In P6, status affects how dates, remaining duration, actuals, and schedule calculations behave. Status should be consistent with actual dates, percent complete, and remaining duration.

### Ahead of Schedule

Ahead of Schedule means work is progressing earlier than the approved plan or baseline. It should be measured using reliable baseline comparison, earned value, milestone analysis, or critical path review rather than only by visual date comparison.

### Approved Baseline

An Approved Baseline is the formally accepted version of the schedule used for performance measurement and change control. It represents the agreed plan against which current progress and forecast changes are compared.

### As-Built Schedule

An As-Built Schedule represents how the work actually occurred. It is often used for lessons learned, delay analysis, claims support, and project closeout. Accurate actual start and finish dates are essential for a credible as-built schedule.

## B

### Backward Pass

Backward Pass is the CPM calculation process that determines late dates by working backward from the project finish or required finish point. It helps calculate float and identify how late activities can occur without delaying the project or selected finish milestone.

### Baseline

A Baseline is a saved copy of a project schedule used as a reference for comparison. In Primavera P6, baselines allow teams to compare current dates, durations, progress, and variance against the approved plan.

### Baseline Finish

Baseline Finish is the planned finish date stored in the baseline schedule. Comparing current finish dates to baseline finish dates helps measure slippage, forecast movement, and milestone performance.

### Baseline Start

Baseline Start is the planned start date stored in the baseline schedule. It is used to compare the current forecast against the original or approved plan.

### Budgeted Cost

Budgeted Cost is the planned cost assigned to work before execution. In project controls, budgeted cost supports cost-loaded schedules, earned value analysis, cash flow forecasting, and performance reporting.

## C

### Calendar

A Calendar defines working days, nonworking days, holidays, shifts, and working hours. In Primavera P6, calendars can be assigned to projects, resources, and activities. Calendar differences can materially affect dates, float, and sequence logic.

### Calendar Exception

A Calendar Exception is a specific working or nonworking adjustment, such as a holiday, shutdown, extended shift, or special workday. Calendar exceptions should be controlled because they can change calculated dates and float.

### Change Control

Change Control is the formal process for reviewing, approving, and documenting changes to scope, schedule, cost, or contract conditions. In scheduling, change control protects the baseline and ensures forecast changes are traceable.

### Claim

A Claim is a formal request for additional time, money, or contractual relief. Schedule quality matters in claims because weak logic, poor updates, and missing records can reduce the credibility of delay analysis.

### Complete Logic

Complete Logic means activities are properly connected with predecessors and successors, except for valid documented exceptions such as project start or project finish milestones. Complete logic is a core schedule quality principle.

### Constraint

A Constraint is a date restriction applied to an activity or milestone. Constraints can be useful when they represent real contractual or external requirements, but excessive or unjustified constraints can override schedule logic, distort float, and weaken CPM reliability.

### Contract Milestone

A Contract Milestone is a required date or event defined by the contract. Contract milestones should be clearly represented in the schedule, linked with appropriate logic, and monitored during each update cycle.

### Cost Loading

Cost Loading is the assignment of budgeted costs to activities, resources, or WBS elements. A cost-loaded schedule can support cash flow forecasting, earned value, and cost performance analysis.

### Critical Activity

A Critical Activity is an activity that directly affects the project completion date or selected critical path endpoint. In many schedules, critical activities have zero or negative total float, but the exact definition depends on the schedule settings and project controls procedure.

### Critical Path

The Critical Path is the sequence of activities that determines the earliest possible project completion date or the completion of a key milestone. A credible critical path should be driven by realistic logic, durations, calendars, and constraints.

### Critical Path Method

Critical Path Method, or CPM, is the scheduling method used to calculate activity dates, float, and the path of work that controls project completion. Primavera P6 uses CPM calculations to produce forecast start and finish dates based on durations, calendars, relationships, constraints, and status.

### Current Schedule

The Current Schedule is the active updated schedule showing actual progress and the latest forecast. It is usually compared against the approved baseline to assess variance, delay, and recovery needs.

## D

### Data Date

The Data Date is the status date in Primavera P6 that separates actual performance from forecast work. Work before the Data Date should reflect actual progress, while work after the Data Date should represent the remaining plan. Data Date discipline is essential for reliable schedule updates.

### DCMA Schedule Assessment

DCMA Schedule Assessment refers to schedule quality checks commonly associated with the Defense Contract Management Agency guidelines. These checks review issues such as missing logic, high float, negative float, constraints, lags, leads, and invalid dates. They are useful references but should be applied with project context and PMO judgment.

### Delay

A Delay is an event or condition that causes work or a milestone to occur later than planned. Delay analysis depends on reliable schedule logic, accurate updates, valid baselines, and clear contemporaneous records.

### Delay Analysis

Delay Analysis is the process of identifying, measuring, and explaining schedule delays. Common methods include time impact analysis, windows analysis, and as-planned versus as-built comparison. A poor-quality P6 schedule makes delay analysis harder to defend.

### Deliverable

A Deliverable is a defined output that must be completed, submitted, approved, or handed over. In schedules, deliverables may be represented as activities or milestones and should be linked to the work they enable.

### Driving Logic

Driving Logic is the relationship logic that determines an activity's calculated start or finish. If an activity starts on the Data Date without driving logic, the schedule may not explain why the work is ready to begin.

### Driving Predecessor

A Driving Predecessor is a predecessor relationship that controls or directly influences the start or finish of a successor activity. Identifying driving predecessors helps schedulers understand why an activity is scheduled when it is.

### Driving Relationship

A Driving Relationship is a relationship that controls the timing of a linked activity. In Primavera P6, driving relationship indicators can help reviewers distinguish between relationships that exist and relationships that actually determine dates.

### Duration

Duration is the amount of working time required to complete an activity. In P6, duration is calculated using the assigned calendar. Unrealistic durations can weaken schedule credibility, lookahead planning, and critical path analysis.

## E

### Early Dates

Early Dates are the earliest calculated start and finish dates based on the forward pass of the CPM calculation. They show when activities can occur if predecessor logic and calendar conditions are satisfied as early as possible.

### Earned Value

Earned Value is a project controls method that measures the value of work actually performed against the planned value and actual cost. It helps evaluate schedule and cost performance when the schedule and progress measurement rules are reliable.

### Engineering Schedule

An Engineering Schedule represents design, review, approval, and deliverable production activities. It should be integrated with procurement and construction logic so downstream work is realistically driven by engineering completion.

### Enterprise Project Structure

Enterprise Project Structure, or EPS, is the hierarchy used in Primavera P6 to organize projects across a portfolio or organization. EPS structure supports access control, reporting, and portfolio-level governance.

### Expected Finish

Expected Finish is a P6 date field sometimes used to influence when an activity is expected to finish. It should be controlled carefully because it can affect schedule calculation behavior and may hide weak logic if used without clear governance.

## F

### Finish Milestone

A Finish Milestone is a zero-duration activity representing completion of a significant event or deliverable. It should normally have valid predecessor logic explaining how the milestone is achieved.

### Finish-to-Finish Relationship

A Finish-to-Finish relationship means the successor activity cannot finish until the predecessor activity finishes, subject to any lag. It is useful for overlapping work where completion of one activity controls completion of another.

### Finish-to-Start Relationship

A Finish-to-Start relationship means the successor activity cannot start until the predecessor activity finishes, subject to any lag. It is the most common and often clearest relationship type in CPM schedules.

### Float

Float is the amount of time an activity can move without delaying a defined endpoint. Float is calculated from schedule logic, calendars, constraints, and status. Float should be interpreted carefully because poor logic or excessive constraints can distort it.

### Float Path

Float Path is a P6 method for tracing paths of work based on float calculations from a selected activity or milestone. Float path analysis can help identify near-critical paths and schedule drivers beyond the primary critical path.

### Forecast Dates

Forecast Dates are calculated or projected dates for remaining work. They should be driven by logic, calendars, constraints, and realistic durations rather than manual expectations alone.

### Forward Pass

Forward Pass is the CPM calculation process that determines early start and early finish dates by moving forward through the schedule network from the project start or Data Date.

### Free Float

Free Float is the amount of time an activity can be delayed without delaying the early start of its immediate successor. It is useful for short-term coordination but does not replace total float or critical path analysis.

## G

### Global Change

Global Change is a Primavera P6 function used to modify multiple activity values based on defined conditions. It can be powerful but should be controlled because broad changes can unintentionally affect schedule data quality.

### Governance

Governance is the set of standards, review processes, approvals, and controls used to manage schedule quality and project reporting. PMO governance helps ensure schedules are consistent, credible, and useful for decision-making.

## H

### Hammock Activity

A Hammock Activity summarizes a period of time between linked activities or milestones. Hammocks can be useful for reporting indirect work, management effort, or summary-level durations, but they should not replace detailed CPM logic.

### Hard Constraint

A Hard Constraint is a constraint that strongly restricts schedule calculation, such as Mandatory Start or Mandatory Finish. Hard constraints can override logic and create misleading float, so they should be rare, justified, and documented.

### High Float

High Float refers to activities with unusually large total float. It may indicate missing logic, weak sequencing, excessive calendar differences, or work that is not properly tied into the schedule network.

## I

### In Progress Activity

An In Progress Activity has started but is not yet complete. It should have an actual start, remaining duration, and progress values that match the update status. In-progress activities require careful review when out-of-sequence work exists.

### Interface Milestone

An Interface Milestone represents a handover, dependency, or coordination point between parties, systems, areas, contracts, or work packages. Interface milestones should be clearly linked and monitored because they often drive downstream work.

### Invalid Date

An Invalid Date is a date condition that conflicts with the Data Date or schedule logic, such as actual dates later than the Data Date or forecast dates earlier than the Data Date. Invalid dates reduce schedule credibility.

## L

### Lag

Lag is a delay or offset applied to a relationship between two activities. Positive lag can represent waiting time, curing time, review time, or mobilization gaps. Excessive or undocumented lag can hide missing activities and reduce schedule transparency.

### Late Dates

Late Dates are the latest calculated start and finish dates an activity can have without delaying the project or selected endpoint. They are determined during the backward pass and are used to calculate float.

### Lead

Lead is negative lag, allowing a successor to start or finish before the predecessor relationship would normally permit. Leads are often discouraged in quality schedules because they can make logic harder to understand and defend.

### Level of Effort

Level of Effort, or LOE, is an activity type used to represent ongoing support work whose duration depends on other activities. LOE activities are useful for project management, supervision, or administrative work but should not drive the critical path.

### Logic

Logic is the network of relationships that defines how activities depend on each other. Good logic represents real work sequence, access, approvals, procurement, testing, commissioning, and handover conditions.

### Logic Tie

A Logic Tie is a relationship connecting two activities or milestones. Logic ties are used to calculate sequence and dates in a CPM schedule.

### Longest Path

The Longest Path is the sequence of activities that determines the calculated project finish in Primavera P6. It is often used as a critical path method because it traces the path driving completion, even when float values are affected by constraints or calendar behavior.

### Lookahead Schedule

A Lookahead Schedule is a short-term planning view, often covering the next two to eight weeks. It should be based on the current CPM schedule and should show work that is logically ready, properly sequenced, and realistic for field execution.

## M

### Mandatory Finish

Mandatory Finish is a hard constraint requiring an activity or milestone to finish on a specific date. It can override logic and distort float, so it should be used only when contractually or externally required.

### Mandatory Start

Mandatory Start is a hard constraint requiring an activity or milestone to start on a specific date. It can make an activity appear fixed regardless of predecessor logic and should be used with strong justification.

### Milestone

A Milestone is a zero-duration activity representing a significant event, decision, approval, handover, start, or finish point. Milestones should be logically connected unless they are valid project start or external reference points.

### Missing Logic

Missing Logic means an activity lacks a necessary predecessor, successor, or both. Missing logic weakens CPM calculation, float reliability, critical path analysis, and schedule quality.

## N

### Near-Critical Activity

A Near-Critical Activity is close to becoming critical based on float or path analysis. PMO and project controls teams often monitor near-critical work because small delays can shift the critical path.

### Negative Float

Negative Float means the calculated schedule is later than a required constraint, milestone, or finish date. It is a warning that the project or milestone may not meet the required date without recovery action or approved change.

### Non-Driving Logic

Non-Driving Logic is a relationship that exists but does not control the activity's calculated date. Non-driving relationships may still be useful, but they do not explain the current timing of the successor.

### Not Started Activity

A Not Started Activity has no actual start and no actual finish. It represents remaining work that should be forecast by logic, calendars, durations, and valid constraints.

## O

### Open End

An Open End is an activity missing a predecessor or successor, except for approved start or finish exceptions. Open ends are a common schedule quality issue because they break the logic network.

### Open Start

An Open Start is an activity with no valid predecessor logic controlling its start. Open starts can cause activities to appear at the Data Date or project start without a real schedule reason.

### Open Finish

An Open Finish is an activity with no valid successor logic or completion endpoint. Open finishes can prevent the schedule from showing how work affects downstream activities or project completion.

### Original Duration

Original Duration is the planned working time assigned to an activity before progress is recorded. It should represent realistic work scope and productivity assumptions.

### Out-of-Sequence Progress

Out-of-Sequence Progress occurs when work starts or progresses before its predecessor logic has been satisfied. It may reflect real field conditions, but it must be reviewed because it affects retained logic, progress override behavior, float, and forecast dates.

## P

### Percent Complete

Percent Complete indicates how much of an activity is complete. In Primavera P6, percent complete can be duration-based, physical, or units-based depending on settings. The selected type should match the project controls procedure.

### Performance Measurement Baseline

The Performance Measurement Baseline is the approved scope, schedule, and budget plan used to measure project performance. It supports earned value, variance analysis, and management reporting.

### Physical Percent Complete

Physical Percent Complete is a progress measure based on actual physical accomplishment rather than elapsed duration or expended units. It is useful when progress can be measured by installed quantities, deliverables, or field verification.

### Planned Value

Planned Value is the budgeted value of work scheduled to be completed by a point in time. It is used in earned value management to compare planned progress against earned and actual performance.

### Planning

Planning is the process of defining how the project will be executed, including scope sequence, work packaging, resources, constraints, interfaces, and control strategy. Scheduling is one output of planning, but planning is broader than date calculation.

### Planning Package

A Planning Package is a portion of future work that is not yet detailed enough for full activity-level planning. It should eventually be broken down into detailed activities before execution.

### Predecessor

A Predecessor is an activity or milestone that must occur before another activity can start or finish according to the defined relationship. Predecessors explain what drives the timing of downstream work.

### Primavera P6

Primavera P6 is a project scheduling and project portfolio management system used to develop, update, analyze, and report CPM schedules. In project controls, P6 is commonly used for baseline schedules, monthly updates, delay analysis, resource planning, and PMO reporting.

### Procurement Schedule

A Procurement Schedule represents purchasing, vendor data, manufacturing, delivery, and logistics activities. It should be linked to engineering inputs and construction needs so the schedule shows whether materials and equipment will be available on time.

### Progress Override

Progress Override is a P6 scheduling option that can ignore remaining predecessor logic for out-of-sequence activities when calculating the remaining schedule. It should be used only when aligned with the project controls procedure because it can change forecast logic behavior.

### Progress Update

A Progress Update is the periodic process of entering actual dates, remaining durations, percent complete, quantities, and other status information into the schedule. Good progress updates are essential for credible forecasting.

### Project Controls

Project Controls is the discipline of planning, measuring, forecasting, and controlling project scope, schedule, cost, risk, change, and performance. It provides the information needed for management decisions and corrective action.

### Project Finish

Project Finish is the calculated or required completion point of the project. It may be represented by a finish milestone and should be logically connected to the work required to complete the project.

### Project Must Finish By

Project Must Finish By is a P6 project-level date that can create negative float when the calculated finish exceeds the required finish. It should be used carefully and documented because it affects float interpretation.

### Project Start

Project Start is the beginning point of the project schedule. It is often represented by a start milestone or project start date and should align with contract, authorization, or notice-to-proceed requirements.

## R

### Recovery Schedule

A Recovery Schedule is a revised plan designed to recover delay or meet required milestones. It may include resequencing, added resources, changed calendars, overtime, parallel work, or scope strategy changes. Recovery plans should be realistic and supported by logic.

### Relationship

A Relationship is a logical connection between two activities or milestones. In P6, relationship types include finish-to-start, start-to-start, finish-to-finish, and start-to-finish. Relationships are the core of CPM schedule calculation.

### Remaining Duration

Remaining Duration is the amount of working time needed to complete an activity from the Data Date forward. It should be updated based on real progress and realistic productivity, not left as a default value.

### Remaining Early Dates

Remaining Early Dates are calculated early dates for work that remains after the Data Date. They are affected by logic, calendars, constraints, and current status.

### Resource

A Resource is labor, equipment, material, or other capacity assigned to an activity. In P6, resources can support workload planning, cost loading, productivity analysis, and resource leveling.

### Resource Leveling

Resource Leveling is the process of adjusting activity dates based on resource availability. It can be useful for realistic planning but should be reviewed carefully because it may change dates outside normal CPM logic.

### Retained Logic

Retained Logic is a P6 scheduling option that preserves the remaining logic sequence for out-of-sequence work. It can delay remaining work until predecessor logic is satisfied. The selected setting should match the project controls update procedure.

### Risk Register

A Risk Register is a controlled list of project risks, including causes, impacts, owners, responses, and status. Schedule risks from the risk register may influence contingency, mitigation activities, or schedule risk analysis.

## S

### Schedule

A Schedule is a time-based plan showing the sequence, duration, timing, and dependencies of project work. A strong schedule supports execution, forecasting, coordination, reporting, and decision-making.

### Schedule Basis

Schedule Basis is the documented explanation of assumptions, calendars, constraints, sequencing, productivity, resources, inclusions, exclusions, and methodology used to build the schedule. It helps reviewers understand and defend the plan.

### Schedule Compression

Schedule Compression is the process of shortening the schedule duration through methods such as crashing, fast tracking, resequencing, additional shifts, or resource changes. Compression should be evaluated for risk and feasibility.

### Schedule Forecast

A Schedule Forecast is the predicted timing of remaining work based on current progress, logic, durations, calendars, constraints, and known project conditions. A good forecast depends on accurate updates and a credible schedule network.

### Schedule Health Check

A Schedule Health Check is a structured review of schedule quality. It commonly examines logic, constraints, lags, leads, float, durations, calendars, invalid dates, baseline alignment, and update discipline.

### Schedule Narrative

A Schedule Narrative is the written explanation submitted with a schedule update. It typically describes progress, critical path changes, delays, risks, mitigation actions, milestone movement, and major assumptions.

### Schedule Performance Index

Schedule Performance Index, or SPI, is an earned value measure calculated as earned value divided by planned value. SPI below 1.0 indicates less work earned than planned, while SPI above 1.0 indicates more work earned than planned.

### Schedule Quality

Schedule Quality is the degree to which a schedule is complete, logical, realistic, controlled, and useful for forecasting. Quality depends on sound logic, valid calendars, reasonable durations, accurate status, controlled constraints, and clear reporting.

### Schedule Risk Analysis

Schedule Risk Analysis is the process of evaluating uncertainty in schedule durations, logic, and risks to estimate probable completion dates. It often uses simulation methods and requires a credible base schedule.

### Schedule Variance

Schedule Variance is the difference between planned and actual or forecast performance. It may be measured using dates, earned value, milestone movement, or baseline comparison.

### Scheduling

Scheduling is the process of converting the project plan into a time-based sequence of activities, durations, relationships, calendars, and constraints. Scheduling supports execution planning and performance control.

### Scope

Scope is the work required to deliver the project objectives. A schedule should represent the full approved scope at the appropriate level of detail.

### Soft Constraint

A Soft Constraint is a date constraint that influences but does not fully override schedule calculation, such as Start On or After or Finish On or Before. Soft constraints still require justification and should not replace logic.

### Start Milestone

A Start Milestone is a zero-duration activity representing the beginning of a major phase, work package, or project event. It should normally have successor logic and, unless it is a valid project start, appropriate predecessor or authorization logic.

### Start-to-Finish Relationship

A Start-to-Finish relationship means the successor cannot finish until the predecessor starts, subject to any lag. It is rare and often considered unusual logic, so it should be reviewed and justified when used.

### Start-to-Start Relationship

A Start-to-Start relationship means the successor cannot start until the predecessor starts, subject to any lag. It is useful for overlapping work but should be supported by realistic coordination assumptions.

### Status Date

Status Date is another term often used for the Data Date. It marks the point through which actual progress has been reported and from which remaining work is forecast.

### Successor

A Successor is an activity or milestone that depends on another activity. Successor logic shows how an activity affects downstream work and project completion.

## T

### Target Schedule

A Target Schedule is a reference version used for comparison, often similar to a baseline. In P6 terminology, target schedules were used in older versions and are generally comparable to baseline concepts.

### Threshold

A Threshold is an acceptable limit or target value used to evaluate schedule quality or performance. For example, a schedule metric may set a target threshold of zero missing logic activities.

### Time Impact Analysis

Time Impact Analysis is a delay analysis method that inserts a delay event or fragnet into an appropriate schedule update to measure its effect on project completion or milestones.

### Total Float

Total Float is the amount of time an activity can be delayed without delaying the project finish or selected constraint point. It is a key CPM output, but it can be distorted by constraints, calendars, missing logic, and schedule settings.

## U

### Update Cycle

An Update Cycle is the recurring schedule status process, such as weekly or monthly updating. It includes collecting progress, entering actuals, reviewing logic, recalculating the schedule, analyzing changes, and issuing reports.

### User Defined Field

A User Defined Field, or UDF, is a custom field in Primavera P6 used to capture project-specific information. UDFs can support reporting, audit trails, responsibility assignments, or metric tracking.

## V

### Variance

Variance is the difference between planned, actual, baseline, or forecast values. In scheduling, common variances include start variance, finish variance, duration variance, and cost or earned value variance.

## W

### What-If Schedule

A What-If Schedule is a scenario schedule used to test possible changes, mitigation actions, delays, or recovery strategies. It should be clearly separated from the official current schedule unless formally approved.

### Work Breakdown Structure

Work Breakdown Structure, or WBS, is the hierarchical breakdown of project scope into manageable components. In Primavera P6, the WBS organizes activities and supports planning, reporting, responsibility assignment, and schedule control.

### Work Package

A Work Package is a manageable group of work within the WBS, often assigned to a discipline, contractor, area, or responsible owner. Work packages help connect schedule activities to execution responsibility.

### Working Day

A Working Day is a day available for work according to the assigned calendar. Working days affect durations, start dates, finish dates, float, and logic calculations.
