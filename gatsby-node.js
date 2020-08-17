const path = require(`path`)

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions
  const queryResult = await graphql(`
    query {
      allSanityXyzzy(filter: {slug: {current: {ne: null}}}) {
          edges {
            node {
              template,
              message,
              slug {
                current
              }
            }
          }
      }
    }
  `)
  nodes = queryResult.data.allSanityXyzzy.edges
  nodes.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/templates/${node.template}.js`),
      context: {
        message: node.message,
      },
    })
  })
};