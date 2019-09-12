const path = require(`path`)

module.exports = {
  pathPrefix: "/space_gatsby",
  siteMetadata: {
    title: `Space Gatsby powered by graphQL API`,
    description: `SpaceX example website`,
    author: `Pawel Gasiorowski`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Space_Gatsby`,
        short_name: `Space Gatsby`,
        start_url: `/space_gatsby/`,
        background_color: `#181C1F`,
        theme_color: `#181C1F`,
        display: `standalone`,
        icon: `src/images/icon-rocket.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SpaceXGraphQLAPI",
        fieldName: "space_gatsby",
        url: "https://api.spacex.land/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
  ],
}
