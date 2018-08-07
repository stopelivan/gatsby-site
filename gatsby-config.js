module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve : 'gatsby-source-contentful',
      options : {
          spaceId : 'ihbqxye4w232',
          accessToken: '43025b19eb7a2beacb1bde037eb29cb18054f6eb08850c0bf80dd6ac0028afa2'
      }
    },
    'gatsby-plugin-react-helmet'],
}
