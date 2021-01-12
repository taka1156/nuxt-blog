import BaseImgWebp from './BaseImgWebp.vue';
import { dummyImg } from '@/__testdata__/testdata.js';

export default {
  title: 'Atoms/BaseImgWebp',
  component: BaseImgWebp,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'lg']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImgWebp },
  template: '<base-img-webp v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { ...dummyImg };
