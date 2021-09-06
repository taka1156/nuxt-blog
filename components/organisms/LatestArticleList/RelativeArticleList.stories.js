import RelativeArticleList from './RelativeArticleList.vue';
import { dummyArticles, dummyCategoryBadge } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/RelativeArticleList',
  component: RelativeArticleList
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RelativeArticleList },
  template: '<relative-article-list v-bind="$props" />'
});

export const Default = Template.bind({});
dummyArticles.length = 2;
Default.args = {
  category: dummyCategoryBadge,
  relatedBlogs: dummyArticles
};
