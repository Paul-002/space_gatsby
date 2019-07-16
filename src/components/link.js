import React from "react"
import { Link as GatsbyRouterLink } from "gatsby"

const customStyle = {
  color: "white",
}

const activeStyles = {
  background: "gray",
}

const Link = () => {
  const links = ["link1", "link2", "link3"]
  return links.map(item => (
    <GatsbyRouterLink
      key={item}
      to={`/${item}`}
      style={customStyle}
      activeStyle={activeStyles}
    >
      {item}
    </GatsbyRouterLink>
  ))
}

export default Link
