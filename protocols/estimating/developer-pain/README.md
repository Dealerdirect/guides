---
permalink: /protocols/estimating/developer-pain/
---

# Developer Pain

> _"أوجع الأيام بعد الحب، ليس أولها، لأن النبتة لا تتألم فور انقطاع الماء، بل عندما يبدأ الجفاف فعلاً."_  
> ~ محمد حسن علوان

## Table of contents

<!-- toc -->

- [Introduction](#introduction)

- [Criteria](#criteria)

- [Ranking](#ranking)

  - [Using points](#using-points)
  - [Using percentages](#using-percentages)

- [Closing thoughts](#closing-thoughts)

  - [Best suited for](#best-suited-for)
  - [Combining with user pain](#combining-with-user-pain)
  - [Relation to story points](#relation-to-story-points)

<!-- tocstop -->

## Introduction

Like [user pain][user pain], Developer Pain is a way to combine several criteria
into one common ranking criteria. However, where user pain gives a number to
what the _benefit_ is of resolving an issue, Developer Pain gives a global
number to what the _cost_ might be.

The criteria we use within our company can be found on [a separate page][company specific developer pain criteria].

## Criteria

As every company is unique in it's processes and the way it runs it's business,
the criteria used will differ between different companies.

The criteria are meant to be opposing values. For instance:

- Does an issue merely need implementing or is a technical design required?

- Does an issue require changing existing code or will now functionality need to
  be created?

- Is an issue Small (in scope or size) or Large?

- Will an issue be Easy or Hard to implement?

## Ranking

Instead of using a three dimensional rating scale, Developer Pain uses a two
dimensional plan that can be expressed in either points or percentages.

In plain words: simply pick either the left (low) or right (high) value for each
item.

### Using points

Scoring is done by assigning a `1` to the "cheaper" option and a `10` to the
"dearer" option. The minimum cost of an issue will be `List.length * 1`, the
maximum cost will be `List.length * 10`

### Using percentages

For percentage, the following formula is used to define an upper and a lower cost
per item:

```math
lower = 10 / List.length
upper =  100 / List.length
```

Scoring is done by assigning the value of `lower` to the "cheaper" option and
the value of `upper` to the "dearer" option. As [there ain't no such thing
as a free lunch][tanstaafl], the minimum cost of an issue will be `10%`, the
maximum cost will be `100%`

## Closing thoughts 

### Best suited for

There are a few items that define the context which developer pain is best suited 
for:

- Developer pain should _not_ be used to define priority. It is a means to get a
  global idea of _cost_.

- Developer pain works best when utilized for _one_ ticket scope. Either task 
  _or_ story. Do not mix between layers.

- Just as other means of defining scope, whenever one of the criteria change, it
  is wise to do another round of estimating and inform all parties involved.

- When storing developer pain in an ticket tracker, it is important to store the
  individual label and point the score is based on, not _just_ the final number,
  as the label may change and the point alone is meaningless.

### Combining with user pain

Starting out, it is advisable to keep user pain and developer pain separated.

Once developers and product owners are confident with both, a single unified 
score could be calculated based on both separate scores. 

### Relation to story points

More observant (or more experienced) individuals might wonder what the 
difference is between developer pain and [Story Points][story points]. 

One of the main differences is that teams or developers that start out using 
story points often encounter the problem that the numbers feel vague. 

They don't gain more than a fuzzy or superficial insight on how to use story 
points. As a result such teams or individuals often resort to either using 
planning poker to estimating in units of time (hours, days, etc.) or continually 
changing the criteria used to come to a given estimate.

Because developer pain uses fixed criteria, it makes it easier for developers to
reach consistent estimates. This also helps developers to gain the feeling that 
estimating issues is quantifiable rather than educated guesswork

Developer pain could be used as an in-between step to help teams to go from 
"traditional" (time based) estimating to using story points. Developer pain 
could eventually even be abandoned completely in favor of planning poker.

[user pain]: http://www.lostgarden.com/2008/05/improving-bug-triage-with-user-pain.html
[tanstaafl]: https://en.wikipedia.org/wiki/There_ain't_no_such_thing_as_a_free_lunch
[story points]: https://www.mountaingoatsoftware.com/blog/what-are-story-points
[company specific developer pain criteria]:  ./criteria
