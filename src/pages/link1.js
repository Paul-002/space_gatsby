import React from "react"
import Layout from "../components/layout"
import { Button } from "@material-ui/core"
import { Link } from "gatsby"

const Link1 = () => {
  return (
    <Layout>
      <Button>
        <Link to={"/"}>back</Link>
      </Button>
    </Layout>
  )
}

export default Link1
