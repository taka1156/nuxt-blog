import ArticleTag from './ArticleTag.vue';
import { dummyTagBadges } from '__testdata__/testdata.js';

export default {
  title: 'Organisms/ArticleTag',
  component: ArticleTag
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleTag },
  template: '<article-tag v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { tags: dummyTagBadges };
