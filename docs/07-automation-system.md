# Cobalt Assembly — Automation System

## Operating principle

Cobalt Assembly automates repeatable analysis, preparation, drafting, routing, and reporting. It does not automate consequential decisions.

Every public release, customer message, pricing change, deployment, purchase, domain action, or destructive action stops in an explicit approval queue for the owner to review and execute.

## Automation control plane

```text
Signals
  → Signal Ledger
  → Prioritization and Briefing
  → Content / Product / SaaS / Marketing Work Queues
  → Quality Checks
  → Owner Approval Queue
  → External Execution Handoff
  → Outcome Review
  → Signal Ledger
```

### Canonical objects

| Object | Purpose |
|---|---|
| Signal | Customer feedback, product observation, performance pattern, or market question |
| Brief | Structured statement of problem, audience, desired outcome, and evidence |
| Asset | Draft content, product material, design artifact, or campaign component |
| Work item | Defined unit of product, content, or operational work |
| Approval | Immutable record of what needs a human decision and why |
| Release | Versioned customer-visible change with notes, proof, and follow-up plan |
| Outcome | Measurement, qualitative feedback, and recommended next action |

### Control requirements

- One source of truth for approved strategy, product documentation, and release history.
- A visible queue for failed jobs, incomplete data, and policy exceptions.
- Idempotent workflows: rerunning an automation must not duplicate a release, message, or record.
- Audit trail for source, timestamp, operator, input, output, and approval state.
- No secrets, customer data, or credentials committed to the repository.
- Least-privilege access for every connected service.

## 1. Content generation loop

```text
Customer questions + release signals + library gaps
  → Cluster and score themes
  → Editorial brief
  → Outline and draft set
  → Brand / accuracy / accessibility preflight
  → Owner approval
  → Publication handoff
  → Performance and qualitative review
```

| Stage | Automated responsibility | Human approval or decision |
|---|---|---|
| Capture | Collect submitted questions, release notes, support themes, and planned topics | Approve source scope and permissions |
| Prioritize | Cluster duplicates, label audience/pathway, score relevance | Choose editorial priority |
| Create | Draft outline, article, social derivative, email excerpt, and metadata | Approve final claims, voice, and published copy |
| Preflight | Check brand terms, readability, links, structure, accessibility, and duplication | Resolve exceptions |
| Package | Prepare a publication-ready asset set and release note | Publish externally |
| Learn | Summarize engagement, questions, and content gaps | Decide what becomes the next brief |

### Content quality gates

- Outcome-led title and summary.
- Evidence or clearly labeled opinion where applicable.
- Cobalt Assembly voice and blue/silver visual direction.
- Accessible hierarchy, descriptive links, and reduced-motion-safe media.
- One primary continuation into a product, solution, or library path.

## 2. Product update loop

```text
Support feedback + product requests + release review
  → Dedupe and classify
  → Evidence-based opportunity score
  → Change brief and acceptance criteria
  → Owner prioritization
  → Build and quality package
  → Release approval
  → Release note and customer education
  → Post-release review
```

| Stage | Automated responsibility | Human approval or decision |
|---|---|---|
| Intake | Capture requests, defects, friction reports, and suggestions | Confirm sensitive or incomplete input handling |
| Analysis | Group themes and surface repeated customer outcomes | Decide priority and scope |
| Planning | Generate a change brief, dependencies, risk notes, and acceptance criteria | Approve what enters the release plan |
| Preparation | Draft release notes, help content, test scenarios, and customer messaging | Approve customer-facing representation |
| Review | Summarize QA results and unresolved risks | Approve external release execution |
| Learning | Compare expected outcome with post-release evidence | Approve follow-up, rollback, or iteration |

### Prioritization model

Score work items using:

1. Customer outcome impact
2. Evidence strength
3. Strategic pathway fit
4. Effort and dependency load
5. Reliability, privacy, and support risk

Automation proposes an ordered queue; the owner approves the roadmap.

## 3. SaaS improvement loop

```text
Usage events + completion signals + errors + support feedback
  → Reliability and activation review
  → Opportunity or incident brief
  → Experiment proposal
  → Owner approval
  → Sandbox validation package
  → Release approval handoff
  → Monitoring and learning
```

| Stage | Automated responsibility | Human approval or decision |
|---|---|---|
| Observe | Aggregate activation, completion, error, latency, and support signals | Confirm data retention and analysis scope |
| Diagnose | Identify anomalous paths, recurring failure modes, and common abandonment points | Validate the problem statement |
| Propose | Draft experiment, UX improvement, copy refinement, or reliability task | Approve experiment scope and user impact |
| Validate | Prepare test cases, regression checks, and release notes | Approve external test or release execution |
| Monitor | Summarize post-release health and customer impact | Decide whether to expand, revise, or retire |

### SaaS safeguards

- Never represent generated output as a verified fact without appropriate evidence.
- Never automatically alter customer data, permissions, pricing, or account access.
- Never deploy automatically from an AI-generated recommendation.
- Escalate privacy, security, reliability, and billing anomalies immediately to the approval queue.

## 4. Marketing loop

```text
Approved release or content brief
  → Campaign brief
  → Segment-aware message set
  → Brand and compliance preflight
  → Owner approval
  → External publication or send handoff
  → Attribution and outcome review
  → Next campaign brief
```

| Stage | Automated responsibility | Human approval or decision |
|---|---|---|
| Plan | Create campaign objective, audience, message angle, and asset checklist | Approve campaign intent and audience |
| Draft | Prepare landing-page sections, emails, social copy, and release notes | Approve all public copy and claims |
| Preflight | Check voice, links, consent language, accessibility, and duplicated sends | Resolve exceptions and approve send |
| Handoff | Package assets by channel with tracking labels | Publish or send externally |
| Learn | Summarize response, activation, objections, and content gaps | Approve iteration or follow-up campaign |

### Funnel-aware triggers

| Trigger | Automation output | Required next approval |
|---|---|---|
| New library asset | Pathway-specific email and social draft | Public release approval |
| New product release | Product-page update, launch brief, customer education draft | Publish and send approval |
| Diagnostic completion | Personalized result and non-public nurture queue | Consent and message-policy review |
| First customer success | Contextual next-product recommendation draft | Customer communication approval |
| Customer inactivity | Value-first reactivation draft | Send approval |

## Approval matrix

| Action | Automation may prepare | Owner approval required |
|---|---|---|
| Research, summaries, and classification | Yes | No, unless source access is sensitive |
| Draft content and product briefs | Yes | Yes before public or customer-facing use |
| Update repository documentation | Yes | Yes before public push when material |
| Publish a page, post, email, or release | No | Always |
| Change pricing or commercial terms | No | Always |
| Deploy software or modify production systems | No | Always; execution remains external |
| Purchase, register, bill, or transfer funds | No | Never automated |
| Delete data or alter customer access | No | Always, with explicit scope review |

## Weekly automation rhythm

| Day | System output | Owner decision |
|---|---|---|
| Monday | Signal Brief: top customer, product, and market themes | Select the week's priority |
| Tuesday | Content and product brief package | Approve scope and claims |
| Wednesday | SaaS reliability and opportunity report | Approve experiments or fixes |
| Thursday | Campaign and launch asset package | Approve customer-facing work |
| Friday | Release review, quality ledger, and learning summary | Approve next release or hold |

This rhythm aligns directly with the twelve-week release season in the weekly release schedule.

## Measurement framework

### Content

- Brief-to-approved-asset cycle time
- Completion and quality-check pass rate
- Product-pathway engagement
- Qualitative question and objection themes

### Product

- Evidence-backed opportunity adoption
- Release quality and support burden
- Time from approved brief to release-ready package
- Repeat issues and unresolved risk count

### SaaS

- Activation and task-completion signals
- Reliability, latency, and failure patterns
- Human review rate for generated outputs
- Post-release customer impact

### Marketing

- Consent-based audience growth
- Diagnostic completion and pathway engagement
- Product-proof interaction
- First-success activation
- Retention and next-product adoption

## Implementation sequence

1. Establish the Signal Ledger, release log, approval queue, and documentation source of truth.
2. Implement the content loop first because it is low-risk, high-frequency, and easy to review.
3. Add product-update intake and release-note automation.
4. Add SaaS observation and experiment briefing after data policies are explicit.
5. Add marketing drafting and attribution only after consent, brand, and review controls are in place.
6. Review all workflows quarterly for value, failure modes, access scope, and policy compliance.

## Non-negotiable boundaries

- Automations may recommend; the owner decides.
- Public, financial, legal, and deployment actions always require explicit approval.
- Customer trust, privacy, and operational clarity take priority over output volume.
- The automation system must remain visibly human-governed and auditable.
