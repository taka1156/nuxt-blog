import ClassificationList from '../ClassificationList.vue';
import { dummyClassfication } from '@/testdata/testdata.js';

export default {
  title: 'Organisns/List/ClassificationList',
  component: ClassificationList,
  parameters: {
    notes: {
      summary: '分類リスト'
    }
  },
  argTypes: {
    path: {
      control: {
        type: 'inline-radio',
        options: ['category', 'tag']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationList },
  template: '<classification-list v-bind="$props" />'
});

export const Default = Template.bind({});

Default.args = { items: dummyClassfication, path: 'category' };
