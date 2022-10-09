module.exports = {
  siteMetadata: {
    title: `annual-yearbook`,
    description:`Student's yearbook is an open-source project which intends to dispaly the students who will be graduating and who've graduated through the years forming a yearbook.`,
    siteUrl: `https://memories.ieeecsvitc.com`
  },
  plugins: [
  "gatsby-plugin-image", 
  "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  'gatsby-plugin-react-helmet'
  ]
};
