import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import NavLink from "./navLink"
import { MenuList } from "@material-ui/core"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  customNavList: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  styledLink: {
    color: "white",
    borderRadius: "5px",
    padding: theme.spacing(1),
    textDecoration: "none",
    marginRight: theme.spacing(1),
  },
  appBarCustomColor: {
    background: "#005288",
  },
})

const NavBar = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarCustomColor}>
        <Toolbar>
          <IconButton
            onClick={props.showDrawer}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Space Gatsby
          </Typography>
          <MenuList className={classes.customNavList}>
            <NavLink customStyle={classes.styledLink} />
          </MenuList>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(NavBar)
