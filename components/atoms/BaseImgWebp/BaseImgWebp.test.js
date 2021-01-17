import { mount, createLocalVue } from '@vue/test-utils';
import { dummyImg } from '@/__testdata__/testdata.js';
import VueLazyLoad from 'vue-lazyload';
import BaseImgWebp from './BaseImgWebp.vue';

const localVue = createLocalVue();
localVue.use(VueLazyLoad);

describe('BaseImgWebp', () => {
  const baseImgWebp = propsData =>
    mount(BaseImgWebp, {
      propsData: {
        ...propsData,
        imgUrl: dummyImg.imgUrl,
        imgAlt: dummyImg.imgAlt
      }
    });

  it('値がDOMに反映されているか(size: sm)', () => {
    const wrapper = baseImgWebp({ size: 'sm' });
    const imgTag = wrapper.find('img');
    // expect(imgTag.attributes().src).toBe(dummyImg.imgUrl);
    expect(imgTag.attributes().alt).toBe(dummyImg.imgAlt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('値がDOMに反映されているか(size: lg)', () => {
    const wrapper = baseImgWebp({ size: 'lg' });
    const imgTag = wrapper.find('img');
    // expect(imgTag.attributes().src).toBe(dummyImg.imgUrl);
    expect(imgTag.attributes().alt).toBe(dummyImg.imgAlt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
