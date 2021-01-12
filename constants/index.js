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

export { LOGO_TEXT, ROUTES, COPYRIGHT_URL };
