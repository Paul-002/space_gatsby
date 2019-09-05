import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Page not found</h1>
      <Link to="/">Back</Link>
    </div>
  </Layout>
)

export default NotFoundPage
