import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout positive>
    <SEO />
    <div className="container text-center space-y-12 pt-80 pb-20 md:py-48">
      <h1 className="text-4xl text-cyan-blue bg-white font-bold z-20">
        404: Página não encontrada
      </h1>
      <p>humm... parece que que você se perdeu</p>
    </div>
  </Layout>
)

export default NotFoundPage
