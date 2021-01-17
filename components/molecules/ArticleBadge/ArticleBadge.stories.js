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
CategoryBadge.args = {
  routeTo: {
    name: 'category-id',
    params: { id: dummyCategoryBadge.badge.id }
  },
  badge: dummyCategoryBadge.badge
};

export const TagBadge = Template.bind({});
TagBadge.args = {
  routeTo: {
    name: 'tag-id',
    params: { id: dummyTagBadge.badge.id }
  },
  badge: dummyTagBadge.badge
};
