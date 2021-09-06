import { shallowMount } from '@vue/test-utils';
import RelativeArticleList from './RelativeArticleList.vue';
import { dummyArticles, dummyCategoryBadge } from '@/__testdata__/testdata.js';

describe('githubStatus', () => {
  const contributionBox = propsData =>
    shallowMount(RelativeArticleList, {
      propsData: {
        ...propsData
      }
    });

  it('RelativeArticleList初期値: imgUrl, imgAlt', () => {
    dummyArticles.length = 2;
    const wrapper = contributionBox({
      category: dummyCategoryBadge,
      relatedBlogs: dummyArticles
    });

    // category
    expect(wrapper.vm.$options.props.category.required).toBe(true);
    expect(wrapper.vm.category).toEqual(dummyCategoryBadge);
    // relatedBlogs
    expect(wrapper.vm.$options.props.relatedBlogs.required).toBe(true);
    expect(wrapper.vm.relatedBlogs).toEqual(dummyArticles);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
