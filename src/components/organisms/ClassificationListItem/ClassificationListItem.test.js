import { shallowMount } from '@vue/test-utils';
import ClassificationListItem from './ClassificationListItem.vue';
import {
  dummyClassificationCategory,
  dummyClassificationTag
} from '__testdata__/testdata.js';

describe('ClassificationListItem', () => {
  const classificationListItem = propsData =>
    shallowMount(ClassificationListItem, {
      propsData: {
        ...propsData
      }
    });

  it('ClassificationListItem初期値(Cateogry): item, routePath', () => {
    const wrapper = classificationListItem({
      item: dummyClassificationCategory.items[0],
      routePath: dummyClassificationCategory.routePath
    });
    // item
    expect(wrapper.vm.$options.props.item.required).toBe(true);
    expect(wrapper.vm.item).toBe(dummyClassificationCategory.items[0]);
    // routePath
    expect(wrapper.vm.$options.props.routePath.required).toBe(true);
    expect(wrapper.vm.routePath).toBe(dummyClassificationCategory.routePath);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('ClassificationListItem初期値(Tag): item, routePath', () => {
    const wrapper = classificationListItem({
      item: dummyClassificationTag.items[0],
      routePath: dummyClassificationTag.routePath
    });
    // item
    expect(wrapper.vm.$options.props.item.required).toBe(true);
    expect(wrapper.vm.item).toBe(dummyClassificationTag.items[0]);
    // routePath
    expect(wrapper.vm.$options.props.routePath.required).toBe(true);
    expect(wrapper.vm.routePath).toBe(dummyClassificationTag.routePath);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
