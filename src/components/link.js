import React from "react"
import { Link as GatsbyRouterLink } from "gatsby"

const Link = () => {
  const links = ["link1", "link2", "link3"]
  return links.map(item => (
    <GatsbyRouterLink key={item} to={`/${item}`} style={{ color: "white" }}>
      {item}
    </GatsbyRouterLink>
  ))
}

export default Link
