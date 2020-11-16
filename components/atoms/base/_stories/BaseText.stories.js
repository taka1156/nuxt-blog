import BaseText from '../BaseText.vue';

export default {
  title: 'Atoms/Base/BaseText',
  component: BaseText,
  argTypes: {
    useType: {
      control: {
        type: 'inline-radio',
        options: ['none', 'badge', 'pagenation']
      }
    },
    color: {
      control: {
        type: 'inline-radio',
        options: ['none', 'white', 'green']
      }
    }
  },
  parameters: {
    notes: {
      summary: 'テキスト'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseText },
  template: '<base-text v-bind="$props">Text</base-text>'
});

export const Default = Template.bind({});
Default.args = {
  useType: 'badge',
  color: 'white'
};
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
};
