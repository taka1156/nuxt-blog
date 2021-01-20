import { shallowMount } from '@vue/test-utils';
import ArticleCategory from './ArticleCategory.vue';
import { dummyCategoryBadge } from '__testdata__/testdata.js';

describe('ArticleCategory', () => {
  const articleCategory = propsData =>
    shallowMount(ArticleCategory, {
      propsData: {
        ...propsData
      }
    });

  it('ArticleCategory初期値: category', () => {
    const wrapper = articleCategory({ category: dummyCategoryBadge });
    expect(wrapper.vm.$options.props.category.required).toBe(true);
    expect(wrapper.vm.category).toBe(dummyCategoryBadge);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
