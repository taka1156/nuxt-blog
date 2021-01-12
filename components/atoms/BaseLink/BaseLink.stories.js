import BaseLink from './BaseLink.vue';

export default {
  title: 'Atoms/BaseLink',
  component: BaseLink
};

const Template = () => ({
  components: { BaseLink },
  template: '<base-logo :to="`/`">Text</base-logo>'
});

export const Default = Template.bind({});
