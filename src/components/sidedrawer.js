import React from "react"
import Drawer from "@material-ui/core/Drawer"
import NavLink from "./navLink"
import {
  withStyles,
  MenuList,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import linkedIn from "../images/linkedin.png"

const styles = () => ({
  list: {
    display: "flex",
    width: "250px",
  },
  styledLink: {
    margin: "20px",
    width: "210px",
    borderRadius: "5px",
  },
  media: {
    textDecoration: "none",
    color: "#000000",
  },
  hire: {
    marginLeft: "16px",
  },
})

const SideDrawer = props => {
  const { classes } = props

  const sideList = () => (
    <Box
      className={classes.list}
      role="presentation"
      onClick={props.hideDrawerHandler}
    >
      <MenuList>
        <NavLink customStyle={classes.styledLink} />
        <Divider variant="middle" />
      </MenuList>
    </Box>
  )

  const media = () => (
    <>
      <Typography className={classes.hire} variant="subtitle1">
        Hire me!
      </Typography>
      <List>
        {["LinkedIn"].map(text => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.${text}.com/in/pawel-gasiorowski/`}
            className={classes.media}
            key={text}
          >
            <ListItem button>
              <ListItemIcon>
                <img src={linkedIn} alt="LinkedIn" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </a>
        ))}
      </List>
    </>
  )

  return (
    <Box>
      <Drawer open={props.show} onClick={props.hideDrawerHandler}>
        {sideList()}
        {media()}
      </Drawer>
    </Box>
  )
}

export default withStyles(styles)(SideDrawer)
