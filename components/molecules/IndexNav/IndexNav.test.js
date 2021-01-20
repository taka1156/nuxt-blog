import { mount } from '@vue/test-utils';
import IndexNav from './IndexNav.vue';

describe('IndexNav', () => {
  const indexNav = propsData =>
    mount(IndexNav, {
      propsData: {
        ...propsData
      }
    });

  it('IndexNav初期値: isOpen', () => {
    const wrapper = indexNav({ isOpen: false });
    // isOpen
    expect(wrapper.vm.$options.props.isOpen.required).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
  });

  it('目次を開く', () => {
    const wrapper = indexNav({ isOpen: true });
    const navIconText = wrapper.find('.base-nav-icon__text');
    expect(wrapper.vm.isOpen).toBe(true);
    expect(navIconText.text()).toBe('CLOSE');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('目次を閉じる', () => {
    const wrapper = indexNav({ isOpen: false });
    const navIconText = wrapper.find('.base-nav-icon__text');
    expect(wrapper.vm.isOpen).toBe(false);
    expect(navIconText.text()).toBe('INDEX');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('changeStateを実行した時、`change-state`のイベントが発生するか', () => {
    const wrapper = indexNav({ isOpen: true });
    wrapper.vm.changeState();
    expect(wrapper.emitted('change-state')).toBeTruthy();
  });
});
