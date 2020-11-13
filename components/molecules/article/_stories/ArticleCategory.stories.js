import ArticleCategory from '../ArticleCategory.vue';
import { dummyCategoryBadge } from '@/testdata/testdata.js';

export default {
  title: 'Molecules/Article/ArticleCategory',
  component: ArticleCategory,
  parameters: {
    notes: {
      summary: 'カテゴリバッジ'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleCategory },
  template: '<article-category v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { category: dummyCategoryBadge.badge };