---
permalink: /protocols/development-process/work-approach-checklist.html
---

<link rel="stylesheet" href="roles.css" />

# Work approach checklist

* auto-gen TOC:
{:toc}

## Introduction

The following constitutes a checklist that should become the natural way to
resolve issues. It is intended to be exhaustive, so as to cover each base.

It should be noted that often not all steps are applicable for successfully
resolving a ticket. If so, the respective steps can quickly be checked off as
N/A. It should also be noted that the list is not intended to be written out in
such detail that it becomes obstructive of the actual implementation process by
taking too much time. The list is intended, however, to serve as a guideline for
what in due time should become the natural approach to resolve tickets.

The following Team Members are recognized in this process:

- <span class="role role-end-user">End User</span>

- <span class="role role-stakeholder">Stakeholder</span>

- <span class="role role-product-owner">Product Owner</span>

- <span class="role role-scrum-master">Scrum Master</span>

- <span class="role role-quality-assurance">Quality Assurance</span>

- <span class="role role-developer">Developer

  - <span class="role role-ux">User eXperience </span>
  - <span class="role role-graphic-designer">Graphic Designer </span>
  - <span class="role role-programmer">Programmer</span>

For each step a single role/person is responsible (optionally assisted by Scrum
Master or QA)

-------------------------------------------------------------------------------

## ![](images/idea.png) Idea Ticket

### 1. **Is the IDEA clear enough to create an IDEA ticket❔**

When an <span class="role role-end-user">End User</span> or stakeholder has
the idea that something should be changed or added to the system, it should be
clear what problem the idea addresses.

The product owner should be able to summarize the goal in one or two sentences.

Any relevant information should be gathered together in an IDEA ticket. The
content of the ticket should be clear, without explaining it in person. Once the
ticket is clear it should be validated by the stake-holder to make sure the
ticket represents their reality.

_Responsibility of_: <span class="role role-stakeholder">Stakeholder</span>

### 2. **What is the impact of the idea on the business❔**

The product owner should be able to assess what the idea will cost in terms of
investment (time, resources, money) and how the idea will improve the business
value of the system.

High-level estimates should be provided to indicate what the financial value
of the idea is expected to be. What are the implementation costs? How many
hours will the idea take to implement? For which year are these changes
budgeted? What are these figures based upon?

It should also be noted if the idea will impact Key Performance Indicators
(KPI). How will this help the business in achieving their objectives and
reaching their targets?

_Responsibility of_: <span class="role role-product-owner">Product Owner</span>

### 3. **What is the impact of the idea on the current system❔**

If the idea is user-facing, how will the user be impacted? Does it pertain to
Consumers, Dealers, Employees? Does the UI have to be changed? Will changes have
an impact on the user experience?

If the idea is mostly machine facing, how does it impact the existing stack?
Will systems communication be influenced? Do API's need to change?

_Responsibility of_: <span class="role role-product-owner">Product Owner</span>

### 4. **Which dependencies does the idea have❔**

- Which disciplines are involved?
- Which part of the business does this touch?
- Which processes are involved?

Which area's within the business are involved? Are there departments that need
to be informed or collaborated with?

_Responsibility of_: <span class="role role-product-owner">Product Owner</span>

## ![](images/proposal.png) Proposal Ticket

### 5. **Can a PROPOSAL be created from the available information❔**

Can all relevant fields be filled in, based on the information gather up until
now? If not, more clarity is needed.

When all of the information has been placed in an issue, it should be checked
with the stakeholders to manage their expectations and validate that their
idea and the proposal match.

_Responsibility of_: <span class="role role-product-owner">Product Owner</span>

### 6. **Are all of the specifications clear❔**

In order to clearly communicate which changes need to be made to the existing
applications in order to successfully implement the proposal, specifications
need to be created.

There are various tools available to make matters more clear. Depending on the
subject, one or more of the following can be used to paint a clear picture:

- ![](images/adobe-xd.png) Graphic Design _Responsibility of_:
  <span class="role role-graphic-designer">Graphic Designer</span>.

- ![](images/bitbucket.png) Proof of Concept _Responsibility of_:
  <span class="role role-programmer">Programmer</span>.

- ![](images/bitbucket.png) Prototype _Responsibility of_:
  <span class="role role-programmer">Programmer</span>.

- ![](https://goo.gl/t857rT) Research Question _Responsibility of_:
  <span class="role role-programmer">Programmer</span>.

- ![](images/image.png) Application/High-level Sequence Diagram _Responsibility of_:
  <span class="role role-product-owner">Product Owner</span>.

- ![](images/image.png) Service/System/Low-Level Sequence Diagram _Responsibility of_:
  <span class="role role-programmer">Programmer</span>.

- ![](images/image.png) UI-flow Chart _Responsibility of_:
  <span class="role role-ux">User eXperience</span>.

- ![](images/adobe-xd.png) Wireframe _Responsibility of_:
  <span class="role role-ux">User eXperience</span>.

Instead of creating these deliverables themselves, a product owner can
delegate tasks to the development team.

Eventually Acceptation Criteria should be apparent. This should include more
than just the happy path, deviations from the main flow should also be stated.

_Responsibility of_: <span class="role role-product-owner">Product Owner</span>

## ![](images/epic.png) Epic Ticket

### 7. **Can a PROJECT be created from the available information❔**

Once all of the specifications are clear and can be understood by the team,
the relevant information should be added to a project ticket so work on the
issue can start.

If specifications are unclear or incomplete, more work is needed to retrieve
information and add it to the issue in an understandable fashion.

_Responsibility of_: <span class="role role-product-owner">Product Owner</span>

### 8. **Have all low-level dependencies been met❔**

Do the functional specifications cover the complete scope of what needs to be done?

- Are a (user)story and acceptance criteria present?
- Are all needed graphical designs present?
- Are all needed implementation examples (proof-of-concept/prototype) present?
- Are all needed high-level sequence diagrams present?
- Are all needed low-level sequence diagrams present?
- Are all needed translations present?
- Are all needed UI-flow charts present?
- Are all needed wireframes present?
- Have all relevant research questions been answered?

If not, what is missing? Who is responsible for the deliverable?

_Responsibility of_: <span class="role role-product-owner">Product Owner</span>

## ![](images/story.png) Story Ticket

### 9. **Can a high-level description be created❔**

Once all relevant deliverables have been added to the story ticket, work on the
issue can be planned.

_Responsibility of_: <span class="role role-product-owner">Product Owner</span>

## ![](images/task.png) Task Ticket <br /> ![](images/subtask.png) Sub-Task Ticket

### 10. **Can a low-level work ticket be created❔**

Once it is clear _what_ needs to be built, the developers need to decide _how_
it will be built.

This is basically a complete implementation plan for the actual program code.

1. **What needs to be edited in the code to implement the ticket❔**  
  Which classes or component need to be touched? Which services need to talk
  to each other?

2. **Are any DB migrations required❔**  
  To which database? How do these changes need to be brought to the production
  environment?

3. **Which steps are needed to implement this ticket❔**  
  Break it down into small chunks. Create sub-tickets if that helps to make matter more clear.

_Responsibility of_: <span class="role role-developer">Developer</span>
