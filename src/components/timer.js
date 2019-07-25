const Timer = props => {
  let date = new Date(props.unix * 1000)
  let hours = date.getHours()
  let minutes = "0" + date.getMinutes()
  let time = hours + ":" + minutes.substr(-2)
  let formattedTime = props.date ? date.toString().substr(0, 15) : time

  return formattedTime
}

export default Timer
