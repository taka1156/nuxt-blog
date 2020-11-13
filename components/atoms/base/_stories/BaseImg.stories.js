import BaseImg from '../BaseImg.vue';
import { dummyImg } from '@/testdata/testdata.js';

export default {
  title: 'Atoms/Base/BaseImg',
  component: BaseImg,
  parameters: {
    notes: {
      summary: '画像'
    }
  }
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImg },
  template: '<base-img class="base-img--sm" v-bind="$props" />'
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImg },
  template: '<base-img class="base-img--lg" v-bind="$props" />'
});

export const BaseImgSm = Template1.bind({});
BaseImgSm.args = dummyImg;

export const BaseImgLg = Template2.bind({});
BaseImgLg.args = dummyImg;
