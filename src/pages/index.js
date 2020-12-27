import React from 'react'

import Layout from '../components/layout'
import Projects from '../components/projects'
import Profile from '../components/profile'

import useBranding from '../hooks/use-branding'
import useGraphicDesign from '../hooks/use-graphic-design'
import usePackingDesign from '../hooks/use-packing-design'
import useUX from '../hooks/use-ux'
import useProfile from '../hooks/use-profile'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <h1>Hello World</h1>
    </div>
    <Projects
      brandingData={useBranding()}
      graphicDesignData={useGraphicDesign()}
      packingDesignData={usePackingDesign()}
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
