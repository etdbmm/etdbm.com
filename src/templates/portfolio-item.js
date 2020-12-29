import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectItem from '../components/project-item'

const ProjectItemTemplate = ({ data }) => {
  const {
    ProjectItem: { frontmatter }
  } = data

  return (
    <Layout positive>
      <SEO title={frontmatter.title} description={frontmatter.text} />
      <ProjectItem
        client={frontmatter.client}
        date={frontmatter.date}
        image={frontmatter.image}
        text={frontmatter.text}
        title={frontmatter.title}
        work={frontmatter.work}
      >
        {frontmatter.content.map((item, i) => (
          <Img fluid={item.childImageSharp.fluid} key={i} />
        ))}
      </ProjectItem>
    </Layout>
  )
}

export default ProjectItemTemplate

export const query = graphql`
  query($slug: String!) {
    ProjectItem: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        client
        content {
          childImageSharp {
            fluid(maxWidth: 980, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        date(formatString: "yyyy")
        work
        image {
          childImageSharp {
            fluid(maxWidth: 480, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        text
        title
      }
    }
  }
`
