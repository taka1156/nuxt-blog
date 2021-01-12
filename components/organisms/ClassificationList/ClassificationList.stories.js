import ClassificationList from './ClassificationList.vue';
import {
  dummyClassificationTag,
  dummyClassificationCategory
} from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ClassificationList',
  component: ClassificationList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationList },
  template: '<classification-list v-bind="$props" />'
});

export const Categories = Template.bind({});
Categories.args = { items: dummyClassificationCategory, path: 'category' };

export const Tags = Template.bind({});
Tags.args = { items: dummyClassificationTag, path: 'tag' };
