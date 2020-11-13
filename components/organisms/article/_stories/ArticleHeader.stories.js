import ArticleHeader from '../ArticleHeader.vue';
import { dummyArticles } from '@/testdata/testdata.js';

export default {
  title: 'Organisns/Article/ArticleHeader',
  component: ArticleHeader,
  parameters: {
    notes: {
      summary: '記事のヘッダー'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleHeader },
  template: '<article-header v-bind="$props" />'
});

export const Default = Template.bind({});

Default.args = { article: dummyArticles[0] };
