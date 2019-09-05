import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Navbar from "./navBar"
import SideDrawer from "./sideDrawer"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

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

  render() {
    return (
      <>
        <Helmet
          title="Space Gatsby"
          meta={[
            {
              name: "description",
              content:
                "Looking for SpaceX upcoming launch? You couldn't find a better place on Space Gatsby, you'll find everything you need!",
            },
            {
              name: "keywords",
              content:
                "SpaceX, gatsby, rockets, space, spaceships, graphQL, pwa",
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
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

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Layout
