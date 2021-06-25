const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hojjat.dev',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://algo.hojjat.dev/',
    title:
    "<a href='https://hasura.io/learn/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/hojjat/algo',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/1hojjat" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
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
      '/introduction', // add trailing slash if enabled above
      '/getting-started',
    ],
    collapsedNav: [
      '/getting-started', // add trailing slash if enabled above
    ],
    links: [{ text: 'Blog', link: 'https://hojjat.dev' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://algo.hojjat.dev'>Algorithms</a>",
  },
  siteMetadata: {
    title: 'Algorithms | Hojjat Jokar',
    description: 'Where to lern about algorithms',
    ogImage: null,
    docsLocation: 'https://github.com/hojjat/algo/tree/master/content',
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
