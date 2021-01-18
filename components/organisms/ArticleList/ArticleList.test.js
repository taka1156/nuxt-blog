import { shallowMount } from '@vue/test-utils';
import ArticleList from './ArticleList.vue';
import { dummyArticles, dummyPagination } from '@/__testdata__/testdata.js';

const $route = {
  path: '/page/1/'
};

describe('ArticleList', () => {
  const articleListItem = shallowMount(ArticleList, {
    $route,
    propsData: {
      articles: dummyArticles,
      maxPage: dummyPagination.maxPage,
      routePath: dummyPagination.routePath
    }
  });

  it('ArticleListIem初期値: articles, maxPage, routePath', () => {
    // articles
    expect(articleListItem.vm.$options.props.articles.required).toBe(true);
    expect(articleListItem.vm.articles).toBe(dummyArticles);
    // maxPage
    expect(articleListItem.vm.$options.props.maxPage.required).toBe(true);
    expect(articleListItem.vm.maxPage).toBe(dummyPagination.maxPage);
    // routePath
    expect(articleListItem.vm.$options.props.routePath.required).toBe(true);
    expect(articleListItem.vm.routePath).toBe(dummyPagination.routePath);

    expect(articleListItem.html()).toMatchSnapshot();
  });
});
