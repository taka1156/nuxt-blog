import { shallowMount } from '@vue/test-utils';
import IndexNavigation from './IndexNavigation.vue';
import { dummyTocs } from '__testdata__/testdata.js';

describe('IndexNavigation', () => {
  const indexNavigation = shallowMount(IndexNavigation, {
    propsData: {
      tocs: dummyTocs
    }
  });

  it('IndexNavigation初期値: tocs', () => {
    expect(indexNavigation.vm.$options.props.tocs.required).toBe(true);
    expect(indexNavigation.vm.tocs).toBe(dummyTocs);
  });

  it('閉じた時のスナップショット', () => {
    expect(indexNavigation.html()).toMatchSnapshot();
  });

  it('changeStateのテスト', () => {
    expect(indexNavigation.vm.$data.isOpen).toBe(false);
    indexNavigation.vm.changeState(true);
    expect(indexNavigation.vm.$data.isOpen).toBe(true);
  });

  it('開いた時のスナップショット', () => {
    expect(indexNavigation.html()).toMatchSnapshot();
  });
});
