import { shallowMount } from '@vue/test-utils';
import ArticleHeader from './ArticleHeader.vue';
import { dummyArticles } from '@/__testdata__/testdata.js';

describe('ArticleHeader', () => {
  const articleHeader = propsData =>
    shallowMount(ArticleHeader, {
      propsData: {
        ...propsData
      }
    });

  it('ArticleHeader初期値: article', () => {
    const wrapper = articleHeader({ article: dummyArticles[0] });
    expect(wrapper.vm.$options.props.article.required).toBe(true);
    expect(wrapper.vm.article).toBe(dummyArticles[0]);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
