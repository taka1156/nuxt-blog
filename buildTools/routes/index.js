import routesUtils from './router.js';
const CONTENT_MAX = 20; // タグとカテゴリーの最大数
const POSTS_PER_PAGE = 5; // １ページあたりの記事数
const CLASSIFICATION_PARAMS = { fields: 'id,name,img', limit: CONTENT_MAX };

const generateRouter = async (MICRO_CMS, ARTICLE_URL, TAG_URL, CATEGORY_URL) => {
  // 一覧のページング
  const page = await routesUtils.routesFetchRange(
    ARTICLE_URL,
    MICRO_CMS,
    {
      fields:
        'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt'
    },
    POSTS_PER_PAGE,
    pageIndex => `/page/${pageIndex}/`
  );

  // タグのルーティング
  const tag = await routesUtils.routesFetchArr(
    TAG_URL,
    CLASSIFICATION_PARAMS,
    MICRO_CMS
  );

  // カテゴリーのルーティング
  const category = await routesUtils.routesFetchArr(
    CATEGORY_URL,
    CLASSIFICATION_PARAMS,
    MICRO_CMS
  );

  // タグの個別ページのルーティング
  const tagList = await routesUtils.routesFetch(
    TAG_URL,
    CLASSIFICATION_PARAMS,
    MICRO_CMS
  );

  // カテゴリーの個別ページのルーティング
  const categoryList = await routesUtils.routesFetch(
    CATEGORY_URL,
    CLASSIFICATION_PARAMS,
    MICRO_CMS
  );

  // タグの個別ページ(ページネーションなし)
  const defaultTags = await routesUtils.routesFetchAll(
    tagList,
    ARTICLE_URL,
    {
      fields:
        'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
      limit: POSTS_PER_PAGE
    },
    'tags[contains]',
    MICRO_CMS,
    tagId => `/tag/${tagId}/`
  );

  // カテゴリーの個別ページ(ページネーションなし)
  const defaultCategories = await routesUtils.routesFetchAll(
    categoryList,
    ARTICLE_URL,
    {
      fields:
        'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
      limit: POSTS_PER_PAGE
    },
    'category[equals]',
    MICRO_CMS,
    categoryId => `/category/${categoryId}/`
  );

  // タグの個別の記事一覧ページ(ページネーションあり)
  const tags = await routesUtils.routesFetchAllRange(
    tagList,
    ARTICLE_URL,
    {
      fields:
        'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt'
    },
    'tags[contains]',
    MICRO_CMS,
    POSTS_PER_PAGE,
    (tagId, pageIndex) => `/tag/${tagId}/${pageIndex}/`
  );

  // カテゴリーの個別の記事一覧ページ(ページネーションあり)
  const categories = await routesUtils.routesFetchAllRange(
    categoryList,
    ARTICLE_URL,
    {
      fields:
        'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt'
    },
    'category[equals]',
    MICRO_CMS,
    POSTS_PER_PAGE,
    (categoryId, id) => `/category/${categoryId}/${id}/`
  );

  // 記事のルーティング
  // eslint-disable-next-line prefer-const
  let { contents, totalCount } = await routesUtils.contentsFetch(
    ARTICLE_URL,
    MICRO_CMS
  );
  while (contents.length < totalCount) {
    // 2回目以降の取得
    const data = await routesUtils.contentsFetch(
      ARTICLE_URL,
      MICRO_CMS,
      contents.length
    );
    contents = contents.concat(data.contents);
  }

  const articles = contents;

  // 全てをまとめる
  const flattenTagsPages = [].concat.apply([], tags);
  const flattenCategoriesPages = [].concat.apply([], categories);
  return [
    { route: '/tags/', payload: tag },
    { route: '/categories/', payload: category },
    ...page,
    ...defaultTags,
    ...defaultCategories,
    ...flattenTagsPages,
    ...flattenCategoriesPages,
    ...articles
  ];
};

export { generateRouter };
