import BlogNavigation from '../BlogNavigation.vue';
import { dummyLogo, dummyRoutes } from '@/testdata/testdata.js';

export default {
  title: 'Organisns/Nav/BlogNavigation',
  component: BlogNavigation,
  parameters: {
    notes: {
      summary: 'ナビゲーション'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BlogNavigation },
  template: '<blog-navigation v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  logoText: dummyLogo,
  routes: dummyRoutes
};
