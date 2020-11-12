import NavIcon from '../NavIcon.vue';

export default {
  title: 'Atoms/Nav/NavIcon',
  component: NavIcon,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    notes: {
      summary: 'ナビゲーションの開閉のアイコン表示'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavIcon },
  template: '<nav-icon v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { isOpen: false };
