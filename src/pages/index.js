import React from "react"

export default ({ data }) => {
  console.log(data)
  return (
    <div style={{ color: `purple` }}>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title} - {node.frontmatter.date}
            </h3>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
