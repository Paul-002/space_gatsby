import React from "react"
import { Typography } from "@material-ui/core"
import { PropTypes } from "prop-types"

const BackButton = props => {
  return (
    <Typography gutterBottom align="right">
      {props.children}
    </Typography>
  )
}

BackButton.propTypes = {
  children: PropTypes.element.isRequired,
}

export default BackButton
