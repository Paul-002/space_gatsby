import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Paper, Box } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Timer from "../components/timer"
import CountDownComponent from "../components/countdownComponent"

const StyledPaper = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    width: "80%",
    margin: "0 auto",
  },
})(Paper)

const BoxImage = withStyles({
  root: {
    height: "220px",
    width: "220px",
  },
})(Box)

const UpcomingLaunch = () => {
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
  let {
    file,
    space_gatsby: {
      launchNext,
      launchNext: { rocket, launch_date_unix },
      launchNext: {
        rocket: {
          second_stage,
          first_stage: { cores },
        },
        rocket: {
          second_stage: { payloads },
        },
      },
    },
  } = data
  return (
    <StyledPaper>
      {console.log(launchNext)}
      <Typography variant="h4">Upcoming mission</Typography>
      <Typography variant="h5">{launchNext.mission_name}</Typography>
      <BoxImage>
        <Img fluid={file.childImageSharp.fluid} alt="Mission patch" />
      </BoxImage>
      <Typography variant="h6">Mission details</Typography>
      <Box>
        <CountDownComponent unix={launch_date_unix}></CountDownComponent>
      </Box>
      <Typography>
        Launch date: <Timer date unix={launch_date_unix} />
      </Typography>
      <Typography>
        Launch time: <Timer unix={launch_date_unix} />
      </Typography>
      <Typography>Launch site: {launchNext.launch_site.site_name}</Typography>
      <Typography>
        Landing site:{" "}
        {cores.map(landing_type => {
          return landing_type[Object.keys(landing_type)]
        })}
      </Typography>
      <Typography>{`Rocket type: ${rocket.rocket_name} ${rocket.rocket_type} block ${second_stage.block}`}</Typography>
      <Typography>
        Payload:{" "}
        {payloads.map(payload_type => {
          return payload_type[Object.keys(payload_type)]
        })}
      </Typography>
    </StyledPaper>
  )
}

export default UpcomingLaunch
