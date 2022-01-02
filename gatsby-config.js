const path = require('path');

const activeEnv = process.env.GATSBY_ACTIVE_ENV
  || process.env.NODE_ENV
  || 'development';

require('dotenv').config({ path: `.env.${activeEnv}` });

const languages = ['ja', 'en'];

module.exports = {
  siteMetadata: {
    title: 'Elliott Fiedler',
    titleTemplate: '%s | Elliott Fiedler',
    description: 'My site description',
    siteUrl: `https://${process.env.HOSTNAME}`,
    twitterUsername: '@leitdeux',
    author: 'Elliott Fiedler',
    twitterCardImage: 'images/site-twitter-card.png'
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-216111395-1',
        head: true
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TRNFCG3',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        enableWebVitalsTracking: true,
        selfHostedOrigin: `https://${process.env.HOSTNAME}`
      }
    },
    'gatsby-plugin-react-helmet',
        {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        excludes: [
          // exclude any pages with a language prefix generated by gatsby-plugin-intl
          ...languages.map(lang => `/${lang}/**`)
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => `https://${process.env.HOSTNAME}`,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => allPages,
        serialize: ({ path: pageUrl }) => ({
          url: pageUrl,
          changefreq: 'daily',
          priority: 0.7
        })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://${process.env.HOSTNAME}`,
        sitemap: `https://${process.env.HOSTNAME}/sitemap-0.xml`,
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/assets/images/favicon/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets',
      },
      __key: 'assets'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data'
      },
      __key: 'data'
    },
    {
      resolve: 'gatsby-plugin-react-intl',
      options: {
        path: `${__dirname}/src/services/locales`,
        languages,
        defaultLanguage: 'ja',
        redirect: false
      }
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
