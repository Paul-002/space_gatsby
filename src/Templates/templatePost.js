import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Grid, Typography, Link } from "@material-ui/core"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data)
  return (
    <Layout>
      <Grid container>
        <Grid sm={2} xs={1}></Grid>
        <Grid sm={8} xs={10} gutterBottom>
          <Typography gutterBottom variant="h2" />
          <Typography gutterBottom bold variant="h3">
            {post.frontmatter.title.toUpperCase()}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></Typography>
          <Typography variant="body1">
            Source:{" "}
            <a target="_blank" href="https://en.wikipedia.org/wiki/Main_Page">
              Wikipedia
            </a>
          </Typography>
          <Typography gutterBottom variant="h2" />
        </Grid>
        <Grid sm={2} xs={1}></Grid>
      </Grid>
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
