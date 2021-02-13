import { mount, RouterLinkStub } from '@vue/test-utils';
import NavBarPc from './NavBarPc.vue';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';

describe('NavBar', () => {
  const navBarPc = () =>
    mount(NavBarPc, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        logoText: dummyLogo,
        routes: dummyRoutes
      }
    });

  it('NavBar初期値: logoText', () => {
    const wrapper = navBarPc({ isOpen: false });
    // logoText
    expect(wrapper.vm.$options.props.logoText.required).toBe(true);
    expect(wrapper.vm.logoText).toBe(dummyLogo);
  });

  it('logoTextが反映されているか', () => {
    const wrapper = navBarPc({ isOpen: false });
    const navLogo = wrapper.find('.base-link--extend');
    expect(navLogo.text()).toBe(dummyLogo);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
