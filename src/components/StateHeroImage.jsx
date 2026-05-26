import { Helmet } from 'react-helmet-async'

const buildPaths = ({ stateSlug, domain }) => {
  const base = `/images/states/${stateSlug}/${domain}`
  return {
    src800: `${base}-800.webp`,
    src1600: `${base}-1600.webp`,
    srcSet: `${base}-800.webp 800w, ${base}-1600.webp 1600w`,
    sizes: '(max-width: 768px) 100vw, 100vw',
  }
}

const StateHeroImage = ({ stateSlug, domain, alt, preload = true }) => {
  const { src1600, srcSet, sizes } = buildPaths({ stateSlug, domain })

  return (
    <div className="state-hero-image-wrapper">
      {preload ? (
        <Helmet>
          <link rel="preload" as="image" href={src1600} imageSrcSet={srcSet} imageSizes={sizes} />
        </Helmet>
      ) : null}

      <picture>
        <source type="image/webp" srcSet={srcSet} sizes={sizes} />
        <img
          src={src1600}
          alt={alt}
          width="1600"
          height="900"
          loading="eager"
          decoding="async"
          className="state-hero-image"
        />
      </picture>
    </div>
  )
}

export default StateHeroImage
