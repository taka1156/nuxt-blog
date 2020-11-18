import ArticleListItem from './ArticleListItem.vue';
import { dummyArticles } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ArticleListItem',
  component: ArticleListItem
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleListItem },
  template: '<article-list-item v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { article: dummyArticles[0] };
