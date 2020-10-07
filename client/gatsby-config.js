module.exports = {
  siteMetadata: {
    title: `Dimensional Analysis Calculator`,
    description: `A web app for the sciences.`,
    author: `Nathan B. Hankes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `test`,
        collection: `cfactors`,
        connectionString: `mongodb+srv://nbhankes:cbq6leONr6R0pGY9@appdb-qefed.azure.mongodb.net/test?retryWrites=true&w=majority`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
