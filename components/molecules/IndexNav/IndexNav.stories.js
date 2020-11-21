import IndexNav from './IndexNav.vue';

export default {
  title: 'Molecules/IndexNav',
  component: IndexNav,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexNav },
  template: '<index-nav v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { isOpen: false };
