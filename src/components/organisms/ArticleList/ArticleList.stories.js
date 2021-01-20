import ArticleList from './ArticleList.vue';
import { dummyArticles, dummyPagination } from '__testdata__/testdata.js';

export default {
  title: 'Organisms/ArticleList',
  component: ArticleList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleList },
  template: '<article-list v-bind="$props" />'
});

export const Page = Template.bind({});
Page.args = {
  articles: dummyArticles.slice(0, 5),
  maxPage: dummyPagination.maxPage,
  routePath: 'page-pageid'
};

export const Tag = Template.bind({});
Tag.args = {
  articles: dummyArticles.slice(0, 5),
  maxPage: dummyPagination.maxPage,
  routePath: 'tag-id-pageid'
};

export const Category = Template.bind({});
Category.args = {
  articles: dummyArticles.slice(0, 5),
  maxPage: dummyPagination.maxPage,
  routePath: 'category-id-pageid'
};
