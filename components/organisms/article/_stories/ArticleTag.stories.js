import ArticleTag from '../ArticleTag.vue';
import { dummyTagBadges } from '@/testdata/testdata.js';

export default {
  title: 'Organisns/Article/ArticleTag',
  component: ArticleTag,
  parameters: {
    notes: {
      summary: 'タグバッジ'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleTag },
  template: '<article-tag v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { tags: dummyTagBadges };
