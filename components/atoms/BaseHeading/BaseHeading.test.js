import { mount } from '@vue/test-utils';
import BaseHeading from './BaseHeading.vue';

describe('BaseImg', () => {
  const baseHeading = propsData =>
    mount(BaseHeading, {
      propsData: { ...propsData },
      slots: {
        default: 'ダミーの見出し'
      }
    });

  it('値がDOMに反映されているか(h1)', () => {
    const wrapper = baseHeading({ hLv: '1' });
    const hTag = wrapper.find('h1');
    expect(hTag.text()).toBe('ダミーの見出し');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(h3)', () => {
    const wrapper = baseHeading({ hLv: '3' });
    const hTag = wrapper.find('h3');
    expect(hTag.text()).toBe('ダミーの見出し');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
