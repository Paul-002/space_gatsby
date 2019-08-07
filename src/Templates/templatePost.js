import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Grid, Typography } from "@material-ui/core"
import BackButton from "../components/backButton"

const linkTo = route => {
  return route === "droneShip" ? "/launchPads/" : `/${route}s/`
}

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Grid container>
        <Grid item={true} sm={2} xs={1}></Grid>
        <Grid item={true} sm={8} xs={10}>
          <Typography gutterBottom variant="h2" />
          <Typography gutterBottom variant="h3">
            {post.frontmatter.title.toUpperCase()}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></Typography>
          <Typography gutterBottom variant="body1">
            Source:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Main_Page"
            >
              Wikipedia
            </a>
          </Typography>
          <BackButton linked={`${post.frontmatter.type}`}>
            <Link to={linkTo(post.frontmatter.type)}>Back</Link>
          </BackButton>
          <Typography variant="h2" />
        </Grid>
        <Grid item={true} sm={2} xs={1}></Grid>
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
        type
      }
    }
  }
`
