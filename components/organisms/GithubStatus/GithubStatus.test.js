import { shallowMount } from '@vue/test-utils';
import GithubStatus from './GithubStatus.vue';
import { dummyImg } from '@/__testdata__/testdata.js';

describe('githubStatus', () => {
  const contributionBox = propsData =>
    shallowMount(GithubStatus, {
      propsData: {
        ...propsData
      }
    });

  it('GithubStatus初期値: imgUrl, imgAlt', () => {
    const { imgUrl, imgAlt } = dummyImg;
    const wrapper = contributionBox({
      statusUrl: imgUrl,
      usedLangUrl: imgUrl,
      imgAlt
    });

    // statusUrl
    expect(wrapper.vm.$options.props.statusUrl.required).toBe(true);
    expect(wrapper.vm.statusUrl).toBe(imgUrl);
    // usedLangUrl
    expect(wrapper.vm.$options.props.usedLangUrl.required).toBe(true);
    expect(wrapper.vm.usedLangUrl).toBe(imgUrl);
    // imgAlt
    expect(wrapper.vm.$options.props.imgAlt.required).toBe(true);
    expect(wrapper.vm.imgAlt).toBe(dummyImg.imgAlt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });
});
