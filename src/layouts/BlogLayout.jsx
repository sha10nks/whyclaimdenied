import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogLayout = ({ children }) => {
  const mainRef = useRef(null)

  useEffect(() => {
    if (import.meta.env && import.meta.env.DEV) {
      const el = mainRef.current
      if (!el || !el.classList.contains('container')) {
        // Soft guard in dev: surface if someone bypasses the container
        console.warn('[BlogLayout] Blog page rendered without .container – please wrap content in BlogLayout')
      }
    }
  }, [])

  return (
    <>
      <Header />
      <main ref={mainRef} className="container blog-container">
        <div className="postContent">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BlogLayout
