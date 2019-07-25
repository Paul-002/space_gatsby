import React from "react"
import Drawer from "@material-ui/core/Drawer"
import NavLink from "./navLink"
import { withStyles, MenuList } from "@material-ui/core"

const styles = () => ({
  list: {
    display: "flex",
    width: 250,
  },
  styledLink: {
    margin: "20px",
    width: "210px",
    borderRadius: "5px",
  },
})

const SideDrawer = props => {
  const { classes } = props

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.hideDrawerHandler}
    >
      <MenuList>
        <NavLink customStyle={classes.styledLink} />
      </MenuList>
    </div>
  )

  return (
    <div>
      <Drawer open={props.show} onClick={props.hideDrawerHandler}>
        {sideList()}
      </Drawer>
    </div>
  )
}

export default withStyles(styles)(SideDrawer)
