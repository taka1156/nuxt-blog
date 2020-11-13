import ClassficationListItem from '../ClassficationListItem.vue';
import { dummyClassfication } from '@/testdata/testdata.js';

export default {
  title: 'Organisns/List/ClassficationListItem',
  component: ClassficationListItem,
  parameters: {
    notes: {
      summary: '分類リストひとつ分'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassficationListItem },
  template: '<classfication-list-item v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { classficationItem: dummyClassfication[0], path: 'tag' };
