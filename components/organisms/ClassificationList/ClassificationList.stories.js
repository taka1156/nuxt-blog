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
Categories.args = {
  routePath: 'category',
  items: dummyClassificationCategory
};

export const Tags = Template.bind({});
Tags.args = { routePath: 'tag', items: dummyClassificationTag };
