import ClassificationListItem from '../ClassificationListItem.vue';
import {
  dummyClassificationTag,
  dummyClassificationCategory
} from '@/__testdata__/testdata.js';

export default {
  title: 'Organisns/List/ClassificationListItem',
  component: ClassificationListItem,
  parameters: {
    notes: {
      summary: '分類リストひとつ分'
    }
  }
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationListItem },
  template: '<classification-list-item v-bind="$props" />'
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationListItem },
  template: '<classification-list-item v-bind="$props" />'
});

export const Category = Template1.bind({});
Category.args = {
  classificationItem: dummyClassificationCategory[0],
  path: 'Category'
};

export const Tag = Template2.bind({});
Tag.args = {
  classificationItem: dummyClassificationTag[0],
  path: 'tag'
};
