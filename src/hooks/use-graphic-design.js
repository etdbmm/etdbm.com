import { graphql, useStaticQuery } from 'gatsby'

export default function useGraphicDesign() {
  const {
    projects: { edges }
  } = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          frontmatter: {
            key: { eq: "project-item" }
            role: { eq: "design gráfico" }
          }
        }
        limit: 9
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              client
              content {
                childImageSharp {
                  fluid(maxWidth: 1040, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              date
              function
              image {
                childImageSharp {
                  fluid(maxWidth: 480, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              role
              text
              title
            }
          }
        }
      }
    }
  `)
  return edges
}
