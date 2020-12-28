import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PortfolioItem from '../components/portfolio-item'

const PortfolioItemTemplate = ({ data }) => {
  const {
    PortfolioItem: { frontmatter }
  } = data

  return (
    <Layout positive>
      <SEO title={frontmatter.title} description={frontmatter.text} />
      <PortfolioItem
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
      </PortfolioItem>
    </Layout>
  )
}

export default PortfolioItemTemplate

export const query = graphql`
  query($slug: String!) {
    PortfolioItem: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        client
        content {
          childImageSharp {
            fluid(maxWidth: 980, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "yyyy")
        work
        image {
          childImageSharp {
            fluid(maxWidth: 480, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        text
        title
      }
    }
  }
`
