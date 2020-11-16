import ClassificationListItem from '../ClassificationListItem.vue';
import { dummyClassfication } from '@/testdata/testdata.js';

export default {
  title: 'Organisns/List/ClassificationListItem',
  component: ClassificationListItem,
  parameters: {
    notes: {
      summary: '分類リストひとつ分'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationListItem },
  template: '<classification-list-item v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { classificationItem: dummyClassfication[0], path: 'tag' };
