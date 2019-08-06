import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Card, CardContent, Typography } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import classes from "../styles/contentBox.module.css"

const launchPads = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      droneships: allMarkdownRemark(
        filter: { frontmatter: { type: { in: "droneShip" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              type
              img
              shortText
            }
            fields {
              slug
            }
          }
        }
      }
      launchpads: allMarkdownRemark(
        filter: { frontmatter: { type: { in: "launchPad" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              type
              img
              shortText
            }
            fields {
              slug
            }
          }
        }
      }
      OCISLY: file(relativePath: { eq: "OCISLY.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      JRTI2: file(relativePath: { eq: "JRTI2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      JRTI1: file(relativePath: { eq: "JRTI1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vandenberg: file(relativePath: { eq: "vandenberg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      capeCanaveral: file(relativePath: { eq: "capeCanaveral.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bocaChica: file(relativePath: { eq: "bocaChica.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      omelekIslands: file(relativePath: { eq: "omelekIslands.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ksc: file(relativePath: { eq: "ksc.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const padsAndDrone = [data.droneships, data.launchpads]

  return (
    <Layout>
      {padsAndDrone.map(items =>
        items.edges.map(pad => (
          <Card
            key={pad.node.id}
            className={classes.card}
            component={Link}
            to={pad.node.fields.slug}
          >
            <Box boxShadow={3}>
              <BackgroundImage
                className={classes.background}
                fluid={data[pad.node.frontmatter.img].childImageSharp.fluid}
              >
                <CardContent>
                  <Box className={classes.shape}>
                    <Typography
                      className={classes.heading}
                      component="h2"
                      variant={
                        pad.node.frontmatter.type === "droneShip" ? "h4" : "h5"
                      }
                    >
                      {pad.node.frontmatter.title}
                    </Typography>
                    <Box className={classes.shortTextContainer}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.shortText}
                      >
                        {pad.node.frontmatter.shortText}
                      </Typography>
                      <Typography
                        align="right"
                        className={classes.shortText}
                        variant="subtitle1"
                      >
                        Read More {"\u25ba"}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </BackgroundImage>
            </Box>
          </Card>
        ))
      )}
    </Layout>
  )
}

export default launchPads
