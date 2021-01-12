import BaseText from './BaseText.vue';

export default {
  title: 'Atoms/BaseText',
  component: BaseText,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
};

const Template = () => ({
  components: { BaseText },
  template: '<base-text>Text</base-text>'
});

export const Default = Template.bind({});
