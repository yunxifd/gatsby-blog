module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/docs/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
