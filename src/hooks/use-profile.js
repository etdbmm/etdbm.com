import { graphql, useStaticQuery } from 'gatsby'

export default function useProfile() {
  const {
    profile: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      profile: markdownRemark(frontmatter: { key: { eq: "profile" } }) {
        frontmatter {
          image {
            childImageSharp {
              fluid(maxWidth: 470, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          title
          subtitle
          text
          tools {
            label
            image {
              childImageSharp {
                fixed(width: 50, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return frontmatter
}
