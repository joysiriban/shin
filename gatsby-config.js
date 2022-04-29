const path = require(`path`);
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "",
    description: "",
    author: "",
    socialLinks : [
      {
        alt: "Like us on Facebook",
        icon: "facebook-f",
        link: ""
      },
      {
        alt: "Follow us on Twitter",
        icon: "twitter-t",
        link: ""
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element"s area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations

          // Advanced Options
          selector: "[data-sal]", // Selector of the elements to be animated
          animateClassName: "sal-animate", // Class name which triggers animation
          disabledClassName: "sal-disabled", // Class name which defines the disabled state
          rootMargin: "0% 50%", // Corresponds to root"s bounding box margin
          enterEventName: "sal:in", // Enter event name
          exitEventName: "sal:out", // Exit event name
      }
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js']
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
