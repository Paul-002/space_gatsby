import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import { Typography, Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Link } from "gatsby"

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
    width: "300px",
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
  },
}))

const Rockets = () => {
  const classes = useStyles()

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
                </Box>
                <Typography
                  className={classes.content}
                  variant="h6"
                  component="h6"
                  dangerouslySetInnerHTML={{ __html: rocket.node.html }}
                ></Typography>
              </CardContent>
            </BackgroundImage>
          </Box>
        </Card>
      ))}
    </Layout>
  )
}

export default Rockets
