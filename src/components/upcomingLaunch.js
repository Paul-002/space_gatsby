import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Typography, Paper, Box, Button } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Timer from "./timer"
import CountDownComponent from "./countdownComponent"

const useStyles = makeStyles(() => ({
  shape: {
    position: "relative",
    borderTop: "50px solid rgba(34,39,43,0.8)",
    borderBottom: "solid transparent",
    borderLeft: "5px transparent",
    borderRight: "70px solid transparent",
    backgroundColor: "rgb(0,82,136)",
    height: "1px",
    width: "70%",
  },
  heading: {
    position: "absolute",
    color: "#FFFFFF",
    top: "-42px",
    left: "5px",
    minWidth: "260px",
  },
  button: {
    margin: "15px 0px",
  },
  link: {
    textDecoration: "none",
  },
}))

const StyledPaperContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    width: "95%",
    margin: "0 auto",
  },
})(Paper)

const StyledBoxContainer = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "40px",
    // border: "2px solid blue",
  },
})(Box)

const ImageBox = withStyles({
  root: {
    height: "300px",
    width: "300px",
    padding: "20px",
    // border: "2px solid black",
  },
})(Box)

const InfoBox = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // border: "2px solid red",
    padding: "5px",
  },
})(Box)

const TypographyBody1 = withStyles({
  root: {
    marginBottom: "5px",
  },
})(Typography)

const MissionDetailsContainer = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // border: "2px solid yellow",
  },
})(Box)

const LeftContainer = withStyles({
  root: {
    // border: "2px solid grey",
    marginRight: "10px",
  },
})(Box)

const RightContainer = withStyles({
  root: {
    // border: "2px solid pink",
  },
})(Box)

const DetailText = withStyles({
  root: {
    // textAlign: "right",
    fontWeight: "bold",
    marginBottom: "5px",
  },
})(Typography)

const TimerBox = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
})(Box)

const UpcomingLaunch = () => {
  const classes = useStyles()

  const landingSite = () => {
    return cores.map(landing_type => {
      return landing_type[Object.keys(landing_type)] !== null
        ? landing_type[Object.keys(landing_type)]
        : "No info"
    })
  }

  const rocketInfo = block => {
    if (block === null) {
      return rocket.rocket_name + " " + rocket.rocket_type
    } else {
      return (
        rocket.rocket_name +
        " " +
        rocket.rocket_type +
        " " +
        "block" +
        " " +
        block
      )
    }
  }

  const rocketPayload = () => {
    return payloads.map(payload_type => {
      return payload_type[Object.keys(payload_type)]
    })
  }

  const data = useStaticQuery(graphql`
    query {
      space_gatsby {
        launchNext {
          launch_date_unix
          mission_name
          rocket {
            second_stage {
              payloads {
                payload_type
              }
              block
            }
            first_stage {
              cores {
                landing_vehicle
              }
            }
            rocket_name
            rocket_type
          }
          launch_site {
            site_name
          }
        }
      }
      file(relativePath: { eq: "img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const {
    file,
    space_gatsby: {
      launchNext: { rocket, launch_date_unix, mission_name },
      launchNext: {
        launch_site: { site_name },
      },
      launchNext: {
        rocket: {
          second_stage: { block },
          first_stage: { cores },
        },
        rocket: {
          second_stage: { payloads },
        },
      },
    },
  } = data
  return (
    <StyledPaperContainer elevation={10}>
      <StyledBoxContainer>
        <InfoBox>
          <Box className={classes.shape}>
            <Typography className={classes.heading} variant="h4">
              {mission_name}
            </Typography>
          </Box>
          <Button className={classes.button} color="primary" variant="outlined">
            <Typography
              className={classes.link}
              color="primary"
              variant="h6"
              component={Link}
              to="/upcomingLaunch/"
            >
              Mission details
            </Typography>
          </Button>
          <MissionDetailsContainer>
            <LeftContainer>
              <DetailText>Launch date</DetailText>
              <DetailText>Launch time</DetailText>
              <DetailText>Launch site</DetailText>
              <DetailText>Landing site</DetailText>
              <DetailText>Rocket type</DetailText>
              <DetailText>Payload</DetailText>
            </LeftContainer>
            <RightContainer>
              <TypographyBody1 variant="body1">
                <Timer date unix={launch_date_unix} />
              </TypographyBody1>
              <TypographyBody1 variant="body1">
                <Timer unix={launch_date_unix} />
              </TypographyBody1>
              <TypographyBody1 variant="body1">{site_name}</TypographyBody1>
              <TypographyBody1 variant="body1">{landingSite()}</TypographyBody1>
              <TypographyBody1>{rocketInfo(block)}</TypographyBody1>
              <TypographyBody1>{rocketPayload()}</TypographyBody1>
            </RightContainer>
          </MissionDetailsContainer>
        </InfoBox>
        <ImageBox>
          <Img fluid={file.childImageSharp.fluid} alt="Mission patch" />
        </ImageBox>
      </StyledBoxContainer>
      <TimerBox>
        <CountDownComponent unix={launch_date_unix}></CountDownComponent>
      </TimerBox>
    </StyledPaperContainer>
  )
}

export default UpcomingLaunch
