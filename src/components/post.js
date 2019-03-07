import React from "react"

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.__html }}
      />
    </div>
  )
}

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `
