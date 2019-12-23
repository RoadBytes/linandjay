module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Lin and Jay's Space`,
    author: `Lindsey and Jason Ona`,
    description: `Note on the good life`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jason_data`,
      },
      {
        name: `github`,
        url: `https://github.com/jasonona`,
      },
    ],
  },
}
