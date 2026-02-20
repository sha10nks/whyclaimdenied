const Checklist = ({ title, items }) => {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section className="wcd-card">
      {title ? <h2 className="wcd-card-title">{title}</h2> : null}
      <ul className="wcd-checklist">
        {items.map((t, idx) => (
          <li key={idx}>{t}</li>
        ))}
      </ul>
    </section>
  )
}

export default Checklist

