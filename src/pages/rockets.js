import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import { Link } from "gatsby"

const useStyles = makeStyles(() => ({
  gridBbox: {
    width: "100%",
  },
  bg: {
    height: "300px",
  },
  text: {
    color: "white",
  },
  card: {
    maxWidth: "100%",
    textDecoration: "none",
  },
  media: {
    height: 140,
  },
  readMore: {
    color: "white",
  },
}))

const Rockets = () => {
  const classes = useStyles()
  const rockets = ["falcon1", "falcon9", "falconHeavy", "bfr"]

  const data = useStaticQuery(graphql`
    query {
      falcon1: file(relativePath: { eq: "falcon1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      falcon9: file(relativePath: { eq: "falcon9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      falconHeavy: file(relativePath: { eq: "falconHeavy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bfr: file(relativePath: { eq: "bfr.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {rockets.map(rocket => {
        return (
          // <Grid className={classes.gridBox}>
          //   <BackgroundImage
          //     className={classes.bg}
          //     fluid={data[rocket].childImageSharp.fluid}
          //   >
          //     <Typography key={rocket} className={classes.text} variant="h2">
          //       {rocket.toUpperCase()}
          //     </Typography>
          //   </BackgroundImage>
          // </Grid>
          <Card
            className={classes.card}
            component={Link}
            to={`rockets/${rocket}`}
          >
            <CardActionArea>
              <BackgroundImage
                className={classes.bg}
                fluid={data[rocket].childImageSharp.fluid}
              >
                <CardContent>
                  <Typography
                    key={rocket}
                    className={classes.text}
                    component="h2"
                    variant="h3"
                  >
                    {rocket.toUpperCase()}
                  </Typography>
                  <Typography
                    className={classes.text}
                    variant="h6"
                    component="h6"
                  >
                    Click to read more ->
                  </Typography>
                </CardContent>
              </BackgroundImage>
            </CardActionArea>
          </Card>
        )
      })}
    </Layout>
  )
}

export default Rockets
