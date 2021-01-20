import { shallowMount } from '@vue/test-utils';
import ArticlePagination from './ArticlePagination.vue';
import { dummyPagination } from '__testdata__/testdata.js';

describe('ArticlePagination', () => {
  const articleDate = propsData =>
    shallowMount(ArticlePagination, {
      propsData: {
        ...propsData
      }
    });

  it('ArticlePagination初期値: currentPage, maxPage', () => {
    const wrapper = articleDate(dummyPagination);
    // currentPage
    expect(wrapper.vm.$options.props.currentPage.required).toBe(true);
    expect(wrapper.vm.currentPage).toBe(dummyPagination.currentPage);
    // maxPage
    expect(wrapper.vm.$options.props.maxPage.required).toBe(true);
    expect(wrapper.vm.maxPage).toBe(dummyPagination.maxPage);
    // routePath
    expect(wrapper.vm.$options.props.routePath.required).toBe(true);
    expect(wrapper.vm.routePath).toBe(dummyPagination.routePath);
    // prevIndex
    expect(wrapper.vm.$options.props.prevIndex.required).toBe(true);
    expect(wrapper.vm.prevIndex).toBe(2);
    // nextIndex
    expect(wrapper.vm.$options.props.nextIndex.required).toBe(true);
    expect(wrapper.vm.nextIndex).toBe(2);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
