import ArticleHeader from './ArticleHeader.vue';
import { dummyArticles } from '__testdata__/testdata.js';

export default {
  title: 'Organisms/ArticleHeader',
  component: ArticleHeader
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleHeader },
  template: '<article-header v-bind="$props" />'
});

export const Default = Template.bind({});

Default.args = { article: dummyArticles[0] };
