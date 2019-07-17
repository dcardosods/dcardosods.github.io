module.exports = {
  siteMetadata: {
    title: 'Daniel Cardoso DS',
    description: "Daniel's personal website & blog",
    author: '@dcardosods',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 910,
              showCaptions: ['title'],
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Daniel Cardoso dS',
        short_name: 'dcardosods',
        start_url: '/',
        background_color: 'grey',
        theme_color: 'grey',
        display: 'minimal-ui',
        icon: 'src/images/dcds-icon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-44597517-2',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
