import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectList from '../components/project-list'
import Profile from '../components/profile'

import useBranding from '../hooks/use-branding'
import useGraphicDesign from '../hooks/use-graphic-design'
import useIllustration from '../hooks/use-illustration'
import useUX from '../hooks/use-ux'
import useProfile from '../hooks/use-profile'

const IndexPage = () => (
  <Layout>
    <SEO />
    <ProjectList
      brandingData={useBranding()}
      graphicDesignData={useGraphicDesign()}
      illustrationData={useIllustration()}
      uxData={useUX()}
    />
    <Profile
      image={useProfile().image}
      title={useProfile().title}
      subtitle={useProfile().subtitle}
      text={useProfile().text}
      tools={useProfile().tools}
    />
  </Layout>
)

export default IndexPage
