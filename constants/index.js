const LOGO_TEXT = 'TakaTechBlog';
const ROUTES = [
  {
    name: 'Top',
    to: '/',
    img: require('assets/img/ui/home.svg')
  },
  {
    name: 'Category',
    to: '/categories/',
    img: require('assets/img/ui/category.svg')
  },
  {
    name: 'Tag',
    to: '/tags/',
    img: require('assets/img/ui/tag.svg')
  },
  {
    name: 'Profile',
    to: '/profile/',
    img: require('assets/img/ui/profile.svg')
  }
];
const COPYRIGHT_URL = 'https://policy.taka1156.site/';

const SNS_ICONS = [
  {
    name: 'GitHub',
    img: require('@/assets/img/github-logo.png'),
    link: 'https://github.com/taka1156'
  },
  {
    name: 'Qiita',
    img: require('@/assets/img/qiita-logo.png'),
    link: 'https://qiita.com/taka_1156'
  },
  {
    name: 'Twitter',
    img: require('@/assets/img/twitter-logo.png'),
    link: 'https://twitter.com/taka_1156'
  },
  {
    name: 'Portfolio',
    img: require('@/assets/img/prof.png'),
    link: 'https://www.taka1156.site'
  }
];

const PROFILE = {
  img: require('@/assets/img/prof.png'),
  introduce:
    'プログラミングは、大学1年から触り始めC、Java、Python3などを学びました。現在は、TypeScriptやPHP(+Laravel)について学習しています。'
};

const GITHUB_CONTRIBUTION_IMG = {
  imgUrl: 'https://ghchart.rshah.org/taka1156',
  imgAlt: "taka1156's Github chart"
};

const GITHUB_STATUS_INFO = {
  statusUrl:
    'https://github-readme-stats.vercel.app/api?username=taka1156&count_private=true&theme=vue&show_icons=true&hide_border=true',
  usedLangUrl:
    'https://github-readme-stats.vercel.app/api/top-langs/?username=taka1156&layout=compact&theme=vue&hide_border=true',
  imgAlt: 'github status'
};

export {
  LOGO_TEXT,
  ROUTES,
  COPYRIGHT_URL,
  SNS_ICONS,
  PROFILE,
  GITHUB_CONTRIBUTION_IMG,
  GITHUB_STATUS_INFO
};
