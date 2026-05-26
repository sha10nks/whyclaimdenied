export const GUIDE_CATEGORIES = {
  appeals: { label: 'Appeals' },
  paperwork: { label: 'Paperwork' },
  deadlines: { label: 'Deadlines' },
  disputes: { label: 'Disputes & Escalation' },
  auto: { label: 'Auto Denials' },
  health: { label: 'Health Denials' },
  rights: { label: 'Consumer Rights' },
}

const d = (isoDate) => isoDate

const buildAuthorityBaseSections = ({ claimTypes }) => {
  const isAuto = claimTypes.includes('auto')
  const isHealth = claimTypes.includes('health')

  const denialDocLabel = isHealth && !isAuto ? 'denial notice and EOB' : 'denial letter'
  const coverageLabel = isHealth && !isAuto ? 'plan' : 'policy'

  const triageChecklist = [
    `Save the ${denialDocLabel} and write down the stated reason in one sentence.`,
    `Copy the exact ${coverageLabel} language the insurer cites (or request it if missing).`,
    'Write down every date mentioned (loss/service date, report date, submission date, denial date).',
    'Calendar the appeal deadline and the submission method (portal, fax, mail).',
    'Start a one-page timeline: date → event → proof (exhibit).',
  ]

  const denialLetterParagraphs = [
    `High-intent appeals start with reading the ${denialDocLabel} like a checklist. Ignore the filler and focus on what drives the decision: the stated reason, the contract language cited, the facts and dates relied on, and the appeal instructions.`,
    'Convert the denial into an evidence request. Every reason maps to a proof problem: a missing document, a wrong date, a misapplied definition, or an unmet criterion. If you cannot say what would change the decision, you do not have enough information yet—request the claim file and criteria.',
    'Do not guess the insurer’s logic. Ask for it. When you have the notes/criteria, write your appeal so a reviewer can verify each fact quickly: headings that mirror the denial reasons, a short response under each heading, and labeled exhibits referenced in the paragraph where they matter.',
  ]

  const workflowSteps = [
    'Day 0: Extract the reason, the cited contract language, and the deadline into a one-page summary.',
    'Day 0–1: Request the claim file, notes, and decision criteria in writing; ask the insurer to confirm the appeal deadline in writing.',
    'Day 1–3: Build your timeline and exhibit list (Exhibit A, B, C…) so the file is review-ready.',
    'Day 3–7: Draft the appeal: mirror denial reasons as headings; answer each with facts + exhibits; end with a clear request.',
    'Submit: Use the documented channel and save proof of submission and delivery.',
    'Follow up: Ask for the written decision date; keep a log of every contact and document.',
  ]

  const evidenceBullets = [
    `Universal: ${denialDocLabel}, full ${coverageLabel} documents (including endorsements/amendments), and a one-page timeline + exhibit list.`,
    isAuto
      ? 'Auto: declarations page, proof of premium payment, cancellation/nonrenewal notices, police report, photos, repair estimates, tow/storage invoices, witness statements.'
      : null,
    isHealth
      ? 'Health: itemized bill, CPT/HCPCS and ICD codes, provider letter, relevant chart notes/test results, referral/prior authorization records, and the plan’s medical policy/criteria used for review.'
      : null,
    'Submission proof: portal confirmation, fax confirmation, or certified mail receipt with date/time.',
  ].filter(Boolean)

  const escalationSteps = [
    'Request the full written rationale and the exact criteria/evidence that would change the decision.',
    'Ask for a supervisor or higher-level review and confirm the reviewer level in writing.',
    isHealth
      ? 'If health: complete the plan’s internal appeal steps, then pursue external review when available and appropriate.'
      : null,
    'Use state-specific resources when process issues occur (unclear reasons, missing notices, missed response deadlines).',
  ].filter(Boolean)

  const stateRelevanceParagraphs = [
    'Deadlines, complaint options, and claim-handling patterns vary by state and by insurer. Use the state pages linked below to choose the right state context and to see localized next steps without changing your current URLs.',
    'When you cite a state page in your appeal, use it as a navigation aid for yourself (what to request, what to track) rather than as a substitute for your policy/plan language. Your strongest argument stays anchored to the contract terms and your evidence.',
  ]

  return [
    {
      id: 'triage',
      heading: 'Quick triage (do this before you write a long appeal)',
      paragraphs: [
        `Treat the denial as a file problem. If you can quickly organize the facts, dates, and ${coverageLabel} terms, your appeal becomes easier to review and harder to dismiss.`,
        `If you are close to the deadline, submit a short protective appeal stating you dispute the denial and will supplement after receiving the claim file and criteria.`,
      ],
      checklist: triageChecklist,
    },
    {
      id: 'denial-letter',
      heading: `How to read the ${denialDocLabel} so you respond to the actual reason`,
      paragraphs: denialLetterParagraphs,
    },
    {
      id: 'workflow',
      heading: 'Step-by-step appeal workflow (ordered actions)',
      steps: workflowSteps,
    },
    {
      id: 'evidence',
      heading: 'Documents and evidence checklist (high-impact, not “everything”)',
      paragraphs: [
        'A strong file is targeted. Attach what answers the stated reason and label it clearly. Overloading the file can bury the one document that matters.',
      ],
      bullets: evidenceBullets,
    },
    {
      id: 'state-relevance',
      heading: 'State-specific relevance (where to look and why it matters)',
      paragraphs: stateRelevanceParagraphs,
    },
    {
      id: 'escalation',
      heading: 'Escalation paths if the denial is upheld',
      paragraphs: [
        'If you receive a second denial, your goal is to force specificity. A repeat denial should tell you exactly which fact, document, or criterion is still missing and what review level considered your appeal.',
      ],
      steps: escalationSteps,
    },
  ]
}

export const GUIDES = [
  {
    slug: 'what-to-do-after-a-claim-denial',
    title: 'What to Do After Your Insurance Claim Is Denied',
    description:
      'A step-by-step, high-intent playbook for responding to a denial: how insurers decide, what to request, what to write, what to attach, and how to escalate if the denial stands.',
    canonicalPath: '/guides/what-to-do-after-a-claim-denial',
    categories: ['appeals', 'paperwork', 'rights'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Treat the denial as a review-file problem: identify the exact denial reason and the contract language cited, request the claim file and decision criteria, build a one‑page timeline with labeled exhibits, then submit a point‑by‑point appeal that answers each stated reason with targeted evidence and a clear request for a written reconsideration decision.',
    sections: [
      {
        id: 'triage',
        heading: 'The first hour: triage the denial so you do not waste your appeal',
        paragraphs: [
          'Denials are usually a chain of smaller decisions: what facts the insurer accepted, what documents were in the file, and which policy/plan rule they applied. Your fastest path to a reversal is to identify the exact rule used and then supply the missing fact, missing document, or missing criterion that makes that rule inapplicable.',
          'Pull out four items from the denial letter/EOB: (1) the stated denial reason, (2) the policy/plan section cited, (3) the dates the insurer used, and (4) the appeal instructions and deadline. If any are missing or vague, request them in writing before you draft a long appeal.',
        ],
        checklist: [
          'Save the denial letter/EOB PDF, envelopes, and all portal messages (screenshots).',
          'Write the denial reason as a single sentence and quote the policy/plan section cited.',
          'Create a dates list (loss/service, report, submission, denial) and verify each date against proof.',
          'Pull your declarations page (auto) or SPD/EOC + denial notice (health) so you can quote terms accurately.',
        ],
      },
      {
        id: 'denial-letter',
        heading: 'How to interpret the denial letter or EOB (so you respond to the real reason)',
        paragraphs: [
          'Denial documents contain facts, contract language, and instructions. Read the denial like a checklist: what rule is being applied, which facts support it, and what proof would change the decision. If the document is vague, request the claim file and criteria instead of guessing.',
        ],
        checklist: [
          'Quote the policy/plan section cited (or request the exact citation in writing).',
          'Identify the dates used and check them against objective proof (reports, invoices, records).',
          'Locate the appeal deadline and submission method and save a screenshot/PDF copy.',
        ],
      },
      {
        id: 'insurer-logic',
        heading: 'How insurers decide denials (and how to use that logic against the denial)',
        paragraphs: [
          'Denials commonly fall into one of five buckets: (1) coverage does not exist on the date of loss/service (policy lapse, cancellation, eligibility), (2) the event is excluded or not covered (exclusion, non-covered use, benefit exclusion), (3) a condition was not met (late notice, failure to cooperate, prior authorization), (4) the insurer disputes the facts (liability/fault, causation, medical necessity), or (5) the claim is administratively blocked (coding/documentation error, missing records, timely filing).',
          'Appeals fail when they argue fairness instead of answering the bucket. A strong appeal identifies the bucket, proves the condition was met (or that the insurer used the wrong date/rule), and supplies the exact document a reviewer needs to reverse the decision under the insurer’s own framework.',
        ],
        bullets: [
          'Coverage/date disputes: billing history, cancellation notices, eligibility records, effective dates.',
          'Exclusions/not covered: contract language, endorsements, plan amendments, coverage criteria.',
          'Fact disputes: objective proof (photos, police report, witness statements, chart notes, test results).',
        ],
      },
      {
        id: 'request-claim-file',
        heading: 'Request the claim file and decision criteria (this is where most reversals start)',
        paragraphs: [
          'Many denials are “thin-file” decisions: the adjuster did not have a key record, relied on a wrong date, or applied an internal guideline you have not seen. When you request the claim file, you convert a vague denial into a concrete checklist of what the decision was based on and what is missing.',
          'Ask for documents that reveal decision logic (notes, criteria, records reviewed). Keep the request short and specific so the insurer has to answer clearly: what did you rely on, and what would change the decision?',
        ],
        checklist: [
          'A complete copy of the policy/plan provisions relied on (including endorsements/amendments).',
          'Claim notes/adjuster notes and the internal timeline used for the decision.',
          'All photos, estimates, recorded statements, and investigation materials (auto).',
          'Denial codes, medical policy criteria, utilization review rationale, and records reviewed list (health).',
          'A written statement of the appeal deadline and where/how to submit.',
        ],
      },
      {
        id: 'workflow',
        heading: 'Step-by-step appeal workflow (ordered actions that build a review-ready file)',
        paragraphs: [
          'Use this workflow as a strict sequence. The order matters: lock down deadlines and decision logic before you spend time writing, then build a clean file that a reviewer can approve without guessing.',
        ],
        steps: [
          'Day 0: Extract the denial reason, the cited contract language, and the deadline into a one-page summary.',
          'Day 0–1: Request the claim file/criteria in writing and ask the insurer to confirm the appeal deadline in writing.',
          'Day 1–3: Build a one-page timeline (date → event → proof) and a labeled exhibit list (Exhibit A, B, C…).',
          'Day 3–7: Draft the appeal using the denial reasons as headings; answer each reason with tight paragraphs and targeted exhibits.',
          'Submit: Use the insurer’s designated channel, then save proof (upload confirmation, certified mail receipt, fax confirmation).',
          'Follow-up: Ask for a written decision date; calendar check-ins; keep everything in a single case log.',
        ],
      },
      {
        id: 'appeal-writing',
        heading: 'How to write an appeal that matches how reviewers are trained to deny',
        paragraphs: [
          'Appeals are evaluated against a checklist: does the appeal address the stated reason, does the evidence support the requested outcome, and is the file organized enough to justify reversing the denial? Write so a reviewer can approve without making assumptions.',
          'Mirror the denial letter’s structure. Quote the denial statement, quote the relevant policy/plan text, then attach evidence that changes the conclusion. Use a timeline and exhibit labels so verification is fast.',
        ],
        checklist: [
          'Header: claim number, policy/plan number, insured/patient name, date of denial, date of loss/service.',
          'One-sentence request: “I request reconsideration and payment/coverage based on the attached exhibits.”',
          'Sections that mirror denial reasons (same order, similar wording).',
          'Exhibit list with labels and one-line descriptions.',
          'Submission proof saved and a calendar reminder for the expected response date.',
        ],
      },
      {
        id: 'evidence',
        heading: 'Required documents and evidence checklist (what actually moves decisions)',
        paragraphs: [
          'The best evidence is evidence that directly answers the denial reason. If the denial is “late notice,” dates and investigation impact matter. If the denial is “not covered,” contract language and coverage pathways matter. If the denial is “not medically necessary,” criteria and clinical documentation matter.',
          'Use the checklist below as a menu. Attach what answers the denial reason and label it clearly.',
        ],
        bullets: [
          'Universal: denial letter/EOB, policy/plan documents (including endorsements/amendments), claim identifiers, your timeline + exhibit list.',
          'Auto evidence: declarations page, proof of premium payment, cancellation/nonrenewal notices, police report, photos, repair estimates, tow/storage invoices, witness statements.',
          'Health evidence: itemized bill, CPT/HCPCS and ICD codes, provider letter, relevant chart notes/test results, and prior auth/referral communications.',
          'Medical-necessity disputes: the plan’s medical policy criteria and a provider statement mapping facts to criteria.',
        ],
      },
      {
        id: 'escalation',
        heading: 'Escalation paths if the denial is upheld (internal appeal → external review → regulator options)',
        paragraphs: [
          'If your first appeal is denied, your next step depends on the denial category and coverage type. Auto claims often escalate through supervisor review, appraisal/arbitration provisions (if your policy includes them), or complaint channels. Health claims often have formal internal appeals and, in many situations, an external review process.',
          'State rules and timelines vary. Your state-specific hub pages include localized next steps and consumer help options—use them to identify the right regulator contact and any state-specific appeal considerations.',
        ],
        steps: [
          'Ask for the full written rationale and the exact evidence/criteria that would be required for approval.',
          'Request supervisor/escalation review and confirm the reviewer level (first-level vs second-level).',
          'If health: pursue the plan’s internal appeal process, then external review when available.',
          'If auto: review policy dispute provisions (appraisal/arbitration) and document requests/responses in writing.',
          'File a complaint with the appropriate consumer/regulator office for process failures (unclear reasons, missing notices, failure to respond).',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials (and how to avoid them)',
        bullets: [
          'Appealing without quoting the exact contract language relied on (you end up arguing the wrong rule).',
          'Submitting a narrative without a timeline and exhibit labels (reviewers cannot verify facts quickly).',
          'Sending everything instead of targeted evidence (key items get missed).',
          'Missing deadlines or using the wrong submission channel (appeal rejected as untimely or incomplete).',
          'Failing to request decision criteria (especially for medical necessity/prior authorization denials).',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1 (health): “Prior authorization not obtained” after an urgent scheduling situation',
        text: 'You receive an EOB/denial stating a procedure was denied because prior authorization was not obtained. First, request the plan’s prior authorization requirement and the criteria/records reviewed for this decision. Then gather the provider’s submission history, scheduling notes, and a short physician letter that addresses the plan’s criteria and urgency. Your appeal should quote the plan rule, present a clean timeline, and request reconsideration or a written statement of the exact missing item needed for approval.',
      },
      {
        title: 'Scenario 2 (auto): “Policy lapsed/canceled” but you believe coverage was active',
        text: 'Your accident claim is denied for lapse/cancellation. Request the billing ledger and policy status history and ask the insurer to confirm the exact cancellation effective date/time used. Build a one-page timeline (due date, payment time, posting date, cancellation effective time, loss time) with exhibits (payment proof, notices, declarations). Quote the cancellation language and request a written reconciliation of any date mismatch.',
      },
    ],
    faqs: [
      {
        q: 'Is a denied claim always final?',
        a: 'No. Many denials are based on missing documentation, an incorrect date, a misapplied policy/plan rule, or a disputed fact. A focused appeal that answers the stated reason with targeted evidence can lead to reconsideration.',
      },
      {
        q: 'Should I call before I appeal?',
        a: 'Calls can clarify logistics (deadline, submission channel, missing document list), but the requests and your appeal should be in writing so there is a clear record of what was asked, what was submitted, and when.',
      },
      {
        q: 'What is the single most important document to request?',
        a: 'The exact policy/plan provision relied on (and any internal criteria or medical policy) plus the claim notes/rationale showing the facts and documents the decision used.',
      },
      {
        q: 'What if the denial letter is vague or does not cite a policy/plan section?',
        a: 'Request the specific contract language and criteria in writing. Your appeal is stronger and faster when it answers the exact rule the insurer relied on rather than guessing.',
      },
      {
        q: 'Should I submit all my documents to be safe?',
        a: 'Usually no. Submit a clean, labeled set of exhibits that directly answer the denial reason. Overloading the file can hide the key evidence and slow review.',
      },
      {
        q: 'What if I am close to the deadline and do not have the full claim file yet?',
        a: 'Submit a short protective appeal stating you dispute the denial and will supplement after you receive the claim file/criteria. Then follow up to confirm the deadline and supplement window in writing.',
      },
      {
        q: 'When does external review or regulator help make sense?',
        a: 'External review is most relevant for eligible health coverage disputes (especially medical necessity). Regulator/consumer complaint options are most useful for process issues (unclear reasons, missing notices, failure to respond). State-specific options vary—use the state hub pages linked above to start with the correct office and context.',
      },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-california', label: 'Auto claim denials in California' },
      { path: '/health-insurance-claims-denied-texas', label: 'Health claim denials in Texas' },
      { path: '/auto-insurance-claims-denied-florida', label: 'Auto claim denials in Florida' },
      { path: '/health-insurance-claims-denied-new-york', label: 'Health claim denials in New York' },
    ],
  },
  {
    slug: 'how-to-write-an-insurance-appeal-letter',
    title: 'Insurance Appeal Letter Examples (and a Fill-in Template)',
    description: 'Realistic appeal letter examples, a fill-in structure, and what to attach so your appeal reads like a review-ready file.',
    canonicalPath: '/guides/how-to-write-an-insurance-appeal-letter',
    categories: ['appeals', 'paperwork'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Use the denial reasons as your headings, quote the exact policy/plan language being applied, answer each reason with a short fact-and-evidence response, attach labeled exhibits, and end with a clear request for reconsideration and a written decision date.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto', 'health'] }),
      {
        id: 'structure',
        heading: 'A high-intent appeal letter structure reviewers can actually use',
        paragraphs: [
          'A strong appeal letter is not a speech. It is a document that helps a reviewer verify facts and apply contract language. Reviewers are trained to look for: the stated reason, the specific policy/plan provision, and evidence that changes the conclusion under that provision.',
          'The simplest way to win is to mirror the denial letter. If the denial has two reasons, your appeal has two sections in the same order. Under each section, you quote the denial statement, then you answer it with a short paragraph that references your exhibits.',
          'Write as if your file is being reviewed by someone who has never spoken to you. Your appeal should stand on its own: clear dates, clear definitions, and clean exhibits.',
        ],
        checklist: [
          'One-page timeline (date → event → proof) and an exhibit list before you start writing paragraphs.',
          'One section per denial reason, using the same wording as the denial letter where possible.',
          'One to three paragraphs per reason: (a) what the insurer claims, (b) what the contract says, (c) what your evidence proves.',
          'A clear request: reconsider/approve/pay or specify the exact missing document/criterion in writing.',
        ],
      },
      {
        id: 'fill-in-template',
        heading: 'Fill-in appeal letter template (copy/paste)',
        paragraphs: [
          'Use this as a structure, not as a substitute for evidence. The power comes from matching the denial reasons and attaching the right exhibits.',
        ],
        checklist: [
          'Date: [MM/DD/YYYY]',
          'To: [Insurer/Plan Name], Appeals Department',
          'Re: Appeal of Denial — Claim #: [ ], Policy/Plan #: [ ], Insured/Patient: [ ]',
          'Denial date: [ ], Loss/Service date: [ ]',
          'Requested outcome: I request reconsideration and approval/payment of this claim based on the attached exhibits.',
          'Reason 1 (quote from denial): “…”',
          'Response to Reason 1: [1–3 short paragraphs referencing exhibits]',
          'Reason 2 (quote from denial): “…”',
          'Response to Reason 2: [1–3 short paragraphs referencing exhibits]',
          'Exhibits: Exhibit A — [ ]; Exhibit B — [ ]; Exhibit C — [ ]',
          'Closing: If additional documentation or criteria is required, please specify it in writing and confirm the submission deadline. Please provide a written decision by [date] or confirm the expected response timeframe.',
        ],
      },
      {
        id: 'attachments',
        heading: 'What to attach (and what to avoid attaching)',
        paragraphs: [
          'Most repeat denials happen because the appeal did not attach the exact document that matches the denial reason. The goal is not volume—it is relevance. Attach fewer documents, but make them unmistakably tied to the reason cited.',
          'Exhibits should be labeled and referenced in the paragraph where they matter. A reviewer should not have to hunt through a 50-page upload to find the one line that supports your position.',
        ],
        bullets: [
          'Always attach: the denial letter/EOB page that states the reason and the appeal deadline.',
          'Attach contract proof: the policy/plan page you are relying on (including definitions/exceptions).',
          'Attach fact proof: photos, reports, notes, invoices, or records that change the stated fact.',
          'Avoid: dumping unrelated records “just in case” (it can delay review and bury key evidence).',
          'Avoid: emotional arguments without a contract/evidence hook (they do not change the decision criteria).',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials',
        bullets: [
          'Writing a long narrative without answering the denial reasons in order.',
          'Not quoting the policy/plan language and forcing the reviewer to guess which rule you mean.',
          'Submitting attachments without an exhibit list and without referencing them in the letter.',
          'Missing deadlines or using the wrong submission channel (portal vs fax vs mail).',
          'Not requesting decision criteria (especially for medical necessity/prior authorization disputes).',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1 (auto): late notice denial that can still be investigated',
        text: 'Your insurer denies an auto claim for “late notice,” stating that you reported the accident 30 days after the loss. A strong appeal does not argue fairness. It explains why the delay occurred (briefly), then focuses on investigation impact. Your exhibits should show the claim can still be evaluated: dated photos of damage, a police report number, witness contact information, repair estimates, and any communications showing you attempted to report earlier. In the letter, you quote the late-notice provision and respond: (1) your timeline, (2) what facts remain verifiable, and (3) why the insurer was not materially harmed in investigating coverage and damages. End by requesting reconsideration or a written description of what specific investigation item is now impossible due to timing.',
      },
      {
        title: 'Scenario 2 (health): “not medically necessary” denial requiring criteria-mapped evidence',
        text: 'Your health plan denies an imaging or procedure as “not medically necessary.” The win condition is criteria alignment. Request the medical policy/criteria used for review and the list of records reviewed. Then build exhibits that map facts to criteria: a physician letter that addresses each criterion, chart notes showing symptoms and failed conservative treatment, test results, and prior authorization communications if relevant. Your appeal should quote the plan’s criteria language, then for each criterion provide a short factual statement with a citation to an exhibit page. If your provider can add a concise addendum that uses the plan’s terminology, include it. End by requesting internal reconsideration or, if appropriate, the next-level appeal pathway and external review instructions in writing.',
      },
    ],
    faqs: [
      { q: 'How long should an appeal letter be?', a: 'Aim for 1–2 pages for the letter itself, plus exhibits. The letter should be easy to scan and should point the reviewer to the exact evidence.' },
      { q: 'Should I send the entire medical record?', a: 'Usually no. Send the pages that directly answer the denial criteria and cite where additional context exists if requested.' },
      { q: 'What is the best “format” for exhibits?', a: 'A single PDF with a cover sheet, an exhibit list, and clear labels (Exhibit A, B, C). Reference those labels in the paragraphs where they matter.' },
      { q: 'What if the denial letter has multiple reasons?', a: 'Treat each reason like a separate mini-case. Use the same order as the denial letter so the reviewer can check your evidence quickly.' },
      { q: 'What if the denial letter does not cite policy/plan language?', a: 'Request the exact provision and criteria in writing. Your appeal is stronger when it responds to the precise rule being applied.' },
      { q: 'What should I ask for at the end of the letter?', a: 'Ask for a written reconsideration decision, the expected response timeframe, and a written list of any missing documents/criteria needed for approval.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-california/not-medically-necessary', label: 'California medical-necessity denials' },
      { path: '/health-insurance-claims-denied-new-york/prior-authorization-missing', label: 'New York prior authorization denials' },
      { path: '/auto-insurance-claims-denied-texas/missed-reporting-deadline', label: 'Texas late notice denials' },
    ],
  },
  {
    slug: 'how-to-read-an-eob-or-denial-letter',
    title: 'How to Read and Understand a Claim Denial Letter (EOB Included)',
    description: 'How to decode denial codes, contract language, and next steps so you can respond with the right documents and headings.',
    canonicalPath: '/guides/how-to-read-an-eob-or-denial-letter',
    categories: ['paperwork', 'appeals'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Identify the exact denial reason, the policy/plan section cited, the deadline to appeal, and the specific document or fact the insurer says is missing—then build your appeal to answer those items in order.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto', 'health'] }),
      {
        id: 'what-matters',
        heading: 'What matters most in a denial letter or EOB (the parts that drive decisions)',
        paragraphs: [
          'Denial documents often contain a lot of filler. The decision is usually driven by a small set of items: the stated reason (often a short sentence), the contract language or denial code used, the facts and dates relied on, and the appeal instructions with deadlines.',
          'For health claims, you may see an Explanation of Benefits (EOB) plus a separate denial notice. The EOB often includes codes and payment lines. The denial notice is where appeal rights, timelines, and review levels are typically explained.',
          'Your goal is to convert the document into a checklist you can answer. If you cannot identify what would change the decision, you need more information from the claim file and the criteria used.',
        ],
        checklist: [
          'Reason: one sentence stating why the claim was denied or reduced.',
          'Rule: the exact policy/plan language or denial code cited.',
          'Facts: the dates and facts the insurer says are true.',
          'Deadline: when and how to appeal (and whether multiple levels exist).',
          'Fix path: missing document, missing criterion, disputed fact, or administrative correction.',
        ],
      },
      {
        id: 'denial-codes',
        heading: 'How to use denial codes and reason codes (especially for health claims)',
        paragraphs: [
          'Codes are shortcuts for decision categories. They are useful because they tell you whether the denial is clinical (criteria not met), contractual (not covered/out-of-network), or administrative (coding, documentation, timely filing). Your appeal strategy changes depending on the category.',
          'When you see a code, treat it as a request: “Which policy/plan section and which criteria did you apply for this code?” Then you build exhibits that answer that criteria or correct the administrative issue.',
        ],
        bullets: [
          'Administrative/coding/documentation: fix and resubmit, then appeal if the corrected submission is still denied.',
          'Not covered/out-of-network: identify the exact exclusion/network rule and any exception pathway.',
          'Medical necessity/prior authorization: request the medical policy criteria and map the record to each criterion.',
          'Timely filing: verify submission dates and obtain proof of submission/receipt.',
        ],
      },
      {
        id: 'outline-from-letter',
        heading: 'Build your appeal outline directly from the denial document',
        paragraphs: [
          'The fastest way to write a high-intent appeal is to copy the denial reasons into your document as headings. Your job is not to invent an outline—it is to answer the insurer’s outline.',
        ],
        steps: [
          'Copy each denial reason as a heading in the same order as the letter/EOB.',
          'Under each heading, write a short response: (a) what the letter claims, (b) what the contract/criteria says, (c) what your evidence proves.',
          'Attach 1–3 exhibits per heading and cite them by label in the paragraph that needs them.',
          'End with a specific request: reconsideration/payment/coverage, plus a written decision date or response timeframe.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes when interpreting denial letters',
        bullets: [
          'Appealing without quoting the exact policy/plan language or denial code being applied.',
          'Treating the denial reason as a feeling (“unfair”) instead of a criteria problem (“missing documentation”).',
          'Missing deadlines because you focused on the narrative and not the appeals section.',
          'Not requesting the claim file and criteria when the denial is vague.',
          'Submitting unorganized attachments that do not match the denial’s structure.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1 (health): “Coding or documentation error” on an EOB',
        text: 'You see an EOB line with a denial code suggesting coding/documentation issues. The high-intent approach is to treat it as “fix and verify”: request the exact code description and the plan’s required documentation, ask the provider to correct the claim (CPT/ICD/modifiers), attach the chart note pages that support the billed service, then resubmit. If the corrected submission is still denied, your appeal should include the original and corrected submissions plus proof of what changed and why it matches the requirements.',
      },
      {
        title: 'Scenario 2 (auto): denial letter says “not covered” without a clear exclusion',
        text: 'The denial letter states “not covered” but only references a broad section. A strong response requests the specific exclusion/endorsement relied on and the claim notes showing how the insurer applied it. Your appeal should quote the exact language once received and then attach evidence that places the loss outside the exclusion (timeline, photos, statements). The win condition is clarity: force the insurer to identify the precise rule and then answer it with targeted proof.',
      },
    ],
    faqs: [
      { q: 'Is an EOB the same as a denial letter?', a: 'Not always. An EOB explains payment and adjustments. A separate denial notice often contains appeal rights, timelines, and review levels.' },
      { q: 'What if the denial letter does not cite a policy section?', a: 'Request the exact contract language and criteria in writing. Appeals are stronger when they respond to the precise rule applied.' },
      { q: 'What is the fastest way to decide what to do next?', a: 'Identify whether the denial is contractual, factual, or administrative. Contract/fact disputes require evidence and policy language; administrative denials often require correction and resubmission.' },
      { q: 'What should I save from the denial document?', a: 'The denial reason, any codes, the appeal deadline, and the submission instructions. Screenshot portal messages and keep proof of dates.' },
      { q: 'What if the letter is vague?', a: 'Request the claim file, notes, and criteria used. Vague denials are often thin-file decisions.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-ohio/coding-or-documentation-error', label: 'Ohio coding/documentation denials' },
      { path: '/auto-insurance-claims-denied-pennsylvania/non-covered-use', label: 'Pennsylvania non-covered use denials' },
      { path: '/auto-insurance-claims-denied-virginia/policy-lapse-or-cancellation', label: 'Virginia policy lapse denials' },
    ],
  },
  {
    slug: 'appeal-deadlines-and-timelines',
    title: 'How Long Do You Have to Appeal a Denied Insurance Claim?',
    description: 'How to find your appeal deadline, what “timely filing” means, and how to protect yourself when dates are unclear.',
    canonicalPath: '/guides/appeal-deadlines-and-timelines',
    categories: ['deadlines', 'appeals'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'The deadline is usually in your denial letter or plan/policy documents. If it is unclear, submit a short “protective appeal” in writing before the earliest possible deadline and ask the insurer to confirm the correct due date in writing.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto', 'health'] }),
      {
        id: 'where-to-find',
        heading: 'Where to find the deadline (and what to do if it is missing)',
        paragraphs: [
          'Deadlines vary by insurer, product, and dispute type. The denial letter or denial notice is often the most obvious place, but the underlying policy/plan documents can add additional timing rules. Your safest approach is to calendar the earliest deadline you can identify and submit in writing before that date.',
          'If the denial document is vague, a protective appeal preserves your position: you dispute the denial, request the claim file/criteria, and state that you will supplement. This prevents a technical “untimely” rejection while you gather evidence.',
        ],
        checklist: [
          'Locate the appeal due date in the denial letter/EOB/denial notice and screenshot it.',
          'Check whether multiple appeal levels exist (first-level, second-level, external review for health).',
          'Calendar follow-up dates: when you requested the claim file, when you expect a response, and when you plan to supplement.',
        ],
      },
      {
        id: 'deadline-types',
        heading: 'Common deadline types to track (so you do not miss the wrong one)',
        bullets: [
          'Appeal deadline: when the insurer/plan requires your appeal to be received.',
          'Reporting/notice deadlines (auto): when the policy expects you to report a loss or cooperate.',
          'Timely filing (health): when a claim must be submitted or resubmitted after correction.',
          'Supplement windows: deadlines for submitting additional documents after an initial appeal.',
          'Response windows: when the insurer says it will issue a decision (useful for follow-up and escalation).',
        ],
      },
      {
        id: 'realistic-timeline',
        heading: 'A realistic appeal timeline (what to do each week)',
        steps: [
          'Week 1: Request claim file/criteria; collect the denial document pages that show reasons, codes, and deadlines; build your one-page timeline.',
          'Week 2: Gather only evidence that answers the stated reasons (records, photos, billing corrections, eligibility proof).',
          'Week 2–3: Draft and submit the point-by-point appeal with labeled exhibits; save submission proof.',
          'Week 3+: Follow up in writing for status and decision timeframe; supplement if you receive new criteria or missing items.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Deadline mistakes that cause avoidable losses',
        bullets: [
          'Waiting for a phone call back instead of submitting something in writing before the earliest deadline.',
          'Assuming a “30-day deadline” without confirming the denial document and the underlying policy/plan terms.',
          'Missing deadlines because you did not save proof of submission (portal receipt, fax confirmation, certified mail).',
          'Spending weeks writing before requesting the claim file/criteria (you lose time to uncertainty).',
          'Not tracking resubmission deadlines for corrected claims after an administrative denial.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1 (health): timely filing issue discovered after resubmission',
        text: 'A claim is denied as untimely after the provider resubmits a corrected claim. A high-intent response tracks two date sets: the original submission date and the corrected resubmission date. Your appeal packet includes proof of the original submission, proof of correction, and the plan’s timely filing rule. The goal is to show that the claim was timely initially (or that a correction pathway applies) and that the denial is based on a misread timeline.',
      },
      {
        title: 'Scenario 2 (auto): late notice allegation with a close appeal deadline',
        text: 'You receive a denial for late notice and the appeal deadline is approaching. Submit a protective appeal to preserve the timeline, then request claim notes and ask what specific investigation prejudice the insurer claims. Build exhibits that show investigation is still possible (photos, report, witness info). The key is not waiting until you have a perfect narrative—deadlines reward early written action and clean documentation.',
      },
    ],
    faqs: [
      { q: 'What is a protective appeal?', a: 'A short written appeal submitted early to preserve deadlines while you request documents and prepare the full evidence-backed submission.' },
      { q: 'Do deadlines differ for auto vs health?', a: 'Often yes. Health plans commonly have formal internal appeal steps and may offer external review. Auto timelines vary by policy and dispute type.' },
      { q: 'What if the deadline is unclear?', a: 'Submit in writing before the earliest plausible deadline and ask the insurer/plan to confirm the correct due date in writing.' },
      { q: 'What proof should I keep?', a: 'Proof of submission and delivery (portal receipt, fax confirmation, certified mail), plus screenshots of the denial page that lists deadlines.' },
      { q: 'What if I already missed the deadline?', a: 'Submit a written request anyway and ask the insurer/plan to state its position in writing. Some processes allow limited exceptions or reconsideration paths, but you should not assume they exist without written confirmation.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-california/timely-filing-issue', label: 'California timely filing denials' },
      { path: '/health-insurance-claims-denied-texas/timely-filing-violations', label: 'Texas timely filing violations' },
      { path: '/auto-insurance-claims-denied-georgia/missed-reporting-deadline', label: 'Georgia missed reporting deadline denials' },
    ],
  },
  {
    slug: 'appeal-documentation-checklist',
    title: 'Documents Needed to Appeal an Insurance Claim',
    description: 'A practical document checklist tailored to common denial reasons, with exhibit tips that make review easier.',
    canonicalPath: '/guides/appeal-documentation-checklist',
    categories: ['paperwork', 'appeals'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Match documents to the denial reason: request the claim file and policy/plan language first, then submit only the evidence that directly answers each reason (timeline, photos, records, billing corrections, or proof of coverage).',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto', 'health'] }),
      {
        id: 'core-docs',
        heading: 'The “core documents” that strengthen almost every appeal',
        paragraphs: [
          'Before you think about specialized evidence, build the core file. These items make your appeal readable and verifiable. Without them, even strong evidence can be ignored because it is not organized or tied to the reason given.',
        ],
        checklist: [
          'Denial letter/denial notice and EOB lines (if health).',
          'Policy declarations page (auto) or plan documents (SPD/EOC) (health).',
          'The exact policy/plan provision cited (or a written request for it).',
          'Claim notes and the criteria used (medical policy/denial code details).',
          'One-page timeline of key dates and events.',
          'Proof of submission for everything you send (portal/fax/certified mail).',
        ],
      },
      {
        id: 'match-evidence',
        heading: 'Match evidence to the denial reason (examples by category)',
        paragraphs: [
          'Denials are usually narrow. Treat each reason as a question: what fact is missing, what date is wrong, what definition was applied, or what criterion is not documented? Then supply the smallest set of documents that answers that question.',
        ],
        bullets: [
          'Policy lapse/cancellation: billing ledger, proof of payment, cancellation/nonrenewal notices, effective dates.',
          'Late notice: timeline, proof investigation is still possible (photos, report, witness contacts), and the insurer’s stated prejudice.',
          'No coverage at time of loss: declarations page for loss date, policy status history, eligibility/effective dates.',
          'Not medically necessary: medical policy criteria, chart notes supporting each criterion, provider letter mapping facts to criteria.',
          'Prior authorization: authorization requirement, submitted request and response, missing documentation fix, criteria-aligned letter.',
          'Coding/documentation: denial code, corrected claim submission, itemized bill, supporting notes.',
          'Out-of-network: network status determination, directory proof, exception/gap request, emergency/urgency documentation.',
          'Disputed liability: police report/diagram, scene photos, damage photos, witness statements, video.',
        ],
      },
      {
        id: 'exhibit-hygiene',
        heading: 'Exhibit hygiene: how to label and submit so nothing gets missed',
        paragraphs: [
          'A high-intent appeal is easy to review. Use an exhibit list, label each attachment, and reference each exhibit in the paragraph where it matters. Your goal is to prevent the denial from surviving because someone could not find your proof.',
        ],
        checklist: [
          'Create an exhibit list at the top of your appeal (Exhibit A, B, C…).',
          'Name files consistently (Exhibit-A-Denial-Letter.pdf).',
          'Cite the exhibit label in the sentence that relies on it.',
          'Keep submissions focused: fewer, stronger exhibits beat large unorganized uploads.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to thin appeals',
        bullets: [
          'Submitting documents without explaining what denial reason they answer.',
          'Sending a large upload without an exhibit list and without references in the letter.',
          'Not requesting claim notes/criteria and guessing what the reviewer needed.',
          'Using only phone calls and losing track of deadlines and submission proof.',
          'Mixing multiple issues into one narrative instead of answering each reason separately.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: a denial with two reasons (deadline + coverage)',
        text: 'A denial letter states both “late notice” and “coverage not in force.” Your documentation plan should treat these as two mini-cases. For “coverage not in force,” you collect billing/coverage status proof and effective dates. For “late notice,” you collect a timeline and proof investigation is still possible. Your appeal uses two headings with two targeted exhibit sets, rather than one mixed narrative. This structure prevents the insurer from ignoring a strong argument because another issue was underdocumented.',
      },
      {
        title: 'Scenario 2: medical necessity denial without the medical policy',
        text: 'You want to appeal a “not medically necessary” denial but you do not have the criteria. Step one is to request the medical policy and records reviewed list. Only after you have the criteria do you assemble the right chart notes and a provider letter that maps facts to each criterion. The checklist prevents a thin appeal that says “please reconsider” without proving the criteria are met.',
      },
    ],
    faqs: [
      { q: 'Should I send everything I have?', a: 'Usually no. Targeted exhibits that answer the denial reasons are easier to review and more persuasive than a large unorganized upload.' },
      { q: 'How should I label exhibits?', a: 'Use Exhibit A, B, C with a one-line description and reference each exhibit where it supports a specific point.' },
      { q: 'What if I do not know what evidence the insurer used?', a: 'Request the claim file, claim notes, and criteria used. Thin-file denials are common.' },
      { q: 'What matters more: the letter or the exhibits?', a: 'Exhibits change decisions. The letter’s job is to guide the reviewer to the right exhibits quickly.' },
      { q: 'What if I cannot get records from a provider quickly?', a: 'Submit a protective appeal to preserve deadlines and supplement later. Include what you have (denial, timeline, requests) and document your record requests.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-ohio/no-coverage-at-time-of-loss', label: 'Ohio no coverage denials' },
      { path: '/auto-insurance-claims-denied-michigan/disputed-liability', label: 'Michigan disputed liability denials' },
      { path: '/health-insurance-claims-denied-new-jersey/coding-or-documentation-error', label: 'New Jersey coding/documentation denials' },
    ],
  },
  {
    slug: 'request-your-insurance-claim-file',
    title: 'How to Request Your Insurance Claim File (and What to Ask For)',
    description: 'A simple request script for claim notes, policy language, criteria used, and the documents that drove the denial decision.',
    canonicalPath: '/guides/request-your-insurance-claim-file',
    categories: ['paperwork', 'rights'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Ask for the full claim file, including claim notes, recorded statements, all documents received, the exact contract language used, and any internal criteria or medical policy used to deny.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto', 'health'] }),
      {
        id: 'why',
        heading: 'Why the claim file changes outcomes (thin-file denials are common)',
        paragraphs: [
          'People often appeal based only on the denial letter, but the denial letter is a summary. The claim file shows what facts the insurer accepted, what documents were reviewed, and which criteria were applied. This matters because many denials are “thin-file” decisions: the right document was never received, the wrong date was used, or the reviewer applied criteria you have not seen.',
          'When you have the claim file, you can do two high-value things: (1) fill gaps (submit the missing record) and (2) correct errors (prove the fact/date is wrong). Both are easier than arguing broad fairness.',
        ],
      },
      {
        id: 'request-script',
        heading: 'What to ask for (copy/paste request list)',
        paragraphs: [
          'Keep the request short and specific so it cannot be brushed off. Ask for notes, documents reviewed, criteria used, and anything the insurer says is missing for reconsideration.',
        ],
        checklist: [
          'All claim notes and adjuster/reviewer notes, including internal timelines used.',
          'All documents received (emails, uploads, faxes) and a list of documents reviewed.',
          'The policy/plan provision relied on for each denial reason (quote-level pages).',
          'Any internal criteria, medical policy, or review guideline used to deny.',
          'Photos, estimates, reports, and recorded statements (or transcripts/summaries).',
          'A written list of missing items required for reconsideration and the submission deadline for those items.',
        ],
      },
      {
        id: 'how-to-use',
        heading: 'How to use what you receive (turn file contents into an appeal plan)',
        steps: [
          'Skim claim notes to identify the exact decision reasons and what the reviewer believed was true.',
          'List missing documents explicitly named (or implied) and request anything referenced but not provided.',
          'Identify the decision category: contractual, factual, administrative, or clinical criteria.',
          'Build a short appeal outline that mirrors the reasons and attach only exhibits that change those reasons.',
          'If the file contains an error (wrong date, wrong network status, wrong driver), correct it with objective proof.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes when requesting files',
        bullets: [
          'Asking vaguely (“send everything”) without specifying claim notes, criteria used, and documents reviewed.',
          'Not requesting the exact policy/plan pages relied on, including endorsements/amendments.',
          'Not asking for a written list of what would change the decision.',
          'Relying on phone requests without a written follow-up and without deadlines.',
          'Waiting too long and missing the appeal deadline before the file arrives.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: claim notes show the reviewer never received a key document',
        text: 'The denial letter says “insufficient documentation,” but claim notes reveal the reviewer never received the provider’s chart notes. Your next steps are straightforward: obtain the missing document, submit it with an exhibit label, and request reconsideration with a short cover note that points to the exact missing item named in the notes. This is a classic thin-file denial reversal pattern.',
      },
      {
        title: 'Scenario 2: claim file shows the wrong date was used',
        text: 'The claim file indicates the insurer used an incorrect loss date or service date, leading to a coverage or timely filing denial. Your appeal focuses on correcting the date: attach objective proof (report, invoice, medical record header) and highlight the date conflict clearly. Then ask for a written updated decision based on the corrected date.',
      },
    ],
    faqs: [
      { q: 'Should I request the file before appealing?', a: 'If time allows, yes. If a deadline is close, submit a protective appeal and request the file at the same time.' },
      { q: 'What if they ignore the request?', a: 'Follow up in writing and ask for a written response date. If communication breaks down, use appropriate complaint/escalation channels for claim-handling issues.' },
      { q: 'What is the single most important item to request?', a: 'Claim notes plus the criteria used (medical policy/denial code rationale) and the exact contract language relied on.' },
      { q: 'Do I need the entire file to appeal?', a: 'Not always, but the file often reveals missing items and incorrect assumptions that make appeals faster and more effective.' },
      { q: 'Can I request the claim file electronically?', a: 'Often yes. Ask for digital copies of notes and documents and request confirmation of what was provided and what is still missing.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-north-carolina/failure-to-cooperate', label: 'North Carolina cooperation denials' },
      { path: '/health-insurance-claims-denied-pennsylvania/out-of-network-provider', label: 'Pennsylvania out-of-network denials' },
      { path: '/auto-insurance-claims-denied-illinois/misrepresentation-or-concealment', label: 'Illinois misrepresentation denials' },
    ],
  },
  {
    slug: 'health-claim-denied-prior-authorization',
    title: 'Pre-Authorization Denied — How to Fix It',
    description: 'How prior authorization denials happen, what to request, and how to appeal with criteria-aligned documentation.',
    canonicalPath: '/guides/health-claim-denied-prior-authorization',
    categories: ['health', 'appeals'],
    claimTypes: ['health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Confirm whether authorization was required, request the plan’s authorization criteria, ask the provider to submit missing clinical notes, and appeal with a physician letter that matches the criteria line-by-line.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['health'] }),
      {
        id: 'why',
        heading: 'Why prior authorization denials happen (administrative vs clinical)',
        paragraphs: [
          'Prior authorization denials fall into two categories, and the fix depends on which one you have. Administrative denials happen when the request was not submitted, submitted under the wrong code, missing required fields/notes, routed to the wrong entity, or submitted outside the plan’s window. Clinical denials happen when the plan applies criteria and says the request does not meet the requirements.',
          'Your first job is to identify which category applies. A one-page appeal that simply says “please reconsider” will fail if the plan is missing a document or if criteria were not addressed. A high-intent submission either corrects the administrative gap or maps medical facts to criteria line-by-line.',
        ],
      },
      {
        id: 'what-to-request',
        heading: 'What to request (so you can see the criteria and the record reviewed)',
        checklist: [
          'The plan’s prior authorization requirement for the specific service code and date.',
          'The medical policy/clinical criteria used for the denial (the exact policy name or ID).',
          'The denial reason code and a copy of the utilization review rationale (if available).',
          'A list of records reviewed and the submitted authorization request packet.',
          'Written instructions for internal appeal level(s) and deadlines.',
        ],
      },
      {
        id: 'fix-or-appeal',
        heading: 'Step-by-step: fix the administrative gap or build a criteria-mapped appeal',
        steps: [
          'Confirm whether the denial is administrative (missing/incorrect submission) or clinical (criteria not met).',
          'Obtain the submitted prior authorization request packet from the provider and compare it to plan requirements.',
          'If administrative: correct and resubmit with the missing notes/codes and keep submission proof.',
          'If clinical: request the medical policy criteria and prepare a provider letter that addresses each criterion explicitly.',
          'Attach supporting chart notes, test results, prior treatment history, and any urgency/emergency documentation that is relevant to criteria.',
          'Submit and request a written decision date; keep proof of all submissions.',
        ],
      },
      {
        id: 'physician-letter',
        heading: 'What a “criteria-aligned” physician letter looks like',
        paragraphs: [
          'A persuasive prior authorization appeal letter is not generic. It follows the plan’s criteria and uses the plan’s terminology. If the plan requires prior conservative therapy, the letter should list it with dates. If the plan requires functional impairment, the letter should document it with objective references in the chart.',
        ],
        checklist: [
          'Service requested + code (if available) + date range.',
          'Diagnosis and severity with objective findings (tests, imaging, exam results).',
          'Prior treatments attempted (names, dates, duration) and response/failure.',
          'Why the requested service is appropriate now under the plan’s criteria.',
          'If urgency applies: why delay poses risk or why alternatives are not appropriate.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials',
        bullets: [
          'Appealing without the plan’s criteria in hand (you cannot answer what you cannot see).',
          'Submitting a generic provider letter that does not map facts to criteria.',
          'Not identifying whether the denial is administrative vs clinical and using the wrong fix path.',
          'Submitting records without pointing to where each criterion is documented.',
          'Missing appeal deadlines while waiting for the provider to respond.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: denial caused by missing documentation in the request packet',
        text: 'The plan denies prior authorization because required clinical notes were missing. The fastest fix is administrative: obtain the plan’s required-document list, have the provider resubmit the prior auth with the missing notes, and keep submission confirmation. Your appeal (if needed) attaches the resubmitted packet, points to the previously missing document, and asks for re-review based on the completed file.',
      },
      {
        title: 'Scenario 2: clinical denial based on criteria not met',
        text: 'The plan denies stating criteria were not met (for example, insufficient conservative therapy or missing objective findings). Your appeal starts by requesting the medical policy criteria and the records reviewed list. Then your provider letter addresses each criterion: dates of conservative therapy, symptom duration, functional impairment, test results, and why alternatives are inappropriate. Attach the chart note pages that contain those facts and cite them by exhibit label so the reviewer can verify quickly.',
      },
    ],
    faqs: [
      { q: 'Can a prior authorization denial be corrected without a formal appeal?', a: 'Often yes when the issue is administrative (missing documentation, wrong code). Clinical denials usually require a criteria-based appeal.' },
      { q: 'What should the physician letter include?', a: 'Diagnosis, objective findings, prior treatments with dates, and a point-by-point match to the plan’s criteria.' },
      { q: 'What is the most important item to request from the plan?', a: 'The exact medical policy/criteria used and the list of records reviewed.' },
      { q: 'What if you are close to a deadline?', a: 'Submit a protective appeal and then supplement with the full criteria-mapped packet when received.' },
      { q: 'Is this about the claim denial or the authorization denial?', a: 'It can be either. The key is to identify what decision was made (authorization vs payment) and then respond using the plan’s criteria and records for that decision.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-florida/prior-authorization-missing', label: 'Florida prior authorization denials' },
      { path: '/health-insurance-claims-denied-new-york/prior-authorization-missing', label: 'New York prior authorization denials' },
      { path: '/health-insurance-claims-denied-ohio/prior-authorization-missing', label: 'Ohio prior authorization denials' },
      { path: '/health-insurance-claims-denied-illinois/prior-authorization-missing', label: 'Illinois prior authorization denials' },
    ],
  },
  {
    slug: 'health-claim-denied-not-medically-necessary',
    title: 'Insurance Claim Denied as “Not Medically Necessary” — What to Do',
    description: 'How medical-necessity denials work and what evidence actually moves these appeals.',
    canonicalPath: '/guides/health-claim-denied-not-medically-necessary',
    categories: ['health', 'appeals'],
    claimTypes: ['health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Request the plan’s medical policy and criteria, then appeal with chart notes and a physician letter that matches those criteria point-by-point, including failed conservative treatment and objective findings.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['health'] }),
      {
        id: 'what-it-means',
        heading: 'What “not medically necessary” usually means (criteria, not opinions)',
        paragraphs: [
          'Most health plans use written medical policies or utilization review criteria. A “not medically necessary” denial usually means the reviewer believes one or more required elements are missing in the documentation: symptom severity, duration, prior treatments, objective findings, functional impairment, or diagnosis confirmation.',
          'You win these appeals by getting the exact criteria used and then building a submission that maps facts to criteria. If the criteria require 6 weeks of conservative therapy, your packet needs dates and records showing that therapy. If criteria require objective findings, your packet needs the test results or exam findings and where they appear in the record.',
        ],
      },
      {
        id: 'request-criteria',
        heading: 'Request the exact criteria used (medical policy) and the records reviewed',
        checklist: [
          'The medical policy name/ID and criteria applied for the service.',
          'The denial reason code and utilization review rationale (if available).',
          'The list of records reviewed (so you can see what was missing).',
          'Any alternative coverage pathway notes (prior auth, in-network requirements).',
        ],
      },
      {
        id: 'appeal-workflow',
        heading: 'Step-by-step: build a medical necessity appeal that reviewers can verify',
        steps: [
          'Obtain the medical policy criteria and identify each required element.',
          'Collect the exact chart note pages that document each element (symptoms, duration, treatments tried, objective findings).',
          'Ask the provider for a short letter that maps facts to criteria line-by-line using plan terminology.',
          'Attach objective documents: test results, imaging reports, medication/PT notes, and prior authorization records if relevant.',
          'Submit with an exhibit list and a one-page summary that cites where each criterion is met.',
        ],
      },
      {
        id: 'provider-letter',
        heading: 'What makes a provider letter persuasive in medical necessity disputes',
        paragraphs: [
          'A strong letter is structured around the plan’s criteria and cites the record. It does not simply say “medically necessary.” It explains why the criteria are met now and why alternatives are insufficient, with dates and objective findings.',
        ],
        checklist: [
          'Diagnosis + severity + relevant objective findings.',
          'Duration of symptoms and functional impairment impact.',
          'Treatments attempted and outcomes (names, dates, duration).',
          'Why the requested service meets criteria now (not later).',
          'If applicable: red flags/urgency reasons supported by the record.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Mistakes that lead to repeat denials',
        bullets: [
          'Appealing without the medical policy criteria (you guess at requirements).',
          'Submitting records without pointing to where each criterion is documented.',
          'Using a generic letter that does not map facts to criteria line-by-line.',
          'Ignoring administrative prerequisites (prior authorization, referrals, network rules).',
          'Sending volume instead of targeted pages, making review slower and less certain.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: MRI denial based on missing conservative therapy documentation',
        text: 'The plan denies an MRI stating conservative therapy was not documented. Your appeal requests the medical policy criteria and then attaches PT notes and medication trial notes with dates, plus a provider letter summarizing duration, failed treatments, and objective findings. Your one-page summary maps each criterion to an exhibit (Exhibit A: PT notes, Exhibit B: medication history, Exhibit C: exam findings). The goal is criteria alignment, not argument.',
      },
      {
        title: 'Scenario 2: procedure denial based on “insufficient severity”',
        text: 'The plan denies a procedure stating symptoms are not severe enough under criteria. Your appeal attaches objective findings (test results, imaging reports) and chart notes documenting functional impairment and prior treatment attempts. The provider letter addresses severity elements explicitly and explains why delaying care is not appropriate, using the plan’s own terminology. You ask the plan to identify which specific criterion remains unmet after considering the cited exhibits.',
      },
    ],
    faqs: [
      { q: 'Can I win a medical necessity appeal without a doctor letter?', a: 'Sometimes, but it is harder. A criteria-aligned provider letter often makes the reviewer’s job faster and clearer.' },
      { q: 'What is medical policy criteria?', a: 'Written clinical rules used by plans to decide if a service is covered. Your appeal should be built around the specific policy applied.' },
      { q: 'What is the fastest way to improve my chances?', a: 'Get the criteria and the records reviewed list, then submit a targeted packet that maps each criterion to evidence.' },
      { q: 'Should I attach the entire medical record?', a: 'Usually no. Attach the pages that document criteria elements and reference them clearly.' },
      { q: 'Should I ask for a peer-to-peer review?', a: 'Some plans offer clinician-to-clinician review as part of their process. If available, it can help, but your written packet still needs criteria-mapped evidence.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-california/not-medically-necessary', label: 'California medical necessity denials' },
      { path: '/health-insurance-claims-denied-michigan/not-medically-necessary', label: 'Michigan medical necessity denials' },
      { path: '/health-insurance-claims-denied-virginia/not-medically-necessary', label: 'Virginia medical necessity denials' },
    ],
  },
  {
    slug: 'health-claim-denied-out-of-network',
    title: 'Health Insurance Claim Denied for Out-of-Network Care — Next Steps',
    description: 'How to respond when a plan says care is out-of-network, including exceptions, surprise billing rules, and documentation to request.',
    canonicalPath: '/guides/health-claim-denied-out-of-network',
    categories: ['health', 'disputes'],
    claimTypes: ['health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Request the network status determination and plan language, confirm whether an in-network option existed, and appeal with documentation for any exception (emergency, inadequate network, prior approval, or incorrect provider listing).',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['health'] }),
      {
        id: 'why',
        heading: 'Why out-of-network denials happen (status, routing, and exceptions)',
        paragraphs: [
          'Some denials are straightforward: the provider was out-of-network on the date of service under the plan’s rules. Others are “process” denials: the plan directory was wrong, the provider’s status changed, the claim was routed incorrectly, or the plan believes an in-network option existed and an exception was not requested.',
          'Your appeal strategy depends on the scenario. The high-intent move is to force a written network status determination for the specific date, obtain the plan’s network language, and identify the exception pathway that applies (emergency, network inadequacy/gap exception, continuity of care, or prior approval).',
        ],
      },
      {
        id: 'what-to-request',
        heading: 'What to request from the plan',
        checklist: [
          'Network status determination for the provider/facility on the exact date(s) of service.',
          'Plan language defining in-network/out-of-network benefits and any exception process.',
          'Any denial codes/remark codes and the written rationale for why the claim was processed as out-of-network.',
          'If directory reliance is involved: confirmation of what the directory showed at the time (screenshots help).',
          'If emergency is involved: the plan’s emergency coverage language and basis for decision.',
        ],
      },
      {
        id: 'exceptions',
        heading: 'Exception pathways that can change out-of-network outcomes',
        bullets: [
          'Emergency/urgent care: request the plan’s emergency coverage criteria and show records supporting urgency.',
          'Network inadequacy (gap exception): document lack of available in-network options within a reasonable distance/time.',
          'Directory error: capture screenshots/confirmations showing you relied on inaccurate network information.',
          'Continuity of care: if treatment started in-network or a provider status changed mid-course, request the continuity process.',
          'Prior approval/referral: show approvals/referrals and any communications that implied coverage.',
        ],
      },
      {
        id: 'workflow',
        heading: 'Step-by-step: document the pathway and request reprocessing',
        steps: [
          'Get the written network status determination for the service date.',
          'Identify which exception pathway applies and gather proof (directory screenshots, emergency records, referral/prior auth).',
          'Submit an appeal that cites the plan language and explains, with exhibits, why the exception applies.',
          'Request reprocessing at the appropriate benefit level (in-network or exception level) in writing.',
          'Ask what additional document would change the decision if the plan still denies.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials',
        bullets: [
          'Appealing without a written network status determination for the exact service date.',
          'Not identifying the exception pathway and submitting a generic complaint instead.',
          'Failing to document directory reliance (screenshots) or emergency/urgency records.',
          'Not requesting reprocessing in writing after submitting the exception packet.',
          'Missing deadlines while waiting on provider/plan information.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: directory showed provider as in-network but claim processed out-of-network',
        text: 'You scheduled care based on the plan directory showing the provider in-network. The claim is denied as out-of-network. A high-intent appeal attaches dated directory screenshots or confirmation emails, requests the plan’s written network determination for the service date, and asks for reprocessing based on documented reliance. The key is converting “the directory was wrong” into dated proof and a clear request tied to plan language.',
      },
      {
        title: 'Scenario 2: emergency services processed as out-of-network',
        text: 'You received emergency care at the nearest facility and the plan processes it as out-of-network. Your appeal requests the plan’s emergency coverage language and cites the emergency/urgency documentation (ER notes, triage, discharge summary). The goal is to show the service meets the plan’s emergency criteria and to request reprocessing at the appropriate benefit level, with a written rationale if denied again.',
      },
    ],
    faqs: [
      { q: 'What if the plan directory was wrong?', a: 'Document it with screenshots/confirmation emails and request reprocessing based on reliance and the plan’s network status determination for the service date.' },
      { q: 'Do emergency claims get denied as out-of-network?', a: 'They can be processed that way initially. Request the plan’s emergency coverage language and submit emergency documentation to support reprocessing.' },
      { q: 'What is a gap exception?', a: 'An exception pathway some plans use when adequate in-network care is not available. The process and proof requirements vary by plan.' },
      { q: 'What should I ask for in writing?', a: 'The network status determination for the service date, the specific plan language relied on, and the exception process steps and deadlines.' },
      { q: 'Should I worry about surprise billing issues here?', a: 'Focus first on coverage and processing: network status, plan rules, and exception pathways. If billing issues remain, keep a written record and use the plan’s dispute channels where applicable.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-new-york/out-of-network-provider', label: 'New York out-of-network denials' },
      { path: '/health-insurance-claims-denied-pennsylvania/out-of-network-provider', label: 'Pennsylvania out-of-network denials' },
      { path: '/health-insurance-claims-denied-georgia/out-of-network-provider', label: 'Georgia out-of-network denials' },
      { path: '/health-insurance-claims-denied-california/out-of-network-provider', label: 'California out-of-network denials' },
    ],
  },
  {
    slug: 'health-claim-denied-coding-or-documentation',
    title: 'Insurance Claim Denied Due to Coding or Documentation Errors — What to Do',
    description: 'How to fix common billing and documentation denials and resubmit with the right supporting records.',
    canonicalPath: '/guides/health-claim-denied-coding-or-documentation',
    categories: ['health', 'paperwork'],
    claimTypes: ['health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Ask for the denial code and the exact missing documentation, then have the provider correct and resubmit the claim with the right codes/modifiers and chart notes that support the billed service.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['health'] }),
      {
        id: 'how',
        heading: 'How coding/documentation denials happen (and why many are fixable)',
        paragraphs: [
          'Coding/documentation denials are often fixable because the plan’s system is reacting to claim fields and required supporting documentation. A missing modifier, a mismatch between diagnosis and procedure codes, a missing referral/prior authorization indicator, or missing clinical notes can trigger a denial even when the underlying service could be covered.',
          'The high-intent approach is to identify whether you are dealing with a correctable submission issue (fix and resubmit) versus a coverage dispute (appeal). Many cases require both: correct the claim, then appeal if the plan still denies after correction.',
        ],
      },
      {
        id: 'fix-workflow',
        heading: 'Step-by-step: fix, resubmit, and preserve your appeal record',
        steps: [
          'Request the denial reason code and any remark codes (and the code descriptions).',
          'Ask the provider billing office for what was submitted: codes, modifiers, diagnosis codes, and any attachments.',
          'Confirm whether the plan requires prior authorization, referrals, or specific documentation for the billed service.',
          'Have the provider submit a corrected claim and keep clearinghouse acceptance proof.',
          'If the plan still denies, submit an appeal that includes the original denial, the corrected submission, and the supporting documentation.',
        ],
      },
      {
        id: 'what-to-collect',
        heading: 'Documents that help most in coding/documentation disputes',
        bullets: [
          'The EOB/denial page showing the denial/remark codes.',
          'The itemized bill and the submitted claim (CMS-1500/UB-04 data summary if available).',
          'Provider billing office notes about what was corrected (codes/modifiers/diagnosis).',
          'Relevant chart notes supporting the billed service (only the pages that matter).',
          'Prior authorization/referral records if the denial suggests missing prerequisites.',
          'Clearinghouse acceptance/rejection reports and resubmission confirmations.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that keep these denials unresolved',
        bullets: [
          'Appealing without fixing the correctable billing issue (the plan keeps denying on the same technical trigger).',
          'Not obtaining the denial/remark code descriptions and guessing the issue.',
          'Submitting long medical records without pointing to what supports the billed service.',
          'Not saving clearinghouse acceptance proof and losing the submission date record.',
          'Missing deadlines for corrected resubmissions (timely filing windows).',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: denial caused by missing modifier or code mismatch',
        text: 'An EOB denial code suggests a modifier issue. The provider confirms a modifier was missing. The fastest path is correction: the provider submits a corrected claim with the correct modifier and attaches any required documentation. Your file keeps proof: denial code page, corrected claim summary, clearinghouse acceptance. If the plan still denies, your appeal points to what changed and why the corrected coding matches plan requirements.',
      },
      {
        title: 'Scenario 2: denial caused by missing referral/prior authorization indicator',
        text: 'The plan denies stating missing referral or prior authorization. Your response first verifies whether prior authorization was required for that service and whether it was obtained. If it exists, you attach the authorization number/approval and request reprocessing. If it was not obtained, you ask the provider about retro-authorization or correction pathways and document the steps taken. The key is separating “missing number” from “no authorization exists.”',
      },
    ],
    faqs: [
      { q: 'Should I appeal or resubmit?', a: 'If it is a correctable billing issue, resubmission is often faster. If the plan disputes coverage even after correction, an appeal is usually required.' },
      { q: 'Can I fix coding without my provider?', a: 'Usually the provider must correct and resubmit. You can request what was filed and push for correction with specific denial codes.' },
      { q: 'What proof matters most?', a: 'Denial/remark codes plus clearinghouse acceptance reports and proof of corrected resubmission.' },
      { q: 'What if the plan keeps denying after correction?', a: 'Treat it as a coverage dispute: request the exact plan language and criteria being applied and appeal with targeted documentation.' },
      { q: 'How do I find out what a denial code means?', a: 'Ask the plan for the code description and request the written reason tied to that code. Use that description to decide whether you need a correction or a coverage appeal.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-ohio/coding-or-documentation-error', label: 'Ohio coding/documentation denials' },
      { path: '/health-insurance-claims-denied-new-jersey/coding-or-documentation-error', label: 'New Jersey coding/documentation denials' },
      { path: '/health-insurance-claims-denied-florida/coding-or-documentation-error', label: 'Florida coding/documentation denials' },
    ],
  },
  {
    slug: 'health-claim-denied-timely-filing',
    title: 'Timely Filing Denials: How to Reopen or Reprocess a Late Health Claim',
    description: 'What “timely filing” means, how to document submission issues, and how to request reconsideration when a claim was sent late.',
    canonicalPath: '/guides/health-claim-denied-timely-filing',
    categories: ['health', 'deadlines'],
    claimTypes: ['health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Request the plan’s timely filing rule, document when the claim was actually submitted, and ask for reprocessing if the delay was due to plan/provider error or corrected claim rules.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['health'] }),
      {
        id: 'proof',
        heading: 'Timely filing denials are date disputes (proof beats arguments)',
        paragraphs: [
          'Timely filing denials are almost always resolved (or not resolved) based on proof of submission dates and the plan’s filing rule. The plan is asking: when was the claim received, and does that date fall within the allowed window? Your appeal should answer that question with documentation—not a story.',
          'Many disputes are not truly “late,” but rather “misdated”: the claim was submitted on time but rejected by a clearinghouse, routed incorrectly, or resubmitted as a corrected claim and measured from the wrong starting point. Your job is to document the sequence in a one-page timeline with exhibits.',
        ],
      },
      {
        id: 'what-to-collect',
        heading: 'What to collect (high-impact proof items)',
        checklist: [
          'Clearinghouse acceptance and rejection reports (with timestamps).',
          'Electronic submission confirmations or transmission receipts.',
          'Provider billing notes showing original submission, rejection, correction, and resubmission dates.',
          'The plan’s timely filing rule language and how it measures the deadline.',
          'Any plan communications acknowledging receipt or requesting corrections.',
        ],
      },
      {
        id: 'reconsideration',
        heading: 'Steps to request reconsideration (make the timeline unavoidable)',
        steps: [
          'Request the plan’s timely filing rule and confirm how the deadline is measured (from service date, submission date, or other trigger).',
          'Build a one-page submission timeline with the dates of original submission, rejection (if any), correction, and resubmission.',
          'Attach exhibits for each date (acceptance report, rejection report, resubmission confirmation).',
          'If this was a corrected claim, state clearly that it is a correction/resubmission and include proof of the original timely attempt.',
          'Request reprocessing and a written decision that cites the rule and the date used.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that keep timely filing denials stuck',
        bullets: [
          'Appealing without the plan’s timely filing rule language and the exact deadline calculation.',
          'Submitting only the resubmission date and omitting proof of the original timely attempt.',
          'Not saving clearinghouse reports (you lose the strongest timestamp evidence).',
          'Not asking the plan to cite the specific date it used to calculate late filing.',
          'Missing correction/resubmission windows while waiting for the plan to respond.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: claim submitted on time but rejected by clearinghouse',
        text: 'A provider submits the claim within the window but receives a clearinghouse rejection and resubmits later. The plan denies as untimely based on the resubmission date. Your appeal packet includes the original submission acceptance/rejection reports, the corrected resubmission confirmation, and the plan’s timely filing rule. Your one-page timeline makes it clear the first attempt was timely and the later submission was a correction of a rejected claim.',
      },
      {
        title: 'Scenario 2: corrected claim measured from the wrong starting point',
        text: 'The plan measures the deadline from service date but you have proof the claim was originally filed within the window and only corrected later. Your appeal shows the original submission date, provides proof, and requests the plan to reprocess using the correct measurement rule and the original timely filing attempt.',
      },
    ],
    faqs: [
      { q: 'What is the single most important proof item?', a: 'Clearinghouse acceptance/rejection reports and submission confirmations that show timestamps.' },
      { q: 'What if the provider made the mistake?', a: 'You can still document the timeline and request reconsideration. The plan’s rules and correction pathways vary, so focus on the plan’s written rule and proof of attempts.' },
      { q: 'Should I appeal or have the provider resubmit?', a: 'Often both: correct and resubmit, and appeal the timely filing denial with proof of original submission.' },
      { q: 'What should I ask the plan to state in writing?', a: 'The exact date used to calculate the deadline and the rule language relied on.' },
      { q: 'Should I or my provider submit the appeal?', a: 'It depends on the plan and who has the submission proof and billing details. The key is that someone submits a timely, documented request with the acceptance reports attached.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-california/timely-filing-issue', label: 'California timely filing denials' },
      { path: '/health-insurance-claims-denied-pennsylvania/timely-filing-issue', label: 'Pennsylvania timely filing denials' },
      { path: '/health-insurance-claims-denied-texas/timely-filing-violations', label: 'Texas timely filing denials' },
    ],
  },
  {
    slug: 'health-claim-denied-coordination-of-benefits',
    title: 'Coordination of Benefits Denials (COB): How to Clear a Coverage Hold',
    description: 'How to fix COB denials, verify primary vs secondary coverage, and clear a claim that is stuck for “other insurance.”',
    canonicalPath: '/guides/health-claim-denied-coordination-of-benefits',
    categories: ['health', 'paperwork'],
    claimTypes: ['health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Confirm which plan is primary, submit COB forms and proof of other coverage status, and ask the plan to reprocess once coordination is updated in writing.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['health'] }),
      {
        id: 'why',
        heading: 'Why COB denials happen (often a hold, not a true coverage decision)',
        paragraphs: [
          'Coordination of Benefits (COB) denials often mean the plan believes another insurer should pay first or that your primary/secondary coverage information is incomplete. In practice, this can show up as a denial, a zero payment, or a status that looks like a rejection even when the service would otherwise be covered.',
          'The fastest fixes are administrative: confirm which plan is primary for the date of service, update COB records, and then request reprocessing. These issues can drag on when each party is waiting for the other party’s paperwork.',
        ],
      },
      {
        id: 'what-to-request',
        heading: 'What to request and collect (so the plan can reprocess)',
        checklist: [
          'The plan’s written reason for the COB denial and what other coverage it believes exists.',
          'COB questionnaire/form requirements and how to submit them.',
          'Proof of other coverage status (active/terminated dates) where applicable.',
          'If another plan is primary: the primary plan’s EOB to submit to the secondary plan.',
          'A written confirmation from the plan that COB has been updated after submission.',
        ],
      },
      {
        id: 'cleanup',
        heading: 'Step-by-step COB cleanup workflow',
        steps: [
          'Ask what other coverage the plan believes exists (plan name, member ID, date range).',
          'Confirm which plan is primary for the date of service (your situation determines the order).',
          'Submit COB forms and proof of coverage status (or termination proof if the other coverage ended).',
          'If another plan is primary: submit the claim to the primary plan, then submit the primary EOB to the secondary plan.',
          'Request reprocessing confirmation and a written updated determination.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that keep COB denials unresolved',
        bullets: [
          'Assuming COB is a medical denial and writing a clinical appeal instead of fixing the coverage ordering.',
          'Not obtaining the plan’s written statement of what other coverage it believes exists.',
          'Submitting COB forms without keeping proof of submission and the date COB was updated.',
          'Not submitting the primary plan’s EOB to the secondary plan after payment/denial.',
          'Letting weeks pass without asking for written reprocessing confirmation.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: plan believes you have other coverage that ended',
        text: 'A claim is denied because the plan’s COB file shows an old employer plan as primary. Your fix is administrative: provide termination proof or an “other coverage ended” confirmation and request the plan update COB in writing. Once updated, ask for claim reprocessing and keep the written confirmation for future claims.',
      },
      {
        title: 'Scenario 2: secondary plan needs the primary EOB',
        text: 'You have two active coverages and the secondary plan denies because it needs the primary EOB. Submit the claim to the primary plan first. Once you receive the primary EOB, submit it to the secondary plan with a short cover note requesting reprocessing. The goal is to complete the paperwork loop with proof.',
      },
    ],
    faqs: [
      { q: 'Is COB a real denial?', a: 'Often it is a coverage hold or coordination issue. The practical fix is updating primary/secondary information and requesting reprocessing.' },
      { q: 'What is the most important document for secondary coverage?', a: 'The primary plan’s EOB, plus proof of other coverage status and written confirmation that COB was updated.' },
      { q: 'Can this be fixed without a formal appeal?', a: 'Often yes. It is typically administrative, but keep deadlines in mind and preserve a written record.' },
      { q: 'What should I ask the plan to confirm in writing?', a: 'That COB has been updated and the claim will be reprocessed under the correct order.' },
      { q: 'What if the plans disagree about who is primary?', a: 'Ask each plan to state its coordination position in writing and keep copies. Then submit the written positions back to the other plan and request reprocessing once the record is updated.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-new-york/coordination-of-benefits', label: 'New York COB denials' },
      { path: '/health-insurance-claims-denied-georgia/coordination-of-benefits', label: 'Georgia COB denials' },
      { path: '/health-insurance-claims-denied-virginia/coordination-of-benefits', label: 'Virginia COB denials' },
    ],
  },
  {
    slug: 'health-claim-denied-pre-existing-condition',
    title: 'Pre-Existing Condition Denials: What to Check Before You Appeal',
    description: 'How pre-existing condition denials show up, what plan documents to review, and what evidence helps clarify eligibility and coverage dates.',
    canonicalPath: '/guides/health-claim-denied-pre-existing-condition',
    categories: ['health', 'rights'],
    claimTypes: ['health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Start by confirming your effective date and plan type, then request the exact contract language used and appeal with eligibility documents and medical records that clarify diagnosis timing when relevant.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['health'] }),
      {
        id: 'context',
        heading: 'Start with plan type and effective dates (pre-existing rules are plan-specific)',
        paragraphs: [
          'Pre-existing condition denials are highly plan-specific. Your first step is to confirm your plan type, your coverage effective date, and the exact contract language the plan is applying. Many disputes are really “eligibility and dates” disputes rather than medical debates.',
          'Your goal is to force clarity: what definition of pre-existing condition is the plan using, what lookback period (if any) was applied, and which records/dates the plan relied on to reach its conclusion.',
        ],
      },
      {
        id: 'check-first',
        heading: 'What to check first (build a date-driven file)',
        checklist: [
          'Coverage effective date and any waiting period language in plan documents.',
          'The denial’s cited contract language and the plan’s definition of “pre-existing condition.”',
          'Eligibility proof: enrollment confirmation, premium payment records, member ID issuance date.',
          'The plan’s stated lookback window (if any) and the list of records reviewed.',
          'Records showing symptom onset and diagnosis timing when those dates matter under the definition.',
        ],
      },
      {
        id: 'appeal-strategy',
        heading: 'Appeal strategy: quote the clause, verify dates, and narrow the dispute',
        paragraphs: [
          'A strong appeal keeps the dispute anchored to contract language and dates. You quote the definition, you identify the plan’s lookback window, and you show why the plan’s conclusion does not match the definition or the timeline.',
          'Avoid over-explaining. Submit only the record pages needed to establish key dates and ask the plan to state, in writing, which clause and which dates controlled the decision.',
        ],
        steps: [
          'Request the plan’s written rationale including definition, lookback window, and records reviewed list.',
          'Build a one-page timeline: effective date, service date, diagnosis/onset dates (if relevant), waiting period endpoints.',
          'Attach eligibility documents and only the medical record pages needed to establish key dates.',
          'Request a written reconsideration decision that states the clause and the dates applied.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to thin appeals',
        bullets: [
          'Arguing without quoting the plan’s definition and waiting period language.',
          'Submitting a full record dump instead of the pages needed to establish timeline facts.',
          'Not requesting the records reviewed list and guessing what the plan relied on.',
          'Missing deadlines while reconstructing long history that may not be relevant.',
          'Not asking the plan to state the exact clause and dates used.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: denial uses the wrong effective date',
        text: 'The plan denies as pre-existing but lists an effective date that does not match your enrollment confirmation. Your appeal attaches enrollment and premium proof, highlights the correct effective date, and requests re-evaluation using the correct timeline. This is a date-and-record correction, not a medical argument.',
      },
      {
        title: 'Scenario 2: lookback window dispute based on a single record entry',
        text: 'The plan classifies the condition as pre-existing based on a prior note. Your appeal requests the definition and lookback window in writing and asks the plan to cite the record and date it used. You then provide only the record pages needed to clarify timing and request reconsideration under the plan’s own definition.',
      },
    ],
    faqs: [
      { q: 'What is the most important first step?', a: 'Confirm plan type, effective date, and the exact definition/clause being applied.' },
      { q: 'Should I submit my whole medical history?', a: 'Usually no. Submit the pages that establish the key dates and facts that matter under the plan’s definition.' },
      { q: 'What should I ask the plan to provide?', a: 'The definition used, the lookback window (if any), and a list of records reviewed for the decision.' },
      { q: 'Can these denials be corrected?', a: 'Sometimes—especially when the plan used the wrong dates, wrong definition, or incomplete eligibility records.' },
      { q: 'What if the plan will not explain its definition?', a: 'Request the exact clause and definition in writing and ask the plan to cite the record and date used for its classification. Clear citations are essential for a meaningful appeal.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-texas/pre-existing-conditions', label: 'Texas pre-existing condition denials' },
      { path: '/health-insurance-claims-denied-california/experimental-or-investigational', label: 'California coverage criteria denials' },
      { path: '/health-insurance-claims-denied-new-york/benefit-or-service-excluded', label: 'New York excluded benefit denials' },
    ],
  },
  {
    slug: 'health-insurance-external-review',
    title: 'External Review for Health Insurance Denials: How It Works',
    description: 'What external review is, when it applies, and how to prepare a submission that focuses on criteria and evidence.',
    canonicalPath: '/guides/health-insurance-external-review',
    categories: ['health', 'disputes'],
    claimTypes: ['health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'External review is an independent review of certain health denials. Preserve deadlines, submit a clean file (denial + plan criteria + physician letter + exhibits), and keep your arguments tied to coverage criteria and medical evidence.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['health'] }),
      {
        id: 'when',
        heading: 'When external review is relevant (and why it is different from internal appeals)',
        paragraphs: [
          'External review is an independent review pathway for certain health coverage disputes. Eligibility and timing vary by plan and state rules, but the practical preparation is consistent: preserve deadlines, keep proof of internal appeal steps, and submit a criteria-driven file that a reviewer can verify quickly.',
          'External review submissions are strongest when they avoid broad fairness arguments and instead focus on the contract and criteria: what the plan requires, what the denial claims is missing, and where your evidence satisfies each requirement.',
        ],
      },
      {
        id: 'prepare',
        heading: 'Step-by-step: prepare an external review packet',
        steps: [
          'Collect the denial and internal appeal decision documents and keep proof of submission dates.',
          'Request the plan’s medical policy/coverage criteria and the records reviewed list.',
          'Create a one-page index mapping each disputed criterion to an exhibit.',
          'Obtain a provider letter that addresses criteria line-by-line using plan terminology.',
          'Attach only the record pages that document each criterion element (tests, imaging, prior treatments).',
        ],
      },
      {
        id: 'index',
        heading: 'Write the one-page summary/index (this is the reviewer’s shortcut)',
        paragraphs: [
          'A strong external review packet is easy to verify. Your one-page summary should not repeat the entire medical story. It should tell the reviewer where the proof is: which criterion is disputed and which exhibit page supports it. This increases informational density without increasing clutter.',
        ],
        checklist: [
          'List each disputed criterion in the plan’s wording.',
          'Under each criterion: 1–2 sentences of facts + the exhibit citation.',
          'Keep it neutral and factual; avoid unsupported conclusions.',
          'End with a clear request for review of the denial under the stated criteria.',
        ],
      },
      {
        id: 'packet',
        heading: 'What to include (and what to avoid)',
        bullets: [
          'Include: denial documents, criteria used, provider letter, objective records, and a one-page timeline/index.',
          'Include: a clean exhibit list and citations so verification is quick.',
          'Avoid: large unorganized record dumps without criteria mapping.',
          'Avoid: arguments not tied to coverage criteria or contract language.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that weaken external review submissions',
        bullets: [
          'Missing deadlines because internal steps were not tracked in one place.',
          'Submitting without the exact criteria used for denial.',
          'Using a generic provider letter that does not map facts to criteria.',
          'Providing volume without organization (no exhibit list, no citations).',
          'Not keeping proof of every submission and decision date.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: medical necessity dispute after an internal denial',
        text: 'You lose an internal appeal for “not medically necessary.” Your external review packet improves by being criteria-driven: attach the medical policy criteria, a provider letter mapping each criterion, and the exact chart note pages supporting each element. Your one-page index functions as a checklist for the reviewer.',
      },
      {
        title: 'Scenario 2: out-of-network exception dispute',
        text: 'You dispute an out-of-network decision because adequate in-network care was not available. Your packet includes the plan’s network rules, documentation of your attempts to find in-network options, and records supporting urgency when relevant. You ask the reviewer to evaluate the exception pathway under the plan’s language and documented facts.',
      },
    ],
    faqs: [
      { q: 'Do I need to finish internal appeals first?', a: 'Often yes, but rules vary. Preserve deadlines and keep proof of each step. Use the plan’s written instructions to determine timing.' },
      { q: 'What matters most in an external review packet?', a: 'The criteria used and evidence that maps to those criteria with clear exhibit labels and citations.' },
      { q: 'Should I submit the whole medical record?', a: 'Usually no. Submit the pages that document criteria elements and provide a short index for the reviewer.' },
      { q: 'Is external review guaranteed to overturn a denial?', a: 'No. It is a structured review process. Outcomes depend on plan language, criteria, and evidence submitted.' },
      { q: 'What should I avoid writing in my submission?', a: 'Avoid broad fairness arguments or long narratives without citations. Focus on criteria, facts, and where the evidence is in your exhibits.' },
    ],
    relatedStateLinks: [
      { path: '/health-insurance-claims-denied-new-york', label: 'New York health claim denials' },
      { path: '/health-insurance-claims-denied-texas', label: 'Texas health claim denials' },
      { path: '/health-insurance-claims-denied-california', label: 'California health claim denials' },
    ],
  },
  {
    slug: 'file-a-complaint-with-your-state-insurance-department',
    title: 'How to Contact Insurance Regulators for Help (and File a Complaint)',
    description: 'When to contact your state insurance department, what information to include, and how to avoid common complaint mistakes.',
    canonicalPath: '/guides/file-a-complaint-with-your-state-insurance-department',
    categories: ['rights', 'disputes'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'File a complaint when you cannot get a clear written explanation, the insurer is stalling, or you believe claim-handling rules were violated. Include the denial letter, claim number, timeline, and your written requests.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto', 'health'] }),
      {
        id: 'when',
        heading: 'When a regulator complaint helps (and when it usually does not)',
        paragraphs: [
          'Regulators/insurance departments are often most helpful when the issue is claim handling and process: the insurer will not explain the reason, will not cite policy language, misses response timelines, repeatedly requests the same documents without action, or ignores written requests.',
          'Regulators are usually less effective at re-adjudicating complex factual disputes (like contested liability) or substituting medical opinion for plan criteria. A complaint can still be valuable because it can force clearer written explanations and correct process failures.',
        ],
      },
      {
        id: 'pre-steps',
        heading: 'Do these steps first (so your complaint is strong)',
        steps: [
          'Request a written explanation and the exact policy/plan section relied on.',
          'Request the claim file/notes and a written list of what would change the decision.',
          'Submit an appeal or correction packet with proof of submission.',
          'Document missed response timelines or repeated unanswered requests.',
        ],
      },
      {
        id: 'submit',
        heading: 'What to include (a complaint-ready packet)',
        checklist: [
          'Claim number and policy/plan number.',
          'A one-page timeline of events (dates + what you submitted + what you received).',
          'Denial letter/EOB and any appeal decisions.',
          'Copies of written requests and insurer responses (or lack of response).',
          'Proof of submission (portal receipts, fax confirmations, certified mail).',
          'A clear ask focused on process: written explanation, status, response deadline compliance, or correction of a handling error.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common complaint mistakes',
        bullets: [
          'Submitting without a timeline and without copies of your written requests.',
          'Asking for broad fairness relief instead of a specific process correction or written explanation.',
          'Not attaching the denial page and the policy/plan language issue you are raising.',
          'Not keeping proof of what you submitted and when.',
          'Flooding the complaint with irrelevant documents instead of a clean, focused packet.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: insurer will not provide a clear written reason or policy language',
        text: 'You repeatedly request the policy/plan language relied on and the claim notes but receive only generic responses. Your complaint packet includes your written requests, the denial letter, proof of submission, and a one-page timeline showing the lack of response. Your ask is narrow: require the insurer to provide the cited contract language and a written rationale and to confirm the appeal process timeline in writing.',
      },
      {
        title: 'Scenario 2: repeated document requests with no decision update',
        text: 'The insurer keeps asking for the same documents and the claim does not move. Your complaint packet shows what you already submitted (with proof), the dates of repeated requests, and your written follow-ups. You ask for a written status update and a clear list of any truly missing items.',
      },
    ],
    faqs: [
      { q: 'Will a regulator force the insurer to pay?', a: 'Regulators often focus on process and communication. They can be effective at requiring explanations and timeline compliance, but outcomes vary.' },
      { q: 'What makes a complaint effective?', a: 'A one-page timeline, the denial document, copies of your written requests, and a clear process-focused ask.' },
      { q: 'Should I file a complaint before appealing?', a: 'Usually you should attempt the insurer’s appeal/correction process first unless deadlines or non-response make that impossible.' },
      { q: 'What should I avoid including?', a: 'Large irrelevant document dumps. Include only what supports your timeline, your requests, and the handling issue.' },
      { q: 'Does filing a complaint pause my appeal deadline?', a: 'Usually no. Treat appeal deadlines as separate and keep submitting on time while you pursue complaint channels.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-pennsylvania', label: 'Pennsylvania auto claim denials' },
      { path: '/health-insurance-claims-denied-florida', label: 'Florida health claim denials' },
      { path: '/auto-insurance-claims-denied-texas', label: 'Texas auto claim denials' },
      { path: '/health-insurance-claims-denied-illinois', label: 'Illinois health claim denials' },
    ],
  },
  {
    slug: 'insurance-bad-faith-basics',
    title: 'Insurance Bad Faith Claims Explained (Plain English)',
    description: 'What “bad faith” generally means, what to document, and how to think about escalation when claim handling is unreasonable.',
    canonicalPath: '/guides/insurance-bad-faith-basics',
    categories: ['rights', 'disputes'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Bad faith is generally about unreasonable claim handling. Preserve evidence: written requests, timelines, and the insurer’s stated reasons. Escalate in steps—supervisor review, written appeal, regulator complaint—before assuming litigation is the right next move.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto', 'health'] }),
      {
        id: 'what-it-is',
        heading: 'What “bad faith” generally refers to (and what it is not)',
        paragraphs: [
          '“Bad faith” is commonly used to describe claim handling that appears unreasonable, inconsistent with stated rules, or unsupported by the insurer’s own file. Not every denial is bad faith—many denials are based on missing documents, exclusions, or criteria not met. The practical question is whether the insurer’s handling and explanations are consistent, timely, and grounded in the policy/plan language and the evidence reviewed.',
          'This guide is educational. The most useful outcome is building a high-quality paper trail so you can escalate intelligently: you know what was requested, what was provided, what the insurer relied on, and where the process broke down.',
        ],
      },
      {
        id: 'signals',
        heading: 'Red flags worth documenting (process signals)',
        bullets: [
          'Repeated requests for the same documents without explaining what is missing or why it matters.',
          'No written rationale or no policy/plan language cited despite written requests.',
          'Long delays without clear status updates or without a decision timeline.',
          'Denial reasons that shift over time without identifying new evidence.',
          'A denial that contradicts documents already provided (date errors, “missing record” claims).',
          'Failure to respond to written requests for claim file/criteria and decision rationale.',
        ],
      },
      {
        id: 'paper-trail',
        heading: 'Build the paper trail that makes escalation stronger',
        checklist: [
          'A case log: date/time → who → what was said → next promised step.',
          'Written requests for policy/plan language, criteria used, and claim notes.',
          'Proof of every submission (portal/fax/certified mail).',
          'A one-page timeline and exhibit list for each appeal packet.',
          'Copies of every denial, partial denial, and appeal decision.',
        ],
      },
      {
        id: 'escalate',
        heading: 'Practical escalation sequence (clean and repeatable)',
        steps: [
          'Request a written explanation and the exact policy/plan section relied on for each denial reason.',
          'Request the claim file, claim notes, and the criteria/medical policy used.',
          'Submit a point-by-point appeal or correction packet with labeled exhibits.',
          'Request supervisor review and a written statement of what evidence would change the decision.',
          'If stalled or non-responsive, file a regulator/consumer complaint with your timeline attached.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Mistakes that weaken escalation efforts',
        bullets: [
          'Escalating without a clean written record (no timeline, no proof of submissions).',
          'Arguing intent or fairness without tying issues to policy/plan language or criteria.',
          'Not forcing clarity on what would change the decision.',
          'Submitting unorganized documents that make facts hard to verify quickly.',
          'Missing deadlines while focusing on escalation instead of preserving appeal rights.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: shifting denial reasons without new evidence',
        text: 'You receive one denial reason, submit documents that address it, then receive a new denial reason with no explanation of what changed. The high-intent move is to request claim notes and a written rationale that identifies what evidence supports the new reason. Your timeline and submission proof help show the sequence and force specificity.',
      },
      {
        title: 'Scenario 2: repeated document requests despite proof of submission',
        text: 'The insurer repeatedly requests the same documents that you already submitted. Your escalation packet is your timeline plus proof of submission and a written request for a clear list of what is actually missing. This type of procedural issue is verifiable and is often more actionable than debating the underlying dispute in the abstract.',
      },
    ],
    faqs: [
      { q: 'Is every denial bad faith?', a: 'No. Many denials are valid. The practical concern is unreasonable handling, lack of clear rationale, or decisions unsupported by the insurer’s own file.' },
      { q: 'What should I document?', a: 'Dates, written requests, written responses, policy/plan language cited, criteria used, and proof of what you submitted.' },
      { q: 'What is the safest next step if I suspect poor handling?', a: 'Strengthen your paper trail: request the claim file/criteria, submit a structured appeal, and escalate through documented channels.' },
      { q: 'Is this legal advice?', a: 'No. This is educational guidance focused on documentation and process-quality escalation.' },
      { q: 'Should I stop communicating with the insurer?', a: 'Usually no. Keep communications factual and in writing and keep meeting deadlines. A strong paper trail is built by documented requests and documented responses.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-new-york', label: 'New York auto claim denials' },
      { path: '/health-insurance-claims-denied-california', label: 'California health claim denials' },
      { path: '/auto-insurance-claims-denied-michigan', label: 'Michigan auto claim denials' },
    ],
  },
  {
    slug: 'auto-claim-denied-no-coverage-at-time-of-loss',
    title: 'Auto Insurance Claim Denied for “No Coverage at Time of Loss” — Next Steps',
    description: 'How to respond to a “no coverage” denial: confirm dates, request policy records, and document why coverage applies.',
    canonicalPath: '/guides/auto-claim-denied-no-coverage-at-time-of-loss',
    categories: ['auto', 'appeals'],
    claimTypes: ['auto'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Ask for the exact coverage dates and the policy record relied on, then document your coverage status with declarations, payment records, and any reinstatement notices.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto'] }),
      {
        id: 'what-it-means',
        heading: 'What “no coverage at time of loss” usually means',
        paragraphs: [
          'This denial means the insurer believes the policy was not in force for the loss date and time. The reasons are usually one of three: the policy had not started yet, it ended before the loss (cancellation/nonrenewal), or the insurer believes the vehicle/driver was not covered under the policy as written on that date.',
          'Because the decision is date-driven, your best tool is a document-backed timeline: effective dates, billing ledger entries, notice dates, payment dates, and any reinstatement language. Many disputes are not “did you pay” but “when did it post and what effective date was applied.”',
        ],
      },
      {
        id: 'what-to-request',
        heading: 'What to request from the insurer (so you can verify their dates)',
        checklist: [
          'Declarations page for the loss date (not a newer version).',
          'Policy status history showing active/canceled dates and any reinstatement entries.',
          'Billing ledger showing premium due dates, payment postings, fees, and cancellation triggers.',
          'All cancellation/nonrenewal and reinstatement notices (with mailing dates if shown).',
          'A written statement of the exact coverage end date/time the insurer is using.',
        ],
      },
      {
        id: 'appeal-strategy',
        heading: 'Appeal strategy: build a one-page “coverage status timeline” with exhibits',
        paragraphs: [
          'Treat this like an accounting problem with evidence. Create a one-page timeline where each date has an exhibit: Exhibit A (declarations), Exhibit B (billing ledger), Exhibit C (payment proof), Exhibit D (notice). Your appeal should be short: it points to the timeline and asks the insurer to reconcile any mismatches in writing.',
          'If a reinstatement occurred, focus on the exact reinstatement terms and effective dates. Do not assume reinstatement is retroactive. Ask the insurer to state, in writing, whether reinstatement changes coverage for the loss date and why.',
        ],
        steps: [
          'Write the loss date/time and the insurer’s stated “no coverage” date/time on page one.',
          'Attach the declarations page showing effective dates for the relevant period.',
          'Attach proof of payment and match it to the billing ledger posting dates.',
          'Attach all notices and highlight effective dates and any grace-period language if present.',
          'Request reconsideration or a written explanation reconciling each mismatch in dates.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Mistakes to avoid',
        bullets: [
          'Assuming “no coverage” is final without obtaining the policy status history and billing ledger.',
          'Focusing on fairness instead of reconciling dates and documents.',
          'Appealing without the declarations page for the loss date (using a newer policy version).',
          'Ignoring reinstatement terms and effective-date language.',
          'Not asking the insurer to confirm the exact end date/time used for the denial.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: payment posted after the loss but you paid before',
        text: 'The insurer denies stating coverage ended before the loss because a payment posted after the accident. Your appeal packet focuses on proving when you paid and how it should be applied: attach bank/EFT confirmation with timestamp, match it to the billing ledger, and request the insurer’s payment posting history. Your goal is to make the date mismatch undeniable and to force a written reconciliation of payment date versus posting date and coverage effective status.',
      },
      {
        title: 'Scenario 2: cancellation notice dispute',
        text: 'The insurer denies stating the policy was canceled for nonpayment and references a cancellation notice. Your appeal requests the notice copy, the effective cancellation date/time, and the billing ledger that triggered cancellation. You attach your notices and payment proof and ask the insurer to confirm in writing which notice and which ledger entries control. The goal is not to argue; it is to make the insurer show the document chain behind the cancellation timeline.',
      },
    ],
    faqs: [
      { q: 'What is the first thing to request?', a: 'The policy status history and billing ledger for the relevant period, plus the declarations page for the loss date.' },
      { q: 'What if I have proof I paid?', a: 'Match the payment proof to the billing ledger and request a written reconciliation of posting date vs payment date and the coverage effective status used.' },
      { q: 'Does reinstatement automatically cover a prior loss?', a: 'Not necessarily. Reinstatement terms and effective dates control. Request those terms in writing.' },
      { q: 'What should my appeal focus on?', a: 'Dates, documents, and effective language: declarations, ledger, notices, and payment timestamps.' },
      { q: 'Can this kind of denial be reversed?', a: 'Sometimes—especially when there is a date mismatch, missing notice documentation, or incomplete policy status records.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-california/no-coverage-at-time-of-loss', label: 'California no-coverage denials' },
      { path: '/auto-insurance-claims-denied-florida/no-coverage-at-time-of-loss', label: 'Florida no-coverage denials' },
      { path: '/auto-insurance-claims-denied-texas/no-coverage-at-time-of-loss', label: 'Texas no-coverage denials' },
      { path: '/auto-insurance-claims-denied-new-york/no-coverage-at-time-of-loss', label: 'New York no-coverage denials' },
    ],
  },
  {
    slug: 'auto-claim-denied-policy-lapse-or-cancellation',
    title: 'Auto Insurance Claim Denied for Policy Lapse or Cancellation — What to Do',
    description: 'How to challenge lapse/cancellation denials with payment records, notices, and a policy status timeline.',
    canonicalPath: '/guides/auto-claim-denied-policy-lapse-or-cancellation',
    categories: ['auto', 'appeals', 'deadlines'],
    claimTypes: ['auto'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Request the policy status history and billing ledger, then appeal with proof of payment, cancellation/reinstatement notices, and a timeline showing coverage on the loss date.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto'] }),
      {
        id: 'why',
        heading: 'Why lapse/cancellation denials happen (common patterns)',
        paragraphs: [
          'Some lapse denials are true missed-payment issues. Others are timing and paperwork issues: a payment posted after the loss even though it was initiated earlier, a notice that was sent but not received, a reinstatement with non-retroactive terms, or a mismatch between billing and underwriting records.',
          'Because the dispute is built from dates, the win condition is a clean, document-backed timeline. Your appeal should make it easy to answer: what was the policy status on the loss date and why?',
        ],
      },
      {
        id: 'timeline',
        heading: 'Step-by-step: build a cancellation timeline the insurer must address',
        steps: [
          'Request the billing ledger and full policy status history (active/canceled/reinstated dates).',
          'Collect proof of payment with timestamps (bank/EFT confirmation, receipts).',
          'Collect cancellation/nonrenewal notices and any reinstatement letters or emails.',
          'Create a one-page timeline: due date → payment initiated → posting date → cancellation effective date/time → loss date/time.',
          'Attach exhibits to each timeline entry and highlight any mismatched dates.',
        ],
      },
      {
        id: 'appeal',
        heading: 'How to write the appeal (keep it narrow and date-driven)',
        paragraphs: [
          'Your appeal should not debate intent. It should ask the insurer to reconcile the dates and documents. Quote the cancellation language and point to your exhibits. Then ask for a written decision that explains why your timeline is wrong if they disagree.',
        ],
        checklist: [
          'Quote: policy cancellation/nonpayment language (and any grace period language if present).',
          'Exhibits: billing ledger page(s) + payment proof + notices + status history.',
          'A clear request: confirm coverage status on the loss date or provide a written reconciliation of the date mismatch.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Mistakes that weaken lapse/cancellation appeals',
        bullets: [
          'Not requesting the policy status history (you cannot verify “active vs canceled” without it).',
          'Using only bank statements without matching them to the insurer’s billing ledger.',
          'Ignoring reinstatement effective-date terms and assuming retroactive coverage.',
          'Not requesting copies of notices and relying on memory of what was received.',
          'Submitting a narrative without a one-page timeline tied to exhibits.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: payment initiated before loss but posted after',
        text: 'The insurer denies stating the policy canceled before the accident because payment posted two days later. Your appeal attaches the bank confirmation showing the payment initiation time, the billing ledger showing posting date, and the policy cancellation language. Your timeline makes the timing difference obvious and asks the insurer to confirm in writing whether payment initiation affects status or whether only posting controls under their process.',
      },
      {
        title: 'Scenario 2: reinstatement after loss with non-retroactive terms',
        text: 'You reinstated after the accident and assumed coverage would apply. The insurer denies stating reinstatement is not retroactive. Your appeal requests the reinstatement terms and effective date language and asks the insurer to specify, in writing, which date controls coverage for the loss. Even if the denial stands, you leave with a clear written record instead of uncertainty.',
      },
    ],
    faqs: [
      { q: 'What if I paid but the insurer says I did not?', a: 'Ask for the billing ledger and policy status history and match your payment proof to the ledger’s posting entries and dates.' },
      { q: 'What if I reinstated after the accident?', a: 'Reinstatement may not be retroactive. The effective dates and terms control, so request them in writing.' },
      { q: 'What should I highlight in my appeal?', a: 'The loss date/time, cancellation effective date/time, payment timestamps, and any document that conflicts with the insurer’s timeline.' },
      { q: 'Can these denials be reversed?', a: 'Sometimes—especially when there is a date mismatch, incomplete notice documentation, or posting/processing errors.' },
      { q: 'What if autopay failed or my bank changed?', a: 'Document the payment attempt and timing and ask the insurer to reconcile the billing ledger with your proof. These disputes often turn on dates and posting status rather than intent.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-pennsylvania/policy-lapse-or-cancellation', label: 'Pennsylvania lapse/cancellation denials' },
      { path: '/auto-insurance-claims-denied-ohio/policy-lapse-or-cancellation', label: 'Ohio lapse/cancellation denials' },
      { path: '/auto-insurance-claims-denied-virginia/policy-lapse-or-cancellation', label: 'Virginia lapse/cancellation denials' },
      { path: '/auto-insurance-claims-denied-illinois/policy-lapse-or-cancellation', label: 'Illinois lapse/cancellation denials' },
    ],
  },
  {
    slug: 'auto-claim-denied-late-notice-or-missed-deadline',
    title: 'Auto Insurance Claim Denied for Late Notice — How to Respond',
    description: 'How “late notice” works, what evidence helps, and how to show the insurer was not harmed by the delay.',
    canonicalPath: '/guides/auto-claim-denied-late-notice-or-missed-deadline',
    categories: ['auto', 'deadlines', 'appeals'],
    claimTypes: ['auto'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Build a clean timeline of when you learned of the claim and when you reported it, then attach evidence that the insurer can still investigate (photos, police report, witness info, repair estimates).',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto'] }),
      {
        id: 'how-insurers-think',
        heading: 'How insurers evaluate late notice denials (the “prejudice” logic)',
        paragraphs: [
          'Late notice denials usually rest on one idea: the insurer claims the delay harmed its ability to investigate, verify facts, or protect its interests. This is why a strong appeal focuses on investigation impact—not on explaining why life was busy.',
          'Your win condition is to show that key facts are still verifiable and that the insurer can still do what it needed to do: inspect damage, interview witnesses, confirm police reports, review repair estimates, and evaluate coverage. The cleaner your proof, the harder it is to argue “we cannot investigate.”',
        ],
      },
      {
        id: 'build-timeline',
        heading: 'Step-by-step: build the timeline the insurer must respond to',
        steps: [
          'Request the insurer’s timeline in writing: when they say notice was due and what date they claim you reported.',
          'Build your timeline: when you learned of the loss, when you reported, and what happened in between (with proof).',
          'Collect investigation-friendly evidence: police report, photos, estimates, witness contact info, and any contemporaneous messages.',
          'Ask the insurer to specify what investigation step is now impossible because of the delay.',
          'Submit a short appeal that answers that question with exhibits.',
        ],
      },
      {
        id: 'evidence-extras',
        heading: 'Evidence that directly addresses “late notice”',
        bullets: [
          'Police report number and a copy of the report (or proof it exists and is available).',
          'Time-stamped scene and damage photos from near the loss date.',
          'Repair estimates and shop photos that show damage details.',
          'Witness contact information and short witness statements (if available).',
          'A clear statement of what remained unchanged since the loss (vehicle location, damage preservation, records).',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Mistakes that weaken late notice appeals',
        bullets: [
          'Arguing fairness without addressing investigation impact and verifiable facts.',
          'Not attaching the basic investigation documents (police report, photos, estimate).',
          'Failing to ask what fact would change the decision and what step is “impossible.”',
          'Submitting a narrative without dates, timestamps, and exhibit labels.',
          'Not requesting the insurer’s written rationale and notes for the denial.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: delayed reporting but strong documentation exists',
        text: 'You report an accident weeks later, but you have time-stamped photos, a police report number, and a repair estimate created shortly after the incident. Your appeal uses a short timeline and attaches those exhibits, then asks the insurer to specify which investigation step is no longer possible. If the insurer cannot identify a concrete prejudice item, your packet forces the denial to become more specific and reviewable.',
      },
      {
        title: 'Scenario 2: notice delay because you did not know a claim existed',
        text: 'You did not report immediately because you did not realize the other party would pursue a claim or because you believed damage was minimal until later. Your appeal avoids long explanations and focuses on proof: when you learned of the issue, what documentation exists from the loss period, and what facts remain verifiable. Attach contemporaneous communications that show timing and use an evidence-forward submission rather than an emotional narrative.',
      },
    ],
    faqs: [
      { q: 'What is the most important question to ask the insurer?', a: '“What investigation step is now impossible because of the delay?” This forces the denial to be specific.' },
      { q: 'What evidence helps most?', a: 'Time-stamped photos, police report information, repair estimates, and witness contacts—anything that preserves verifiable facts.' },
      { q: 'Should I explain why I was late?', a: 'Briefly, but focus on facts and proof. The strongest appeals show that investigation is still possible.' },
      { q: 'Can late notice denials be reversed?', a: 'Sometimes—especially when you can demonstrate strong documentation and low investigation impact.' },
      { q: 'What if there is no police report?', a: 'Use other objective proof: time-stamped photos, repair estimates, witness statements, towing/impound records, and any contemporaneous communications that establish the timeline.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-california/missed-reporting-deadline', label: 'California late notice denials' },
      { path: '/auto-insurance-claims-denied-georgia/missed-reporting-deadline', label: 'Georgia late notice denials' },
      { path: '/auto-insurance-claims-denied-new-jersey/missed-reporting-deadline', label: 'New Jersey late notice denials' },
      { path: '/auto-insurance-claims-denied-new-york/missed-reporting-deadline', label: 'New York late notice denials' },
    ],
  },
  {
    slug: 'auto-claim-denied-excluded-driver',
    title: 'Auto Insurance Claim Denied for an Excluded Driver — Next Steps',
    description: 'A high-intent guide to excluded-driver denials: how insurers apply the exclusion, what documents control the decision, and how to dispute driver identity or endorsement details with a review-ready file.',
    canonicalPath: '/guides/auto-claim-denied-excluded-driver',
    categories: ['auto', 'paperwork'],
    claimTypes: ['auto'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Treat excluded-driver denials as a documentation and identity problem: get the signed exclusion and endorsement (with effective dates), confirm who the insurer says was driving and what evidence supports it, then appeal with a timeline and exhibits that address driver identity, endorsement timing, and the exact policy language relied on.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto'] }),
      {
        id: 'what-it-means',
        heading: 'What an “excluded driver” denial usually means (and what it does not)',
        paragraphs: [
          'An excluded-driver denial typically means the insurer believes the vehicle was being operated by a person specifically excluded by name through an endorsement or a signed exclusion form. These denials are often strict because the exclusion is treated as a core underwriting condition.',
          'That said, the denial still has inputs you can verify. Insurers can deny for excluded driver because (a) the wrong person was identified as the driver, (b) the exclusion endorsement was not effective on the loss date, (c) the insurer is relying on a definition you have not seen, or (d) the file lacks a clean chain of evidence showing who was driving and why.',
          'Your goal is not to argue fairness. Your goal is to force the decision onto the controlling documents: the endorsement language, the effective dates, and the evidence used to identify the driver.',
        ],
      },
      {
        id: 'verify-documents',
        heading: 'Step-by-step: verify the exclusion documents and dates',
        steps: [
          'Request the signed excluded-driver form (if any) and the endorsement page that adds the exclusion to the policy.',
          'Request the declarations page for the loss date and any mid-term change documents around that period.',
          'Ask for the insurer’s claim notes showing when the exclusion was added and what effective date they used.',
          'Confirm the exact name and identifiers used for the excluded person (full name, DOB if relevant, license number if available).',
          'If anything is missing or unclear, request written clarification before you write a long appeal.',
        ],
      },
      {
        id: 'driver-identity',
        heading: 'Driver identity: what evidence insurers use (and how to challenge mistakes)',
        paragraphs: [
          'Excluded-driver denials often hinge on driver identity. Insurers may rely on the police report, statements taken by adjusters, repair-shop intake forms, tow records, or third-party reports. Identity mistakes happen more than people expect—especially when multiple family members have similar names, when a police report is amended later, or when an initial statement was misunderstood.',
          'If you dispute driver identity, focus on objective evidence and timestamps: who had the keys, who was listed on the police report, any dashcam footage, receipts showing who was elsewhere, employer time logs, or contemporaneous text messages that establish the timeline. Keep privacy in mind and submit only what directly supports the disputed fact.',
        ],
        checklist: [
          'Police report driver section (and any corrected/amended version).',
          'Recorded statement transcripts or summaries (request copies if they exist).',
          'Tow/impound paperwork naming the driver/pickup person.',
          'Repair estimate intake forms (sometimes list the driver and loss narrative).',
          'Time-stamped photos or video that establish who was present and when.',
        ],
      },
      {
        id: 'appeal-strategy',
        heading: 'Appeal strategy: match your evidence to the exact exclusion language',
        paragraphs: [
          'Once you have the endorsement language, you can write a clean, review-ready appeal. Use the denial reasons as headings. Under each heading, quote the exact exclusion text and then explain, with exhibits, why the insurer’s conclusion does not match the documents or facts.',
          'If the insurer is correct that an excluded person was driving, the dispute may shift to what coverages are affected (for example, whether the denial applies to the entire claim or only certain coverages). Those questions are policy-specific. Your appeal should request the insurer’s written coverage position by coverage type and the exact contract language used.',
        ],
        steps: [
          'Quote the endorsement language and the effective date the insurer claims applies.',
          'Answer the driver-identity point with your timeline and exhibits (or request the missing evidence used to identify the driver).',
          'If dates are disputed, attach the policy change documents and highlight the effective-date language.',
          'End with a clear request for reconsideration and a written response that specifies what would change the decision.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials',
        bullets: [
          'Assuming the insurer’s driver identification is correct without seeing the evidence used.',
          'Appealing without the exclusion endorsement page and effective dates (you cannot dispute what you cannot quote).',
          'Sending a narrative instead of a timeline + exhibits tied to driver identity and dates.',
          'Ignoring the possibility that the denial is based on a definition or endorsement you have not received yet.',
          'Relying on phone calls without written requests and written responses.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: police report lists the wrong driver name',
        text: 'The insurer denies because the police report initially lists an excluded household member as the driver. You later obtain an amended report identifying a different driver. A high-intent appeal attaches both versions, highlights the amended driver section, and includes a short timeline of when the correction occurred. You also request the insurer’s claim notes and any recorded statement they relied on. Your letter should quote the exclusion language and state, clearly, that the excluded person was not the operator. End by requesting reconsideration and confirmation that the claim is back under review.',
      },
      {
        title: 'Scenario 2: endorsement timing dispute after a mid-term policy change',
        text: 'Your insurer denies because an excluded-driver endorsement was added mid-term and they claim it was effective before the loss. You have policy change documents indicating different effective dates or notice timing. A strong appeal highlights the effective-date language, attaches the policy change declaration/endorsement pages, and asks for the insurer’s internal policy status history showing when the endorsement was applied. Your goal is to make the date conflict obvious and documented, not argued.',
      },
    ],
    faqs: [
      { q: 'What is the first document I should request?', a: 'The excluded-driver endorsement page (policy language) plus any signed excluded-driver form, with effective dates.' },
      { q: 'What if the insurer will not give me the endorsement language?', a: 'Request it in writing and note that you cannot meaningfully appeal without the exact contract language relied on.' },
      { q: 'What if I disagree about who was driving?', a: 'Ask what evidence the insurer used (police report section, statements, notes) and respond with objective proof and a timeline.' },
      { q: 'Should I send everything I have?', a: 'Send what proves driver identity and endorsement timing. A clean, targeted file is easier to review than a large unorganized upload.' },
      { q: 'Can an excluded driver denial be reversed?', a: 'Sometimes—especially when the denial is based on mistaken driver identity or endorsement timing. The decision is document-driven.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-florida/excluded-driver', label: 'Florida excluded driver denials' },
      { path: '/auto-insurance-claims-denied-illinois/excluded-driver', label: 'Illinois excluded driver denials' },
      { path: '/auto-insurance-claims-denied-ohio/excluded-driver', label: 'Ohio excluded driver denials' },
    ],
  },
  {
    slug: 'auto-claim-denied-misrepresentation-or-concealment',
    title: 'Auto Claim Denied for Misrepresentation — What It Means and How to Respond',
    description: 'How insurers use “misrepresentation” denials, what facts typically matter, and how to respond with documents instead of arguments.',
    canonicalPath: '/guides/auto-claim-denied-misrepresentation-or-concealment',
    categories: ['auto', 'appeals'],
    claimTypes: ['auto'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Request the specific statement the insurer claims was false, the underwriting/claims notes supporting it, and respond with documents that clarify the disputed fact (garaging, drivers, usage, dates).',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto'] }),
      {
        id: 'what-it-means',
        heading: 'What insurers mean by “misrepresentation” (and why this denial is so document-driven)',
        paragraphs: [
          'A misrepresentation denial usually means the insurer believes a material fact on the application or policy change was inaccurate, omitted, or inconsistent with the insurer’s underwriting rules. Common examples include garaging address, primary driver, household members/drivers, vehicle use (personal vs business), mileage, or prior losses.',
          'These denials often feel personal because they imply dishonesty, but the claim decision is typically built from documents: the application questions and answers, endorsements, underwriting guidelines (sometimes internal), claim notes, and statements. Your job is to identify the exact statement the insurer claims is false and then prove what is true with dated, objective documentation.',
          'Misrepresentation disputes can also be “scope” disputes: the insurer may assert the issue voids coverage broadly, while the actual policy language and facts may be more specific. Do not assume the insurer’s framing is the only framing—force them to cite the exact policy language they rely on.',
        ],
      },
      {
        id: 'what-to-request',
        heading: 'What to request from the insurer (to see the logic behind the denial)',
        checklist: [
          'A copy of the full application (all pages, all questions/answers) and any change requests.',
          'The policy/endorsement language the insurer relies on for the misrepresentation denial.',
          'Underwriting notes related to the alleged false statement (garaging/driver/use/mileage).',
          'Claim notes and any recorded statement transcripts or summaries used for the conclusion.',
          'A written explanation of which specific fact is disputed and how it affected underwriting/coverage.',
        ],
      },
      {
        id: 'appeal-strategy',
        heading: 'Appeal strategy: isolate the disputed statement and prove the true fact',
        paragraphs: [
          'The most effective misrepresentation appeals are narrow. You pick the disputed statement, show exactly what you said (or what the insurer recorded), then attach documentation that proves the true fact. You do not need a long story—just proof with dates.',
          'If the dispute is about a category (for example, “business use”), the appeal should first quote the policy definition and then show, with receipts and records, what the vehicle was actually used for on the loss date. If the dispute is about who lives in the household or who regularly drives, your appeal should focus on verifiable residence/driver patterns rather than opinions.',
        ],
        steps: [
          'Quote the exact application question and the answer that is allegedly false.',
          'Quote the exact policy/endorsement language the insurer cites for denial.',
          'Attach 3–7 targeted documents that prove the true fact (dated, objective, labeled exhibits).',
          'If the insurer relied on a statement you dispute, request the recording/transcript and correct the record in writing.',
          'End with a clear request for reconsideration and a written explanation of what evidence would change the decision.',
        ],
      },
      {
        id: 'evidence-extras',
        heading: 'High-impact evidence for common misrepresentation allegations',
        bullets: [
          'Garaging address: lease/mortgage statement, utility bill, DMV registration, dated mail, parking/garage receipts if relevant.',
          'Primary driver/household drivers: driver’s license address history (if applicable), insurance ID cards, vehicle access patterns, employment schedules, documented ownership/use.',
          'Vehicle use: trip logs, rideshare/delivery app status logs, employer letter, business records, receipts that show purpose of the trip.',
          'Mileage: service records, inspection records, odometer photos with timestamps, maintenance logs.',
          'Prior losses/tickets: copies of prior claim documentation or official records if the insurer’s allegation is about undisclosed history.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials',
        bullets: [
          'Arguing intent (“I didn’t mean to”) instead of proving the disputed fact with documents.',
          'Not requesting the application pages and underwriting notes (you end up responding to a summary, not the actual statement).',
          'Sending a large unorganized upload without exhibit labels and without tying evidence to the exact question/answer.',
          'Ignoring policy definitions (business use, household member, regular driver) and arguing common-sense meanings instead.',
          'Accepting the insurer’s framing without requiring a written citation to the policy/endorsement language.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: garaging address dispute after a move',
        text: 'The insurer denies, stating the vehicle was garaged at a different address than listed. Your appeal should request the application page showing the address field and the underwriting notes that flagged the discrepancy. Then attach dated proof of residence for the garaging address on the relevant period (lease/utility/DMV registration) and a short timeline showing when any move occurred. If the insurer relied on a third-party report, request it and correct any incorrect dates in writing. The goal is to make the “true address during the policy period” obvious with documents, not explanation.',
      },
      {
        title: 'Scenario 2: undisclosed household driver allegation',
        text: 'The insurer denies asserting an undisclosed household member regularly drove the vehicle. Start by requesting the exact statement they rely on (application question/answer, recorded statement). Then build your response around verifiable facts: who resides at the address, who has regular access to the vehicle, and what documents support that (license address, proof of residence, vehicle access/usage patterns). If the insurer’s conclusion relies on assumptions, force them to specify the evidence and the exact definition used for “household member” or “regular driver” under the policy.',
      },
    ],
    faqs: [
      { q: 'What is the first document to request?', a: 'The full application page(s) containing the disputed question/answer, plus the policy/endorsement language cited for denial.' },
      { q: 'Should I argue that I made an honest mistake?', a: 'Focus on proving the true fact with documents and forcing the insurer to cite the exact policy language and effective dates. Intent arguments rarely move the decision by themselves.' },
      { q: 'What if the insurer used a recorded statement incorrectly?', a: 'Request the recording or transcript and correct the record in writing with a clear timeline and exhibits.' },
      { q: 'Can misrepresentation denials be reversed?', a: 'Sometimes, especially when the insurer relied on an incorrect fact, wrong date, or incomplete documentation. The appeal is strongest when it is narrow and evidence-backed.' },
      { q: 'What if the denial letter is vague?', a: 'Request specificity in writing: the exact statement alleged to be false, where it appears, and the policy language relied on.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-california/misrepresentation-or-concealment', label: 'California misrepresentation denials' },
      { path: '/auto-insurance-claims-denied-pennsylvania/misrepresentation-or-concealment', label: 'Pennsylvania misrepresentation denials' },
      { path: '/auto-insurance-claims-denied-ohio/misrepresentation-or-concealment', label: 'Ohio misrepresentation denials' },
      { path: '/auto-insurance-claims-denied-virginia/misrepresentation-or-concealment', label: 'Virginia misrepresentation denials' },
    ],
  },
  {
    slug: 'auto-claim-denied-non-covered-use',
    title: 'Auto Insurance Claim Denied for “Non-Covered Use” — What to Check',
    description: 'How non-covered use denials happen and how to document the actual purpose and use of the vehicle at the time of loss.',
    canonicalPath: '/guides/auto-claim-denied-non-covered-use',
    categories: ['auto', 'paperwork'],
    claimTypes: ['auto'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Request the policy definition used (business use, delivery, rideshare, excluded activities), then document what you were actually doing with receipts, trip records, and statements that match the definition.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto'] }),
      {
        id: 'why-it-happens',
        heading: 'Why “non-covered use” denials happen (definitions drive everything)',
        paragraphs: [
          'Non-covered use denials typically happen when the insurer believes the vehicle was being used in a way that is excluded or requires different coverage. Common triggers include delivery/rideshare activity, commercial use, racing, carrying property for a fee, or use inconsistent with the policy’s classification.',
          'These disputes are definition-driven. The insurer may label the activity “business use” based on a small data point (a delivery bag in the photo, a statement like “I was working,” an app record). Your appeal strategy is to obtain the exact definition and exclusion language relied on, then prove what the vehicle was actually used for at the time of loss with dated records.',
        ],
      },
      {
        id: 'what-to-request',
        heading: 'What to request before you appeal',
        checklist: [
          'The exact policy definition and exclusion relied on (quote it in your appeal).',
          'Any endorsements or policy pages that address rideshare/delivery/commercial use.',
          'The evidence the insurer used to classify the trip or activity (statements, app data, photos).',
          'Claim notes that explain how the insurer reached the “non-covered use” conclusion.',
        ],
      },
      {
        id: 'prove-actual-use',
        heading: 'How to prove actual use at the time of loss (build a clean fact record)',
        paragraphs: [
          'Your goal is to answer one question: what was the vehicle being used for at the time of loss under the policy’s definition? The best evidence is time-stamped and objective: trip logs, receipts, app status logs (online/offline), employer schedules, and a short timeline.',
          'Do not rely on a single statement like “I wasn’t working.” Match your evidence to the definition. If the policy excludes “delivery for a fee,” show your app status and records for that time period. If it excludes “commercial use,” clarify whether the trip was personal and prove it with context and records.',
        ],
        bullets: [
          'Receipts that place you on a personal errand (time-stamped) near the loss time.',
          'Rideshare/delivery app screenshots showing offline status and no active order/ride.',
          'Work schedule or employer letter confirming you were off-duty (if applicable).',
          'A short statement that sticks to facts and dates, not conclusions.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials',
        bullets: [
          'Appealing without quoting the exact definition/exclusion relied on.',
          'Not requesting the evidence used to classify the use (you end up shadowboxing).',
          'Submitting only a narrative instead of time-stamped trip/app/receipt records.',
          'Admitting uncertainty (“maybe I was working”) instead of using a verified timeline.',
          'Sending unrelated records that do not answer what the vehicle was doing at the loss time.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: delivery-app allegation based on a vague statement',
        text: 'The adjuster notes you said you were “out delivering” earlier that day and denies the entire claim as non-covered use. Your appeal should request the recorded statement and clarify the timeline: when you were working and when you stopped. Attach app screenshots showing you were offline at the loss time, plus receipts that show a personal errand at the time of loss. Quote the policy’s definition/exclusion and explain, in one paragraph, how your evidence places the vehicle outside the excluded activity at the moment of loss.',
      },
      {
        title: 'Scenario 2: business-use label triggered by a cargo item in the vehicle',
        text: 'The insurer sees tools/equipment in photos and assumes commercial use, denying coverage. A high-intent appeal requests the exact exclusion language and then builds proof of the trip purpose. Attach a short timeline, the destination reason (receipt/appointment), and a factual explanation that the cargo does not define the use. The objective is to shift the decision from assumptions (“tools = business use”) back to the policy definition of use on the loss date and time.',
      },
    ],
    faqs: [
      { q: 'What is the most important thing to request?', a: 'The exact definition/exclusion relied on, plus the evidence the insurer used to classify the trip or activity.' },
      { q: 'Is rideshare/delivery always excluded?', a: 'Not always. Some policies require a specific endorsement or apply exclusions depending on status (online/offline). The controlling answer is in your policy language.' },
      { q: 'What evidence helps most?', a: 'Time-stamped records: app status logs, receipts, trip records, and a clear timeline that matches the policy definition.' },
      { q: 'Should I include long explanations?', a: 'Keep explanations short and fact-based. Put the weight on exhibits that prove what the vehicle was doing at the loss time.' },
      { q: 'What if the insurer relies on an inaccurate statement?', a: 'Request the recording/transcript and correct the timeline in writing with exhibits.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-new-york/non-covered-use', label: 'New York non-covered use denials' },
      { path: '/auto-insurance-claims-denied-georgia/non-covered-use', label: 'Georgia non-covered use denials' },
      { path: '/auto-insurance-claims-denied-north-carolina/non-covered-use', label: 'North Carolina non-covered use denials' },
    ],
  },
  {
    slug: 'auto-claim-denied-failure-to-cooperate',
    title: 'Auto Claim Denied for “Failure to Cooperate” — How to Cure It',
    description: 'What insurers mean by “cooperation” and how to fix missing statements, documents, or inspections without hurting your case.',
    canonicalPath: '/guides/auto-claim-denied-failure-to-cooperate',
    categories: ['auto', 'paperwork', 'appeals'],
    claimTypes: ['auto'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Ask what specific cooperation item is missing, provide it in writing (or schedule it), and request written confirmation that the claim is back under review.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto'] }),
      {
        id: 'what-it-means',
        heading: 'What “failure to cooperate” usually means in auto claims',
        paragraphs: [
          'A cooperation denial typically means the insurer believes it asked for something necessary to investigate coverage or damages and did not receive it by the time it made a decision. These denials are often avoidable because the “missing item” is usually specific: a statement, photos, a vehicle inspection, a repair authorization, medical bills (for injury claims), or other records.',
          'The quickest way to fix cooperation denials is to turn the insurer’s requests into a written checklist, satisfy each item with a labeled exhibit, and then ask for written confirmation that the claim is back under review. Your appeal can be short if your compliance is documented.',
        ],
      },
      {
        id: 'turn-into-checklist',
        heading: 'Step-by-step: turn “cooperate” into an itemized list you can complete',
        steps: [
          'Ask the insurer to list every missing cooperation item in writing (one line per item).',
          'Confirm deadlines and scheduling requirements (inspection date/time, statement format, upload limits).',
          'Complete the easiest items first (photos, receipts, repair estimate, police report) and submit them with labels.',
          'Schedule any time-sensitive items (recorded statement, vehicle inspection) and keep confirmation emails.',
          'Send a short cover note: “Items 1–6 completed; please confirm nothing else is outstanding and the claim is back under review.”',
        ],
      },
      {
        id: 'how-to-comply-safely',
        heading: 'How to comply without creating new problems',
        paragraphs: [
          'Cooperation does not mean improvising answers. It means providing requested documents and being available for reasonable investigation steps. If you do not know an answer, stick to verifiable facts and use your timeline. If a request is unclear, ask for clarification in writing rather than guessing.',
          'When you submit documents, label them and explain what request they satisfy. The goal is to make it easy for an adjuster to check the box and move the claim forward.',
        ],
        checklist: [
          'Use written follow-up for every phone call: what was requested, by when, and how you will submit.',
          'Keep a single “submission log” with date/time, method, and what was sent.',
          'Do not submit original documents unless requested; submit copies/scans and keep originals.',
          'If the insurer asks for a statement, keep it consistent with objective records (report, photos, receipts).',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials',
        bullets: [
          'Ignoring requests because they feel repetitive or because you already “told them.”',
          'Only complying verbally and never sending written proof of compliance.',
          'Submitting documents without labels, forcing the adjuster to guess what each file is.',
          'Missing scheduling steps (inspection/statement) without proposing alternative dates in writing.',
          'Not asking the insurer to confirm what is still outstanding after you submit items.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: denial after a missed recorded statement request',
        text: 'The insurer denies stating you failed to cooperate because you did not complete a recorded statement. Your response should ask for the date/time(s) they attempted to schedule and the written request they sent. Then propose specific alternative dates in writing and confirm the method (phone/virtual). After completing the statement, send a follow-up email summarizing that the requested step is completed and asking for written confirmation that the claim is back under review.',
      },
      {
        title: 'Scenario 2: vehicle inspection request missed because the car was repaired',
        text: 'The insurer denies stating it could not inspect the vehicle because repairs were completed. Your appeal should focus on what inspection substitutes exist: pre-repair photos, shop photos, repair estimates, parts invoices, and any tow/impound records. Request the insurer’s claim notes and ask what specific inspection issue remains. Then provide a labeled packet that reconstructs damage and timing and request reconsideration based on the alternative documentation.',
      },
    ],
    faqs: [
      { q: 'What is the most important first step?', a: 'Get a written list of what the insurer says is missing so you can respond item-by-item with labeled proof.' },
      { q: 'Should I rely on phone calls to fix cooperation issues?', a: 'Use calls to schedule, but always follow up in writing so you have proof of what was requested and what you provided.' },
      { q: 'What if the insurer asks for something unclear?', a: 'Ask for clarification in writing and propose what you can provide. Avoid guessing.' },
      { q: 'Can a cooperation denial be reversed?', a: 'Often, yes—when you can prove the missing item is now completed and the insurer can still investigate.' },
      { q: 'What should my appeal request?', a: 'A written confirmation that the claim is back under review and a written list of any remaining outstanding items.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-california/failure-to-cooperate', label: 'California failure-to-cooperate denials' },
      { path: '/auto-insurance-claims-denied-illinois/failure-to-cooperate', label: 'Illinois failure-to-cooperate denials' },
      { path: '/auto-insurance-claims-denied-pennsylvania/failure-to-cooperate', label: 'Pennsylvania failure-to-cooperate denials' },
    ],
  },
  {
    slug: 'auto-claim-denied-disputed-liability',
    title: 'Auto Insurance Claim Denied Due to Disputed Liability — What to Do',
    description: 'How to respond when fault is disputed and what evidence actually helps: reports, photos, witnesses, and timelines.',
    canonicalPath: '/guides/auto-claim-denied-disputed-liability',
    categories: ['auto', 'appeals'],
    claimTypes: ['auto'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Build a clean evidence package: police report, scene photos, witness info, damage photos, and a one-page timeline that supports your version of events.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto'] }),
      {
        id: 'how-liability-is-decided',
        heading: 'How insurers decide liability (so you can target the right proof)',
        paragraphs: [
          'Liability disputes are usually not about how unfair the situation feels—they are about what can be proven. Insurers typically build a liability position from the police report, statements from drivers, damage patterns, roadway context, and any video or witness accounts. If the evidence is ambiguous, the insurer may deny or reduce payment because it cannot confidently assign fault within its own standards.',
          'Your job is to reduce ambiguity. A high-intent appeal organizes facts in a way that makes one version of events more consistent with objective evidence than the other.',
        ],
      },
      {
        id: 'evidence-that-moves',
        heading: 'Evidence that actually moves liability disputes (and why)',
        paragraphs: [
          'The most persuasive evidence either (a) fixes the timeline, (b) fixes vehicle positioning and point of impact, or (c) provides an independent viewpoint. Photos are most useful when they show angles, lane markers, signage, and the full scene—not just close-ups of dents.',
        ],
        checklist: [
          'Police crash report and diagram (and any corrections/amendments).',
          'Scene photos showing lanes, signage, skid marks/debris, and final resting positions.',
          'Damage photos showing point of impact and direction of force (both vehicles).',
          'Witness statements with contact information and a short “what they saw” summary.',
          'Dashcam or nearby video (request quickly; footage is often overwritten).',
          'Repair estimates that support impact direction and severity.',
        ],
      },
      {
        id: 'submission',
        heading: 'Step-by-step: build a liability appeal packet',
        steps: [
          'Request the insurer’s liability rationale in writing: what facts they accepted, what facts they dispute, and what evidence they relied on.',
          'Create a one-page timeline and a one-page “scene narrative” that matches your exhibits (photos/report/witness).',
          'Organize exhibits in the same order as the insurer’s rationale and label them clearly.',
          'Submit and ask: “What additional fact would change your liability decision?”',
          'If evidence-based, request supervisor review and confirm the reviewer level in writing.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes that lead to repeat denials',
        bullets: [
          'Submitting only your opinion without objective evidence that fixes the timeline or point of impact.',
          'Sending many photos without labeling what each photo proves.',
          'Not requesting the insurer’s written liability rationale (you respond to the wrong dispute).',
          'Failing to obtain video quickly (dashcam/business cameras are often overwritten).',
          'Not asking what fact would change the decision after you submit your packet.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1: intersection dispute with conflicting statements',
        text: 'The insurer denies because the other driver claims you ran a red light. Your appeal packet should focus on independent proof: the police report narrative/diagram, any intersection camera or nearby business footage, and witness statements. Use a timeline that includes the time of day and any environmental conditions. Label exhibits so the reviewer can verify quickly: Exhibit A (report), Exhibit B (scene photos), Exhibit C (witness statement), Exhibit D (video). End by requesting a written explanation of what specific fact remains disputed after considering your exhibits.',
      },
      {
        title: 'Scenario 2: rear-end collision with a “sudden stop” defense',
        text: 'The insurer disputes liability arguing you stopped suddenly. A high-intent response focuses on road context and damage consistency: photos showing traffic conditions, lane markings, and distances, plus damage photos that show typical rear-impact patterns. If you have dashcam footage, it can resolve the dispute immediately. Your appeal should avoid arguments like “they were following too close” unless tied to evidence; instead, present the timeline and objective documentation that shows the sequence of events and impact mechanics.',
      },
    ],
    faqs: [
      { q: 'What should I ask the insurer for first?', a: 'A written liability rationale: what facts they accept, what they dispute, and what evidence they relied on.' },
      { q: 'Is the police report enough?', a: 'Sometimes, but not always. Reports can be incomplete or neutral. Strong packets add photos, witness statements, and video when available.' },
      { q: 'What is the fastest evidence to collect?', a: 'Video (dashcam or nearby cameras) and witness contact info—both are time-sensitive.' },
      { q: 'How should I organize my submission?', a: 'Mirror the insurer’s rationale order and label exhibits so each disputed point has a matching proof item.' },
      { q: 'Can liability denials be reversed?', a: 'Yes, when you reduce ambiguity with better evidence or correct an incorrect fact in the insurer’s file.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-michigan/disputed-liability', label: 'Michigan disputed liability denials' },
      { path: '/auto-insurance-claims-denied-ohio/disputed-liability', label: 'Ohio disputed liability denials' },
      { path: '/auto-insurance-claims-denied-new-jersey/disputed-liability', label: 'New Jersey disputed liability denials' },
      { path: '/auto-insurance-claims-denied-north-carolina/disputed-liability', label: 'North Carolina disputed liability denials' },
    ],
  },
  {
    slug: 'when-to-consider-small-claims-court-for-insurance',
    title: 'Can You Take an Insurance Company to Small Claims Court?',
    description: 'How to think about small claims court for insurance disputes, what documentation you need, and what to avoid before you file.',
    canonicalPath: '/guides/when-to-consider-small-claims-court-for-insurance',
    categories: ['disputes', 'rights'],
    claimTypes: ['auto', 'health'],
    updatedAt: d('2026-04-17'),
    quickAnswer:
      'Consider small claims only after you have a clear written denial, a complete paper trail, and you understand what the policy promises. Start with a clean timeline and evidence package before escalating.',
    sections: [
      ...buildAuthorityBaseSections({ claimTypes: ['auto', 'health'] }),
      {
        id: 'when-it-makes-sense',
        heading: 'When small claims court can make sense (and when it usually does not)',
        paragraphs: [
          'Small claims court is a procedural tool, not a guaranteed remedy. It can make sense when the dispute is relatively simple, the dollar amount is within your state’s small claims limit, and your proof is mostly documentary: a written denial, clear policy/plan language, and evidence that the insurer did not follow that language.',
          'It usually does not make sense when the dispute depends on expert testimony, complex medical necessity standards, complicated liability allocation, or large damages that exceed small claims limits. In those cases, the better first step is often to strengthen your written record, complete appeal steps, and use regulator/consumer complaint options for process issues.',
          'Rules vary by state. The goal of this guide is to help you build a decision-ready file and avoid avoidable mistakes—not to replace state-specific legal guidance.',
        ],
      },
      {
        id: 'prep-file',
        heading: 'Build your “court-ready” file before you file',
        paragraphs: [
          'Whether you ever file or not, the process of building a court-ready file improves your position. Insurers are more likely to reconsider when your dispute is organized and verifiable. The same structure also makes any complaint or escalation easier.',
        ],
        checklist: [
          'The written denial letter/EOB and any follow-up denial decisions.',
          'The exact policy/plan pages you rely on (including definitions, exclusions, endorsements).',
          'A one-page timeline (dates → events → proof) and a labeled exhibit list.',
          'Your appeal submissions and proof of delivery (portal/fax/certified mail).',
          'Claim notes or written responses from the insurer showing what facts/criteria drove the denial.',
        ],
      },
      {
        id: 'alternatives',
        heading: 'Escalation alternatives to try first (often faster than court)',
        bullets: [
          'Ask for supervisor review and a written list of what would change the decision.',
          'If health: complete internal appeals and use external review when available for eligible disputes.',
          'Use state consumer/regulator complaint options for process failures (missing notices, unclear reasons, no response).',
          'If the dispute is factual, request the specific evidence the insurer relied on and correct the record with exhibits.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Mistakes that can hurt you',
        bullets: [
          'Filing without a complete paper trail (denial + contract language + evidence).',
          'Ignoring appeal steps or deadlines that preserve your rights and create the written record.',
          'Assuming a judge will decide based on fairness rather than contract terms and proof.',
          'Filing a claim that exceeds the court’s limit or depends on complex expert testimony.',
          'Not documenting your attempts to resolve the issue before escalating.',
        ],
      },
    ],
    examples: [
      {
        title: 'Scenario 1 (auto): a clear coverage dispute with a paper trail',
        text: 'You have a written denial based on an exclusion you believe does not apply. You can point to the exact policy definition and attach a small set of exhibits that show what happened at the loss time. This kind of dispute is closer to a “document interpretation + proof” issue than a technical reconstruction issue, which is more compatible with a small claims format. Your preparation focus is a clean exhibit list, the exact policy pages, and proof you attempted appeal resolution first.',
      },
      {
        title: 'Scenario 2 (health): an administrative denial that can be fixed without court',
        text: 'A claim is denied due to coding/documentation or timely filing issues. Before thinking about court, you can often resolve these by obtaining the denial code, having the provider correct and resubmit the claim, and documenting that submission was timely. This is a strong example of why “court” is often not the first step: the practical path is a corrected administrative record plus written reconsideration.',
      },
    ],
    faqs: [
      { q: 'What should I do before filing?', a: 'Build a clean file: denial, contract language, evidence, timeline, and proof of your appeal submissions. Then compare the dispute size/complexity to your state’s small claims limits and procedures.' },
      { q: 'Does small claims force an insurer to pay?', a: 'No. It is a process for resolving disputes. Outcomes depend on your proof, the contract language, and the court’s rules.' },
      { q: 'What if my dispute is very technical?', a: 'Technical disputes can be difficult in small claims. Focus first on strengthening the written record and using appropriate escalation channels.' },
      { q: 'Is this legal advice?', a: 'No. This is educational information about building a dispute record and evaluating escalation options. Rules vary by state.' },
      { q: 'Should I skip the appeal and go straight to small claims?', a: 'Usually no. Appeals and documented requests often create the paper trail you need, and they can resolve the issue faster than filing.' },
    ],
    relatedStateLinks: [
      { path: '/auto-insurance-claims-denied-texas', label: 'Texas auto claim denials' },
      { path: '/auto-insurance-claims-denied-california', label: 'California auto claim denials' },
      { path: '/health-insurance-claims-denied-florida', label: 'Florida health claim denials' },
    ],
  },
]

const bySlug = new Map(GUIDES.map((g) => [g.slug, g]))

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug)

export const FEATURED_GUIDE_SLUGS = [
  'what-to-do-after-a-claim-denial',
  'how-to-write-an-insurance-appeal-letter',
  'how-to-read-an-eob-or-denial-letter',
  'appeal-deadlines-and-timelines',
  'appeal-documentation-checklist',
  'file-a-complaint-with-your-state-insurance-department',
]

export const getGuideBySlug = (slug) => {
  const s = String(slug || '').trim()
  return bySlug.get(s) || null
}

export const getGuideUrlPath = (guide) => {
  if (!guide) return null
  return guide.canonicalPath
}
