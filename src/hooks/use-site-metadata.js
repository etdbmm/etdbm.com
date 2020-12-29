import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
          behance
          instagram
        }
      }
    }
  `)
  return siteMetadata
}
