const dummyImgUrl = 'https://placehold.jp/150x150.png';
const dummyUrl = 'https://placehold.jp';
const dummyCopyrightUrl = 'http://placehold.jp';
const dummyDay = '2023-12-31';
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
const dummyNavTemplate = i => ({
  name: `ダミー${i}`,
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

**aaa**

**bbb**

:: どんどん共有しましょう
*プログラミングに関することをどんどん投稿して、*
**知識を記録、共有しましょう。**
_プログラミングに関することをどんどん投稿して、_
~~知識を記録、共有しましょう。~~
::


## marked.js拡張構文

:: spoiler word
  **aaa**
::

:: point ポイント
  ポイント
::

:: info 情報
  インフォメーション
::

:: warn 注意
  〇〇に注意
::

:: alert 警告
  〇〇に警告
::

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

const dummySnsIconTemplate = i => ({
  name: `ダミー${i}`,
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

const dummyRoutes = dummyFactory(MAX_NAV_DATA, i => dummyNavTemplate(i));

const dummyTagBadges = dummyFactory(MAX_BADGE_DATA, i =>
  dummyBadgeTemplate(i, 'ダミータグ')
);

const dummyClassificationFactory = (items, routePath) => {
  const tmp = items;
  return {
    items: tmp,
    routePath: routePath
  };
};

const dummyClassificationCategory = dummyClassificationFactory(
  dummyFactory(MAX_BADGE_DATA, i =>
    dummyClassificationTemplate(i, 'ダミーカテゴリー')
  ),
  'category'
);

const dummyClassificationTag = dummyClassificationFactory(
  dummyFactory(MAX_BADGE_DATA, i => dummyClassificationTemplate(i, 'ダミータグ')),
  'tag'
);

const dummyArticles = dummyFactory(MAX_ARTICLE_DATA, i => dummyArticleTemplate(i));

const dummyFactoryBadge = (id, name, routePath) => {
  const tmp = dummyBadgeTemplate(id, name);
  return {
    routePath: routePath,
    badge: tmp
  };
};

const dummyCategoryBadge = dummyFactoryBadge(1, 'ダミーカテゴリー', 'category-id');

const dummyTagBadge = dummyFactoryBadge(1, 'ダミータグ', 'tag-id');

const dummyPagination = {
  currentPage: 1,
  maxPage: Math.ceil(dummyArticles.length / 5),
  routePath: 'page-pageid',
  prevIndex: 2,
  nextIndex: 2
};

const dummyTocs = dummyFactory(MAX_TOC_DATA, i => dummyTocTemplate(i));

const dummyLogo = 'ダミーロゴ';

const dummySnsIcons = dummyFactory(MAX_ICONS_DATA, i => dummySnsIconTemplate(i));

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
  dummyDay,
  dummySnsIcons,
  dummyProfile
};
