import { shallowMount } from '@vue/test-utils';
import ClassificationList from './ClassificationList.vue';
import {
  dummyClassificationCategory,
  dummyClassificationTag
} from '__testdata__/testdata.js';

describe('ClassificationList', () => {
  const classificationList = propsData =>
    shallowMount(ClassificationList, {
      propsData: {
        ...propsData
      }
    });

  it('ClassificationList初期値(Cateogry): items, routePath', () => {
    const wrapper = classificationList(dummyClassificationCategory);
    // items
    expect(wrapper.vm.$options.props.items.required).toBe(true);
    expect(wrapper.vm.items).toBe(dummyClassificationCategory.items);
    // routePath
    expect(wrapper.vm.$options.props.routePath.required).toBe(true);
    expect(wrapper.vm.routePath).toBe(dummyClassificationCategory.routePath);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('ClassificationList初期値(Tag): items, routePath', () => {
    const wrapper = classificationList(dummyClassificationTag);
    // items
    expect(wrapper.vm.$options.props.items.required).toBe(true);
    expect(wrapper.vm.items).toBe(dummyClassificationTag.items);
    // routePath
    expect(wrapper.vm.$options.props.routePath.required).toBe(true);
    expect(wrapper.vm.routePath).toBe(dummyClassificationTag.routePath);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
