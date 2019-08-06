import Countdown from "react-countdown-now"
import React from "react"
import PropTypes from "prop-types"
import { Typography } from "@material-ui/core"

const CountdownComponent = props => {
  // const calculateTime = launchTime => {
  //   return Date.now() + (launchTime * 1000 - Date.now())
  // }

  const LiftOff = () => <h3>Lift off!</h3>

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <LiftOff />
    } else {
      return (
        <Typography variant="h5">
          {days}d {hours}h {minutes < 10 ? `0${minutes}` : minutes}m{" "}
          {seconds < 10 ? `0${seconds}` : seconds}s
        </Typography>
      )
    }
  }

  return (
    <Countdown date={new Date(props.unix * 1000)} renderer={renderer}>
      <LiftOff />
    </Countdown>
  )
}

CountdownComponent.propTypes = {
  unix: PropTypes.number,
}

export default CountdownComponent
