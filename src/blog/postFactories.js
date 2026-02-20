const buildCommonAutoDenialReasons = () => ([
  {
    title: 'No coverage at the time of loss',
    description: 'The insurer says the policy was not active, the effective date did not cover the accident time, the vehicle was not listed, or the driver was not covered under the contract in force. This is often a date-and-document dispute, so your first goal is to obtain the declarations page, endorsements, cancellation notices, and the claim file timeline the insurer used.',
  },
  {
    title: 'Policy lapse, cancellation, or nonrenewal',
    description: 'The carrier argues the policy lapsed due to nonpayment, was cancelled, or was not renewed before the loss. Many denials come down to notice details, payment timing, and what the insurer’s ledger shows. A strong response includes proof of payment, copies of notices, and a clear chronology that reconciles dates with the denial letter.',
  },
  {
    title: 'Late notice or missed reporting requirements',
    description: 'The insurer claims you reported the incident too late or failed to provide required information promptly. Your job is to explain the delay briefly, then show the facts can still be verified using dated records such as police reports, photos, repair estimates, and witness statements. Ask the insurer to identify exactly what information is still missing.',
  },
  {
    title: 'Excluded driver or unlisted household driver',
    description: 'The denial cites a driver exclusion or argues a household driver was not disclosed or listed properly. Request the exclusion endorsement, effective dates, and the signed documents relied on. If the facts are different, provide a short written statement and any supporting records that clarify who drove, why, and whether any endorsement modifies the exclusion.',
  },
  {
    title: 'Non-covered use (business, delivery, rideshare)',
    description: 'The insurer says the vehicle was being used in a way your personal policy excludes, such as delivery, rideshare, or business use. The most productive path is to compare the alleged use to the exact exclusion language and your endorsements. Provide receipts, app logs, or work records that confirm what the vehicle was being used for at the time.',
  },
  {
    title: 'Failure to cooperate',
    description: 'The carrier claims you did not provide a statement, documents, photos, or access needed to adjust the claim. Ask for a written checklist of what is still outstanding and propose dates to complete the remaining items. A short “we will cooperate” letter with a list of documents you are providing often moves the claim back into active review.',
  },
  {
    title: 'Disputed liability or fault',
    description: 'The insurer disputes who caused the accident or how the damage occurred and refuses payment or delays resolution. Focus on objective evidence: photos, dashcam footage, witness contact info, and repair estimates that match the described mechanism of impact. Ask the adjuster what specific fact, if proven, would change the liability decision.',
  },
])

const buildCommonHealthDenialReasons = () => ([
  {
    title: 'Prior authorization missing',
    description: 'The plan says approval was required before the service, even if the provider believed the service was covered. A strong appeal requests the plan’s authorization rule, any call logs or portal records, and a provider note on why the service was needed. If the situation was urgent, clarify timing and access issues with dated documentation.',
  },
  {
    title: 'Not medically necessary',
    description: 'A utilization review applies plan criteria and concludes the service does not meet the plan’s definition, thresholds, or prerequisites. Ask for the exact medical policy used (title, version, date) and respond point-by-point with a concise provider letter plus only the chart excerpts that support each criterion.',
  },
  {
    title: 'Out-of-network provider',
    description: 'The plan processes the claim at a lower rate or denies it because the provider is out of network and no exception is applied. Appeals often succeed when you document network access problems, referral attempts, or emergency circumstances. Save directory screenshots and records showing you attempted to use in-network care.',
  },
  {
    title: 'Coding or documentation error',
    description: 'Incorrect CPT/ICD codes, missing notes, or mismatched documentation lead to denial until corrected. Many of these are solved by a corrected claim submission rather than a full appeal. Ask the provider to resubmit with the corrected codes and supporting documentation and request confirmation of reprocessing.',
  },
  {
    title: 'Experimental or investigational',
    description: 'The plan categorizes the treatment as not sufficiently proven under its medical policy and applies evidence thresholds. Ask for the plan’s evidence criteria and any guidelines it relies on. Provide a provider letter that ties your case to the criteria and includes a short list of relevant studies or guidelines, not a large packet of unrelated articles.',
  },
  {
    title: 'Benefit or service excluded',
    description: 'The plan cites a contract exclusion. The appeal usually focuses on definitions, exceptions, and whether the exclusion truly applies to the billed service. Ask the plan to cite the exact contract language and provide a written explanation of how it applies to your claim, then respond with targeted documentation and any applicable exceptions.',
  },
  {
    title: 'Timely filing / claim submission issues',
    description: 'The plan says the claim was submitted outside allowed timeframes or with incomplete information. If your provider submitted on time, request proof of submission and resubmit with the correct information. If you are appealing, keep the focus on dates, proof of earlier submissions, and the plan’s written deadline language.',
  },
  {
    title: 'Coordination of benefits (COB)',
    description: 'The claim is held or denied until the plan confirms whether another policy is primary or secondary. Provide coverage details, effective dates, and policy numbers for all plans and ask the insurer to update COB records. Many claims release quickly once COB information is corrected and confirmed in writing.',
  },
])

const buildSampleAppealStructure = ({ stateLabel, topicLabel }) => ([
  `Header: Your name, claim number, policy/plan number, dates, and contact details`,
  `Subject line: “Appeal of denied ${topicLabel} claim”`,
  `Summary (2–4 sentences): what happened, what was denied, and what you are requesting`,
  `Denial citation: quote the denial letter language and include the letter date`,
  `Response section: one heading per denial reason, in the same order as the letter`,
  `Evidence index: Exhibit A [photos], Exhibit B [records/estimates], Exhibit C [statements/notes]`,
  `Request: re-open/reprocess and provide a written decision for ${stateLabel}`,
  `Closing: signature, preferred contact method, and a request for confirmation of receipt`,
])

const buildFaq = ({ stateLabel, topic }) => {
  const topicLabel = topic === 'health' ? 'health' : 'auto'
  return [
    {
      question: `What should I do first after a ${stateLabel} ${topicLabel} denial?`,
      answer: 'Start by getting the denial in writing and identifying the exact reason cited. Then request the policy or plan language referenced in the letter and gather only the records that directly address that reason. A short, organized packet that matches the insurer’s headings is easier to review than a long narrative.',
    },
    {
      question: 'Should I call or write?',
      answer: 'Calls can be useful for clarifying what is missing, but your appeal and evidence should be submitted in writing so there is a clear record of what you provided and when. If you call, follow up with a short email or letter summarizing what was said and asking the insurer to confirm next steps.',
    },
    {
      question: 'What if the insurer says they need more documents?',
      answer: 'Ask for a specific checklist and the deadline for submission. Provide what is requested, then add only a small set of high-impact documents that directly answer the denial reason. Label each attachment and reference it in your letter so the reviewer can verify facts quickly.',
    },
    {
      question: 'How long does an appeal take?',
      answer: 'Timelines vary by policy, plan type, and the reason for denial. Use the deadlines in your denial letter and your contract documents as the source of truth, and document the date you submitted your appeal. If the insurer does not respond, request a written status update and a target decision date.',
    },
    {
      question: 'What if I missed a deadline?',
      answer: 'Respond anyway and do it quickly. Briefly explain the reason for the delay and ask whether the claim can be reopened, reconsidered, or resubmitted under your contract. Even when strict deadlines apply, some issues can still be resolved through reprocessing or correction paths.',
    },
    {
      question: 'Do I need a lawyer?',
      answer: 'This site is educational and does not provide legal advice. Many disputes are resolved by a clean written appeal with the right documents. If the claim value is high, injuries are significant, or the denial involves complex coverage issues, professional advice may be appropriate for your situation.',
    },
    {
      question: 'What evidence is most persuasive?',
      answer: 'The most persuasive evidence is the evidence that directly answers the denial reason. Dated records, photos, invoices or estimates, and concise statements from providers or witnesses are more effective than generalized arguments. When possible, create a short timeline that ties each document to a disputed date or fact.',
    },
    {
      question: 'Can I file a complaint with a regulator?',
      answer: 'In many situations you can file a consumer complaint about claim handling or communication. Keep the focus on documented facts: dates, letters, and what you submitted. Use the appropriate state agency resources for your state and keep a complete copy of your appeal packet and delivery confirmation.',
    },
  ]
}

const buildGuideBase = ({ stateSlug, stateLabel, type, slug, title, description, heroSummary }) => {
  const topic = type.includes('health') ? 'health' : 'auto'
  const topicLabel = topic === 'health' ? 'health insurance' : 'auto insurance'

  const stateHub = `/blog/${stateSlug}`
  const mainAuto = `/auto-insurance-claims-denied-${stateSlug}`
  const mainHealth = `/health-insurance-claims-denied-${stateSlug}`
  const siblingWhy = topic === 'health' ? `${stateHub}/why-health-claims-denied` : `${stateHub}/why-auto-claims-denied`
  const siblingHow = topic === 'health' ? `${stateHub}/how-appeal-health-claim` : `${stateHub}/how-appeal-auto-claim`
  const siblingCase = topic === 'health' ? `${stateHub}/case-health-success` : `${stateHub}/case-auto-success`
  const twoSiblings = [siblingWhy, siblingHow, siblingCase].filter((p) => p !== `${stateHub}/${slug}`)

  return {
    stateSlug,
    stateLabel,
    type,
    slug,
    path: `/blog/${stateSlug}/${slug}`,
    canonicalUrl: `https://whyclaimdenied.com/blog/${stateSlug}/${slug}`,
    title,
    description,
    metaTitle: `${title} | WhyClaimDenied`,
    metaDescription: description,
    heroSummary,
    takeaways: [
      'Treat the denial letter like a checklist: answer the exact reason cited, not the general situation. Reviewers approve faster when your headings match theirs.',
      'Request the policy or plan language and ask what documents were used to make the decision. Many “denials” are really “missing information” decisions dressed up as final.',
      'Build a clean packet: a short cover letter plus labeled exhibits beats a large dump of screenshots and unrelated records.',
      'Keep everything in writing and track dates in one place so you do not miss contract deadlines or lose submission proof.',
      `Use state-specific consumer resources in ${stateLabel} if communication breaks down and you cannot get a clear written explanation.`,
    ],
    stateMeaning: [
      `In ${stateLabel}, claim outcomes often change when you can point to a specific policy or plan provision and show exactly how your facts match it. That means your first goal is not to argue fairness. Your first goal is to obtain the insurer’s stated basis for denial and the documents it relied on so you can answer the decision the insurer actually made.`,
      `Many denials come from one missing requirement: a deadline, a form, a piece of documentation, or an exclusion the insurer believes applies. When you respond with a structured packet—timeline, point-by-point headings, and a small set of exhibits—you turn a vague denial into a concrete checklist the reviewer can verify.`,
      `State framing matters because your next step depends on the type of policy or plan and where the breakdown occurred. If the dispute is factual, focus on evidence. If the dispute is contractual, focus on policy language and endorsements. If the breakdown is communication, focus on written requests, documented follow-up, and consumer complaint options.`,
      `The highest-value habit is consistency: use the same claim number, the same subject line, and the same exhibit labels every time you communicate. That keeps your file organized and prevents an appeal reviewer from missing the one document that changes the decision.`,
    ],
    steps: [
      'Read the denial letter and highlight every sentence that states a reason for denial or lists a missing requirement. Those lines become your appeal headings.',
      `Request the policy or plan language cited in the denial and ask for the claim notes, review notes, or criteria that were applied in ${stateLabel}.`,
      'Build a one-page timeline with dates and sources: incident/service date, report date, letters, calls, portal submissions, and what was provided.',
      'Collect high-impact documents that directly answer the denial reason: dated records, photos, estimates, receipts, and short supporting statements.',
      'Draft a short appeal letter with numbered headings that mirror the denial reasons in the same order.',
      'Attach exhibits and label them clearly (Exhibit A, Exhibit B, Exhibit C). Reference each exhibit in the paragraph where it matters.',
      'Submit through the insurer or plan’s documented channel and save proof of delivery (portal confirmation, email receipt, or certified mail record).',
      'Follow up in writing if you do not receive confirmation of receipt and ask for a target decision date.',
      'If still denied, ask what specific evidence would change the decision and whether there is an additional review path under your contract.',
    ],
    insurerRequests: [
      'The full denial letter and the exact contract language relied on (policy provisions, endorsements, or plan sections)',
      'Any claim notes, adjuster notes, utilization review notes, or reviewer criteria applied to your file',
      'A written checklist of what documents or facts the insurer says are missing',
      'Copies of photos, statements, or reports the insurer used to reach the decision',
      'The insurer’s timeline: key dates it believes control coverage or eligibility',
      'Written confirmation of where and how appeals must be submitted, including any required form or portal path',
    ],
    commonDenialReasons: topic === 'health' ? buildCommonHealthDenialReasons().slice(0, 8) : buildCommonAutoDenialReasons().slice(0, 7),
    mistakes: [
      'Writing a long story without answering the insurer’s stated reason for denial in the same order the letter uses.',
      'Sending a large packet of documents with no exhibit labels, which makes it harder for a reviewer to verify the one key fact.',
      'Missing deadlines because dates are scattered across emails and portal screenshots instead of one timeline.',
      'Relying only on phone calls and failing to follow up in writing with what was requested and when it was provided.',
      'Skipping the step of requesting the exact policy, endorsement, or medical policy criteria used to make the decision.',
      'Using emotional language that does not address contract language or missing evidence.',
      'Assuming the first denial is final when the insurer may be waiting for one missing document or clarification.',
    ],
    timeline: [
      `Appeal and response timeframes differ by insurer, plan type, and contract language. In ${stateLabel}, the most reliable deadlines are the ones in your denial letter and your ${topicLabel} contract documents. Use those as your source of truth and write the due date at the top of your timeline.`,
      `If the denial is caused by missing information or a documentation issue, act quickly and request reprocessing after you provide the missing item. Many files move faster when the reviewer can check one missing document rather than re-evaluating the entire claim.`,
      `If a deadline is unclear, ask for clarification in writing and save the response. If you submit through a portal, keep the confirmation page or email receipt as proof of the submission date.`,
    ],
    sampleAppealStructure: buildSampleAppealStructure({ stateLabel, topicLabel }),
    faq: buildFaq({ stateLabel, topic }),
    relatedGuides: [],
    internalLinks: [
      stateHub,
      mainAuto,
      mainHealth,
      ...twoSiblings.slice(0, 2),
    ],
  }
}

const buildCaseBase = ({ stateSlug, stateLabel, type, slug, title, description, heroSummary }) => {
  const topic = type.includes('health') ? 'health' : 'auto'
  const topicLabel = topic === 'health' ? 'health' : 'auto'

  const base = buildGuideBase({
    stateSlug,
    stateLabel,
    type,
    slug,
    title,
    description,
    heroSummary,
  })

  base.takeaways = [
    'A short appeal that matches the denial letter headings is easier to review and approve than a long narrative.',
    'One strong exhibit that directly answers the denial reason can beat a large packet of weak or unrelated documents.',
    'A clean timeline makes it easy for a reviewer to verify what happened, what was submitted, and when.',
    `State-specific next steps in ${stateLabel} depend on the policy and denial letter; keep your response factual and document-driven.`,
  ]

  base.stateMeaning = [
    `This case example shows a realistic path: the denial did not change because someone “argued harder.” It changed because a missing document was provided and the response tied that document to the contract language the insurer cited in ${stateLabel}.`,
    `The key move was to shrink the dispute. Instead of debating everything, the appeal focused on the single fact that drove the denial and provided proof that a reviewer could verify quickly without guessing.`,
  ]

  base.steps = [
    'Identify the one sentence in the denial letter that drives the decision and copy it into your appeal as a heading.',
    'Request the exact policy or plan provision cited and ask for the claim notes or reviewer criteria that were applied.',
    'Collect the single strongest document that answers the stated reason and confirm it is dated and legible.',
    'Write a one-page appeal with headings that mirror the denial letter, in the same order.',
    'Attach the key exhibit, label it clearly, and reference it in the paragraph where it matters.',
    'Ask for reconsideration and request written confirmation of the updated outcome.',
    'Track dates and follow up in writing if you do not receive a response.',
  ]

  base.commonDenialReasons = (topic === 'health' ? buildCommonHealthDenialReasons() : buildCommonAutoDenialReasons()).slice(0, 6)

  base.mistakes = [
    'Responding with a long narrative instead of a point-by-point reply.',
    'Ignoring the claim file notes and focusing only on the denial summary.',
    'Submitting exhibits without labels or references in the appeal letter.',
    'Failing to keep proof of submission and delivery.',
    'Not asking what specific evidence would change the decision.',
  ]

  base.timeline = [
    `Case timelines depend on your denial letter and contract terms in ${stateLabel}. Use the denial letter as your primary deadline reference and keep proof of submission.`,
    'If reconsideration is requested after missing information, ask whether the claim can be reopened or resubmitted and what timeline applies for a written decision.',
  ]

  base.sampleAppealStructure = [
    'Heading: Appeal of Denial – [Claim/Member/Policy #]',
    `Section 1: Summary of what happened in ${stateLabel} (2–4 sentences)`,
    'Section 2: Denial reason quoted from the letter',
    'Section 3: Response with Exhibit references',
    'Section 4: Request for reprocessing/review and written decision',
    'Signature + contact info',
  ]

  base.faq = buildFaq({ stateLabel, topic })

  base.internalLinks = [
    `/blog/${stateSlug}`,
    `/blog/${stateSlug}/why-${topicLabel}-claims-denied`,
    `/blog/${stateSlug}/how-appeal-${topicLabel}-claim`,
    `/auto-insurance-claims-denied-${stateSlug}`,
    `/health-insurance-claims-denied-${stateSlug}`,
  ]

  return base
}

export const createWhyAutoDeniedPost = ({ stateSlug, stateLabel }) => {
  return buildGuideBase({
    stateSlug,
    stateLabel,
    type: 'auto',
    slug: 'why-auto-claims-denied',
    title: `Why Auto Insurance Claims Get Denied in ${stateLabel}`,
    description: `A practical, state-framed breakdown of common auto claim denial reasons in ${stateLabel}, what to request, and how to appeal effectively.`,
    heroSummary: `If you received a denial letter in ${stateLabel}, the fastest path forward is to identify the exact reason cited and respond with targeted documentation. This guide gives you a repeatable structure that insurers can review quickly.`,
  })
}

export const createHowAppealAutoPost = ({ stateSlug, stateLabel }) => {
  const post = buildGuideBase({
    stateSlug,
    stateLabel,
    type: 'auto',
    slug: 'how-appeal-auto-claim',
    title: `How to Appeal a Denied Auto Insurance Claim in ${stateLabel}`,
    description: `Step-by-step checklist for appealing a denied auto claim in ${stateLabel}: what to request, how to organize evidence, and how to write a clean appeal.`,
    heroSummary: `Most auto denials can be improved with a short, organized appeal that answers the denial reasons in order. Use this framework to submit a clean packet and avoid the most common mistakes.`,
  })

  post.takeaways = [
    'Ask for the exact policy provisions relied on and the claim file notes.',
    'Write your appeal to match the denial letter headings.',
    'Attach only high-impact evidence that answers the denial reason.',
    'Keep proof of delivery and track dates.',
    `Escalate communication problems using ${stateLabel} consumer resources when needed.`,
  ]

  post.steps = [
    'Request the denial reason in writing if you do not already have it.',
    'Ask for the policy provisions and any endorsements referenced.',
    'Request the claim file notes and a list of missing items.',
    'Draft a one-page timeline and identify the disputed facts.',
    'Collect exhibits and label them (A, B, C) with clear filenames.',
    'Write the appeal letter with headings that mirror the denial reasons.',
    'Submit via the insurer’s documented channel and keep confirmation.',
    'Follow up in writing and request a written decision.',
    'If still denied, ask what evidence would change the outcome and whether additional review options exist.',
  ]

  post.insurerRequests = [
    'Complete policy copy + declarations + endorsements',
    'Denial letter with cited provisions',
    'Claim file notes / adjuster notes',
    'All photos/estimates/records relied on by the carrier',
    'A written list of remaining information needed for reconsideration',
  ]

  post.timeline = [
    `Appeal deadlines vary by policy and insurer. In ${stateLabel}, treat the denial letter as your primary deadline reference and confirm any mailing/portal timestamps.`,
    'If the denial is based on missing documents, submit them quickly and request reprocessing in writing.',
    'If you are unsure which deadline applies, ask for clarification in writing and keep the response with your claim file.',
  ]

  return post
}

export const createCaseAutoSuccessPost = ({ stateSlug, stateLabel }) => {
  return buildCaseBase({
    stateSlug,
    stateLabel,
    type: 'case-auto',
    slug: 'case-auto-success',
    title: `${stateLabel} Auto Claim Appeal Success Story`,
    description: `A realistic case-style example showing how a structured appeal packet can overturn a denied auto claim in ${stateLabel}.`,
    heroSummary: `This case example illustrates how a denial can change when you provide the missing document the adjuster needed and frame it against the policy language. Use it as a template for organizing your own appeal.`,
  })
}

export const createWhyHealthDeniedPost = ({ stateSlug, stateLabel }) => {
  return buildGuideBase({
    stateSlug,
    stateLabel,
    type: 'health',
    slug: 'why-health-claims-denied',
    title: `Why Health Insurance Claims Get Denied in ${stateLabel}`,
    description: `Common health denial patterns in ${stateLabel} and a structured approach to respond with criteria-based documentation.`,
    heroSummary: `Health denials often hinge on plan criteria: prior authorization, medical necessity, network rules, or documentation. This guide shows how to ask for the criteria and respond point-by-point with the right records.`,
  })
}

export const createHowAppealHealthPost = ({ stateSlug, stateLabel }) => {
  const post = buildGuideBase({
    stateSlug,
    stateLabel,
    type: 'health',
    slug: 'how-appeal-health-claim',
    title: `How to Appeal a Denied Health Insurance Claim in ${stateLabel}`,
    description: `A structured appeal framework for denied health claims in ${stateLabel}: how to gather criteria, build provider support, and submit a clean packet.`,
    heroSummary: `Health appeals are strongest when they mirror the plan’s criteria. Use this structure to request the medical policy, obtain a targeted provider letter, and submit the minimum set of records needed to meet the criteria.`,
  })

  post.steps = [
    'Get the denial letter and identify whether the denial is clinical (medical necessity) or administrative (auth, network, coding).',
    'Request the exact medical policy/criteria used and the reviewer notes if available.',
    'Ask your provider for a short letter addressing criteria point-by-point.',
    'Attach only the chart excerpts that support each criterion (not the entire chart).',
    'Include any prior authorization attempts, referral notes, and network access evidence.',
    'Write a cover letter with headings that match the denial reason and criteria.',
    'Submit through the plan’s appeal channel and keep proof of delivery.',
    'Follow up in writing and request a written determination.',
  ]

  post.insurerRequests = [
    'Medical policy/criteria document and version/date',
    'Utilization review notes or summary',
    'Any missing documentation checklist',
    'Network access/referral requirements and exceptions',
    'Claim reprocessing instructions after corrections',
  ]

  post.timeline = [
    `Health appeal timelines vary by plan and denial type in ${stateLabel}. Use the denial letter and your plan documents as the definitive deadlines.`,
    'If the denial is due to missing documentation or coding, corrections can often be resubmitted faster than a full appeal.',
    'Ask for confirmation of receipt and a written determination date range.',
  ]

  return post
}

export const createCaseHealthSuccessPost = ({ stateSlug, stateLabel }) => {
  return buildCaseBase({
    stateSlug,
    stateLabel,
    type: 'case-health',
    slug: 'case-health-success',
    title: `${stateLabel} Health Claim Appeal Success Story`,
    description: `A realistic case-style example showing how a criteria-based appeal packet can overturn a health claim denial in ${stateLabel}.`,
    heroSummary: `This case example shows how targeting the plan’s criteria and attaching only the most relevant records can change an outcome. Use the structure as a blueprint for your own appeal packet.`,
  })
}
