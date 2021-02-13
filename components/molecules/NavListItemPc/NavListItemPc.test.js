import { mount, RouterLinkStub } from '@vue/test-utils';
import NavListItemPc from './NavListItemPc.vue';
import { dummyRoutes } from '@/__testdata__/testdata.js';

describe('NavListItem', () => {
  const navListItemPc = mount(NavListItemPc, {
    stubs: {
      NuxtLink: RouterLinkStub
    },
    propsData: {
      navItem: dummyRoutes[0]
    }
  });

  it('NavList初期値: navItem', () => {
    // NavItme
    expect(navListItemPc.vm.$options.props.navItem.required).toBe(true);
    expect(navListItemPc.vm.navItem).toBe(dummyRoutes[0]);
  });

  it('値がDOMに反映されているか', () => {
    const aTag = navListItemPc.findComponent(RouterLinkStub);
    const imgTag = navListItemPc.find('img');

    expect(aTag.props().to).toBe(dummyRoutes[0].to);
    expect(aTag.text()).toBe(dummyRoutes[0].name);
    expect(imgTag.attributes().src).toBe(dummyRoutes[0].img);
    // スナップショット
    expect(navListItemPc.html()).toMatchSnapshot();
  });
});
