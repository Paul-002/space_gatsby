import React from "react"
import { Link } from "gatsby"
import { MenuItem } from "@material-ui/core"

const activeStyles = {
  background: "#A7A9AC",
  color: "white",
}

const NavLink = props => {
  const links = ["Home", "Rockets", "Past Launches", "Capsules"]
  return links.map(item => (
    <MenuItem
      component={Link}
      key={item}
      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
      activeStyle={activeStyles}
      className={props.customStyle}
      autoWidth="false"
    >
      {item}
    </MenuItem>
  ))
}

export default NavLink
