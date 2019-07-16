import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Typography, Paper } from "@material-ui/core"
import CardMedia from "@material-ui/core/CardMedia"
import { withStyles } from "@material-ui/core/styles"
import img from "../images/img.png"

const StyledPaper = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    width: "80%",
    margin: "0 auto",
  },
})(Paper)

const Image = withStyles({
  root: {
    height: "220px",
    width: "220px",
  },
})(CardMedia)

const UpcomingLaunch = () => (
  <StaticQuery
    query={graphql`
      query {
        space_gatsby {
          launchNext {
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
                  landing_type
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
      }
    `}
    render={({
      space_gatsby: {
        launchNext,
        launchNext: { rocket },
        launchNext: {
          rocket: { second_stage, first_stage },
        },
      },
    }) => (
      <StyledPaper>
        <Typography variant="h4">Upcoming mission</Typography>
        <Typography variant="h5">{launchNext.mission_name}</Typography>
        <Image image={img} title="Mission logo" />
        <Typography variant="h6">Mission details</Typography>
        <Typography>CountDown timer {launchNext.launch_date_unix}</Typography>
        <Typography>{`Rocket type: ${rocket.rocket_name} ${rocket.rocket_type} block ${rocket.second_stage.block}`}</Typography>
        <Typography>Launch site: {launchNext.launch_site.site_name}</Typography>
      </StyledPaper>
    )}
  />
)

export default UpcomingLaunch
