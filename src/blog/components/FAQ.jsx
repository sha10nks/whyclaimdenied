const FAQ = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section>
      <h2>FAQ</h2>
      <div className="wcd-faq">
        {items.map((qa, idx) => (
          <div key={idx} className="wcd-faq-item">
            <h3 className="wcd-faq-q">{qa.question}</h3>
            <p className="wcd-faq-a">{qa.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ

