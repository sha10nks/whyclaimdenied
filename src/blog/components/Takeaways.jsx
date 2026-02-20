const Takeaways = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section className="wcd-card" aria-labelledby="key-takeaways">
      <h2 id="key-takeaways" className="wcd-card-title">Key Takeaways</h2>
      <ul className="wcd-tight-list">
        {items.map((t, idx) => (
          <li key={idx}>{t}</li>
        ))}
      </ul>
    </section>
  )
}

export default Takeaways

