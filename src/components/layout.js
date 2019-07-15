import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Navbar from "./navbar"
import SideDrawer from "./sidedrawer"

class Layout extends Component {
  state = {
    showDrawer: false,
  }

  showDrawerHandler = () => {
    this.setState({ showDrawer: true })
  }

  hideDrawerHandler = () => {
    this.setState({ showDrawer: false })
  }

  buttonClick = e => {
    console.log(e)
  }

  render() {
    return (
      <>
        <Grid container>
          <Navbar showDrawer={this.showDrawerHandler} />
          <SideDrawer
            show={this.state.showDrawer}
            hideDrawerHandler={this.hideDrawerHandler}
          />
        </Grid>
        <Grid>{this.props.children}</Grid>
      </>
    )
  }
}
export default Layout
