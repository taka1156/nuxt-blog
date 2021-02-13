import { mount, RouterLinkStub } from '@vue/test-utils';
import NavListPc from './NavListPc.vue';
import { dummyRoutes } from '@/__testdata__/testdata.js';

describe('NavList', () => {
  const navListPc = propsData =>
    mount(NavListPc, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        ...propsData,
        routes: dummyRoutes
      }
    });

  it('NavListPc初期値: routes', () => {
    const wrapper = navListPc({ isOpen: false });
    // routes
    expect(wrapper.vm.$options.props.routes.required).toBe(true);
    expect(wrapper.vm.routes).toBe(dummyRoutes);
  });

  it('値がDOMに反映されているか', () => {
    const wrapper = navListPc({ isOpen: false });
    const aTag = wrapper.findComponent(RouterLinkStub);
    const imgTag = wrapper.find('img');

    expect(aTag.props().to).toBe(dummyRoutes[0].to);
    expect(aTag.text()).toBe(dummyRoutes[0].name);
    expect(imgTag.attributes().src).toBe(dummyRoutes[0].img);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
