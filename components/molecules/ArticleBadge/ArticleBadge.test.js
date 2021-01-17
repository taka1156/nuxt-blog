import { shallowMount } from '@vue/test-utils';
import ArticleBadge from './ArticleBadge.vue';
import { dummyCategoryBadge, dummyTagBadge } from '@/__testdata__/testdata.js';

describe('ArticleBadge', () => {
  const articleBadge = propsData =>
    shallowMount(ArticleBadge, {
      propsData: {
        ...propsData
      }
    });

  it('ArticleBadgeの初期値(Category): badge', () => {
    const wrapper = articleBadge(dummyCategoryBadge);
    expect(wrapper.vm.routePath).toBe(dummyCategoryBadge.routePath);
    expect(wrapper.vm.badge).toBe(dummyCategoryBadge.badge);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('ArticleBadgeの初期値(Tag): badge', () => {
    const wrapper = articleBadge(dummyTagBadge);
    expect(wrapper.vm.routePath).toBe(dummyTagBadge.routePath);
    expect(wrapper.vm.badge).toBe(dummyTagBadge.badge);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
