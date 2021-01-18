import { shallowMount } from '@vue/test-utils';
import ClassificationTitle from './ClassificationTitle.vue';
import {
  dummyClassificationCategory,
  dummyClassificationTag
} from '@/__testdata__/testdata.js';

describe('ClassificationTitle', () => {
  const classificationTitle = propsData =>
    shallowMount(ClassificationTitle, {
      propsData: {
        ...propsData
      }
    });

  it('ClassificationTitle初期値(category): imgUrl', () => {
    const wrapper = classificationTitle({
      imgUrl: dummyClassificationCategory.items[0].img.url
    });
    // imgUrl
    expect(wrapper.vm.$options.props.imgUrl.required).toBe(true);
    expect(wrapper.vm.imgUrl).toBe(dummyClassificationCategory.items[0].img.url);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('ClassificationTitle初期値(tag): imgUrl', () => {
    const wrapper = classificationTitle({
      imgUrl: dummyClassificationTag.items[0].img.url
    });
    // imgUrl
    expect(wrapper.vm.$options.props.imgUrl.required).toBe(true);
    expect(wrapper.vm.imgUrl).toBe(dummyClassificationTag.items[0].img.url);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
