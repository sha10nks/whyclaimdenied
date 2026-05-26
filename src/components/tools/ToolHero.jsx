import { Lock, ShieldCheck } from 'lucide-react'
import { Link } from '../Link'

export default function ToolHero({
  title,
  description,
  primaryCta,
  secondaryCta,
  trust,
}) {
  const noteItems = Array.isArray(trust) && trust.length
    ? trust
      .map((t) => {
        if (typeof t === 'string') return t
        return String(t?.label || '').trim()
      })
      .filter(Boolean)
    : ['Educational only (not legal advice)', 'No login', 'Redact SSNs, bank info, and policy numbers']

  return (
    <section className="tool-hero" aria-label="Tool overview">
      <div className="tool-hero-surface">
        <div className="tool-hero-grid">
          <div className="tool-hero-copy">
            <div className="tool-hero-badges" aria-label="Tool highlights">
              <div className="tool-hero-badge">
                <Lock size={16} aria-hidden="true" />
                <span>Privacy-first</span>
              </div>
              <div className="tool-hero-badge">
                <span>No Log-In</span>
              </div>
              <div className="tool-hero-badge">
                <span>High seccuss rate</span>
              </div>
            </div>
            <h1 className="tool-hero-title">{title}</h1>
            <p className="tool-hero-desc">{description}</p>
            <div className="tool-hero-actions">
              {primaryCta ? (
                <Link className="tool-btn tool-btn-primary" to={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link className="tool-btn tool-btn-secondary" to={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
            <div className="tool-hero-note" role="note">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>{noteItems.join(' · ')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
