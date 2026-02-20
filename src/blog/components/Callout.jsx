const Callout = ({ title, children }) => {
  return (
    <aside className="wcd-callout">
      {title ? <div className="wcd-callout-title">{title}</div> : null}
      <div className="wcd-callout-body">{children}</div>
    </aside>
  )
}

export default Callout

