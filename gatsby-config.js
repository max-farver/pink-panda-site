const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Pink Panda`,
    description: `Pink Panda`,
    siteUrl: `https://zealous-yalow-fe832f.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svgs`,
        path: `${__dirname}/src/assets/svgs`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `5f6477449d1880088dfdae98db6fff`,
      },
    },
    'gatsby-plugin-svgr',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
