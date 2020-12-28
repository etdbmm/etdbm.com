import { graphql, useStaticQuery } from 'gatsby'

export default function useUX() {
  const {
    projects: { edges }
  } = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          frontmatter: { key: { eq: "project-item" }, role: { eq: "ux" } }
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
                    ...GatsbyImageSharpFluid_withWebp
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
