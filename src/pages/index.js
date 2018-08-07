// Test
import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
    return (
      <li>{node.title}</li>
    )
}

const IndexPage = ({data}) => (
  <ul class="hallo">
    {data.allContentfulEntry.edges.map((edge) => <BlogPost node={edge.node} /> )}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulEntry (filter : {
      node_locale : {eq: "en-US"}
    })
    {
      edges {
        node {
          title
          content
          id
        }
      }
    }
  }
`
