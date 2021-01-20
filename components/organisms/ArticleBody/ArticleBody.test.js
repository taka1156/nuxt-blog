import { shallowMount } from '@vue/test-utils';
import ArticleBody from './ArticleBody.vue';
import { dummyArticles } from '@/__testdata__/testdata.js';

describe('ArticleBody', () => {
  const articleBody = propsData =>
    shallowMount(ArticleBody, {
      propsData: {
        ...propsData
      }
    });

  it('ArticleBody初期値: article', () => {
    const wrapper = articleBody({ article: dummyArticles[0] });
    // article
    expect(wrapper.vm.$options.props.article.required).toBe(true);
    expect(wrapper.vm.article).toBe(dummyArticles[0]);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
