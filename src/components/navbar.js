// import React from "react"
// import Toolbar from "@material-ui/core/Toolbar"
// import AppBar from "@material-ui/core/AppBar"
// import MenuIcon from "@material-ui/icons/Menu"
// import IconButton from "@material-ui/core/IconButton"
// import Link from "./link"

// const Navbar = props => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="Menu">
//           <MenuIcon />
//         </IconButton>
//         <Link />
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Navbar

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Link from "./link"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const NavBar = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
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
          <Link />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
