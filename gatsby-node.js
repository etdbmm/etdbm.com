const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "project-item" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const data = result.data.allMarkdownRemark.edges
    data.forEach(({ node }) => {
      const slug = node.fields.slug
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/portfolio-item.js`),
        context: {
          slug
        }
      })
    })
  })
}
