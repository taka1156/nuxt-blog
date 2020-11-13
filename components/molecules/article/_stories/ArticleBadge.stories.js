import ArticleBadge from '../ArticleBadge.vue';
import { dummyCategoryBadge, dummyTagBadge } from '@/testdata/testdata.js';

export default {
  title: 'Molecules/Article/ArticleBadge',
  component: ArticleBadge,
  parameters: {
    notes: {
      summary: 'バッジ'
    }
  }
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleBadge },
  template: '<article-badge v-bind="$props" />'
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleBadge },
  template: '<article-badge v-bind="$props" />'
});

export const CategoryBadge = Template1.bind({});
CategoryBadge.args = dummyCategoryBadge;

export const TagBadge = Template2.bind({});
TagBadge.args = dummyTagBadge;
