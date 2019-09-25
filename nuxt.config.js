const {getConfigForKeys} = require('./lib/config.js');

const ctfConfig = getConfigForKeys([
  'CF_BLOG_POST_TYPE_ID',
  'CF_SPACE_ID',
  'CF_CDA_ACCESS_TOKEN'
]);

const {createClient} = require('./plugins/contentful.js');
const cdaClient = createClient(ctfConfig);

export default {
  mode: 'spa',
  generate: {
    routes () {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/post/${entry.fields.subpath}`)
        ];
      });
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'takaのブログ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Caveat|M+PLUS+Rounded+1c' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T', crossorigin: 'anonymous' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', crossorigin: 'anonymous' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', integrity: 'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1', crossorigin: 'anonymous' },
      { src:'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', integrity:'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM', crossorigin:'anonymous'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/node_modules/highlight.js/styles/tomorrow-night.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/components.js',
    { src: '~plugins/contentful.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    preset: 'default',
    injected: true, 
    breaks: true,
    html: true,
    linkify:true,
    use: [
      'markdown-it-highlightjs',
      'markdown-it-toc'
    ],
  },

  env: {
    CF_SPACE_ID: ctfConfig.CF_SPACE_ID,
    CF_CDA_ACCESS_TOKEN: ctfConfig.CF_CDA_ACCESS_TOKEN,
    CF_BLOG_POST_TYPE_ID: ctfConfig.CF_BLOG_POST_TYPE_ID
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
};
