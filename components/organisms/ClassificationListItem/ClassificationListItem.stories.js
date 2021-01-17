import ClassificationListItem from './ClassificationListItem.vue';
import {
  dummyClassificationTag,
  dummyClassificationCategory
} from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ClassificationListItem',
  component: ClassificationListItem
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationListItem },
  template: '<classification-list-item v-bind="$props" />'
});

export const Category = Template.bind({});
Category.args = {
  classificationItem: dummyClassificationCategory[0],
  routePath: 'category'
};

export const Tag = Template.bind({});
Tag.args = {
  classificationItem: dummyClassificationTag[0],
  routePath: 'tag'
};
