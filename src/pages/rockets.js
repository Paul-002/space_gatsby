import React from "react"
import Layout from "../components/layout"
import { Typography, Box } from "@material-ui/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import classes from "../styles/contentBox.module.css"

const Rockets = () => {
  const data = useStaticQuery(graphql`
    query {
      falcon1: file(relativePath: { eq: "falcon1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      falcon9: file(relativePath: { eq: "falcon9.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      falconHeavy: file(relativePath: { eq: "falconHeavy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bfr: file(relativePath: { eq: "bfr.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rockets: allMarkdownRemark(
        filter: { frontmatter: { type: { in: "rocket" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              img
              shortText
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {data.rockets.edges.map(rocket => (
        <Card
          key={rocket.node.id}
          className={classes.card}
          component={Link}
          to={rocket.node.fields.slug}
        >
          <Box boxShadow={3}>
            <BackgroundImage
              className={classes.background}
              fluid={data[rocket.node.frontmatter.img].childImageSharp.fluid}
            >
              <CardContent>
                <Box className={classes.shape}>
                  <Typography
                    className={classes.heading}
                    component="h2"
                    variant="h4"
                  >
                    {rocket.node.frontmatter.title}
                  </Typography>
                  <Box className={classes.shortTextContainer}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      className={classes.shortText}
                    >
                      {rocket.node.frontmatter.shortText}
                    </Typography>
                    <Typography
                      align="right"
                      className={classes.shortText}
                      variant="subtitle1"
                    >
                      Read more {"\u25ba"}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </BackgroundImage>
          </Box>
        </Card>
      ))}
    </Layout>
  )
}

export default Rockets
