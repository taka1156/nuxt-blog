const dummyImgUrl = 'http://placehold.jp/150x150.png';
const dummyUrl = 'http://placehold.jp';
const dummyCopyrightUrl = 'http://placehold.jp';
const MAX_NAV_DATA = 4;
const MAX_ICONS_DATA = 4;
const MAX_ARTICLE_DATA = 10;
const MAX_BADGE_DATA = 5;
const MAX_TOC_DATA = 5;

const dummyOutsideLink = { routeTo: dummyUrl };
const dummyRouteStr = { routeTo: '/' };
const dummyRouteObj = {
  routeTo: {
    name: 'sample-id',
    params: { id: 1 }
  }
};

// factory
const dummyFactory = (num, fn) => {
  return [...new Array(num)].map((_, i) => fn(i + 1));
};

// template
const dummyNavTemplate = () => ({
  name: 'ダミーナビゲーション',
  to: '/test1',
  img: dummyImgUrl
});

const dummyBadgeTemplate = (i, name) => ({
  id: i,
  name: name,
  img: { url: dummyImgUrl }
});

const dummyClassificationTemplate = (i, name) => ({
  id: i,
  name: name,
  img: {
    url: dummyImgUrl
  }
});

const dummyTocTemplate = i => ({
  index: i,
  escapedText: 'この文章はダミーです。',
  anchor: `anchor_${i}`
});

const dummyMarkdown = `
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
`;

const dummyArticleTemplate = i => ({
  id: i,
  ...dummyDate,
  title:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています',
  summary:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
  body: dummyMarkdown,
  tags: dummyTagBadges.slice(0, i),
  category: dummyBadgeTemplate(1, 'ダミーカテゴリー')
});

const dummySnsIconTemplate = () => ({
  name: 'ダミーアイコン',
  img: dummyImgUrl,
  link: dummyUrl
});

// dummyDate
const dummyImg = {
  imgUrl: dummyImgUrl,
  imgAlt: 'ダミーの画像'
};

const dummyDate = {
  createdAt: '2020-07-04T10:53:40.252Z',
  updatedAt: '2020-07-08T15:15:07.668Z'
};

const dummyRoutes = dummyFactory(MAX_NAV_DATA, () => dummyNavTemplate());

const dummyTagBadges = dummyFactory(MAX_BADGE_DATA, i =>
  dummyBadgeTemplate(i, 'ダミータグ')
);

const dummyClassificationCategory = dummyFactory(MAX_BADGE_DATA, i =>
  dummyClassificationTemplate(i, 'ダミーカテゴリー')
);

const dummyClassificationTag = dummyFactory(MAX_BADGE_DATA, i =>
  dummyClassificationTemplate(i, 'ダミータグ')
);

const dummyArticles = dummyFactory(MAX_ARTICLE_DATA, i => dummyArticleTemplate(i));

const dummyFactoryBadge = (id, name) => {
  const tmpTag = dummyBadgeTemplate(id, name);
  return {
    routePath: 'tag-id',
    badge: tmpTag
  };
};

const dummyCategoryBadge = dummyFactoryBadge(1, 'ダミーカテゴリー');

const dummyTagBadge = dummyFactoryBadge(1, 'ダミータグ');

const dummyPagination = {
  currentPage: 1,
  maxPage: Math.ceil(dummyArticles.length / 5)
};

const dummyTocs = dummyFactory(MAX_TOC_DATA, i => dummyTocTemplate(i));

const dummyLogo = 'ダミーロゴ';

const dummySnsIcons = dummyFactory(MAX_ICONS_DATA, () => dummySnsIconTemplate());

const dummyProfile = {
  img: dummyImgUrl,
  introduce:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'
};

export {
  dummyOutsideLink,
  dummyRouteStr,
  dummyRouteObj,
  dummyImg,
  dummyCategoryBadge,
  dummyTagBadge,
  dummyTagBadges,
  dummyDate,
  dummyArticles,
  dummyPagination,
  dummyClassificationCategory,
  dummyClassificationTag,
  dummyLogo,
  dummyTocs,
  dummyRoutes,
  dummyCopyrightUrl,
  dummySnsIcons,
  dummyProfile
};
