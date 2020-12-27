import React from 'react'

import Layout from '../components/layout'
import Profile from '../components/profile'
import useProfile from '../hooks/use-profile'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <h1>Hello World</h1>
    </div>
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
