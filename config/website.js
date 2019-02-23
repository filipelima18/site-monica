const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Mónica Leiras - Digital Entrepreneur', // Navigation and Site Title
  siteTitleAlt: 'Mónica Leiras', // Alternative Site title for SEO
  siteTitleShort: 'Monica', // short_name for manifest
  siteHeadline: 'Creating Digital Experiences', // Headline for schema.org JSONLD
  siteUrl: 'https://www.monicaleiras.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal Website of Mónica Leiras, Digital Entrepreneur',
  author: 'MITIC', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@mitic_pt', // Twitter Username
  ogSiteName: 'Monica', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
