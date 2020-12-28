import React from 'react'
import { Helmet } from 'react-helmet'

import useSiteMetadata from '../hooks/use-site-metadata'

function SEO({ description, lang, meta, title }) {
  const data = useSiteMetadata()
  const metaTitle = (title && `${title} | ${data.title}`) || data.title
  const metaDescription = description || data.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt-BR`,
  meta: [],
  description: ``
}

export default SEO
