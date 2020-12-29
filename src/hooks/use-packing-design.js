import { graphql, useStaticQuery } from 'gatsby'

export default function usePackingDesign() {
  const {
    projects: { edges }
  } = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          frontmatter: {
            key: { eq: "project-item" }
            role: { eq: "embalagem" }
          }
        }
        limit: 9
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 480, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              role
              title
              work
            }
          }
        }
      }
    }
  `)
  return edges
}
