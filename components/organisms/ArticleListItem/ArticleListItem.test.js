import { shallowMount } from '@vue/test-utils';
import ArticleListItem from './ArticleListItem.vue';
import { dummyArticles } from '@/__testdata__/testdata.js';

describe('ArticleListItem', () => {
  const articleListItem = shallowMount(ArticleListItem, {
    propsData: {
      article: dummyArticles[0]
    }
  });

  it('ArticleListIem初期値: article', () => {
    // article
    expect(articleListItem.vm.$options.props.article.required).toBe(true);
    expect(articleListItem.vm.article).toBe(dummyArticles[0]);

    expect(articleListItem.html()).toMatchSnapshot();
  });
});
