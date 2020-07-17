module.exports = {
  siteMetadata: {
    title: `Hades`,
    description: `Hades Boon Website`,
    author: `Wesley Kok`,
    menuLinks: [
      {
        name: "Aphrodite",
        link: "/aphrodite",
      },
      {
        name: "Ares",
        link: "/ares",
      },
      {
        name: "Artemis",
        link: "/artemis",
      },
      {
        name: "Athena",
        link: "/aphrodite",
      },
      {
        name: "Demeter",
        link: "/aphrodite",
      },
      {
        name: "Dionysus",
        link: "/aphrodite",
      },
      {
        name: "Hermes",
        link: "/aphrodite",
      },
      {
        name: "Poseidon",
        link: "/aphrodite",
      },
      {
        name: "Zeus",
        link: "/aphrodite",
      },
    ],
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
