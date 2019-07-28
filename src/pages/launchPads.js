import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Card, CardContent, Typography } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  background: {
    height: "300px",
  },
  content: {
    color: "#FFFFFF",
  },
  heading: {
    position: "absolute",
    color: "#FFFFFF",
    top: "-40px",
    left: "5px",
    width: "500px",
  },
  card: {
    textDecoration: "none",
    margin: "10px",
  },
  shape: {
    position: "relative",
    borderTop: "50px solid rgba(34,39,43,0.8)",
    borderBottom: "solid transparent",
    borderLeft: "5px transparent",
    borderRight: "70px solid transparent",
    backgroundColor: "rgba(255,255,255,0.4)",
    height: "1px",
    width: "25%",
    minWidth: "200px",
  },
}))

const launchPads = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query MyQuery {
      droneships: allMarkdownRemark(
        filter: { frontmatter: { type: { in: "droneship" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              type
              img
            }
            fields {
              slug
            }
          }
        }
      }
      launchpads: allMarkdownRemark(
        filter: { frontmatter: { type: { in: "launchpad" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              type
              img
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
                        pad.node.frontmatter.type === "droneship" ? "h4" : "h5"
                      }
                    >
                      {pad.node.frontmatter.title}
                    </Typography>
                  </Box>
                  <Typography
                    className={classes.content}
                    variant="h6"
                    component="h6"
                    dangerouslySetInnerHTML={{ __html: pad.node.html }}
                  ></Typography>
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
