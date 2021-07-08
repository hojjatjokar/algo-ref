const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://algo.hojjat.dev',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://i.ibb.co/SNYbDsr/Slice-1.png',
    logoLink: 'https://algo.hojjat.dev/',
    title:
      "<a href='https://algo.hojjat.dev'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/hojjatjokar/algo-ref',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/HojjatDotDev" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      'big-picture', // add trailing slash if enabled above
      'getting-started',
      'patterns',
      'paradigms-and-approaches',
      'searching-algorithms',
      'sorting-algorithms',
      'find-chalanges',
      'resources',
    ],
    collapsedNav: [
      '/getting-started',
      '/patterns',
      '/paradigms-and-approaches',
      '/sorting-algorithms', // add trailing slash if enabled above
      '/searching-algorithms',
    ],
    links: [{ text: 'Blog', link: 'https://hojjat.dev' }],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='https://algo.hojjat.dev'>Algorithms</a>",
  },
  siteMetadata: {
    title: 'Algorithms | Hojjat Jokar',
    description: 'Where to learn about algorithms',
    ogImage: null,
    docsLocation: 'https://github.com/hojjatjokar/algo-ref/content',
    favicon: 'https://i.postimg.cc/dQ6qGzmf/favicon-32x32.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Algorithms reading',
      short_name: 'Algorithms',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
