module.exports = {
  siteMetadata: {
    title: "Gatsby Application",
    author: "Alexander Diendorfer",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
