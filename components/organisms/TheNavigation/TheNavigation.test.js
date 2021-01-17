import { mount, RouterLinkStub } from '@vue/test-utils';
import TheNavigation from './TheNavigation.vue';
import { dummyLogo } from '@/__testdata__/testdata.js';

describe('TheNavigation', () => {
  const theNavigation = mount(TheNavigation, {
    stubs: {
      NuxtLink: RouterLinkStub
    },
    propsData: {
      logoText: dummyLogo
    }
  });

  it('NavBar初期値: logoText', () => {
    // logoText
    expect(theNavigation.vm.$options.props.logoText.required).toBe(true);
    expect(theNavigation.vm.logoText).toBe(dummyLogo);
  });

  it('閉じた時のスナップショット', () => {
    expect(theNavigation.html()).toMatchSnapshot();
  });

  it('changeStateのテスト', () => {
    expect(theNavigation.vm.$data.isOpen).toBe(false);
    theNavigation.vm.changeState(true);
    expect(theNavigation.vm.$data.isOpen).toBe(true);
  });

  it('開いた時のスナップショット', () => {
    expect(theNavigation.html()).toMatchSnapshot();
  });
});
