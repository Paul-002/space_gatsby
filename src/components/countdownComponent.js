import Countdown from "react-countdown-now"
import React from "react"

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
        <h3>
          {days} Days {hours} Hours {minutes < 10 ? `0${minutes}` : minutes}{" "}
          Minutes {seconds < 10 ? `0${seconds}` : seconds} Seconds
        </h3>
      )
    }
  }

  return (
    <Countdown date={new Date(props.unix * 1000)} renderer={renderer}>
      <LiftOff />
    </Countdown>
  )
}

export default CountdownComponent
