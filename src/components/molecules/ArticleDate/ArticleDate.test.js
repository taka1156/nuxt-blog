import { shallowMount } from '@vue/test-utils';
import ArticleDate from './ArticleDate.vue';
import { dummyDate } from '__testdata__/testdata.js';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

describe('ArticleDate', () => {
  const articleDate = propsData =>
    shallowMount(ArticleDate, {
      propsData: {
        ...propsData
      }
    });

  it('ArticleDate初期値: createdAt, updatedAt', () => {
    const wrapper = articleDate(dummyDate);
    // createdAt
    expect(wrapper.vm.$options.props.createdAt.required).toBe(true);
    expect(wrapper.vm.createdAt).toBe(dummyDate.createdAt);
    // updatedAt
    expect(wrapper.vm.$options.props.updatedAt.required).toBe(true);
    expect(wrapper.vm.updatedAt).toBe(dummyDate.updatedAt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('formatDateメソッド', () => {
    const wrapper = articleDate(dummyDate);
    const ans = dayjs(dummyDate.createdAt).format('YYYY/M/D');
    expect(wrapper.vm.formatDate(dummyDate.createdAt)).toBe(ans);
    expect(wrapper.vm.formatDate(undefined)).toBe('--/--/--');
  });
});
