import React from "react"
import { Link } from "gatsby"
import { MenuItem } from "@material-ui/core"

const activeStyles = {
  background: "#A7A9AC",
  color: "#FFFFFF",
}

const links = {
  home: "Home",
  rockets: "Rockets",
  launchPads: "Launch pads",
  pastLaunches: "Past launches",
}

const NavLink = props =>
  Object.keys(links).map(item => {
    return (
      <MenuItem
        component={Link}
        key={item}
        to={item === "home" ? "/" : `/${item}/`}
        activeStyle={activeStyles}
        className={props.customStyle}
      >
        {links[item]}
      </MenuItem>
    )
  })

export default NavLink
