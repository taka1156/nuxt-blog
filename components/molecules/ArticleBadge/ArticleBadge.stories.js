import ArticleBadge from './ArticleBadge.vue';
import { dummyCategoryBadge, dummyTagBadge } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/ArticleBadge',
  component: ArticleBadge
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleBadge },
  template: '<article-badge v-bind="$props" />'
});

export const CategoryBadge = Template.bind({});
CategoryBadge.args = dummyCategoryBadge;

export const TagBadge = Template.bind({});
TagBadge.args = dummyTagBadge;
