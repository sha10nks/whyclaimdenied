import { ArrowRight, FilePenLine, FileSearch } from 'lucide-react'
import { Link } from '../Link'

const TOOL_CTA_CONFIG = {
  analyzer: {
    href: '/tools/denial-letter-analyzer',
    eyebrow: 'Best first step',
    headline: 'Insurance Claim Denied?',
    text: 'Upload or paste your denial letter to identify denial reasons, missing documents, deadlines, and next steps.',
    buttonLabel: 'Analyze My Denial',
    supportingText: 'Best for understanding why your claim was denied before you write or submit anything.',
    icon: FileSearch,
  },
  appeal: {
    href: '/tools/appeal-letter-generator',
    eyebrow: 'When you are ready to submit',
    headline: 'Ready to Appeal?',
    text: 'Generate a professional insurance appeal letter in minutes.',
    buttonLabel: 'Generate Appeal Letter',
    supportingText: 'Best for turning your denial facts into a clear insurer-facing appeal draft.',
    icon: FilePenLine,
  },
}

export function ToolCtaCard({
  tool = 'analyzer',
  priority = 'secondary',
  eyebrow,
  headline,
  text,
  buttonLabel,
  href,
  supportingText,
}) {
  const config = TOOL_CTA_CONFIG[tool] || TOOL_CTA_CONFIG.analyzer
  const Icon = config.icon

  return (
    <article className={`tool-cta-card tool-cta-card-${priority}`}>
      <div className="tool-cta-card-top">
        <div className="tool-cta-icon" aria-hidden="true">
          <Icon size={20} />
        </div>
        <div className="tool-cta-copy">
          <div className="tool-cta-eyebrow">{eyebrow || config.eyebrow}</div>
          <h3>{headline || config.headline}</h3>
          <p>{text || config.text}</p>
        </div>
      </div>
      <div className="tool-cta-footer">
        <Link className="tool-cta-button" to={href || config.href}>
          {buttonLabel || config.buttonLabel}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <p className="tool-cta-supporting">
          {supportingText || config.supportingText}
        </p>
      </div>
    </article>
  )
}

export default function ToolCtaSection({
  title = 'Next Step After Reading This Guide',
  intro = 'Use the tools below to move from understanding the denial to drafting a stronger appeal.',
  cards = [
    { tool: 'analyzer', priority: 'primary' },
    { tool: 'appeal', priority: 'secondary' },
  ],
  className = '',
}) {
  const sectionClassName = ['tool-cta-section', className].filter(Boolean).join(' ')

  return (
    <section className={sectionClassName} aria-label={title}>
      <div className="tool-cta-section-head">
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="tool-cta-grid">
        {cards.map((card, index) => (
          <ToolCtaCard
            key={`${card.tool || 'tool'}-${index}`}
            tool={card.tool}
            priority={card.priority}
            eyebrow={card.eyebrow}
            headline={card.headline}
            text={card.text}
            buttonLabel={card.buttonLabel}
            href={card.href}
            supportingText={card.supportingText}
          />
        ))}
      </div>
    </section>
  )
}
