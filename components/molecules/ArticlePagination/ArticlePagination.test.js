import { shallowMount } from '@vue/test-utils';
import ArticlePagination from './ArticlePagination.vue';
import { dummyPagination } from '@/__testdata__/testdata.js';

describe('ArticlePagination', () => {
  const articleDate = propsData =>
    shallowMount(ArticlePagination, {
      propsData: {
        ...propsData
      }
    });

  it('ArticlePaginationの初期値: createdAt, updatedAt', () => {
    const wrapper = articleDate(dummyPagination);
    // createdAt
    expect(wrapper.vm.$options.props.currentPage.required).toBe(true);
    expect(wrapper.vm.currentPage).toBe(dummyPagination.currentPage);
    // updatedAt
    expect(wrapper.vm.$options.props.maxPage.required).toBe(true);
    expect(wrapper.vm.maxPage).toBe(dummyPagination.maxPage);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('prevPageを実行した時、`prev`のイベントが発生するか', () => {
    const wrapper = articleDate(dummyPagination);
    wrapper.vm.prevPage();
    expect(wrapper.emitted('prev')).toBeTruthy();
  });

  it('nextPageを実行した時、`next`のイベントが発生するか', () => {
    const wrapper = articleDate(dummyPagination);
    wrapper.vm.nextPage();
    expect(wrapper.emitted('next')).toBeTruthy();
  });
});
