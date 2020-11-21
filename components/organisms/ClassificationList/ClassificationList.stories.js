import ClassificationList from './ClassificationList.vue';
import {
  dummyClassificationTag,
  dummyClassificationCategory
} from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ClassificationList',
  component: ClassificationList
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationList },
  template: '<classification-list v-bind="$props" />'
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationList },
  template: '<classification-list v-bind="$props" />'
});

export const Categories = Template1.bind({});
Categories.args = { items: dummyClassificationCategory, path: 'category' };

export const Tags = Template2.bind({});
Tags.args = { items: dummyClassificationTag, path: 'tag' };