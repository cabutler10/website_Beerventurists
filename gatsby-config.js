require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Beerventurists',
    author: 'Alyssa Butler',
    description: 'Travel Guide to Munich and its beer',
    siteUrl: 'https://www.beerventurists.com',
    url: 'https://www.beerventurists.com', // No trailing slash allowed!
    image: 'src/assets/logos/logo.png',
  },
  pathPrefix: '/beerventurists',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GA_KEY,
    //     anonymize: true,
    //     cookie_expires: 0,
    //     cookieDomain: 'https://eisbach-riders.com',
    //   },
    // },
    //`gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `beerventurists`,
        access_token: 'a valid access token',
        instagram_id: 'your instagram_business_account id',
      },
    },
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        pathToTheme: `${__dirname}/src/assets/theme/muiTheme`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beerventurists`,
        short_name: `beerventurists`,
        start_url: `/`,
        background_color: `#040010`,
        theme_color: `#015b99`,
        display: `minimal-ui`,
        icon: `src/assets/logos/logo.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
