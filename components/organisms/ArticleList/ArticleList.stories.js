import ArticleList from './ArticleList.vue';
import { dummyArticles, dummyPagination } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ArticleList',
  component: ArticleList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleList },
  template: '<article-list v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  articles: dummyArticles.slice(0, 5),
  maxPage: dummyPagination.maxPage
};
