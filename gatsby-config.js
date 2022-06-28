module.exports = {
  pathPrefix: "/vcard",
  plugins: [
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: '@theme-ui/preset-tailwind',
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
