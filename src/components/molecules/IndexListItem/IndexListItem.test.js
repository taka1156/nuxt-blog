import { shallowMount, createLocalVue } from '@vue/test-utils';
import IndexListItem from './IndexListItem.vue';
import { dummyTocs } from '__testdata__/testdata.js';
import VueScrollTo from 'vue-scrollto';

const localVue = createLocalVue();

localVue.use(VueScrollTo, {
  offset: -70
});

describe('IndexListItem', () => {
  const indexListItem = propsData =>
    shallowMount(IndexListItem, {
      localVue,
      propsData: {
        ...propsData
      }
    });

  it('IndexListItem初期値: t', () => {
    const wrapper = indexListItem({ t: dummyTocs[0] });
    expect(wrapper.vm.$options.props.t.required).toBe(true);
    expect(wrapper.vm.t).toBe(dummyTocs[0]);
  });

  it('値がDOMに反映されているか', () => {
    const wrapper = indexListItem({ t: dummyTocs[0] });
    const dummyText = `${dummyTocs[0].index}.${dummyTocs[0].escapedText}`;
    const aTag = wrapper.find('a');
    expect(aTag.text()).toBe(dummyText);
    expect(aTag.attributes().href).toBe(`#${dummyTocs[0].anchor}`);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
