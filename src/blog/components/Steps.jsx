const Steps = ({ title, items }) => {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section>
      <h2>{title || 'Step-by-Step: What To Do Next'}</h2>
      <ol className="wcd-steps">
        {items.map((t, idx) => (
          <li key={idx}>{t}</li>
        ))}
      </ol>
    </section>
  )
}

export default Steps

