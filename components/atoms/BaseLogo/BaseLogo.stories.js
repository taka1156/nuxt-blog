import BaseLogo from './BaseLogo.vue';

export default {
  title: 'Atoms/BaseLogo',
  component: BaseLogo,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = () => ({
  components: { BaseLogo },
  template: '<base-logo>Text</base-logo>'
});

export const Default = Template.bind({});
