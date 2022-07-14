module.exports = {
  siteMetadata: {
    description: "Personal page of Nilo Cara",
    locale: "en",
    showThemeLogo: false,
    title: "Nilo Cara",
    icon: "images/profile.jpg",
    formspreeEndpoint: "https://formspree.io/f/xbjwbbqv",
  },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          theme: "dark-pink",
        },
      },
    ],
  }