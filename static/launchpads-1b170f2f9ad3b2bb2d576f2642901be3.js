import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card } from "@material-ui/core"

const launchPads = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { in: "pad" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            html
          }
        }
      }
      images: space_gatsby {
        ships(limit: 3) {
          id
          image
        }
      }
    }
  `)
  return (
    <Layout>
      {console.log(data)}
      {data.allMarkdownRemark.edges.map(pad => (
        <Card component={Link} to={`/launchpads/${pad.node.frontmatter.title}`}>
          <h1>{pad.node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: pad.node.html }} />
        </Card>
      ))}
    </Layout>
  )
}

export default launchPads
