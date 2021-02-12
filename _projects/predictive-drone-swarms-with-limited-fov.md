---
title: "Predictive Drone Swarms with Limited Field of View"
date: 2018-11-18T12:33:46+10:00
featured: true
weight: 1
layout: project
---

A study of the effect of **limited field of view** on drone swarms using a state of the art **predictive** trajectory generation and collision avoidance algorithm.

* <span style="color:#fdb73e">**Date:**</span> 15.01.2021
* <span style="color:#fdb73e">**Author:**</span> Thomas Kimble
* <span style="color:#fdb73e">**Context:**</span> EPFL Ma-3 Semester Project

![Swarm](/images/project-images/swarm.png)

# Introduction

Some robotics tasks such as manufacturing, surveillance, or search and rescue require the use of multiple agents to be accomplished. Indeed some objectives would be too time consuming or even impossible to complete if left to a single robot. Cooperation is key in the success of multi-agent tasks, and we can look to nature for inspiration. These observations have lead to groundbreaking discoveries and algorithms such as the Reynolds flock algorithm [1].

Coordination is facilitated with a centralised approach with all agents sharing com- mon information, but real life circumstances do not always allow for this. Therefore another way to approach the problem is by using distributed systems, where each agent is self-contained in its decision making as well as its sensing [2][3].

One standing issue with multi-agent robotics task is how to safely navigate an environment. Collision free trajectory generation is key for safety and success in co- operative missions. Obstacle avoidance can be successfully obtained with algorithms and concepts such as potential fields [4] and vector field histogram [5]. But many al- gorithms mitigate constraints, and assume that each agent is able to sense every other neighbouring robot [6]. Indeed most sensors are limited, thus adding concept of a lim- ited field of view.

In this project, the effect of a limited field of view is to be introduced to a previously functional predictive model [2], combining state of the art collision avoidance algorithms with real world constraints such as the limited field of view found in off the shelf sensors.

# Objectives

Financial accounting and financial reporting are often used as synonyms.

1. According to International Financial Reporting Standards: the objective of financial reporting is:
2. To provide financial information that is useful to existing and potential investors, lenders and other creditors in making decisions about providing resources to the reporting entity.
3. According to the European Accounting Association:

## Relevance

Relevance is the capacity of the financial information to influence the decision of its users. The ingredients of relevance are the predictive value and confirmatory value. Materiality is a sub-quality of relevance.

> The ingredients of relevance are the predictive value and confirmatory value.

Information is considered material if its omission or misstatement could influence the economic decisions of users taken on the basis of the financial statements.

## Faithful Representation

Faithful representation means that the actual effects of the transactions shall be properly accounted for and reported in the financial statements. The words and numbers must match what really happened in the transaction. The ingredients of faithful representation are completeness, neutrality and free from error.

## Enhancing Qualitative Characteristics

### Verifiability
Verifiability implies consensus between the different knowledgeable and independent users of financial information. Such information must be supported by sufficient evidence to follow the principle of objectivity.

### Comparability
Comparability is the uniform application of accounting methods across entities in the same industry. The principle of consistency is under comparability. Consistency is the uniform application of accounting across points in time within an entity.

### Understandability
Understandability means that accounting reports should be expressed as clearly as possible and should be understood by those to whom the information is relevant.
Timeliness: Timeliness implies that financial information must be presented to the users before a decision is to be made.

---

## Statement of cash flows
The statement of cash flows considers the inputs and outputs in concrete cash within a stated period. The general template of a cash flow statement is as follows: Cash Inflow - Cash Outflow + Opening Balance = Closing Balance

Cash Inflow | Outflow | Opening Balance
--- | --- | ---
*Monday* | `Tuesday` | **Wednesday**
1 | 2 | 3


**Example 1:** in the beginning of September, Ellen started out with $$5 in her bank account. During that same month, Ellen borrowed $$20 from Tom. At the end of the month, Ellen bought a pair of shoes for $$7. Ellen's cash flow statement for the month of September looks like this:

* Cash inflow: $$20
* Cash outflow:$$7
* Opening balance: $$5
* Closing balance: $$20 – $$7 + $$5 = $$18

**Example 2:** in the beginning of June, WikiTables, a company that buys and resells tables, sold 2 tables. They'd originally bought the tables for $$25 each, and sold them at a price of $$50 per table. The first table was paid out in cash however the second one was bought in credit terms. WikiTables' cash flow statement for the month of June looks like this:

> **Important:** the cash flow statement only considers the exchange of actual cash, and ignores what the person in question owes or is owed.

## Statement of financial position (balance sheet)
The balance sheet is the financial statement showing a firm's assets, liabilities and equity (capital) at a set point in time, usually the end of the fiscal year reported on the accompanying income statement.

- **fixed assets**
    - property
    - building
    - equipment (such as factory machinery)
- **intangible assets**
    - copyrights
    - trademarks
    - patents
        - pending
        - international
- goodwill

Owner's equity, sometimes referred to as net assets, is represented differently depending on the type of business ownership. Business ownership can be in the form of a sole proprietorship, partnership, or a corporation. For a corporation, the owner's equity portion usually shows common stock, and retained earnings (earnings kept in the company). Retained earnings come from the retained earnings statement, prepared prior to the balance sheet.
