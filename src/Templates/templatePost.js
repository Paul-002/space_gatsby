import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Paper } from "@material-ui/core"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data)
  return (
    <Layout>
      <Paper>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Paper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
// tutaj musza byc dane z rakiet
